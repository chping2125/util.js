# Util.js

JavaScript基础工具类，针对不同版本浏览器内核兼容性提供方便的API!

## 下载

1. [Fork](https://github.com/chping2125/Util.js)到你的Git仓库，然后检出到你本地即可!
2. 点击这里，下载[ZIP压缩版](https://github.com/chping2125/Util.js/archive/master.zip).

## 使用

```html
<script type="text/javascript" src="scripts/Util.js"></script>
<script>
	util.event.addHandler(window,'scroll',function(){
		// code.....
	});
</script>
```
or
```js
	var util = require('Util.js');
	util.event.addHandler(window,'scroll',function(){
		// code.....
	});
```

## 基础工具类APIs
### event(事件)
该对象中包括了对于JS事件操作的相关APIs，兼容DOM0级，DOM1级，DOM3级事件规范。

#### addHandler(element,type,handler)
```js
	/**
	 * 添加事件监听
	 * @param element[Element]             待添加事件监听的element对象
	 * @param type[String]                 DOM事件规范中的事件类型
	 * @param handler[Function]            回掉函数
	 * @return [Element]                   待添加事件监听的element对象
	 **/
	function addHandler(element,type,handler){}

	eg:
		util.event.addHandler(window,'scroll',function(){
			// code.....
		});
```

#### removeHandler(element,type,handler)
```js
	/**
	 * 移除事件监听
	 * @param element[Element]             待移除事件监听的element对象
	 * @param type[String]                 DOM事件规范中的事件类型
	 * @param handler[Function]            回掉函数
	 * @return [Element]                   待移除事件监听的element对象
	 **/
	function removeHandler(element,type,handler){}

	eg:
		util.event.removeHandler(window,'scroll',function(){
			// code.....
		});
```

#### getEvent(event)
```js
	/**
	 * 获取事件event对象
	 * @param event[event]             事件监听回调函数中的event对象
	 * @return [event]                 event的对象
	 **/
	function getEvent(event){}

	eg:
		util.event.addHandler(window,'scroll',function(e){
			e = util.event.getEvent(e);
		});
		
```

#### getTarget(event)
```js
	/**
	 * 获取事件target对象
	 * @param event[event]             事件监听回调函数中的event对象
	 * @return [target]                target的对象
	 **/
	function getTarget(event){}

	eg:
		util.event.addHandler(window,'scroll',function(e){
			e = util.event.getEvent(e);
			var target = util.event.getTarget(e);
		});
		
```

#### preventDafult(event)
```js
	/**
	 * 阻止默认事件
	 * @param event[event]             事件监听回调函数中的event对象
	 **/
	function preventDafult(event){}

	eg:
		util.event.addHandler(window,'scroll',function(e){
			e = util.event.getEvent(e);
			preventDafult(e);
		});
		
```

#### stopPropagation(event)
```js
	/**
	 * 阻止事件冒泡
	 * @param event[event]             事件监听回调函数中的event对象
	 **/
	function stopPropagation(event){}

	eg:
		util.event.addHandler(window,'scroll',function(e){
			e = util.event.getEvent(e);
			stopPropagation(e);
		});
		
```

#### getMouseButton(event)
```js
	/**
	 * 获取鼠标按键键值
	 * @param event[event]    事件监听回调函数中的event对象
	 * @return [Number]       0:左键、1：滑轮键、3：右键
	 **/
	function getMouseButton(event){}

	eg:
		util.event.addHandler(window,'scroll',function(e){
			e = util.event.getEvent(e);
			if(getMouseButton(e) == 1){
				//code...
		});
		
```

#### getWheelDelta(event)
```js
	/**
	 * 鼠标滚轮事件的wheelDelta属性
	 * @param event[event]    事件监听回调函数中的event对象
	 * @return [Number]       
	 **/
	function getWheelDelta(event){}

	eg:
		util.event.addHandler(window,'scroll',function(e){
			e = util.event.getEvent(e);
			if(getWheelDelta(e) == 120){
				//code...
		});
		
```

**说明**
+ 当鼠标向前滚动时，wheelDelta是120的倍数；
+ 当鼠标向后滚动时，wheelDelta是-120的倍数；

#### getCharCode(event)
```js
	/**
	 * 获取键盘键值
	 * @param event[event]    事件监听回调函数中的event对象
	 * @return [Number]       键盘键值
	 **/
	function getCharCode(event){}

	eg:
		util.event.addHandler(window,'scroll',function(e){
			e = util.event.getEvent(e);
			if(getCharCode(e) == 13){
				//code...
		});
		
```

#### getPageX(event)
```js
	/**
	 * 获取键盘键值
	 * @param event[event]    事件监听回调函数中的event对象
	 * @return [Number]       
	 **/
	function getPageX(event){}

	eg:
		util.event.addHandler(window,'scroll',function(e){
			e = util.event.getEvent(e);
			if(getPageX(e) == 500){
				//code...
		});
		
```

#### getPageY(event)
```js
	/**
	 * 获取键盘键值
	 * @param event[event]    事件监听回调函数中的event对象
	 * @return [Number]       
	 **/
	function getPageY(event){}

	eg:
		util.event.addHandler(window,'scroll',function(e){
			e = util.event.getEvent(e);
			if(getPageY(e) == 1000){
				//code...
		});
		
```
+ IE8及以前的浏览器的event不支持pageX属性，此方法为了箭筒IE8-。
+ pageX/Y与clientX/Y的区别就是，pageX/Y包含滚轮卷进去的部分。

### dom
该对象中包括了对于JS DOM对象操作的相关APIs，兼容DOM0级，DOM1级，DOM3级事件规范。

#### getFirstChild(node)
```js
	/**
     * 获取DOM节点第一个子节点
     * @param  node[Object]      节点对象
     * @return [Object]          第一个子节点
     */
	function getFirstChild(node){}

	eg:
		var node = document.querySelector('body');
		util.dom.getFirstChild(node);
```

#### getLastChild(node)
```js
	/**
     * 获取DOM节点最后一个子节点
     * @param  node[Object]      节点对象
     * @return [Object]          最后一个子节点
     */
	function getLastChild(node){}

	eg:
		var node = document.querySelector('body');
		util.dom.getLastChild();
```

#### getNextSibling(node)
```js
	/**
     * 获取DOM节点下一个兄弟节点
     * @param  node[Object]      节点对象
     * @return [Object]          下一个兄弟节点
     */
	function getNextSibling(node){}

	eg:
		var node = document.querySelector('.container');
		util.dom.getNextSibling(node);
```

#### getPreviousSibling(node)
```js
	/**
     * 获取DOM节点下一个兄弟节点
     * @param  node[Object]      节点对象
     * @return [Object]          下一个兄弟节点
     */
	function getPreviousSibling(node){}

	eg:
		var node = document.querySelector('.container');
		util.dom.getPreviousSibling(node);
```

#### getChildNodes(node)
```js
	/**
     * 获取DOM节点获取所有子节点
     * @param  node[Object]      节点对象
     * @return [Array]           返回子节点数组
     */
	function getChildNodes(node){}

	eg:
		var node = document.querySelector('.container');
		util.dom.getChildNodes(node);
```

#### <del>getChildNodes2(node)</del>
```js
	/**
     * 实现去除childNodes的空白节点的实现
     * @param  node[Object]      节点对象
     * @return [Array]           返回子节点数组
     */
	function getChildNodes2(node){}

	eg:
		var node = document.querySelector('.container');
		util.dom.getChildNodes2(node);
```

#### nodeListToArray(node)
```js
	/**
     * NodeList类数组转为Array
     * @param  nodeList[NodeList]      类数组
     * @return [Array]             返回数组
     */
	function nodeListToArray(nodeList){}

	eg:
		var nodeList = document.querySelectorAll('div');
		util.dom.nodeListToArray(nodeList);
```

#### getStyle(node,attr)
```js
	/**
     * 获取css样式
     * @param  node[Object]        节点对象
     * @param  attr[String]        css属性名
     * @return                     css属性值
     */
	function getStyle(node,attr){}

	eg:
		var node = document.querySelector('div');
		util.dom.getStyle(node,'background-color');
```

### bom
该对象中包括了对于JS BOM对象兼容操作的相关APIs

#### getScreenLeft()
```js
	/**
     * 获取浏览器窗口距离屏幕左边缘的距离
     * @return [Number]          
     */
	function getScreenLeft(){}

	eg:
		util.bom.getScreenLeft();
```

#### getScreenTop()
```js
	/**
     * 获取浏览器窗口距离屏幕上边缘的距离
     * @return [Number]          
     */
	function getScreenTop(){}

	eg:
		util.bom.getScreenTop();
```

#### getPageWidth()
```js
	/**
     * 获取浏览器窗口宽度
     * @return [Number]          
     */
	function getPageWidth(){}

	eg:
		util.bom.getPageWidth();
```

#### getPageHeight()
```js
	/**
     * 获取浏览器窗口高度
     * @return [Number]          
     */
	function getPageHeight(){}

	eg:
		util.bom.getPageHeight();
```

#### getScrollTop()
```js
	/**
     * 获取滚动条距离页面顶端的距离
     * @return [Number]          
     */
	function getScrollTop(){}

	eg:
		util.bom.getScrollTop();
```

#### getScrollLeft()
```js
	/**
     * 获取滚动条距离页面左边的距离
     * @return [Number]          
     */
	function getScrollLeft(){}

	eg:
		util.bom.getScrollLeft();
```

### cookie
该对象中包括了对于本地cookie操作的相关APIs

#### addCookie(name,value,days)
```js
	/**
     * 插入一条数据到cookie
     * @param name[String]    待插入cookie中的数据key值
     * @param value[All]      待插入cookie中的数据value值
     * @param days[Number]    待插入cookie中的数据保存时间（天）
     * @return [Boolean]          
     */
	function addCookie(name,value,days){}

	eg:
		util.cookie.addCookie('myCookie',data,3);
```

#### removeCookie(name)
```js
	/**
     * 从cookie中删除一条数据
     * @param name[String]    待删除cookie中的数据key值
     * @return [Boolean]          
     */
	function removeCookie(name){}

	eg:
		util.cookie.removeCookie('myCookie');
```

#### getCookie(name)
```js
	/**
     * 从cookie中获取一条cookie
     * @param name[String]    待获取cookie中的数据key值
     * @return         
     */
	function getCookie(name){}

	eg:
		util.cookie.getCookie('myCookie');
```

### random
该对象中包括了一个产生随机数的方法

#### getRandom(num1,num2)
```js
	/**
     * 产生一个包括边界的随机数
     * @param num1[Number]    
     * @param num2[Number]    
     * @return [Number]          
     */
	function getRandom(num1,num2){}

	eg:
		util.random.getRandom(1,20);
```

### ajax
该对象中包括ajax相关的APIs

#### getXHR()
```js
	/**
     * 获取XMLHttpRequest对象 
     * @return [Object]       XMLHttpRequest对象    
     */
	function getXHR(){}

	eg:
		util.ajax.getXHR();
```

#### getAjaxJsonData(data)
```js
	/**
     * 对ajax返回的JSON字符串数据转为JSON格式的JS对象
     * @return [Object]       XMLHttpRequest对象    
     */
	function getAjaxJsonData(data){}

	eg:
		util.ajax.getAjaxJsonData(data);
```
