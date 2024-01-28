import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieDetail.css";
import { useParams, useHistory } from "react-router-dom";

const MovieDetail = () => {
  // get id of the movie which the user clicked
  const { id } = useParams();
  // to go back to home page
  const history = useHistory();

  // trigger the redux function
  const dispatch = useDispatch();
  // get all the data of the movie the user selected
  const selectedMovie = useSelector((store) => store.selectedMovie);

  // to dispatch the store automatically when the user comes to this page
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES_BY_ID", payload: id });
  }, []);

  return (
    <div data-testid="movieDetails">
      {/* to go back to the home page */}
      <button data-testid="toList" onClick={() => history.goBack()}>
        Go Back
      </button>

      {/* to display the imformation of the movie */}
      <h1>{selectedMovie.title}</h1>
      <h6>{selectedMovie.description}</h6>

      <img src={selectedMovie.poster} alt="" />
    </div>
  );
};

export default MovieDetail;
