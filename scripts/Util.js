/*!
 * Util.js v1.0.0
 * JavaScript Basic tools package provides a simple API
 * 
 * Copyright (c) 2016 chping <chping_2125@163.com>
 * 
 * Licensed under the MIT license.
 */
(function(fn) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = fn();
    } else if (typeof define === "function" && define.amd) {
        define([], fn);
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }
        g.util = fn();
    }
})(function() {
    var Util = function(){}
    Util.prototype = {
        event:{
            addHandler:function(element,type,handler){
                if(element.addEventListener){
                    element.addEventListener(type,handler,false);
                }else if(element.attachEvent){
                    element.attachEvent('on'+type,handler);
                }else{
                    element['on'+type] = handler;
                }
            },
            removeHandler:function(element,type,handler){
                if(element.removeEventListener){
                    element.removeEventListener(type,handler,false);
                }else if(element.detachEvent){
                    element.detachEvent('on'+type,handler);
                }else{
                    element['on'+type] = null;
                }
            },
            getEvent:function(event){
                return event?event:window.event;
            },
            getTarget:function(event){
                return event.target||event.srcElement;
            },
            preventDafult:function(event){
                if(event.preventDafult){
                    event.preventDafult();
                }else{
                    event.returnValue = false;
                }
            },
            stopPropagation:function(event){
                if(event.stopPropagation){
                    event.stopPropagation();
                }else{
                    event.calcelBubble = true;
                }
            },
            getMouseButton:function(event){
                if(document.implementation.hasFeature("MouseEvents","2.0")){
                    return event.button;
                }else{
                    switch(event.button){
                        case 0:
                        case 1:
                        case 3:
                        case 5:
                        case 7: return 0;
                        case 4: return 1;
                        case 2:
                        case 6: return 2;
                    }
                }
            },
            getWheelDelta:function(event){
                if(event.wheelDelta){
                    return (client.engine.opera&&client.engine.opera<9.5?-event.wheelDelta:event.wheelDelta);
                }else{
                    return -event.detail*40;
                }
            },
            getCharCode:function(event){
                if(typeof event.charCode == 'number'){
                    return event.charCode;
                }else{
                    return event.keyCode;
                }
            },
            getPageX:function(event){
                if(event.pageX === undefined){
                    return event.clientX+(document.body.scrollLeft||document.documentElement.scrollLeft);
                }else{
                    return event.pageX;
                }
            },
            getPageY:function(event){
                if(event.pageY === undefined){
                    return event.clientY+(document.body.scrollTop||document.documentElement.scrollTop);
                }else{
                    return event.pageY;
                }
            }
        },
        dom:{
            getFirstChild: function(node){
                return node.firstElementChild || node.firstChild;
            },
            getLastChild:function(node){
                return node.lastElementChild || node.lastChild;
            },
            getNextSibling:function(node){
                return node.nextElementSibling || node.nextSibling;
            },
            getPreviousSibling:function(node){
                return node.previousElementSibling || node.previousSibling;
            },
            getChildNodes:function(Node){
                return Array.prototype.slice.call(Node.children || Node.childNodes);
            },
            getChildNodes2:function(Node){
                var collection = Node.childNodes;
                var arr = [];
                for(var i=0;i<collection.length;i++){
                    if(collection[i].nodeType == 1){
                        arr.push(collection[i]);
                    }
                }
                return arr;
            },
            nodeListToArray:function(nodeList){
                var array = null;
                try{
                    array = Array.prototype.slice.call(nodeList,0);
                }catch(ex){
                    array = new Array();
                    for(var i=0;i<nodeList.length;i++){
                        array.push(nodeList[i]);
                    }
                }
                return array;
            },
            getStyle:function(node,attr){
                if(node.currentStyle){
                    return node.currentStyle[attr];
                }else{
                    return window.getComputedStyle(node,false)[attr];
                }
            }
        },
        bom:{
            getScreenLeft:function(){
                return (typeof window.screenLeft == 'number')?window.screenLeft:window.screenX;
            },
            getScreenTop:function(){
                return typeof window.screenTop == 'number'?window.screenTop:window.screenY;
            },
            getPageWidth:function(){
                var pageWidth = window.innerWidth;
                if(typeof pageWidth != 'number'){
                    if(document.compatMode == 'CSS1Compat'){
                        pageWidth = document.documentElement.clientWidth;
                    }else{
                        pageWidth = document.body.clientWidth;
                    }
                }
                return pageWidth;
            },
            getPageHeight:function(){
                var pageHeight = window.innerHeight;
                if(typeof pageHeight != 'number'){
                    if(document.compatMode == 'CSS1Compat'){
                        pageHeight = document.documentElement.clientHeight;
                    }else{
                        pageHeight = document.body.clientHeight;
                    }
                }
                return pageHeight;
            },
            getScrollTop:function(){
                return document.documentElement.scrollTop||document.body.scrillTop;
            },
            getScrollLeft:function(){
                return document.documentElement.scrollLeft||document.body.scrillLeft;
            }
        },
        cookie:{
            addCookie:function(name,value,days){
                var date = new Date();
                date.setDate(date.getDate()+days);
                document.cookie = name+'='+encodeURIComponent(value)+';expires='+date;
                return this.getCookie() != ''?true:false;
            },
            removeCookie:function(name){
                this.addCookie(name,"",-1);
                return this.getCookie() == ''?true:false;
            },
            getCookie:function(name){
                var itemArr = [];
                var a="";
                if(document.cookie.length>0) {
                    var cookieArr = document.cookie.split('; ');
                    cookieArr.forEach(function (item, index) {
                        itemArr = item.split('=');
                        if (itemArr[0] == name)
                            a = decodeURIComponent(itemArr[1]);
                    });
                }
                return a;
            }
        },
        random:{
            getRandom:function(num1,num2){
                return Math.floor(Math.random()*(num2-num1+1)+num1);
            }
        },
        ajax:{
            getXHR:function(){
                if(window.XMLHttpRequest){
                    return new XMLHttpRequest();
                }else if(window.ActiveXObject){
                    try{
                        //ie6之后
                        return new ActiveXObject('MSXML2.XMLHTTP');
                    }catch(e){
                        //ie6之前
                        try{
                            return new ActiveXObject('Microsoft.XMLHTTP');
                        }catch(e){}

                    }
                }else{
                    throw new Error('No XHR object available.');
                }
            },
            getAjaxJsonData:function (data) {
                if(JSON.parse){
                    return JSON.parse(data);
                }else{
                    return window.eval("("+data+")");
                }
            }
        }
    }
    for(var attr in Util.prototype) Util[attr] = Util.prototype[attr];
    return Util;
});