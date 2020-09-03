<template>
<div>
  <div class="nav-container">
    <div class="logoName">MY Shop</div>
    
    <ul class="ul-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact Us</router-link>
      </li>
    </ul>
    <!-- <h1>hello world</h1> -->
  </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>


*{
  box-sizing: border-box;
}

body{
  margin: 0;
  padding: 0;
}

.nav-container {
   display:flex;
   justify-content: space-between;
   align-items: center;
   background-color: rgb(86, 168, 90);
   color:white;

}

.logoName{
    font-size: 1.5rem;
    margin: .5rem
}


ul{
  margin:0;
  padding:0;
  display:flex;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
  color:white;
  padding:1rem;
  display: block;
}

li :hover{
  background-color: gray;
}


.toggle-button{
  position:absolute;
  top:.75rem;
  right:1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:30px;
  height: 21px;

}


@media only screen and (max-width:500px){
  .nav-container{
    display:flex;
    flex-direction: column;

  }

  .ul-links{
     display:flex;
    flex-direction: column;

  }
}


/*
.nav-container {
  font-family: sans-serif;
  width: 100vw;
  /* background: maroon;	 
  height: 10vh;
  padding: 10px 10px;
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}

li {
  margin: 0 20px;
}
a {
  color: white;
  font-size: 20px;
  text-decoration: none;
  font-weight: lighter;
}

li :hover {
  color: #222;
}

*/
</style>

