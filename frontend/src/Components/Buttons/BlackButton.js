import { Button } from "react-bootstrap";

export default function BlackButton(props) {
    return (
        <Button variant="dark" 
            onClick={props.onClick}
            className={props.className}
        >{props.children}</Button>
    )
}