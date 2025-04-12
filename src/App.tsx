import { useEffect } from 'react';
import './App.css';
import { app } from './firebase';
import Login from './components/AccountsService/Login';

function App() {
  useEffect(() => {
    console.log('Firebase initialized:', app.name);
  }, []);

  return <Login />; // 👈 Direct render
}

export default App;


//----------------------------------------------------
// import { SetStateAction, useState } from 'react';

// function LoginForm() {
//   // State to store username and password
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   // Handle changes in the username input field
//   const handleUsernameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
//     setUsername(event.target.value);
//   };

//   // Handle changes in the password input field
//   const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
//     setPassword(event.target.value);
//   };

//   // Handle button click to log username and password
//   const handleLogin = () => {
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div>
//       <h2>Login Form</h2>

//       {/* Username input */}
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsernameChange}
//           placeholder="Enter your username"
//         />
//       </div>

//       {/* Password input */}
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password" // This makes the text appear as *
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//           placeholder="Enter your password"
//         />
//       </div>

//       {/* Button to log the values */}
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default LoginForm;








// -----------------------------------------------------------------------------------------------
// import { SetStateAction, useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons library

// function LoginForm() {
//   // State to store username, password, and password visibility toggle
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility

//   // Handle changes in the username input field
//   const handleUsernameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
//     setUsername(event.target.value);
//   };

//   // Handle changes in the password input field
//   const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
//     setPassword(event.target.value);
//   };

//   // Toggle password visibility
//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   // Handle button click to log username and password
//   const handleLogin = () => {
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div>
//       <h2>Login Form</h2>

//       {/* Username input */}
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsernameChange}
//           placeholder="Enter your username"
//         />
//       </div>

//       {/* Password input with toggle icon */}
//       <div style={{ position: 'relative' }}>
//         <label htmlFor="password">Password:</label>
//         <input
//           type={isPasswordVisible ? 'text' : 'password'} // Toggle between text and password
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//           placeholder="Enter your password"
//           style={{ paddingRight: '30px' }} // Space for the icon
//         />
        
//         {/* Password visibility toggle icon */}
//         <span
//           onClick={togglePasswordVisibility}
//           style={{
//             position: 'absolute',
//             right: '10px',
//             top: '50%',
//             transform: 'translateY(-50%)',
//             cursor: 'pointer'
//           }}
//         >
//           {isPasswordVisible ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon based on visibility state */}
//         </span>
//       </div>

//       {/* Button to log the values */}
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default LoginForm;
