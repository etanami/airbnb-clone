import Star from "../images/star.png";

export default function Card(props) {
  let badgeText
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if(props.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={require(`../images/${props.img}`)} alt="Zafferes" className="card--image"/>
      <div className="card--stats">
        <img src={Star} alt="" className="card--star"/>
        <span>{props.rating}</span>
        <span className="gray spacing">({props.reviewCount})</span>
        <span className="gray spacing">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}