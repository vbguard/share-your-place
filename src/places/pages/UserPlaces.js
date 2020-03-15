import React from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../../places/components/PlacesList";

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

function UserPlaces(props) {
  const { uid } = useParams();

  const filteredPlaces = PLACES.filter(place => place.creator === uid);

  return <PlacesList places={filteredPlaces} />;
}

export default UserPlaces;
