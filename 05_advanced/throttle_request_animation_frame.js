// throttle_per_frame.js (one call per requestAnimationFrame)

// This file demonstrates how to implement a throttle function
// that limits calls to a given function fn() to once per animation frame.

// take the function we want to throttle
function throttle(fn) {
  let scheduled = false;

  return function (...args) {
    if (scheduled) return; // skip if already scheduled

    scheduled = true;

    requestAnimationFrame(() => {
      fn.apply(this, args);
      scheduled = false;
    });
  };
}

// Example usage:
function onScroll(e) {
  console.log("scroll event at", Date.now());
}

const throttledScroll = throttle(onScroll);
window.addEventListener("scroll", throttledScroll);

// OUTPUT:
// If you scroll rapidly, you'll see that 'scroll event at ...'
// is logged at most once per animation frame (~16ms at 60fps).

// Why requestAnimationFrame?
// requestAnimationFrame is synchronized with the screen's refresh rate.
// It fires roughly every 16.6ms (at 60 FPS).
// This makes it an ideal way to optimize scroll, resize, or mouse events
// without overwhelming the UI thread.
