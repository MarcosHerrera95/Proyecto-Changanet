import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          maxWidth: '400px',
          width: '100%',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Iniciar sesión</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#0d1b2a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Ingresar
        </button>

        {/* Recuperar contraseña */}
        <p style={{
          marginTop: '10px',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          ¿Olvidaste la contraseña?{' '}
          <a href="/recuperar" style={{ color: '#0d1b2a', textDecoration: 'underline' }}>
            Haz click aquí
          </a>
        </p>

        {/* Crear cuenta */}
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px' }}>¿No tienes una cuenta?</p>
          <button
            type="button"
            onClick={() => navigate('/register')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#0d1b2a',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </div>
  );
}

