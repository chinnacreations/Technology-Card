import './index.css'

const TechnologyCard = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-desc">{description}</p>
      <div className="img-con">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCard
