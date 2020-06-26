import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as RightArrow } from "../../material/icons/wi-direction-right.svg";

interface TextBoxProps {
  id: string;
  name?: string;
  value?: string;
  type: string;
  placeholder?: string;
  invalid?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
}

type StyledProps = {
  invalid?: boolean;
};

const TextBox: FC<TextBoxProps> = ({
  id,
  name,
  value,
  type,
  placeholder,
  invalid,
  onChange,
  onFocus,
}) => {
  return (
    <Wrapper>
      <InputBoxLabel>
        Type in your location and we tell you what weather to expect.
      </InputBoxLabel>
      <InputBox
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        invalid={invalid}
        onChange={onChange}
        onFocus={onFocus}
      />
      <Icon>
        <RightArrow />
      </Icon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const Icon = styled.span`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const InputBoxLabel = styled.title`
  color: black;
  height: 30px;
  display: flex;
  margin-bottom: 20px;
`;

const InputBox = styled.input<StyledProps>`
  height: 30px;

  background: white;
  padding: 14px;
  border-radius: 4px;
  border: 0;
  color: black;
  font-size: 16px;
  outline-color: ${(props) => props.invalid && "red"};

  &:focus {
    outline-color: green;
  }
`;

export default TextBox;
