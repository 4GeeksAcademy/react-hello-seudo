import React, {useState} from "react";
import  Modal from  "./Modal";

const Home = () => {
	const [samepleState, setSampleState]= useState("");
	
	const fruitArray = ["Organge", "Apple", "Broccoli"];

	const fruitNoOrange = [];
	const fruitNoApple = [];
	const fruitNoBroccoli = [];
	
	return (
		<div className="text-center">
			{fruitArray.map((fruit)=>{
				return(
					<div>
						<button>{fruit}</button>
					</div>
				)
			})}

		   <p>I like, I like, to eat nothing</p>
		<Modal />
		</div>
	);
};

export default Home;