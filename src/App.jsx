import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";
import UserFinder from "./components/UserFinder";
import { useState } from "react";

function App() {
const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
const [nomeUsuario, setNomeUsuario] = useState('Guilherme-Augusto-Carvalho-da-Rocha');
const [deuErro, setDeuErro] = useState(false);
  return(
    <>
    <UserFinder setNomeUsuario={setNomeUsuario} />
    <Perfil nomeDoUsuario={nomeUsuario} deuErro={deuErro}/>
    <ReposList nomeUsuario={nomeUsuario} deuErro={deuErro} setDeuErro={setDeuErro}/>
      {/* {formularioEstaVisivel &&(
        <Formulario/>
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
    
  )
}

export default App
