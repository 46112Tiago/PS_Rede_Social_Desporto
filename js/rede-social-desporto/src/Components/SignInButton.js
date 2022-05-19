import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {AiFillGoogleCircle} from 'react-icons/ai'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}><AiFillGoogleCircle></AiFillGoogleCircle></button>;
};

export default LoginButton;