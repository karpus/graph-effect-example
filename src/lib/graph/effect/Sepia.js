'use strict';


export default class Sepia {
    constructor() {
    
    }
    init(){
        let _this = this;
    }
   
    setParam(param){
        this.param = param;

    }
    drawCanvas(param){

        let canvas = param.canvas;
        let time = param.time;
        let ctx = canvas.getContext('2d');
        let imageData = ctx.getImageData(0, 0,canvas.width,canvas.height);
        imageData = this.sepia(imageData);
        ctx.putImageData(imageData, 0, 0);        
        //this._runCallback();
    }
  

    sepia(imageData) {
        
        let pixels = imageData.data;
        for (var i = 0; i < pixels.length; i += 4) {
          var r = pixels[i];
          var g = pixels[i + 1];
          var b = pixels[i + 2];
          pixels[i]     = (r * 0.393)+(g * 0.769)+(b * 0.189); // red
          pixels[i + 1] = (r * 0.349)+(g * 0.686)+(b * 0.168); // green
          pixels[i + 2] = (r * 0.272)+(g * 0.534)+(b * 0.131); // blue
        }
        return imageData;
      }


}


