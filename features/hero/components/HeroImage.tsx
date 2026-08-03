import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className='relative flex h-full w-full items-end justify-end pb-5 pr-9'>
      <Image
        src='/images/hero-bg.png'
        alt='Cinematic laptop displaying code on a rock'
        width={900}
        height={700}
        priority
      />
    </div>
  )
}

export default HeroImage
