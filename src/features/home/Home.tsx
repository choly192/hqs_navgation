import React from "react";
import "static/css/home.less";
import { recommendNavs } from "../../router/menu.config";

const Home = () => {
  return (
    <section className="align-and-vertical-center">
      <div className="home-content">
        <p className="text-title recommend-title">推荐导航</p>
        <div className="recommend-nav">
          {recommendNavs.map((item, index) => {
            return (
              <a href={item.path} key={`NAV_ITEM_${index}`}>
                <img src={item.imgUrl} alt="" />
                <strong>{item.name}</strong>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Home.displayName = "Home";
export default Home;
