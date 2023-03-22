import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('TS issue', () => {
  it('renders', () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        title: 'test',
      }
    })
    expect(wrapper.exists()).toBe(true);
  })
})