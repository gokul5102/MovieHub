import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleMovie from "../../components/SingleMovie/SingleMovie";
import { FavouriteContext } from "../../Helper/Context";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../redux/actions/Movies";
const PopularMovies = () => {
  const [page, setPage] = useState(1);
  const [numOfPages, setNumberOfPages] = useState();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.PopMovies.movies);

  const { content, setContent } = useContext(FavouriteContext);

  const fetchPopular = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchPopular();
    dispatch(getMovies(content));
  }, [page]);

  return (
    <div>
      <span className="pageTitle">All the popular ones</span>
      <div className="trending">
        {content &&
          content.map((con) => (
            <SingleMovie
              key={con.id}
              id={con.id}
              poster={con.poster_path}
              title={con.title || con.name}
              date={con.first_air_date || con.release_date}
              media_type={con.media_type}
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

export default PopularMovies;
