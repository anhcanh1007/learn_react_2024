import React from "react";
import styled from "styled-components";

/**
 * const = StyledCard = styled.tag(h1,h2,div,a,p,section...)``
 * CSS-in-JS
 */

const StyledCard = styled.div`
  position: relative;
  width: 400px;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
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
  left: 50%;
  transform: translate(-50%, 50%);
  width: 100%;
  bottom: 0;
  background-color: white;
  z-index: 10px;
  padding: 20px;
  border-radius: 20px;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const UserName = styled.span`
  font-weight: 300;
  font-style: 16px;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
const CardAmount = styled.span
const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/userupload/13314959/file/original-f1bcc7dacce1816b5d5e2361df0b8cdb.png?resize=752x"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/userupload/13314959/file/original-f1bcc7dacce1816b5d5e2361df0b8cdb.png?resize=752x"
              alt=""
            />
            <UserName>@anhcanh</UserName>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <h3>Anh canh Dev</h3>
          <san>12000sl</san>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
