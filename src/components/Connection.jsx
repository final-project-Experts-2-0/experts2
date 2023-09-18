import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Connection = () =>{
    const navigate = useNavigate()
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    const log = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/api/login", {eMail: mail, ePassword: pass})
        .then(response =>{
            navigate("/PageEntreprise", {state : {Ese: response.data[0]}})
            console.log(response.data[0]);
        })
        .catch(err =>{
            alert("mauvaise combinaison")
        })
    }
    
    
    return (
        <div id="div">
            <h2 id="connectez">connectez vous a votre compte</h2>
            <form onSubmit={(e)=>{log(e)}}>
                <label className="mailpass"> E-mail </label> 
                <input type="text" onChange={(e)=>{setMail(e.target.value)}} placeholder="Email" id="cEmail"/>
                <label className="mailpass"> Mot de pass </label>
                <input type="password" onChange={(e)=>{setPass(e.target.value)}} placeholder='Mot de pass' id="cPw"/>
                <button type="submit"> connecter </button>
            </form>
        </div>
    )
}

export default Connection
