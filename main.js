const pgraph = document.querySelector('#p1');
pgraph.style.color = 'lightBlue';

const heading = document.querySelector('h1');
heading.style.fontSize = '10px';

pgraph.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.';

const item13 = document.querySelector('#item-13');
item13.style.color = 'rgba(0,0,0,0.5)';

const item3 = document.querySelector('#item-3');
item3.innerText = 'I say, "Hi!"';

const oldImg = document.querySelector('img');
oldImg.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';
oldImg.style.height = '300px';

const newDiv = document.createElement('div');
newDiv.style.position = 'relative';

const newImg = document.createElement('img');
newImg.src = 'https://media0.giphy.com/media/6Nv7BdrUl6Psc/giphy.gif';

const mainDiv = document.querySelector('div');
mainDiv.appendChild(newDiv);

newDiv.appendChild(newImg)

const item16 = document.createElement('li');
item16.class = 'item';
item16.id = 'item-16';
item16.innerText = "I won't be fooled again."
list = document.querySelector('ul');
list.appendChild(item16);


