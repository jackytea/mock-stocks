import React, { useEffect } from "react";
import { Chart, registerables } from 'chart.js';

const InsightsChart = (props) => {
  const { id, purchases, styleSet } = props;
  Chart.register(...registerables);

  useEffect(() => {
    let mounted = true;

    const ctx = document.getElementById(id);
    const data = {
      labels: [],
      datasets: [{
        data: [],
        label: 'Initial Investment',
        backgroundColor: '#2563EB',
        borderColor: '#2563EB'
      }]
    }

    const optionsSet = {
      animation: true,
      plugins: {
        legend: {
          display: true
        },
      },
      responsive: true,
      scales: {
        x: {
          display: true
        },
        y: {
          display: true
        }
      }
    }

    const chartDrawn = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: optionsSet
    });

    if(mounted) {
      for(let i = 0; i < purchases.length && i < 5; i++) {
        data.labels.push(purchases[i].tickerBought)
        data.datasets[0].data.push(parseFloat(purchases[i].initialInvestment));
        chartDrawn.update()
      }
    }

    return () => {
      mounted = false
      chartDrawn.destroy();
    }
  }, [id, purchases])

  return (
    <div className={styleSet}>
      <canvas id={id}></canvas>
    </div>
  );
}

export default InsightsChart;