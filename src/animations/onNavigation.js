import gsap from 'gsap'
import { navigate } from 'gatsby'

export const onNavigationLeave = () => {
  const t1 = gsap.timeline()

  t1.to('.animationOnNavigation', 1, {
    opacity: 0,
    ease: 'expo.inOut',
  })
}

export const onNavigationEnter = () => {
  const t1 = gsap.timeline()

  t1.to('.animationOnNavigation', 1, {
    opacity: 1,
    ease: 'expo.inOut',
  })
}

export const handleNavigationLeave = (path) => {
  let urlArray = window.location.href.split('/')
  let currentPath = urlArray[urlArray.length - 1]
  if (currentPath !== path) {
    onNavigationLeave()
    setTimeout(function () {
      navigate(`/${path}`)
    }, 800)
  }
}
