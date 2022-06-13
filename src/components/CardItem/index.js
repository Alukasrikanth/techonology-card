// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsDetails} = props
  const {className, imgUrl, title, description} = cardsDetails
  return (
    <li className={`${className}card-container`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="image" alt="title" />
      </div>
    </li>
  )
}

export default CardItem
