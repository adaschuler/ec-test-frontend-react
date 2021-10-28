import React, { useState, useEffect, useContext } from "react";
import { Context } from "./appContext";
import { ProductCard } from "./productcard";

export const ProductListPage = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.axiosProducts();
	}, []);

	return (
		<div className="">
			<div className="">
            {/* {store.productsList} */}ola
				{store.productsList.map((item, index) => {
					let linkUrl = index + 1;
					let URLimage="http://localhost:5000";

					return (
						<ProductCard
							key={index}
							title={item.name}
							image={URLimage+item.image}
							price={item.price}
                            indexlink={linkUrl}
						/>
					);
				})}
			</div>
		</div>
	);
};