// Hash Table
// Write your own HashTable class. The class should have a set(key, value) method and a get(key) method. 
// Values should be stored in an array, and each value's array index should be generated by hashing its key. 
// You can decide how long this backing array is - the shorter it is, the more likely it is that collisions 
//(two separate keys mapping to the same array index) will occur; however, the longer it is, the more memory it will occupy.

// Tip: remember hash digests are usually represented as hexadecimal integers. The output of a hash will likely be larger than the length 
//of your backing array. How can you transform the output so it becomes an integer within the range of your array?

// As an extension, create unit tests for your HashTable to ensure it's behaving properly.

// As an extension, make your HashTable handle collisions without overwriting data.


const crypto = require("crypto");


class HashTable {
    backingArray = new Array(1000000);
    set(key, value) {
        const index = this.getIndex(key);
        this.backingArray[index] = value;
        return {key, value}
    }
    get(key) {
        const index = this.getIndex(key);
        return this.backingArray[index]
    }
    getIndex(key) {
        const hash = crypto.createHash("md5").update(key).digest("hex");
        const decimalHash = parseInt(hash, 16);
        return decimalHash % this.backingArray.length;
    }
}
const hashTable = new HashTable
const sonia = hashTable.set("Sonia", "07898349754")
console.log(sonia)

const hashTable2 = new HashTable
const fola = hashTable2.set("Fola", "07898349754")
console.log(fola)


