import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import s from "./App.module.css";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const stateFeedback = (name) => {
    if (name === "good") {
      setGood((prevGood) => prevGood + 1);
    }
    if (name === "neutral") {
      setNeutral((prevNeutral) => prevNeutral + 1);
    }
    if (name === "bad") {
      setBad((prevBad) => prevBad + 1);
    }
  };
  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);
  return (
    <div className={s.App}>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onFeedback={stateFeedback}
      />
      <Section title="Statistics" />
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={countPositiveFeedbackPercentage}
        />
      )}
    </div>
  );
};
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   stateFeedback = (e) => {
//     this.setState((prevState) => ({
//       [e]: prevState[e] + 1,
//     }));
//   };

//   countTotalFeedback = function () {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
//   countPositiveFeedbackPercentage = function () {
//     return Math.floor((this.state.good * 100) / this.countTotalFeedback());
//   };

//   render() {
//     let total = this.countTotalFeedback();
//     return (
//       <>
//         <Section title="Please leave feedback" />
//         <FeedbackOptions
//           options={["good", "neutral", "bad"]}
//           onFeedback={this.stateFeedback}
//         />
//         <Section title="Statistics" />
//         {total === 0 ? (
//           <Notification message="No feedback given" />
//         ) : (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positiveFeedback={this.countPositiveFeedbackPercentage()}
//           />
//         )}
//       </>
//     );
//   }
// }
export default App;
