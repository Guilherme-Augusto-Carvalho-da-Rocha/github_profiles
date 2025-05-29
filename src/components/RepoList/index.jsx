import { useState ,useEffect } from "react";
import styles from './RepoList.module.css'

const ReposList = ({ nomeUsuario, deuErro, setDeuErro }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true);
    
    useEffect( () => {
        setDeuErro(false);
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then((res) => {
            if (!res.ok) {
                // se status for 404, 500, etc...
                throw new Error(`Erro: ${res.status}`);
            }
        return res.json();
    })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson)
            },3000)
        }).catch(e => {
            setDeuErro(true);
            setEstaCarregando(false);
            console.log(e);
        })
    }, [nomeUsuario])

    return(
        <div className={styles.reposList}>
            <div className="container">
                {estaCarregando && !deuErro? (
                    <h3>Carregando...</h3>
                ):( !deuErro? (
                    <>
                    <ul className={styles.list}>
                        {repos.map(({id, name, language, html_url}) => (
                            <li className={styles.listItem} key={id}>
                                <div className={styles.listItemName}>
                                    <b>Nome:</b>
                                    {name}
                                </div>
                                <div className={styles.listItemLanguage}>
                                    <b>linguagem:</b>
                                    {language} 
                                </div>
                                    <a className={styles.listItemLink} target="_blank" href={html_url}>Visitar no Github</a>
                                </li>
                        ))}
                    </ul>
                    </>
                ) : (
                    <>
                        <div className={styles.errorMessage}>O usuario posto no Input esta invalido.</div>
                    </>
                )
                )}
            </div>
        </div>
    )
}

export default ReposList;