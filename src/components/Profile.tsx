import React from "react";
import { getCurrentUser } from "../services/auth.service";

const Profile: React.FC = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.displayName}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser?.stsTokenManager.accessToken?.substring(0, 10)} ...{" "}
        {currentUser?.stsTokenManager?.accessToken?.substr(currentUser?.stsTokenManager?.accessToken.length - 10)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.uid}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles?.map((role: string, index: number) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
