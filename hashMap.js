/**
 * Implement a Hash Map data structure
 */

class HashMap {
    constructor(size = 50) {
        this.buckets = new Array(size);
        this.size = size;
    }

    // Will cause collisions but will be very quick
    hash(key) {
        return key.toString().length % this.size;
    }

    setItem(key, value) {
        let index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        this.buckets[index].push([key, value]);
    }

    getItem(key) {
        let index = this.hash(key);

        if(!this.buckets[index]) {
            return null;
        }

        for(let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                return bucket[1];
            }
        }
    }
}

const myMap = newHasMap();