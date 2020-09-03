import { shallowMount } from '@vue/test-utils'
import ProductPage from '@/views/ProductPage.vue'

describe('Productpage.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(ProductPage);
    })

    it('renders the text "Products"', () => {
        const msg = 'Products';
        const textMessage = wrapper.find('h1').text();
        expect(textMessage).toBe(msg);

    })
})