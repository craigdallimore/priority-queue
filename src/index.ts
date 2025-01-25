type Order = 'LOW_FIRST' | 'HIGH_FIRST';

function compareNumbers(n: number, m: number): 1 | 0 | -1 {
  if (n === m) {
    return 0;
  }

  return n < m ? 1 : -1;
}

export const LOW_FIRST: Order = 'LOW_FIRST';
export const HIGH_FIRST: Order = 'HIGH_FIRST';

class PQ<Item> {
  opts: {sort: Order};
  items: Array<[Item, number]>;

  constructor(options: {sort: Order}) {
    this.opts = options;
    this.items = [];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  insert(newItem: Item, priority: number): number {
    const newLength = this.items.push([newItem, priority]);
    let index = newLength - 1;
    while (index > 0) {
      const previousIndex = index - 1;
      const currentPair = this.items[index];
      const previousPair = this.items[previousIndex];

      if (!currentPair || !previousPair) {
        break;
      }

      const [item, priority] = currentPair;
      const [previousItem, previousPriority] = previousPair;

      if (this.opts.sort === LOW_FIRST && compareNumbers(priority, previousPriority) < 0) {
        break;
      }

      if (this.opts.sort === HIGH_FIRST && compareNumbers(previousPriority, priority) < 0) {
        break;
      }

      this.items[index] = [previousItem, previousPriority];
      this.items[previousIndex] = [item, priority];
      index = previousIndex;
    }

    return this.items.length;
  }

  pop() {
    return this.items.shift()?.[0];
  }

  peek() {
    return this.items[0]?.[0];
  }
}

export default PQ;
