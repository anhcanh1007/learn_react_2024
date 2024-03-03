import React from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat();
`;
const CardList = ({children}) => {
  return <div>{children}</div>;
};

export default CardList;
