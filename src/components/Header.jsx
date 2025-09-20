export default function Header() {
  return (
    <header style={{
      backgroundColor: '#0d1b2a',
      color: 'white',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <h1 style={{ fontSize: '24px' }}>Changanet</h1>
      <input
        type="text"
        placeholder="Buscar Servicios"
        style={{
          padding: '8px 12px',
          borderRadius: '4px',
          border: 'none',
          width: '40%'
        }}
      />
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="/login">Ingresar</a>
        <a href="/register">Registrarse</a>
      </div>
    </header>
  );
}
