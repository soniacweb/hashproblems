// Password Vault
// Research the following topics:

// What makes a hashing algorithm suitable to be used for passwords?
// What are password salts and rainbow tables?

// Then create your own PasswordVault class. Instances of this class will be used to save usernames and their corresponding salted, 
// hashed passwords to disk as JSON file.
// The PasswordVault's constructor should include a path paramater which specifies the location where the passwords should be stored.
// It should have an add(username, password) method which saves a new username + password combo to the file. You don't need to worry about 
// using a secure hashing algorithm for the purposes of this lesson, md5 is fine.
// It should also have a check(username, password) method which checks whether a username + password combination is correct 
// (given the values stored in the file).

// As an extension, write unit tests for your vault to ensure it's working correctly.

const crypto = require("crypto");
const file = []

class PasswordVault {
    constructor(path) {
      this.path = path
    }

 add(username, password) {
    // which saves a new username + password combo to the file.
    const salt = Math.floor(Math.random() * 10000) // random number to latch onto hash number
    const hash = crypto.createHash("md5").update(password).digest("hex") + salt; // hashing whatever password is being inputed using md5 formula
    this.username = username
    this.password = password 
    // console.log(password, this.password)
    const user = {username, salt, hash}
    file.push(user)
 }
  check(username, password) {
    this.username = username
    this.password = password
    

  }

//   getHash(password, salt) {

//     const hash = crypto.createHash("md5").update(password + salt).digest("hex"); // hashing whatever password is being inputed using md5 formula

//     return 
//   }
}

const pv = new PasswordVault
const x= pv.add("Sonia", "password")
// console.log(x)

const pv2 = new PasswordVault
const x2= pv.add("Fola", "password")


const pv3 = new PasswordVault
const x3= pv.add("Daniel", "password3")
// console.log([x, x2, x3])

// const match = pv.check("Fola", "password")
// console.log(match)

// storing in json file
const fs = require("fs");
fs.writeFile('users.json', JSON.stringify(file), (error) => {
  if (error) throw error;
});
