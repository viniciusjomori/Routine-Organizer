import FullStarIcon from "../../Constants/Icons/FullStarIcon"
import "./DayTasks.css"

const DayTasks = (props) => {

    return (
        <div className="day-tasks" key={props.day}>
            <h2>{props.day}</h2>
            <hr/>
            {props.tasks.sort((a,b) => {
                if(a.time<b.time) {
                    return -1
                } else if (a.time>b.time) {
                    return 1
                }
                return 0
                })
            .map(task => 
                <p onClick={() => props.edit_delete_cancel(task)} key={task.id}>{task.time}: {task.name} {task.important ? 
                <FullStarIcon width="15px" height="15px"/> 
                : 
                null}
                </p>
            )}
        </div>
        
    )
}

export default DayTasks