const start = () => {
  const color=document.getElementById("1").value;
  const color2=document.getElementById("2").value;
  const color3=document.getElementById("3").value;
  const color4=document.getElementById("4").value;


  document.styleSheets[0].insertRule(`
     @keyframes pulse {
       0% {
           background-color: ${color} ;
           border-color: ${color2} ;
       }
       100% {
           background-color: ${color3};
           border-color: ${color4};
       }
     }`)
  document.getElementById("drawingBox").classList.add("animation")
  document.getElementById("drawingBox").getAnimations()[0].currentTime=0;
  console.log(document.styleSheets[0]['cssRules'][12])
  document.getElementById("drawingBox").style.animationPlayState="running"
}


const start_stop_Zoom = () =>{
  if(document.getElementById("drawingBox").style.animationPlayState=="paused"){
    if(!document.getElementById("drawingBox").classList.contains("zooming")){
       document.getElementById("drawingBox").classList.add("zooming")
    }
    document.getElementById("drawingBox").style.animationPlayState="running"
  }else{
    document.getElementById("drawingBox").style.animationPlayState="paused"
  }
}

const start_stop_Mouvement = () =>{
  if(document.getElementById("drawingBox").style.animationPlayState=="paused"){
    if(!document.getElementById("drawingBox").classList.contains("moving")){
       document.getElementById("drawingBox").classList.add("moving")
    }
    document.getElementById("drawingBox").style.animationPlayState="running"
  }else{
    document.getElementById("drawingBox").style.animationPlayState="paused"
  }
}

const rotate = () =>{
  if(document.getElementById("drawingBox").style.animationPlayState=="paused"){
    if(!document.getElementById("drawingBox").classList.contains("rotate")){
       document.getElementById("drawingBox").classList.add("rotate")
    }
    document.getElementById("drawingBox").style.animationPlayState="running"
  }else{
    document.getElementById("drawingBox").style.animationPlayState="paused"
  }
}
