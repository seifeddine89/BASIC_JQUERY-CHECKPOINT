$("#boutton1").click(function () {

    $('.description').css('font-weight') === "700" ? $('.description').css('font-weight', 'normal') : $('.description').css('font-weight', 'bold')
    $('.description').css('font-weight') === "700" ? $('#boutton1').css('background-color', 'grey') : $('#boutton1').css('background-color', 'blue')


})

$("#boutton2").click(function () {
    $('.description').css('font-style') === "italic" ? $('.description').css('font-style', 'normal') : $('.description').css('font-style', 'italic')
    $('.description').css('font-style') === "italic" ? $('#boutton2').css('background-color', 'grey') : $('#boutton2').css('background-color', 'blue')
})


$("#boutton3").click(function () {
   
    $('.description').css('text-decoration-line') === "underline" ? $('.description').css('text-decoration-line','none') : $('.description').css('text-decoration-line','underline')
    $('.description').css('text-decoration-line') === "underline" ? $('#boutton3').css('background-color', 'grey') : $('#boutton3').css('background-color', 'blue')

})


$("#police").change(function () {

  $('.description').css('font-family',$('#police').val())
   
  
})

$("#size").change(function (){


    $('.description').css('font-size',$('#size').val()+"px")
    })

