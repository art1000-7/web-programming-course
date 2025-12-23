// analytics.js
// This is a side-effect module because importing it executes code that modifies the global state
// (sets window.analyticsEnabled) rather than just providing exports.
// Side-effect imports are used when you want to run initialization code without importing specific values.
console.log('Analytics initialized');
window.analyticsEnabled = true;