import Vue from 'vue'
import animationOnScroll from '@/plugins/animationOnScroll'
import intervalAnimationOnScroll from '@/plugins/intervalAnimationOnScroll'

Vue.directive('animation-on-scroll', animationOnScroll)
Vue.directive('interval-animation-on-scroll', intervalAnimationOnScroll)
