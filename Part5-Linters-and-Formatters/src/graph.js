import { setDayNames, setTemperatureOfDays } from "./set-day-descr-temps.js";
import { DateTime } from "luxon";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export let myChart = null;

// Get todays day
export const todaysDate = DateTime.local().day + 1;

export const drawGraph = (dayLabels, temperatureData) => {
    const ctx = document.getElementById("myChart").getContext("2d");

    if(myChart != null) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dayLabels,
        datasets: [
          {
            label: "Temperature",
            data: temperatureData,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            fill: false,
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
};

export const createGraphWithValues = (responseTemperatureValues) => {
  const temperatures = setTemperatureOfDays(responseTemperatureValues);
  const dayLabels = setDayNames(todaysDate);
  dayLabels.pop();

  drawGraph(dayLabels, temperatures);
};