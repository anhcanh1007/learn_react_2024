import React from "react";
import styled from "styled-components";

/**
 * const = StyledCard = styled.tag(h1,h2,div,a,p,section...)``
 * CSS-in-JS
 */

const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit; //kế thừa từ div cha
`;
const CardContent = styled.div`
  position: absolute;
  left: 50;
  transform: translate();
`;

const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/userupload/13314959/file/original-f1bcc7dacce1816b5d5e2361df0b8cdb.png?resize=752x"
          alt=""
        />
      </CardImage>
      <div>
        <div>
          <div>
            <img
              src="https://cdn.dribbble.com/userupload/13314959/file/original-f1bcc7dacce1816b5d5e2361df0b8cdb.png?resize=752x"
              alt=""
            />
            <span>@anhcanh</span>
          </div>
          <div>256</div>
        </div>
        <div>
          <h3>Anh canh Dev</h3>
          <san>12000sl</san>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
