import styled from "styled-components";
import { HeartTwoTone } from "@ant-design/icons";

const StyledImage = styled.img`
  max-width: 190px;
`;
const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 60px));
  gap: 10px;
  justify-content: center;
`;
const StyledCol = styled.div`
  text-align: center;
  position: relative;
`;
const Icon = styled(HeartTwoTone)`
  position: absolute;
  top: 4%;
  left: 80%;
  border: 1px solid white;
  padding: 2px;
  border-radius: 50%;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(2.2);
  }
  background-color: #837a6b;
`;

export { StyledImage, StyledRow, StyledCol, Icon };
