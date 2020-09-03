import { shallowMount } from '@vue/test-utils';
import AboutPage from '@/views/AboutPage.vue';

describe('Homepage', () => {
    test('find the tag with title ', () => {
        const wrapper = shallowMount(AboutPage)
        const msg = 'About us'

        const element = wrapper.find('h1').text()

        expect(element).toBe(msg)
    })
})