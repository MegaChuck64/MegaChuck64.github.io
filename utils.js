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




function getAllDescendants(el, childNodeList)
{
    childNodeList = childNodeList ? childNodeList : [];

    var children = el.childNodes;

    for (var i =0; i < children.length; i++)
    {
        if (children[i].nodeType == 1)
        {
            childNodeList.push(children[i]);
            childNodeList = getAllDescendants(children[i], childNodeList);
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