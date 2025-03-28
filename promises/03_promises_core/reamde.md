# 📁 03_promises_core/

This folder covers the **fundamentals of JavaScript Promises** — their lifecycle, behavior, and chaining.

---

## 📘 What is a Promise?

A `Promise` is a JavaScript object that represents the eventual **completion (or failure)** of an **asynchronous operation**, and its resulting **value**.

```js
const promise = new Promise((resolve, reject) => {
  // async task
});
```

## 📘 Promise States

A Promise is always in one of these 3 states:

| State       | Meaning                                          |
| ----------- | ------------------------------------------------ |
| `pending`   | Initial state, not fulfilled or rejected yet     |
| `fulfilled` | The operation completed successfully (`resolve`) |
| `rejected`  | The operation failed (`reject`)                  |

---

## ✅ `resolve(value)` vs ❌ `reject(reason)`

- `resolve(value)` moves the promise to **fulfilled** state.
- `reject(reason)` moves the promise to **rejected** state.
- Only the **first call** to either is effective. Further calls are ignored.

```js
const p = new Promise((resolve, reject) => {
  resolve("OK");
  reject("Error"); // Ignored
});
```

---

## Promise Chain Behavior Summary

### `then()`

- Adds a "resolve" handler
- Called if the promise is fulfilled
- Its return value goes to the next `then()` or `catch()`
- If it **throws an error**, the chain becomes **rejected** and goes to the next `catch()`
  - If there is **no `catch()`** further → the promise stays rejected and the error is **unhandled**

---

### `catch()`

- Handles errors from:
  - the previous chain
  - the original rejected promise
- If `catch()` returns normally → the chain continues as **fulfilled**
- If `catch()` throws an error → the chain continues as **rejected**
- If `catch()` doesn't return anything -> it returns `undefined` and continue fullfilled chain with undefined

---

### `finally()`

- Always executed, **regardless of whether the promise is fulfilled or rejected**
- It does **not receive** the result or error of the chain (will be undefined)
- It does **not pass** any value from itself to the next step — the chain continues with the original value or error
- The **only way** `finally()` can affect the chain is if it **throws** an error — in that case, the chain becomes rejected with that error, even if it was previously fulfilled
