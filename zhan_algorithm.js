/*
  栈的创建
*/
function Stack() {
	var items = [];

	// push():添加一个（或几个）新元素到栈頂
	this.push = function(element) {
		items.push(element);
	};

	// pop():移除栈頂的元素
	this.pop = function() {
		return items.pop();
	}

	// peek():返回栈頂的元素，不对栈做任何修改
	this.peek = function() {
		return items[items.length-1];
	};

	// isEmpty():判断栈里是否为空
	this.isEmpty = function() {
		return items.length == 0;
	}

	// clear():移除栈里所有元素
	this.clear = function() {
		items = [];
	};

	// size():返回栈里的元素个数
	this.size = function() {
		return items.length;
	};

	// print():打印输出栈
	this.print = function() {
		console.log(items.toString())
	}

};

var stack = new Stack();
stack.push(8);
stack.push(5);
stack.push(1);
stack.push(6);
stack.print();