import './ToDoLine.css';
import React, { useEffect, useState } from 'react';

function ToDoLine(){

    const [lines, setLines] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/todos")
            .then(resp => resp.json())
            .then((data) => {
                setLines(data)
            }, (e) => {
                console.log(e);
            })
    }, [])

    return (
        <>
            {lines.map( (line, index) => (
                <tr key={index}>
                    <td>{line.id}</td>
                    <td>{line.name}</td>
                    <td>{line.desc}</td>
                    <td>{line.state}</td>
                </tr>
            ))}
        </>
        );
}

export default ToDoLine;