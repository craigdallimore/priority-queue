// @flow
// Tests adapted from https://github.com/janogonzalez/priorityqueuejs/blob/master/test/priorityqueue.js

import PQ from "../index";

function compareNumbers(n: number, m: number): 1 | 0 | -1 {
  if (n === m) {
    return 0;
  }
  return n > m ? 1 : -1;
}

describe("isEmpty", () => {
  it("returns true when the queue is empty", () => {
    const pq = new PQ();
    expect(pq.isEmpty()).toBe(true);
  });
  it("returns false when the queue is not empty", () => {
    const pq = new PQ();
    pq.insertWithPriority(1, compareNumbers);
    expect(pq.isEmpty()).toBe(false);
  });
});

describe("peek", () => {
  it("returns undefined when the queue is empty", () => {
    const pq = new PQ();
    expect(pq.peek()).toBeUndefined();
  });
  it("returns the highest priority element", () => {
    const pq = new PQ();
    pq.insertWithPriority(1, compareNumbers);
    pq.insertWithPriority(5, compareNumbers);
    pq.insertWithPriority(10, compareNumbers);
    pq.insertWithPriority(3, compareNumbers);
    pq.insertWithPriority(2, compareNumbers);
    expect(pq.peek()).toBe(10);
  });
});

describe("pop", () => {
  it("dequeues and returns the highest element", () => {
    const pq = new PQ();
    pq.insertWithPriority(1, compareNumbers);
    pq.insertWithPriority(5, compareNumbers);
    pq.insertWithPriority(10, compareNumbers);
    pq.insertWithPriority(3, compareNumbers);
    pq.insertWithPriority(2, compareNumbers);
    expect(pq.pop()).toBe(10);
    expect(pq.pop()).toBe(5);
    expect(pq.pop()).toBe(3);
    expect(pq.pop()).toBe(2);
    expect(pq.pop()).toBe(1);
    expect(pq.isEmpty()).toBe(true);
  });
  it("works with one element", () => {
    const pq = new PQ();
    pq.insertWithPriority(1, compareNumbers);
    expect(pq.pop()).toBe(1);
  });
});

describe("insertWithPriority", () => {
  it("adds an item", () => {
    const pq = new PQ();
    pq.insertWithPriority(1, compareNumbers);
    const actual = pq.peek();
    expect(actual).toBe(1);
  });
  it("adds an element at an appropriate position", () => {
    const pq = new PQ();
    pq.insertWithPriority(1, compareNumbers);
    pq.insertWithPriority(10, compareNumbers);
    pq.insertWithPriority(5, compareNumbers);
    const actual = pq.peek();
    expect(actual).toBe(10);
  });
  it("retains insert order when elements have matching priority", () => {
    function compareVal(x, y) {
      if (x.val === y.val) {
        return 0;
      }
      return x.val > y.val ? 1 : -1;
    }
    const pq = new PQ();
    const a = { name: "a", val: 1 };
    const b = { name: "b", val: 1 };
    const c = { name: "c", val: 1 };
    pq.insertWithPriority(a, compareVal);
    pq.insertWithPriority(b, compareVal);
    pq.insertWithPriority(c, compareVal);
    expect(pq.pop()).toBe(a);
    expect(pq.pop()).toBe(b);
    expect(pq.pop()).toBe(c);
  });
});
