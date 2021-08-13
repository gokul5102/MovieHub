import { Badge } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import ContentModal from "../ContentModal/ContentModal";
import { img_300, unavailable } from "./../../config/config";
import "./SingleFavorite.css";
import { FavouriteContext } from "../../Helper/Context";
import Button from "@material-ui/core/Button";

const SingleFavorite = ({ id, poster, title, date, vote_average }) => {
  const { favourites, setFavourites, content, setContent } =
    useContext(FavouriteContext);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-hub-favourites", JSON.stringify(items));
  };
  const removeFavouriteMovie = (id) => {
    const newList = favourites.filter((f) => f.id !== id);
    setFavourites(newList);
    saveToLocalStorage(newList);
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
          onClick={() => removeFavouriteMovie(id)}
          variant="outlined"
          color="secondary"
        >
          Remove ❌
        </Button>
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleFavorite;
