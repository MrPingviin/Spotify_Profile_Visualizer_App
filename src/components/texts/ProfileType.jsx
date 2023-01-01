
const ProfileType = ({ type }) => {
  if (type == "free") {
    return (
      <>
        <h2>🎤 Free 🎤</h2>
      </>
    );
  } else if (type == "premium") {
    return (
      <>
        <h4>👑 Premium 👑</h4>
      </>
    );
  }
};

export default ProfileType;
