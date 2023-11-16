'use strict'

let swiper = new Swiper(".mySwiper", {
    //スライドの設定を書いていく
    //https://b-risk.jp/blog/2022/04/swiper/ を参考にすればいろんなスライドが作れると思う
    
    slidesPerView: 1, //画面内のスライドの表示枚数
    spaceBetween: 30, //各スライド間の設定
    loop: true, //ループの指定
    pagination: { //下のドットの指定（いらないなら消す）
      el: ".swiper-pagination", 
      clickable: true, //押せるかどうか
    },
    autoplay:{
      delay:5000,
    },
    navigation: { //横の矢印の指定（いらないなら消す）
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
