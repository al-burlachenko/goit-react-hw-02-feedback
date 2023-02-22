const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttons">
      {options.map(option => (
        <button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          name={option}
          key={option}
          className="btn"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
