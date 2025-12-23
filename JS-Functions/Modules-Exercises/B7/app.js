// app.js
// Assuming there's a button with id 'runTaskBtn' in the HTML
document.getElementById('runTaskBtn').addEventListener('click', async () => {
  try {
    const module = await import('./heavyModule.js');
    module.runHeavyTask();
  } catch (error) {
    console.error('Error loading module:', error);
  }
});