import Constants from "../../Constants/Constants"
import DayTasks from "../DayTasks/DayTasks"
import "./RoutineOrganizer.css"

const RoutineOrganizer = (props) => {

    return (
        <div className="routine-organizer">
            {Constants.WEEKDAYS.map((day => 
                <DayTasks
                    key={day}
                    day={day}
                    tasks={props.tasks.filter(task => task.day===day)}
                    edit_delete_cancel={props.edit_delete_cancel}
                />))}
        </div>
    )
}

export default RoutineOrganizer