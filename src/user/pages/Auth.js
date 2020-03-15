import React, { useState, useContext } from "react";
import Card from "../../shared/components/UIElements/Card/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import useFrom from "../../hooks/useForm";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../utils/validators";
import { AuthContext } from '../../context/authContext'

import "./Auth.css";

function Auth() {
  const auth = useContext(AuthContext)

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useFrom(
    {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const authOnSubmit = e => {
    e.preventDefault();
    auth.login();
    console.log("formState :", formState.inputs);
  };

  const switchModeHandler = () => {
    if (isLoginMode) {
      setFormData(
        { ...formState.inputs, name: { value: "", isValid: false } },
        false
      );
    } else {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    }

    setIsLoginMode(prevMode => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authOnSubmit}>
        {!isLoginMode && (
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
            onInput={inputHandler}
            errorText="Please enter a name (min 3 characters)."
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-mail"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "Login" : "Register"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        {isLoginMode ? "Sign-Up" : "Sign-In"}
      </Button>
    </Card>
  );
}

export default Auth;
