import styles from "./Options.module.css";

function Options({ updateFeedback, totalFeedback, resetFeedback }) {
  const handleClick = (feedbackType) => {
    updateFeedback(feedbackType);
  };
  return (
    <div>
      <ul className={styles.options}>
        <li>
          <button onClick={() => handleClick("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => handleClick("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => handleClick("bad")}>Bad</button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button onClick={resetFeedback}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Options;
