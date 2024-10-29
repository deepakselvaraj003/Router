import { Outlet, Link } from "react-router-dom";

const Profile = () => (
  <div>
    <h2>Profile</h2>
    <nav>
      <ul>
        <li><Link to="account">Account</Link></li>
        <li><Link to="settings">Settings</Link></li>
      </ul>
    </nav>
    <Outlet /> {/* Nested routes will render here */}
  </div>
);

export default Profile;
