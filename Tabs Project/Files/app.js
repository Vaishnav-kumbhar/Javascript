const content = [
  {
    id: 1,
    topic: "History",
    brief:
      "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
  },
  {
    id: 2,
    topic: "Vision",
    brief:
      "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.",
    listItem: `<li>list item</li>`,
  },
  {
    id: 3,
    topic: "Goals",
    brief:
      "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones",
  },
];

const btns = document.querySelectorAll(".tab-btn");
const mainContent = document.querySelector("#right-content");
const about = document.querySelector("#about-content");
const heading = document.querySelector("#topic");

mainContent.addEventListener("click", (e) => {
  let btnId = e.target.dataset.id;
  if (btnId) {
    btns.forEach((btns) => {
      btns.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  if (btnId === "History") {
    about.textContent = content[0].brief;
    heading.textContent = content[0].topic;
  } else if (btnId === "Vision") {
    about.textContent = content[1].brief;
    heading.textContent = content[1].topic;
  } else if (btnId === "Goals") {
    about.textContent = content[2].brief;
    heading.textContent = content[2].topic;
  }
});
