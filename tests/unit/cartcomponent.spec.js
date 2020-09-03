import { shallowMount } from '@vue/test-utils';
import Bag from '@/components/Bag.vue';

describe('Bag.vue', () => {
    it('renders the hello world', () => {
        const msg = 'hello world';
        const wrapper = shallowMount(Bag);
        expect(wrapper.find('h1').text()).toMatch(msg);
    });


    test(' it should navigate to /about page', () => {

    })

});