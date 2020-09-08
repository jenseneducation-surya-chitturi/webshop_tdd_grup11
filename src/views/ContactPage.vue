<template>
  <div class="conatiner-contact">
    <h1 class="contact-header">Contact Us</h1>
    <form @submit.prevent="handleSubmit" class="contact-form">
      <input required name="name" placeholder="Name" type="text" v-model="userName" data-userName />
      <input required name="email" placeholder="Email" type="text" v-model="userEmail" data-userEmail/>
      <textarea name="message" rows="4" placeholder="Your Message"></textarea>
      <!-- <button class="form-button" @click.stop.prevent="handleSubmit()">Send</button> -->
      <input type="submit">
    </form>
    <div class="msg" v-if="submitted">Thank you for your Message, {{ userName }}</div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",

  data() {
    return {
      userName: "",
      submitted: false,
      userEmail: "",
      submited: false,
    };
  },

  methods: {
    handleSubmit() {
      this.submitted = true;
    },
  },
};
</script>

<style>
.conatiner-contact {
  background: #50a280;
  width: 100%;
  height: 600px;
}

.contact-form {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: row;
  grid-gap: 8px;
  background: rgb(206, 236, 193);
  padding: 30px;
  border: 2px solid lightslategray;
  border-radius: 8px;
  width: 60%;
  margin: 0 auto;
}

.form-button {
  color: black;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  width: 100px;
}

.contact-form > input,
.contact-form > textarea,
.contact-form > button {
  grid-row: auto;
  border: rgb(88, 81, 81);
  padding: 10px;
}

.form-button:hover {
  background-color: limegreen;
}

.msg {
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bolder;
}
</style>