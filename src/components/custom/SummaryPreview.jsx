import React from 'react'

function SummaryPreview({summaryData}) {
  return (
    <p className='text-xs'>{summaryData?.summary}</p>
  )
}

export default SummaryPreview