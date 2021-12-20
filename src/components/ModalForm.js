import './ModalForm.css';
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const initialFormData = Object.freeze({
    name: '',
    desc: '',
    state: '',
    id: 0
  });

function ModalForm(props) {

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        //e.preventDefault();
        console.log(formData);
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        };
        fetch('http://localhost:3001/todos', options)
            .then((res) => console.log('submitted'))
            .catch((err) => err)
    }

    const states = [
        {state: ''},
        {state: 'A faire'},
        {state: 'Tout juste commencé'},
        {state: 'En cours'},
        {state: 'Finie'}
    ]

    return (
        <>
            <Modal 
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>Task Data Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={ handleSubmit }>
                        <input
                            onChange={handleChange}
                            name="name"
                            type="text"
                            placeholder="Nom de la tâche *"
                            required
                        ></input>
                        <textarea
                            onChange={handleChange}
                            name="desc"
                            placeholder="Description de la tâche"
                        ></textarea>
                        <select
                            onChange={handleChange}
                            name="state"
                            required
                        >
                            {
                                states.map( (state, index) => (
                                    <option
                                        key={index}
                                        name="state"
                                        value={state.state}
                                        label={state.state + "*"}
                                    >
                                    </option>
                                ))
                            }
                        </select>
                        <Button
                            variant='primary'
                            type="submit"
                            onClick={ props.onHide }
                        >Ajouter</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={ props.onHide }>Fermer</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalForm;