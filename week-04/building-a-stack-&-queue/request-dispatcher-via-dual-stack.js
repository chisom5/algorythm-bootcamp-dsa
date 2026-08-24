class Solution {
  dispatchQueue(commands, operationArguments) {
    let target = null;
    const result = [];
    for (let index = 0; index < commands.length; index++) {
      const command = commands[index];
      const callArguments = operationArguments[index];
      if (command === 'DispatchQueue') {
        target = new DispatchQueue(...callArguments);
        result.push(null);
      } else {
        result.push(target[command](...callArguments));
      }
    }
    return result;
  }
}

// implementation here below.
class DispatchQueue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }

  enqueue(x) {
    this.inbox.push(x);
  }

  _transfer() {
    if (this.outbox.length === 0) {

      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
  }
  dequeue() {
    this._transfer();
    return this.outbox.pop()
  }

  front() {
    this._transfer();
    return this.outbox[this.outbox.length - 1]
  }

  isEmpty() {
    return this.outbox.length === 0 && this.inbox.length === 0;
  }
}

