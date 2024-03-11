import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import Account from "../pages/creeCompte"
import Authentifier from "../pages/authentifier"
import Verifier from "../pages/verification"
import Notfound from "../pages/notFound"
import VerifierAccount from "../pages/accountVerification"





export default function AppRoutes(){

    return (
        <Router>
      
            <Routes>
                <Route path="/" element={ <Authentifier/>}/> 
                <Route path="/Account" element={<Account/>}/> 
               < Route path="/verification" element={<Verifier/>}/> 
               <Route path="/verifieAccount" element={<VerifierAccount/>}/>
               <Route path="*" element={<Notfound/>}/>
            </Routes>
        
        </Router>
    )
}