import React, { useMemo, useState } from "react";
import MainPart from "../styledComponets/MainPart";
import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import styled from "styled-components";
import { BorderlessTableOutlined } from "@ant-design/icons";
import { Typography, Popover } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

import Loading from "./loading";
const Styledimg = styled.img`
  margin-right: 20px;
  border-radius: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 91vw;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 10px;
`;
const StyledIcon = styled(HeartTwoTone)`
  border: 1px solid white;
  padding: 8px;
  border-radius: 50%;
  background-color: #0a0909;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(2.2);
  }
`;
export default function MovieDetail() {
  const [infavorite, setInFavorite] = useState(false);
  function handleClick(id, myObject) {
    const myJSON = JSON.stringify(myObject);
    localStorage.setItem(id, myJSON);
    setInFavorite(!infavorite);
  }
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
  const { Title, Text } = Typography;
  const { id } = useParams();
  const [data, loading, error] = useGetData(
    `${process.env.REACT_APP_MOVIE_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );

  if (error) {
    return alert("data error");
  } else if (loading) {
    return <Loading />;
  }

  return (
    <MainPart>
      <Container
        style={{
          backgroundImage: `linear-gradient(to right, rgba(228, 220, 220, 0.6), rgba(245, 235, 235, 0.6)),url(${process.env.REACT_APP_IMAGE_URL}/${data.backdrop_path})`,
        }}
      >
        <Styledimg
          src={`${process.env.REACT_APP_IMAGE_URL}/${data.poster_path}`}
          alt="moviePoster"
        />
        <div>
          <Title level={1}>
            {data.original_title} ({data.release_date.split("-")[0]}){" "}
          </Title>

          <Title level={4}>
            {data.release_date}
            <BorderlessTableOutlined style={{ marginLeft: "6px" }} />
            {data.genres.map((types) => {
              return <span key={types.id}> {types.name} </span>;
            })}
          </Title>

          <Text strong>
            {data.vote_average}
            <Popover
              placement="top"
              content={"add favorites"}
              arrow={mergedArrow}
            >
              <StyledIcon
                fullfilled="false"
                twoToneColor="#050505"
                onClick={() => {
                  handleClick(data.id, data);
                }}
              />
            </Popover>
          </Text>
          <div style={{ marginBlock: "15px" }}>
            <Text mark>{data.tagline && data.tagline}</Text>
          </div>

          <Text strong style={{ fontSize: "18px" }}>
            Abstract
          </Text>
          <div>
            <Text style={{ fontSize: "15px" }}>{data.overview}</Text>
          </div>
        </div>
      </Container>
    </MainPart>
  );
}
