function addBeforeAnimationClasses (elements) {
  elements.forEach((element) => {
    element.classList.add('before-interval-animation')
  })
}

function addAnimationClasses (elements, interval = 0) {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('interval-animation')
    }, interval * index)
  })
}

function initObserver (element, binding) {
  const targetElements = element.querySelectorAll('[data-interval-animation-target-element]')
  const intervalAnimationOnScroll = new IntersectionObserver(
    (elements, intervalAnimationOnScroll) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          addAnimationClasses(targetElements, binding.value.interval)
          intervalAnimationOnScroll.unobserve(element.target)
        }
      })
    },
    {
      threshold: binding.value.threshold || 0
    }
  )

  addBeforeAnimationClasses(targetElements)
  intervalAnimationOnScroll.observe(element)
}

export default {
  bind: (element, binding) => {
    initObserver(element, binding)
  }
}
