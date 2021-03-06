import React, {useState, useEffect} from "react";
import {fetchDailyData, fetchData} from "../../api";
import {Line, Bar} from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({data: {confirmed, deaths, recovered}, country}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({date}) => date),
        datasets: [
          {
            data: dailyData.map(({confirmed}) => confirmed),
            label: "Infected",
            borderColor: "#ff3333",
            backgroundColor: "rgb(255, 51, 51, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map(({deaths}) => deaths),
            label: "Deaths",
            borderColor: "rgba(50, 50, 50, 1)",
            backgroundColor: "rgba(50, 50, 50, 0.8)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(255,0,0,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(138, 138, 138, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: {dislpay: false},
        title: {display: true, text: `Currrent state in ${country}`},
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
