import React, { useMemo, useState } from "react";
import { Navbar, StyledLink } from "./styled";
import { Popover } from "antd";

import {
  HomeOutlined,
  HeartOutlined,
  SearchOutlined,
  YoutubeOutlined,
  StarOutlined,
} from "@ant-design/icons";

export default function Navside() {
  // eslint-disable-next-line no-unused-vars
  const [showArrow, setShowArrow] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [arrowAtCenter, setArrowAtCenter] = useState(false);
  const mergedArrow = useMemo(() => {
    if (arrowAtCenter)
      return {
        pointAtCenter: true,
      };
    return showArrow;
  }, [showArrow, arrowAtCenter]);
  return (
    <Navbar className="sidenav">
      <Popover placement="rightTop" content={"Homepage"} arrow={mergedArrow}>
        <StyledLink to="/">
          <HomeOutlined />
        </StyledLink>
      </Popover>
      <Popover
        placement="rightTop"
        content={"Your Favorites"}
        arrow={mergedArrow}
      >
        <StyledLink to="/favorites">
          <HeartOutlined />
        </StyledLink>
      </Popover>
      <Popover placement="rightTop" content={"Search"} arrow={mergedArrow}>
        <StyledLink to="/search">
          <SearchOutlined />
        </StyledLink>
      </Popover>
      <Popover
        placement="rightTop"
        content={"Upcoming Movies"}
        arrow={mergedArrow}
      >
        <StyledLink to="/upComing">
          <YoutubeOutlined />
        </StyledLink>
      </Popover>
      <Popover
        placement="rightTop"
        content={"Trend Movies"}
        arrow={mergedArrow}
      >
        <StyledLink to="/trendMovies">
          <StarOutlined />
        </StyledLink>
      </Popover>
    </Navbar>
  );
}
