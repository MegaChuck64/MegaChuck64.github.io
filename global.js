

function includeHTML()
{
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++)
    {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file)
        {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function ()
            {
                //finished loading
                if (this.readyState == 4)
                {
                    //okay status
                    if (this.status == 200) 
                    {
                        //This is what we do
                        elmnt.innerHTML = this.responseText;
                        LoadTheme(elmnt);
                    }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();

            /* Exit the function: */
            return;
        }
    }
}










var pickingTheme = false;

function LoadTheme(doc)
{
    //body
    document.body.style.backgroundColor = localStorage.getItem("body_color");
    var bCol = findChildByID(doc, "backgroundColor", true);
    if (bCol != null) bCol.value = localStorage.getItem("body_color");

    //nav bar
    var navbar = findChildByID(doc, "navbar", true);
    if (navbar != null) navbar.style.backgroundColor = localStorage.getItem("navbar_color");
    var nCol = findChildByID(doc, "navbarColor", true);
    if (nCol != null) nCol.value = localStorage.getItem("navbar_color");

}

function PickingTheme(val)
{
    pickingTheme = val;
}

function ChangeColor(colorPicker, id)
{
    var el = document.getElementById(id);
    el.style.backgroundColor = colorPicker.value;
    localStorage.setItem(id + "_color", colorPicker.value);
}



function DropdownClick(content)
{
    var el = document.getElementById(content);
    el.classList.toggle("show");
}


window.onclick = function (event)
{
    if (!pickingTheme)
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