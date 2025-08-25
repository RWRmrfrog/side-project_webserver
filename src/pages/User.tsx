import './styles/User.css';
import profileImg from "../assets/profile.png";

const User = () => {
  return (
    <div>
      <header className="banner">
      </header>

      <div className="profile-container">
        <img className="profile-pic" src={profileImg} alt="User Profile Picture" />
          <div className="profile-info">
            <h1 className="username">Danny Dev-ito</h1>
            <p className="description">One cool developer</p>
          </div>
      </div>

      <main className="posts-section">
        <h2>Posts</h2>
        <hr className="divider" />
          <div className="post">
            <h3>Update</h3>
            <p>Help. Oh god this is painful. Please end my suffering. I changed one thing and it broke everything.</p>
          </div>
          <div className="post">
            <h3>Making an unreal game</h3>
            <p>Thought I'd try to make my own game</p>
          </div>
      </main>
    </div>
  );
};

export default User;