import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import "./PlacesItem.css";

function PlacesItem({
  id,
  title,
  imageUrl,
  description,
  address,
  creatorId,
  location,
  rating
}) {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowCorfirmModal] = useState(false);
  const [mapOptions, setMapOptions] = useState({
    lat: location.lat,
    lng: location.lng,
    zoom: location.zoom
  });
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const onChangeMap = ({ lat, lng, zoom }) => {
    setMapOptions({
      lat,
      lng,
      zoom
    });
  };

  const showDeleteWarningHandler = () => {
    setShowCorfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowCorfirmModal(false);
  };
  const confirmDeleteHandler = () => {
    setShowCorfirmModal(false);
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="places-item=+modal-content"
        footerClass="places-item__modal_footer"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <Map
          onChange={onChangeMap}
          location={mapOptions}
          className="map-container"
        />
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="places-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
            <Button danger onClick={confirmDeleteHandler}>Delete</Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter
        </p>
      </Modal>
      <li className="places-item">
        <Card className="places-item__content">
          <div className="places-item__image">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="places-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="places-item__actions">
            <Button inverse onClick={openMapHandler}>
              View on map
            </Button>
            <Button to={`/places/${id}`}>Edit</Button>
            <Button danger onClick={showDeleteWarningHandler}>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlacesItem;
