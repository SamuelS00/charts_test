import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import FilterButtonDonutChart from './components/FilterButtonDonutChart';
import DonutChart from './components/DonutChart';
import LegendDonutChart from './components/LegendDonutChart';
import './style.css'

ChartJS.register(ArcElement, Tooltip, Legend);

// recebe arrays de labels.
// recebe arrays de valores desses labels.

export default function CallCountDonutChart() {
  const chartData = [
    { x: 'Corretiva', y: 8.1 },
    { x: 'Emergencial', y: 91.9 },
  ];

  const legendData = chartData.map((dataPoint) => ({
    name: dataPoint.x,
  }));

  const colors = ['black', 'red'];

  return (
    <div>
      <div className='filter-buttons-container'>
        <FilterButtonDonutChart content={'ORIGEM'} />
        <FilterButtonDonutChart content={'REDE'} />
        <FilterButtonDonutChart content={'FAMILIA'} />
      </div>
      <div className='donut-chart-container'>
        <DonutChart
          chartData={chartData}
          colors={colors} 
        />
      </div>
      <div className='legend-donut-chart-container' >
        <LegendDonutChart
          legendData={legendData}
          colors={colors}
        />
      </div>
    </div>
  );
}
