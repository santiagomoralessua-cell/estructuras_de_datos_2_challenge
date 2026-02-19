// ===== NODE CLASS (as shown in class slides) =====
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// ===== LINKED LIST CLASS (as shown in class slides) =====
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // append: Adds a new node at the end of the list
  append(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }

    this.tail = newNode
    this.length++
  }

  // peek: Returns a node by its value
  peek(value, current = this.head) {
    while (current) {
      if (current.value === value) {
        return current
      }
      current = current.next
    }
    return null
  }

  // size: Returns the number of elements
  size() {
    return this.length
  }

  // remove: Removes a node and joins previous and next
  remove(value, current = this.head) {
    if (!this.head) return null

    if (this.head.value === value) {
      this.head = this.head.next
      if (!this.head) {
        this.tail = null
      }
      this.length--
      return
    }

    let prev = this.head
    while (prev.next && prev.next.value !== value) {
      prev = prev.next
    }

    if (prev.next) {
      prev.next = prev.next.next
      if (!prev.next) this.tail = prev
      this.length--
    }
  }

  // print: Returns all values as a string
  print() {
    let current = this.head
    let result = ''
    while (current) {
      result += current.value + ' -> '
      current = current.next
    }
    return result + 'null'
  }

  // toArray: Helper to show all nodes in React
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

export default LinkedList
