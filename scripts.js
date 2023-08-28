

  const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a lovely day!")
  }

  const formSubmitted = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.subTitle = $('#subTitle').val();
    formData.path = $('#path').val();
    formData.description = $('#description').val();

    console.log(formData);
    postDog(formData);
  } 

  function postDog(dog){
    $.ajax({
      url:'/api/dog',
      type:'POST',
      data:dog,
      success: (result)=>{
        if (result,statusCode === 201) {
          alert('dog post successful');
          getAllDog();
        }
      }
    });
  }
  
  function getAllDog() {
    $("#card-section").empty();
    $.get('/api/dog', (result) => {
        if (result.statusCode === 200) {
            addCards(result.data);
        }
    })
}
  
  const addCards = (items) => {
      items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
            '</div><div class="card-content">'+
            '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
            '<div class="card-reveal">'+
            '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
            '<p class="card-text">'+item.desciption+'</p>'+
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
  }
  
  $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
      formSubmitted();
   })
    $('.modal').modal();
    getAllDog();
    console.log('ready');
  });
