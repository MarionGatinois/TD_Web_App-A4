const APIKEY ='JuGF95FUENVEXAtLIk9TT66lI4eijAUK';
const url_image = 'https://www.nytimes.com/';

function Search(){
  input = document.getElementById('search').value;
  document.body.style.background='white';
  text = document.getElementById("headlines").innerHTML;

  if(input!='')
  {
  search = text.replaceAll(input,"<span>$&</span>");
  document.getElementById("headlines").innerHTML = search;
  }

}

function displayResults(json)
{
  //console.log(json)
  const arrayArticles = json.response.docs;
  //console.log(arrayArticle);
  var result ="" ;

  arrayArticles.map(article=>{
    //console.log(article.headline.main)
    result+=
    "<li> <a href='" + article.web_url + "'>" + article.headline.main + "</a><ul>"
    result+="<li> Abstract : " + article.abstract + "</li>";
    result+="<li> Published on : " + article.pub_date.substring(0,10) + "</li>";
    if(article.multimedia.size!=0){
      try{
      result+=`<li> <img src='${url_image+article.multimedia[0].url}'></li>`;}
      catch{}
    }
    result+="</ul></li>"
  result+="</li>";
  })
  document.getElementById("headlines").innerHTML = result;
}

fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=science&api-key=${APIKEY}`).then(function(result) {
  return result.json();
}).then(function(json) {
  displayResults(json);
});
