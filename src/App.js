import React from 'react';
import HookMqtt from './components/Hook/'
// Hook or Class
// import ClassMqtt from './components/Class/'
import './App.css';
// Import uibuilder enabled component
import UserData from './scenes/UserData';

class App extends React.Component {
  constructor(props) {
    super(props);
    // First the Parent creates a state for what will be passed
    this.state = { deviceID: '', deviceIP: ''};
    this.setUserInfo = this.setUserInfo.bind(this);
  }
  // A method is provided for the child component to update the state of the
  // userInfo
  setUserInfo(id, ip) {
    this.setState({deviceID:id, deviceIP:ip});
  }
 
  render() {
    const isInjected = this.state.deviceID.length > 0;
    return (
      <div className="App">
      {isInjected
        ? <HookMqtt userInfo={this.state} />  
        : <UserData title="User Data" handleMsgReceived={this.setUserInfo} ></UserData>
      }

      </div>
    );
  }
};
//function App() {
  //return (
    //<div className="App">
      //<HookMqtt />      
      //{/* THIS IS THE UIBUILDER COMPONENT */}
      //<UserData title="User Data"></UserData>     
      //{/* Hook or Class */}
      //{/* <ClassMqtt /> */}
    //</div>
  //);
//}

export default App;
