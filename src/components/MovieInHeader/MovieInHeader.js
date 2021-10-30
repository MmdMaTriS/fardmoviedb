import { Spin } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import useMovieDB from "../../hooks/useMovieDB";
const MovieInHeader = () => {
  const { data, loading } = useMovieDB("/movie/upcoming");
  let randomVideo = Math.floor(Math.random() * 19);
  return (
    <>
      <div className="MostViewVideo">
        {loading ? (
          <div className="Spin">
            <Spin size="large" />
          </div>
        ) : (
          data?.results?.slice(randomVideo, randomVideo + 1).map((movie) => (
            <>
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <Swiper
                  key={movie.id}
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  speed={600}
                  parallax={true}
                  className="mySwiper"
                >
                  <div
                    key={movie.id}
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    data-swiper-parallax="-23%"
                  ></div>
                  <SwiperSlide key={movie.id}>
                    <div className="title" data-swiper-parallax="-300">
                      <span
                        style={{
                          backgroundColor: "rgba(49, 49, 49, 0.6)",

                          borderRadius: "15px",
                          textAlign: "center",
                        }}
                      >
                        {movie.title}
                      </span>
                      <br />
                      <br />
                      <br />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="subtitle" data-swiper-parallax="-200">
                      <span
                        style={{
                          backgroundColor: "rgba(49, 49, 49, 0.6)",
                          borderRadius: "15px",
                        }}
                      >
                        Rate:{" "}
                        <span style={{ color: "red" }}>
                          {movie.vote_average}
                        </span>
                      </span>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="text" data-swiper-parallax="-100">
                      <div
                        style={{
                          backgroundColor: "rgba(49, 49, 49, 0.6)",
                          borderRadius: "10px",
                        }}
                      >
                        <span>{movie.overview}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Link>
            </>
          ))
        )}
      </div>
    </>
  );
};
export default MovieInHeader;
