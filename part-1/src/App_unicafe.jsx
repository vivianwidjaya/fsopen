// unicafe

import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const History = ({ allClicks }) => {
  if (allClicks === 0) {
    return <div>No feedback has been given yet.</div>;
  }
  return null;
};

const Statistics = ({ statistics }) => {
  return (
    <table>
      <tbody>
        <StatisticLine
          text="good"
          value={statistics.statisticsType[0].statisticsValue}
        />
        <StatisticLine
          text="neutral"
          value={statistics.statisticsType[1].statisticsValue}
        />
        <StatisticLine
          text="bad"
          value={statistics.statisticsType[2].statisticsValue}
        />
        <StatisticLine
          text="average"
          value={statistics.statisticsType[3].statisticsValue}
        />
        <StatisticLine
          text="positive"
          value={statistics.statisticsType[4].statisticsValue + " %"}
        />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [allClicks, setAllClicks] = useState(0);

  const statistics = {
    statisticsName: "statistics",
    statisticsType: [
      {
        statiticsName: "good",
        statisticsValue: good,
      },
      {
        statiticsName: "neutral",
        statisticsValue: neutral,
      },
      {
        statiticsName: "bad",
        statisticsValue: bad,
      },
      {
        statiticsName: "average",
        statisticsValue: average,
      },
      {
        statiticsName: "positive",
        statisticsValue: positive,
      },
    ],
  };

  const handleGood = () => {
    setAllClicks(allClicks + 1);
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedAll = updatedGood + bad + neutral;
    setAll(updatedAll);
    const updatedAverage = (updatedGood - bad) / updatedAll;
    setAverage(updatedAverage);
    const updatedPositive = (updatedGood / updatedAll) * 100;
    setPositive(updatedPositive);
  };

  const handleNeutral = () => {
    setAllClicks(allClicks + 1);
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const updatedAll = updatedNeutral + good + bad;
    setAll(updatedAll);
    const updatedAverage = (good - bad) / updatedAll;
    setAverage(updatedAverage);
    const updatedPositive = (good / updatedAll) * 100;
    setPositive(updatedPositive);
  };

  const handleBad = () => {
    setAllClicks(allClicks + 1);
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const updatedAll = all + 1;
    setAll(updatedAll);
    const updatedAverage = (good - updatedBad) / updatedAll;
    setAverage(updatedAverage);
    const updatedPositive = (good / updatedAll) * 100;
    setPositive(updatedPositive);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <History allClicks={allClicks} />
      {allClicks > 0 && (
        <Statistics statistics={statistics} allClicks={allClicks} />
      )}
    </div>
  );
};

export default App;
