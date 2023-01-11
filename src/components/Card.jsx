import star from '../assets/star.png'

export default function Card(props) {
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`./${props.card.coverImg}`} className='card-image' />
            <div className='card-details-container'>
                <img src={star} alt="Red Star Icon" className='card-star-image' />
                <span>{props.card.stats.rating} ({props.card.stats.reviewCount}) &#x2022; {props.card.location}</span>
            </div>
            <p className='card-description'>{props.card.title}</p>
            <p className='card-price'><strong>From ${props.card.price}</strong> / person</p>
        </section>
    )
}