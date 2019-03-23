
function Start()
{
    document.body.style.backgroundColor = localStorage.getItem("bColor");
    document.getElementById("backgroundColor").value = localStorage.getItem("bColor");
}

function ChangeColor(colorPicker)
{
    document.body.style.backgroundColor = colorPicker.value;
    localStorage.setItem("bColor", colorPicker.value);
}