import "./Image.css";

const Image = ({src, width, height, onClick, className, bandName}) => {
    return (
        <div className="TopArtist">
            <img src={src} width={width} height={height} onClick={onClick} className={className}></img>
            <span className="Clickable" onClick={onClick}>{bandName}</span>
        </div>
    )
}

export default Image;