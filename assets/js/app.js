$(document).ready(function () {
  animateDiv($(".bug.a"));
  animateDiv($(".bug.b"));
  animateDiv($(".bug.c"));
  animateDiv($(".bug.d"));
});

function makeNewPosition($container) {
  // Get viewport dimensions (add the dimension of the articles)
  var h = $container.height() + 50;
  var w = $container.width() + 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv($target) {
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $target.animate(
    {
      top: newq[0],
      left: newq[1]
    },
    speed,
    function () {
      animateDiv($target);
    }
  );
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.05;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}


// long form generator

var t = 0;
// All but the last character ends up as the beginning of the output.
// The last character is tacked onto the very end.
var left = ["The Parties reaffirm their rights and obligations.", "The Protocol on.", "Procedures shall not apply to.", "This is without prejudice to.", "Provided it does not unnecessarily delay the conduct of.", "Investigation shall be granted a full opportunity to defend its.", "Information provided in accordance with the.", "After considering the information referred to in.", "Procedures shall not apply to.", "The public report shall include.", "The importing Party shall offer to hold consultations with the exporting Party in.", "The importing Party shall not adopt measures until.", "Consideration of.", "Information provided in.", "Duty would not be in.", "After considering the.", "For the purpose of.", "At the request of."];
// This ends up as the end of the output, except for the very last character.
var right = ["general definitions", "administrative ruling of general application", "agricultural good", "anti-dumping agreement", "ceta contact points", "ceta joint committee", "cultural industries", "customs duty", "customs valuation agreement", "party-specific definitions citizen", "central government", "geographical scope of application", "initial provisions", "establishment of a free trade area", "relation to the wto", "agreement and other agreements", "reference to other agreements", "reference to laws", "extent of obligations", "rights and obligations relating to water"


];
function rand_range(max) {
    "use strict";
    return Math.floor(Math.random() * (max + 1));
}
function litany() {
    "use strict";
    var last, text, l, r, main = document.getElementById('poem');
    if (t <= 9999) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('poem').firstChild);
    }
    last = document.createElement('p');
		last.classList.add('line');
    l = rand_range(left.length - 1);
    r = rand_range(right.length - 1); //2
    if (r >= l) {
        r += 1;
    }
    text = left[l].slice(0, left[l].length - 1)  + " " + right[r] + left[l].slice(-1);
    last.appendChild(document.createTextNode(text));
    main.appendChild(last);
}

(function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 1500);
})();