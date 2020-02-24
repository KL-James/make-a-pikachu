!function(){
    function writeCode(prefix, code, fn){
        var duration = 10
        $('.actions').on('click', 'button', function(e){
            let $button = $(e.currentTarget)
            let speed = $button.attr('data-speed')
            $button.addClass('active')
            .siblings('.active').removeClass('active')
            switch(speed){
                case 'slow':
                    duration = 100;
                    break
                case 'normal':
                    duration = 50;
                    break
                case 'fast':
                    duration = 10;
                    break
            }
        })
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n <= code.length){
               id = setTimeout(run, duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }
    let code = `
    /*
    * 首先，需要准备皮卡丘的皮
    */
    .preview{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FEE433;
        overflow: hidden;
      }
      .wrapper{
        width: 100%;
        height: 190px;
        position: relative;
      }
      /*
      * 然后，画一只皮卡丘的鼻子( ˃̶̀🐽˂̶́。)
      */
      .nose{
        width:0px;
        height:0px;
        border-style: solid;
        border-color: black transparent transparent;
        border-width: 12px;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: 12px;
        border-radius: 11px;
      }
      /*
      * 接下来，画皮卡丘的眼睛 ⊙ _ ⊙
      */
      .eye{
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid black;
      }
      /*
      * 眼睛里面的珠子  ⊙  ⊙
      */
      .eye::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        border-radius: 50%;
        position: absolute;
        left: 6px;
        border: 2px solid black;
        top:-2px;
      }
      /*
      * 左眼在左边 (废话)
      */
      .eye.left{
        right: 50%;
        margin-right: 80px;
      }
      /*
      * 右眼在右边 (废话)
      */
      .eye.right{
        left: 50%;
        margin-left: 128px;
      }
      /*
      * 然后， 画皮卡丘的脸 ˉˉ
      */
      .face{
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border: 2px solid black;
        position: absolute;
        border-radius: 50%;
         top: 85px;
      }
      /*
      * 将脸移到正确的位置 )
      */
      .face.left{
        right: 50%;
        margin-right: 106px;
      }
      .face.right{
        left: 50%;
        margin-left: 156px;
      }
      /*
      * 上嘴唇 ⊙ω⊙
      */
      .upperLip{
        height: 20px;
        width: 80px;
        border: 3px solid black;
        top: 52px;
        position: absolute;
        background: #FDE348;
      }
      .upperLip.left{
        right: 50%;
        margin-right:-25px;
        border-bottom-left-radius: 40px 25px;
        border-right: none;
        border-top: none;
        transform: rotate(-15deg);
        position: absolute;
      }
      .upperLip.right{
        left: 50%;
        margin-left:25px;
        border-bottom-right-radius: 40px 25px;
        border-left: none;
        border-top: none;
        transform: rotate(15deg);
        position: absolute;
      }
      /*
      * 下嘴唇 ⊙ω⊙
      */
      .lowerLip-wrapper{
        left: 50%;
        position: absolute;
        bottom: 0;
        margin-left: -46px;
        height: 132px;
        width: 140px;
        overflow: hidden;
      }
      .lowerLip{
        width: 140px;
        height: 2000px;
        background: #990513;
        border: 3px solid black;
        border-radius: 200px/900px;
        position: absolute;
        bottom: 0;
        overflow: hidden;
      }
      /*
      * 小舌头 ≧▽≦
      */
      .lowerLip::after{
        content: '';
        position: absolute;
        bottom: -45px;
        width:150px;
        height:150px;
        background: #FC4A62;
        border-radius: 50%;
        left: 50%;
        margin-left: -75px
      }
      /*
      * 画好啦啦啦，虽然不太像 (ˉ▽ˉ；)
      */
    `
writeCode('',code)
}.call()
