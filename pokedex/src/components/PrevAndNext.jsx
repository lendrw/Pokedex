import React from 'react'

const PrevAndNext = ({ onPrev, onNext }) => {
  return (
    <div>
        <button className="btn-prev" onClick={onPrev}>
            Previous
        </button>
        <button className="btn-next" onClick={onNext}>
            Next
        </button>
    </div>
  )
}

export default PrevAndNext