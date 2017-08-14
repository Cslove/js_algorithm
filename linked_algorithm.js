/*
	创建链表
*/

function LinkedList() {
	var Node = function(element) {
		this.element = element;
		this.next = null;
	};

	var length = 0;
	var head = null;

	// append():向尾部添加一个新的项
	this.append = function(element) {
		var node = new Node(element),
			current;

		if(head === null){
			head = node;
		} else {
			current = head;

			// 从头部循环指针直到末尾项
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		length++;        // 更新列表长度

	};

	
}