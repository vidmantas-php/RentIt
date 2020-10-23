import React from "react";
import "./Register.css";
import { Form } from "react-bootstrap";
import { Button } from "../../components/Buttons/Button/Button";

export default () => {
  return (
    <div className="login">
      <Form>
        <h2>Register</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I accept the rules" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Button buttonStyle="btn--danger--solid" type="submit">
          Back
        </Button>
      </Form>
    </div>
  );
};
