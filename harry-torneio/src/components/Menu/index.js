import "./style.css";

const Menu = ({ startGame }) => {
  return (
    <div className="menu-container">
      <h1>Torneio tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros!</p>
      <button className="menu-container-button" onClick={startGame}>
        Começar!
      </button>
    </div>
  );
};
export default Menu;
