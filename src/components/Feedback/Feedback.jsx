const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      {Object.entries(feedback).map(([key, value]) => (
        <li key={key}>
          <span>
            {key}: {value}
          </span>
        </li>
      ))}

      <li>Total feedback: {totalFeedback}</li>
      <li>Positive feedback: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
