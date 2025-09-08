import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import loginIcon from "../assets/img/login-icon.png";
import usernameIcon from "../assets/img/username-icon.png";
import passwordIcon from "../assets/img/password-icon.png";
import googleIcon from "../assets/img/google-icon.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          contrasena,
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        // Guardar datos del usuario en localStorage
        localStorage.setItem(
          "usuarioNombre",
          result.message.replace("Bienvenido, ", "")
        );
        localStorage.setItem("usuarioRol", result.rol);

        // Mostrar mensaje de bienvenida
        Swal.fire({
          title: "¡Ingreso exitoso! 🎉",
          text: result.message,
          icon: "success",
          confirmButtonColor: "#4da6ff",
          confirmButtonText: "Continuar",
        }).then(() => {
          // Redirigir según rol después de cerrar la alerta
          if (result.rol === "ADMIN") {
            navigate("/admin/dashboard");
          } else {
            navigate("/dashboard");
          }
        });
      } else {
        setError(result.message || "Credenciales incorrectas");
      }
    } catch (err) {
      console.error("Error en el login:", err);
      setError("Error al conectar con el servidor");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #003366, #4da6ff)",
      }}
    >
      <div
        className="bg-white p-5 rounded-5 shadow-lg text-secondary"
        style={{ width: "25rem", maxWidth: "90%" }}
      >
        {/* Logo */}
        <div className="d-flex justify-content-center mb-3">
          <img src={loginIcon} alt="login-icon" style={{ height: "6rem" }} />
        </div>

        {/* Título */}
        <h2 className="text-center fw-bold mb-4" style={{ color: "#003366" }}>
          Iniciar Sesión
        </h2>

        {/* Mostrar error */}
        {error && (
          <div className="alert alert-danger text-center py-2">{error}</div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              style={{
                background: "linear-gradient(to right, #003366, #4da6ff)",
                border: "none",
              }}
            >
              <img
                src={usernameIcon}
                alt="username-icon"
                style={{ height: "1rem" }}
              />
            </span>
            <input
              className="form-control rounded-end"
              style={{ background: "#f9f9f9", border: "1px solid #ddd" }}
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Contraseña */}
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              style={{
                background: "linear-gradient(to right, #003366, #4da6ff)",
                border: "none",
              }}
            >
              <img
                src={passwordIcon}
                alt="password-icon"
                style={{ height: "1rem" }}
              />
            </span>
            <input
              className="form-control rounded-end"
              style={{ background: "#f9f9f9", border: "1px solid #ddd" }}
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          {/* Recordar / Olvidé contraseña */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
              />
              <label htmlFor="remember" className="form-check-label">
                Recuérdame
              </label>
            </div>
            <a
              href="#"
              className="text-decoration-none"
              style={{
                color: "#4da6ff",
                fontWeight: "500",
                fontSize: "0.9rem",
              }}
            >
              ¿Olvidaste la contraseña?
            </a>
          </div>

          {/* Botón principal */}
          <button
            type="submit"
            className="btn w-100 text-white fw-semibold shadow-sm"
            style={{
              background: cargando
                ? "#6c757d"
                : "linear-gradient(to right, #003366, #4da6ff)",
              border: "none",
              borderRadius: "10px",
              padding: "10px",
              transition: "all 0.3s ease",
            }}
            disabled={cargando}
          >
            {cargando ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        {/* Separador */}
        <div className="my-4 position-relative text-center">
          <hr style={{ borderTop: "1px solid #ddd" }} />
          <span
            style={{
              background: "#fff",
              padding: "0 10px",
              position: "absolute",
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              fontWeight: "500",
              color: "#999",
            }}
          >
            o
          </span>
        </div>

        {/* Google */}
        <div
          className="btn d-flex gap-2 justify-content-center align-items-center border shadow-sm w-100 py-2"
          style={{
            background: "#fff",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#f5f5f5")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}
        >
          <img
            src={googleIcon}
            alt="google-icon"
            style={{ height: "1.6rem" }}
          />
          <div className="fw-semibold text-secondary">Continuar con Google</div>
        </div>

        {/* Link a registro */}
        <div className="text-center mt-4">
          <span>¿No tienes una cuenta?</span>{" "}
          <Link
            to="/registro"
            className="text-decoration-none fw-semibold"
            style={{ color: "#4da6ff" }}
          >
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
