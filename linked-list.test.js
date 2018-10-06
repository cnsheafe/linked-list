const LinkedList = require('./linked-list')

describe('LinkedList', () => {
  describe('#push', () => {
    it('should append a new node', () => {
      const value = 10
      const list = new LinkedList(5)
      list.push(value)

      expect(list.head.value).toBe(5)
      expect(list.head.next).toEqual({ value, next: null })
    })

    it('should append a series of nodes', () => {
      const list = new LinkedList(5)
      list.push(10)
      list.push(15)
      list.push(200)
      list.push(37.5)

      expect(list.head.next.value).toBe(10)
      expect(list.head.next.next.value).toBe(15)
      expect(list.head.next.next.next.value).toBe(200)
      expect(list.head.next.next.next.next.value).toBe(37.5)
    })

    it('should push a new node on an empty list', () => {
      const list = new LinkedList(5)
      list.head = null

      list.push(25)
      expect(list.head).toEqual({ value: 25, next: null })
    })
  })

  describe('#pop', () => {
    it('should return the last node.value at the end of the list and remove it in the sequence', () => {
      const list = new LinkedList(5)
      list.head.next = {
        value: 10,
        next: null,
      }

      const value = list.pop()
      expect(value).toBe(10)
      expect(list.head.next).toBe(null)
    })

    it('should pop off the head', () => {
      const list = new LinkedList(5)
      const value = list.pop()
      expect(value).toBe(5)
      expect(list.head).toBe(null)
    })

    it('should return null if list is empty', () => {
      const list = new LinkedList(5)
      list.pop()
      const value = list.pop()

      expect(value).toBe(null)
    })
  })

  describe('#length', () => {
    it('should return the length of the list', () => {
      const list = new LinkedList(5)
      list.push(10)
      list.push(15)

      expect(list.length()).toBe(3)
    })
  })

  describe('#reverse', () => {
    it('should reverse the list', () => {
      const list = new LinkedList(5)
      list.push(10)
      list.push(15)
      list.push(20)
      list.push(25)
      list.reverse()
    })
  })
})
