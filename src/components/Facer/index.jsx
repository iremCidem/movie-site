import React from "react";
import {
  Box,
  Content,
  StyledImg,
  StyledTitle,
  StyledPage,
  StyledText,
  Description,
  StyledName,
  StyledLink,
} from "./styled";
import {
  CaretRightOutlined,
  LikeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

export default function Facer({ movie }) {
  const imgUrl = `${process.env.REACT_APP_IMAGE_URL}/${movie.poster_path}`;

  return (
    <StyledPage>
      <StyledTitle>
        <StyledName> {movie.title} </StyledName>
        <Content>
          <Box>
            <StyledLink href="/">
              <CaretRightOutlined />
            </StyledLink>
          </Box>
          <Box>
            <p>
              <CalendarOutlined /> {movie.release_date}
            </p>
          </Box>
          <Box>
            <p>
              <LikeOutlined /> {movie.vote_average}
            </p>
          </Box>
        </Content>

        <StyledText>
          <Description mark strong>
            Description:
          </Description>
          <br />
          {movie.overview}
        </StyledText>
      </StyledTitle>
      <StyledImg src={imgUrl} alt="movieposter" />
    </StyledPage>
  );
}
