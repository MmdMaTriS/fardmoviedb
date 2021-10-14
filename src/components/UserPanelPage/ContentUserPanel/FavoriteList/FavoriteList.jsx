import { Badge, Button, Card, Col, Row } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import Classes from "./FavoriteList.module.scss";
const FavoriteList = () => {
  const { Meta } = Card;
  const { useAccountData, login } = useContext(UserContext);
  const MovieFav = useAccountData("favorite/movies");
  const TVFav = useAccountData("favorite/tv");

  return (
    <>
      <div className={Classes.MovieFavoriteList}>
        <h2>
          Movie's <span style={{ color: "red" }}>Favorite</span> List
        </h2>
        <div className={Classes.UserMoviesFavoriteList}>
          <Row gutter={[20, 20]}>
            {MovieFav.accData ? (
              MovieFav.accData.results.length ? (
                MovieFav.accData.results.map((MFU) => (
                  <Col md={8} xs={24} key={MFU.id}>
                    <Link to={`/movie/${MFU.id}`}>
                      <Card
                        hoverable
                        style={{ width: 250 }}
                        cover={
                          <img
                            alt="example"
                            src={`https://image.tmdb.org/t/p/w300/${MFU.poster_path}`}
                          />
                        }
                      >
                        <Meta
                          title={MFU.title}
                          description={
                            <Badge
                              count={`${MFU.vote_average}`}
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
                  </Col>
                ))
              ) : (
                <h4>There is No Movie in your Favorite List</h4>
              )
            ) : (
              <span onClick={login} style={{ cursor: "pointer" }}>
                First Login/SignUp
              </span>
            )}
          </Row>
        </div>
        <br />
        <Button type="primary">Show more...</Button>
      </div>
      <div className={Classes.TvFavoriteList}>
        <h2>
          Tv Show <span style={{ color: "red" }}>Favorite</span> List
        </h2>
        <div className={Classes.UserTvFavoriteList}>
          <Row gutter={[20, 20]}>
            {TVFav.accData ? (
              TVFav.accData.results.length ? (
                TVFav.accData.results.map((TFU) => (
                  <Col md={8} xs={24} key={TFU.id}>
                    <Card
                      hoverable
                      style={{ width: 250 }}
                      cover={
                        <img
                          alt="example"
                          src={`https://image.tmdb.org/t/p/w300/${TFU.poster_path}`}
                        />
                      }
                    >
                      <Meta
                        title={TFU.name}
                        description={
                          <Badge
                            count={`${TFU.vote_average}`}
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
                  </Col>
                ))
              ) : (
                <h4>There is No TV show in your Favorite List</h4>
              )
            ) : (
              <span onClick={login} style={{ cursor: "pointer" }}>
                First Login/SignUp
              </span>
            )}
          </Row>
        </div>
        <Button type="primary">Show more...</Button>
      </div>
      <br />
    </>
  );
};

export default FavoriteList;
