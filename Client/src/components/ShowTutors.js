import React from 'react';

const ShowTutors = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.tutors.map((tutor, index) => (
				<div>
					
					<div
						onClick={() => props.handleFavouritesClick(tutor)}
						
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default ShowTutors;