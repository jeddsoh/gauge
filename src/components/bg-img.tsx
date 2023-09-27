import Image from 'next/image'
import masks from '../public/masks.jpg'
 
export default function bgImage() {
  return (
    <Image
      alt="Masked people"
      src={masks}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}