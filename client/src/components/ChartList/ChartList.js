import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initAnalysesAC } from '../../utils/redux/actionCreators/actionCreators'
import ChartBlood from '../ChartBlood/ChartBlood'

function ChartList(props) {
  const dispatch = useDispatch()
  const analyses = useSelector((state) => state.analysesReducer.analyses)

  useEffect(() => {
    fetch('http://localhost:4000/analyses')
      .then((res) => res.json())
      .then((data) => dispatch(initAnalysesAC(data)))
  }, [dispatch])


  return (
    <div style={{ height: 400 }}>
      <h3>Общий анализ крови</h3>
      {
        <ChartBlood
          analyses={analyses}
        />
      }
    </div>
  )
}

export default ChartList
