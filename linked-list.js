module.exports = class LinkedList {
  constructor(value) {
    if (value !== null) {
      this.head = {
        value,
        next: null,
      }
    }
  }

  push(value) {
    let node = this.head

    if (node === null) {
      this.head = { value, next: null }
      return
    }

    while (node.next !== null) {
      node = node.next
    }

    node.next = { value, next: null }
  }

  pop() {
    let node = this.head

    if (node === null) return null

    if (node.next === null) {
      this.head = null
      return node.value
    }

    while (node.next.next !== null) {
      node = node.next
    }

    const { value } = node.next

    node.next = null

    return value
  }

  length() {
    let node = this.head
    let len = 0

    if (node === null) return 0
    len += 1

    while (node.next !== null) {
      node = node.next
      len += 1
    }

    return len
  }

  reverse() {
    let pointer = this.head
    let prev = null
    let current = null

    while (pointer !== null) {
      // increment pointer
      current = pointer
      // Reassigns value to new pointer
      pointer = pointer.next

      // make prev node next
      // This element references the old pointer
      current.next = prev
      // prev recieves current reference
      prev = current
      // head  receives current reference
      this.head = current
    }
  }
}
