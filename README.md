# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @glavovica/lotide`

**Require it:**

`const _ = require('@glavovica/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Verifies if the content in original array and the expected array are the same.

* `assertEqual(actual, expected)`: Verifies if the original value input is the same as the expected output

* `assertObjectEqual(actual, expected)`: verifies if the content of the object are the same 
* `countOnly(allitems, itemsToCount)`: counts array and returns object of the item counter and the amount of times it is in the array.
* `countLetters(letterCounter)`: counts how many of each letter is in the string returns object with properties and values
* `eqArrays(arr1, arr2)`: compares both arrays if the contents are identical and returns a boolean
* `eqObjects(obj1, obj2)`: compares both objects if they are identical and returns a boolean 
* `findKey(object, callback)`: description
* `findKeyByValue(object, value)`: finds the key in the object by the value 
* `head(arr)`: returns first item in array
* `letterPosition(sentence)`: returns the indexes of a letter in a string
* `map(array, callback)`: returns new array in regards to the callback funtion it used
* `middle(arr)`: finds the middle items of an array
* `tail(arr)`: returns body of the array not counting the head
* `takeUntill(array, callback)`: pushes items in new array untill the condition is met
* `without(source, toRemove)`: removes items from the array