
import gsap from 'gsap'

export const handleClickScroll = (path:string) => {
  const about = document.querySelector(`#${path.toLowerCase()}`) as Element
  if (about) {
    gsap.fromTo(about, { 
      opacity: 0,
      duration: 1,

     }, { opacity: 1, duration: 1 })
    gsap.context(() => {
      window.scrollTo({
        top: about.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
      }),
        gsap.fromTo(about, {}, { opacity: 1, duration: 1 })
    })

  }
}