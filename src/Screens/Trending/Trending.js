import axios from "axios";
import { useEffect, useState } from "react";
import Content from "../../components/Content/Content";
import CustomPagination from "../../components/Pagination/CustomPagination";
import "./Trending.css";
const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <div className="trending">
        {content &&
          content.map((con) => {
            if (con.media_type === "movie")
              return (
                <Content
                  key={con.id}
                  id={con.id}
                  poster={con.poster_path}
                  title={con.title || con.name}
                  date={con.first_air_date || con.release_date}
                  media_type={con.media_type}
                  vote_average={con.vote_average}
                />
              );
            return;
          })}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
