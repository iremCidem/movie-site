import React from "react";
import { Space, Spin } from "antd";
import { Centered } from "../styledComponets/centered";
import MainPart from "../styledComponets/MainPart";

export default function Loading() {
  return (
    <MainPart>
      <Centered>
        <Space size="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Space>
      </Centered>
    </MainPart>
  );
}
