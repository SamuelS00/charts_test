import { VictoryPie } from 'victory'

function formatPercentage(value: string) {
  const formattedValue = String(value).replace('.', ',');
  const formattedPercentage = `${formattedValue}%`;
  return formattedPercentage;
}

export default function DonutChart({ chartData, colors }: any) {
  return (
    <VictoryPie
      data={chartData}
      height={400}
      width={440}
      colorScale={colors}
      labelRadius={95}
      innerRadius={80}
      padding={70}
      labels={({ datum }) => formatPercentage(datum.y)}
      style={{
        labels: {
        fill: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAnchor: 'middle'
        },
      }}
    />
  )
}
