window.setTimeout(function() {
  // put all of your JS code from the lecture here


  $('#plus').on('click',function(){
  	$('input').toggleClass('show');
  })


  
  $('#input').keypress(function(event){
  	if(event.which == 13){
  		var text = ($('input').val());
  		$('input').val('');
  		$('ul').append("<li><span class='cross'><i class='fas fa-trash'></i></span>"+" "+text+"</li>");

  	}
  })

  $('ul').on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	

	event.stopPropagation();
 });
 $('ul').on('click','li',function(){
 	$(this).toggleClass("strike");
 })

}, 200);
