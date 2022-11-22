import image from "./image.jpg"

export const Image = ({ alt, role }: { alt?: string; role?: string }) => (
  <div className="a11y" tabIndex="-1">
    <img src={image} role={role} alt={alt} width="600px" />
  </div>
)
