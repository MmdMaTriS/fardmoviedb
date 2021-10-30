import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Badge, Card } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import useMovieDB from "../../hooks/useMovieDB";
import { Link } from "react-router-dom";

const { Meta } = Card;
const PopMovieSlider = () => {
  const { data, loading } = useMovieDB("/movie/popular");

  return (
    <>
      <div className="TitlePopPlace">
        <h2>
          Popular Movies On <span>NetFlix</span>
        </h2>
      </div>
      <div className="PopularMoviesSlider">
        <Swiper
          spaceBetween={30}
          slidesPerGroup={2}
          navigation={true}
          keyboard={true}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            300: {
              width: 300,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
        >
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data?.results?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <Card
                    hoverable
                    style={{ width: "100%", borderRadius: 25 }}
                    cover={
                      <img
                        style={{ borderRadius: 15 }}
                        alt="example"
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                      />
                    }
                  >
                    <Meta
                      avatar={
                        <VideoCameraOutlined style={{ color: "green" }} />
                      }
                      title={movie.title}
                      description={
                        <Badge
                          count={`${movie.vote_average}`}
                          style={{
                            cursor: "pointer",
                            backgroundColor: "gold",
                            color: "black",
                            fontSize: "14px",
                          }}
                        />
                      }
                    />
                  </Card>
                </Link>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </>
  );
};
export default PopMovieSlider;
