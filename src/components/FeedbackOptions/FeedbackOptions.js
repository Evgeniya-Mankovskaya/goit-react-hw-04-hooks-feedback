import React from "react";
import PropTypes from "prop-types";
import Feedback from "./Feedback";
import { v4 as uuidv4 } from "uuid";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <ul className={s.buttonList}>
      {options.map((option) => (
        <Feedback key={uuidv4()} option={option} onFeedback={onFeedback} />
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onFeedback: PropTypes.func,
};

export default FeedbackOptions;
