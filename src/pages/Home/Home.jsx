import React from "react";
import { Layout } from "antd";

import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";

import PopMovieSlider from "../../components/PopularSliderMovie/PopMovieSlider";
import MovieInHeader from "../../components/MovieInHeader/MovieInHeader";
import LatestMovieSlider from "../../components/LatestMovieSlider/LatestMovieSlider";
import TopRateMovieSlide from "../../components/TopRateMovieSide/TopRateMovieSide";
const { Sider, Content } = Layout;
SwiperCore.use([Pagination, Navigation, Mousewheel, Keyboard, Autoplay]);

const Home = () => {
  return (
    <>
      <div>
        <MovieInHeader />
      </div>
      <Layout>
        <Content>
          <div className="PopularMovies">
            <PopMovieSlider />
          </div>

          <section className="latest-movies">
            <LatestMovieSlider />
          </section>
        </Content>
        <Sider
          theme="light"
          style={{ borderRadius: "30px" }}
          className="sidebar-component"
        >
          <TopRateMovieSlide />
        </Sider>
      </Layout>
    </>
  );
};
export default Home;
