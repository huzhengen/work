a = new Array()

a.__proto__ === Array.prototype

Object.prototype

能产生对象的东西，即为类

ES5

```js
function Human(name){
	this.name = name	
}
Human.prototype.run = function(){
	console.log(this.name + ' is running')
	return undefined
}
function Man(name){
	Human.call(this, name)
	this.gender = 'man'
}

// IE不支持
// Man.prototype.__proto__ = Human.prototype
var f = function(){}
f.prototype = Human.prototype
Man.prototype = new f()

Man.prototype.fight = function(){
	console.log('fight')
}
```

prototype属性只有一个功能，存放共有属性的地址

ES6
```js
class Human{
	constructor(name){
		this.name = name
	}
	run(){
		console.log(this.name + ' is running')
		return undefined
	}
}
class Man extends Human{
	constructor(name){
		super(name)
		this.gender = 'man'
	}
	fight(){
		console.log('fight')
	}
}
```

mixin 混入 // Object.assign()

```js
let mixin = function(a, b){
	for(let key in b){
		a[key] = b[key]
	}
}
```

curry 柯里化

一个函数再返回一个函数，基本就是柯里化

```js
var cache = []
var add = function(){
	if(n === undefined){
		return cache.reduce((p, n)=>p+n, 0)
	}else{
		cache.push(n)
		return add
	}
}
add(1)(2)(3)(4)()
```

HOC 高阶函数