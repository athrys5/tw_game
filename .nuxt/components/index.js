export { default as AnimalForm } from '../..\\components\\animal-form.vue'
export { default as AnimalQuiz } from '../..\\components\\Animal-Quiz.vue'
export { default as CuriositaAnimali } from '../..\\components\\Curiosita-Animali.vue'
export { default as HomePage } from '../..\\components\\Home-Page.vue'
export { default as LoginForm } from '../..\\components\\Login-Form.vue'
export { default as MyCuriosity } from '../..\\components\\my-curiosity.vue'
export { default as YoutubeVideo } from '../..\\components\\youtube-video.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
