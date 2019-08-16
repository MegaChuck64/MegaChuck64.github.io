Storage.prototype.setObj =
    function (key, obj)
    {
        return this.setItem(key, JSON.stringify(obj));
    }

Storage.prototype.getObj =
    function (key)
    {
        return JSON.parse(this.getItem(key));
    }

    function hexToRgb(hex, alpha) {
        hex   = hex.replace('#', '');
        var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
        var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
        var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
        if ( alpha ) {
           return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        }
        else {
           return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }
     }


function getAllDescendants(el, childNodeList)
{
    childNodeList = childNodeList ? childNodeList : [];

    var children = el.childNodes;

    if (children !== undefined)
    {
        for (var i =0; i < children.length; i++)
        {
            if (children[i].nodeType == 1)
            {
                childNodeList.push(children[i]);
                childNodeList = getAllDescendants(children[i], childNodeList);
            }
        }
    }

    return childNodeList;
}

function findChildByID(el, id, withDescendants)
{
    var children = withDescendants ? getAllDescendants(el) : el.childNodes;

    for (var i = 0; i < children.length; i++)
    {
        if (children[i].id == id)
        {
            return children[i];
        }
    }

    return null;
}