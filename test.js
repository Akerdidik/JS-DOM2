document.getElementById('balance').innerHTML="https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
var a = document.getElementById('imba').innerHTML;
var b = a.replaceAll("?","🤔");
var c = b.replaceAll("!","😯");
document.getElementById('imba').innerHTML=c;
var gr = document.getElementById('imba').innerHTML;
var count = gr.length;
document.getElementById('cnt').innerHTML=count;
function repl(){
  var text = document.getElementById('imba').innerText;
  var result = "";
  var probeli = text.split(" ");
  var repla="";
  for(var i=0;i<probeli.length;i++){
    var prob = probeli[i];
    if(prob.length>=8){
      repla="<span class='bluet'>"+prob+"</span>";
    }
    else{
      repla=prob;
    }
    result+=" "+repla+" ";
  }
  return result;
}
document.getElementById('imba').innerHTML=repl();
