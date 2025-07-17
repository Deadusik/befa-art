import styles from './Loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.Loading}>
            <div className={styles.Loading__spinner}></div>
        </div>
    )
}

export default Loading