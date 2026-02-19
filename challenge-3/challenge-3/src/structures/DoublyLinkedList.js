// ===== NODE CLASS for Doubly Linked List =====
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null  // extra pointer for doubly linked list
  }
}

// ===== DOUBLY LINKED LIST CLASS =====
class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // append: Adds node at end, linking prev pointer too
  append(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }

    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode

    this.length++
  }

  // peek: Returns a node by value
  peek(value, current = this.head) {
    while (current) {
      if (current.value === value) {
        return current
      }
      current = current.next
    }
    return null
  }

  // size: Returns number of elements
  size() {
    return this.length
  }

  // remove: Removes node and reconnects prev/next pointers
  remove(value) {
    if (!this.head) return null

    let current = this.head

    while (current) {
      if (current.value === value) {

        if (current === this.head) {
          this.head = current.next
          if (this.head) this.head.prev = null
        }

        if (current === this.tail) {
          this.tail = current.prev
          if (this.tail) this.tail.next = null
        }

        if (current.prev) current.prev.next = current.next
        if (current.next) current.next.prev = current.prev

        this.length--
        return current
      }
      current = current.next
    }
    return null
  }

  // print: Returns all values as string
  print() {
    let current = this.head
    let result = ''
    while (current) {
      result += current.value + ' <-> '
      current = current.next
    }
    return result + 'null'
  }

  // toArray: Helper to display in React
  toArray() {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }
}

export default DoublyLinkedList
