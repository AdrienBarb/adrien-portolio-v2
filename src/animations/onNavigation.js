import gsap from 'gsap'

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

