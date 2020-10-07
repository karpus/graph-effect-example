<template>
  <div class="hello">
    <h1>Effect </h1>
    <div>
    
     <select v-model="selectedEffect">
        <option v-for="option in preset" v-bind:value="option">{{option.name}}</option>
    </select>
    {{selectedEffect}}
</div>

    <video ref="video_object" src="/static/sample.mp4" controls="true" :style="workStyle"></video>
    <canvas ref="canvas_origin" :style="workStyle"></canvas>
    <canvas ref="canvas_new" :style="workStyle"></canvas>
    
  </div>
</template>

<script>
import GraphContainer from "@lib/graph/graphContainer.js";
import EffectPresset from "@data/effect.js";

export default {
  name: 'GraphContainer',
  props: {
    msg: String
  },
  data : function(){
    return {
      element:{
        video : null,
        canvas_origin : null,
        canvas_new :null,
      },
      size:{
        width:1,
        height:1,
      },
      graphContainer:null,
      preset:EffectPresset,
      selectedEffect:null,
    }
  },
  mounted: function(){ 
    this.initElement();
    this.initVideoEvent();
    
    this.initEffect(this.preset['Sepia'])
  },
  created: function(){ 
    
  },
  methods: {
    initElement(){
      this.element.video = this.$refs.video_object;
      this.element.canvas_origin = this.$refs.canvas_origin;
      this.element.canvas_new = this.$refs.canvas_new;
      console.log("initElement",this.element.canvas_origin);
    },
    initVideoEvent(){
      const video = this.element.video;
      let _this = this;
      video.addEventListener("loadedmetadata", _this.onLoadMetadata);
      video.addEventListener("play", function() {
        _this.timerCallback();
      }, false);
      video.onseeked = function(){
        console.log("onseeked",_this.drawFrame);
        _this.drawFrame();
        
      };
    },
    timerCallback(){
      let v = this.element.video;
      if (v.paused || v.ended) {
        return;
      }
      this.drawFrame();
      let self = this;
      setTimeout(function () {
          self.timerCallback();
      }, 0);
    },
    selectEffect(e){
      console.log(e.target.value);
    },
    drawFrame(){
      let cOrigin = this.element.canvas_origin.getContext("2d");
      let cNew = this.element.canvas_new.getContext("2d");
      let v = this.element.video;
      let s = this.size;


      cOrigin.drawImage(v, 0, 0, s.width, s.height);
      cNew.drawImage(v, 0, 0, s.width, s.height);
      
      let param ={
        canvas: this.element.canvas_new,
        time: v.currentTime
      }
      this.graphContainer.drawCanvas(param);
      
      return;
    },
    onLoadMetadata(){
      console.log("onLoadMetadata",this);
      this.setWorkSize();
       this.element.video.currentTime = 0;
      this.drawFrame();
    },
    initEffect(effect){
      this.graphContainer = new GraphContainer();
      this.graphContainer.factory(effect.name);
      this.graphContainer.setEffectParam(effect.param);
      this.graphContainer.initEffect();
    },
    setWorkSize(){
      let v = this.element.video;
      let s = this.size;
      let checkWidth = 300;
      s.width = v.videoWidth;
      s.height = v.videoHeight;
      
      if (s.width>checkWidth){
        let r=s.width/s.height;
        s.width = checkWidth;
        s.height = s.width/r;
      }
    }
  },
  computed:{
    workStyle(){
      let s = this.size;
      let style = {
        width:s.width+"px",
        height:s.height+"px",
      }
      return style;
    }
  },
  watch:{
    selectedEffect(val){
      this.initEffect(val);
      this.element.video.currentTime = 0;
      this.drawFrame();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
