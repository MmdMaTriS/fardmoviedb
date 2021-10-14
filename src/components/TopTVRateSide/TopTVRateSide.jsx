import React from "react";
import {
  VideoCameraOutlined,
  HistoryOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import useMovieDB from "../../hooks/useMovieDB";
import { Link } from "react-router-dom";
const TopTVRateSide = () => {
  const randomVideo = Math.floor(Math.random() * 14);
  const { loading, data } = useMovieDB("/tv/top_rated");
  return (
    <section className="sider-sec">
      <div className="Sider-Title">
        <span>Top Rate TV Show's</span>
        <span className="sider-icon">
          <LineChartOutlined style={{ color: "blue" }} />
        </span>
        <hr />
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.results.slice(randomVideo, randomVideo + 5).map((movie) => (
          <Link to={`/tv/${movie.id}`}>
            <div className="sider-card">
              <div className="side-movie-poster">
                <img
                  src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                  alt="movie1"
                  width="60%"
                  style={{
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="side-movie-title">
                <span>
                  <VideoCameraOutlined
                    style={{ color: "green", marginTop: "5px" }}
                  />
                </span>
                <span
                  style={{
                    marginLeft: "10px",
                    fontSize: "12px",
                    fontFamily: "Arial",
                  }}
                >
                  {movie.name}
                </span>
              </div>
              <div className="side-movie-time">
                <HistoryOutlined style={{ color: "green", marginTop: "5px" }} />
                <span
                  style={{
                    marginLeft: "10px",
                    fontSize: "12px",
                    fontFamily: "Arial",
                  }}
                >
                  {movie.first_air_date}
                </span>
              </div>
            </div>
          </Link>
        ))
      )}
    </section>
  );
};
export default TopTVRateSide;
