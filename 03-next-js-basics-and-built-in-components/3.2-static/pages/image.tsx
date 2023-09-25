import Image from 'next/image'

export default function Img() {
  return (
    <Image
      src="https://unsplash.com/photos/a-brown-dog-sitting-on-top-of-a-lush-green-field-lisM1F7nyQk"
      width={500}
      height={200}
      priority={false}
      alt="a dog"
    />
  )
}
