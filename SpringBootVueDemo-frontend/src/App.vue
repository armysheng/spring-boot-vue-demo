<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <header-bar></header-bar>
    <sideMenu></sideMenu> 
    <app-main></app-main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import HeaderBar from 'components/layout/HeaderBar'
import SideMenu from 'components/layout/SideMenu'
import AppMain from 'components/layout/AppMain'
import FooterBar from 'components/layout/FooterBar'
// import  {Header, SideMenu, AppMain, Footer} from 'components/layout/'
export default {
   components: {
    HeaderBar,
    SideMenu,
    AppMain,
    FooterBar,
    NprogressContainer
  },
  name: 'app'
}
</script>

<style>

</style>
<style lang="scss">
body {
	margin: 0px;
	padding: 0px;
	/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
	// background: #1F2D3D;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
}
#app {
 position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
}
.nprogress-container {
  position: fixed !important;
  width: 100%;
  height: 50px;
  z-index: 2048;
  pointer-events: none;

  #nprogress {
    $color: #48e79a;

    .bar {
      background: $color;
    }
    .peg {
      box-shadow: 0 0 10px $color, 0 0 5px $color;
    }
    .spinner-icon {
      border-top-color: $color;
      border-left-color: $color;
    }
  }
}
</style>