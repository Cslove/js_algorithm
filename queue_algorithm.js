/*
	创建队列
*/
class Queue {
	// 构造方法
	constructor() {
		this.items = [];
	}

	// enqueue()：向队列末尾添加项
	enqueue(element) {
		this.items.push(element);
	}

	// dequeue()：移除队列的第一项，并返回被移除的元素
	dequeue() {
		return this.items.shift();
	}

	// front()：返回队列中的第一个元素
	front() {
		return this.items[0];
	}

	// isEmpty()：判断队列是否为空
	isEmpty() {
		return this.items.length === 0;
	}

	// size()：返回队列的长度
	size() {
		return this.items.length;
	}

	// print():打印输出队列
	print() {
		console.log(this.items.toString());
	}
}

var queue = new Queue();
queue.enqueue('john');
queue.enqueue('jack');
queue.enqueue('mary');
console.log(queue.size());
console.log(queue.isEmpty());
queue.print();
