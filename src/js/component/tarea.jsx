import React, { useState } from "react";


export const Tarea = (props) => {

    const [displayTarea, setdisplayTarea] = useState("");

    return (
        <div

            className={`tarea d-flex justify-content-between ${displayTarea}`}>

            <div className="nombre-tarea ml-5  ">
                <p className="ml-5 ">{props.tareapendiente}</p>
            </div>
            <div id={props.indice} className="cierre-tarea col-1">
                <i className="fas fa-window-close"

                    onClick={(e) => {
                        console.log(e.target.parentNode.id);
                        var indexLista = e.target.parentNode.id; {
                            props.setTareas(
                                props.tareas.map((e, i) => {
                                    if (indexLista == i) {
                                        e.done = true;
                                    }
                                    return e;
                                })
                            );
                        }

                    }

                    }
                ></i>
            </div>
        </div>

    )
}
