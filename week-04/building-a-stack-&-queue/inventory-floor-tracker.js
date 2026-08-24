// question drafted.
class Solution {
  inventoryFloor(commands, operationArguments) {
    let target = null;
    const result = [];
    for (let index = 0; index < commands.length; index++) {
      const command = commands[index];
      const callArguments = operationArguments[index];
      if (command === 'InventoryFloor') {
        target = new InventoryFloor(...callArguments);
        result.push(null);
      } else {
        result.push(target[command](...callArguments));
      }
    }
    return result;
  }
}

// implementation here below.
class InventoryFloor {
  constructor() {
    this.main = [];
    this.aux = [];
  }

  store(val) {
    this.main.push(val);
    if (this.aux.length === 0) {
      this.aux.push(val)
    } else {
      const auxTop = this.aux[this.aux.length - 1];
      this.aux.push(Math.min(val, auxTop))
    }
  }

  removeLatest() {
    this.main.pop();
    this.aux.pop();
  }

  latest() {
    return this.main[this.main.length - 1];
  }

  lowestStored() {
   return this.aux[this.aux.length - 1]
  }
}

