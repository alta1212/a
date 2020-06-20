$('#ok').click(function()
{
    var str = $('input').val();
    if(/^[a-zA-Z0-9]*$/.test(str) == false||str=="") {
        alert("Bạn nhập sai"); 
}
})

