import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			productsList: [],
			urlProducts: "http://localhost:5000/api/products/",
			shoppingCart: [],
		},
		actions: {
			setShoppingCart: tituloproducto => {
				const store = getStore();
				if (store.shoppingCart.includes(tituloproducto) === false) {
					setStore({ shoppingCart: [...store.shoppingCart, tituloproducto] });
				}
			},
			setDeleteShoppingCart: tituloproducto => {
				setStore({ shoppingCart: getStore().shoppingCart.filter(producto => producto !== tituloproducto) });
			},
            axiosProducts: () => {
                    axios.get("http://localhost:5000/api/products/").then(result=>{
                        console.log("resultado",result.data)
                        setStore({ productsList: result.data })
                    })
			},
			/* fetchProducts: () => {
				const URL1 = "https://pokeapi.co/api/v2/pokemon/";
                const URL = "http://192.168.1.96:5000/api/products/";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ productsList: data.results })); //Obtienes los datos
			}, */
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;