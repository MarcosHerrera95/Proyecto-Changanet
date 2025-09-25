import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Restablecer() {
  const [nueva, setNueva] = useState('');
  const [confirmacion, setConfirmacion] = useState('');
  const [exito, setExito] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nueva !== confirmacion) {
      alert('❌ Las contraseñas no coinciden.');
      return;
    }

    // Simulación de restablecimiento exitoso
    setExito(true);
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
        <h2 style={{ textAlign: 'center' }}>Restablecer contraseña</h2>

        {!exito ? (
          <>
            <input
              type="password"
              placeholder="Nueva contraseña"
              value={nueva}
              onChange={(e) => setNueva(e.target.value)}
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />

            <input
              type="password"
              placeholder="Confirmar nueva contraseña"
              value={confirmacion}
              onChange={(e) => setConfirmacion(e.target.value)}
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
              Restablecer contraseña
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
              ✅ <strong>¡Tu contraseña fue restablecida!</strong><br />
              Revisá tu bandeja de entrada para confirmar el cambio.
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
              Volver al inicio de sesión
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

