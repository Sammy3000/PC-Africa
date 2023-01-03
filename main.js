// Mobile menu code starts here

const sideMenu = document.querySelector('.side-menu');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.mobile-nav');
const moreButton = document.querySelector('.more');
menuIcon.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});
closeIcon.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});
// mobile menu ends here

//  projects

const featureArtists = document.querySelector('.featured-speakers');

const artists = [
  {
    artistImage: './images/arya.jpg"',
    name: 'Arya Star',
    firstInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,animi!',
    lastInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi!',
  },
  {
    artistImage: './images/burna.jpg"',
    name: 'Burnaboy',
    firstInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,animi!',
    lastInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi!',
  },
  {
    artistImage: './images/nikita.jpg"',
    name: 'Nikita Kering',
    firstInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,animi!',
    lastInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi!',
  },
  {
    artistImage: './images/sauti.jpg"',
    name: 'Sauti Sol',
    firstInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,animi!',
    lastInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi!',
  },
  {
    artistImage: './images/tiwa.jpg"',
    name: 'Tiwa Savage',
    firstInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,animi!',
    lastInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi!',
  },
  {
    artistImage: './images/wizkid.jpg"',
    name: 'Wizkid',
    firstInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,animi!',
    lastInfo:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi!',
  },
];

artists.forEach((artist) => {
  const project = ` <div class="feature">
  <div class="artist-image">
    <img
      src="${artist.artistImage}"
      alt="artist image"
      width="80"
      height="70"
    />
  </div>
  <div class="artist-info">
    <h6>${artist.name}</h6>
    <p class="artist-info-one">
     ${artist.firstInfo}
    </p>
    <p class="artist-info-two">
     ${artist.lastInfo}
    </p>
  </div>
  </div>`;
  featureArtists.innerHTML += project;
});

// displaying more artists on click mobile version

const eachArtist = document.querySelectorAll('.feature');
moreButton.addEventListener('click', () => {
  eachArtist.forEach((artist) => {
    artist.style.display = 'flex';
  });
});
