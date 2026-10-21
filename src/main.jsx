import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Carousel from '../components/Carousel.jsx'
import Content from '../components/Content.jsx'
import Footer from '../components/Footer.jsx'

const BON_LOGIN = "halimata";
const BON_MOT_DE_PASSE = "1234";

function Root() {
  const [login, setLogin] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [errLogin, setErrLogin] = useState("");
  const [errMotDePasse, setErrMotDePasse] = useState("");
  const [connecte, setConnecte] = useState(false);

  function handleConnexion() {
    setErrLogin("");
    setErrMotDePasse("");
    let erreur = false;

    if (login == "") { setErrLogin("Le champ login est vide !"); erreur = true; }
    if (motDePasse == "") { setErrMotDePasse("Le champ mot de passe est vide !"); erreur = true; }
    if (erreur) return;

    if (login !== BON_LOGIN) { setErrLogin("Login incorrect !"); return; }
    if (motDePasse !== BON_MOT_DE_PASSE) { setErrMotDePasse("Mot de passe incorrect !"); return; }

    setConnecte(true);
  }

  if (connecte) {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Carousel />
              <Content />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Connexion</h3>

        <div className="mb-3">
          <label className="form-label">Nom utilisateur</label>
          <input type="text" className="form-control"
            placeholder="Entrez votre login"
            value={login}
            onChange={(e) => setLogin(e.target.value)} />
          {errLogin && <p className="text-danger mt-1">{errLogin}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Mot de passe</label>
          <input type="password" className="form-control"
            placeholder="Entrez votre mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)} />
          {errMotDePasse && <p className="text-danger mt-1">{errMotDePasse}</p>}
        </div>

        <button className="btn btn-primary w-100" onClick={handleConnexion}>
          Se connecter
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)