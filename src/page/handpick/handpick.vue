<template>
    <div class="home">
      <heads></heads>
      <!-- 轮播图与社会热点 -->
      <div class="home-box">
        <div>
          <div class="swiper-container home-swiper" @mouseover="swiperIn" @mouseout="swiperOut">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in swiperList">
                <img :src="item.imgUrl">
                <div class="swiper-slide-title">
                  <div>{{ item.title }}</div>
                  <div class="swiper-slide-title-size">{{ item.writes }}</div>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev" v-show="btnShow"></div>
            <div class="swiper-button-next" v-show="btnShow"></div>
            <div>
              <div class="swiper-pag  ination"></div>
            </div>

          </div>
        </div>
        <div class="home-box-content">
          <div class="home-box-option">
            <div class="option-title">社区热点</div>
            <div class="option-content">
              <spen>阴阳师</spen>
              <spen>简笔画</spen>
              <spen>折纸</spen>
              <spen>初装装扮</spen>
              <spen>当你沉睡时</spen>
              <spen>观影手帐</spen>
              <spen>拼豆</spen>
              <spen>古风</spen>
              <spen>水彩</spen>
            </div>
            <div class="option-box">
              <spen>研究同好会</spen>
              <spen class="option-box-size">·</spen>
              <spen>追求形体之美</spen>
              <spen class="option-box-pink">精选</spen>
            </div>
            <div>
              <spen>收图小助手：</spen>
              <spen> 堆糖收集工具</spen>
            </div>
          </div>
          <div class="home-box-image"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import heads from '../../components/heads'

  export default {
    data() {
      return {
        btnShow: false,     //默认隐藏按钮
        swiperList: [{
          imgUrl: 'https://b-ssl.duitang.com/uploads/item/201712/01/20171201142621_yXAuK.thumb.710_443_c.jpeg',
          title: '精致到手腕的每一天～',
          writes: 'by 熊丸子'
        },
          {
            imgUrl: 'https://b-ssl.duitang.com/uploads/item/201712/01/20171201182815_ajz8e.thumb.710_443_c.jpeg',
            title: '冬季穿搭秘籍～',
            writes: 'by 占秋'
          },
          {
            imgUrl: 'https://b-ssl.duitang.com/uploads/item/201711/29/20171129160620_NHUrv.thumb.710_443_c.jpeg',
            title: '冬季穿搭秘籍～',
            writes: 'by Miss天然卷'
          },
          {
            imgUrl: 'https://b-ssl.duitang.com/uploads/item/201711/29/20171129140631_k2sQA.thumb.710_443_c.jpeg',
            title: '答应我，你们的文具也要时髦在线。',
            writes: 'by 李大象在哪里'
          },
          {
            imgUrl: 'https://b-ssl.duitang.com/uploads/item/201711/28/20171128142436_uScLk.thumb.710_443_c.jpeg',
            title: '如何购买一件你明年还想穿的大衣？',
            writes: 'by 王三三的猫'
          },
        ]
      }
    },
    mounted() {
      setTimeout(() => {
        var mySwiper = new Swiper('.home-swiper', {
          autoplay: 5000,//可选选项，自动滑动
          loop : true,
          pagination : '.swiper-pagination',
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
        })
      },0)
    },
    methods: {
      swiperIn() {
        this.btnShow = true;
      },
      swiperOut() {
        this.btnShow = false
      }
    },
    components: {
      heads
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home {
    width: 100%;
    .home-box {
      width: 80%;
      margin: 0 auto;
      margin-top: 110px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .home-swiper {
        width: 712px;
        height: 445px;
        z-index: 1;
        .swiper-slide {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
          .swiper-slide-title {
            width: 632px;
            position: absolute;
            left: 40px;
            bottom: 40px;
            background: rgba(0,0,0,.2);
            border-radius: 10px;
            font-size: 26px;
            padding: 10px;
            padding-left: 20px;
            display: flex;
            div {
              color: #ffffff;
            }
            .swiper-slide-title-size {
              line-height: 36px;
              font-size: 16px;
            }
          }
        }
      }
      .home-box-content {
        width: 468px;
        height: 445px;
        display: flex;
        align-content: space-around;
        flex-wrap: wrap;
        .home-box-option {
          width: 468px;
          height: 293px;
          padding-left: 30px;
          padding-right: 30px;
          background: #ffffff;
          font-size: 16px;
          .option-title {
            width: 100%;
            height: 70px;
            line-height: 70px;
            border-bottom: 1px solid #000;
          }
          .option-content {
            width: 100%;
            height: 100px;
            padding-top: 20px;
            padding-bottom: 20px;
            border-bottom: 1px dashed #000;
            spen {
              display: inline-block;
              padding-right: 15px;
              border-right: 1px solid #000;
              margin-top: 5px;
            }
          }
          .option-box {
            width: 100%;
            height: 60px;
            padding-top: 15px;
            padding-bottom: 15px;
            margin-bottom: 20px;
            border-bottom: 1px solid #000;
            display: flex;
            spen {
              display: inline-block;
              height: 18px;
              margin-right: 10px;
            }
            .option-box-size{
              display: inline-block;
              transform: scale(5,5) translate(0,-2px);
            }
            .option-box-pink {
              background: #f46;
              color: #fff;
              font-size: 12px;
              padding: 3px;
              border-radius: 5px;
            }
          }
        }
        .home-box-image {
          width: 468px;
          height: 132px;
          background-image: -webkit-image-set(url(https://b-ssl.duitang.com/uploads/people/201606/29/20160629173907_AyjmB.jpeg) 1x, url(https://b-ssl.duitang.com/uploads/people/201606/29/20160629173920_dNxUz.jpeg) 2x);;
        }
      }
    }
  }
</style>
