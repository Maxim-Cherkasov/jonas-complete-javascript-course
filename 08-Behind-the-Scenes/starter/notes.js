// Block scope

/* 
  Variables let and const are visible only inside a block *if*
  But old *var* variable can be used outside of the block,
  since it is a function scoped. var simply ignore the block,
  it is simply a function scoped.

  While let and const are only block scoped

  Functions are also block scoped. You can't call it outside a block.
  But we can call it if we're not in 'strict mode'.
*/  


// Primitive data types

/*
  Number
  String
  Boolean
  Undefined
  Null
  Symbol
  BigInt
*/

// Objects

/*
  Objects are created with Object literal, Arrays, Functions and many more

  Memory and memory management is usually to call primitive - primitive types and
  objects - reference types
*/


// JavaScript engine

/*
  It has two components:

  1. The call stack, where functions are executed
  2. The heap, where objects are stored in memory
*/

/*
  reference types will get stored in the memory heap

  primitive types are stored in the call stack, so
  it is stored in the execution context which we are declared

  (execution context run in the call stack)
*/

// * const variable itself is imutable for promitive values, not for reference types
// * whenever you think you copying an object, you really just creating a new variable
// * that points to the exact same object