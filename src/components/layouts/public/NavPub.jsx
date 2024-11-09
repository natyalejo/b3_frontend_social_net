import { NavLink } from "react-router-dom"

export const NavPub =() => {
return (
<nav className = "navbar__container-list">
    <ul className="container-list__menu-list">
     <li className="menu-list__item">
      <NavLink to="./login" className="menu-list__link">
         <i className="fa-solid fa-user"></i>
         <spam className="menu-list___title">Login</spam>
 </NavLink>
</li>

<li className="menu-list__item">
<NavLink to="./registro"className="menu-list__link">
<i className="fa-solid fa-users"></i>
<spam className="menu-list__tittle">Registro</spam>

</NavLink>
</li>
    </ul>
</nav>









)

}