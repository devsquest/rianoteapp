import React, { Component } from "react";
import { Switch } from "react-router-dom";
import NoteTopNav from "../common/NoteTopnav";
import ProtectedRoute from "../common/ProtectedRoute";
import { getUser } from "../../services/authService";
import Note from "../Note";

class NoteLayout extends Component {
  state = {
    user: [],
  };
  async componentDidMount() {
    const { data: user } = await getUser();
    await this.setState({...this.state, user: user} );
  }
  render() {
    return (
      <React.Fragment>
        <NoteTopNav user = { this.state.user } />
        <Switch>
          <ProtectedRoute exact path="/note/:type?/:child?" component={Note} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default NoteLayout;
