import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import registroIcon from "../assets/img/login-icon.png";

// Definimos la interfaz para los datos del formulario
interface RegistroFormData {
  nombre: string;
  email: string;
  usuario: string;
  celular: string;
  rol: string;
  contrasena: string;
  confirmarContrasena: string;
}

const Registro: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegistroFormData>({
    nombre: "",
    email: "",
    usuario: "",
    celular: "",
    rol: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  // Manejar cambios en los inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Enviar datos del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar contraseñas
    if (formData.contrasena !== formData.confirmarContrasena) {
      alert("⚠️ Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          celular: formData.celular,
          rol: formData.rol,
          contrasena: formData.contrasena,
        }),
      });

      const result: { status: string; message: string } = await response.json();

      if (result.status === "ok") {
        alert("✅ " + result.message);
        navigate("/login"); // Redirige al login
      } else {
        alert("⚠️ " + result.message);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("❌ Error al registrar el usuario. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #003366, #4da6ff)",
        padding: "1rem",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 25px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="text-center mb-4">
          <img
            src={registroIcon}
            alt="Icono de registro"
            style={{
              height: "7rem",
              marginBottom: "0.5rem",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <h2 className="mt-2" style={{ fontWeight: "bold", color: "#003366" }}>
            Crear Cuenta
          </h2>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre completo
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Usuario */}
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">
              Nombre de usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
            />
          </div>

          {/* Celular */}
          <div className="mb-3">
            <label htmlFor="celular" className="form-label">
              Número de celular
            </label>
            <input
              type="tel"
              className="form-control"
              id="celular"
              name="celular"
              pattern="[0-9]{10}"
              value={formData.celular}
              onChange={handleChange}
              required
            />
          </div>

          {/* Rol */}
          <div className="mb-3">
            <label htmlFor="rol" className="form-label">
              Rol
            </label>
            <select
              className="form-select"
              id="rol"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Selecciona un rol
              </option>
              <option value="cliente">Cliente</option>
              <option value="tecnico">Técnico</option>
            </select>
          </div>

          {/* Contraseña */}
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirmar Contraseña */}
          <div className="mb-4">
            <label htmlFor="confirmarContrasena" className="form-label">
              Confirmar contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmarContrasena"
              name="confirmarContrasena"
              value={formData.confirmarContrasena}
              onChange={handleChange}
              required
            />
          </div>

          {/* Botón de registro */}
          <div className="d-grid mb-3">
            <button
              type="submit"
              disabled={loading}
              className="btn text-white fw-bold"
              style={{
                background: "linear-gradient(to right, #003366, #4da6ff)",
                border: "none",
                borderRadius: "10px",
                padding: "10px",
                transition: "all 0.3s ease",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Registrando..." : "Crear cuenta"}
            </button>
          </div>

          {/* Enlace al login */}
          <div className="text-center mb-2">
            <span>¿Ya tienes una cuenta?</span>{" "}
            <Link to="/login" className="text-primary fw-bold">
              Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
