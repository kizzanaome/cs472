## What is LibUV?
LibUV is a built-in C library used by Node.js to provide asynchronous, non-blocking I/O capabilities. It powers Node's event loop, manages task queues, and handles thread pool operations for executing blocking tasks like file system access and DNS resolution. This allows Node.js to efficiently handle multiple operations concurrently in a single-threaded environment.

## Explain the difference between setImmediate(f) and setTimeout(f, Time)?
setTimeout(f, time) runs the callback after a minimum delay (in the Timers phase).
setImmediate(f) runs the callback immediately after the current I/O phase (in the Check phase).
setTimeout takes a delay time; setImmediate does not.
In I/O callbacks, setImmediate usually runs before setTimeout



## Explain the difference between process.nextTick(f) and setImmediate(f)?
In Node.js, process.nextTick(f) and setImmediate(f) are both used to schedule asynchronous callbacks, but they execute at different points in the event loop. process.nextTick(f) runs the callback immediately after the current operation and before the event loop continues (in the microtask queue), while setImmediate(f) runs the callback during the check phase, after I/O events have been processed.