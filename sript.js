// EXTERNAL JAVASCRIPT

// Console method: Standard log
console.log("External script file connected.");

// Console method: Warning log
console.warn("This is a demonstration warning from the external file.");

// Console method: Error log
try {
    // Intentionally triggering a simulated error for demonstration
    throw new Error("Simulated system check error.");
} catch (error) {
    console.error("External JS Error Caught: " + error.message);
}
