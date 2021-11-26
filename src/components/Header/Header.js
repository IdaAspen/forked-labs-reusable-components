import React from 'react';
import styled from 'styled-components';
export const Header = ({ title, backgroundColor }) => {
  return (
    <HeaderContainer style={{ backgroundColor: backgroundColor }}>
      <Circle> </Circle>
      <Container>
        <Navbar>
          <span>about</span>
          <span>trips</span>
          <span>pricing</span>
          <span>contact</span>
        </Navbar>
      </Container>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  height: 50vh;
  color: #fcfffe;
  overflow: hidden;
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Navbar = styled.nav`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: flex-end;
  color: #fbf6d4;
  column-gap: 100px;
  padding: 40px;
  font-size: 20px;
`;
const Title = styled.h1`
  font-size: 80px;
  width: 50%;
  margin: 0 0 0 50px;
  z-index: 2;
  position: absolute;
  top: 200px;
`;
const Circle = styled.div`
  height: 400px;
  width: 400px;
  background-color: white;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  top: -60px;
  margin-left: 70px;
  background-color: #dc8722;
`;
