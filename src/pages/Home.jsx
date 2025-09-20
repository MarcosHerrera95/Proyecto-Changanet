import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import FaqItem from '../components/FaqItem';



export default function Home() {
  return (
    <div className="container">
  <div style={{
  backgroundColor: '#0d1b2a',
  color: 'white',
  padding: '40px 20px',
  borderRadius: '8px',
  marginBottom: '30px',
  textAlign: 'center'
}}>
  <h1 style={{ fontSize: '32px', marginBottom: '15px' }}>Bienvenido a Changanet</h1>
  <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
    Changanet es una plataforma que conecta personas con profesionales de confianza en toda Argentina.
    Desde electricistas, gasistas y colocadores de cerámicos hasta profesores particulares y especialistas en educación,
    ofrecemos un espacio seguro y accesible para encontrar el servicio que necesitás, cuando lo necesitás.
  </p>
</div>
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gap: '20px',
  marginBottom: '40px'
}}>
  <CategoryCard title="Educación" icon="📚" />
  <CategoryCard title="Construcción" icon="🏗️" />
  <CategoryCard title="Reparaciones" icon="🔧" />
  <CategoryCard title="Tecnología" icon="💻" />
  <CategoryCard title="Limpieza" icon="🧼" />
  <CategoryCard title="Transporte" icon="🚚" />
</div>

      <h2 style={{ marginBottom: '20px' }}>Servicios destacados</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        <ProductCard
          title="Electricista certificado"
          description="Instalaciones, reparaciones y mantenimiento eléctrico en hogares y oficinas."
          price="Desde $5.000"
          category="Electricidad"
        />
        <ProductCard
          title="Profesor de Matemática"
          description="Clases particulares para secundaria y CBC. Modalidad presencial o virtual."
          price="Desde $3.000"
          category="Educación"
        />
        <ProductCard
          title="Colocador de cerámicos"
          description="Trabajo profesional en baños, cocinas y pisos. Presupuesto sin cargo."
          price="Desde $6.500"
          category="Construcción"
        />
      </div>
  <div style={{
  backgroundColor: '#f0f0f0',
  padding: '30px',
  borderRadius: '8px',
  marginTop: '40px'
}}>
  <h3 style={{ marginBottom: '20px' }}>Lo que dicen nuestros usuarios</h3>
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', flex: '1' }}>
      <p>"Encontré un gasista en minutos. Trabajo impecable y muy profesional."</p>
      <p style={{ fontWeight: 'bold' }}>– Laura, Quilmes</p>
    </div>
    <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', flex: '1' }}>
      <p>"Las clases de inglés fueron excelentes. Muy fácil de contratar."</p>
      <p style={{ fontWeight: 'bold' }}>– Martín, La Plata</p>
    </div>

    
  </div>
    <div style={{
  backgroundColor: '#ffffff',
  padding: '40px 20px',
  borderRadius: '8px',
  marginTop: '40px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center'
}}>
  <h3 style={{ marginBottom: '30px', fontSize: '24px', color: '#0d1b2a' }}>Nuestra comunidad en números</h3>
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap'
  }}>
    <div style={{ flex: '1', minWidth: '200px' }}>
      <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#0d1b2a' }}>+500</p>
      <p>Servicios publicados</p>
    </div>
    <div style={{ flex: '1', minWidth: '200px' }}>
      <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#0d1b2a' }}>+1000</p>
      <p>Usuarios registrados</p>
    </div>
    <div style={{ flex: '1', minWidth: '200px' }}>
      <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#0d1b2a' }}>+95%</p>
      <p>Satisfacción de los usuarios</p>
    </div>
</div>

  </div>
  <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#0d1b2a' }}>
  ¿Tenés dudas? Te ayudamos
</h2>
  <div style={{
  backgroundColor: '#f9f9f9',
  padding: '30px',
  borderRadius: '8px',
  marginTop: '60px'
}}>
  <h3 style={{ marginBottom: '20px', color: '#0d1b2a' }}>Preguntas frecuentes</h3>
  <FaqItem
    question="¿Cómo contrato un servicio?"
    answer="Podés buscar el servicio que necesitás, ver el perfil del profesional y contactarlo directamente desde la plataforma."
  />
  <FaqItem
    question="¿Cómo me registro como profesional?"
    answer="Hacé clic en 'Crear cuenta', seleccioná la opción 'Soy profesional' y completá tus datos. ¡Listo para ofrecer tus servicios!"
  />
  <FaqItem
    question="¿Es gratis usar Changanet?"
    answer="Sí, tanto para buscar servicios como para registrarte como profesional. En el futuro podríamos ofrecer planes premium opcionales."
  />
</div>

</div>
<div style={{
  backgroundColor: '#0d1b2a',
  color: 'white',
  padding: '30px',
  textAlign: 'center',
  marginTop: '50px',
  borderRadius: '8px'
}}>
  <h3>¿Sos profesional o querés ofrecer tus servicios?</h3>
  <p>Registrate gratis y empezá a conectar con personas que necesitan lo que hacés.</p>
  <a href="/register">
    <button style={{
      marginTop: '15px',
      padding: '10px 20px',
      backgroundColor: 'white',
      color: '#0d1b2a',
      border: 'none',
      borderRadius: '4px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }}>
      Crear cuenta
    </button>
  </a>
</div>

    </div>
    
  );
}

