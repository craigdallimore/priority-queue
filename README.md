# Priority Queue

The library includes flowtypes

```
npm install @decoy9697/priority-queue
```

```js
import PQ from "@decoy9697/priority-queue";

const pq = new PQ();

// The number influences priority
// - lower takes precedence
// - with equal numbers, recency of insert takes precendence
pq.insert("🌵", 5);
pq.insert("🌿", 10);
pq.insert("🌴", 3);

// .peek() gives the item with the lowest number, but does not dequeue it
pq.peek(); // 🌴
pq.peek(); // 🌴

// .pop() gives the item with the lowest number, dequeuing it
pq.pop(); // 🌴
pq.pop(); // 🌵
pq.pop(); // 🌿
pq.pop(); // undefined

// .isEmpty() returns a boolean, true given it is empty
pq.isEmpty(); // true
```
