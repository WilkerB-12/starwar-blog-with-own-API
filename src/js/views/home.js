import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Title } from "../component/Title";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (<div className="container">

		<div className="text-center mt-5">
			<div className="text-start title">
				<Title text="Characters" />
			</div>
			<div className="d-flex flex-row overflow-auto justify-content-start">
				{store.characters.map((character, i) => {
					return <Card key={character.uid} item={character} resource={"characters"} />
				})}
			</div>
			<div className="text-start title mt-5">
				<Title text="Planets" />
			</div>
			<div className="d-flex flex-row overflow-auto justify-content-start">
				{store.planets.map((planet, i) => {
					return <Card key={planet.uid} item={planet} resource={"planets"} />
				})}
			</div>
			<div className="text-start title mt-5">
				<Title text="Vehicles" />
			</div>
			<div className="d-flex flex-row overflow-auto justify-content-start">
				{store.vehicles.map((vehicle, i) => {
					return <Card key={vehicle.uid} item={vehicle} resource={"vehicles"} />
				})}
			</div>
		</div>
	</div>
	);
}
