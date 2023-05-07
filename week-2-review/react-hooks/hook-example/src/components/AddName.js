import React, { useState } from 'react';

const AddName = () => {
  const [name, setName] = useState('');
  const [fans, setFans] = useState('');

  const handleText = (e) => {
    setName(e.target.value);
  };

  const submitText = (e) => {
    e.preventDefault();
    if (name !== '') {
      const currFans = fans;
      console.log(currFans);
      setFans(`${currFans} ${name}, `);
      setName('');
    }
  };

  return (
    <>
      <form htmlFor="name" onSubmit={submitText}>
        <input
          id="name"
          value={name}
          placeholder="Add your name to the TRYDENT fan club!"
          onChange={handleText}
        ></input>
      </form>
      <h1>All our adoring fans!</h1>
      <p>{fans}</p>
    </>
  );
};

export default AddName;
