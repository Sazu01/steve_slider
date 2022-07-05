const Cammera = document.querySelector(".musk .cam");
const musk_wrapper = document.querySelector(".musk_wrapper");
const nav_l = document.getElementById("l-nav");
const nav_r = document.getElementById("r-nav");
const list_of_slides = document.getElementsByClassName("img_wrapper");
const slide_content = document.getElementsByClassName("slide_content");
const all_videos = document.getElementsByClassName("video_slide");
const slide_constent = 351;
let slide_processor = -351;
let track = 1;
let max = 2;
let min = 0;

function mid_always_bigger(mid) {
  for (let i of list_of_slides) {
    i.classList.remove("mid_girl");
  }
  list_of_slides[mid].classList.add("mid_girl");
}

function video_off() {
  for (let i of all_videos) {
    i.pause();
  }
}

musk_wrapper.addEventListener("click", (e) => {
  if (e.target === nav_r) {
    if (track < max) {
      track += 1;
      slide_processor -= slide_constent;
      Cammera.style.transform = `translateX(${slide_processor}px)`;
    }

    console.log(track);
    let mid = track + 1;

    mid_always_bigger(mid);

    video_off();
  } else if (e.target === nav_l) {
    if (track > min) {
      track -= 1;
      slide_processor += slide_constent;
      Cammera.style.transform = `translateX(${slide_processor}px)`;
    }

    console.log(track);
    let mid = track + 1;
    mid_always_bigger(mid);
    video_off();
  }
});

for (let i of slide_content) {
  i.childNodes[3].addEventListener("click", () => {
    i.childNodes[3].classList.add("display_none");
    i.childNodes[5].classList.add("display_none");
    i.childNodes[7].classList.add("display_none");
    i.childNodes[9].play();
  });

  console.log(i.childNodes);
}
