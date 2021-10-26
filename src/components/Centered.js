import style from "../styles/global.module.css"

const Centered = ({children}) => {
    return <div className={style.centered}>
        {children}
    </div>
}

export default Centered;