import styles from './BoxLoading.module.scss'
import Loading from './Loading'

const BoxLoading = () => {
    return (
        <div className={styles.BoxLoading}>
            <Loading />
        </div>
    )
}

export default BoxLoading