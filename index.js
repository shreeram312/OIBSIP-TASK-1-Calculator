

function display(number){
 
  let m=document.getElementById('Result');
m.value+=number;
 
}

function Empty(number){
  let n=document.getElementById('Result');
  n.value = "";
}


function Calculate(number){
  try{
    let h=document.getElementById('Result').value;
  let x= eval(h);
  document.getElementById('Result').value=x;

  }
  catch(err){
    alert("Inavalid Expression!!!  Enter Valid Expression")
  }
 
 }

 function Del(){

  let q=document.getElementById('Result');
  q.value=q.value.slice(0,-1);



  
 }
  