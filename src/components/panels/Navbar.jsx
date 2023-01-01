import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div className="Navbar">
      <div className="Navbar-Content">{children}</div>
    </div>
  );
};

export default Navbar;
