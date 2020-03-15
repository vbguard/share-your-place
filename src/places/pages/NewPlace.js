import React from "react";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../utils/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import useForm from '../../hooks/useForm'

import "./FormPlace.css";

function NewPlace(props) {
  const [formState, inputHandler] = useForm({
      title: {
        value: "",
        isValid: true
      },
      description: {
        value: "",
        isValid: true
      },
      address: {
        value: "",
        isValid: true
      }
    }, false)


  const onSubmitHandler = event => {
    event.preventDefault()
    console.log('formState.inputs :', formState.inputs);
  }

  return (
    <form className="place-form" onSubmit={onSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter valid text."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Add Place
      </Button>
    </form>
  );
}

export default NewPlace;
