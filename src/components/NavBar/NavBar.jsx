import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <div>
        <header className="header">
          <a href="#" className="logo">
            Santo Bocado Sandwich`s
          </a>
          <nav>
            <a href="#">Sandwich`s</a>
            <a href="#">Postres</a>
            <a href="#">Bebidas</a>
            <a href="#">Contacto</a>
          </nav>
        </header>
      </div>
      <div>
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;
