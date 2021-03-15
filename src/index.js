// @flow

type Order = "LOW_FIRST" | "HIGH_FIRST";

function compareNumbers(n: number, m: number): 1 | 0 | -1 {
  if (n === m) {
    return 0;
  }
  return n < m ? 1 : -1;
}

export const LOW_FIRST: Order = "LOW_FIRST";
export const HIGH_FIRST: Order = "HIGH_FIRST";

class PQ<Item> {
  constructor(opts: { sort: Order }) {
    this.opts = opts;
    this.items = [];
  }
  opts: { sort: Order };
  items: Array<[Item, number]>;

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  insert(newItem: Item, priority: number): number {
    const newLength = this.items.push([newItem, priority]);
    let index = newLength - 1;
    while (index > 0) {
      const prevIndex = index - 1;
      const [item, ip]: [Item, number] = this.items[index];
      const [prevItem, pip]: [Item, number] = this.items[prevIndex];
      if (this.opts.sort === LOW_FIRST && compareNumbers(ip, pip) < 0) {
        break;
      }
      if (this.opts.sort === HIGH_FIRST && compareNumbers(pip, ip) < 0) {
        break;
      }
      this.items[index] = [prevItem, pip];
      this.items[prevIndex] = [item, ip];
      index = prevIndex;
    }
    return this.items.length;
  }

  pop(): ?Item {
    return this.items.shift()?.[0];
  }

  peek(): ?Item {
    return this.items[0]?.[0];
  }
}

export default PQ;
