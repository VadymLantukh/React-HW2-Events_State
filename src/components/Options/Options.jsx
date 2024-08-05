import css from './Options.module.css'

const Options = ({ options, updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.boxOptions}>
      {Object.keys(options).map(option => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};
export default Options;
