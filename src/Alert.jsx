
import './assets/css/Alert.css'
import { GoAlert } from "react-icons/go"
import { IoMdAlert } from "react-icons/io"

export default function Alert(props) {

    const { color, icon, func } = props

    const styles = {
        backgroundColor: {
            red: "redAlert",
            blue: "blueAlert",
            white: "whiteAlert",
            none: "noBackgroundAlert",
            },
        icon: {
            icon1: <GoAlert />,
            icon2: <IoMdAlert />,
        }
    }
    const alertIcon = styles.icon[icon]
    const classColor = styles.backgroundColor[color]

    return(
        <div>
            <div className={`marg alert ${classColor}`}
            onClick={func}>
                Alert here with some alert text! <span className="marg">{alertIcon}</span>
            </div>   
        </div>
    )
}