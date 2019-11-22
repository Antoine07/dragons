import React, {useState } from 'react';


 const Dragon = () => {

  const [dragon, setDragon] = useState('');

  const handleSumbit = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <p>Liste de dragons</p>
      {message ? (<p>{message}</p>) : null }
      <ul>
        {dragons.map((name,i) => (<li key={i}>{name}</li>))}
      </ul>
      <form onSubmit={handleSumbit}>
        <input 
          type="text" 
          value={dragon} 
          onChange={(e) => setDragon(e.target.value)}
          />
          <input type="submit"/>
      </form>
    </>
  );
}

export default Dragon;
