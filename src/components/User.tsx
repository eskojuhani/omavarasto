import React, { useState, useEffect } from "react";

import { getUserStorages } from "../services/user.service";
import IWarehouseType from "../types/warehouse.type";

const User: React.FC = () => {
  const [content, setContent] = useState<any | null>(null);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    getUserStorages().then(
      (response) => {
        console.log(response.data);
        setContent(response.data);
      },
      (error: Error) => {
        const _content = error.message;

        setErrorText(_content);

        //if (error?.status === 401) {
        //  EventBus.dispatch("logout");
        //}
      }
    );
  }, []);

  const showContent = () => {
    const listItem = content.map((item: IWarehouseType) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>
        </div>
      );
    });
    return <div className="container1">{listItem}</div>;
  }
  return (
    <div className="container">
      <header className="jumbotron">
        {
        content && showContent()
        }
        {
          errorText &&
            <div>{errorText}</div>
        }
      </header>
    </div>
  );
};

export default User;
