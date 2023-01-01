import "./Input.css";


const Input = ({type, placeholder, id}) => {

return (
    <input type={type} placeholder={placeholder} id={id} className="Input"></input>
)
};

export default Input;