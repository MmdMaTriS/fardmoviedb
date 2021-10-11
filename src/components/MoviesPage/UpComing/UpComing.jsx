import { Badge, Card, Col, Layout, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import useMovieDB from "../../../hooks/useMovieDB";
import TopRateMovieSlide from "../../TopRateMovieSide/TopRateMovieSide";

const { Content, Sider } = Layout;
const { Meta } = Card;

const UpComing = () => {
  const { loading, data } = useMovieDB("/movie/upcoming");
  console.log(data);
  return (
    <div>
      <Layout>
        <Content style={{ margin: "30px" }}>
          <Row gutter={[16, 16]}>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              data.results.map((movie) => (
                <Col md={6} xs={24}>
                  <Link to={`/movie/${movie.id}`}>
                    <Card
                      hoverable
                      style={{ width: "100%" }}
                      cover={
                        <img
                          alt="example"
                          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        />
                      }
                    >
                      <Meta
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
                </Col>
              ))
            )}
          </Row>
        </Content>
        <Sider theme="light" className="sidebar-component">
          <TopRateMovieSlide />
        </Sider>
      </Layout>
    </div>
  );
};

export default UpComing;
