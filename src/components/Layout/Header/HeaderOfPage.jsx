import React, { useState } from "react";

import { Col, Input, Row, Steps, Menu, Popover, Dropdown } from "antd";
import {
  UserOutlined,
  SearchOutlined,
  UnorderedListOutlined,
  VideoCameraOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import Logo from "./Logo/logo.png";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

const movieMenu = (
  <Menu>
    <Link to="/movie/popular">
      <Menu.Item>Popular Movie's</Menu.Item>
    </Link>
    <Menu.Item>
      <Link to="/movie/top-rate">Top Rate Movie's</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/movie/upcoming">Upcoming Movie's</Link>
    </Menu.Item>
  </Menu>
);

const { Step } = Steps;
const HeaderOfPage = () => {
  const [littleMenu, setLittleMenu] = useState(false);

  const content = (
    <div style={{ textAlign: "left", cursor: "pointer" }}>
      <p>UserProfile2</p>
      <p>Content</p>
      <p>LogOut</p>
    </div>
  );
  return (
    <>
      <Row gutter={[20]} style={{ textAlign: "center" }}>
        <Col xs={0} md={4}>
          <Link to="/">
            <img
              src={Logo}
              alt="LogoIMG"
              width="90px"
              style={{ marginTop: "-13px" }}
            />
          </Link>
        </Col>
        <Col xs={0} md={2}>
          <Dropdown overlay={movieMenu} placement="bottomCenter" arrow>
            <span className="HeaderMenuItems">Movie</span>
          </Dropdown>
        </Col>
        <Col xs={0} md={2}>
          <span className="HeaderMenuItems">Series</span>
        </Col>
        <Col xs={0} md={2}>
          <span className="HeaderMenuItems">About</span>
        </Col>
        <Col xs={2} md={0} style={{ left: "-30px" }}>
          <Step
            style={{ fontSize: "20px" }}
            icon={<UnorderedListOutlined />}
            onClick={() => setLittleMenu(!littleMenu)}
          ></Step>
        </Col>
        <Col xs={19} md={10}>
          <div className="SearchBarHeader">
            <Input
              placeholder="Search Movie & Tv-Series..."
              type="text"
              style={{
                direction: "rtl",
                borderRadius: 25,
              }}
            ></Input>
          </div>
        </Col>
        <Col xs={0} md={2}>
          <Step
            style={{
              fontSize: "18px",
              cursor: "pointer",
              marginRight: "300px",
            }}
            icon={<SearchOutlined />}
          ></Step>
        </Col>
        <Col xs={2} md={2}>
          <Popover content={content} title="MmdFard">
            <Steps>
              <Step
                style={{
                  cursor: "pointer",
                  fontFamily: "MmdReg",
                  marginTop: "11px",
                }}
                icon={
                  <UserOutlined style={{ color: "grey", fontSize: "17px" }} />
                }
                description="Profile"
              ></Step>
            </Steps>
          </Popover>
        </Col>
      </Row>
      <Menu
        hidden={littleMenu ? false : true}
        style={{
          position: "absolute",
          left: 0,
          top: 100,
          zIndex: 10,
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="light"
      >
        <SubMenu title="Movie" icon={<VideoCameraOutlined />}>
          <Menu.Item>
            <Link to="/movie/popular">Popular Movie's</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/movie/top-rate">Top Rate Movie's</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/movie/upcoming">Up Coming Movie's</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="2" icon={<DesktopOutlined />} disabled>
          TV-Series
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          About
        </Menu.Item>
      </Menu>
    </>
  );
};
export default HeaderOfPage;
