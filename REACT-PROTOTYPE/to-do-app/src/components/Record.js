import React from 'react';
import './Record.css'; 
import * as FaIcons from 'react-icons/fa';
import MicRecorder from 'mic-recorder-to-mp3'; 

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Record extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }
 
  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true }); 
        }).catch((e) => console.error(e));
    }
  };
 
  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        // console.log(blobURL)
        this.setState({ blobURL, isRecording: false });
        
        // send data back to other component attribute (Todo component)
        this.props.sendDataBack(blobURL);
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  render(){
    return (
      <div className="">
     
        <div className="start">
             <FaIcons.FaPlayCircle size="50" onClick={this.start} disabled={this.state.isRecording} className={this.state.isRecording ? 'recording' : ''}></FaIcons.FaPlayCircle>
        </div>

        <div className="stop">
             <FaIcons.FaStopCircle size="50" onClick={this.stop} disabled={!this.state.isRecording} className={this.state.isRecording ? '' : 'recording'}></FaIcons.FaStopCircle>
        </div>
          
          {/* <audio src={this.state.blobURL} controls="controls" /> */}

      </div>
    ); 
  }
}

export default Record;