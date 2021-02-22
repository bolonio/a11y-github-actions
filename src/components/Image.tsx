import React from "react"
import myImage from "./image.jpeg"

export const Image: React.FC<{ alt?: string; role?: string }> = ({
  alt,
  role,
}) => <img src={myImage} role={role} alt={alt} width="600px" />
