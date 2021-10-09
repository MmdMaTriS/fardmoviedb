import { Col, Layout, Row } from "antd";
import React from "react";
import { useParams } from "react-router";
import useMovieDB from "../../hooks/useMovieDB";

import Classes from "./SingleMovie.module.scss";

const { Content, Sider } = Layout;
const SingleMoviePage = () => {
  const { id } = useParams();
  const { loading, data } = useMovieDB(`/movie/${id}`);
  console.log(data, loading);
  return (
    <section>
      <div className={Classes.UpSinglePage}>
        <div className={Classes.backgroundSingleMmovie}>
          {!loading ? (
            <img
              src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}
              alt=""
              style={{ width: "100%", maxHeight: "500px" }}
            />
          ) : null}
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
      <Layout>
        <Content>
          <Row>
            <Col md={24}>
              <div></div>
            </Col>
            <Col md={12}>
              <div></div>
            </Col>
            <Col md={12}>
              <div></div>
            </Col>
            <Col md={12}>
              <div></div>
            </Col>
            <Col md={12}>
              <div></div>
            </Col>
            <Col md={12}>
              <div></div>
            </Col>
            <Col md={12}>
              <div></div>
            </Col>
            <Col md={24}>
              <div></div>
            </Col>
            <Col md={24}>
              <div></div>
            </Col>
          </Row>
        </Content>
        <Sider></Sider>
      </Layout>
    </section>
  );
};

export default SingleMoviePage;
