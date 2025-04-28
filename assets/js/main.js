


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("#enviarcorreo").click(function() {
    alert("El correo fue enviado correctamente");
})

$('h2').dblclick(function(){
    $(this).css('color', 'red')
})

$('.card-title1').click(function(){
    $('.card-text1').toggle()
})

