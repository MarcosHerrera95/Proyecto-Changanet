import { useState } from 'react';

export default function Restablecer() {
  const [nueva, setNueva] = useState('');
  const [confirmacion, setConfirmacion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nueva !== confirmacion) {
      setMensaje('❌ Las contraseñas no coinciden.');
      return;
    }

    // Simulación de restablecimiento exitoso
    setMensaje('✅ Tu contraseña ha sido restablecida con éxito.');
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

        {mensaje && (
          <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
            {mensaje}
          </p>
        )}
      </form>
    </div>
  );
}
