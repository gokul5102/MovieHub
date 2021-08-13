import { Badge } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import ContentModal from "../ContentModal/ContentModal";
import { img_300, unavailable } from "./../../config/config";
import "./SingleMovie.css";
import Button from "@material-ui/core/Button";
import { FavouriteContext } from "../../Helper/Context";
const SingleMovie = ({ id, poster, title, date, vote_average }) => {
  const { favourites, setFavourites, content, setContent } =
    useContext(FavouriteContext);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-hub-favourites", JSON.stringify(items));
  };
  const addFavouriteMovie = (id) => {
    content.map((con) => {
      if (con.id === id) {
        if (!favourites.includes(con)) {
          const newFavourites = [...favourites, con];
          setFavourites(newFavourites);
          saveToLocalStorage(newFavourites);
        }
      }
    });
  };

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("movie-hub-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);
  return (
    <ContentModal className="media" id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        <Button
          onClick={() => addFavouriteMovie(id)}
          variant="outlined"
          color="secondary"
        >
          Add to Favourites 🌟
        </Button>
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleMovie;
