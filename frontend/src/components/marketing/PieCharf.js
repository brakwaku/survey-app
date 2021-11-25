import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import styled from "styled-components";

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;

  > canvas {
    width: 100%;
    height: 100%;
  }
`;

const PieCharf = ({ data, chartType, graphTitle, labelColor, canvasId }) => {
  useEffect(() => {
    const xLabel = [];
    const yLabel = [];

    const getData = () => {
      data.forEach((item) => {
        xLabel.push(item.name);
        yLabel.push(item.count);
      });
    };

    getData();

    const ctx = document.getElementById(canvasId);
    let myChart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: xLabel,
        datasets: [
          {
            label: graphTitle,
            data: yLabel,
            backgroundColor: [
              "rgb(237, 244, 226)",
              "rgb(211, 228, 183)",
              "rgb(181, 210, 136)",
              "rgb(151, 191, 88)",
              "rgb(129, 178, 52)",
              "rgb(107, 164, 16)",
              "rgb(99, 156, 14)",
              "rgb(88, 146, 12)",
              "rgb(78, 137, 9)",
              "rgb(60, 120, 5)",
              "rgb(203, 255, 167)",
              "rgb(173, 255, 116)",
              "rgb(143, 255, 65)",
              "rgb(128, 255, 39)",
            ],
            borderColor: "white",
            // [
            //   "rgb(224, 239, 244)",
            //   "rgb(179, 215, 227)",
            //   "rgb(128, 188, 209)",
            //   "rgb(77, 161, 191)",
            //   "rgb(38, 141, 177)",
            //   "rgb(0, 121, 163)",
            //   "rgb(0, 113, 155)",
            //   "rgb(0, 102, 145)",
            //   "rgb(0, 92, 136)",
            //   "rgb(0, 73, 119)",
            //   "rgb(165, 214, 255)",
            //   "rgb(114, 191, 255)",
            //   "rgb(63, 168, 255)",
            //   "rgb(37, 157, 255)",
            // ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: labelColor,
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [canvasId, data, chartType, graphTitle, labelColor]);
  return (
    <ChartWrapper>
      <canvas id={canvasId}></canvas>
    </ChartWrapper>
  );
};

export default PieCharf;
