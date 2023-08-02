
import React, { useState } from 'react';
import "./login.css"
function Regester() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label className='my-1 ' htmlFor="firstname">firstname:</label>
      <br /> <input type="text" className='my-1 w-100  bg-white logininput ' id="firstname" value={firstname} onChange={(event) => setfirstname(event.target.value)} required />
        <br />
        <label className='my-1 ' htmlFor="lastname">lastname:</label>
        <br /> <input type="text" className='my-1 w-100  bg-white logininput ' id="lastname" value={lastname} onChange={(event) => setlastname(event.target.value)} required />
        <br />
        <label className='my-1 ' htmlFor="email">Email:</label>
        <br /> <input type="email" className='my-1 w-100 bg-white logininput ' id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <br />
        <label  className='my-1 'htmlFor="password">Password:</label>
        <br />  <input type="password" className='my-1 w-100  bg-white logininput ' id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        <br />
        <button type="submit" className='my-2   w-25 logininput btn btn-outline-secondary'>Login</button>
      </form>
     
    </div>
  );
}

export default Regester;