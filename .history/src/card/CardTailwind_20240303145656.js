import React from 'react';

const CardTailwind = () => {
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
          <CardTitle>Anh canh Dev</CardTitle>
          <CardAmount>12000sl</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
    );
};

export default CardTailwind;