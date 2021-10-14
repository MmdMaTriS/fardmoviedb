import { Col, Layout, Row, Spin } from "antd";
import React from "react";
import { useParams } from "react-router";
import useMovieDB from "../../hooks/useMovieDB";
import useImageDB from "../../hooks/useImageDB";

import Classes from "./SingleMovie.module.scss";

const { Content, Sider } = Layout;
const SingleMoviePage = () => {
  const { id } = useParams();
  const { loading, data } = useMovieDB(`/movie/${id}`);
  const { imgLoading, imgData } = useImageDB(`/movie/${id}/images`);
  return (
    <section>
      {loading ? (
        <div>
          <div className="Spin">
            <Spin size="large" />
          </div>
        </div>
      ) : (
        <>
          <div className={Classes.UpSinglePage}>
            <div className={Classes.backgroundSingleMovie}>
              <img
                className={Classes.ImgSingleMovie}
                src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}
                alt=""
                style={{ width: "100%", maxHeight: "500px", height: "100%" }}
              />
            </div>
            <div className={Classes.posterSingleMovie}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  borderRadius: "20px",
                  opacity: "0.92",
                }}
              />
            </div>
          </div>
          <Layout className={Classes.DescriptionLayOut}>
            <Content>
              <Row className={Classes.DescriptionSingleMovie}>
                <Col md={24} xs={24}>
                  <div className={Classes.TitleSingleMovie}>
                    <h2>{data.title}</h2>
                  </div>
                </Col>
                <Col md={24} xs={24}>
                  <div className={Classes.GenresSingleMovie}>
                    {data
                      ? data.genres.map((gerne) => (
                          <span key={gerne.id}>{gerne.name}</span>
                        ))
                      : null}
                  </div>
                </Col>
                <Col md={24} xs={24}>
                  <div className={Classes.LanguageSingleMovie}>
                    {data
                      ? data.spoken_languages.map((lang) => (
                          <span key={lang.id}>{lang.english_name}</span>
                        ))
                      : null}
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className={Classes.ReleaseDateSingle}>
                    Date Released: <span>{data.release_date}</span>
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className={Classes.ReleaseOrNot}>
                    Status: <span>{data.status}</span>
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className={Classes.RateSingleMovie}>
                    Rate: <span>{data.vote_average}</span>/10
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className={Classes.RateCountSingle}>
                    Vote Count: <span>{data.vote_count}</span>
                  </div>
                </Col>
                <Col md={24} xs={24}>
                  <div className={Classes.BudgetSingleMovie}>
                    Budget: <span>{data.budget}</span>
                  </div>
                </Col>
                <Col md={24} xs={24}>
                  <div className={Classes.OverViewSingleMovie}>
                    OverView : <p>{data.overview}</p>
                  </div>
                  <br />
                </Col>
                <Col md={24} xs={24}>
                  <hr />
                  <h1 style={{ fontFamily: "MmdBold", fontSize: "25px" }}>
                    Gallery Of {""}
                    <span style={{ color: "red" }}>{data.title}</span>
                  </h1>
                  <Row gutter={[10, 10]}>
                    {imgLoading ? (
                      <h4>Loading...</h4>
                    ) : (
                      imgData.backdrops.slice(1, 5).map((imgMovies) => (
                        <Col md={12} xs={24} key={imgMovies.id}>
                          <div style={{ marginRight: "50px" }}>
                            <img
                              width="100%"
                              src={`https://image.tmdb.org/t/p/w500/${imgMovies.file_path}`}
                              alt=""
                            />
                          </div>
                        </Col>
                      ))
                    )}
                  </Row>
                </Col>
              </Row>
            </Content>
            <Sider theme="light" className="sidebar-component">
              <div className={Classes.SideMovieCard}>
                <h4>Production companies</h4>
                <Row>
                  {data.production_companies.map((company) => (
                    <Col md={24} xs={24} key={company.id}>
                      <div className={Classes.ImgCompany}>
                        <img
                          style={{ width: "70px", maxHeight: "70px" }}
                          src={`https://image.tmdb.org/t/p/w154/${company.logo_path}`}
                          alt=""
                        />
                      </div>
                      <div className={Classes.CompanyName}>
                        <h3>{company.name}</h3>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Sider>
          </Layout>
        </>
      )}
    </section>
  );
};

export default SingleMoviePage;
