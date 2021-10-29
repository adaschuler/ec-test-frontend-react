import React, { useContext } from "react";
import { Context } from "./appContext";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import "./productcard.css";

export const ProductCard = props => {
	const { store, actions } = useContext(Context);

	const history = useHistory();

	return (
		<div className="">
			<div className="ficha">
				<div className="ficha-body">
					<div>
						<h5 className="ficha-title">{props.title}</h5>
					</div>
					<div>
						<img className="imgproduct" src={props.image}/>
						<p><span>{props.price}</span></p>
						<button onClick={() => actions.setShoppingCart(props.title)} className="boton compra">
							Añadir a la cesta 
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	title: PropTypes.string,
	id: PropTypes.object,
	image: PropTypes.string,
	price: PropTypes.string,
};