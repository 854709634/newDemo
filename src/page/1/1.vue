<template>
    <div class="pinterest">
      <div class="grid">
        <div class="grid-item" v-for="item in list">
          <img :src="item.photo.path" class="grid-item-image">
          <div class="grid-item-title">{{ item.msg }}</div>
          <div class="grid-item-ionc">
            <div v-show="item.favorite_count">
              <img src="static/image/星.png">
              <span>{{ item.favorite_count }}</span>
            </div>
            <div v-show="item.like_count">
              <img src="static/image/点赞.png">
              <span>{{ item.like_count }}</span>
            </div>
            <div v-show="item.reply_count">
              <img src="static/image/信息.png">
              <span>{{ item.reply_count }}</span>
            </div>
            <div v-show="item.item.price" class="grid-item-ionc-price">
              <span>￥{{ item.item.price }}</span>
            </div>
          </div>
          <div class="grid-item-gather">
            <div class="grid-item-gather-left">
              <img :src="item.sender.avatar">
            </div>
            <div class="grid-item-gather-right">
              <div class="grid-item-gather-right-name">{{ item.sender.username }}</div>
              <div class="grid-item-gather-right-content">收集到{{ item.album.name }}</div>
            </div>
          </div>
          <div v-show="item.top_comments.object_list" v-for="userComment in item.top_comments.object_list"  class="grid-item-gather">
            <div class="grid-item-gather-left">
              <img :src="userComment.sender.avatar">
            </div>
            <div  class="grid-item-gather-right">
              <div  class="grid-item-gather-right-name">{{ userComment.sender.username }}</div>
              <div  class="grid-item-gather-right-content">收集到{{ userComment.content }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import {everyOne} from '../../service/getData'

  export default {
    data() {
      return {
        list: [],       //瀑布流数据
      }
    },
    async mounted() {
//      setTimeout(() => {
      $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 160,
        gutter: 20
      });
//      },0)
      let res = await everyOne()
      res.data.object_list.map((item) => {
        if(!item.item){
          item.item = {
            price: ''
          }
        }
      })
      this.list = res.data.object_list
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  * { box-sizing: border-box; }

  body { font-family: sans-serif; }
  /* ---- grid 瀑布流 ---- */
  .grid {
    width: 80%;
    height: 2000px;
    margin: 0 auto;
  }
  /* clearfix */
  .grid:after {
    content: '';
    display: block;
    clear: both;
  }
  /* ---- grid-item ---- */
  .grid-item {
    width: 224px;
    float: left;
    background: #fff;
    /*border-color: hsla(0, 0%, 0%, 0.5);*/
    /*border-radius: 5px;*/
    margin-bottom: 10px;
    margin-right: 20px;
    .grid-item-image {
      width: 224px;
    }
    .grid-item-title {
      font-size: 16px;
    }
    .grid-item-ionc {
      height: 25px;
      font-size: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      div {
        width: 40px;
        margin-right: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .grid-item-ionc-price {
        position: absolute;
        right: 5px;
        bottom: 5px;
        span {
          color: #f14382 !important;
        }
      }
    }
    .grid-item-gather {
        width: 100%;
        padding: 10px;
        border-top: 1px solid #eee;
        display: flex;
        align-items: center;
        .grid-item-gather-left {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          font-size: 12px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .grid-item-gather-right {
          width: 150px;
          .grid-item-gather-right-name {
            font-size: 16px;
          }
          .grid-item-gather-right-content {
            font-size: 12px;
          }
        }
      }
  }
  /*.grid-item:before {*/
    /*counter-increment: grid-item;*/
    /*content: counter(grid-item);*/
    /*display: block;*/
    /*color: white;*/
    /*text-align: center;*/
    /*font-size: 1.4rem;*/
  /*}*/

</style>
