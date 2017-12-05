/*
$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        alert('hi');
        $('.logo').height(120);
    }
    else {
        $('.logo').height(95);
        $('.logo').width(130);
    }});
*/
var id= "";

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

function data() {
    cart();
    var obj,x,y, dbParam, xmlhttp, myObj,txt = "",title = "";
    obj = {"table": "product_details"};
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myObj = JSON.parse(xmlhttp.responseText);
            console.warn(myObj);
            for(x in myObj){
                id = myObj[x][0];
                title = myObj[x][1];
                photo = myObj[x][2];
                //console.log(photo);
                price = myObj[x][3];
                cost = myObj[x][4];
                discount = myObj[x][5];
                document.getElementById("get_cart_process").innerHTML += "<div class='col-sm-3'>\n" +
                    "            <div class='brief_product'>\n" +
                    "<a href='product_description.html?id="+id+"'>" +
                    "              <div class='image_product'><img src='"+photo+"' alt='not found'></div>\n" +
                    "             </a>" +
                    "              <div><h5><strong>"+title+"</strong></h5></div>\n" +
                    "                <div><span class='cost'><del>"+"₹"+cost+"</del></span><span class='price'>"+"₹"+price+"</span><span class='discount' style='color:red'>"+discount+"% OFF</span></div>\n" +
                    "                <div class='row'><div style='text-decoration:none;'>"+
                    "<a href=cart.html>"+
                    "               <button class='btn btn-primary col-sm-6' name='button_buy' onclick='addToCart("+id+")'>BUY</button></a></div>\n" +
                    "                <div>"+
                    //"<a href='?id="+id+"'>"+
                    "<button class='btn btn-danger col-sm-7 text-center' name='button_buy' onclick='addToCart("+id+")'>ADD TO CART </button>  </div>\n" +
                    "                </div>\n"+
                    "            </div>\n" +
                    "          </div>";
            }
        }
    }
    xmlhttp.open('GET', 'main_php.php?x=' + dbParam, true);
    xmlhttp.send();
}

function addToCart(id) {
    /*var href = $('img').attr('href');
    alert(href);
    var url_string = "http://localhost/php/pwa_project/cart.html?id="+id;
    var myParam = url_string.split('id=')[1];*/

    var myParam = id;
    var obj1, x, id_table, xmlhttp, myObj;
    obj1 = {"id" : myParam};
    id_table = JSON.stringify(obj1);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            myObj = JSON.parse(xmlhttp.responseText);
            console.warn(myObj);

        }
    }
    xmlhttp.open('GET', 'addtocart.php?id=' + id_table, true);
    xmlhttp.send();
    alert('Item has been added');
}


/*function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}*/
