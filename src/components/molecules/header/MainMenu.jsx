import { Link } from "react-router-dom"

const MainMenu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/ecommerce">Inicio</Link></li>
                <li><Link to="/ecommerce/products">Productos</Link></li>
            </ul>
        </div>
    )
}

export default MainMenu