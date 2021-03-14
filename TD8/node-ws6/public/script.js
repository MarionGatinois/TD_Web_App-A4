const displayCircle = (thickness, bg_color,borderColor, nb,nb2, size, c) => {
  c.lineWidth =  thickness
  c.beginPath()
  c.fillStyle= bg_color
  c.strokeStyle = borderColor
  c.arc(nb,nb2, size/2, 0, Math.PI * 2)
  c.fill();
  c.stroke();
}

const displayTriangle = (thickness, bg_color,borderColor, nb,nb2, size, c) => {
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

const displaySquare = (thickness, bg_color,borderColor, nb,nb2, size, c) => {
  c.lineWidth =  thickness
  c.beginPath()
  c.fillStyle= bg_color
  c.strokeStyle = borderColor
  c.rect(nb, nb2, size, size)
  c.fill();
  c.stroke();
}


const displayfunction = (form) => {
  var j=0;
  var test=0;
  while(j<2)
  {
    if (form==undefined)
    {
    var form =	document.getElementById("form").value;
    }
    const name=	document.getElementById("name").value;
    const bg_color=	document.getElementById("bgColor").value;
    const borderColor=	document.getElementById("borderColor").value;
    const thickness=	document.getElementById("thickness").value;
    const size=	document.getElementById("size").value;


    // getting a reference to our HTML element
    const canvas = document.querySelector('canvas')
    // initiating 2D context on it
    const c = canvas.getContext('2d')

    addEventListener('load', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight}
  )

    let nb = (Math.floor((Math.random()*(canvas.width-size))));
    let nb2 = (Math.floor((Math.random()*(canvas.height-size))));
    position.push({"nb" : nb, "nb2": nb2});
    var count = 0;


    for (i = 0; i < position.length-1; i++)
    {
        var position1 = position[i].nb;
        var position2 = position[i].nb2;
        var sizeInt = parseInt(size,10) + parseInt(thickness,10);
        var a = ((nb>(position1-(sizeInt))) && (nb<(position1+(sizeInt))));
        var b = ((nb2>(position2-(sizeInt))) && (nb2<(position2+(sizeInt))));

        if(b == true)
        {
          if(a == true)
          {
            count = count +1;
          }
        }
    }

    if(count == 0 && name!="")
    {
      j=3

      const message = {
      form: form,
      name:name,
      bg_color: bg_color,
      borderColor : borderColor,
      thickness : thickness,
      size : size,
      nb : nb,
      nb2 : nb2
      };

      if(form =='circle')
      {
        displayCircle(thickness, bg_color,borderColor, nb,nb2, size, c)
        c.fillText(name,5,(canvas.height-5))
      }
      if(form =='square')
      {
        displaySquare(thickness, bg_color,borderColor, nb,nb2, size, c)
        c.fillText(name,5,(canvas.height-5))

      }
      if(form =='triangle')
      {
        displayTriangle(thickness, bg_color,borderColor, nb,nb2, size, c)
        c.fillText(name,5,(canvas.height-5))
      }
      //TD8
      socket.emit("drawing", JSON.stringify(message))

    }

    else
    {
      position.pop();
      test = test+1;
      if(test==5 && name=="")
      {
        console.log('Entrez un nom')
        j=3;
      }
      else if(test==5 && name!='')
      {
        console.log('Pas de place pour cette forme.. réessayez!')
        j=3;
      }
    }
  }
}


const retrievedObject = async(packet) => {
    //var storage = localStorage.getItem('canvasObjects');
    const name=	document.getElementById("name").value;

    const elem = JSON.parse(packet);
    console.log('--',packet)
    console.log('__', elem)
    //elem = JSON.parse(storage)
    for (i = 0; i < elem.length; i++)
    {
        if(elem[i] !=null)
        {
        console.log(elem[i])
        const form = elem[i].form;
        const bg_color = elem[i].bg_color;
        const borderColor = elem[i].borderColor;
        const thickness = elem[i].thickness;
        const size = elem[i].size;
        const nb = elem[i].nb;
        const nb2 = elem[i].nb2;
        const name2 = elem[i].name;

        const canvas = document.querySelector('canvas')
        const c = canvas.getContext('2d')

        addEventListener('resize', () => {
          canvas.width = innerWidth
          canvas.height = innerHeight
        })
        if(name==name2)
        {

          if(form =='circle')
          {
            displayCircle(thickness, bg_color,borderColor, nb,nb2, size, c)
          }
          if(form =='square')
          {
            displaySquare(thickness, bg_color,borderColor, nb,nb2, size, c)
          }
          if(form =='triangle')
          {
            displayTriangle(thickness, bg_color,borderColor, nb,nb2, size, c)
          }
        }
      }
    }
}


//display 10 forms

const randomdisplay = () => {
  for (var i=0; i<10;i++)
  {
    rd=(Math.floor((Math.random()*(3))));
      if(rd==0) //circle
      {
        displayfunction('circle');
      }

      if(rd==1) //square
      {
        displayfunction('square');
      }

      if(rd==2) //triangle
      {
        displayfunction('triangle');
      }
    }
}

const load = () => {
  socket.on('drawing', function(message) {
  console.log("recu",message);
  retrievedObject(message);
 });
}


const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')


let isDrawing = false;
let x=0;
let y=0;

addEventListener('load', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
})



function drawLine(x1, y1, x2, y2) {
  // using a line between actual point and the last one solves the problem
  // if you make very fast circles, you will see polygons.
  // we could make arcs instead of lines to smooth the angles and solve the problem
  const pencilSize=	document.getElementById("pencilSize").value;
  const pencilColor=	document.getElementById("pencilColor").value;
  c.beginPath();
  c.strokeStyle = pencilColor;
  c.lineWidth = pencilSize;
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
  c.closePath();
}

function drawCircleAtCursor(x,y,canvas, event) {
  // Problem with draw circle is the refresh rate of the mousevent.
  // if you move too fast, circles are not connected.
  // this is browser dependant, and can't be modified.
    c.beginPath()
    c.arc(x, y, 10/2, 0, Math.PI * 2)
    c.closePath()

    c.lineWidth = 2
    c.strokeStyle = "#000"
    c.stroke()

    c.fillStyle = "#000"
    c.fill()
}

canvas.addEventListener('mousedown', function(e) {
    const rect = canvas.getBoundingClientRect()
    x = e.clientX - rect.left
    y = e.clientY - rect.top
    console.log("x: " + x + " y: " + y)
    isDrawing=true

})

canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    //drawCircleAtCursor(x,y,canvas, e)
    drawLine(x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    //drawCircleAtCursor(x,y,canvas, e)
    drawLine(x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
})


let socket = io();

var figures = [];
var position = [];
position.push({"nb" : 150, "nb2": 150});
