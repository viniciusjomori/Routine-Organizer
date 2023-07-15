import EmptyStarIcon from "../../Constants/Icons/EmptyStarIcon";
import FullStarIcon from "../../Constants/Icons/FullStarIcon";
import Constants from "../../Constants/Constants";
import BlackButton from "../Buttons/BlackButton";
import WhiteButton from "../Buttons/WhiteButton";
import "./Form.css"
import GreenButton from "../Buttons/GreenButton";
import YellowButton from "../Buttons/YellowButton";
import GreyButton from "../Buttons/GreyButton";
import RedButton from "../Buttons/RedButton";
import InputText from "../Input/InputText";

const Form = (props) => {

    function buttonDay(e, day) {
        e.preventDefault()
        props.buttonDay(day)
    }

    function register(e) {
        e.preventDefault()
        props.register()
    }

    return (
        <div className="form">
            <h3>Task Register</h3>
            <form>
                <div className="label_and_input">
                    <InputText
                        type="text"
                        id="name"
                        placeholder="Name"
                        onChange={props.onChange}
                        value={props.task.name}
                    />
                </div>

                <div className="label_and_input">
                    <InputText
                        type="time"
                        id="time"
                        onChange={props.onChange}
                        value={props.task.time}
                    />
                </div>

                <div className="label_and_input">
                    { Constants.WEEKDAYS.map(day => props.task.day !== day ? 
                            <WhiteButton key={day} onClick={(e) => buttonDay(e, day)}>{day}</WhiteButton>
                            : 
                            <BlackButton key={day}>{day}</BlackButton>) }
                </div>

                <div className="label_and_input" onClick={props.buttonImportant}>
                    <p>Important?</p>
                    {props.task.important === false ? 
                        <EmptyStarIcon width="30" height="30"/>
                        :
                        <FullStarIcon width="30" height="30"/>}
                </div>
        
            </form>
            {
                props.showRegisterForm === true ?
                <GreenButton onClick={register}>Register</GreenButton>
                :
                <>
                <YellowButton onClick={props.edit}>Edit</YellowButton>
                <RedButton onClick={props.delete}>Delete</RedButton>
                <GreyButton onClick={props.cancel}>Cancel</GreyButton>
                </>
            }
            
            
        </div>
        
    )
}

export default Form