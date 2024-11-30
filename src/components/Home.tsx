import React, { useState, useEffect } from "react";

import { getPublicContent } from "../services/user.service";

const Home: React.FC = () => {
  const [content, setContent] = useState<any>([]);

  useEffect(() => {
    getPublicContent().then(
      (response) => {
        console.log(response.data)
        setContent(response.data);
      },
      (error) => {
        const _content = error.message;
        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;
