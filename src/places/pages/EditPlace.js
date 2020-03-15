import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../utils/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import useForm from "../../hooks/useForm";

import "./FormPlace.css";
import Card from "../../shared/components/UIElements/Card/Card";

const PLACES = [
  {
    id: 1,
    title: "Соломія Крушельницька",
    description:
      "Чи не найперший в Европі пам'ятник ураїнській оперній співачці та педагогу Соломії Крушельницькій, яку визнали найвидатнішою співачкою світу.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipMilB5NHcD5p0rpmxUTgEAungovDRABDuqY-ZNn=w408-h271-k-no",
    address:
      "бульвар Тараса Шевченка, 33, Тернопіль, Тернопільська область, 46000",
    location: {
      lat: 49.551448,
      lng: 25.59496,
      zoom: 17
    },
    rating: 4,
    creator: "1"
  },
  {
    id: 2,
    title: "Соломія Крушельницька",
    description:
      "Чи не найперший в Европі пам'ятник ураїнській оперній співачці та педагогу Соломії Крушельницькій, яку визнали найвидатнішою співачкою світу.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipMilB5NHcD5p0rpmxUTgEAungovDRABDuqY-ZNn=w408-h271-k-no",
    address:
      "бульвар Тараса Шевченка, 33, Тернопіль, Тернопільська область, 46000",
    location: {
      lat: 49.551448,
      lng: 25.59496,
      zoom: 17
    },
    rating: 2,
    creator: "2"
  }
];

function EditPlace(props) {
  const [formState, inputHandler, setFormData] = useForm(
    {
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
    },
    false
  );
  const { placeId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const identifiedPlace = PLACES.find(place => {
    return place.id === Number(placeId);
  });

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          },
          address: {
            value: identifiedPlace.address,
            isValid: true
          }
        },
        true
      );
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setFormData, identifiedPlace]);

  const onSubmitHandler = event => {
    event.preventDefault();
    console.log("formState :", formState);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    !isLoading && (
      <form className="place-form" onSubmit={onSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
          valid
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
          valid
        />
        <Button type="submit" disabled={formState.isValid}>
          Edit place
        </Button>
      </form>
    )
  );
}

export default EditPlace;
