import { Button, Card, Col, Rate, Row } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import Classes from "./RateList.module.scss";

const RateList = () => {
  const { Meta } = Card;
  const { useAccountData, login } = useContext(UserContext);
  let MovieRate = useAccountData(`rated/movies`);
  let TVRate = useAccountData(`rated/tv`);
  return (
    <>
      <div className={Classes.RateList}>
        <h2>
          Movie's <span style={{ color: "yellowgreen" }}> Rate </span> List
        </h2>
        <div className={Classes.UserRateList}>
          <Row gutter={[20, 20]}>
            {MovieRate.accData ? (
              MovieRate.accData.results ? (
                MovieRate.accData.results.map((MRU) => (
                  <Col md={8} xs={24} key={MRU.id}>
                    <Link to={`/movie/${MRU.id}`}>
                      <Card
                        hoverable
                        style={{ width: 250 }}
                        cover={
                          <img
                            alt="example"
                            src={`https://image.tmdb.org/t/p/w300/${MRU.poster_path}`}
                          />
                        }
                      >
                        <Meta
                          title={MRU.title}
                          description={
                            <Rate
                              allowHalf
                              disabled
                              defaultValue={MRU.rating / 2}
                            />
                          }
                        />
                      </Card>
                    </Link>
                  </Col>
                ))
              ) : (
                <h4>There is no Rated Movie</h4>
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
      <div className={Classes.RateList}>
        <h2>
          TV Show <span style={{ color: "yellowgreen" }}> Rate </span> List
        </h2>
        <div className={Classes.UserRateList}>
          <Row gutter={[20, 20]}>
            {TVRate.accData ? (
              TVRate.accData.results ? (
                TVRate.accData.results.map((TUR) => (
                  <Col md={8} xs={24}>
                    <Card
                      hoverable
                      style={{ width: 250 }}
                      cover={
                        <img
                          alt="example"
                          src={`https://image.tmdb.org/t/p/w300/${TUR.poster_path}`}
                        />
                      }
                    >
                      <Meta
                        title={TUR.name}
                        description={
                          <Rate
                            allowHalf
                            disabled
                            defaultValue={TUR.rating / 2}
                          />
                        }
                      />
                    </Card>
                  </Col>
                ))
              ) : (
                <h4>There is No TV SHOW Rate</h4>
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
    </>
  );
};

export default RateList;
