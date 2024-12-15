import { useState, useEffect } from "react";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const feedbackList = Object.keys(counter).map((key) => {
    return { key, value: counter[key] };
  });

  const updateFeedback = (feedbackType) => {
    setCounter((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setCounter({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = counter.good + counter.neutral + counter.bad;
  const positiveFeedback = Math.round((counter.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(counter));
  }, [counter]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          values={feedbackList}
          positiveFeedback={positiveFeedback}
          totalfeedback={totalFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </div>
  );
}

export default App;
