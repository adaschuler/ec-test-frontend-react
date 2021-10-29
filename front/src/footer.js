import React, { Component } from "react";
import github from "./img/github.png";
import "./footer.css";

export const Footer = () => (
	<footer className="barra-inferior">
		<p>
			Made by <img className="githublogo" src={github} width="30px" height="30px" />{" "}
			<a href="https://github.com/adaschuler">Ada Schüler</a>, with love!
		</p>
	</footer>
);