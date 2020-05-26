class setUser {//it is new pattern assignment
  constructor(name, { age, address, phone, email } = {}) 
  {
    this.name = name
    this.age = age
    this.phone = phone
    this.email = email
    this.address = address
  }
}//getting more info about the phone number
class PhoneNum{
  constructor(DialingCode, telNumber){
    this.DialingCode = DialingCode
    this.telNumber = telNumber
  }
}//getting more info about the address
class Address{
  constructor(country, PostCode, street)
  {
   this.country = country
   this.PostCode = PostCode
   this.street = street 
  }
}

//function for print
function getUser(user){
  console.log(user)
}

//creating a new object u0 of setUser
u0 = new setUser("yourName", { 
  //name is set as init()
  age: 29,
  phone: new PhoneNum(49, 19450507), 
  address: new Address("Germany", 19390901, "Danzing-Straße 435"),email: "Lebensraum@Reichspost.de",   
})
//calling the print function
 getUser(u0)

 /*
 NOTE: 
 you can develop this program in many way 
 like adding another attribute to the user array 
 */