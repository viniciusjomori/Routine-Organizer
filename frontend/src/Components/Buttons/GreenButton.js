import { Button } from "react-bootstrap";

export default function GreenButton(props) {
    return (
        <Button 
            variant="success" 
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
}