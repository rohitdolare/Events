document.addEventListener('keydown', function(event) {
  displayEventData(event, 'Keydown');
});

document.addEventListener('keyup', function(event) {
  displayEventData(event, 'Keyup');
});

document.addEventListener('keypress', function(event) {
  displayEventData(event, 'Keypress');
});

function displayEventData(event, eventType) {
  const eventTypeDisplay = document.getElementById('eventType');
  const keyCodeDisplay = document.getElementById('keyCode');
  const keyDisplay = document.getElementById('key');


  eventTypeDisplay.textContent = '';
  keyCodeDisplay.textContent = '';
  keyDisplay.textContent = '';


  eventTypeDisplay.textContent = `Event Type: ${eventType}`;
  keyCodeDisplay.textContent = `Key Code: ${event.keyCode || event.which}`;
  keyDisplay.textContent = `Key: ${event.key}`;
}
