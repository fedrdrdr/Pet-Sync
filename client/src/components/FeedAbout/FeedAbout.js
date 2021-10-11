import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FeedDitail from '../FeedDitail/FeedDitail'

function FeedAbout() {
  const feedArray = useSelector((state) => state.feedReducer.feed)
  const { id } = useParams()
  return (
    <div>
      {feedArray.map(
        (el) => el._id === id && <FeedDitail key={el._id} value={el} />
      )}
    </div>
  )
}

export default FeedAbout
