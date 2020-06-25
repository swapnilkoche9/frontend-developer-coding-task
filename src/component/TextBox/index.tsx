import React, { FC } from "react";
import styled from "styled-components";
//mport "./text-box.scss";

interface TextBoxProps {
  id: string;
  name?: string;
  value?: string;
  type: string;
  placeholder?: string;
  invalid?: boolean;
  Icon?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  Icon,
  invalid,
  onChange,
}) => {
  return (
    <InputBox
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      invalid={invalid}
      onChange={(e) => onChange(e)}
    />
  );
};

const InputBox = styled.input<StyledProps>`
  height: 30px;
  width: 100%;
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
