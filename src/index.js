// @flow

type Compare<T> = (T, T) => 1 | 0 | -1;

class PQ<Item> {
  constructor() {
    this.items = [];
  }
  items: Array<Item>;

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  insertWithPriority(newItem: Item, compare: Compare<Item>): number {
    const newLength = this.items.push(newItem);
    let index = newLength - 1;
    while (index > 0) {
      const prevIndex = index - 1;
      const item: Item = this.items[index];
      const prevItem: Item = this.items[prevIndex];
      if (compare(item, prevItem) <= 0) {
        break;
      }
      this.items[index] = prevItem;
      this.items[prevIndex] = item;
      index = prevIndex;
    }
    return this.items.length;
  }

  pop(): ?Item {
    return this.items.shift();
  }

  peek(): ?Item {
    return this.items[0];
  }
}

export default PQ;
