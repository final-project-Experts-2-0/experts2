import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom"
const PageEntreprise = ()=>{
     const {state} = useLocation();
     const {Ese} = state
     const navigate = useNavigate()

     const pageEntreprise = () => {
         axios.get("http//:localhost:3001/api", {
             eNom: Ese.eNom,
             eDescription: Ese.eDescription,
             eContact: Ese.eContact,
             eMail: Ese.eMail,
             ePassword: Ese.ePassword,
             eRNE: Ese.eRNE
         })
         .then(response=>{
             console.log(response)
         })
         .catch(error =>{
             console.log(error)
         })
     }
     const offre = () =>{
         navigate("/OffreD'emploi")
     }
     return (
        <div>
            <form onSubmit={()=>{pageEntreprise()}}>
            <h2 id="Ese"> {Ese.eNom}</h2>
            <p id="PE1" > Qui sommes nous? {Ese.eDescription}</p>
            <p id="PE2" >vous pouvez nous contacter par appel sur le {Ese.eContact} ou par E-mail {Ese.eMail}</p>
            <p id="PE3" >Notre répertoire national des établissements {Ese.eRNE}</p>
           </form>
           <form onSubmit={()=>{offre()}}>
            <p id="PE4">créer un offre d'emploi</p>
                <button id="PE5" type="submit">créer</button>
            </form>
       </div>
    )
   
}
export default PageEntreprise