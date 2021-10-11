import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { patternDotsDef } from '@nivo/core'

function ChartBlood({ analyses }) {

  let data = [
    {
      id: 'dots',
      type: 'patternDots',
      background: 'inherit',
      color: '#74c476',
      size: 100,
      padding: 1,
      stagger: true,
    },
    {
      id: 'Результаты анализов',
      label: 'Анализы',
      value: analyses.chart,
      color: '#74c476',
    },
    {
      id: 'Отклонение от нормы',
      label: 'normal',
      value: (100 - analyses.chart).toFixed(1),
      color: 'hsl(181, 70%, 50%)',
    },
  ]
  return (
    
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={0}
        endAngle={360}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        activeInnerRadiusOffset={30}
        colors={{ scheme: 'nivo' }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        defs={[
          patternDotsDef('dots-pattern', {
            size: 4,
            padding: 3,
            stagger: false,
            background: '#26d959',
            color: '#33a02c',
          }),
          {
            id: 'dots-pattern',
            type: 'patternDots',
            size: 3,
            padding: 5,
            stagger: false,
            background: '#1ae031',
            color: '#2b393b',
          },
        ]}
        fill={[
          {
            match: {
              id: 'Результаты анализов',
            },
            id: 'dots-pattern',
          },
        ]}
        legends={[]}
      />
    
  )
}

export default ChartBlood
