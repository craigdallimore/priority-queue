# Priority Queue

The library includes flowtypes

```
npm install @decoy9697/prioroty-queue
```

```js
import PQ from "@decoy9697/priority-queue";

const pq = new PQ();

pq.insert("🌵", 5);
pq.insert("🌿", 10);
pq.insert("🌴", 3);

// .peek() gives the item with the highest priority, but does not dequeue it
pq.peek(); // 🌿
pq.peek(); // 🌿

// .pop() gives the item with the highest priority, dequeuing it
pq.pop(); // 🌿
pq.pop(); // 🌵
pq.pop(); // 🌴
pq.pop(); // undefined

// .isEmpty() returns a boolean, true given it is empty
pq.isEmpty(); // true
```
