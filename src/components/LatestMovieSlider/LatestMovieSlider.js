import React from "react";
import { Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import useMovieDB from "../../hooks/useMovieDB";
const LatestMovieSlider = () => {
  const randomVideo = Math.floor(Math.random() * 12);
  const { loading, data } = useMovieDB("/movie/now_playing");
  return (
    <div>
      <h2 className="title-latest">Now Playing Movie On NetFlix</h2>
      <Row>
        <Col md={24} xs={24}>
          <div className="latest-card">
            <>
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                autoplay={{
                  delay: 3000,
                }}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {loading ? (
                  <h1>Loading...</h1>
                ) : (
                  data.results
                    .slice(randomVideo, randomVideo + 4)
                    .map((movie) => (
                      <SwiperSlide>
                        <div className="latest-bg">
                          <img
                            src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                            alt=""
                            style={{
                              position: "absolute",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              width: "100%",
                              height: "350px",
                              borderRadius: "25px",
                            }}
                          />
                        </div>
                        <div className="latest-poster">
                          <img
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            alt=""
                            style={{
                              width: "300px",
                              maxHeight: "335px",
                              borderRadius: "25px",
                            }}
                          />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                      </SwiperSlide>
                    ))
                )}
              </Swiper>
            </>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default LatestMovieSlider;
