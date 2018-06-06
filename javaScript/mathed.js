
function getX(event) {
    var e = event || window.event;
    return e.screenX;
}
function getY(event) {
    var e = event || window.event;
    return e.screenY;
}


function details(evt)
{
    var d;
    d = document.getElementById("hangban");
    d.style.display="block";
    d.innerHTML = '<object type="text/html" data="航班.html" width="100%" height="100%"></object>';

}
function previous()
{
    document.getElementById("previewDiv").style.display="block";
    document.getElementById("previewDiv").innerHTML = '<object type="text/html" data="当前态势.html" width="100%" height="100%"></object>';
}
function previousprotect()
{
    var a;
    a = document.getElementById("baozhang");
    a.style.display="block";
    a.innerHTML = '<object type="text/html" data="当前保障.html" width="100%" height="100%"></object>';
}
function massage()
{
    var a;
    a = document.getElementById("xiaoxi");
    a.style.display="block";
    a.innerHTML = '<object type="text/html" data="消息.html" width="100%" height="100%"></object>';
}
function liebiao()
{
    var a;
    a = document.getElementById("liebiao");
    a.style.display="block";
    a.innerHTML = '<object type="text/html" data="航班详情.html" width="100%" height="100%"></object>';
}




function theplain(evt) {
    var x , y,d;
    x = getX(evt);
    y = getY(evt);
    d = document.getElementById("plainnum");
    d.position="absolute";
    d.style.top=y+"px";
    d.style.left=x+"px";
    var rect = evt.target;
    rect.setAttributeNS(null, "fill", "yellow")
    document.getElementById('plainnum').style.display="block";
}
function  remove(evt) {
    var rect = evt.target;
    rect.setAttributeNS(null, "fill", "st11")
    document.getElementById("plainnum").style.display="none";
}