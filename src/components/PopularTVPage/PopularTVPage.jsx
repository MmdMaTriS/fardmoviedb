import { Badge, Card, Col, Layout, Row, Spin } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import useMovieDB from "../../hooks/useMovieDB";
import TopTVRateSide from "../TopTVRateSide/TopTVRateSide";

const { Content, Sider } = Layout;
const { Meta } = Card;

const PopularTVPage = () => {
  const { loading, data } = useMovieDB("/tv/popular");
  return (
    <div>
      <Layout>
        <Content style={{ margin: "30px" }}>
          <Row gutter={[16, 16]}>
            {loading ? (
              <div className="Spin">
                <Spin size="large" />
              </div>
            ) : (
              data.results.map((tv) => (
                <Col md={6} xs={24}>
                  <Link to={`/tv/${tv.id}`}>
                    <Card
                      hoverable
                      style={{ width: "100%" }}
                      cover={
                        <img
                          alt="example"
                          src={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`}
                        />
                      }
                    >
                      <Meta
                        title={tv.name}
                        description={
                          <Badge
                            count={`${tv.vote_average}`}
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
          <TopTVRateSide />
        </Sider>
      </Layout>
    </div>
  );
};

export default PopularTVPage;
