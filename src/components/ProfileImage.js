import React from "react"
import "./ProfileImage.css"

export const ProfileImage = ({ image, name, textColor }) => {
  return (
    <div className="profile-container">
      <div className="img-overlay"></div>
      <img src={image} alt="person" />
      <p style={{ color: textColor }}>{name}</p>
    </div>
  )
}

// <header style={{ backgroundColor: backgroundColor }}>
// <nav>
//   <span>about</span>
//   <span>trips</span>
//   <span>pricing</span>
//   <span>contact</span>
// </nav>

// <h1>{title}</h1>
// </header>
