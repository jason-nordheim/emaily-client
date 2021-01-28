import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
// redux
import * as actions from "../actions";

// components
import Header from "./Header";
const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>Surveys New</h1>;
//const Surveys = () => <h1>Surveys</h1>;
const Landing = () => <h1>Landing</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

/**
 * wrap the app component with react-redux's connect function
 * and insert action creators (actions) as props
 */
export default connect(null, actions)(App);
