# Improving the Sort

Clone the project from the [starter].

## Learning Goals

* Explain the complexity of and write a function that performs `merge sort`
    on an array of numbers.
* Explain the complexity of and write a function that performs `quick sort`
    on an array of numbers.

## Part 1: Improvements to Basic Sorts

First, you will be implementing some more advanced sorting algorithms: _merge_
and _quick_ sorts.

Both of these can be done out-of-place (return a new array without changing
the original) but can be refactored to be in-place (mutate the original array)
as a challenge task.

For each of these problems, take time to understand the provided pseudocode,
then translate the pseudocode to JavaScript.

Run tests by typing `mocha test/quick-merge-sort-specs.js`.


## Part 2: Tackling Custom Sort Problems

Practice coding some irregular sorting problems that aren't just looking
to sort its elements in ascending order:

### `User Age Sort`

Given an array of User objects, sort them in ascending order based on their
age. Returns the objects in sorted order.

Example:

```js
const users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        occupation: 'Software Engineer',
        friends: [2, 3, 4]
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 25,
        occupation: 'Data Scientist',
        friends: [1, 4]
    },
    {
        id: 3,
        firstName: 'Mary',
        lastName: 'Smith',
        age: 32,
        occupation: 'UX Designer',
        friends: [2, 4]
    },
    {
        id: 4,
        firstName: 'James',
        lastName: 'Johnson',
        age: 55,
        occupation: 'CTO',
        friends: [1, 2, 3]
    }
];

ageSort(users);         // => Jane, John, Mary, James
```

### `OddEven Sort`

Given an array, sort it such that the *odds* appear in ascending order on the
left, then the *evens* on the right. (Remember, try to do this in-place!)

Example:

```js
const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
const arr2 = [5, 8, 13, 6, 22, 14, 9];

oddEvenSort(arr1);           // => [1, 3, 5, 7, 9, 2, 4, 6, 8]
oddEvenSort(arr2);           // => [5, 9, 13, 6, 8, 14, 22]
```

### `Valid Anagrams`

Given two strings, s and t, write a function that determines it s and t are
anagrams.

Example:

```js
let s = "anagram";
let t = "nagaram";

validAnagrams(s, t);            // => true
```

### `Reverse-Base Sort`

Given an array, sort it such that the numbers are grouped by its base in
descending order, but ascending within each group. Each number will be
greater than 0.

Example:

```js
const arr1 = [11, 1, 101, 10, 100];
const arr2 = [1, 45, 164, 6, 31, 90, 671];

reverseBaseSort(arr1);      // => [100, 101, 10, 11, 0, 1]
reverseBaseSort(arr2);      // => [164, 671, 31, 45, 90, 1, 6]
```

Given an array of integers, sort the array in increasing order based on the
frequency of the values. If multiple values have the same frequency, sort
them in decreasing order. Return the sorted array.

Example:

```js
const arr1 = [1, 1, 2, 2, 2, 3];
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

frequencySort(arr1);        // => [3, 1, 1, 2, 2, 2]
frequencySort(arr2);        // => [1, 3, 3, 2, 2]
frequencySort(arr3);        // => [5, -1, 4, 4, -6, -6, 1, 1, 1]
```


## Part 3: Challenge Problems

The following problems are meant to test your Polya's Problem Solving
abilities! These problems will require you to take time to understand the
problem and come up with a bulletproof plan to execute the solution.


### Snake Sort

Given an array, sort it such that even indices are ascending from least to
greatest and odd indices are the remaining values in descending order.

Example:

```js
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [9, 91, 4, 73, 1, 166, 24, 415];

snakeSort(arr1);            // => [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
snakeSort(arr2);            // => [1, 415, 4, 166, 9, 91, 24, 73];
```

### Relative Sort

Given two arrays `arr1` and `arr2`, the elements of `arr2` are distinct, and
all elements in `arr2` are also in `arr1`.

Sort the elements of `arr1` such that the relative ordering of items in `arr1`
are the same as in `arr2`.  Elements that don't appear in `arr2` should be
placed at the end of `arr1` in ascending order.

Example:

```js
const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];

relativeSort(arr1,  arr2);   // => [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19] 
```

### `Group Anagrams`

Given an array of strings, group the anagrams together. You can return the
answer in any order.

Example:

```js
groupAnagrams(["eat","tea","tan","ate","nat","bat"]);     //  => [["bat"],["nat","tan"],["ate","eat","tea"]]
```

[starter]: https://github.com/appacademy-starters/algorithms-advanced-sorts-starter
