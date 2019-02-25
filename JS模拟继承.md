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