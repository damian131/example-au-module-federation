export class Hello {
    firstName: string;
    lastName: string;

    constructor() {
      this.firstName = 'John';
      this.lastName = 'Doe';
    }
  
    sayHello() {
      alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
    }
  }