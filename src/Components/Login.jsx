import { Link, useNavigate } from 'react-router-dom'
import { login } from './authService';
import { useState } from 'react';
import './style.css'

const Login = () => {
//   return (
//     <div className="login d-flex justify-content-center align-items-center vh-100 bg-primary">
//         <div className="form_container p-5 rounded bg-white">
//             <form action="">
//                 <h3 className="text-center">Login</h3>
//                 <div className="mb-2">
//                     <label htmlFor="email">Email</label>
//                     <input type="emil" placeholder="Enter your email" className="form-control" />
//                 </div>
//                 <div className="mb-2">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" placeholder="Enter your password" className="form-control" />
//                 </div>
//                 <div className="mb-2">
//                     <input type="checkbox" className="custom-control custom-checkbox" id="check" />
//                     <label htmlFor="check" className="custom-input-label ms-2">
//                         Remember me
//                     </label>
//                 </div> 
//                 <div className="d-grid">
//                     <button className="btn btn-primary">Login</button>
//                 </div>
//                 <p className="text-end mt-2">
//                     Forget <a href="">Password?</a><Link to="/signup" className='ms-2'>Sign Up</Link>
//                 </p>
//             </form>
//         </div>
//     </div>
//   )

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await login(email, password);
    alert('Login Successful');
    navigate('/homepage');
  } catch (err) {
    setError(err.message);
  }
};

return (
  <div className="login d-flex justify-content-center align-items-center vh-100 bg-primary">
    <div className="form_container p-5 rounded bg-white">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center">Login</h3>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input type="checkbox" className="custom-control custom-checkbox" id="check" />
          <label htmlFor="check" className="custom-input-label ms-2">
            Remember me
          </label>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p className="text-end mt-2">
          Forget <a href="">Password?</a><Link to="/signup" className='ms-2'>Sign Up</Link>
        </p>
      </form>
    </div>
  </div>
    );
}

export default Login