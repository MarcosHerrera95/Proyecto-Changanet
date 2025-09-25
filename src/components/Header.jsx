import { useNavigate } from 'react-router-dom';

export default function Header({ isAuthPage }) {
  const navigate = useNavigate();

  return (
    <div style={{
      backgroundColor: '#0d1b2a',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* Izquierda: Logo */}
      <h1
        style={{ color: 'white', margin: 0, cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        Changanet
      </h1>

      {/* Centro: barra de búsqueda */}
      {!isAuthPage && (
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Buscar servicios"
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '500px',
              fontSize: '16px'
            }}
          />
        </div>
      )}

      {/* Derecha: botones */}
      {!isAuthPage && (
        <div style={{ display: 'flex', gap: '20px', marginLeft: '30px' }}>
          <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Ingresar</a>
          <a href="/register" style={{ color: 'white', textDecoration: 'none' }}>Registrarse</a>
        </div>
      )}
    </div>
  );
}
