import React from "react";
import styled from "styled-components";
export default function Button({ text }) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.button`
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  border: none;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
`;
