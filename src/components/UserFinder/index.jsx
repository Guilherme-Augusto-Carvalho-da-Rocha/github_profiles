import styles from './UserFinder.module.css'

const userFinder = ({ setNomeUsuario }) => {

    return(
        <>
        <div className={styles.userFinder}>
            <div className="container">
                <form className={styles.form} >
                    <label className={styles.label} htmlFor="nomeUsuario">Digite o nome do usuario que deseja ver:</label>
                    <input className={styles.input} type="text" onBlur={(e) => setNomeUsuario(e.target.value)} id="nomeUsuario" />
                </form>
            </div>
        </div>
        </>
    )
}

export default userFinder;