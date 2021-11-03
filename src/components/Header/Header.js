import React from "react"
import "./Header.css"
import styled from "styled-components"

export const Header = ({ title, backgroundColor }) => {
  return (
    <HeaderContainer style={{ backgroundColor: backgroundColor }}>
      <Navbar>
        <span>about</span>
        <span>trips</span>
        <span>pricing</span>
        <span>contact</span>
      </Navbar>

      <Title>{title}</Title>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  height: 50vh;
  color: #fcfffe;
`

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: flex-end;
  color: #fbf6d4;
  column-gap: 100px;
  padding: 40px;
  font-size: 20px;
`

const Title = styled.h1`
  font-size: 60px;
  width: 40%;
  margin: 80px 0 0 50px;
`
