import React from 'react'

export const Loginform = () => {
  return (
    <>
    <div className='login'>
    <h1>I'm Login Form component</h1>
  <form>
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
      </div>
    </>
  )
}
