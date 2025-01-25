// Tests adapted from https://github.com/janogonzalez/priorityqueuejs/blob/master/test/priorityqueue.js

import PQ, {LOW_FIRST, HIGH_FIRST} from '../index.js';

describe('isEmpty', () => {
  it('returns true when the queue is empty', () => {
    const pq = new PQ({sort: LOW_FIRST});
    expect(pq.isEmpty()).toBe(true);
  });
  it('returns false when the queue is not empty', () => {
    const pq = new PQ({sort: LOW_FIRST});
    pq.insert('a', 1);
    expect(pq.isEmpty()).toBe(false);
  });
});

describe('peek', () => {
  it('returns undefined when the queue is empty', () => {
    const pq = new PQ({sort: LOW_FIRST});
    expect(pq.peek()).toBeUndefined();
  });
  it('(LOW_FIRST) returns the element paired with the lowest number', () => {
    const pq = new PQ({sort: LOW_FIRST});
    pq.insert('c', 1);
    pq.insert('b', 5);
    pq.insert('a', 10);
    pq.insert('d', 3);
    pq.insert('e', 2);
    expect(pq.peek()).toBe('c');
  });
});

describe('pop', () => {
  it('(LOW_FIRST) dequeues and returns the element that was paired with the lowest number', () => {
    const pq = new PQ({sort: LOW_FIRST});
    pq.insert('c', 1);
    pq.insert('b', 5);
    pq.insert('a', 10);
    pq.insert('d', 3);
    pq.insert('e', 2);
    expect(pq.pop()).toBe('c');
    expect(pq.pop()).toBe('e');
    expect(pq.pop()).toBe('d');
    expect(pq.pop()).toBe('b');
    expect(pq.pop()).toBe('a');
    expect(pq.isEmpty()).toBe(true);
  });
  it('(HIGH_FIRST) dequeues and returns the element that was paired with the highest number', () => {
    const pq = new PQ({sort: HIGH_FIRST});
    pq.insert('c', 1);
    pq.insert('b', 5);
    pq.insert('a', 10);
    pq.insert('d', 3);
    pq.insert('e', 2);
    expect(pq.pop()).toBe('a');
    expect(pq.pop()).toBe('b');
    expect(pq.pop()).toBe('d');
    expect(pq.pop()).toBe('e');
    expect(pq.pop()).toBe('c');
    expect(pq.isEmpty()).toBe(true);
  });
  it('works with one element', () => {
    const pq = new PQ({sort: LOW_FIRST});
    pq.insert('a', 1);
    expect(pq.pop()).toBe('a');
  });
});

describe('insert', () => {
  it('adds an item', () => {
    const pq = new PQ({sort: LOW_FIRST});
    pq.insert('a', 1);
    const actual = pq.peek();
    expect(actual).toBe('a');
  });
  it('(LOW_FIRST) adds an element at an appropriate position', () => {
    const pq = new PQ({sort: LOW_FIRST});
    pq.insert('a', 10);
    pq.insert('b', 1);
    pq.insert('c', 5);
    const actual = pq.peek();
    expect(actual).toBe('b');
  });
  it('(HIGH_FIRST) adds an element at an appropriate position', () => {
    const pq = new PQ({sort: HIGH_FIRST});
    pq.insert('a', 10);
    pq.insert('b', 1);
    pq.insert('c', 5);
    const actual = pq.peek();
    expect(actual).toBe('a');
  });
  it('(LOW_FIRST) with the same priority, more recent inserts pop off earlier', () => {
    const pq = new PQ({sort: LOW_FIRST});
    const a = {name: 'a', val: 1};
    const b = {name: 'b', val: 1};
    const c = {name: 'c', val: 1};
    pq.insert(a, 1);
    pq.insert(b, 1);
    pq.insert(c, 1);
    expect(pq.pop()).toBe(c);
    expect(pq.pop()).toBe(b);
    expect(pq.pop()).toBe(a);
  });
  it('(HIGH_FIRST) with the same priority, more recent inserts pop off earlier', () => {
    const pq = new PQ({sort: HIGH_FIRST});
    const a = {name: 'a', val: 1};
    const b = {name: 'b', val: 1};
    const c = {name: 'c', val: 1};
    pq.insert(a, 1);
    pq.insert(b, 1);
    pq.insert(c, 1);
    expect(pq.pop()).toBe(c);
    expect(pq.pop()).toBe(b);
    expect(pq.pop()).toBe(a);
  });
});
