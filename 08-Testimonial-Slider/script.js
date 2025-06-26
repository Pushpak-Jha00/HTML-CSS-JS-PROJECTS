const testimonial = [
  {
    name: "- Lila Anderson",
    photoUrl:"https://media.istockphoto.com/id/1401481821/photo/handsome-young-man-in-working-on-laptop-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=E1hL7xB4vxJYv4vX_OgkqkDu2Y_8AdQYV-XL4PNsbi4=",
    text:"I absolutely love the fresh apples from apple! Their fruit is alwaystop-notch and delicious. I can't get enough of their juicy and flavorful produce."
  },
  {
    name: "- John Smith",
    photoUrl:"https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcGyGG1qPMyxl3rw4TCVwbJLZTPabFg4twsVFDy-ixs=",
    text:"The quality of the apples from apple is unmatched. They are always crisp, sweet, and bursting with flavor. I highly recommend them to anyone who loves fresh fruit."
  },
  {
    name: "- Sarah Johnson",
    photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    text:"I have been a loyal customer of apple for years, and I can honestly say that their apples are the best I've ever tasted. They are always fresh, juicy, and full of flavor. I can't imagine my life without them!"                       
  },
];

const imgElement = document.querySelector("img");
const nameElement = document.querySelector(".username");
const textElement = document.querySelector(".text");

let index = 0;

function updateTestimonial(){
  const {name, photoUrl, text} = testimonial[index];

  imgElement.src = photoUrl;
  nameElement.textContent = name;
  textElement.textContent = text;
  index++;

  if(index === testimonial.length){
    index = 0;  
  }

  setTimeout(() => {
    updateTestimonial();
  },10000);
}

updateTestimonial()