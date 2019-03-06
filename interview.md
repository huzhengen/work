# interview

1、你是如何理解HTML语义化的？你用过哪些HTML5标签？

header main footer article

canvas video audio

比如，段落要写成p标签，标题要写成h1-h6

1、meta viewport是做什么用的？怎么写？

1、Canvas有哪些API？Canvas是如何进行绘制的？比如，如何获取到Canvas的上下文？getContext的参数是什么？Canvas和SVG的区别了解吗？

fillStyle

fillRect 填充矩形

strokeRect 矩形边框

clearRect 清除矩形

beginPath、closePath、stroke、fill、moveTo、lineTo

getContext() 方法来访问绘画上下文

`var ctx = canvas.getContext('2d');`

2、用video的时候会加什么属性？

src autoplay poster track

2、请问什么是H5

2、两种盒模型分别说一下？区别？哪个好？为什么border-box比content-box好呢？

border-box  content-box   那一种写起来更方便

2、如何垂直居中？

jscode.me search

css回溯机制

2、flex怎么用？常用的属性有哪些？

2、BFC是什么？

块级格式化上下文   举例

一个div使用overflow：hidden，那么里面的浮动元素就会被他包裹起来。

2、css选择器优先级？

越具体优先级越高、写在后面的覆盖写在前面的、！important最高但要少用

2、清除浮动说一下？

代码 .clearfix{content:'';display:block/table;clear:both}

2、一个用户完整的注册流程是怎样的？如何知道用户填写的email是正确格式？为什么前端做了验证，后端还要做？

用MD5加密是正确的吗？不是，因为现在大家都知道MD5加密是不安全的。可以用bcrypt加密、SHA256加密。

3、你知道png和jpg格式的区别吗？

png是无损的，文件大

jpg牺牲画质，文件小

4、留言板功能是如何防止我输入脚本进行攻击的？（脚本比如<script>alert(1)</script>）。为什么单引号过滤，双引号不过滤？

过滤一些特殊符号，防止XSS攻击。

5、说一下你对MVC的理解？向服务器请求放在MVC的哪个里面？什么是mvvm？Observer设计模式是啥？干什么用的？

6、LeanCloud是什么？

7、Vue 的双向绑定是如何实现的？（Object.defineProperty）v-model相当于哪两个指令？（v-bind:value，监听一个input事件）

8、Vue 的父子组件是如何通信的？儿子如何向父亲传数据？

8、用了vue的哪些周边、全家桶？Vue Router vuex，vue响应式原理，你知道vue3会怎么更新这个api吗（object.defineProperty）？

8、axios拦截器了解吗？

https://www.kancloud.cn/yunye/axios/234845

https://createwj.github.io/2018/05/21/106.axioslan%E6%8B%A6%E6%88%AA%E5%99%A8/

8、Vue computed、watch、methods，这三个有什么区别？watch、computed有缓存吗？watch和computed还有其他实用场景的区别吗？

8、Vue.$set知道吗，用过吗？这个api是干嘛的？

8、VueRouter路由守卫了解吗？

8、Vuex用的比较多的api是什么？mutation和action的区别？

9、计数排序、选择排序、冒泡排序

9、HTTP协议缓存有哪些？expire、cache-control，怎么用？如果一个文件被cache-control缓存了1年，这个css的状态码，请求状态的什么样的？通过304做到类似的效果知道吗？（ETag，LastModified）

9、有尝试封装axios吗？封装axios。usermodel.create、usermodel.delete，怎么封装？

9、小程序的文件格式？最主要的一个文件app.json。小程序封装接口？小程序相对于app、网页有什么优劣？请求封装、文件大小限制？

9、数据可视化常用的最入门的库有哪些吗？听说过echarts、d3.js吗？

9、什么是sjonp，什么是cors，什么是跨域？JSONP是如何实现的？JSONP为什么不支持POST？cors说下？

浏览器动态创建script标签，src指向服务器地址，同时传一个查询参数?callback=（function+随机数），服务器根据查询参数，构造一个响应，浏览器收到响应，就会执行对应的函数，从而拿到数据。

因为JSONP是通过动态创建script实现的，而动态创建script只能是GET，不能是POST。

jQuery的jsonp，jsonp和ajax没关系，为什么jQuery这样弄jsonp

