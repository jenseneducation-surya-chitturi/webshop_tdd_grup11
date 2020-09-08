import { shallowMount } from '@vue/test-utils'
import ProductPage from '@/views/ProductPage.vue'

describe('productPage.vue' , () => {

    let wrapper ,data;
       beforeEach( () =>{
           data = []
              wrapper = shallowMount(ProductPage,{
                  data: () => ({
                    products:data
                 })
         
            }); 
    })
 
    it('should have empty string show all elements', () => {
        let elementCount = wrapper.findAll('ul > li').length;
           expect(elementCount).toBe(data.length)
    })

    it('should have "p" show "pink" and "purple" ', async () => {
      
         const input = wrapper.find('input');
           await input.setValue('d');

        let results = wrapper.findAll('li').wrappers;
        let hasPink = results.some(li => li.text() === 'pink')
        let hasPurple = results.some(li => li.text() === 'purple');
        
        expect(hasPink && hasPurple).toBe(true)
          expect(results.length).toBe(2)
    })
})





