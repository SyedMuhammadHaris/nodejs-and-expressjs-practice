// Create parent class Animal
class Animal {
    // Add shared speak method
    speak() {
      return 'Grrr.'
    }
  }
  
  // Create class Dog, child class of Animal
  class Dog extends Animal {
    // Create new implementation of speak() method
    // This is polymorphism
    //This speak method also available in parent class this is called method overriding run time polymorphism;
    speak() {
      return 'Woof, woof.'
    }
  }
  
  // Create class Cat, child class of Animal
  class Cat extends Animal {
    // Create new implementation of speak() method
    // This is polymorphism
        //This speak method also available in parent class this is called method overriding;
    speak() {
      return 'Meow.'
    }
  }
  
  // Create instance of Dog class
  const myDog = new Dog()
  
  // Call the speak method on Dog instance
 console.log(myDog.speak()); 
  // Woof, woof.
  
  // Create instance of Cat class
  const myCat = new Cat()
  
  // Call the speak method on Cat instance
 console.log(myCat.speak()); 
  // Meow.

  //Method overloading example compile time polymorphism

  // Create parent class Person
class Person {
    // Create sayNumber() method that accepts integer
    sayNumber(num) {
      return `The number is ${num}.`
    }
  }
  
  // Create class boy, child class of Person
  class Boy extends Person {
    // Create new implementation of sayNumber() method
    // and make it so it accepts two parameters
    // This when method overloading
    sayNumber(numOne, numTwo) {
      return `The number is ${numOne} and ${numTwo}.`
    }
  }
  
  
  // Create instance of Person class
  const jack = new Person();
  
  // Call sayNumber() method
  console.log(jack.sayNumber(14));
  // The number is 14.
  
  
  // Create instance of Boy class
  const tony = new Boy()
  
  // Call sayNumber() method
  console.log(tony.sayNumber(13, 17));
  // The number is 13 and 17.