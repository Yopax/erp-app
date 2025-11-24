export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} ERP Speed. Todos los derechos reservados.</p>
        <nav className="footer-nav">
          <a href="#">Ayuda</a>
          <a href="#">Documentación</a>
          <a href="#">Soporte</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}
