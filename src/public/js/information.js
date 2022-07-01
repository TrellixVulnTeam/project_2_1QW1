let editBtn = document.querySelector('#edit');
let editForm = document.querySelector('.editinfo');
let formoff = document.querySelector('#off');
editBtn.addEventListener('click', () => {
    editForm.classList.add('active');
});
formoff.addEventListener('click', () => {
    editForm.classList.remove('active');
})

var formUploadAvatar = document.querySelector('.image form')
document.querySelector('.image img').onclick=function(e) {
    Object.assign(formUploadAvatar.style, {
        display: 'block',
    })
}
document.querySelector('.content').onclick=function(e) {
    Object.assign(formUploadAvatar.style, {
        display: 'none',
    })
}
document.querySelector('.editinfo').onclick=function(e) {
    Object.assign(formUploadAvatar.style, {
        display: 'none',
    })
}
document.querySelector('.experience').onclick=function(e) {
    Object.assign(formUploadAvatar.style, {
        display: 'none',
    })
}

var imgElement=document.querySelector('.image img')
if(imgElement.src=='http://localhost:5000/uploads/') imgElement.src="http://localhost:5000/image/user.svg"
var dataString=document.querySelector('.image form input')
console.log(document.querySelector('.image form input').textContent)
// $(".image form").submit(function(e) {

//     e.preventDefault(); // avoid to execute the actual submit of the form.

//     var form = $(this);
//     var actionUrl = form.attr('action');
    
//     $.ajax({
//         type: "POST",
//         url: actionUrl,
//         data: dataString, // serializes the form's elements.
//         success: function(data)
//         {
//             alert('Đã thêm ảnh đại diện. Tải lại trang để hiện thị!!!'); // show response from the php script.
//         }
//     });
    
// });
$('.image form').submit( function(e){
    e.preventDefault();
    var files = $('.image form .submit').get(0).files;
    console.log(files)
      // create a FormData object which will be sent as the data payload in the
      // AJAX request
        var formData = new FormData();
            // loop through all the selected files and add them to the formData object
        for (var i = 0; i < files.length(); i++) {
            var file = files[i];
            var tmppath = URL.createObjectURL(event.target.files[0]);
            // add the files to formData object for the data payload
            formData.append('uploads', tmppath);
  
      $.ajax({
        url: '/information/upload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(data){
            console.log('upload successful!\n' + data);
        }
      })
    }
});