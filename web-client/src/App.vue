<template>

  <div id="app">

    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <router-link to="/">
        <div class="bold">Quick Vote</div>
    </router-link>

    <div class="tag-line">quickly create polls. no singup</div>

    <div class="notifications" v-for="notifi in notifications">
        <div v-bind:class="notifi.type" id="notification" v-show="!notifi.ignore">
            <div class="msg">{{notifi.msg}}</div>
            <div class="ignore" v-on:click="notifi.ignore = true">❌</div>
        </div>
    </div>
    <router-view :notifications="notifications"></router-view>

    <recent-polls></recent-polls>
  </div>
</template>

<script>
import RecentPolls from '@/components/RecentPolls'

export default {
  name: 'app',
  data () {
    return {
      'notifications': []
    }
  },
  components: {RecentPolls}
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  font-family: "Helvetica", "Arial", sans-serif;
  max-width: 50em;
  padding: 4em 1em;
  line-height: 1.5;
}

#app {
  margin-top: 10px;
  margin-bottom: 30px;
}

h1{
    color: #333;
}
.light{
    display: inline-block;
    font-size: 70px;
    opacity: 0.5;
}

.bold{
    display: inline-block;
    font-size: 70px;
}

.tag-line{
    margin-top: 20px;
    margin-left: 40px;
    margin-bottom: 20px;
    font-size: 20px;
    opacity: 0.7;
}

a{
    color: #000;
    cursor: pointer;
}

a:hover{
    color: #0090d3;
    text-decoration: underline;
}

input{
    display: block;
    margin-bottom: 20px;
    padding: 10px;
}

button{
    background: none;
    border: none;
    background-color: #0090d3;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
}

#notification{
    height: 50px;
    width: 50%;
    margin-top: 20px;
    margin-left: 40px;
    color: #fff;
}

#notification .msg{
    margin: 15px;
    float: left;
}

#notification .ignore{
    margin: 15px;
    float: right;
    cursor: pointer;
}

.error{
    background: #ff0000;
}

.success{
    background: #23C15D;
}

@media all and (max-width: 720px){
  #notification{
    height: 50px;
    width: 100%;
    margin: 0;
  }

}

</style>
