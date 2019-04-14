
class Animal {

    constructor(age) {
      this.age = age;
    }
  
    sleep() {    
      console.log('Zzzzzzz');
    }
  
    eat() {
      console.log('Num num num');
    }
  
  }
  
  class Predator extends Animal {
      attack() {
          console.log('POW!')
      }
  }
  
  class Dolphin extends Animal {
      swim() {
          console.log('Splah')
      }
  }
  
  class Lion extends Predator {
      roar() {
          console.log('Rahhhh!')
      } 
  
  }
  
  class Eagle extends Predator {
      fly() {
          console.log('Whoo Hooo!')
      }
  
  }
  
  class Bee extends Animal {
      fly() {
          console.log('Whoo Hooo!')
      }
  }