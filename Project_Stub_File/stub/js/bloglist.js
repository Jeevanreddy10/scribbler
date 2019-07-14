function fullPost(){
  window.location.href="./post.html";
}

function onDeletePost(){
  document.getElementById('deletePostPrompt').style.display='block';
}


function onCloseDeleteClicked() {
  document.getElementById('deletePostPrompt').style.display='none';
}

var myPost;

myPost = [
          {
            author: "Jimi", 
            title: "Hello there this is Post 1", 
            blogContent: "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.his is the first post A 2011 study conducted by researchers at the University of Minnesota indicated that male and female editors focus on different coverage topics. There was a greater concentration of females in the People and Arts category, while males focus more on Geography and Science.[194] Coverage of topics and selection bias Research conducted by Mark Graham of the Oxford Internet Institute in 2009 indicated that the geographic distribution of article topics is highly uneven. Africa is most underrepresented.[195] Across 30 language editions of Wikipedia, historical articles and sections are generally Eurocentric and focused on recent events.[196] An editorial in The Guardian in 2014 noted that women porn stars are better covered than women writers as a further example.[197]"
          },
          {
            author: "Jimi", 
            title: "Hello there this is Post 2", 
            blogContent: "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.is the first post A 2011 study conducted by researchers at the University of Minnesota indicated that male and female editors focus on different coverage topics. There was a greater concentration of females in the People and Arts category, while males focus more on Geography and Science.[194] Coverage of topics and selection bias Research conducted by Mark Graham of the Oxford Internet Institute in 2009 indicated that the geographic distribution of article topics is highly uneven. Africa is most underrepresented.[195] Across 30 language editions of Wikipedia, historical articles and sections are generally Eurocentric and focused on recent events.[196] An editorial in The Guardian in 2014 noted that women porn stars are better covered than women writers as a further example.[197]" 	
            }
];

for (i=0; i<myPost.length; i++) {
	document.createElement('p');
}