import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const Feedback = ({ option, onFeedback }) => {
  return (
    <li>
      <button className={s.buttonItem} onClick={() => onFeedback(option)}>
        {option}
      </button>
    </li>
  );
};
Feedback.propTypes = {
  option: PropTypes.string,
  onFeedback: PropTypes.func,
};
export default Feedback;
