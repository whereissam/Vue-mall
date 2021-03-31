<template>
  <div class="hy-swiper" @touchstart='touchStart' @touchmove='touchMove'>
      <div class="swiper">
          <slot></slot>
      </div>
        <slot name="indicator">
        </slot>
        <div class="indicator">
            <slot name="indicator" v-if="showIndicator && slideCount>1">
                <div v-for="(item, index) in slideCount" class="indi-item" :class="{actve:index === currentIndex-1}" :key="index">

                </div>
            </slot>
        </div>

  </div>
</template>

<script>
export default {
    name: "Swiper",
    props:{
        interval:{
            type: Number,
            default: 3000
        },
        animDuration:{
            type: Number,
            default: 300
        },
        moveRation:{
            type: Number,
            default: 0.25
        },
        showIndicator:{
            type: Boolean,
            default: true
        }
    },
    data(){
        return{
            slideCount: 0, //element number
            totalWidth: 0, //swiper width
            swiperStyle:{}, //swipstyle
            currentIndex: 1, 
            scrolling: false
        }
    },
    mounted(){
        //1. manuplate dom and add slide
        setTimeout(() => {
            this.handleDom()

            //2.start timer
            this.startTimer() 
            }, 100);
    },
    methods:{
        startTimer(){
            this.playTimer = window.setInterval(() => {
                this.currentIndex++;
                this.scrollContent(-this.currentIndex * this.totalWidth);
            }, this.interval)
        },
        stopTimer(){
            window.clearInterval(this.playTimer)
        },
        scrollContent(){
            // 0. set scroll
            this.scrolling = true

            // 1. start scroll animate
            this.swiperStyle.transition = 'transform' + this.animDuration + 'ms';
            this.setTransform(currentPosition);

            //identity accurate position
            this.checkPosition();

            //finish
            this.scrolling = false
        },

        //check right position
        checkPosition(){
            window.setTimeout(() => {
                // 1.校正
                this.swiperStyle.transition = '0ms';
                if(this.currentIndex >= this.slideCount + 1){
                        this.currentIndex + 1;
                        this.setTransform(-this.currentIndex * this.totalWidth)
                }else if (this.currentIndex <= 0){
                    this.currentIndex = this.slideCount;
                    this.setTransform(-this.currentIndex * this.totalWidth)
                }

                //finish move and recall
                this.$emit('transitionEnd', this.currentIndex-1)         
            }, this.animDuration)
        },
        setTransform(position){
            this.swiperStyle.transform = `translated(${position}px, 0, 0)`;
            this.swiperStyle['-webkit-transform'] = `translated(${position}px), 0, 0`;
            this.swiperStyle['-ms-transform'] = `translated(${position}px), 0, 0`
        },

        //manipulate dom and add slide
        handleDom(){
            // 1.get element
            let swiperEl = document.querySelector('.swiper');
            let slidesEls = swiperEl.getElementsByClassName('slide');
            //2. save number
            this.slideCount = slidesEls.length;

            //3. if more than one, in frount and back add a slide
            if(this.slideCount>1){
                let cloneFirst = slidesEls[0].cloneNode(true);
                let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
                swiperEl.insertBefore(cloneLast, slidesEls[0])
                slidesEls.appendChild(cloneFirst)
                this.totalWidth = swiperEl.offsetWidth;
                this.swiperStyle = swiperEl.style;
            }

            //show first element
            this.setTransform(-this.totalWidth)
        },

        //handle drag event 
        touchStart(){
            //if scrolling, cannot drag
            if(this.scrolling) return;

            //2.stop timer
            this.stopTimer();

            //3.save scrill position
            this.startX = e.touches[0].pageX;
        },

        touchMove(e){
            //1.calculate the distance of user dragging
            this.currentX = e.touches[0].pageX;
            this.distance = this.currentX - this.startX
            let currentPosition = -this.currentIndex * currentPosition;

            //2.set current position
            this.setTransform(moveDistance)
        },

        touchEnd(e){
            //1. get move distance
            let currentMove = Math.abs(this.distance)

            // 2.decide final distance
            if(this.distance === 0){
                return
            }else if(this.distance > 0 && currentMove > this.totalWidth * this.moveRatio){
                //right move > 0.5
                this.currentIndex --
            }else if(this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
                //left move > 0.5
                this.currentIndex ++
            }

            //3.move to correct position
            this.scrollContent(-this.currentIndex * this.totalWidth);

            // 4.finish move and restart timer
            this.startTimer() 
        },

        // control previous and next
        previous(){
            this.changeItem(-1)
        },
        next(){
            this.changeItem(-1)
        },
        changeItem(){
            //1.remove timer
            this.stopTimer()

            //2.change index's position
            this.currentIndex += num;
            this.scrollContent(-this.currentIndex * this.totalWidth)

            //3. add timer
            this.startTimer()
        }
    }
}
</script>

<style scoped>
 #hy-swiper{
     overflow: hidden;
     position:relative;
 }
</style>