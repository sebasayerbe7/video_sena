import React from "react"
import { useState, useEffect } from "react";


const FormUP = ({ handleSubmit }) => {

    const [video,  setvideo] = useState("");

    const [title,  settitle] = useState("");

    const [description,  setdescription] = useState("");

    const [state, setstate] = useState ("");

    const [miniature, setminiature] = useState("");

    const [idUser, setidUser] = useState ("");

    const [idCategory, setidCategory] = useState ("");

    const handleSubmitLocal = (e) => {
        e.preventDefault();

          // Enviar datos a la API
        const apiUrl = "http://127.0.0.1:8000/videos/";
        const data = {
            video,
            title,
            description,
            state,
            miniature,
            idUser,
            idCategory,
    };

    console.log(data)

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .catch((data) => {
        console.log(data);
      });
    }; 

    return(
        <div>
            <form action="" className="Form" onSubmit={handleSubmitLocal}>
            <h1 className="Form-title">Subir Video</h1>
            <input type="file" name="Archivo" id="Archivo" placeholder="Subir Archivo" className="Form-input" onChange={(e) => setvideo(e.target.value)}  /><br />
            <input type="text" name="Titulo" id="Titulo" placeholder="Titulo Del Video" className="Form-input" onChange={(e) => settitle(e.target.value)}  /><br />
            <input type="text" name="Descripcion" id="Descripcion" placeholder="Descripcion Del Video" className="Form-input" onChange={(e) => setdescription(e.target.value)} /><br />
            <select name="Estado" id="Estado" className="Form-input" onChange={(e) => setstate(e.target.value)}><br />
                <option value="0">Estado</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select><br />
            <input type="file" name="Miniature" id="Miniature" placeholder="Subir imagen" className="Form-input" onChange={(e) => setminiature(e.target.value)} /> <br />
            <input type="text" name="IdUser" id="IdUser" placeholder="Ingrese el id del usuario" className="Form-input" onChange={(e) => setidUser(e.target.value)} /> <br />
            <input type="text" name="IdCategoria" id="IdCategoria" placeholder="Ingrese el Id De La Categoria" className="Form-input" onChange={(e) => setidCategory(e.target.value)} /> <br />            
            <input type="submit" value="Subir video" className="Form-Button" />
            </form>
        </div>
    );
};

export default FormUP;