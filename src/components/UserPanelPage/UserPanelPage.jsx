import { Avatar, Col, Row } from "antd";

import React, { useContext } from "react";
import "./UserPanelPage.scss";
import {
  UserOutlined,
  DesktopOutlined,
  AppstoreOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { UserContext } from "../../context/UserContext";
import { Menu } from "antd";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import WatchList from "./ContentUserPanel/WatchList/WatchList";
import RateList from "./ContentUserPanel/RateList/RateList";
import FavoriteList from "./ContentUserPanel/FavoriteList/FavoriteList";

const UserPanelPage = () => {
  const { user, login } = useContext(UserContext);
  return (
    <section>
      <div className="HeaderProfilePanel">
        <Row>
          <Col md={6} xs={12}>
            <div className="ProfileAvatar">
              {user ? (
                <Avatar
                  size={185}
                  src={`https://image.tmdb.org/t/p/w185/${user.avatar.tmdb.avatar_path}`}
                />
              ) : (
                <Avatar size={185} icon={<UserOutlined />} />
              )}
            </div>
          </Col>
          <Col md={18} xs={12}>
            <Row style={{ marginTop: "100px" }}>
              <Col md={12} xs={24} className="PanelUserName">
                <span className="SpanUserName">
                  User Name: &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="SpanUserGetName">
                  {user ? (
                    `${user.username}`
                  ) : (
                    <span onClick={login} style={{ cursor: "pointer" }}>
                      First Login/SignUp
                    </span>
                  )}
                </span>
              </Col>
              <Col md={12} xs={24} className="PanelLanguage">
                <span className="SpanLanguage">Language: &nbsp;</span>
                <span className="SpanGetLanguage">
                  {user ? (
                    `${user.iso_639_1}`
                  ) : (
                    <span onClick={login} style={{ cursor: "pointer" }}>
                      First Login/SignUp
                    </span>
                  )}
                </span>
              </Col>
              <Col className="PanelUserID">
                <div>
                  <span className="SpanUserID">UserID: &nbsp;&nbsp;&nbsp;</span>
                  <span className="SpanGetUserID">
                    {user ? (
                      `${user.id}`
                    ) : (
                      <span onClick={login} style={{ cursor: "pointer" }}>
                        First Login/SignUp
                      </span>
                    )}
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="UserPanelMenu">
        <Menu
          mode="horizontal"
          theme="lights"
          style={{ paddingLeft: "30px" }}
          defaultSelectedKeys="watchList"
        >
          <Menu.Item key="watchList" icon={<DesktopOutlined />}>
            <Link to="/user-panel">WatchList</Link>
          </Menu.Item>

          <Menu.Item key="RatedList" icon={<HeartOutlined />}>
            <Link to="/user-panel/RateList">Rated TvShow/Movies</Link>
          </Menu.Item>
          <Menu.Item key="FavoriteList" icon={<AppstoreOutlined />}>
            <Link to="/user-panel/FavoriteList">Favorite TvShow/Movies</Link>
          </Menu.Item>
        </Menu>
      </div>
      <section>
        <Switch>
          <Route path="/user-panel" exact>
            <WatchList />
          </Route>
          <Route path="/user-panel/RateList" exact>
            <RateList />
          </Route>
          <Route path="/user-panel/FavoriteList" exact>
            <FavoriteList />
          </Route>
        </Switch>
      </section>
    </section>
  );
};

export default UserPanelPage;
