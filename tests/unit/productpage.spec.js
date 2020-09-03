import { shallowMount } from '@vue/test-utils'
import ProductsPage from '@/views/ProductsPage.vue'

describe('productspage.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(ProductsPage);
    })

    it('renders the text "Products"', () => {
        const msg = 'Products';
        const textMessage = wrapper.find('h1').text();
        expect(textMessage).toBe(msg);

    })
})