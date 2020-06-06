<template>
  <div id="app">
    <div id="header">
      Mlee's Quiz Corner
    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  background-color: rgb(244, 246, 248);
  padding-bottom:200px;
  padding-top:50px;
}
#header{
  height:50px;
  color:white;
  background-color: rgb(134, 7, 7);
  position:fixed; 
  top:0;
  left:0;
  width:100%;
  padding-left:50px;
  padding-top:13px;
  font-size:18px;
  z-index:1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
code{
  margin-left:30px;
  display:inline-block;
}
</style>
