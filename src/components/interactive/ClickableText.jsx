import "./ClickableText.css";

const ClickableText = ({children, onClick}) => {
    return (
        <cpan className="ClickableText" onClick={onClick}>{children}</cpan>
    )
}

export default ClickableText;