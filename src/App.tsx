import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, GridColumn } from "semantic-ui-react";
import SidePanel from "./components/SidePanel/SidePanel";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import Messages from "./components/Messages/Messages";
import MetaPanel from "./components/MetaPanel/MetaPanel";
class App extends Component {
 
  render() {
    return (
      <Grid columns="equal" className="App">
        <ColorPanel />
        <SidePanel />
        <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
        </Grid.Column>
        <GridColumn width={4}>
        <MetaPanel />
        </GridColumn>
      </Grid>
    );
  }
}

export default App;
