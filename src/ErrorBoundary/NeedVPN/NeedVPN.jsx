import { Button, Row, Col } from "antd";
import React from "react";
import Classes from "./NeedVPN.module.scss";
import { DownloadOutlined } from "@ant-design/icons";

const NeedVPN = () => {
  return (
    <>
      <div className={Classes.VPN_SECTION}>
        <div className={Classes.HeaderTitle}>
          <h2>
            FardMovie<span>DB</span>
          </h2>
        </div>
        <div className={Classes.P_Title_One}>
          <p>برای مشاهده سایت باید از فیلترشکن استفاده کنید</p>
        </div>
        <div className={Classes.P_Title_Two}>
          <p>
            برای دانلود <span>فیلترشکن </span>میتوانید از برنامه های زیر استفاده
            کنید
          </p>
        </div>
        <section className={Classes.ButtonPlaces}>
          <Row
            gutter={[16, 16]}
            style={{ textAlign: "center" }}
            justify="center"
          >
            <Col md={6} sm={12}>
              <a
                href="https://nordvpn.com/download/windows/"
                target="_blank"
                rel="noreferrer"
              >
                <Button type="danger" shape="round" icon={<DownloadOutlined />}>
                  NordVPN
                </Button>
              </a>
            </Col>
            <Col md={6} sm={12}>
              <a
                href="https://protonvpn.com/download-windows"
                target="_blank"
                rel="noreferrer"
              >
                <Button type="danger" shape="round" icon={<DownloadOutlined />}>
                  ProTonVPN
                </Button>
              </a>
            </Col>
            <Col md={6} sm={12}>
              <a
                href="https://www.hotspotshield.com/vpn/vpn-for-windows/"
                rel="noreferrer"
                target="_blank"
              >
                <Button type="danger" shape="round" icon={<DownloadOutlined />}>
                  HotSpot Shield
                </Button>
              </a>
            </Col>
            <Col md={6} sm={12}>
              <a
                href="https://atlasvpn.com/vpn-for-windows"
                target="_blank"
                rel="noreferrer"
              >
                <Button type="danger" shape="round" icon={<DownloadOutlined />}>
                  Atlas VPN
                </Button>
              </a>
            </Col>
          </Row>
        </section>
        <div className={Classes.P_Title_Three}>
          <p>
            برای دانلود <span>اکتنشن فیلتر شکن </span>برای مرورگر میتوانید از اپ
            های زیر استفاده کنید
          </p>
        </div>
        <section className={Classes.ButtonPlaces}>
          <Row
            gutter={[16, 16]}
            style={{ textAlign: "center" }}
            justify="center"
          >
            <Col md={6} sm={12}>
              <a
                href="https://chrome.google.com/webstore/detail/stay-secure-with-cybergho/ffbkglfijbcbgblgflchnbphjdllaogb"
                rel="noreferrer"
                target="_blank"
              >
                <Button
                  type="primary"
                  shape="round"
                  icon={<DownloadOutlined />}
                >
                  CyberGhost
                </Button>
              </a>
            </Col>
            <Col md={6} sm={12}>
              <a
                href="https://chrome.google.com/webstore/detail/zenmate-free-vpn%E2%80%93best-vpn/fdcgdnkidjaadafnichfpabhfomcebme"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  type="primary"
                  shape="round"
                  icon={<DownloadOutlined />}
                >
                  ZenMate
                </Button>
              </a>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default NeedVPN;
