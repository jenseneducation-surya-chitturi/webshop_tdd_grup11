import { shallowMount } from '@vue/test-utils'
import ProductPage from '@/views/ProductPage.vue'

describe('productPage.vue', () => {

  let wrapper, data;
  beforeEach(() => {
    data = []
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

    const input = wrapper.find('input');
    await input.setValue('p');

    let results = wrapper.findAll('li > h1').wrappers;
    console.log(results);
    let hasPink = results.some(h1 => h1.text() === 'pinky')
    let hasPurple = results.some(h1 => h1.text() === 'phone');

    expect(hasPink && hasPurple).toBe(true)
    expect(results.length).toBe(2)
  })
})





