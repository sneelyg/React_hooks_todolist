import React from "react";
import {Lista} from "./list.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Lista/>
			
		</div>
	);
};

export default Home;
