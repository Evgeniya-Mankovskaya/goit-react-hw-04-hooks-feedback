import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={s.statisticsList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positiveFeedback}%</li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
export default Statistics;
