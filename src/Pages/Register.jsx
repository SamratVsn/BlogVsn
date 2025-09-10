import React, { useState } from 'react'

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password1: ''
  })

  const inputChangeHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        <form action="register">
          <p>Error Message Here</p>
          <input type="text" placeholder='Full Name' name="name" value={userData.name} onChange={inputChangeHandler} autoFocus/>
          <input type="text" placeholder='someone@gmail.com' name="email" value={userData.email} onChange={inputChangeHandler} autoFocus/>
          <input type="password" placeholder='Password' name="password" value={userData.password} onChange={inputChangeHandler} autoFocus/>
          <input type="password" placeholder='Confirm Password' name="password1" value={userData.password1} onChange={inputChangeHandler} autoFocus/>
          <button type='submit'>Submit</button>
        </form>
        <small>Already have an account? <Link to="/login">Sign in</Link></small>
      </div>
    </div>
  )
}

export default Register
