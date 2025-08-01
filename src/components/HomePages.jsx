import './Home.css';

const HomePages = () => {
  return (
    <div className="home-container">
      {/* seccion principal de bienvenida */}
      <section className="hero">
        <h1>bienvenido a <span className="highlight">Merch y mas</span></h1>
        <p>encuentra las mejores prendas, accesorios y productos exclusivos de tus marcas favoritas</p>
        <a href="/productos" className="hero-button">ver productos</a>
      </section>

      {/* seccion de categorias destacadas */}
      <section className="categories">
        <h2>Categorias populares</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246" alt="camisetas" />
            <p>camisetas</p>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1536148935331-408321065b18" alt="hoodies" />
            <p>hoodies</p>
          </div>
        </div>
      </section>

      {/* seccion de llamada a la accion */}
      <section className="promo">
        <h2>envios gratis</h2>
        <p>por compras mayores a $100.000 en todo el pais Colombia</p>
      </section>
    </div>
  );
};

export default HomePages;
