import styles from "../styles/loading.module.css"



export const LoadingScreen = () => {
    return (
        <div className={styles.loading_screen}>            <div className="dot"></div>
            <div className={styles.dot}></div>
            
        </div>
    );
};