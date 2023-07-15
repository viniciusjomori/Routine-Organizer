import { Button } from "react-bootstrap";

export default function GreyButton(props) {
    return (
        <Button variant="secondary" 
            onClick={props.onClick}
            className={props.className}
        >{props.children}</Button>
    )
}