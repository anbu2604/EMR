import React, { useState } from 'react'


const Useform = (validation) => {
  const [values, setValues] = useState({
    username: "",
    mobileno: "",
    useremail: "",
    userpassword: "",
    confirmpassword: "",


  });
  
  const [errors, setErrors] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handlesubmit = (event) => {
    event.preventDefault();
   
    setErrors(validation(values));
  
  };

 
  

  return { handlechange, values, handlesubmit, errors };

  
};



export default Useform;