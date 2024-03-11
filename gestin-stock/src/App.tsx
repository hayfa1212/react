import './App.css';
import VerifierAccount from './pages/accountVerification';


import Authentifier from './pages/authentifier';
import Account from './pages/creeCompte';
import Verifier from './pages/verification';
import AppRoutes from './routes/route';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<AppRoutes/>

      </header>
    </div>
  );
}

export default App;
