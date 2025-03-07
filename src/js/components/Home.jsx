import React, {useState} from "react";
import  Modal from  "./Modal";

const Home = () => {
	const [samepleState, setSampleState]= useState("");
	
	return (
		<div className="text-center">
           <button className="labelOne">Orange</button>
           <button>Apple</button>
           <button>Broccoli</button>
		   <p>I like, I like, to eat Orange</p>
			<Modal />
		</div>
	);
};

export default Home;