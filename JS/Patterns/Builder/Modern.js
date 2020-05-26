class User {
  constructor(name, { age, phone = '123-456-7890', address } = {}) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}
class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

const u1 = new User('Layt',
{address: new Address('803461','Pech St.'), age: 17,  phone: "101010"})

const u2 = new User("Leni", 
{age: 15, phone: "131923", address: new Address("803461", "Luck")}, )


console.log(u1)
console.log(u2)