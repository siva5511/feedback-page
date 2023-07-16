import {Component} from 'react'
import RatingBlock from '../RatingBlock'

import './index.css'

class Feedback extends Component {
  state = {rating: ''}

  ratingSubmission = () => {
    this.setState({rating: 'submitted'})
  }

  render() {
    const {rating} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const initialBlock = () => (
      <div className="sub-cont">
        <h1 className="heading-prop">
          How satisfied are you with our customer support performance
        </h1>
        <div className="emojis-cont">
          {emojis.map(eachRating => (
            <RatingBlock
              key={eachRating.id}
              eachRating={eachRating}
              ratingSubmission={this.ratingSubmission}
            />
          ))}
        </div>
      </div>
    )

    const secondBlock = () => (
      <div className="sub-cont">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer service performance
        </p>
      </div>
    )

    return (
      <div className="main-cont">
        <ul className="rating-blocks-container">
          {rating === '' ? initialBlock() : secondBlock()}
        </ul>
      </div>
    )
  }
}

export default Feedback
