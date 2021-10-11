import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ResponsiveRadar } from '@nivo/radar'
import { listAnalysesAC } from '../../utils/redux/actionCreators/actionCreators'

function DetailsBloodAnalyse(props) {
  const analyses = useSelector((state) => state.analysesReducer.analyses)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:4000/analyses/list')
      .then((res) => res.json())
      .then((data) => dispatch(listAnalysesAC(data)))
  }, [dispatch])

  let data = [
    {
      taste: 'normalALB',
      Max: 32,
      Min: 22,
      Fact: analyses.ALB,
    },
    {
      taste: 'normalAST',
      Max: 39,
      Min: 9,
      Fact: analyses.AST,
    },
    {
      taste: 'normalALT',
      Max: 52,
      Min: 8,
      Fact: analyses.ALT,
    },
    {
      taste: 'normalT_Pro',
      Max: 75,
      Min: 43,
      Fact: analyses.T_Pro,
    },
    {
      taste: 'normalALP',
      Max: 65,
      Min: 12,
      Fact: analyses.ALP,
    },
  ]

  return (
    <div style={{ height: 800 }}>
      <ResponsiveRadar
        data={data}
        keys={['Max', 'Min', 'Fact']}
        indexBy="taste"
        fontSize="23"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="cardinalClosed"
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={9}
        theme={{
          dots: {
            text: {
              fill: '#2d374d',
              fontSize: 12,
              fontWeight: 800,
            },
          },
        }}
        gridShape="linear"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={23}
        dotColor={{ from: 'color', modifiers: [] }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={4}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
      />
    </div>
  )
}

export default DetailsBloodAnalyse
