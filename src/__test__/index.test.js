// @flow
// Tests adapted from https://github.com/janogonzalez/priorityqueuejs/blob/master/test/priorityqueue.js

import PQ from "../index";

describe("isEmpty", () => {
  it("returns true when the queue is empty", () => {
    const pq = new PQ();
    expect(pq.isEmpty()).toBe(true);
  });
  it("returns false when the queue is not empty", () => {
    const pq = new PQ();
    pq.insert("a", 1);
    expect(pq.isEmpty()).toBe(false);
  });
});

describe("peek", () => {
  it("returns undefined when the queue is empty", () => {
    const pq = new PQ();
    expect(pq.peek()).toBeUndefined();
  });
  it("returns the element paired with the lowest number", () => {
    const pq = new PQ();
    pq.insert("c", 1);
    pq.insert("b", 5);
    pq.insert("a", 10);
    pq.insert("d", 3);
    pq.insert("e", 2);
    expect(pq.peek()).toBe("c");
  });
});

describe("pop", () => {
  it("dequeues and returns the element that was paired with the lowest number", () => {
    const pq = new PQ();
    pq.insert("c", 1);
    pq.insert("b", 5);
    pq.insert("a", 10);
    pq.insert("d", 3);
    pq.insert("e", 2);
    expect(pq.pop()).toBe("c");
    expect(pq.pop()).toBe("e");
    expect(pq.pop()).toBe("d");
    expect(pq.pop()).toBe("b");
    expect(pq.pop()).toBe("a");
    expect(pq.isEmpty()).toBe(true);
  });
  it("works with one element", () => {
    const pq = new PQ();
    pq.insert("a", 1);
    expect(pq.pop()).toBe("a");
  });
});

describe("insert", () => {
  it("adds an item", () => {
    const pq = new PQ();
    pq.insert("a", 1);
    const actual = pq.peek();
    expect(actual).toBe("a");
  });
  it("adds an element at an appropriate position", () => {
    const pq = new PQ();
    pq.insert("a", 10);
    pq.insert("b", 1);
    pq.insert("c", 5);
    const actual = pq.peek();
    expect(actual).toBe("b");
  });
  it("with the same priority, more recent inserts pop off earlier", () => {
    const pq = new PQ();
    const a = { name: "a", val: 1 };
    const b = { name: "b", val: 1 };
    const c = { name: "c", val: 1 };
    pq.insert(a, 1);
    pq.insert(b, 1);
    pq.insert(c, 1);
    expect(pq.pop()).toBe(c);
    expect(pq.pop()).toBe(b);
    expect(pq.pop()).toBe(a);
  });
});
