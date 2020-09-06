<template>
  <div id="footer">
    <h2>Contact us</h2>
    <div class="contact">
      <div class="email">
        <img class="email-icon" src="@/assets/images/mail.svg" alt />
        <a href="mailto:mailus@G11shop.com">emailus@G11shop.com</a>
      </div>
      <div class="call">
        <img src="@/assets/images/phone.svg" alt />
        <a>046xxxxxxx</a>
      </div>
    </div>
    <span>All Rights Reserved @G11shop.com</span>
  </div>
</template>


<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
#footer {
  background: #887f7f;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px 24px;
  color: white;
}
.contact {
  margin-top: 8px;
  display: flex;
}

div {
  display: flex;
}

img {
  height: 24px;
  width: 24px;
}

.email {
  margin: 0 16px;
}

.email-icon {
    color: #fff;
}

a {
  color: white;
}

.call img {
  margin: 0 8;
}

span {
  font-size: 12px;
  margin-top: 16px;
}
</style>
