import React, { useContext } from "react";
import { Context } from "./appContext";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="barra-superior">
			<div className="nav align-left">
				<Link to="/">
					<h1> Home </h1>
				</Link>
			</div>

			<div className="carrodecompra align-right">
				<Link className="cart-button dropdown">
					<button
						className="collapsible boton"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						{store.shoppingCart.length}
						<i className="fas fa-shopping-cart" />
					</button>
					<div className="content cart-product">
						{store.shoppingCart.map((item, index) => {
							return (
								<a key={index} className="content" href="#">
									{item}
									<button
										className="boton align-left"
										onClick={() => {
											actions.setDeleteShoppingCart(item);
										}}>
										<span>X</span>
									</button>
								</a>
							);
						})}
					</div>
				</Link>
			</div>
		</nav>
	);
};