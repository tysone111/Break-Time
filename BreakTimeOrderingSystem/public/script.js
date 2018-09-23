var coffeeItem = document.getElementsByClassName("coffeeItem");
var productText = document.getElementsByClassName("productText");
var productTitle = document.getElementsByClassName("productTitle");
var coffeeImg = document.getElementsByClassName("coffeeImg");
var price = document.getElementsByClassName("price");
var addCream1 = document.getElementsByClassName("addCream");
var addMarshmallows1 = document.getElementsByClassName("addMarshmallows");
var addSoy1 = document.getElementsByClassName("addSoy");
var customizeOrder = document.getElementsByClassName("customizeOrder");
var xCross = document.getElementsByClassName("xCross");
var totalPrice = document.getElementById("totalPrice");
var total = document.getElementById("total");
var table = document.getElementById("table");
var z = 0;
var i;

//Add cream checkbox is checked/unchecked
function addCream() 
{
    for (i = 0; i < coffeeItem.length; i++) 
    {
        if (addCream1[i].checked == true) 
        {
            if (customizeOrder[i].style.display == "block")
            {
                price[i].innerHTML = parseInt(price[i].innerHTML) + 1;
            }
        }
        else if (addCream1[i].checked == false && customizeOrder[i].style.display == "block")
        {
            price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
        }  
    }
}

//Add Marshmallows checkbox is checked/unchecked
function addMarshmallows() 
{
    for (i = 0; i < coffeeItem.length; i++) 
    {
        if (addMarshmallows1[i].checked == true) 
        {
            if (customizeOrder[i].style.display == "block")
            {
                price[i].innerHTML = parseInt(price[i].innerHTML) + 1;
            }
        }
        else if (addMarshmallows1[i].checked == false && customizeOrder[i].style.display == "block")
        {
            price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
        }  
    }    
}

//Add Soy checkbox is checked/unchecked
function addSoy()
{
    for (i = 0; i < coffeeItem.length; i++) 
    {        
        if (addSoy1[i].checked == true) 
        {
            if (customizeOrder[i].style.display == "block")
            {
                price[i].innerHTML = parseInt(price[i].innerHTML) + 1;
            }
        }
        else if (addSoy1[i].checked == false && customizeOrder[i].style.display == "block") 
        {
            price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
        }  
    }
}


//Coffee item mouse events
for (i = 0; i < coffeeItem.length; i++) 
{
    //User hovers over coffee item
    coffeeItem[i].onmouseover = function() 
    {
        this.style.width = "300px";
        this.style.height = "auto";
        this.style.marginLeft = "-10px";
        this.style.marginRight = "-10px";
        this.style.transition = "0.5s";
        this.style.zIndex = 2;
        this.style.background = "rgba(255,255,255,0.8)";
        this.style.color = "black";

        for (i = 0; i < coffeeItem.length; i++) 
        {
            if (coffeeItem[i].style.color == "black") 
            {
                coffeeImg[i].style.width = "220px";
                coffeeImg[i].style.height = "220px";
                coffeeImg[i].style.transition = "0.5s";
                coffeeImg[i].style.padding = "0px";
            }
        }
    }
    
    //User hovers off coffee item
    coffeeItem[i].onmouseout = function() 
    {
        this.style.width = "280px";
        this.style.height = "auto";
        this.style.marginLeft = "0px";
        this.style.marginBottom = "0px";
        this.style.marginRight = "0px";
        this.style.transition = "0.5s";
        this.style.zIndex = 1;
        this.style.background = "rgba(0,0,0,0.8)";
        this.style.color = "white";

        for (i = 0; i < coffeeItem.length; i++) 
        {
            if (coffeeItem[i].style.color == "white") 
            {
                coffeeImg[i].style.width = "200px";
                coffeeImg[i].style.height = "200px";
                coffeeImg[i].style.transition = "0.5s";
                coffeeImg[i].style.padding = "10px";
            }
        }
    }        
    
    //User clicks on coffee item
    coffeeItem[i].onmousedown = function()
    {
        for (i = 0; i < coffeeItem.length; i++) 
        {
            if (coffeeItem[i].style.color == "black")
            {
                customizeOrder[i].style.display = "block";
                xCross[i].style.display = "block";
                if (customizeOrder[i].style.display != "none") 
                {
                    customizeOrder[i].style.opacity = 1;   
                }
                else 
                {
                    customizeOrder[i].style.display = "none";
                }
            }
            else 
            {
                customizeOrder[i].style.display = "none";
                xCross[i].style.display = "none";
                
                if (addCream1[i].checked == true && customizeOrder[i].style.display == "none")
                {
                    price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
                    addCream1[i].checked = false;
                }
                
                if (addMarshmallows1[i].checked == true && customizeOrder[i].style.display == "none")
                {
                    price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
                    addMarshmallows1[i].checked = false;
                }

                if (addSoy1[i].checked == true && customizeOrder[i].style.display == "none")
                {
                    price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
                    addSoy1[i].checked = false;
                }                
            }
        }
    }   
}

//User clicks on 'X' on coffee item
function xCrossExit() 
{
    for (i = 0; i < coffeeItem.length; i++) 
    {
        customizeOrder[i].style.display = "none";
        xCross[i].style.display = "none";
        
        if (addCream1[i].checked == true && customizeOrder[i].style.display == "none")
        {
            price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
            addCream1[i].checked = false;
        }

        if (addMarshmallows1[i].checked == true && customizeOrder[i].style.display == "none")
        {
            price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
            addMarshmallows1[i].checked = false;
        }

        if (addSoy1[i].checked == true && customizeOrder[i].style.display == "none")
        {
            price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
            addSoy1[i].checked = false;
        }      
    }
}

