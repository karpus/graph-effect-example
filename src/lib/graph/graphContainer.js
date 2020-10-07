'use strict';

import Sepia from './effect/Sepia.js';
import Glitch from './effect/Glitch.js';

export default class GraphContainer {
    constructor() {
        this.effect = null;
        this.effectParam = {};
        this.callbackAfterRender = null;
        
        
        
    }
    factory(name){
        let Effect = null;
        if (name == "Sepia"){
            Effect = new Sepia()
        }       
        if (name == "Glitch"){
            Effect = new Glitch()
        }
        this.effect = Effect;
        return this.effect;
    }
    setEffectParam(effectParam){
        this.effectParam = effectParam;
    }
    initEffect(){
        let _this = this;
        let effect = this.effect;
        effect.setParam(this.effectParam);
        effect.init();
        //effect.setCallbackAfterRender(_this._afterEffectRender.bind(_this)); 
    }
    
    drawCanvas(param){
        //let html = param.html;
        //let canvas = param.canvas;
        //let time = param.time;
        this.effect.drawCanvas(param);
        return;
        
    }
    
}


