import { RouterLinkStub, mount } from '@vue/test-utils'
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
  // const wrapper = mount(RestaurantCard, { propsData: props })
  const wrapper = mount(RestaurantCard, {
    propsData: props,
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })

  test('Is mounted', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  // comprobamos que las propiedades tienen el nombre que deben tener
  test('Is rendering a restaurant', () => {
    expect(wrapper.props().description).toBe('description')
    expect(wrapper.props().name).toBe('nombre')
  })
})
