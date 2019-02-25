a = new Array()

a.__proto__ === Array.prototype

Object.prototype

能产生对象的东西，即为类

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
Man.prototype.__proto__ = Human.prototype
Man.prototype.fight = function(){
	console.log('fight')
}
```