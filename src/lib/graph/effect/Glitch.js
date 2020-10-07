'use strict';


export default class Glitch {
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
        let context =ctx; 
        let fontSize = 20;
        let timeRepeat = 3;
        context.font = this.getFont(fontSize);
        let textPromo = "Create Glitch effect";
        var metrics = context.measureText(textPromo);
        var textWidth = metrics.width;
        fontSize = Math.round(canvas.width / textWidth* fontSize)
        context.font = this.getFont(fontSize);
        
        context.fillText(textPromo, 0, fontSize+(time/timeRepeat - Math.floor(time/timeRepeat))*(canvas.height-fontSize));
        
    }
    getFont(fontSize){
        return fontSize+ "px 'Verdana'";
    }
  

    


}


