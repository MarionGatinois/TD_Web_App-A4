const HelloWorld = () =>{
  let hello = document.getElementsByTagName("h1")[0].innerText;
  if (hello == "Hello World") {
    hello ="";
  }
  else{
  hello = "Hello World";
}
  document.getElementsByTagName("h1")[0].innerText=hello;
}

const ChangeColor = () =>{
  couleur = 0;
  couleur = (Math.floor((Math.random()*3)+1));
  console.log(couleur);
  if (couleur == 1)
  {
    couleur = 'red'
  }
  else if (couleur == 2)
  {
    couleur = 'green'
  }
  else
  {
    couleur = 'blue'
  }
  document.body.style.background = couleur ;
}


const PlayASound = () =>{
  const sound = new Audio("./alarm2.mp3");
  sound.play();
}


const UppercaseButtons = () =>{
  for(const element of document.getElementsByTagName("a")){
      element.text = element.text.toUpperCase();}
}

const LowercaseButtons = () =>{
  for(const element of document.getElementsByTagName("a")){
      element.text = element.text.toLowerCase()}
}

const DisappearButtons = () =>{
  for(const element of document.getElementsByTagName("a"))
   {
      element.style.visibility = "hidden"
    }
}

const AppearButtons = () =>{
  for(const element of document.getElementsByTagName("a"))
  {
    element.style.visibility = "visible"
  }
}

const RemoveFirstButton = () =>{
  const element = document.getElementsByTagName("a");
  if (element[0].style.display == "none")
  {
    element[0].style.display = "block";
  }
  else
  {
    element[0].style.display = "none";
  }

}
