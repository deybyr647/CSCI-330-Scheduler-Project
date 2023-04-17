// Write boilerplate for a Queue class which uses generic types, using a Linked List as the underlying data structure.
// The Queue class should have the following methods:
// - enqueue
// - dequeue
// - peek
// - isEmpty
// - size
// - print
// - clear
// - toArray
// - fromArray
// - toString

class Queue<T> {
  public data: T[] = [];

  public enqueue(item: T): void {
    this.data.push(item);
  }

  public dequeue(): T {
    return this.data.shift();
  }

  public peek(): T {
    return this.data[0];
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }

  public size(): number {
    return this.data.length;
  }

  public print(): void {
    console.log(this.data);
  }

  public clear(): void {
    this.data = [];
  }

  public toArray(): T[] {
    return this.data;
  }

  public fromArray(arr: any[]): void {
    this.data = arr;
  }

  public toString(): string {
    return this.data.toString();
  }
}

export default Queue;
