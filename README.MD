# Event Loop and Promises

## Overview

This repository contains examples and explanations related to **JavaScript Event Loop**, **Promises**, and asynchronous programming concepts. It demonstrates how JavaScript handles asynchronous operations, the differences between microtasks and macrotasks, and how various techniques like `Promise`, `setTimeout`, `requestAnimationFrame`, and others interact in the event-driven environment of the browser or Node.js.

## Key Concepts

### 1. **JavaScript Event Loop**

The **Event Loop** is a fundamental concept in JavaScript that handles the execution of asynchronous code. JavaScript is single-threaded, meaning it can only execute one operation at a time. However, asynchronous operations allow JavaScript to handle tasks concurrently without blocking the main thread.
Event loop is not part of Javascript language, but part of Javascript Engines in browsers (V8 at Chrome, SpiderMonkey at Firefox)
(Event loop is part of JS Engine -> JS Engine is part of Browser Engine)
Broswer Engine consists of: rendering engine, JS engine, network layer, UI Layer, web api

#### Key Components of the Event Loop:

**Call Stack**: Keeps track of function calls. When a function is invoked, it is pushed onto the stack. When the function finishes execution, it is popped off.
**Web APIs**: Provides browser features like setTimeout, DOM events, and HTTP requests. These APIs handle asynchronous operations.
**Task Queue (Callback Queue)**: Stores tasks waiting to be executed after the call stack is empty. These tasks are queued by setTimeout, setInterval, or other APIs.
**Microtask Queue**: A higher-priority queue for promises and MutationObserver callbacks. Microtasks are executed before tasks in the task queue.

## 2. Terms Mentioned in the Context of Event Loop

In the context of **Event Loop**, several key terms are often used. Here's an overview of the most important ones:

### **Synchronous Code**

- **Definition**: Synchronous code executes sequentially, in the exact order it appears in the script. It blocks the execution of further operations until the current one completes.
- **Event Loop Role**: Synchronous code runs first, before asynchronous code and tasks.

### **Asynchronous Code**

- **Definition**: Asynchronous code allows tasks to be executed in the background without blocking the main thread. It includes operations like promises, timers, and event handlers, which run after the completion of synchronous code.
- **Event Loop Role**: Asynchronous tasks are processed after synchronous code finishes executing.

### **Microtasks**

- **Definition**: Microtasks are operations that have a higher priority than macrotasks. They are typically tasks like `Promise.then()`, `queueMicrotask()`, and `MutationObserver`.
- **Event Loop Role**: Microtasks are executed **after synchronous code**, but **before** macrotasks. They are processed during the current event loop iteration.

### **Macrotasks**

- **Definition**: Macrotasks include operations like `setTimeout()`, `setInterval()`, network requests, and event handlers. These tasks are queued (in event queue) to execute after synchronous and microtasks have been completed.
- **Event Loop Role**: Macrotasks are executed after all microtasks and synchronous code have been processed, but before the browser does any rendering.

### **Event Queue**

- **Definition**: The event queue holds tasks that need to be executed, such as event handlers, timers, and I/O tasks. These tasks are processed after synchronous code and microtasks have been completed.
- **Event Loop Role**: The event queue stores macrotasks, which are executed sequentially by the event loop.

### **Promise**

- **Definition**: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are typically resolved (fulfilled) or rejected based on the outcome of an asynchronous operation.
- **Event Loop Role**: Promises use the microtask queue to handle their results. When a promise resolves or rejects, its callback is placed in the microtask queue to be executed after the current execution context and before the next event loop iteration.

### **Callback**

- **Definition**: A callback is a function passed as an argument to another function, which is invoked when an operation is completed. Examples include event listeners and other asynchronous operations.
- **Event Loop Role**: Callbacks, such as event handlers or asynchronous operations like timers, are queued as tasks in the event queue.

### **setTimeout() / setInterval()**

- **Definition**: `setTimeout()` schedules a task to be executed after a specified delay, while `setInterval()` repeatedly executes a task at specified intervals.
- **Event Loop Role**: Both `setTimeout()` and `setInterval()` add tasks to the **event queue** (macrotasks), which are executed after the current execution context and microtasks.

### **requestAnimationFrame()**

- **Definition**: `requestAnimationFrame()` is used for creating smooth animations, and it is synced with the browser's refresh rate.
- **Event Loop Role**: `requestAnimationFrame()` tasks are executed **before macrotasks**, but **after microtasks**. It helps ensure smooth rendering by allowing tasks to be executed before the next paint cycle.

### **Garbage Collector**

- **Definition**: The garbage collector is responsible for freeing up memory by deleting objects that are no longer in use. It works asynchronously and is triggered during the event loop process.
- **Event Loop Role**: The garbage collector does not directly manage task queues but works in the background to clean up memory during the idle periods of the event loop.

### 2. **How the Event Loop Works**

1. **Execute Synchronous Code**: The Event Loop starts by executing synchronous code, including the initial script and functions that are called.
2. **Process Microtasks**: After synchronous code execution, the Event Loop processes all the microtasks in the microtask queue, such as promises and `queueMicrotask()`.
3. **Process Macrotasks**: The Event Loop then processes macrotasks in the event queue, such as `setTimeout()`, `setInterval()`, or I/O events.
4. **Render Updates**: After macrotasks are processed, the browser or runtime may update the UI based on the current state.

### 3. **Promises**

**Promises** are a way to handle asynchronous operations in JavaScript. They provide a more readable and manageable alternative to callbacks, especially in handling complex chains of asynchronous operations.

#### The lifecycle of a Promise:

- **Pending**: The initial state of a Promise. The asynchronous operation has not yet completed.
- **Fulfilled**: The state of the Promise when the asynchronous operation succeeds and returns a value.
- **Rejected**: The state of the Promise when the asynchronous operation fails and returns an error.

#### Promises in Action:

- **`then()`**: Used to handle the fulfillment of a Promise and return a new Promise for chaining.
- **`catch()`**: Used to handle rejected Promises.
- **`finally()`**: Used to execute code after a Promise is settled, regardless of whether it was fulfilled or rejected.

#### Promise Chaining:

Promises can be chained together to perform a series of asynchronous tasks sequentially. Each `then()` returns a new Promise, allowing for clean and readable asynchronous workflows.

#### Example:

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```
