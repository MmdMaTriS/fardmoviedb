import React from "react";
import { Layout } from "antd";
import HeaderOfPage from "./Header/HeaderOfPage";
import FooterOfPage from "./Footer/FooterOfPage";
const { Header, Footer, Content } = Layout;
const PageLayOut = ({ children }) => {
  return (
    <Layout>
      <header>
        <div className="HeaderOfMovie">
          <div className="Above-Header">
            <h3 className="LogoName">FardMovie - Enjoy your free Time ;)</h3>
          </div>
          <Header className="" style={{ backgroundColor: "white" }}>
            <HeaderOfPage />
          </Header>
        </div>
      </header>

      <main>
        <div className="ContentMovie">
          <Content>{children}</Content>
        </div>
      </main>

      <footer>
        <div className="FooterMovie">
          <Footer className="DarkMode-Lighter">
            <FooterOfPage />
          </Footer>
        </div>
      </footer>
    </Layout>
  );
};
export default PageLayOut;
