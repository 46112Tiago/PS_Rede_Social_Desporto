import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from 'react-icons/fi';

const LogOutOAuth = () => {
  const { logout } = useAuth0();

  return (
    <a href='#' onClick={() => 
      {
        document.cookie = 'userId' + "=; Max-Age=0"
        logout({ returnTo: window.location.origin })
        
      }}>
      <FiLogOut></FiLogOut> LogOut 
    </a> 
  );
};

export default LogOutOAuth;