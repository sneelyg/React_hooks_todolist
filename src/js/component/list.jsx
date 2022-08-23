import React, { useEffect, useState } from "react";
import { Tarea } from './tarea.jsx';

export const Lista = () => {

    const [inputValue, setInputValue] = useState("");
    const [tareas, setTareas] = useState([]);
    const TareaTrue = (index) => {
        setTareas(tareas[index].done = true)
    }

    useEffect(() => {
        putTasks(tareas);
    },
        [tareas])

    useEffect(() => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/sneelyg')
            .then(data => data.json())
            .then(response => setTareas(response))

    }, []);


    return (
        <div id="lista"
            className="container" style={{ width: "80%" }}>
            <h1>To Do List API</h1>

            <input type="text"
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
                style={{ width: "90%" }}
                onKeyUp={(event) => {
                    if (event.key === "Enter" && inputValue != "") {
                        setTareas([...tareas, { label: inputValue, done: false }]);
                        setInputValue("");
                        console.log("enter");
                    }
                }}
                placeholder="Agrega una tarea"
            />
            <div id="tareas">
                {
                    tareas.map((elemento, index) => {
                        if (elemento.done == false)
                            return (
                                <div key={index} > <Tarea indice={index} tareas={tareas} setTareas={setTareas}  tareapendiente={elemento.label} /></div>
                            )
                    })
                }

            </div>
        </div>
    )

}
/*
  Se agregue tarea a un arreglo
/ Luego, ese arreglo se escriba como objetos para la API
/ Enviar a la API
/ Recibir de la Api la neiuva lista de tareas
/ Luego, renderizar la nueva lista de tareas.
*/


const putTasks = (arr_tareas) => {
    let header = new Headers();
    header.append("Content-Type", "application/json")
    let cuerpo = JSON.stringify(arr_tareas);
    let requestOptions = {
        method: 'PUT',
        headers: header,
        body: cuerpo,
        redirect: 'follow'
    }
    fetch('https://assets.breatheco.de/apis/fake/todos/user/sneelyg', requestOptions)
        .then(data => data.json())
        .then(response => console.log(response))

}

/*
export const TareaTrue = (index) =>{
  setTareas( tareas[index].done = true)

}*/
