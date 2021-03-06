import React from 'react';
import './InputDevice.css';

interface StateInterface {
  monitoring: boolean
  context?: AudioContext
  analyser?: AnalyserNode
  dataArray?: Uint8Array
  level: number
}

interface PropsInterface {
  deviceInfo: InputDeviceInfo
}

class AudioInputDevice extends React.Component<PropsInterface, StateInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      monitoring: false,
      level: 0
    }
  }

  render() {
    return (
      <article className="input-device">
        <div className="input-device-name">
          <p>{this.props.deviceInfo.label}</p>
        </div>
        {this.state.monitoring ?
          <button onClick={() => {this._stop()}}>stop</button>:
          <button onClick={() => {this._start()}}>play</button>
        }
        <progress max="300" value={this.state.level}></progress>
      </article>
    );
  }

  private async _start() {
      const context = new AudioContext();
      const stream = await navigator.mediaDevices.getUserMedia({audio: {deviceId: this.props.deviceInfo.deviceId}});
      const microphone = context.createMediaStreamSource(stream);
      const analyser = context.createAnalyser();
      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      microphone.connect(analyser);
      analyser.connect(context.destination);
      this.setState({monitoring: true, context, analyser, dataArray});
      this._tick();
  }

  private _stop() {
    this.state.context?.close();
    this.setState({monitoring: false});
  }

  private _tick() {
    if(!this.state.analyser || !this.state.dataArray) return;
    try{
      this.state.analyser.getByteTimeDomainData(this.state.dataArray)
      const level = this.state.dataArray.reduce((a,b)=>Math.max(a,b));
      this.setState({ level });
    } catch(e) {
      console.error(e);
      return
    }
    requestAnimationFrame(this._tick.bind(this));
  }
}

export default AudioInputDevice;
