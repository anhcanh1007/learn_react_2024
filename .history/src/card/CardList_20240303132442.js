import React from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fa);
  gap: 90px 30px;
  padding: 30px;
`;
const CardList = ({ children }) => {
  return <StyledCardList>{children}</StyledCardList>;
};

export default CardList;
