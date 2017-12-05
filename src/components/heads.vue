<template>
    <div class="heads">
      <div class="header-null"></div>
      <div class="header-content">
        <div class="logo" @click="load"></div>
        <div class="head-option" @mouseover="optionBottom" @mouseout="optionTop">
          <div class="head-option-title">
            <div>分类</div>
            <img src="static/image/尖括号-粗大-下.png"  ref="image">
          </div>
          <div class="head-option-content" v-show="optionShow">
              <div class="head-classify">

              </div>
          </div>
        </div>
      </div>
      <div class="header-null"></div>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        optionShow: false,     //默认隐藏选项栏
      }
    },
    mounted() {

    },
    methods: {
      load() {
        location.reload();
      },
      optionBottom() {
        this.optionShow = true
        this.$refs.image.style.transition = 'all 1s'
        this.$refs.image.style.transform = 'rotate(-180deg)'
      },
      optionTop() {
        this.optionShow =false
        this.$refs.image.style.transition = 'all 1s'
        this.$refs.image.style.transform = 'rotate(0)'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  .heads {
    width: 100%;
    height: 64px;
    background: #fff;
    display: flex;
    .header-null {
      width: 160px;
      height: 100%;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        width: 80px;
        height: 64px;
        background: url(https://b-ssl.duitang.com/uploads/files/201312/24/20131224171644_TXGCC.png) 0 12px no-repeat;
      }
      .head-option {
        width: 70px;
        height: 28px;
        border: 1px solid #000;
        margin-left: 35px;
        .head-option-title {
          font-size: 16px;
          height: 100%;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            display: block;
            margin-top: 5px;
          }
        }
        .head-option-content {
          width: 500px;
          height: 500px;
          background: #ffffff;
          .head-classify {
            width: 500px;
            height: 490px;
            margin-top: 10px;
            border: 1px solid #000;
          }
        }
      }
    }
  }

</style>
