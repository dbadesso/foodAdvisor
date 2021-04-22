import { mount } from '@vue/test-utils'
import RestaurantCard from '~/components/RestaurantCard'

describe('RestaurantCard', () => {
  const props = {
    id: 0,
    name: 'nombre',
    description: 'description',
    text: 'texto largo',
    slug: 'slug',
    category: 'categoria',
    city: 'city',
    address: 'direccion',
    likes: 0,
    image: 'https://netfly.pedrojimenez.info/photosCursoOpenWebinar/restaurant08.jpg'
  }
  const wrapper = mount(RestaurantCard, { propsData: props })
  test('Is mounted', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
