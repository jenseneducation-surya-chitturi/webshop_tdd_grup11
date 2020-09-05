<template>
  <div class="conatiner-contact">
     <h1 class="contact-header">Contact Us</h1>
     <form class="Contact-Form" >
        <input required name="name" placeholder="Name" type="text" v-model="username" data-username>
          <input required name="email" placeholder="Email" type="text">
            <textarea name="message" rows="4" placeholder="Your Message"></textarea>
              <button class="form-button" @click.stop.prevent="handleSubmit()">Send</button>
  
     </form>
  <div class="Msg" v-if="submitted">
     Thank you for your Message , {{ username}}

   </div>

  </div>
  

</template>

<script>
export default {
  name: "ContactPage",
  
  data() {
    return {
      username: '',
      submitted: false
    }
  },


  methods: {
    handleSubmit(){
       this.submitted = true
    }

  }

};
</script>

<style>

.Contact-Form{
  display:grid;
  grid-template-columns: auto;
  grid-auto-flow: row;
  grid-gap: 8px;
  background: rgb(206, 236, 193);
  padding: 30px;
  border: 2px solid lightslategray;
  border-radius: 8px;
}
.form-button{
    color:black;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
    width: 100px;
}

.Contact-Form > input,
.Contact-Form  >textarea,
.Contact-Form > button {

  
  grid-row: auto;
  border:rgb(88, 81, 81);
  padding: 10px;
}

.form-button:hover {
  background-color: limegreen;

}
.Msg{

  color:black;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bolder;
} 

</style>