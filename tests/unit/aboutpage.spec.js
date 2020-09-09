import { shallowMount } from '@vue/test-utils';
import AboutPage from '@/views/AboutPage.vue';

describe('Aboutpage.vue', () => {
    test('find the tag with "homepage"', () => {
        const wrapper = shallowMount(AboutPage);
        const msg = 'Buy the best value Products';

        const element = wrapper.find('h1').text();

        expect(element).toBe(msg);
    })
})