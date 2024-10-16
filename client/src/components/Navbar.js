import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';

// CSS Styles
const styles = {
  navbar: {
    backgroundColor: '#000',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  authButtons: {
    display: 'flex',
    gap: '15px',
  },
  linkStyle: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    border: '2px solid #fff',
    color: '#fff',
    backgroundColor: 'transparent',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    fontSize: '16px',
  },
  activeLink: {
    backgroundColor: '#fff',
    color: '#000',
  },
  buttonHover: {
    backgroundColor: '#fff',
    color: '#000',
  },
};

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  // Helper function to check if the current route matches
  const isActive = (path) => location.pathname === path;

  // Merge base link style with active styles
  const getLinkStyle = (path) =>
    isActive(path)
      ? { ...styles.linkStyle, ...styles.activeLink }
      : styles.linkStyle;

  return (
    <nav style={styles.navbar}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          Fitness Tracker
        </Link>

        {/* Navigation Links */}
        <div style={styles.navLinks}>
          <Link to="/" style={getLinkStyle('/')}>
            
            Dashboard
          </Link>
          <Link to="/workouts" style={getLinkStyle('/workouts')}>
            
            Workouts
          </Link>
          <Link to="/goals" style={getLinkStyle('/goals')}>
            
            Goals
          </Link>
        </div>

        {/* User Authentication Buttons */}
        <div style={styles.authButtons}>
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link to="/admin" style={getLinkStyle('/admin')}>
                  <AdminPanelSettingsIcon style={{ marginRight: '8px' }} />
                  Admin
                </Link>
              )}
              <button
                onClick={logout}
                style={{
                  ...styles.linkStyle,
                  backgroundColor: '#fff',
                  color: '#000',
                  border: '2px solid #fff',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
                  e.target.style.color = styles.buttonHover.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = styles.linkStyle.backgroundColor;
                  e.target.style.color = styles.linkStyle.color;
                }}
              >
                
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={styles.linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
                  e.target.style.color = styles.buttonHover.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = styles.linkStyle.backgroundColor;
                  e.target.style.color = styles.linkStyle.color;
                }}
              >
                
                Login
              </Link>
              <Link
                to="/signup"
                style={styles.linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
                  e.target.style.color = styles.buttonHover.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = styles.linkStyle.backgroundColor;
                  e.target.style.color = styles.linkStyle.color;
                }}
              >
                
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
