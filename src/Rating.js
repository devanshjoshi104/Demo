import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './RatingStyles.css'

const Rating = () => {
const [rate, setRate] = useState(1);
return (
	<div className='Container'>
	{[...Array(5)].map((item, index) => {
		const givenRating = index + 1;
		return (
		<label>
			<input
			type="radio"
			value={givenRating}
			onClick={() => {
				setRate(givenRating);
				
			}}
			/>
			<div className='Rating'>
			<FaStar
				color={
				givenRating < rate || givenRating === rate
					? "rgb(255,0,0)"
					: "rgba(255, 89, 89,0.4)"
				}
			/>
			</div>
		</label>
		);
	})}
	</div>
);
};

export default Rating;

