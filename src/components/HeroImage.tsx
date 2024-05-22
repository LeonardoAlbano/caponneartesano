import Image from 'next/image'

interface HeroImageProps {
  containerStyles: string
  imageSearch: string
}

export default function HeroImage({
  containerStyles,
  imageSearch,
}: HeroImageProps) {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imageSearch} alt="" fill priority />
    </div>
  )
}
