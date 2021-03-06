// Animated Bugs
(function animatedBugs() {

	$(document).ready(function () {
		animateDiv($(".bug.a"));
		animateDiv($(".bug.b"));
		animateDiv($(".bug.c"));
		animateDiv($(".bug.d"));
		animateDiv($(".bug.e"));
		animateDiv($(".bug.f"));
		animateDiv($(".bug.g"));
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
})();

// Long Form Poem Generator
(function generatePoem() {
	var t = 0;
	
	var left = [
		"Time is not perceived as a linear concept of past, present and future,.",
		"Non-extractive care means not,.",
		"It is practicing knowing that everyone is different,.",
		"This is without prejudice to,.",
		"When experimenting with community,.",
		"The idea that these “objects” could possess lineage and descendants,.",
		"To do something together with others,.",
		"These “objects” are taonga (treasures),.",
		"They hold genealogies,.",
		"What does it mean to decenter,.",
		"For arts practitioners and art organizations,.",
		"Our programming policies and practices,.",
		"Our staff and support teams,.",
		"Our ethical practices,.",
		"Our transparency and accountability practices,.",
		"Our commitment to change,.",
		"This marks a significant period,.",
		"The CJC positions climate justice,.",
		"Of particular pertinence to this code,.",
		"We live too with the increasingly inescapable knowledge,.",
		"Climate Colonialism traces the direct lineage,.",
		"A term that works from a deep rooted understanding of colonial violence and toward decolonial multi-species futures,."
	];
	var right = [
		"it is circular",
		"meaning that it does not exist without being in relation to its surroundings or phenomena",
		"imagining or assuming",
		"one kind of being or one mode of existing at the center of our practices",
		"has different and dynamic needs",
		"these differences are what connect us",
		"as we journey into non-extractive modes of caring",
		"as an open-ended process",
		"power can become embodied as an energy",
		"to do something together with others",
		"that are alive and present",
		"interact in the world beyond museum cases is just being understood now",
		"they hold genealogies",
		"ancestral knowledge and they present living narratives",
		"making space for a plurality of knowledges, practices, and approaches",
		"the knowledge structures of modernity",
		"being open to becoming smaller",
		"our commitment to change",
		"direct lineage of climate change to European colonial occupation",
		"across the Global South'",
		"far-reaching atrocities that followed",
		"forced extraction of natural resources from across the Global South",
		"mass deforestation",
		"dissolution and destabilization of sustainable indigenous farming, irrigation, and migration practices",
		"oppressed indigenous people",
		"using the labor of enslaved Africans",
		"resources were then broken down",
		"to power the industrial revolution",
		"consumer-driven economic model that would go on to release high volumes of carbon emissions causing the Earth’s temperature to rise",
		"effecting the mycelial networks of fungi",
		"the acidity of soil, and the health of its bacteria",
		"causing tsunamis, hurricanes, droughts",
		"being worn away by fires"
	];
	function rand_range(max) {
			"use strict";
			return Math.floor(Math.random() * (max + 1));
	}
	function litany() {
			"use strict";
			var last, text, l, r, main = document.getElementById('poem');
			if (t <= 800) {
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
			setInterval(litany, 3500);
	})();
})();

// Failsafe clear DOM + add chapter title so it is understood as a lone poem not new one
window.setInterval('newChapter()', 120000); // 1 minute in miliseconds

const poem = document.querySelector('.poem');
const chapterSeparator = document.createElement('div');
chapterSeparator.innerHTML = ' ----------- ';
chapterSeparator.classList.add('poem--chapter-separator');

function newChapter() {
		// window.location.newChapter();
		poem.querySelectorAll('*').forEach(n => n.remove()); // remove poem lines
		poem.appendChild(chapterSeparator); // add chapter title then continue writing
}

// Toggle Button for about section
window.addEventListener("DOMContentLoaded", (event) => {
  // target all the trigers and store them as array.
  const buttons = Array.from(document.querySelectorAll(".click-me"));

  // Handle the state changes.
  function toggle(triggers) {
    const handleClick = (event) => {
      event.preventDefault();
      const active = document.querySelector(".toggled");
      if (active) {
				event.currentTarget.setAttribute("aria-expanded",'false');
        event.currentTarget.innerText = 'about';
        active.classList.remove("toggled");
        active.nextElementSibling.classList.remove("open");
      } else {
        event.currentTarget.innerText = 'close';
        event.currentTarget.classList.add("toggled");
        event.currentTarget.nextElementSibling.classList.add("open");
				event.currentTarget.setAttribute("aria-expanded",'true');
      }
    };

    // Run the function on select elements.
    const clicker = buttons.forEach((element) => {
      element.addEventListener("click", handleClick, false);
    });

    return clicker;
  }
  // Do the toggling.
  toggle(buttons);
});


const styleSwitch = document.querySelector(".app-style");

	
styleSwitch.addEventListener("click", (event) => {
	event.preventDefault();
	const active = document.querySelector(".toggled");
	if (active) {
		event.currentTarget.innerText = "\uD83D\uDC9C scroll?";
		active.classList.remove("toggled");
		event.currentTarget.setAttribute("aria-pressed",'false');
		document.querySelector('body').classList.remove("interactive");
	} else {
		event.currentTarget.setAttribute("aria-pressed",'true');
		event.currentTarget.innerText = '\uD83D\uDC9C watch?';
		event.currentTarget.classList.add("toggled");
		document.querySelector('body').classList.add("interactive");
	}
});
