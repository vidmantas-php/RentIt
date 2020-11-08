import React from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
// import { Button } from "../../components/Buttons/Button/Button";
import { auth, provider } from "../../firebase";
import { Button } from "@material-ui/core";

export default (props) => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login d-flex justify-content-center align-items-center">
      <Form>
        <h2>Login</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">Forgot password?</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Rules" />
        </Form.Group>
        <div>
          <div className="primary__buttons d-flex">
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              buttonStyle="btn--danger--solid"
              type="submit"
            >
              Back
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="outlined" color="primary" onClick={signIn}>
              GOOGLE LOGIN!!!
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};
