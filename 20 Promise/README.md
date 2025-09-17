
# Promises in JavaScript

Promises represent the eventual completion (or failure) of asynchronous operations and their resulting values. They help manage async code in a readable and maintainable way.

## Promise States

1. **Pending:** Initial state, neither fulfilled nor rejected.
2. **Fulfilled:** The operation completed successfully.
3. **Rejected:** The operation failed.

## Creating and Consuming Promises

```js
const promise = new Promise((resolve, reject) => {
	// async task
	if (success) resolve(value);
	else reject(error);
});

promise.then((value) => {
	// on fulfilled
}).catch((error) => {
	// on rejection
}).finally(() => {
	// always runs
});
```

## Chaining Promises

You can chain `.then()` calls for sequential async operations. Errors are caught with `.catch()` and cleanup with `.finally()`.

## Async/Await

Async functions allow you to write promise-based code as if it were synchronous:

```js
async function example() {
	try {
		const result = await promise;
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
```

## Promise.all

`Promise.all` runs multiple promises in parallel and resolves when all are fulfilled, or rejects if any fail:

```js
const results = await Promise.all([promise1, promise2]);
```

## Example Reference (promise.js)

- Creating promises with `new Promise`
- Consuming with `.then`, `.catch`, `.finally`
- Chaining and returning values
- Using async/await for cleaner syntax
- Handling multiple promises with `Promise.all`

## Fetch API

`fetch` is used to make network requests in web browsers and (with node-fetch or similar) in Node.js.

### Flow of a Fetch Request

1. **Browser/Node Initiates Request:**
	 - In browsers, `fetch` is built-in. In Node.js, use `node-fetch` or similar.
2. **Network Request:**
	 - `fetch(url)` sends a request to the server.
3. **Promise Returned:**
	 - The returned promise is `pending` until the network response arrives.
4. **On Fulfilled:**
	 - The promise resolves with a `Response` object if the request succeeds.
	 - You can call `.json()`, `.text()`, etc. on the response to get data.
5. **On Rejection:**
	 - The promise is rejected if there is a network error or the request fails.

### Example

```js
fetch('https://api.github.com/users/Sudhanshu-Taneja')
.then((res) => res.json())
.then((data) => {
	console.log(data); // on fulfilled
})
.catch((error) => {
	console.log(error); // on rejection
});
```

### Response Data Fields

- **status:** HTTP status code (e.g., 200, 404)
- **ok:** Boolean, true if status is 200-299
- **headers:** Response headers
- **url:** Final URL after redirects
- **json(), text(), blob():** Methods to parse response body

---
Promises and the Fetch API are essential for handling asynchronous operations and network requests in modern JavaScript.