import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewColor({addColor}){

    const navigate = useNavigate();

    const [nameField, setNameField] = useState("");
    const [hexField, setHexField] = useState("#000000");

    function updateField(evt){
        const directory = {
                            name : setNameField,
                            hex : setHexField                         
                          }

        directory[evt.target.name](evt.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        addColor(nameField, hexField);
        navigate("/colors");  //it says navigate is not a function.  WTH!!
    }

    const form = (
        <form style={{marginTop: "40%"}} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input name='name' id="name" type="text" placeholder="name" value={nameField} onChange={updateField}/> 
            <label htmlFor="hex">Color</label>
            <input name="hex" id="hex" type="color" value={hexField} onChange={updateField}/>
            <br />
            <input type="submit"/>
        </form>
    );
    
    return form;
}