import './index.css'

const RatingBlock = props => {
  const {eachRating, ratingSubmission} = props
  const {name, imageUrl} = eachRating

  const rSub = () => {
    ratingSubmission()
  }
  return (
    <li className="rating-block">
      <img onClick={rSub} className="emoji-prop" src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default RatingBlock
