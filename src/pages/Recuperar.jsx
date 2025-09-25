import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Recuperar() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    // Acá podrías enviar el email al backend
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <form
        onSubmit={handleSubmit}
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
        <h2 style={{ textAlign: 'center' }}>Recuperar contraseña</h2>

        {!enviado ? (
          <>
            <p style={{ fontSize: '14px', textAlign: 'center' }}>
              Ingresá el correo electrónico con el que te registraste. Te enviaremos un enlace para restablecer tu contraseña.
            </p>

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              Enviar enlace de recuperación
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
              ✅ Se ha enviado un enlace de recuperación a <strong>{email}</strong>.<br />
              Revisá tu bandeja de entrada (o la carpeta de correos no deseados/spam) y seguí los pasos para cambiar tu contraseña.
            </p>

            <button
              type="button"
              onClick={() => navigate('/login')}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#0d1b2a',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Volver al inicio
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

