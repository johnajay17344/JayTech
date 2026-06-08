export interface Cardimage {
  src: string
  alt: string
}

export interface IconProps {
  icon: Cardimage
  test: string
}

export interface LinksProps {
  href: string
}

export interface CardProps {
  Image: Cardimage
  title: string
  descriotion: string   
  component: IconProps[]
  button: LinksProps
  secondaryButton: LinksProps
}

export const cards: CardProps[] = [
  {
  Image: { src: "/images/unsong.png", alt: " Unsong_music_website" },
  title: "Unsong Music Website",

  descriotion: "Unsong Music is an artist services company dedicated to empowering the next generation of talent. We don’t just distribute music, we provide the tools, strategies, and industry expertise that help independent artists grow, thrive, and build sustainable careers.",

  component: [
    { icon: { src: "/icons/typescript-original.svg", alt: "typescript" }, test: "typescript" },
    { icon: { src: "/icons/nextjs-original.svg", alt: "typescript" }, test: "nextjs" },
    { icon: { src: "/icons/css3-original.svg", alt: "typescript" }, test: "css3" },
    { icon: { src: "/icons/react-original.svg", alt: "typescript" }, test: "react" },
  ],
  button: { href: "https://www.unsongmusic.com/" },
  secondaryButton: { href: "https://github.com/UnsongMusic/frontend-website-v2" },
  },
 ]
