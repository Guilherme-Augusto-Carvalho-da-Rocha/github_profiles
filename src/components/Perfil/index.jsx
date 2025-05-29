import styles from './Perfil.module.css'

//export default () => {} eh uma possibilidade de componenete sem nome.
//exporte default function() {} eh outra possibilidade de componente sem nome.

const Perfil = ({nomeDoUsuario, deuErro}) => {

    return(
        <header className={styles.header}>
            <img className={styles.avatar} src={!deuErro? `https://github.com/${nomeDoUsuario}.png`: "https://placehold.co/460x460"}/>
            <h1 className={styles.name}>{nomeDoUsuario}</h1>
        </header>
    )
}

export default Perfil;