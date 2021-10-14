import { Badge, Button, Card, Col, Row } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import Classes from "./WatchList.module.scss";

const WatchList = () => {
  const { Meta } = Card;
  const { useAccountData, login } = useContext(UserContext);

  let MovieWatch = useAccountData(`watchlist/movies`);
  let TVWatch = useAccountData(`watchlist/tv`);

  return (
    <>
      <div className={Classes.MovieWatchList}>
        <h2>
          Movie's <span style={{ color: "rosybrown" }}> Watch </span> List
        </h2>
        <div className={Classes.UserMoviesWatchList}>
          <Row gutter={[20, 20]}>
            {MovieWatch.accData ? (
              MovieWatch.accData.results.length ? (
                MovieWatch.accData.results.map((MWU) => (
                  <Col md={8} xs={24} key={MWU.id}>
                    <Link to={`/movie/${MWU.id}`}>
                      <Card
                        hoverable
                        style={{ width: 250 }}
                        cover={
                          <img
                            alt="example"
                            src={`https://image.tmdb.org/t/p/w300/${MWU.poster_path}`}
                          />
                        }
                      >
                        <Meta
                          title={MWU.title}
                          description={
                            <Badge
                              count={`${MWU.vote_average}`}
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
                <h4>There is No Video on WatchList</h4>
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
      <div className={Classes.TvWatchList}>
        <h2>
          Tv Show <span style={{ color: "rosybrown" }}> Watch </span> List
        </h2>
        <div className={Classes.UserTvWatchList}>
          <Row gutter={[20, 20]}>
            {TVWatch.accData ? (
              TVWatch.accData.results.length ? (
                TVWatch.accData.results.map((TWU) => (
                  <Col md={8} xs={24} key={TWU.id}>
                    <Card
                      hoverable
                      style={{ width: 250 }}
                      cover={
                        <img
                          alt="example"
                          src={`https://image.tmdb.org/t/p/w300/${TWU.poster_path}`}
                        />
                      }
                    >
                      <Meta
                        title={TWU.name}
                        description={
                          <Badge
                            count={`${TWU.vote_average}`}
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
                <h4>There is No Video on WatchList</h4>
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

export default WatchList;
