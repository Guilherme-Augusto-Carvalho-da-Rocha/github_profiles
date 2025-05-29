import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";
import { useState } from "react";

function App() {
const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
const [nomeUsuario, setNomeUsuario] = useState('Guilherme-Augusto-Carvalho-da-Rocha');
  return(
    <>
    <label htmlFor="nomeUsuario">Digite o nome do usuario que deseja ver:</label><br />
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} id="nomeUsuario" />
    {nomeUsuario.length >=2 &&
      <>
        <Perfil nomeDoUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    }
      {/* {formularioEstaVisivel &&(
        <Formulario/>
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
    
  )
}

export default App
