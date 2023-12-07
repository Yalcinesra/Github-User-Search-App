import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import UserInfo from "./UserInfo";
import NotFound from "./NotFound";
import { useState } from "react";

const SearchUser = () => {
  const [userName, setUserName] = useState("");
  const [show, setshow] = useState(false);
  const [veri, setVeri] = useState("");

  const url = `https://api.github.com/users/${userName}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setVeri(data);
      setshow(false);
    } catch (error) {
      setshow(true);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <InputGroup className="mb-3 w-100">
            <Form.Control
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Github's username"
              aria-label="Github's username"
              aria-describedby="basic-addon2"
            />

            <Button
              onClick={() => {
                getData();
              }}
              variant="outline-secondary"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
      {show ? <NotFound /> : null}
      <div className="mt-4 justify-content-center align-items-center">
        {veri && !show && <UserInfo veri={veri} />}
      </div>
    </div>
  );
};
export default SearchUser;
