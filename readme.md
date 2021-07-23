Week 1 day 3

https://multiverselearningproducts.github.io/swe/mod1/wk1/day3.html#javascript

### Hashing Functions

A hashing algorithm takes as its input some data of any length and will return you some different data of a fixed length. Often the output data will be displayed as a hexadecimal integer. An example hashing function is md5.

```
md5("multiverse")
-> 63e9e039993b3acc92b0ee3615ec110b

md5("multiverse")
-> 63e9e039993b3acc92b0ee3615ec110b

md5("the outstanding alternative to university")
-> 1e042cc7ec5625ffb2fcd5a786140173
```


- only work one way; 

This feature of hashes makes them perfect for checking passwords. When you sign-up for a (well-made) website, the server takes your password, hashes it and stores the hash. When you login, it uses the same hashing function to hash your password and checks if it matches the hash it has under your name in the database. 

- hashes have a fixed length 

- Hashes always produce the same output given the same input

No matter how large our table gets, the time it takes to lookup a key is constant, or O(1).

- Hash Tables
- Collisions

### Password Salts

Salting is simply the addition of a unique, random string of characters known only to the site to each password before it is hashed, typically this “salt” is placed in front of each password. The salt value needs to be stored by the site, which means sometimes sites use the same salt for every password.

A cryptographic salt is made up of random bits added to each password instance before its hashing. Salts create unique passwords even in the instance of two users choosing the same passwords. Salts help us mitigate hash table attacks by forcing attackers to re-compute them using the salts for each user.


### Password Vault
Research the following topics:

What makes a hashing algorithm suitable to be used for passwords?
What are password salts and rainbow tables?
Then create your own PasswordVault class. Instances of this class will be used to save usernames and their corresponding salted, hashed passwords to disk as JSON file.

The PasswordVault's constructor should include a path paramater which specifies the location where the passwords should be stored.

It should have an add(username, password) method which saves a new username + password combo to the file. You don't need to worry about using a secure hashing algorithm for the purposes of this lesson, md5 is fine.

It should also have a check(username, password) method which checks whether a username + password combination is correct (given the values stored in the file).

As an extension, write unit tests for your vault to ensure it's working correctly.

### Password Cracker

Find the 4-letter string of lowercase letters (i.e. a-z) which produces the md5 digest dbfcafe986040cc10ada1a4314c436db You can use

```
const crypto = require("crypto");
const word = "blah";
var hash = crypto.createHash("md5").update(word).digest("hex");
```

To generate an md5 hash in Node.js

As an extension, make your solution generic such that it works (possibly very slowly) given any password length and any character set.