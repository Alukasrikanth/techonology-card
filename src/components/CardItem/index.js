// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsDetails} = props
  const {className, imageUrl, heading, description} = cardsDetails
  return (
    <li className={`${className}card-container`}>
      <h1 className="heading">{heading}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img src={imageUrl} className="image" alt="heading" />
      </div>
    </li>
  )
}

export default CardItem
