
import './assets/css/Modal.css'
import img from "./assets/modal.jpg"
import { AiFillCloseCircle } from "react-icons/ai"

export default function Modal(props) {
    const open = props.open
    const onClose = props.onClose
    const size = props.size

    const styles = {
        size: {
            big: "modal-size-big",
            small: "modal-size-small"
        }
    }

    const classSize = styles.size[size]
    
    if(!open) return null

    return (

        <div className="overlay" onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} 
            className={`modal-container ${classSize}`}>

                <img className="modal-img" src={img}alt="" />
                <div className="rightside">
                    <AiFillCloseCircle onClick={onClose} size={40} className="modal-icon"/>
                    <div className="modal-content">
                        <p className="modal-text">This is a modal/popup popping up!</p>
                        <h3>Do you like popups?</h3>
                    </div>
                    <button className="modal-button redButton" onClick={onClose}>Love them!</button>
                    <button className="modal-button" onClick={onClose}>No.</button>
                </div>
                
            </div>
           
        </div>
    )
}