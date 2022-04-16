const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			single: [],
			favorites: [],
			baseUrl: "http://localhost:5000"
		},
		actions: {
			getItems: async (resource) => {
				const response = await fetch(
					`${getStore().baseUrl}/${resource}`
				)
				const body = await response.json()
				if (!response.ok) return;
				if (resource === "characters") setStore({ characters: body });
				if (resource === "planets") setStore({ planets: body });
				if (resource === "vehicles") setStore({ vehicles: body });
			},
			getSingle: async (id, resource) => {
				const response = await fetch(`${getStore().baseUrl}/${resource}/${id}`
				);
				const body = await response.json()
				if (!response.ok) return;
				setStore({ single: body })
				return body
			},

			addFavorites: async (id, resource) => {
				let item = await getActions().getSingle(id, resource);
				console.log(item);
				let Newfavorites = getStore().favorites;
				let NumberFavorites = Newfavorites.push(item);
				console.log(Newfavorites);
				console.log(NumberFavorites)
				setStore({ favorites: Newfavorites })
			},
			deleteFavorites: (newArray) => {
				setStore({ favorites: newArray })
			}


		}
	}
};

export default getState;
