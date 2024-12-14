import styles from "./Options.module.css";

function Options({ updateFeedback, totalFeedback }) {
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
            <button onClick={() => handleClick("reset")}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Options;
