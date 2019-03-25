
var pickingColor = false;

function Start()
{
    //body
    document.body.style.backgroundColor = localStorage.getItem("body_color");
    document.getElementById("backgroundColor").value = localStorage.getItem("body_color");

    //nav bar
    document.getElementById("navbar").style.backgroundColor = localStorage.getItem("navbar_color");
    document.getElementById("navbarColor").value = localStorage.getItem("navbar_color");
}

function PickingColor()
{
    pickingColor = true;
}

function ChangeColor(colorPicker, id)
{
    var el = document.getElementById(id);
    el.style.backgroundColor = colorPicker.value;
    localStorage.setItem(id + "_color", colorPicker.value);
    pickingColor = false;
}


function DropdownClick(content)
{
    var el = document.getElementById(content);
    el.classList.toggle("show");
}


window.onclick = function (event)
{
    if (!pickingColor)
    {
        if (!event.target.matches('.dropdownBtn'))
        {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++)
            {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show'))
                {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}