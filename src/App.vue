<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  
}
</script>



<style lang='scss'>

*{
    margin: 0;
    padding:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background: $divider_color;


  .mint-tabbar {
    color: $gray_font_color;
    >.mint-tab-item.is-selected {
      background: #fafafa;
      color: $theme-color;
    } 
  }

  .mint-header{
    font-size: 1.8rem;
    background-color:$theme-color;
  }

  .mint-navbar{
    border-bottom: 1px solid $divider_color;
    .is-selected{
        border:none;
        color: $theme-color;
    }
  }

  div,section{
    box-sizing: border-box;
  }  
}
</style>




