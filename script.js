let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".H", 10, {top:'200%'},"-=10")
  .to(".work", 3, { top: "-5%" }, "-=10")
  .to(".health", 3, { top: "10%" }, "-=10")
  .to(".news", 3, { top: "10%" }, "-=10")
  .to(".earth", 3, { top: "5%" }, "-=10")
  .to(".sport", 3, { top: "40%" }, "-=10")
  .to(".food", 3, { top: "40%" }, "-=10")
  .to(".beauty", 3, { top: "60%" }, "-=10")
  .to(".btn", 3, { top: "70%" }, "-=10")
  let scene = new ScrollMagic.Scene({
    triggerElement: "sec",
    duration: "400%",
    triggerHook: 1,
})
.setTween(timeline)
.setPin("sec")
.addTo(controller);
