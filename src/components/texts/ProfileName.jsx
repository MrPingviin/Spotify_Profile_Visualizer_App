import "./ProfileName.css";

const ProfileName = ({children, onClick}) => {
    return (
        <>
        <span className="ProfileName" onClick={onClick}>{children}</span>
        </>
    )
}

export default ProfileName;