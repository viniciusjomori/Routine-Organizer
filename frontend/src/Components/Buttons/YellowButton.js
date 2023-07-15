import { Button } from "react-bootstrap";

export default function YellowButton(props) {
    return (
        <Button variant="warning" 
            onClick={props.onClick}
        >{props.children}</Button>
    )
}