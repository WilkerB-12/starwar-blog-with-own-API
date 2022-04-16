import React, { useContext, useEffect } from "react"
import propTypes from "prop-types"
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Card = ({ item, resource }) => {
  const { store, actions } = useContext(Context);
  const history = useHistory()

  return (
    <div className="card m-3" style={{ minWidth: "18rem" }}>
      <img src={`https://starwars-visualguide.com/assets/img/${resource}/${item.uid}.jpg`} className="card-img-top" alt="..." style={{ maxHeight: "320px" }} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-primary"
            onClick={(e) => {
              history.push(`/${resource}/${item.id}`)
            }}
          >Details</button>
          <button className="btn btn-outline-warning"
            onClick={(e) => {
              actions.addFavorites(item.id, resource)
            }}
          ><i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
Card.propTypes = {
  item: propTypes.object,
  resource: propTypes.string,
};