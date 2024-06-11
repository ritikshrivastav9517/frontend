import React from "react";
import "./login.css";
import { useAuth0 } from "@auth0/auth0-react";

export const Contact = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div>
      <header className="App-header">
        <div
         
        >
          {isAuthenticated && <h3>{user.name}</h3>}
          {isAuthenticated ? (
            <button className="sticky-button" onClick={(e) => logout()}>Logout</button>
          ) : (
            <button className="sticky-button" onClick={(e) => loginWithRedirect()}>Login</button>
          )}
        </div>
      </header>
    </div>
  );
};
