import React, { useState } from "react"
import "./ProfileImage.css"
import styled from "styled-components"

export const ProfileImage = ({ image, name, textColor }) => {
  const [IsMouseOver, setIsMouseOver] = useState(false)

  return (
    <ProfileContainer
      onMouseEnter={() => {
        setIsMouseOver(true)
      }}
      onmouseleave={() => {
        setIsMouseOver(false)
      }}
    >
      <Overlay> </Overlay>
      <Profile
        src={image}
        alt="person"
        style={IsMouseOver ? { opacity: 0.25 } : { opacity: 1 }}
      />
      <p style={{ color: textColor }}>{name}</p>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  position: relative;
`

const Overlay = styled.div`
  &:hover {
    background: rgba(17, 17, 17, 0.73);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`
const Profile = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
`

const text = styled.p`
  position: absolute;
  font-size: 30px;
  top: 50px;
`
