import './App.css';
import { useState } from 'react';
import ModalForm from './components/ModalForm';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoLine from './components/ToDoLine';



function App() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='main'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Etat</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <ToDoLine/>
                </tbody>
            </table>
            <div>
                <Button className='modalButton' variant='primary' onClick={() => {setModalShow(true)}}>Ajouter</Button>
                <ModalForm
                    show={ modalShow }
                    onHide={ () => {setModalShow(false)} }
                ></ModalForm>
            </div>
        </div>
    );
}

export default App;
