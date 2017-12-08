
//   function getNav() {
// var pageLoc = id;
//   $.get(pageLoc, function (data) {
// $.get("h ttp://stickyginger.co.za/test/kdap/listings/?search_keywords=&search_location=&search_categories%5B%5D=&use_search_radius=on&search_radius=10&search_lat=0&search_lng=0&search_region=&search_context=21", function(data){
 $.get("http://thekidsapp.com/app/navigation-bar-wrapper-assets.html", function (data) {
  //  $.get("http://localhost/KIDS/WP-down/navigation-bar-wrapper.html", function (data) {
   

    $('#nav-container').html(data); //

});
               // document.body.className = "bckimg nobckimg";
               // setHeroBck();

         //   }

function testGet() {

  
     $.get("https://thekidsapp.com/specials-signup/", function (data) {
   // $.get("http://localhost/KIDS/WP-down/assets/signup.html", function (data) {
          //  $('#page').html(data); 
         $('#content-main').html(data); 

    });

     $('#footer1').css("display", 'none'); 
   //  $('#masthead').css("display", 'none');
     setTimeout(function () { document.getElementById("masthead-app").className = "hide";  }, 3000);
     
}

//

$("a").click(function (event) {
    event.preventDefault();
   
});

function reloadHomePage() {
    window.location = "../index.html";

}
