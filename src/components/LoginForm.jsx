import "../styles/Form.css";

export default function LoginForm() {
  return (
    <div className="form-container">
      <h2>Iniciar sesión</h2>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
      <p>¿No tenés cuenta? <a href="/register">Registrate</a></p>
    </div>
  );
}
