import styles from './layout.module.css'

//children is a technical term. Cant change the name. Whereas the names like layout.js and class names like Layout are changeable
// A flag can be passed as well as a prop
export default function Layout({ children, flag }) {
    const dom = (flag ? (<div className={styles.root} id="root-container-flag-true">
        {children}
    </div>) : (<div className={styles.root} id="root-container-flag-false">
        {children}
    </div>))
    return dom
}