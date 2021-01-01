import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import UpIcon from '../../public/icons/up.svg';
import DownIcon from '../../public/icons/down.svg';
import {
  ChartBtnGroup,
  ChartBtn,
  ChartContainer,
  ChartCanvasContainer,
  ChartLogo,
  ChartTitle,
  ChartTitleText,
  ChartTitleValue,
  ChartTitleValueText,
} from './ChartElements';

const initialData = [0, 0, 0, 0, 0, 0, 0];

const ChartComponent = ({ name }) => {
  const [generator, setGenerator] = useState(null);
  const [chartData, setChartData] = useState({});
  const [sum, setSum] = useState(0);

  const getRandomInt = () => {
    return initialData.map(el => Math.floor(Math.random() * 5000) + 200)
  }

  const chart = (data) => {
    setChartData({
      labels: ["23 сен", "24 сен", "25 сен", "26 сен", "27 сен", "28 сен", "29 сен"],
      datasets: [
        {
          backgroundColor: 'rgba(46, 113, 243, 0.1)',
          borderWidth: 2,
          borderColor: '#2E71F3',
          data: data,
          pointRadius: 3,
          pointBorderWidth: 3,
          pointBackgroundColor: '#fff',
          pointHoverBorderColor: 'red',
          pointHoverBorderWidth: 3,
          pointHoverRadius: 3,
          pointHoverZindex: 32222342,
        }
      ],
    });
  };

  useEffect(() => {
    let newData = getRandomInt();
    chart(newData);
    setSum(newData.reduce((t, i) => t + i))
    if (!generator) {
      let startGeneratingData = setInterval(() => {
        let newValues = getRandomInt();
        chart(newValues);
        setSum(newValues.reduce((t, i) => t + i));
      }, 3000);
      setGenerator(startGeneratingData);
    };
    return () => {
      clearInterval(generator);
    }
  }, []);

  return (
    <ChartContainer>
      <ChartBtnGroup>
        <ChartBtn className="activeChartBtn">День</ChartBtn>
        <ChartBtn>Неделя</ChartBtn>
        <ChartBtn>Месяц</ChartBtn>
      </ChartBtnGroup>
      <ChartCanvasContainer>
        <ChartTitle>
          <ChartTitleText>Выручка:</ChartTitleText>
          <div>
            <ChartTitleValue>{sum}</ChartTitleValue>
            <ChartTitleValueText>руб.</ChartTitleValueText>
            {
              sum > 20000 ? <UpIcon className="progressIcon" /> : <DownIcon className="progressIcon" />
            }
          </div>
        </ChartTitle>
        <ChartLogo src={`${name}.png`} />
        <Line data={chartData} options={{
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 5,
                  beginAtZero: false,
                  padding: 20,
                  fontColor: "rgba(0, 0, 0, 0.5)",
                  fontFamily: "'Jost', sans-serif",
                  fontStyle: "bold",
                  callback: function (value) {
                    return value / 1000 + ' тыс. ₽';
                  }
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: "rgba(0, 0, 0, 0.1)",

                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 7,
                  beginAtZero: false,
                  padding: 17,
                  fontColor: "rgba(0, 0, 0, 0.5)",
                  fontFamily: "'Jost', sans-serif",
                  fontStyle: "bold",
                },
                gridLines: {
                  display: false,
                }
              }
            ]
          },
          tooltips: {
            xPadding: 15,
            yPadding: 10,
            cornerRadius: 0,
            backgroundColor: "#fff",
            titleFontColor: "rgba(0, 0, 0, 0.5)",
            titleFontFamily: "'Jost', sans-serif",
            titleFontSize: 11,
            bodyFontColor: "#000000",
            bodyFontFamily: "'Jost', sans-serif",
            bodyFontSize: 13,
            displayColors: false,
            caretSize: 0,
            callbacks: {
              title: function (tooltipItems) {
                return `Выручка за ${tooltipItems[0].xLabel}тября`
              },
              label: function (tooltipItem) {
                return `${Math.round(tooltipItem.yLabel * 100) / 100} ₽`;
              }
            }
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 90,
              bottom: 0
            }
          }
        }} />
      </ChartCanvasContainer>
    </ChartContainer>
  );
};

export default ChartComponent;
