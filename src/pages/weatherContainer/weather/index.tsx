import React, { FC } from "react";
import styled from "styled-components";

type WeatherProps = {
  children?: React.ReactNode;
  temperature: number;
};

type StyledProps = {
  temperature: number;
};

const Weather: FC<WeatherProps> = ({ children, temperature }) => {
  return (
    <div>
      <Wrapper temperature={temperature}>{children}</Wrapper>
    </div>
  );
};

const Wrapper = styled.div<StyledProps>`
  height: 787px;
  width: 1024px;
  background: ${(props) =>
    props.temperature < 15
      ? `linear-gradient(-180deg, rgb(176, 247, 220) 0%, rgb(223, 210, 127) 100%)`
      : `linear-gradient(-180deg, rgb(247, 191, 176) 0%, rgb(223, 210, 127) 100%)`};
`;

export default Weather;
