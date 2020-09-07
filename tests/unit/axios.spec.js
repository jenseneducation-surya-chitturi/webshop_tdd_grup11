import { shallowMount } from '@vue/test-utils';
import ProductPage from '@/views/ProductPage.vue'


jest.mock('axios', () => ({
    get: () => Promise.resolve({ data: [{ val: 1 }] })
}));

describe('products', () => {
    test('mocking the axios call to get products shuold work', async () => {
        const wrapper = shallowMount(ProductPage);
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.products.length).toBe(1);
    })
})