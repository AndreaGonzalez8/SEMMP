import React from "react";
import styles from "../styles/Navbar.module.css"; // Importamos el módulo CSS
import logo from "../assets/img/Logo.jpg";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg fixed-top`}>
      <div className="container">
        <a className="navbarBrand me-auto" href="#">
          <img className={styles.logo} src={logo} alt="Logo" width="70" />
        </a>
        <div
          className={`sidebar offcanvas offcanvas-end ${styles.sidebar}`}
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">
              <img className={styles.logo} src={logo} alt="Logo" width="70" />
            </h5>
            <button className="btnClose" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className={`${styles.navbarItem} nav-link`} href="#">
                  INICIO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${styles.navbarItem} nav-link`}
                  href="./nosotros.html"
                >
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${styles.navbarItem} nav-link`}
                  href="./misEquipos.html"
                >
                  Mis Equipos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${styles.navbarItem} nav-link`}
                  href="./solicitarSoporte.html"
                >
                  Solicitar Soporte
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${styles.navbarItem} nav-link`}
                  href="./pagosFacturacion.html"
                >
                  Pagos y Facturación
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${styles.navbarItem} nav-link`}
                  href="./mensaje.html"
                >
                  Mensajes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className={styles.perfilButton}>
          <li className="navbar-nav nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i className="fa-solid fa-user"></i>
            </a>
            <ul className="dropdown-menu">
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/registro" className="btn btn-primary">
                Registro
              </Link>
              <li>
                <a className="dropdown-item" href="#">
                  Perfil
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <button
          className="navbar-toggler pe-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
