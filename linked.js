class linkedList {
  constructor() {
    this.value = null;
    this.next = null;
  }
  append(value) {
    let newNode = new node(value);
    if (this.value == null) {
      this.value = value;
      return 
    }
    let nextNode = this.next;
    if (this.next == null) {
      this.next = newNode;
      return
    }
    while (nextNode.next != null) {
      nextNode = nextNode.next;
    }
    nextNode.next = newNode;
  };

  prepend(value) {
    if (this.value == null) {
      this.value = value;
      return
    }
    this.next = new node(this.value,this.next);
    this.value = value;
  };
  size() {
    let count = 0;
    this.value != null ? count++ : count = 0 ;
    if (this.next == null) {
      return count;
    }
    let last = this.next; 
    while (last.next != null) {
      last = last.next
      count++
    }
    return count+1;
  };
  head() {
    return {
      value : this.value,
      next: this.next
    }
  };
  tail() {
    if (this.next == null) {
      return this.head();
    }
    let last = this.next;
    while (last.next != null) {
      last = last.next;
    }
    return last;
  };
  at(index) {
    if (index == 0) {return this.value};
    let last = this.next;
    for (let i = 0; i < index; i++) {
      last = last.next;
    }
    return last.value;
  };
  pop() {
    if (this.next == null) {
      this.value = null;
    }
    let last = this.next;
    while (last.next != null) {
      if (last.next.next == null) {
        last.next = null;
        return
      }
      last = last.next;
    }
  };
  contains(value){
    if (this.value == value) return true;
    if (this.next == null) return false;
    let last = this.next;
    while (last.next != null) {
      if (last.value == value) return true;
      last = last.next;
    }
    if (last.value == value) return true;
    return false;
  };
  find(value){
    if (this.value == value) return 0;
    if (this.next == null) return false;
    let last = this.next;
    let i = 1;
    while (last.next != null) {
      if (last.value == value) return i;
      last = last.next;
      i++;
    }
    if (last.value == value) return i;
    return false
  };
  toString(){
    let string = `(${this.value})`;
    if (this.next == null) return;
    let last = this.next;
    while (last.next != null) {
      string += `-> (${last.value})`;
      if (last.next.next == null) string += `-> (${last.next.value})`;
      last = last.next;
    }
    return string;
  };
  insertAt(value, index) {
    if (index == 0) {
      this.prepend(value)
      return
    }
    if (index == 1) {
      this.next.value =  value;
      let rightSide = this.next.next;
      this.next.next = rightSide;
      return
    }
    let last = this.next;
    let i = 1;
    while (index > i+1) {
      last = last.next;
      i++
    }
    last.next = new node(value,last.next)
  };
  removeAt(index) {
    if (index == 0) {
      this.value = this.next.value;
      this.next = this.next.next
    }
    let last = this.next;
    if (index == 1) {
      this.next = new node(this.next.next.value,this.next.next.next)
      last.next;
      return
    }
    let i = 1;
    while (index > i+2) {
      last = last.next;
      i++
    }
    last.next = new node(last.next.next.value,last.next.next.next)
  };
}

class node {
  constructor(value,next = null) {
    this.value = value;
    this.next =  next;
  }
}

let test = new linkedList;

test.append(0)
test.append(1)
test.append(2)
test.append(3)
test.append(4)
test.append(5)
test.append(6)
test.append(7)


test.removeAt(1);

