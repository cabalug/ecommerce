import { Link } from "react-router-dom"

const MainMenu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/products">Productos</Link></li>
            </ul>
        </div>
    )
}

export default MainMenu