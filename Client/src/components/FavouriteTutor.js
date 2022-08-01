import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const FavouriteTutor = (props) => {
const FavouriteComponent = props.removeFavouriteComponent;
const stringify = props.tutors.map( (tutor, id) => (
    <div className='image-container justify-content-start m-3'>

    <div className="card text-white bg-dark mb-3" key={ id }>
      <div className="card-body">
        <img src={tutor.picture} />  
        <h5 className="card-title"><Link to={`details/${tutor._id}`}>{ tutor.name }</Link></h5>
        <div onClick={() => props.handleFavouritesClick(tutor) }
        className='overlay align-items-center justify-content-center'>
          <FavouriteComponent/>
        </div>
        <h6 className="card-subtitle mb-2 ">{tutor.rating} </h6>
        <h6 className="card-subtitle mb-2 text-muted">{tutor.from} </h6>
        <p className="card-text">{ tutor.description } </p>
      </div>
     
    </div>
    </div>
    ));
    console.log(stringify);
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Favourites</span>
            </nav>
            <div class='d-flex'>
                {stringify}
            </div>
        
        </div>
	);
};
export default FavouriteTutor;