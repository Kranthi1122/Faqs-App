// Write your code here.

import './index.css'

const FaqItem = props => {
  const {faqlist, changeButton} = props
  const {id, answerText, button} = faqlist
  const plusButton = () => {
    changeButton(id)
  }

  const symbol = button ? (
    <button type="button" onClick={plusButton} className="image">
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
        alt="minus"
      />
    </button>
  ) : (
    <button type="button" onClick={plusButton} className="image">
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        alt="plus"
      />
    </button>
  )

  const para = button ? (
    <div>
      <hr />
      <p>{answerText}</p>
    </div>
  ) : (
    ''
  )
  return (
    <li>
      <div className="top-box">
        <h1 className="question">{faqlist.questionText}</h1>
        {symbol}
      </div>
      {para}
    </li>
  )
}

export default FaqItem
