//display a form

const displayfunction = () => {

  const form =	document.getElementById("form").value;
  const bg_color=	document.getElementById("bgColor").value;
  const borderColor=	document.getElementById("borderColor").value;
  const thickness=	document.getElementById("thickness").value;
  const size=	document.getElementById("size").value;

  // getting a reference to our HTML element
  const canvas = document.querySelector('canvas')
  // initiating 2D context on it
  const c = canvas.getContext('2d')

  addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
  })

  nb = (Math.floor((Math.random()*(canvas.width-size))));
  nb2 = (Math.floor((Math.random()*(canvas.height-size))));

  if(form =='circle')
  {

    c.lineWidth =  thickness
    c.beginPath()
    c.fillStyle= bg_color
    c.strokeStyle = borderColor
    c.arc(nb,nb2, size/2, 0, Math.PI * 2)
    c.fill();
    c.stroke();

  }
  if(form =='square')
  {
    c.lineWidth =  thickness
    c.beginPath()
    c.fillStyle= bg_color
    c.strokeStyle = borderColor
    c.rect(nb, nb2, size, size)
    c.fill();
    c.stroke();


  }
  if(form =='triangle')
  {
    var size3 = parseInt(nb,10) + parseInt(size,10)
    var size1 = parseInt(nb,10) + parseInt(size,10)/2
    var size2 = parseInt(nb2,10) + parseInt(size,10)/2
    c.lineWidth =  thickness
    c.beginPath()
    c.fillStyle= bg_color
    c.strokeStyle = borderColor
    c.moveTo(nb, nb2);
    c.lineTo(size3, nb2);
    c.lineTo(size1, size2);
    c.closePath();
    c.fill();
    c.stroke();

  }
}


//display 10 forms

const randomdisplay = () => {
  for (var i=0; i<10;i++)
    {
      const bg_color=	document.getElementById("bgColor").value;
      const borderColor=	document.getElementById("borderColor").value;
      const thickness=	document.getElementById("thickness").value;
      const size=	document.getElementById("size").value;
      const canvas = document.querySelector('canvas')
      const c = canvas.getContext('2d')

      addEventListener('resize', () => {
        canvas.width = innerWidth
        canvas.height = innerHeight
      })

      nb = (Math.floor((Math.random()*(canvas.width-size))));
      nb2 = (Math.floor((Math.random()*(canvas.height-size))));
      rd=(Math.floor((Math.random()*(3))));

      if(rd==0) //circle
      {
        c.lineWidth =  thickness
        c.beginPath()
        c.fillStyle= bg_color
        c.strokeStyle = borderColor
        c.arc(nb,nb2, size/2, 0, Math.PI * 2)
        c.fill();
        c.stroke();
      }

      if(rd==1) //square
      {
        c.lineWidth =  thickness
        c.beginPath()
        c.fillStyle= bg_color
        c.strokeStyle = borderColor
        c.rect(nb, nb2, size, size)
        c.fill();
        c.stroke();
      }

      if(rd==2) //triangle
      {
        var size3 = parseInt(nb,10) + parseInt(size,10)
        var size1 = parseInt(nb,10) + parseInt(size,10)/2
        var size2 = parseInt(nb2,10) + parseInt(size,10)/2
        c.lineWidth =  thickness
        c.beginPath()
        c.fillStyle= bg_color
        c.strokeStyle = borderColor
        c.moveTo(nb, nb2);
        c.lineTo(size3, nb2);
        c.lineTo(size1, size2);
        c.closePath();
        c.fill();
        c.stroke();
      }

    }
}

//stockage
const writeData =()=> {
  localStorage.setItem('canvasObject', JSON.stringify(canvasObject));
}


const retrievedObject = () => {
    const storage = localStorage.getItem('canvaObject');
    const objects = JSON.parse(storage);
    console.log(objects)
}

retrievedObject();
