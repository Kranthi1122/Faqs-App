// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {objectList: props.faqsList}
  }

  changeButton = id => {
    this.setState(prevState => ({
      objectList: prevState.objectList.map(eachList => {
        if (id === eachList.id) {
          return {...eachList, button: !eachList.button}
        }
        return eachList
      }),
    }))
  }

  render() {
    const {objectList} = this.state
    return (
      <div className="main">
        <h1 className="main-heading">FAQs</h1>
        <ul>
          {objectList.map(eachList => (
            <FaqItem
              faqlist={eachList}
              changeButton={this.changeButton}
              key={eachList.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
