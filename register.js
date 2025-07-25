import React from 'react'

export const Register = () => {
  return (
    <>
    <div className='register'>
    <h1>I'm register component</h1>
   

    
    <form>
      <div className='chat'>
        <input type='text' placeholder='Name'></input>
        <br></br>
        <br></br>
       
        <input type='Email' placeholder='Email'></input>
        <br></br>
        <br></br>
      
        <input type='password' placeholder='password'></input>
        <br></br>
        <br></br>
       
        <input type='Data' placeholder='Date'></input>
        </div>
         <br></br>
           <br></br>
        <textarea></textarea>
        <br></br>
<button>Submite</button>
<br></br>
<br></br>
    </form>
   </div>
    </>
  )
}