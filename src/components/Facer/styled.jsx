import styled from "styled-components";
import { Typography } from "antd";
const { Text } = Typography;
const StyledPage = styled.div`
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
`;
const StyledTitle = styled.h1`
  color: white;
`;
const StyledImg = styled.img`
  opacity: 0.3;
  border-radius: 30px;
`;
const Content = styled.div`
  display: flex;
  margin-top: 35px;
  & > * {
    margin-right: 20px;
  }
`;
const Box = styled.div`
  background-color: rgba(58, 64, 70, 0.5);
  padding: 7px 22px;
  display: flex;
  align-items: center;
  color: white;
`;
const StyledText = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 25px;
`;
const Description = styled(Text)`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 30px;
`;
const StyledName = styled.p`
  text-align: center;
  font-size: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  &:hover {
    color: #dbc66a;
  }
`;
const StyledLink = styled.a`
  color: white;
  &:hover {
    color: #dbc66a;
  }
`;
export {
  Box,
  Content,
  StyledImg,
  StyledTitle,
  StyledPage,
  StyledText,
  Description,
  StyledName,
  StyledLink,
};
