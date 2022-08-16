import React from "react";
import { Link } from "react-router-dom";
import notFountImg from "@/static/image/404.png";
import "@/static/css/notFound.less";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFountImg} className="not-found-icon" draggable={false} alt="" />
      <div className="not-found-detail">
        <h1>抱歉！页面无法访问.....</h1>
        <dl>
          <dt>可能因为：</dt>
          <dd>
            <span>网址有错误&gt;</span>
            <span>请检查地址是否完整或存在多余字符</span>
          </dd>
          <dd>
            <span>网址已失效&gt;</span>
            <span>可能页面已删除</span>
          </dd>
          <dd>
            <Link to="/">&lt; 返回首页</Link>
          </dd>
        </dl>
      </div>
    </div>
  );
};
export default NotFound;
