const Options = ({ options, updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
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
