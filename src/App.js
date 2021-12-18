import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  stateFeedback = (e) => {
    this.setState((prevState) => ({
      [e]: prevState[e] + 1,
    }));
  };
  countTotalFeedback = function () {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = function () {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    let total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onFeedback={this.stateFeedback}
        />
        <Section title="Statistics" />
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        )}
      </>
    );
  }
}
export default App;
