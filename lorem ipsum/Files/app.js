const genrateBtn = document.querySelector("#genrate-Btn");
const loremText = document.querySelector("#lorem");
const number = document.querySelector("#num");
const form = document.querySelector("#input-section");

const content = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime tenetur ipsa aut perspiciatis non quisquam placeat excepturi numquam facilis quidem, suscipit illo, aliquid porro nesciunt esse quia mollitia. Unde, dolorem.
        Quasi rem explicabo numquam eaque officiis tempora dolor! Rerum, vel harum soluta itaque, aliquam error laboriosam id sunt odit aspernatur inventore quaerat labore sequi accusantium. Delectus, dolor? Eos, beatae debitis!
        Molestiae, minus, obcaecati tempora consequatur voluptas illo consequuntur perspiciatis voluptate fugiat in voluptatibus corporis voluptatem nobis unde inventore laborum? Quia mollitia, cumque deleniti quam ex magni voluptate praesentium omnis`,

  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam modi iure autem sint molestias, odit error aliquam magnam laudantium vitae facere quae ducimus rerum veritatis! Incidunt ipsa quaerat quas fugit.
        Unde mollitia voluptates deserunt. Possimus enim sit repudiandae, explicabo a quis iste voluptate id dolore laboriosam voluptatum necessitatibus illo eaque sint molestiae repellat. Praesentium eum et alias fugiat error officia!`,

  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat itaque sed labore praesentium culpa expedita ut iste dignissimos aspernatur esse tenetur animi, quaerat unde beatae id inventore. Consectetur, libero?
        Itaque soluta ipsa fugit unde, quibusdam commodi nobis voluptatem dolore, ad culpa dolor impedit perferendis sed nesciunt ab adipisci iste aperiam exercitationem? Assumenda eveniet repellendus maxime, velit ipsa nostrum sunt.
        Recusandae animi officia ea dolorem numquam dolor. Unde rerum, soluta animi odio, enim molestiae facilis nisi exercitationem vel dolorum sunt excepturi harum illum. Sed omnis quidem incidunt placeat ut maiores.`,

  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex est magni saepe quas. Necessitatibus adipisci cum eveniet mollitia quia? Sunt magni consequatur porro, suscipit accusantium eos nostrum nobis atque.
        Mollitia deleniti numquam beatae eveniet veritatis perferendis iusto laboriosam illo cumque temporibus ratione doloremque nemo quaerat, quia cupiditate eos nihil culpa voluptate aperiam praesentium unde quae. Aperiam dolore soluta delectus.`,

  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, sequi beatae. Saepe nobis tenetur, magni amet dicta consequuntur a odio voluptatum sapiente officia quos officiis eligendi quae sed harum facilis.
        Amet autem veritatis, atque, voluptas sit repellendus mollitia eius corrupti numquam beatae sequi necessitatibus minus? Ex, voluptas non reprehenderit magni ea minima officia, vero sequi hic quo expedita dolor est.
        Perspiciatis omnis, voluptatum ipsum expedita sequi tenetur quasi iusto tempore id dicta necessitatibus assumenda, optio amet minus aliquam sit repellendus labore magni quod? Perspiciatis est et quas fugit earum. Veniam!`,

  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione rerum molestiae, eius explicabo delectus magni, minima repellat doloremque officia necessitatibus architecto, dolore quae maiores! Neque tempora eveniet cumque laborum?
        Nam esse nulla ad culpa veritatis harum cumque sed reprehenderit excepturi voluptatibus. Nesciunt deleniti maxime sunt non, facilis itaque a, delectus suscipit enim assumenda exercitationem optio, reprehenderit quae. Deserunt, esse!`,
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas omnis delectus ipsa deserunt dolores non iure aperiam blanditiis totam, unde repudiandae fuga culpa, officia vero sed, quasi animi assumenda error!
        Aspernatur ipsum dolorum adipisci laudantium provident quibusdam! Tempora ipsum labore itaque cum! Facilis corrupti labore rem ab perspiciatis error sit? Voluptatum laudantium quis placeat soluta, porro earum sapiente architecto totam?`,

  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente autem facilis, voluptatem vero suscipit est, quam laboriosam nisi voluptates, quas atque labore? Illo doloribus veniam impedit error cum, quae vel.
        Quae accusantium hic, temporibus reprehenderit pariatur possimus molestiae unde cupiditate at voluptate corrupti doloremque asperiores amet exercitationem aperiam officiis. Odio nulla a quidem sapiente dignissimos autem obcaecati provident laborum deserunt!
        Eveniet porro, nisi ea dolor quas consectetur nemo dignissimos tempore incidunt inventore iusto? Ad dolore ipsam consequatur. Nobis quod, sapiente voluptatem sunt error porro! Provident amet necessitatibus culpa blanditiis doloribus.`,

  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, possimus assumenda qui laudantium sunt optio alias, quae nesciunt reiciendis accusantium exercitationem voluptatem pariatur saepe amet eum, consectetur molestiae! Quod, quia?
        Delectus, cumque temporibus qui aliquid dignissimos quisquam vel mollitia sint veniam dolores, excepturi dolor nam modi placeat unde, voluptates nobis ex minus? Soluta animi ea corrupti fugit vero. Dolores, consequatur?`,

  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias quis sint quas deserunt neque quod nihil, corrupti repellat odio quia, pariatur perferendis unde a eaque accusantium maiores. Corrupti, voluptate?
        Iure eaque consectetur excepturi minus! Eaque, esse aliquam blanditiis architecto, quibusdam saepe molestias, pariatur ducimus ex consequuntur obcaecati quis id illo. Voluptatem excepturi, nihil ab corrupti aliquid fuga quas inventore!`,
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = parseInt(number.value);
  //   accesing random index of a content array
  const random = Math.floor(Math.random() * content.length);
  if (isNaN(value) || value <= 0 || value > 10) {
    loremText.innerHTML = `<h3 id="result">${content[random]}</h3>`;
  } else {
    let tempText = content.slice(0, value);
    tempText = tempText
      .map((item) => {
        return `<h3 id="result">${item}</h3>`;
      })
      .join("");

    loremText.innerHTML = `${tempText}`;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  loremText.textContent = " hello there 👋 !";
});
