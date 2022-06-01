import React, { Component } from "react";
import { Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/notFound";
import LoginForm from "./components/users/loginForm";
import Home from "./components/home";
import AppRoute from "./Routes";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./MainLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import NoteLayout from "./components/layouts/NoteLayout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Logout from "./components/common/logout";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <AppRoute
            path="/register"
            component={LoginForm}
            layout={MainLayout}
          />
          <AppRoute path="/login" component={LoginForm} layout={MainLayout} />
          <ProtectedRoute path="/logout" component={Logout} />
          <AppRoute path="/home" component={Home} layout={MainLayout} />
          <ProtectedRoute exact path="/dashboard" component={DashboardLayout} />
          <ProtectedRoute
            exact
            path="/getting-start"
            component={DashboardLayout}
          />
          <ProtectedRoute exact path="/profile" component={DashboardLayout} />
          <ProtectedRoute exact path="/myprofile" component={DashboardLayout} />
          <ProtectedRoute exact path="/orders" component={DashboardLayout} />
          <ProtectedRoute exact path="/myRequests" component={DashboardLayout} />
          <ProtectedRoute
            exact
            path="/subscriptions"
            component={DashboardLayout}
          />
          <ProtectedRoute
            exact
            path="/notifications"
            component={DashboardLayout}
          />
          <ProtectedRoute path="/note/:type?" component={NoteLayout} />
          <AppRoute
            path="/not-found"
            component={NotFound}
            layout={MainLayout}
          />
          <Redirect from="/" exact to="/login" />
          <Redirect to="/not-found" />
        </Switch>
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default App;
