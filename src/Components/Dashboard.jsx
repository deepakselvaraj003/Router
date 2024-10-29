import { Outlet, Link } from "react-router-dom";

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <nav>
      <ul>
        <li><Link to="overview">Overview</Link></li>
        <li><Link to="reports">Reports</Link></li>
      </ul>
    </nav>
    <Outlet /> {/* Nested routes will render here */}
  </div>
);

export default Dashboard;
