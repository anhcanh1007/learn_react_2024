import React from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fa);
  gap: 90px 30px;
  pad
`;
const CardList = ({children}) => {
  return <div>{children}</div>;
};

export default CardList;
