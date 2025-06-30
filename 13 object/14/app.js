const arr = [1, 2, 3, 1, 2, 1];
const count = {};

for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
}

let maxCount = 0;
let mostFrequent = null;

for (const num in count) {
    if (count[num] > maxCount) {
        maxCount = count[num];
        mostFrequent = num;
    }
}

console.log(mostFrequent);  