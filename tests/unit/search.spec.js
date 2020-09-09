import { shallowMount } from '@vue/test-utils'
import ProductPage from '@/views/ProductPage.vue'

describe('productPage.vue', () => {

  let wrapper, data;
  beforeEach(() => {
    data = [{
      "id": 1,
      "title": "Desk Resin Telephone",
      "price": 1229,
      "color": "yellow",
      "quantity": 0
    },
    {
      "id": 2,
      "title": "Rotary Design Retro",
      "price": 899,
      "color": "red",
      "quantity": 0
    },
    {
      "id": 3,
      "title": "pinky queen",
      "price": 1022,
      "color": "green",
      "quantity": 0
    },
    {
      "id": 4,
      "title": "royal blue",
      "price": 79,
      "color": "blue",
      "quantity": 0
    },
    {
      "id": 5,
      "title": "magical phone",
      "price": 599,
      "color": "brown",
      "quantity": 0
    },
    {
      "id": 6,
      "title": "Carachoe",
      "price": 999,
      "color": "grey",
      "quantity": 0
    }]
    wrapper = shallowMount(ProductPage, {
      data: () => ({
        products: data
      })

    });
  })

  it('should have empty string show all elements', () => {
    let elementCount = wrapper.findAll('ul > li').length;
    expect(elementCount).toBe(data.length)
  })

  it('should have "p" show "pink" and "purple" ', async () => {

    const input = wrapper.find('input')
    await input.setValue('pinky')

    let results = wrapper.findAll('.product-title').wrappers;
    console.log(results);
    let hasPink = results.some(h1 => h1.text() === 'pinky queen')
    console.log(hasPink)
    // let hasPurple = results.some(h1 => h1.text() === 'phone');
    expect(hasPink).toBe(true)
    expect(results.length).toBe(1)
  })
})





