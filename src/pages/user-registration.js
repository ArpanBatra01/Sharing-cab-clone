import { useState } from "react";
import ReactDOM from 'react-dom/client';
import { isCompositeComponentWithType } from "react-dom/test-utils";

function Register() {
  const [name, setName] = useState("");
  const [email, setemail]=useState("");
  const [number, setphoneNumber]=useState("");
  const [password, setpassword]=useState("");
  const [address, setaddress]=useState("");
  const [city, setcity]=useState("");
  const [state, setstate]=useState("");
  const [image, setimage]=useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div><label>Enter your name:
        <input
        type="text"
        value={name}  
          onChange={(e) => setName(e.target.value)}
        />
      </label></div>
      <div><label>Enter your email:
        <input
          type="email"
          value={email}
          onChange={(e)=> setemail(e.target.value)}
        />
      </label></div>
      <div><label>Enter your phoneNumber: 
        <input
         type="number"
         value={number}
         onChange={(e)=> setphoneNumber(e.target.value)}
        />
      </label></div>
      <label>Enter your password:
        <input
         type="password"
         value={password}
         onChange={(e)=>setpassword(e.target.value)}

        />
      </label>
      <div><label>Enter your address:
        <input
         type="text"
         value={address}
         onChange={(e)=>setaddress(e.target.value)}
        />
      </label></div>
      <div><label>Add your image:
        <input
         type="file"
         value={image}
         onChange={(e)=>setimage(e.target.value)}
        />
      </label></div>
      <div><label>Enter your city:
        <input
         type="text"
         value={city}
         onChange={(e)=>setcity(e.target.value)}
        />
      </label></div>
      <div><label>Enter your state:
        <input
         type="text"
         value={state}
         onChange={(e)=>setstate(e.target.value)}
        />
      </label></div>

      <input type="submit"/>
    </form>
  )
}

export default Register