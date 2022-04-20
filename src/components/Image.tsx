import image from './image.jpg'

export const Image = ({alt, role}: {alt?: string; role?: string}) => (
  <img src={image} role={role} alt={alt} width='600px' />
)
