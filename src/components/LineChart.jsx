import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import Chart from 'chart.js/auto';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, timePeriod }) => {
  const coinPrice = [];
  const coinTimeStamp = [];
  const tpFlag = timePeriod.slice(-1);

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    const formatDate = new Date(coinHistory?.data?.history[i].timestamp * 1000)
      .toLocaleDateString()
      .substring(0, 5);

    const formatTime = new Date(coinHistory?.data?.history[i].timestamp * 1000)
      .toLocaleTimeString()
      .substring(0, 5);

    if (tpFlag === 'h' || tpFlag === 'm') {
      coinTimeStamp.push(formatTime);
    } else {
      coinTimeStamp.push(formatDate);
    }
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
