class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();
nameQueue.add('luis');
nameQueue.add('5');

const numberQueue = new Queue<number>();
numberQueue.add(10);

// generics are placeholders for data types

function someFunction<T>(paramOne: T) : T {
  console.log('paramOne', paramOne);
  return paramOne;
}

someFunction<string>('John');