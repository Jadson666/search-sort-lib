### Goal
the intention is to provide binary search API like other languages have
but now it's more than just binary search

---

### Installation

```
npm run install search-sort-lib
```

### Declaration
```ts
// parameters
interface IBinarySearchInput {
  sortedArray: any[],
  target: number,
  comparator: (ele: any) => number
//return value
index: number
```

---

###Input

**sortedArray**: can be am array of integers like regular input of binary search, or `array of object` then provider `comparator` as third params
**target**: the number you want to find
**comparator**: a function extract the number out of object

### Output
**index**: the index in of target in array, which is **number**

---

###Example
```js
const arr = [{ age: 2 }, { age: 3 }, { age: 6 }]

const index = binarySearch(arr, 2, (ele => ele.age)) // 0
const index = binarySearch(arr, 10, (ele => ele.age)) // -1, not found
```
