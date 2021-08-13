import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleFavorite from "../../components/SingleFavorite/SingleFavorite";
import { FavouriteContext } from "../../Helper/Context";
const Favourite = () => {
  const [page, setPage] = useState(1);
  const [numOfPages, setNumberOfPages] = useState();
  const { favourites, setFavourites } = useContext(FavouriteContext);
  return (
    <div>
      <span className="pageTitle">Your favourite ones</span>
      <div className="trending">
        {favourites &&
          favourites.map((con) => (
            <SingleFavorite
              key={con.id}
              id={con.id}
              poster={con.poster_path}
              title={con.title || con.name}
              date={con.release_date}
              vote_average={con.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Favourite;
