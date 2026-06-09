export interface AboutProps{
  header:React.ReactNode,
  paragraph:string[]
  ButtonText:string
  href:string
}

export const About: AboutProps = {
  header: (
    <>
      I&apos;m <span>John Akinlade</span>, a Full Stack Developer
      building creative and scalable web applications.
    </>
  ),
  paragraph:[
    "I'm currently pursuing my masters in Computational Chemistry while transitioning into tech as a full-stack developer. I specialize in backend development and modern web technologies, transforming ideas into scalable, production-ready applications.",
    "I'm passionate about JavaScript, React, Node.js, MongoDB, and bringing smooth, responsive UIs to life with animations and performance in mind. Also, building projects that improve my problem-solving"
  ],
  ButtonText:"↓ Download",
  href:"/pdf/John_Adekunle_Akinlade_resume 3.pdf"
}