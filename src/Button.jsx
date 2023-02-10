import './assets/css/Button.css'
import { useState } from "react"

export default function Button (props) {

    const { color, size, title, isDisabled} = props
    const [active, setActive] = useState(true)

    const styles = {
        color: {
            red: "redButton",
            white: "white",
        },
        size: {
            big: "paddBig",
            small: "paddSmall",
        },
    }

    function handleActive() {   
        if(active) {
            setActive(false)
        } else setActive(true)

        
    }

    const buttonColor = styles.color[color]
    const buttonSize = styles.size[size]

    return (
        <button 
            disabled={isDisabled} 
            onClick={handleActive} 
            className={`marg ${buttonColor} ${buttonSize} ${active ? 'button' : 'black'}`}>
            {title}
        </button>
    )
}