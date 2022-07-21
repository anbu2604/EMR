import React, { useEffect, useState } from 'react'
function App() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
function saveData()
{
  let data={name,email,password}
console.warn(data);
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="App">
      <h1>Login </h1>  
      <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Login</button>
    </div>
  );
}
export default App;









// import React, { useState, useEffect } from "react";
// import { useHistory } from 'react';
// import Login from "./login/Login";
// function Column(){
//     const [email, setEmail]=useState("");
//     const [password, setPassword]=useState("");
//     useEffect(()=>{
//         if(localStorage.getItem('user-info'))
//         {
//             history.push("/add")
//         }
//     }, [])
//     async function Column(){
//         console.warn(email,password)
//         let item={email,password};
//         let result= await fetch("http:localhost:3000/api/login",{
//             method:'POST',
//             headers:{"Content-Type":"application/json",
//             "Accept":'application/json'
//         },
//         body:JSON.stringify(item)
//         });
//         result =await result.json();
//         localStorage.setItem("user-info" ,JSON.stringify(result))
//         history.push("/add")
//     }
//     return(
//         <div >
//             <h1>Login Page</h1>
//             <div className="col-sm-6 offset-sm-3">
//                 <input type="text" onChange={(e)=>setEmail(e.target.value)}
//                 className="form-control"/>
//                 <br />
//                 <input type="password" onChange={(e)=>setPassword(e.target.value)}
//                 className="form-control"/>
//                 <br />
//                 <button className="btn btn-primary">Login</button>
//             </div>
//         </div>
//     )
// }

// export default Column;


// import React from 'react';
// import { Redirect } from 'react';
// import { SyntheticEvent, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Api = () => {
//     const [userName, setuserName] = useState('');
//     const [userid, setuserId] = useState('');
//     const [password, setPassword] = useState('');
//     const [redirect, setRedirect] = useState(false);


//     const submit = async () => {
//         sessionStorage.setItem("userName", userName);
//         sessionStorage.setItem("Pinnumber", Pinnumber);
//         localStorage.setItem("userName", userName);
//         localStorage.setItem("Pinnumber", Pinnumber);
//         console.log("userName----->", userName);
//         console.log("Pinnumber----->", Pinnumber);
//         e.preventDefault();
//         const response = await fetch(`http://localhost:3000/api/login`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             credentials: 'include',
//             body: JSON.stringify({
//                 userName,
//                 password
//             })

//         });
//         const content = await response.json();
//         console.log(content);

//         setRedirect(true);
//         props.setName(content.userName);
//         setuserId(content.userId);
//         console.log(content.userId);
//     }
//     if (redirect) {
//         return <Redirect to="/" />
//     }
//     return (
//         <div>
//             <form onSubmit={submit} className="form-signin">
//                 <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//                 <div>
//                     <input type="userName" className="form-control" placeholder="UserName" required
//                         onChange={e => setuserName(e.target.value)} />
//                 </div>
//                 <div>
//                     <input type="password" className="form-control" placeholder="Password" required
//                         onChange={e => setPassword(e.target.value)} />
//                 </div>

//                 <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
                
//             </form>
//         </div>
//     );
// };

// export default Api;





