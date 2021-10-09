import { Col, Row } from "antd";
import React from "react";
import {
  GithubOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
const FooterOfPage = () => {
  return (
    <>
      <Row style={{ textAlign: "center", fontSize: "28px" }} gutter={16}>
        <Col span={6}></Col>
        <Col className="Github" span={3}>
          <div>
            <span className="c-pointer">
              <GithubOutlined />
            </span>
          </div>
        </Col>
        <Col className="Instagram" span={3}>
          <div>
            <span className="c-pointer">
              <InstagramOutlined />
            </span>
          </div>
        </Col>
        <Col className="Youtube" span={3}>
          <div>
            <span className="c-pointer">
              <YoutubeOutlined />
            </span>
          </div>
        </Col>
        <Col className="LinkedIn" span={3}>
          <div>
            <span className="c-pointer">
              <LinkedinOutlined />
            </span>
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
      <hr />
      <div
        style={{
          textAlign: "center",
          fontFamily: "MmdReg",
          marginTop: "20px",
        }}
      >
        <div>&copy;Copyright FardMovie.All Right Reserved.</div>
        <div>
          Powered by <span className="site-creator">Mmd.Fard</span>
        </div>
      </div>
    </>
  );
};
export default FooterOfPage;
