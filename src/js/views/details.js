import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  if (params.resource == "characters") {
    params.resource = "people"
  }

  useEffect(() => {
    actions.getSingle(params.id, params.resource)
    console.log(params.id)
    console.log(params.resource)
  }, [])

  return (
    <><div className="container ">
      <div className="card mb-3 border-0 border-bottom border-danger py-3">
        <div className="row g-0">
          <><div className="col-md-4">
            <img src={params.resource == "people" ? `https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg` : `https://starwars-visualguide.com/assets/img/${params.resource}/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." style={{ maxWidth: "300px" }} />
          </div>
            <div className="col-md-8">
              <div className="card-body justify-content-md-center">
                <h2 className="card-title fw-bold mt-4 text-center">{store.single.name}</h2>
                <p className="card-text text-center fs-5 px-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis
                  sem erat, sit amet vulputate felis bibendum quis. Integer venenatis a
                  sapien sed rhoncus. Mauris lacinia mi vitae metus elementum, ac porttitor
                  quam fermentum. Donec vel ornare nibh. Morbi at nisi lobortis, vestibulum
                  ante non, lacinia nibh. Aliquam pretium est at nisl semper fringilla. Morbi tempor enim
                  pulvinar faucibus vehicula.Donec ac suscipit dui. Donec consequat nisl
                  lectus, eget auctor lorem vehicula non.
                </p>
                <p className="card-text  text-center"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div></>
        </div>
      </div>
    </div>
      <div className="container">
        <div class="row row-cols-6">
          <div class="col"><p className="text-center fw-bold text-danger">{params.resource == "people" ? "Birth Year" : params.resource == "planets" ? "Climate" : "Cargo Capacity"}</p></div>
          <div class="col"><p className="text-center fw-bold text-danger">{params.resource == "people" ? "Eye Color" : params.resource == "planets" ? "Diameter" : "Passengers"}</p></div>
          <div class="col"><p className="text-center fw-bold text-danger">{params.resource == "people" ? "Gender" : params.resource == "planets" ? "Gravity" : "Model"}</p></div>
          <div class="col"><p className="text-center fw-bold text-danger">{params.resource == "people" ? "Hair Color" : params.resource == "planets" ? "Orbital Period" : "Vehicle Class"}</p></div>
          <div class="col"><p className="text-center fw-bold text-danger">{params.resource == "people" ? "Height" : params.resource == "planets" ? "Population" : "Max atmosphering Speed"}</p></div>
          <div class="col"><p className="text-center fw-bold text-danger">{params.resource == "people" ? "Mass" : params.resource == "planets" ? "Terrain" : "Cost in credits"}</p></div>
          <div class="col"><p className="text-center text-danger">{params.resource == "people" ? store.single.birth_year : params.resource == "planets" ? store.single.climate : store.single.cargo_capacity}</p></div>
          <div class="col"><p className="text-center text-danger">{params.resource == "people" ? store.single.eye_color : params.resource == "planets" ? store.single.diameter : store.single.passengers}</p></div>
          <div class="col"><p className="text-center text-danger">{params.resource == "people" ? store.single.gender : params.resource == "planets" ? store.single.gravity : store.single.model}</p></div>
          <div class="col"><p className="text-center text-danger">{params.resource == "people" ? store.single.hair_color : params.resource == "planets" ? store.single.orbital_period : store.single.vehicle_class}</p></div>
          <div class="col"><p className="text-center text-danger">{params.resource == "people" ? store.single.height : params.resource == "planets" ? store.single.population : store.single.max_atmosphering_speed}</p></div>
          <div class="col"><p className="text-center text-danger">{params.resource == "people" ? store.single.mass : params.resource == "planets" ? store.single.terrain : store.single.cost_in_credits}</p></div>
        </div>
      </div>
    </>
  )
}