import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      {options.map(option => (
        <button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          name={option}
          key={option}
          className={css.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
