import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Overview from "./Components/Overview";
import Reports from "./Components/Report";
import Profile from "./Components/Profile";
import Account from "./Components/Account";
import Settings from "./Components/Settings";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          
          <Route path="profile" element={<Profile />}>
            <Route path="account" element={<Account />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
