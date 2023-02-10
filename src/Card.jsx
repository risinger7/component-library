import './assets/css/Card.css'

export default function Card(props) {

    const {href ,imgAlt, imgSrc, text, title} = props
    
    return (
        <a href={href} target="_blank" className="card-container ">
            <div className="card-content">
                <h3>{title}</h3> 
                <p>{text}</p>
            </div>
            <img className="card-image" src={imgSrc} alt={imgAlt} />     
        </a>
    )
}
