import { logout } from './authService';

const LogOut = () => {
  const handleLogout = async () => {
    try {
      await logout();
      alert('Logout Successful');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogOut;