```
$.ajax({
	url: 'http://jack.com:8002/pay',
	dataType: 'jsonp',
	success: function(response){
		if(response === 'success'){
			console.log(1)
		}
	}
})
```

10、闭包是什么？作用有哪些？用过立即执行函数吗？是什么？ES6的语法还用过哪些？分别怎么用？class、promise

10、call apply bind 区别

10、Promise是做什么的？一般怎么用？手写一个promise？会自己写promise吗？setTimeout封装成一个函数，用promise。promise的api，了解过吗，promise.race，promise.all，什么时候成功，什么时候失败？

10、ES6里的getter、setter了解吗？

11、手写函数防抖和函数节流？

```
防抖
带着一起做
let timerId = null
button.onclick = function(){
	if(timerId){
		window.clearTimeout(timerId)
	}
	timerId = setTimeout(()=>{
		fn()
		timerId = null
	}, 5000)
}
function fn(){}
```

```
节流：
let cd = false
button.onclick = function(){
	if(!cd){
		fn()
		cd = true
		let timerId = setTimeout(()=>{
			cd = false
		}, 3000)
	}
}
function fn(){}
```

11、手写ajax？ajax用原生js 怎么写？

```
let request = new XMLHttpRequest()
// open()函数的三个参数：请求方式、请求地址、是否异步请求(同步请求的情况极少，至今还没用到过)；
request.open('get', '/xxx') // 配置request
request.onreadystatechange = ()=>{
if(request.readyState === 4){ 
  if(request.status >= 200 && request.status < 300){
    console.log('说明请求成功')
  }else if(request.status >= 400){
    console.log('说明请求失败') 
  }
}
}
request.send()
```

11、async/await怎么用？如何捕获异常？遇到reject怎么办？

11、如何实现深拷贝

递归、判断类型、检查循环引用（环）、不可能拷贝__proto__

12、如何用正则实现trim()

```
function trim(str){
	return string.replace(/^\s+|\s+$/g, '')
}
```

11、不用class如何实现继承？用class如何实现？用原型链写继承，怎么写？class怎么写？class的继承怎么写？

```
function Animal(){
	this.a = 1
}
Animal.prototype.move = function(){}
function Dog(){
	Animal.apply(this, arguments)
	this.d = 2
}
let f = function(){}
f.prototype = Animal.prototype
Dog.prototype = new f()
Dog.prototype.constructor = Dog
Dog.say = function(){}
```

```
class Dog extends Animal{
	constructor(){
		super()
	}
}
```

11、如何实现数组去重？

使用hash

`[...new Set(array)]`

WeakMap（支持所有类型的去重）

11、响应式实现方式？

12、如果让你实现一个jQuery的addClass的api，你怎么实现？

13、模块化了解过吗？

14、webpack了解过吗？

15、滚动事件，可以阻止他的默认事件吗？（滚轮事件？）

16、前端工程化，你用的什么前端工程化的工具？webpack的loader是什么？干什么用的？

webpack允许我们使用loader来处理文件

webpack常用的loader

样式：style-loader、css-loader、less-loader、sass-loader等

文件：raw-loader、file-loader 、url-loader等

编译：babel-loader、coffee-loader 、ts-loader等

校验测试：mocha-loader、jshint-loader 、eslint-loader等

17、less和scss的语法你了解吗？在scss里面你如何声明一个mixin，怎么使用？

```
@mixin box($width:100px, $height:100px) {
    width: $width;
    height: $height;
    box-shadow: 0 0 5px #000;
    margin: 10px;
}
@include box(300px,300px);

%box {
    box-shadow: 0 0 5px #000;
    margin: 10px;
}
@extend %box;
```

18、用原型写过class吗？prototype里面的方法和this里面的方法有什么区别？

21、什么是函数式编程？

21、Vue组件的生命周期的哪些钩子函数

22、Vue组件之间消息传递是怎样传的？（父子、兄弟）。给弟弟传一个消息怎么传？在接受子组件的时候，还额外的想再写一个参数，怎么传？不相关的组件之间怎么传递？

23、Vue生成的实例，他的原型在哪里？

25、HTML5里的section和article有什么区别？

26、css的flex布局，如何上下居中，左右居中？

27、响应式页面，rem和em 的区别是什么？

28、原生js如何获取一个节点的兄弟节点，不包括他自己？

29、什么是事件委托？

30、Eventloop说一下？