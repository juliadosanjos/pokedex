/* eslint-disable @next/next/no-img-element */
import { NavStyled } from "./styles"

const Navbar = (props) => {

    return (
        <NavStyled>
            <div>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" 
                    alt="Logo-Pokemon" 
                />
            </div>
            
            <div>
                {props.children}
            </div>
        </NavStyled>
    )
}

export default Navbar