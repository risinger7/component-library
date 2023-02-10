
import './assets/css/Badge.css'

import { AiFillClockCircle } from "react-icons/ai"
import { AiFillAudio } from "react-icons/ai"
import { AiFillBulb } from "react-icons/ai"

export default function Badge(props) {

    const color = props.color
    const icon = props.icon
    const size = props.size
    const title = props.title

    const styles = {
        color: {
            red: "redBadge",
            blue: "blueBadge",
            white: "whiteBadge",
            none: "noBackgroundBadge",
            },

        size: {
            small: "badgeSmall",
            medium: "badgeMedium",
            big: "badgeBig",
        },

        icon: {
            icon1: <AiFillBulb />,
            icon2: <AiFillAudio  />,
            icon3: <AiFillClockCircle />, 

        }
    }

    const badgeIcon = styles.icon[icon]
    const badgeColor = styles.color[color]
    const badgeSize = styles.size[size]

    return(
        <div className={`badge-container ${badgeSize} ${badgeColor}`}>
            <div className="badge-icon">{badgeIcon}</div> 
            <p>{title}</p>  
        </div>
    )
}