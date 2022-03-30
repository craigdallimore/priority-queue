import { Suite, type Event } from "benchmark";
import PQ, { LOW_FIRST, HIGH_FIRST } from "./src/index";

let pqlf: PQ<string>;
let pqhf: PQ<string>;

function onComplete(this: Suite) {
  console.log("Fastest is " + this.filter("fastest").map("name"));
}

function onCycle(event: Event) {
  console.log(String(event.target));
}

function onStart() {
  pqlf = new PQ({ sort: LOW_FIRST });
  pqhf = new PQ({ sort: HIGH_FIRST });
}

new Suite()
  .add("lf#isEmpty", function () {
    pqlf.isEmpty();
  })
  .add("hf#isEmpty", function () {
    pqhf.isEmpty();
  })

  .on("start", onStart)
  .on("cycle", onCycle)
  .on("complete", onComplete)
  .run();

new Suite()
  .add("lf#insert p1", function () {
    pqlf.insert("a", 1);
  })

  .add("hf#insert p1", function () {
    pqhf.insert("a", 1);
  })

  .on("start", onStart)
  .on("cycle", onCycle)
  .on("complete", onComplete)
  .run();

new Suite()
  .add("lf#insert length", function () {
    pqlf.insert("a", pqlf.items.length - 1);
  })

  // Heap OOM
  //.add("hf#insert length", function () {
  //  pqhf.insert("a", pqhf.items.length - 1);
  //})

  .on("start", onStart)
  .on("cycle", onCycle)
  .on("complete", onComplete)
  .run();

new Suite()
  .add("lf#insert 5 then pop", function () {
    pqlf.insert("a", 1);
    pqlf.insert("a", 2);
    pqlf.insert("a", 3);
    pqlf.insert("a", 4);
    pqlf.insert("a", 5);
    pqlf.pop();
    pqlf.pop();
    pqlf.pop();
    pqlf.pop();
    pqlf.pop();
  })

  .add("hf#insert 5 then pop", function () {
    pqhf.insert("a", 1);
    pqhf.insert("a", 2);
    pqhf.insert("a", 3);
    pqhf.insert("a", 4);
    pqhf.insert("a", 5);
    pqhf.pop();
    pqhf.pop();
    pqhf.pop();
    pqhf.pop();
    pqhf.pop();
  })

  .on("start", onStart)
  .on("cycle", onCycle)
  .on("complete", onComplete)
  .run();
