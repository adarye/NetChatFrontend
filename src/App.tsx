// import React from 'react';
// import './App.css';
// import { cars } from './demo';
// import CardItem from './CardItem';

// const App: React.FC= () =>{
//   return (
//     <div className="App">
//       {
//         <ul>
//        {cars.map((car, index) => (
//           // <li key={index}>{car.name}</li>
//           <CardItem car={car}></CardItem>
//        ))
// }
//        </ul>
//       }
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Header, Icon, List } from "semantic-ui-react";

class App extends Component {
  state = {
    channels: [],
  };
  componentDidMount() {
    // this.setState({
    //   channels: [
    //     { id: 1, name: "Channel 1" },
    //     { id: 2, name: "Channel 2" },
    //     { id: 3, name: "Channel 3" },
    //   ],
    // });
    axios.get("http://localhost:5000/api/channels").then((res) => {
      this.setState({
        channels: res.data,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <Header as="h2" icon>
          <Icon name="settings" />
          Account Settings
          <Header.Subheader>
            Manage your account settings and set e-mail preferences.
          </Header.Subheader>
        </Header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <List>
            <List.Item>
            {this.state.channels.map((channel: any) => (
              <List.Content key={channel.id}>{channel.name}</List.Content>
            ))}
              
            </List.Item>
          </List>
        </header>
      </div>
    );
  }
}

export default App;
