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
    const bg_color=	document.getElementById("bgColor").value;
    const borderColor=	document.getElementById("borderColor").value;
    const thickness=	document.getElementById("thickness").value;
    const size=	document.getElementById("size").value;

    const message = {
    form: form,
    bg_color: bg_color,
    borderColor : borderColor,
    thickness : thickness,
    size : size
  };

    // getting a reference to our HTML element
    const canvas = document.querySelector('canvas')
    // initiating 2D context on it
    const c = canvas.getContext('2d')

    addEventListener('resize', () => {
      canvas.width = innerWidth -60
      canvas.height = innerHeight -60
    })


    nb = (Math.floor((Math.random()*(canvas.width-size))));
    nb2 = (Math.floor((Math.random()*(canvas.height-size))));
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

    if(count == 0)
    {
      j=3

      figures.push({"form" : form, "bg_color": bg_color, "borderColor": borderColor, "size" : size, "thickness": thickness, "nb":nb,"nb2":nb2});
      localStorage.setItem('canvasObjects', JSON.stringify(figures));


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


      //affichage dans la console avec fetch
      const fetchOptions = {
        method: 'POST',
        headers: {'Accept' : 'application/json', 'Content-Type' : 'application/json'},
        body: JSON.stringify(message)
      };

      function onTextReady(text){
        console.log(text);
      };

      function onResponse(res){
        return res.text();
      };

      fetch('/info', fetchOptions).then(onResponse).then(onTextReady);
    }

    else
    {
      position.pop();
      test = test+1;
      if(test==5)
      {
        console.log('Pas de place pour cette forme.. réessayez!')
        j=3;
      }
    }
  }
}


const retrievedObject = () => {
    var storage = localStorage.getItem('canvasObjects');
    var elem = JSON.parse(storage);
    for (i = 0; i < elem.length; i++)
    {
        const form = elem[i].form;
        const bg_color = elem[i].bg_color;
        const borderColor = elem[i].borderColor;
        const thickness = elem[i].thickness;
        const size = elem[i].size;
        const nb = elem[i].nb;
        const nb2 = elem[i].nb2;


        const canvas = document.querySelector('canvas')
        const c = canvas.getContext('2d')

        addEventListener('resize', () => {
          canvas.width = innerWidth
          canvas.height = innerHeight
        })

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


var figures = [];
var position = [];
position.push({"nb" : 150, "nb2": 150});
retrievedObject();
