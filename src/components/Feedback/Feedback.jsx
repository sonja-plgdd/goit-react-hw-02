import s from "./Feedback.module.css";

function Feedback({ values, positiveFeedback, totalfeedback }) {
  return (
    <div>
      <ul className={s.feedbacklist}>
        {values.map((value) => {
          return (
            <li key={value.key}>
              {value.key} : {value.value}
            </li>
          );
        })}
        <li>Total: {totalfeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}

export default Feedback;
