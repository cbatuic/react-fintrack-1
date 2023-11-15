import React from 'react';
import { Button } from 'primereact/button';
        

const Home = () => {

  const navToLogin = () => {
    console.log("login")
    window.location.assign('/login')
  }

  return <>
      <div>Home Page</div>
      <Button label="Login" severity="info" onClick={navToLogin}/>
    </>;
};

export default Home;