setTimeout(function() {
    modal.style.display = "inline-block"
}, 1000)

var close = document.getElementById('close')

close.addEventListener('click', function() {
    modal.style.display = "none"
})

var submit = document.getElementById('submit')

submit.addEventListener('click', function() {
    alert("Thank you for signing up!")
    modal.style.display = "none"

})