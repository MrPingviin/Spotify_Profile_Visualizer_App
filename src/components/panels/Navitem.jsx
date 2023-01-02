import "./Navitem.css";

function Navitem({ text, icon, onClick, version}) {
  if (version) {
    return (
      <div className="Navitem-Version" onClick={onClick}>
        {icon}
        <h3>{text}</h3>
      </div>
    );
  } else {
    return (
      <div className="Navitem" onClick={onClick}>
        {icon}
        <h3>{text}</h3>
      </div>
    );
  }
}

export default Navitem;
