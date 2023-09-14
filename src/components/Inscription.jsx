import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inscription = () =>{
    
    const navigate = useNavigate();
    const [nom, setNom] =useState("")
    const [description, setDescription] =useState("")
    const [contact, setContact] =useState("")
    const [mail, setMail] =useState("")
    const [pass, setPass] =useState("")
    const [RNE, setRNE] =useState("")

    const insc = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/api/post", 
        {   eNom: nom,
            eDescription: description,
            eContact: contact,
            eMail: mail,
            ePassword: pass,
            eRNE: RNE
        })
          .then(response => {
            navigate("/Connection")
            
        })
        .catch(error => {
            console.error(error);
        });
        
        
    }
    return (
        <div>
            <h2>inscrivez vous, creez un compte pour votre entreprise</h2>
            <form onSubmit={(e) =>{insc(e)}} >
                <label id="iiNom"> Nom </label> 
                <input type="text" onChange={(e) =>setNom(e.target.value)} placeholder="Nom" id="iNom"/><br></br>
                <br></br>
                <label id="iiDescription"> Description </label> 
                <input type="text" onChange={(e) =>setDescription(e.target.value)} placeholder="Description" id="iDescription"/><br></br>
                <br></br>
                <label id="iiContact"> Contact </label> 
                <input type="tel" onChange={(e) =>setContact(e.target.value)} placeholder="Contact" id="iContact"/><br></br>
                <br></br>
                <p id="iNow"> Maintenant pour vous faciliter la vie, vous pouvez mettre vos logins ici</p>
                <label id="iieMail"> E-mail </label> 
                <input type="email" onChange={(e) =>setMail(e.target.value)} placeholder="Email" id="iEmail"/><br></br>
                <br></br>
                <label id="iiPw"> Mot de pass </label>
                <input type="password" onChange={(e) =>setPass(e.target.value)} placeholder='Mot de pass' id="iPw"/><br></br>
                <br></br>
                <label id="iiRNE"> RNE </label>
                <input type="text" onChange={(e) =>setRNE(e.target.value)} placeholder='RNE' id="RNE"/>
                <button id="iButt" type="submit" > Terminez </button>
            </form>
        </div>
    )
}

export default Inscription;