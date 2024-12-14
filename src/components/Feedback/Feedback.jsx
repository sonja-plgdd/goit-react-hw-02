import s from "./Feedback.module.css";

function Feedback({ values, positiveFeedback }) {
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
      </ul>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}

export default Feedback;
