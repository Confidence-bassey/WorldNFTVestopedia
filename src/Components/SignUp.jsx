import { useState } from 'react';
import { signUp } from './authService';
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

//   return (
//     <div className="signup d-flex justify-content-center align-items-center vh-100 bg-primary">
//     <div className="form_container p-5 rounded bg-white">
//         <form action="">
//             <h3 className="text-center">Sign Up</h3>
//             <div className="mb-2">
//                 <label htmlFor="text">FirstName</label>
//                 <input type="text" placeholder="Enter your firstname" className="form-control" />
//             </div>
//             <div className="mb-2">
//                 <label htmlFor="text">LastName</label>
//                 <input type="text" placeholder="Enter yourlastname" className="form-control" />
//             </div>
//             <div className="mb-2">
//                 <label htmlFor="email">Email</label>
//                 <input type="emil" placeholder="Enter your email" className="form-control" />
//             </div>
//             <div className="mb-2">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" placeholder="Enter your password" className="form-control" />
//             </div>
            
//             <div className="d-grid mt-2">
//                 <button className="btn btn-primary">Sign Up</button>
//             </div>
//             <p className="text-end mt-2">
//                 Already Registered? <Link to="/" className='ms-2'>Login</Link>
//             </p>
//         </form>
//     </div>
// </div>
//   );

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await signUp(email, password);
    alert('Sign Up Successful');
    navigate('/login')
  } catch (err) {
    setError(err.message);
  }
};


return (
  <div className="signup d-flex justify-content-center align-items-center vh-100 bg-primary">
    <div className="form_container p-5 rounded bg-white">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center">Sign Up</h3>
        <div className="mb-2">
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            placeholder="Enter your firstname"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            placeholder="Enter your lastname"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
        <div className="d-grid mt-2">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p className="text-end mt-2">
          Already Registered? <Link to="/login" className='ms-2'>Login</Link>
        </p>
      </form>
    </div>
  </div>
);
};

export default SignUp;
