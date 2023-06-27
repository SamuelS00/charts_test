import { VictoryLegend } from "victory";

export default function LegendDonutChart({ legendData, colors }: any) {
  return (
    <VictoryLegend 
      x={90} y={80}
      orientation="horizontal"
      symbolSpacer={10}
      gutter={15}
      data={legendData}
      colorScale={colors}
        style={{
        labels: {
          fontSize: 20,
        },
      }}
    />
  )
}