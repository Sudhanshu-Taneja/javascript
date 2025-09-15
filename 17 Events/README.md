### Preventing Default Actions

Some HTML elements have default behaviors (e.g., links navigating to a URL, form submissions). The `preventDefault()` method can be used to stop these actions.

#### Example from one.html

In the provided HTML, clicking the Google link does not navigate away because `preventDefault()` is called:

```js
document.getElementById('google').addEventListener('click', function(e) {
	e.preventDefault();
	console.log('You clicked on the Google link, but default action is prevented.');
}, false);
```

This is useful for handling custom navigation, validation, or other logic before allowing the default action.
### Event Propagation

Event propagation describes how events travel through the DOM tree. There are two main phases:

- **Bubbling:** The event starts at the target element and bubbles up to its ancestors (default behavior for most events).
- **Capturing (Trickling):** The event starts from the root and travels down to the target element. You can enable capturing by passing `true` as the third argument to `addEventListener`.

#### Example

```js
parentDiv.addEventListener('click', function() {
	console.log('Parent clicked');
}, false); // Bubbling phase

childDiv.addEventListener('click', function() {
	console.log('Child clicked');
}, false);

// For capturing phase:
parentDiv.addEventListener('click', function() {
	console.log('Parent capturing');
}, true);
```

- **stopPropagation():** Prevents the event from continuing to propagate (bubble or capture) further up or down the DOM.

```js
childDiv.addEventListener('click', function(e) {
	e.stopPropagation();
	console.log('Child click, propagation stopped');
});
```

---
Understanding event propagation helps you control how events are handled in complex DOM structures and avoid unintended side effects.
## Events in JavaScript

Events are actions or occurrences that happen in the browser, such as clicks, key presses, or page loads. JavaScript allows you to respond to these events and make web pages interactive.

### Event Handling Example (from one.html)

In `one.html`, images and a link are displayed. The first image uses an event listener:

```js
document.getElementById('first').addEventListener('click', function(e) {
		console.log(e);
}, false);
```
This logs the event object when the first image is clicked.

### Common Event Properties

- **type**: The type of event (e.g., 'click', 'keydown').
	- `e.type` returns the event type.
- **timestamp**: The time (in ms since page load) when the event occurred.
	- `e.timeStamp`
- **defaultPrevented**: Indicates if `preventDefault()` was called to stop the default action.
	- `e.defaultPrevented`
- **target**: The element that triggered the event.
	- `e.target`
- **toElement**: The element the pointer moved to (for mouse events).
	- `e.toElement`
- **srcElement**: The original element that triggered the event (legacy, use `target`).
	- `e.srcElement`
- **currentTarget**: The element the event listener is attached to.
	- `e.currentTarget`
- **clientX / clientY**: The mouse position relative to the viewport when the event occurred.
	- `e.clientX`, `e.clientY`
- **screenX / screenY**: The mouse position relative to the physical screen.
	- `e.screenX`, `e.screenY`

### Example Usage

```js
document.getElementById('first').addEventListener('click', function(e) {
		console.log('Type:', e.type);
		console.log('Timestamp:', e.timeStamp);
		console.log('Default Prevented:', e.defaultPrevented);
		console.log('Target:', e.target);
		console.log('To Element:', e.toElement);
		console.log('Src Element:', e.srcElement);
		console.log('Current Target:', e.currentTarget);
		console.log('Client Location:', e.clientX, e.clientY);
		console.log('Screen Location:', e.screenX, e.screenY);
	console.log('Alt Key:', e.altKey);
	console.log('Ctrl Key:', e.ctrlKey);
	console.log('Shift Key:', e.shiftKey);
	console.log('Key Code:', e.keyCode);
});
```

### Notes

- Use `preventDefault()` to stop default actions (e.g., following a link).
- `target` and `currentTarget` may differ if event bubbling is involved.
- Mouse location properties help with drag-and-drop and custom UI interactions.

### Additional Event Properties

- **altKey**: Returns `true` if the Alt key was pressed during the event.
- **ctrlKey**: Returns `true` if the Ctrl key was pressed during the event.
- **shiftKey**: Returns `true` if the Shift key was pressed during the event.
- **keyCode**: Returns the numeric code of the key pressed (mainly for keyboard events; deprecated, use `code` or `key`).

---
JavaScript events are essential for building interactive web applications. Explore different event types and properties to create dynamic user experiences.
