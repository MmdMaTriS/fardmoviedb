import React, { useState, useContext } from "react";

import {
  Col,
  Input,
  Row,
  Steps,
  Menu,
  Popover,
  Dropdown,
  Avatar,
  Spin,
} from "antd";
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
import { UserContext } from "../../../context/UserContext";
import SearchBar from "../SearchBar/SearchBar";
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
const TVMenu = (
  <Menu>
    <Link to="/tv/popular">
      <Menu.Item>Popular TV Show</Menu.Item>
    </Link>
    <Menu.Item>
      <Link to="/tv/top-rate">Top Rate TV Show</Link>
    </Menu.Item>
  </Menu>
);

const { Step } = Steps;
const HeaderOfPage = () => {
  const { login, user, loadingUser, logout } = useContext(UserContext);
  const [littleMenu, setLittleMenu] = useState(false);

  const content = (
    <div style={{ textAlign: "left", cursor: "pointer" }}>
      <Link to="/user-panel">
        <p style={{ fontFamily: "MmdBold", color: "black" }}>Profile</p>
      </Link>
      <p onClick={logout} style={{ fontFamily: "MmdBold", color: "black" }}>
        LogOut
      </p>
    </div>
  );

  return (
    <>
      {loadingUser ? (
        <div
          style={{
            backgroundColor: "rgba(179, 179, 179, 0.9)",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 100,
            position: "fixed",
          }}
        >
          <div className="Spin" style={{ marginTop: "250px" }}>
            <Spin size="large" />
          </div>
        </div>
      ) : null}
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
          <Dropdown overlay={TVMenu} placement="bottomCenter" arrow>
            <span className="HeaderMenuItems">Series</span>
          </Dropdown>
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
        <SearchBar />
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
          {user ? (
            <Popover content={content} title={user ? user.username : null}>
              <Avatar
                style={{ cursor: "pointer" }}
                src={`https://image.tmdb.org/t/p/w185/${user.avatar.tmdb.avatar_path}`}
              />
            </Popover>
          ) : (
            <Steps>
              <Step
                onClick={login}
                style={{
                  cursor: "pointer",
                  fontFamily: "MmdReg",
                  marginTop: "11px",
                }}
                icon={
                  <UserOutlined style={{ color: "grey", fontSize: "17px" }} />
                }
                description="Login"
              ></Step>
            </Steps>
          )}
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
        <SubMenu key="120" title="Movie" icon={<VideoCameraOutlined />}>
          <Menu.Item key="121">
            <Link to="/movie/popular">Popular Movie's</Link>
          </Menu.Item>
          <Menu.Item key="122">
            <Link to="/movie/top-rate">Top Rate Movie's</Link>
          </Menu.Item>
          <Menu.Item key="123">
            <Link to="/movie/upcoming">Up Coming Movie's</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="130" title="TV-Series" icon={<DesktopOutlined />}>
          <Menu.Item key="131">
            <Link to="/tv/popular">Popular TV Show</Link>
          </Menu.Item>
          <Menu.Item key="132">
            <Link to="/tv/top-rate">Top Rate TV Show</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          About
        </Menu.Item>
      </Menu>
    </>
  );
};
export default HeaderOfPage;
