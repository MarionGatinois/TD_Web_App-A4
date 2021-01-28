function script(){
let str = document.getElementById("article").innerHTML;
str = str.replace('/\b\w{7,}\b/g',"<span style='background-color:yellow;'>$&</span>");
}

export default script;
