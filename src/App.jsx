import { useState, useEffect } from "react";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const [counter, setCounter] = useState({ good: 0, neutral: 0, bad: 0 });

  const feedbackList = Object.keys(counter).map((key) => {
    return { key, value: counter[key] };
  });

  const updateFeedback = (feedbackType) => {
    setCounter((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
    if (feedbackType === "reset") {
      setCounter({ good: 0, neutral: 0, bad: 0 });
    }
  };
  const totalFeedback = counter.good + counter.neutral + counter.bad;
  const positiveFeedback = Math.round((counter.good / totalFeedback) * 100);

  useEffect(() => {
    if (positiveFeedback) {
      window.localStorage.setItem("Rating", ` ${Number(positiveFeedback)}%`);
    } else {
      window.localStorage.setItem("Rating", "0%");
    }
  }, [positiveFeedback]);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 && (
        <Feedback values={feedbackList} positiveFeedback={positiveFeedback} />
      )}
      {totalFeedback === 0 && <Notification />}
    </div>
  );
}

export default App;
