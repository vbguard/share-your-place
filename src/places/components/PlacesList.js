import React from "react";
import PlacesItem from "./PlacesItem";
import Card from "../../shared/components/UIElements/Card/Card";

import "./PlacesList.css";

function PlacesList({ places }) {
  if (PlacesItem.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Create your place {";)"}</h2>
          <button>Create Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="places-list">
      {places.map(place => (
        <PlacesItem
          key={place.id}
          id={place.id}
          title={place.title}
          imageUrl={place.imageUrl}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          location={place.location}
          rating={place.rating}
        />
      ))}
    </ul>
  );
}

export default PlacesList;
