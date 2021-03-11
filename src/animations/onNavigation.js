import gsap from 'gsap'
import { navigate } from 'gatsby'

export const onNavigationLeave = () => {
  const t1 = gsap.timeline()

  t1.to('.animationOnNavigation', 1, {
    opacity: 0,
    ease: 'expo.inOut',
    stagger: 0.2,
  })
}

export const onNavigationEnter = () => {
  const t1 = gsap.timeline()

  t1.from('.animationOnNavigation', 1, {
    opacity: 0,
    ease: 'expo.inOut',
    stagger: 0.2,
  })
}

export const handleNavigationLeave = (path) => {
  onNavigationLeave()
  setTimeout(function () {
    navigate(path)
  }, 1200)
}
