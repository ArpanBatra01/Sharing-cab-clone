import { useState } from "react";
import ReactDOM from 'react-dom/client';

function Login() {
  const [email, setEmail] = useState("");
  const[password,setPassword]=useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your email:
        <input
          type="email" 
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <div><label>Enter password:
        <input
           type="password"
           value={password}
           placeholder="Enter password"
           onChange={(e) =>setPassword(e.target.value)}
        />
      </label></div>
      <button type="submit">login</button>
    </form>
  )
}
  
  export default Login;