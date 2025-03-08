import React, {useState} from "react";
import  Modal from  "./Modal";

const Home = () => {
	const [samepleState, setSampleState]= useState("");
	
	const fruitArray = ["Orange", "Apple", "Broccoli"];

	const fruitNoOrange = fruitArray.filter((item)=> item != "Orange" );
	const fruitNoApple = [];
	const fruitNoBroccoli = [];

	const students = [
		{
		name: "Jacky",
		age: 13,
		glasses: true
	},
		{
		name: "Drew",
		age: 43,
		glasses: false
	},
		{
		name: "Shay",
		age: 17,
		glasses: false
	},
		{
		name: "Alex",
		age: 97,
		glasses: true
	},
		{
		name: "Brandon",
		age: 55,
		glasses: false
	},
]
	
	return (
		<div className="text-center">
			{fruitNoOrange.map((fruit)=>{
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