//Change mouse cursor when coffee item is selected/unselected
function changes() 
{
    for (i = 0; i < coffeeItem.length; i++) 
    {
        if (customizeOrder[i].style.display == "block")
        {
            coffeeItem[i].style.cursor = "auto";
        }
        else 
        {
            coffeeItem[i].style.cursor = "pointer";
        }
    }
}
setInterval(changes, 100);


//If add to order button is clicked
function addItem()
{
    z = table.rows.length - 1;
    for (i = 0; i < coffeeItem.length; i++) 
    {
        if (customizeOrder[i].style.display == "block") 
        {
            if (z > 10) 
            {
                alert("Error. You can only have 10 items max in your order bag.", "Test");
            }
            else 
            {                
                var hideRow = document.getElementById("tableData");
                hideRow.style.display = "none";
                var addRow = table.insertRow(z);
                addRow.className = "orderTableRows";
                var a = addRow.insertCell(0);
                var b = addRow.insertCell(1);
                var c = addRow.insertCell(2);
                a.innerHTML = "<button class='removeItem'>Remove Item</button>"; //Remove Item button
                b.innerHTML = productTitle[i].innerHTML; //Item description
                c.innerHTML = price[i].innerHTML; //Item Price
                totalPrice.style.display = "block";

                customizeOrder[i].style.display = "none";
                xCross[i].style.display = "none";


                if (addCream1[i].checked == true && customizeOrder[i].style.display == "none")
                {
                    b.innerHTML += "\r\n~ Add Cream";
                    price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
                    addCream1[i].checked = false;
                }
                if (addMarshmallows1[i].checked == true && customizeOrder[i].style.display == "none")
                {
                    b.innerHTML += "\r\n~ Add Marshmallows";
                    price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
                    addMarshmallows1[i].checked = false;
                }
                if (addSoy1[i].checked == true && customizeOrder[i].style.display == "none")
                {
                    b.innerHTML += "\r\n~ Use Soy Milk";
                    price[i].innerHTML = parseInt(price[i].innerHTML) - 1;
                    addSoy1[i].checked = false;
                }
            }
        }
    }
}

//Mouse events on table, and remove items
function highlightTable() 
{
    var removeItem = document.getElementsByClassName("removeItem");
    for (i = 0; i < table.rows.length; i++) 
    {
        //User hovers over table row
        table.rows[i+1].onmouseover = function() 
        {
            this.style.backgroundColor = "red";
            this.style.transition = "0.5s";
        }
        //User hovers off table row
        table.rows[i+1].onmouseout = function() 
        {
            this.style.backgroundColor = "black";
            this.style.transition = "0.5s";
        } 
        //User clicks on remove item
        removeItem[i].onclick = function()
        {
            this.style.color = "red";
            for (i = 0; i < removeItem.length; i++)
            {
                if (removeItem[i].style.color != "red")
                {
                    
                }
                else if (removeItem[i].style.color == "red")
                {
                    table.deleteRow(i+1);
                    if (table.rows.length <= 2) 
                    {
                        var hideRow = document.getElementById("tableData");
                        hideRow.colSpan = 3;
                        hideRow.style.display = "block";
                        totalPrice.style.display = "none";
                    }
                }
            }
        }
    }
}
setInterval(highlightTable,1);

//Display total price of order
function totalPrice1() 
{
    var g = 0;
    for (i = 0; i < table.rows.length; i++) 
    {
        g += parseInt(table.rows[i+1].cells[2].innerHTML);
        total.innerHTML = g;
    }
}
setInterval(totalPrice1,100);

//Confirm button
var confirm = document.getElementById("confirm");
var cancel = document.getElementById("cancelMyOrder");
var cancel2 = document.getElementById("cancelMyOrder2");
var orderForm = document.getElementById("orderForm");
var orderBag = document.getElementById("orderBag");
var confirmMyOrder = document.getElementById("confirmMyOrder");
var finalTotalPrice = document.getElementById("finalTotalPrice");
var userOrderDetails = document.getElementById("userOrderDetails");
var addDiscount = document.getElementById("addDiscount");
var discountText = document.getElementById("discountText");

cancel.onclick = function() 
{
    location.href = "../../index.html";
}
cancel2.onclick = function() 
{
    location.href = "../../index.html";
}
confirm.onclick = function() 
{
    //Need to have less than 10 items if ordering
    z = table.rows.length - 2;
    if (z > 0)
    {   
        orderForm.style.display = "none";
        orderBag.style.display = "none";
        confirmMyOrder.style.display = "block";
        for (i = 1; i < table.rows.length; i++) 
        {
            var k = table.rows[i].cells[1].innerHTML;
            var l = table.rows[i].cells[2].innerHTML;
            userOrderDetails.innerHTML += "Item " + i + ": " + "$" + l + ".00 -" + k + "\r\n\r\n";
            //Display total price
            finalTotalPrice.innerHTML = "TOTAL (No Discount): $" + total.innerHTML + ".00";
        }       
    }
    else 
    {
        alert("Error. You have no items in your order bag.");
    }
}

addDiscount.onclick = function() 
{
    if (discountText.value == "staff") 
    {
        finalTotalPrice.innerHTML = "TOTAL (with 50% Staff Discount): $" + (parseInt(total.innerHTML) * 0.5);
    }
}
