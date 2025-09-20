export default function ProductCard({ title, description, price, category }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        height: '120px',
        backgroundColor: '#e0e0e0',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        color: '#666'
      }}>
        {category}
      </div>
      <h3 style={{ marginBottom: '5px' }}>{title}</h3>
      <p style={{ fontSize: '14px', marginBottom: '10px' }}>{description}</p>
      <p style={{ fontWeight: 'bold', color: '#0d1b2a' }}>{price}</p>
      <button style={{
        marginTop: '10px',
        padding: '8px 12px',
        backgroundColor: '#0d1b2a',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Ver perfil
      </button>
    </div>
  );
}


