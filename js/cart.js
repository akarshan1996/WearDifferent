/*$(window).scroll(function() {
    if ($(document).scrollTop() > 550) {
        $('.logo').height(120);
    }
    else {
        $('.logo').height(95);
        $('.logo').width(130);
    }
});*/

function cart() {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById('itemsincart').innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open('GET', 'retrieve_items.php', true);
    xmlhttp.send();
}

function deleteitem(id){
    var xmlhttp;
    var cid=id;
    /*alert(cid);*/
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            window.location.reload();
            var element = document.getElementById('ff');
            element.innerHTML = XMLhttp.responseText;
            var script = element.getElementsByTagName('script');
            for (var n = 0; n < script.length; n++) {
                eval(script[n].innerHTML);
            }
        }
    }
    xmlhttp.open('GET', 'delete_items.php?cid='+cid, true);
    xmlhttp.send();
}
function hello() {
    alert('Thanks For Shopping With Us! :)');
}
function data() {
    cart();
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var element = document.getElementById('carthere');
            element.innerHTML = xmlhttp.responseText;
            var arr = element.getElementsByTagName('script');
            for (var n = 0; n < arr.length; n++) {
                eval(arr[n].innerHTML);
            }

        }
    }
    xmlhttp.open('GET', 'carthere.php', true);
    xmlhttp.send();
}


function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}