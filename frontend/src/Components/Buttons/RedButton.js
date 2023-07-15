import { Button } from "react-bootstrap";

export default function RedButton(props) {
    return (
        <Button variant="danger" 
            onClick={props.onClick}
            className={props.className}
        >{props.children}</Button>
    )
}