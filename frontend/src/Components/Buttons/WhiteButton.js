import { Button } from "react-bootstrap";

export default function WhiteButton(props) {
    return (
        <Button variant="light" 
            onClick={props.onClick}
            className={props.className}
        >{props.children}</Button>
    )
}