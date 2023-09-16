import axios from "axios";
import { useLocation } from "react-router-dom"
const PageEntreprise = ()=>{
     const {state} = useLocation();
     const {Ese} = state


     const pageEntreprise = () => {
         axios.get("http//:localhost:3001/api/", {
             eNom: Ese.eNom,
             eDescription: Ese.eDescription,
             eContact: Ese.eContact,
             eMail: Ese.eMail,
             eRNE: Ese.eRNE
         })
         .then(response=>{
             console.log(response)
         })
         .catch(error =>{
             console.log(error)
         })
     }
     return (
        <div>
            <h2> Page de Votre Entreprise</h2>
            <form onSubmit={()=>{pageEntreprise()}}>
            <p>{Ese.eNom}</p>
            <p>{Ese.eDescription}</p>
            <p>{Ese.eContact}</p>
            <p>{Ese.eMail}</p>
            <p>{Ese.ePassword}</p>
            <p>{Ese.eRNE}</p>
           </form>
       </div>
    )
   
}
export default PageEntreprise