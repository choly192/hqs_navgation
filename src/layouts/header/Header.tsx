import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import cn from "classnames";
import "@/static/css/header.css";
import { menus, Menus } from "../../router/menu.config";

const Header = () => {
  const pathName = window.location.pathname;
  const { id } = useParams();
  const pathNameStr = pathName
    .split("/")
    ?.filter(p => p !== id)
    ?.join("/");

  const [activeTab, setActiveTAb] = useState<Menus>();
  const clickNavItem = (item: Menus) => {
    setActiveTAb(item);
  };

  useEffect(() => {
    if (!activeTab || pathNameStr !== activeTab?.path) {
      const currentMenu = menus.find(menu => menu.path === pathNameStr);
      setActiveTAb(currentMenu);
    }
  }, [activeTab, pathNameStr]);
  return (
    <header className="header">
      <div className="header-bar">
        <Link to="/" className="bar-left">
          <div className="logo">
            <img src="https://choly192.github.io/image/logo.png" alt="" />
          </div>
          sirius 导航
        </Link>
        <div className="bar-center" />
        <a href="" className="bar-right">
          About
        </a>
      </div>
      <nav className="nav-bar">
        <div className="nav-box">
          {menus.map(item => (
            <Link
              key={item.name}
              to={item.path}
              replace={false}
              className={cn("nav-item", { active: item.name === activeTab?.name })}
              onClick={() => clickNavItem(item)}
            >
              <div>{item.text}</div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
Header.displayName = "Header";
export default Header;
