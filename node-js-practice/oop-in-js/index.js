class Person{
   constructor(name,age){
       this.name = name;
       this.age = age;
       this.jobs = "";
   }

   getName = () =>{
       return this.name;
   };
   getAge = () =>{
       return this.age;
   };
   
   setJobs = (job) =>{
     this.jobs = job;
   };


}
// class House{
//     constructor(address,price,residents){
//         this.address = address;
//         this.price = price;
//         this.residents = residents;
//     }

//     getAddress = () => {
//         return this.address;
//     }
//     getPrice = () =>{
//         return this.price;
//     }
//     getresidents = () =>{
//         return this.residents;
//     }
//     // outputInfo(){
//     //     console.log(`The house address is ${this.address} & price is ${this.price} & name of residents is ${this.residents}`);
//     // }

//     addResidents = (resident) =>{
//        this.residents.push(resident);
//     }
// }
// let person1 = new Person("haris", 19);
// let person2 = new Person("sarim", 23);
// // let house = new House("johar",300000,[person1,person2]);
// // console.log(house.getresidents());
// // House1.outputInfo();
// // console.log(Person1.getName());
// // console.log(Person1.getAge());
// // let person3 = new Person("Mobi",24);
// let person3 = new Person("hhhh",32);
// let house = new House("johar",300000,[]);
// house.addResidents(person3);
// person3.setJobs("It manager");

// console.log(house.getresidents());

//inheritance

class Programmer extends Person{
    constructor(name,age,company,salary,language){
     super(name,age);
     this.company = company;
     this.salary = salary;
     this.language = language;        
    }
    sayHi(){
        return `I am a Programmer and my name is ${this.getName()} and I work for  ${this.company}  `
    }
}
let programmer  = new Programmer("harry","21","PIA",100000,"JavaScript");
console.log(programmer.sayHi());




//Inheritance
// Create parent class Animal
// This class contains shared properties and methods
// class Animal {
//     // Add some shared properties
//     constructor(species, numOfLegs, sound) {
//       this.species = species
//       this.numOfLegs = numOfLegs
//       this.sound = sound
//     }
  
//     // Add shared method
//     speak() {
//       return this.sound
//     }
//   }
  
//   // Create Dog child class
//   // and let it inherit from Animal class
//   class Dog extends Animal {
//     // Add some code specific for Dog class
//     constructor(species, numOfLegs, sound, canRetrieve) {
//       // Use super() to call parent's class constructor
//       // before accessing 'this'
//       // pass only arguments defined in parent class
//       super(species, numOfLegs, sound)
  
//       this.canRetrieve = canRetrieve
//     }
//   }
  
//   // Create Cat child class
//   // and let it inherit from Animal class
//   class Cat extends Animal {
//     // Add some code specific for Cat class
//     constructor(species, numOfLegs, sound, canClimbTrees) {
//       // Use super() to call parent's class constructor
//       // before accessing 'this'
//       // pass only arguments defined in parent class
//       super(species, numOfLegs, sound)
  
//       this.canClimbTrees = canClimbTrees
//     }
//   }
  
//   // Create instance of Dog class
//   const charlie = new Dog('Dog', 4, 'Bark', true)
  
//   // Create instance of Cat class
//   const kitty = new Cat('Cat', 4, 'Mew', true)
  
//   // Let charlie speak
//   charlie.speak()
//   // Bark
  
//   // Can charlie retrieve a ball?
//   charlie.canRetrieve
//   // true
  
//   // Can charlie climb trees?
//   // This will not work because canClimbTress
//   // is not implemented neither in parent class Animal nor in Dog class
//   charlie.canClimbTrees
//   // undefined
  
//   // Let kitty speak
//   kitty.speak()
//   // Meow
  
//   // Can charlie climb trees?
//   kitty.canClimbTrees
//   // true
  
//   // Can kitty retrieve a ball?
//   // This will not work because canRetrieve
//   // is not implemented neither in parent class Animal nor in Cat class
//   kitty.canRetrieve
//   // undefined
