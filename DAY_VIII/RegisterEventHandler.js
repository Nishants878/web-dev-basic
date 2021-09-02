function RegisterEventHandler(theElement, theEvent, theHandler) {
  if (window.addEventListener)
    theElement.addEventListener(theEvent, theHandler);
  else if (window.attachEvent) theElement.attachEvent(theEvent, theHandler);
  else theElement["on" + theEvent] = theHandler; // -> btn.onclick = Handler
}
