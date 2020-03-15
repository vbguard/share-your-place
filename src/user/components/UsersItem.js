import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar/Avatar";
import Card from '../../shared/components/UIElements/Card/Card'
import "./UsersItem.css";

function UsersItem({ id, name, placeCount, image }) {
  return (
    <li className="users-item">
      <Card className="users-item__content"> 
        <Link to={`/${id}/places/`}>
          <div className="users-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="users-item__info">
            <h2 className="">{name}</h2>
            <h3 className="">
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default UsersItem;
