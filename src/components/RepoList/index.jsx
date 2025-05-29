import { useState ,useEffect } from "react";
import styles from './RepoList.module.css'

const ReposList = ({ nomeUsuario, }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true);
    useEffect( () => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then( resolve => resolve.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson)
            },3000)
        })
    }, [nomeUsuario])

    return(
        <div className={styles.reposList}>
            <div className="container">
                <ul className={styles.list}>
                {estaCarregando? (
                    <h3>Carregando...</h3>
                ):(
                    <>
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
                    </>
                )}
                </ul>
            </div>
        </div>
    )
}

export default ReposList;