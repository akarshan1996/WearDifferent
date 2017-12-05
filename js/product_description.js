/*
$(window).scroll(function() {
    if ($(document).scrollTop() > 550) {
        /!*alert('hi');*!/
        $('.logo').height(120);

    }
    else {
        $('.logo').height(95);
        $('.logo').width(130);
    }});
*/


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


function addToCart(id) {
    /*var href = $('img').attr('href');
    alert(href);
    var url_string = "http://localhost/php/pwa_project/cart.html?id="+id;
    var myParam = url_string.split('id=')[1];*/

    var myParam = id;
    //alert(myParam);
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

    //alert('Item has been added');
}

function data() {
    cart();
    var url_string = window.location.href; //window.location.href
    /*var url = new URL(url_string);
    var c = url.searchParams.get("c");
    console.log(c);*/
    var myParam = url_string.split('id=')[1];
    var obj,x, table_name,id_table, xmlhttp, myObj,title = "", id ="",big_photo;
    //obj = {"table": "product_details"};
    var obj1 = {"id":myParam};
    //table_name = JSON.stringify(obj);
    id_table = JSON.stringify(obj1);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myObj = JSON.parse(xmlhttp.responseText);
            console.warn(myObj);
            for(x in myObj) {
                id = myObj[x][0];
                title = myObj[x][1];
                //console.log(title);
                photo = myObj[x][2];
                price = myObj[x][3];
                cost = myObj[x][4];
                discount = myObj[x][5];
                big_photo = photo.slice(0, 14) + "1" + photo.slice(14,18);
                console.log(big_photo);
                document.getElementById("title").innerHTML = title;
                document.getElementById("image").src = big_photo;
                document.getElementById("price").innerHTML = price;
                document.getElementById("cost").innerHTML = cost;
                document.getElementById("discount").innerHTML = discount+"<small> %OFF</small>";
            }
        }
    }
    xmlhttp.open('GET', 'main_product_description.php?id=' + id_table, true);
    xmlhttp.send();
}





$(document).ready(function(){
    //-- Click on detail
    $("ul.menu-items > li").on("click",function(){
        $("ul.menu-items > li").removeClass("active");
        $(this).addClass("active");
    })

    $(".attr,.attr2").on("click",function(){
        var clase = $(this).attr("class");

        $("." + clase).removeClass("active");
        $(this).addClass("active");
    })

    //-- Click on QUANTITY
    $(".btn-minus").on("click",function(){
        var now = $(".section > div > input").val();
        if ($.isNumeric(now)){
            if (parseInt(now) -1 > 0){ now--;}
            $(".section > div > input").val(now);
        }else{
            $(".section > div > input").val("1");
        }
    })
    $(".btn-plus").on("click",function(){
        var now = $(".section > div > input").val();
        if ($.isNumeric(now)){
            $(".section > div > input").val(parseInt(now)+1);
        }else{
            $(".section > div > input").val("1");
        }
    })
})