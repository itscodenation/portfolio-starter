


const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}
console.log('stuff')

$('.Ele').click(function(){
  $('.imger').attr("src","https://s3-us-west-2.amazonaws.com/schoolmint-chooser-media/oakland/images/606-2.jpg");
  $('.cptner').text("My Elementary School");
  console.log('stuff1')
});

$('.Middle').click(function(){
  $('.imger').attr("src","https://s3-us-west-2.amazonaws.com/schoolmint-chooser-media/oakland/images/642.jpg");
  $('.cptner').text("My Middle School");
  console.log('stuff2')
});

$('.High').click(function(){
  $('.imger').attr("src","https://upload.wikimedia.org/wikipedia/commons/b/b9/Oakland_Technical_High.jpg");
  $('.cptner').text("My High School");
  console.log('stuff3')
}); 