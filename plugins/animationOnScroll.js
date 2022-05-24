function initObserver (element, binding) {
  const animationOnScroll = new IntersectionObserver(
    (elements, animationOnScroll) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          element.target.classList.add(binding.value.animationClassName || '')
          animationOnScroll.unobserve(element.target)
        }
      })
    },
    {
      threshold: binding.value.threshold || 0
    }
  )

  element.classList.add(`before-${binding.value.animationClassName}`)
  animationOnScroll.observe(element)
}

export default {
  bind: (element, binding) => {
    initObserver(element, binding)
  }
}
