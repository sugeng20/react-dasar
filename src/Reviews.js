/** @format */

import React from 'react';
import './App.css';

function Reviews() {
	const users = [
		{
			id: 1,
			name: 'Sugeng',
			review:
				'Harganya Murah tapi kualitas buka kaleng kaleng nih. Keren',
		},
		{
			id: 2,
			name: 'Mayasoshi',
			review:
				'Harganya Murah tapi kualitas buka kaleng kaleng nih. Keren',
		},
		{
			id: 3,
			name: 'Shayna',
			review:
				'Harganya Murah tapi kualitas buka kaleng kaleng nih. Keren',
		},
	];

	const listReview = users.map(itemUser => (
		<div key={itemUser.id} className='Item'>
			<img src='' />
			<div className='User'>
				<h3>{itemUser.name}</h3>
				<p>{itemUser.review}</p>
			</div>
		</div>
	));

	return (
		<div className='Review-box'>
			<h2>Reviews</h2>
			{listReview}
		</div>
	);
}

export default Reviews;
