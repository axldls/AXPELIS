import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AXMOVIES</h3>
          <p>Tu plataforma de búsqueda de películas favoritas. Descubre el mundo del cine con nosotros.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#peliculas">Películas</a></li>
            <li><a href="#buscar">Buscar</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Información</h4>
          <ul>
            <li><a href="#acerca">Acerca de</a></li>
            <li><a href="#privacidad">Privacidad</a></li>
            <li><a href="#terminos">Términos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} AXMOVIES. Todos los derechos reservados.</p>
        <p>Powered by OMDb API</p>
      </div>
    </footer>
  );
};

export default Footer;
