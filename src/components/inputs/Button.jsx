import "./Button.css";

const Button = ({onClick, children, className}) => {
    if (className == undefined ? className = "Button" : null);
return (
    <button onClick={onClick} className={className}>{children}</button>
)
}

export default Button;