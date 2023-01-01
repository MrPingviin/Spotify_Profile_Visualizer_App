import "./Navitem.css";

function Navitem({ text, icon, onClick}) {
  return (
    <div className="Navitem" onClick={onClick}>
      {icon}
      <h3>{text}</h3>
    </div>
  );
}

export default Navitem;
