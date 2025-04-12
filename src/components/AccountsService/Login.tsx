import "./styles/login.css"
import { SetStateAction, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login ()
{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleUsernameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setUsername(event.target.value);
      };

    const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
      };

      const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
      };
    

return ( 
<div className="container">
    <div className="header_container">
    <h1 className="inter">Provincial Tourism and<br />
    Cultural Affairs Office</h1>
    <h2 className = "center k2d weight-700 "><i>All here, So Near</i></h2>
    </div>
    

    <div className="forms_container">
    <div className="Logo_frame"></div>
    <div className="Line_divide"></div>
    <h2 className="center zen_kaku weight-700 text-black">Log In to your Account</h2>
    <div className = " center test">
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
        />
      </div>

      <div className = "center test" style={{ position: 'relative' }}>
        <label htmlFor="password"></label>
        <input
          type={isPasswordVisible ? 'text' : 'password'} // Toggle between text and password
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          style={{ paddingRight: '30px' }} // Space for the icon
        />
        
        {/* Password visibility toggle icon */}
        <span
          onClick={togglePasswordVisibility}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer'
          }}
        >
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon based on visibility state */}
        </span>
      </div>

      
    </div>

</div>)
}
export default Login