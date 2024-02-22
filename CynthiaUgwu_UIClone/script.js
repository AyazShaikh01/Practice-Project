const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.25,
    ease: Expo.easeIn,
  });
  t1.to(".boundingelem", {
    y: "0",
    duration: 1,
    ease: Expo.easein,
    stagger: 0.1,
    delay: -1,
  });
  t1.from("#herofooter", {
    y: "-10",
    opacity: 0,
    duration: 0.5,
    ease: Expo,
    delay: -1,
  });
}
firstPageAnim();


var timeout;
function CircleSkew() {
  clearTimeout(timeout);
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    xscale = gsap.utils.clamp(0.7, 1.1, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.7, 1.1, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}


function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
CircleSkew();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
  
    elem.addEventListener("mousemove", function (dets) {
      var diffrotate = dets.clientX - rotate;
      rotate = dets.clientX;
  
      var diff = dets.clientY - elem.getBoundingClientRect().top;
  
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: "power7",
        duration: 0.75,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrotate),
      });
    });

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          duration: 0.75,
          ease: "power3",
        });
      });
  });
  