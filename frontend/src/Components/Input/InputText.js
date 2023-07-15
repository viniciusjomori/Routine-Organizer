import { Form } from "react-bootstrap";

export default function InputText(props) {
    return (
        <Form.Control
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            onChange={props.onChange}
            value={props.value}
        />
    )
}