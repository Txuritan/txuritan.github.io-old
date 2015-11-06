Notification.requestPermission();
function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    var notification = new Notification("Hi there! Notifications will now work and the button should disaper.");
    $("#notify").remove();
  }
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Hi there! Notifications will now work and the button should disaper.");
        $("#notify").remove();
      }
    });
  }
}
