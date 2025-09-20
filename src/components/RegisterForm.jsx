import "../styles/Form.css";

export default function RegisterForm() {
  return (
    <div className="form-container">
      <h2>Registrarse</h2>
      <form>
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Crear cuenta</button>
      </form>
      <p>¿Ya tenés cuenta? <a href="/login">Iniciar sesión</a></p>
    </div>
  );
}
