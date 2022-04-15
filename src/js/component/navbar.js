import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { logoStarwars } from "../../img/logo-star-wars.png";
import { Context } from "../store/appContext";

export const Navbar = ({ item, resource }) => {
	const { store, actions } = useContext(Context);
	const history = useHistory()

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
							style={{ maxWidth: "100px" }} />
					</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
							Favorites <span class="badge bg-secondary">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuClickableInside">
							{store.favorites.length == 0 ? <li className="text-center">(empty)</li> : store.favorites.map((favorite, i) => {
								return (<><li key={i}>
									<div className="d-flex align-items-center px-1">
										<button className="dropdown-item" type="button" onClick={(e) => {
											(favorite.description == "A planet." ? history.push(`/planets/${favorite.uid}`) : favorite.description == "A vehicle" ? history.push(`/vehicles/${favorite.uid}`) : history.push(`/people/${favorite.uid}`))
										}}>{favorite.properties.name}
										</button>
										<span
											className="fas fa-solid fa-trash close"
											onClick={(e) => {
												const deletedFavorite = store.favorites.filter(
													(deletedFavorite, index) => {
														if (index == i)
															return false;
														else
															return true;
													}
												);
												actions.deleteFavorites(deletedFavorite)
											}}>
										</span>
									</div>
								</li>
								</>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
