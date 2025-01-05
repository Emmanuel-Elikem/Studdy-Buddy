// Select Elements
const showNotificationButton = document.getElementById('showNotification');
const closeNotificationButton = document.getElementById('closeNotification');
const notification = document.getElementById('notification');
const content = document.getElementById('content');

// Show Notification
showNotificationButton.addEventListener('click', () => {
  notification.classList.remove('hidden');
  content.classList.add('blurred');
});

// Close Notification
closeNotificationButton.addEventListener('click', () => {
  closeNotification();
});

// Close Notification on Outside Click
notification.addEventListener('click', (e) => {
  if (e.target === notification) {
    closeNotification();
  }
});

// Close Notification Function
function closeNotification() {
  notification.classList.add('hidden');
  content.classList.remove('blurred');
}
