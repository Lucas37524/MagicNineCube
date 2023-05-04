//Desktop

(function() {
    var mouseTimer;
    function mouseDown() { 
        mouseUp();
        mouseTimer = window.setTimeout(execMouseDown,1000); //wait one second
    }
  
    function mouseUp() { 
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer
        // here you can add a thing that happens when you click aswell 
    }
  
    function execMouseDown() { 
      let cube = document.querySelector("#cube");
      let textBox = document.querySelector("#answertext")
      let randomNumber = Math.floor(Math.random() * 8);
      let nineBall = ``;
      
      cube.addEventListener("mouseDown", textBox.classList.add('textfade'));

      switch (randomNumber) {
      case 0:
        nineBall = `It is certain`;
        break;
    
      case 1:
        nineBall = `It is decidedly so`;
        break;
    
      case 2:
        nineBall = `Reply hazy try again`;
        break;
    
      case 3:
        nineBall = `Cannot predict now`;
        break;
    
      case 4:
        nineBall = `Do not count on it`;
        break;
    
      case 5:
        nineBall = `My sources say no`;
        break;
    
      case 6:
        nineBall = `Outlook not so good`;
        break;
    
      case 7:
        nineBall = `Signs point to yes`;
        break;      
        
        case 8:
        nineBall = `Yes`;
        break;
    
      case 9:
        nineBall = `No`;
        break;
    
      case 10:
        nineBall = `Ask again`;
        break;
      }

      console.log(`The Magic 9 Cube says: ${nineBall}.`);

      document.getElementById("answertext").innerHTML =`The Magic 9 Cube says: ${nineBall}.`;
    }
  
    var div = document.getElementById("cube");
    div.addEventListener("mousedown", mouseDown);
    document.body.addEventListener("mouseup", mouseUp);
    
  }());

//Mobile

(function() {

  var touchTimer;
  function touchStart() { 
    touchEnd();
      touchTimer = window.setTimeout(exectouchStart,1000); //wait one second
  }

  function touchEnd() { 
      if (touchTimer) window.clearTimeout(touchTimer);  //cancel timer
      // here you can add a thing that happens when you click aswell 
  }

  function exectouchStart() { 
    let cube = document.querySelector("#cube");
    let textBox = document.querySelector("#answertext")
    let randomNumber = Math.floor(Math.random() * 8);
    let nineBall = ``;
    
    cube.addEventListener("mouseDown", textBox.classList.add('textfade'));
    
    switch (randomNumber) {
      case 0:
        nineBall = `It is certain`;
        break;
    
      case 1:
        nineBall = `It is decidedly so`;
        break;
    
      case 2:
        nineBall = `Reply hazy try again`;
        break;
    
      case 3:
        nineBall = `Cannot predict now`;
        break;
    
      case 4:
        nineBall = `Do not count on it`;
        break;
    
      case 5:
        nineBall = `My sources say no`;
        break;
    
      case 6:
        nineBall = `Outlook not so good`;
        break;
    
      case 7:
        nineBall = `Signs point to yes`;
        break;      
        
        case 8:
        nineBall = `Yes`;
        break;
    
      case 9:
        nineBall = `No`;
        break;
    
      case 10:
        nineBall = `Ask again`;
        break;
    }

    console.log(`The Magic 9 Cube says: ${nineBall}.`);

    document.getElementById("answertext").innerHTML =`The Magic 9 Cube says: ${nineBall}.`;

  }

  var div = document.getElementById("cube");
  div.addEventListener("touchstart", touchStart);
  document.body.addEventListener("touchend", touchEnd); 
  
}());

function reload() { 
  window.location.reload()
}

//Popup

window.addEventListener("load", function(){
  this.setTimeout(
    function open(event){
      document.querySelector(".popup").style.display = "block";
    },
    1000
  )
  }); 

document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});

document.querySelector("#ok-btn").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});
