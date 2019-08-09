var myObj, i, j, k, x = "", y="";
//var fax = "+XXXXXXX";
var fax = "";
var processingfee=10.0;
var TaxRate = 6.625;
var DeliveryCharges = 3.00;
var MinOrder=0;
var MaxHour=24;
var owneremail= "habiburrehmannsr@gmail.com";
var rest_address="XX XXX XXX";
var website="www.example.com";
var DicountPersent=0;
var call = "1231-213-21321";
var sms="+213213";
var number = Math.random() // 0.9394456857981651
number.toString(14);

var uniqueid = number.toString(14).substr(2, 9);
var finalcart="";
var finalcartforpdf="";
var CARTITEMSFORPDF="";
var CARTITEMS="";
var CARTITEMS1="";
var CARTITEMS12="";
var totalamounts;
var globalmenuitem;
var globalmenuitem1;
var arrycart=[];
var firstname=document.getElementById("cognitousername").value;
var CognitEmail=document.getElementById("cognitoemail").value;
var Cognitouserphoneno=document.getElementById("cognitophone").value;
var restaurantname = "Rest_NAme";
var rest_id = "XXX";
var i, j, x = "";
var
myObj = {
	"Restaurant_Hours":[{"day":"Monday","StartTime":"10","EndTime":"21"},{"day":"Tuesday","StartTime":"11","EndTime":"23"},{"day":"Wednesday","StartTime":"08","EndTime":"18"}
	,{"day":"Thursday","StartTime":"08","EndTime":"18"}
	,{"day":"Friday","StartTime":"08","EndTime":"18"}
	,{"day":"Saturday","StartTime":"08","EndTime":"18"}
	,{"day":"Sunday","StartTime":"00","EndTime":"00"}],
    "MenuJson":[{"Category_name":"Pizza","category_id":13052,
	"MenuItem":[{"MenuItemDetail":"Classic cheese or create your own pizza. <b> Medium 14 inches $ 14, Large 16 inches $ 16<b>",
	"MenuItemPrice":"",
	"Choices":[
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20696,"ChoicePrice":1},
	
	{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20697,"ChoicePrice":1},
	
			
	,{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20698,"ChoicePrice":""},
	{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20699,"ChoicePrice":""},
	{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20700,"ChoicePrice":""},
	{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20701,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20702,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20703,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20704,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20705,"ChoicePrice":""},
	{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20706,"ChoicePrice":""}],

	"MenuItemId":197027,"MenuItemName":"Cheese Pizza ",
	"Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":14.00,
	"Size":"Medium 14 inches"},
	{"Menu_item_Detail_detail":"","Price":16.00,"Size":"large 16 inches"}],
	"MenuItemCode":4979661,"Topping":{}},{"MenuItemDetail":"Very famous.","MenuItemPrice":18.25,
	"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,
	"WholePrice":4.0,"id":20707,"ChoicePrice":""},
	
	{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20708,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20709,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20710,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20711,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20712,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20713,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20714,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20715,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20716,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20717,"ChoicePrice":""}],"MenuItemId":197028,"MenuItemName":"Tomato Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":18.25,"Size":"large 16 inches"}],"MenuItemCode":14241420,
	"ExtraItems":{"ExtraPrice":1,"id":123213,"Extraname":"sdasds"}},{"MenuItemDetail":"Classic cheese or create your own pizza.","MenuItemPrice":17.25,"Choices":[,
	,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20718,"ChoicePrice":""}
	,{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20719,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20720,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20721,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20722,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20723,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20724,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20725,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20726,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20727,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20728,"ChoicePrice":""}],"MenuItemId":197029,"MenuItemName":"Sicilian Cheese Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":17.25,"Size":"large 16 inches"}],"MenuItemCode":10535719,
	"ExtraItems":{}},{"MenuItemDetail":"Classic cheese or create your own pizza. Our famous tomato pizza with mozzarella cheese.","MenuItemPrice":18.25,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20729,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20730,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20731,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20732,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20733,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20734,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20735,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20736,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20737,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20738,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20739,"ChoicePrice":""}],"MenuItemId":197030,"MenuItemName":"Brooklyn Cheese Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":18.25,"Size":"large 16 inches"}],"MenuItemCode":3215355,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With 5 toppings.(Please select 5 toppings)","MenuItemPrice":18.25,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20740,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20741,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20742,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20743,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20744,"ChoicePrice":""},
	{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20745,"ChoicePrice":""},
	{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20746,"ChoicePrice":""},
	{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20747,"ChoicePrice":""},
	{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20748,"ChoicePrice":""},
	{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20749,"ChoicePrice":""},
	{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20750,"ChoicePrice":""}],
	"MenuItemId":197031,"MenuItemName":"House Special Pizza",
	"Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":18.25,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.25,"Size":"large 16 inches"}],"MenuItemCode":4167180,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Specialty Pizza","category_id":13053,"MenuItem":[{"MenuItemPrice":16.95,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20751,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20752,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20753,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20754,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20755,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20756,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20757,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20758,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20759,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20760,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20761,"ChoicePrice":""}],"MenuItemId":197032,"MenuItemName":"BBQ Chicken Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":16.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.0,"Size":"large 16 inches"}],"MenuItemCode":3490183,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Ricotta cheese, garlic, tomatoes. Red or white.","MenuItemPrice":16.95,"Choices":[{"ChoiceName":"Red Sauce","id":20762,"ChoicePrice":""},{"ChoiceName":"White Sauce","id":20763,"ChoicePrice":""},
	,
	
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20764,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20765,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20766,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20767,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20768,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20769,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20770,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20771,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20772,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20773,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20774,"ChoicePrice":""}],"MenuItemId":197033,"MenuItemName":"Broccoli Pizza","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11954254,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Ricotta cheese, garlic, tomatoes. Red or white.","MenuItemPrice":16.95,"Choices":[
	,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20775,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20776,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20777,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20778,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20779,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20780,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20781,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20782,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20783,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20784,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20785,"ChoicePrice":""},{"ChoiceName":"Red Sauce","id":20786,"ChoicePrice":""},{"ChoiceName":"White Sauce","id":20787,"ChoicePrice":""}],"MenuItemId":197034,"MenuItemName":"Spinach Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":16.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.0,"Size":"large 16 inches"}],"MenuItemCode":9616520,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Sausage, ham, bacon, pepperoni, ground beef.","MenuItemPrice":16.95,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20788,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20789,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20790,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20791,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20792,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20793,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20794,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20795,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20796,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20797,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20798,"ChoicePrice":""}],"MenuItemId":197035,"MenuItemName":"Meat Lover's Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":16.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.0,"Size":"large 16 inches"}],"MenuItemCode":6474737,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Spinach, broccoli, garlic, peppers, tomatoes, mushrooms, onions. Red or white.","MenuItemPrice":16.95,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20799,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20800,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20801,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20802,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20803,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20804,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20805,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20806,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20807,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20808,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20809,"ChoicePrice":""},{"ChoiceName":"Red Sauce","id":20810,"ChoicePrice":""},{"ChoiceName":"White Sauce","id":20811,"ChoicePrice":""}],"MenuItemId":197036,"MenuItemName":"Veggie Lover's Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":16.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.0,"Size":"large 16 inches"}],"MenuItemCode":12546506,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":16.95,"Choices":[
	,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20812,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20813,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20814,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20815,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20816,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20817,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20818,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20819,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20820,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20821,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20822,"ChoicePrice":""}],"MenuItemId":197037,"MenuItemName":"Chicken Alfredo Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":16.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.0,"Size":"large 16 inches"}],"MenuItemCode":6134747,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":17.95,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20823,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20824,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20825,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20826,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20827,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20828,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20829,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20830,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20831,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20832,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20833,"ChoicePrice":""}],"MenuItemId":197038,"MenuItemName":"Chicken Buffalo Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":17.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":19.0,"Size":"large 16 inches"}],"MenuItemCode":15158570,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Comes with shrimp, eggplant, calamari and marinara sauce","MenuItemPrice":17.95,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20834,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20835,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20836,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20837,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20838,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20839,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20840,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20841,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20842,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20843,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20844,"ChoicePrice":""}],"MenuItemId":197039,"MenuItemName":"Seafood Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":17.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":19.0,"Size":"large 16 inches"}],"MenuItemCode":14405815,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":16.95,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20845,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20846,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20847,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20848,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20849,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20850,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20851,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20852,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20853,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20854,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20855,"ChoicePrice":""}],"MenuItemId":197040,"MenuItemName":"Taco Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":16.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.0,"Size":"large 16 inches"}],"MenuItemCode":8630339,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":16.95,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20856,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20857,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20858,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20859,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20860,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20861,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20862,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20863,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20864,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20865,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20866,"ChoicePrice":""}],"MenuItemId":197041,"MenuItemName":"Baked Ziti Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":16.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.0,"Size":"large 16 inches"}],"MenuItemCode":10111480,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Fresh mozzarella cheese, tomatoes, garlic.","MenuItemPrice":16.95,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20867,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20868,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20869,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20870,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20871,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20872,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20873,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20874,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20875,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20876,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20877,"ChoicePrice":""}],"MenuItemId":197042,"MenuItemName":"Capri Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":16.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.0,"Size":"large 16 inches"}],"MenuItemCode":11523932,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":21.5,"Choices":[{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20878,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20879,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20880,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20881,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20882,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20883,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20884,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20885,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20886,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20887,"ChoicePrice":""}],"MenuItemId":197043,"MenuItemName":"Stuffed Cheesesteak Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":21.5,"Size":"large 16 inches"}],"MenuItemCode":15734239,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":19.5,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20888,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20889,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20890,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20891,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20892,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20893,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20894,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20895,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20896,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20897,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20898,"ChoicePrice":""}],"MenuItemId":197044,"MenuItemName":"Stuffed Italian Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":19.5,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":20.5,"Size":"large 16 inches"}],"MenuItemCode":4146224,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Eggplant, mushrooms, green peppers. Sprinkled with garlic.","MenuItemPrice":16.95,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20899,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20900,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20901,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20902,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20903,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20904,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20905,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20906,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20907,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20908,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20909,"ChoicePrice":""}],"MenuItemId":197045,"MenuItemName":"Garden White Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":16.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.0,"Size":"large 16 inches"}],"MenuItemCode":2409028,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Ham and pineapple.","MenuItemPrice":17.95,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20910,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20911,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20912,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20913,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20914,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20915,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20916,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20917,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20918,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20919,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20920,"ChoicePrice":""}],"MenuItemId":197046,"MenuItemName":"Hawaiian Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":17.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":19.0,"Size":"large 16 inches"}],"MenuItemCode":4941414,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":17.25,"Choices":[,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20921,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20922,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20923,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20924,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20925,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20926,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20927,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20928,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20929,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20930,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20931,"ChoicePrice":""}],"MenuItemId":197047,"MenuItemName":"Greek Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":17.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":19.0,"Size":"large 16 inches"}],"MenuItemCode":10555688,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":17.95,"Choices":[,
	,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20932,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20933,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20934,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20935,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20936,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20937,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20938,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20939,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20940,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20941,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20942,"ChoicePrice":""}],"MenuItemId":197048,"MenuItemName":"Chicken Bacon Ranch Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":17.95,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":19.0,"Size":"large 16 inches"}],"MenuItemCode":10312010,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":18.0,"Choices":[
	,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20943,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20944,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20945,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20946,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20947,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20948,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20949,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20950,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20951,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20952,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20953,"ChoicePrice":""},{},
	,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20955,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20956,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20957,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20958,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20959,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20960,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20961,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20962,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20963,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20964,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20965,"ChoicePrice":""}],"MenuItemId":197049,"MenuItemName":"Chicken Pesto Pizza","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":18.0,"Size":"Medium 14 inches"},{"Menu_item_Detail_detail":"","Price":18.5,"Size":"large 16 inches"}],"MenuItemCode":10371714,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Pizza by the Slice","category_id":13054,"MenuItem":[{"MenuItemPrice":2.25,"Choices":[{},
	,
	
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20967,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20968,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20969,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20970,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20971,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20972,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20973,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20974,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20975,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20976,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20977,"ChoicePrice":""}],"MenuItemId":197050,"MenuItemName":"Cheese Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7910800,"ExtraItems":{}},{"MenuItemPrice":"","Choices":[{},,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20979,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20980,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20981,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20982,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20983,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20984,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20985,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20986,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20987,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20988,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20989,"ChoicePrice":""}],"MenuItemId":197051,"MenuItemName":"Sicilian Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":16279868,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{},,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20991,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20992,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20993,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20994,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20995,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20996,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20997,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20998,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":20999,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21000,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21001,"ChoicePrice":""}],"MenuItemId":197052,"MenuItemName":"BBQ Chicken Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":16818323,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Ricotta cheese, garlic, tomatoes. Red or white.","Choices":[{"ChoiceName":"Slice","id":21002,"ChoicePrice":3.75},{"ChoiceName":"Red Sauce","id":21003,"ChoicePrice":""},{"ChoiceName":"White Sauce","id":21004,"ChoicePrice":""},,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21005,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21006,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21007,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21008,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21009,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21010,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21011,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21012,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21013,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21014,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21015,"ChoicePrice":""}],"MenuItemId":197053,"MenuItemName":"Broccoli Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4835916,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Slice","id":21016,"ChoicePrice":3.75},,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21017,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21018,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21019,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21020,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21021,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21022,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21023,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21024,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21025,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21026,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21027,"ChoicePrice":""}],"MenuItemId":197054,"MenuItemName":"Spinach Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":18183174,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},
	{"MenuItemDetail":"Sausage, ham, bacon, pepperoni, ground beef.","Choices":[{"ChoiceName":"Slice","id":21028,"ChoicePrice":3.75},,
	{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21029,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21030,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21031,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21032,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21033,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21034,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21035,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21036,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21037,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21038,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21039,"ChoicePrice":""}],"MenuItemId":197055,"MenuItemName":"Meat Lover's Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8724266,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Spinach, broccoli, garlic, peppers, tomatoes, mushrooms, onions. Red or white.","Choices":[{"ChoiceName":"Slice","id":21040,"ChoicePrice":3.75},{"ChoiceName":"Red Sauce","id":21041,"ChoicePrice":""},{"ChoiceName":"White Sauce","id":21042,"ChoicePrice":""},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21043,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21044,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21045,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21046,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21047,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21048,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21049,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21050,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21051,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21052,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21053,"ChoicePrice":""}],"MenuItemId":197056,"MenuItemName":"Veggie Lover's Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10718227,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Slice","id":21054,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21055,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21056,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21057,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21058,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21059,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21060,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21061,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21062,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21063,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21064,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21065,"ChoicePrice":""}],"MenuItemId":197057,"MenuItemName":"Chicken Alfredo Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9635195,"MenuItemPrice":3.0,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Slice","id":21066,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21067,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21068,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21069,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21070,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21071,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21072,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21073,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21074,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21075,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21076,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21077,"ChoicePrice":""}],"MenuItemId":197058,"MenuItemName":"Chicken Buffalo Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11952024,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Slice","id":21078,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21079,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21080,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21081,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21082,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21083,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21084,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21085,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21086,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21087,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21088,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21089,"ChoicePrice":""}],"MenuItemId":197059,"MenuItemName":"Seafood Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10329109,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Slice","id":21090,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21091,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21092,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21093,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21094,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21095,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21096,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21097,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21098,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21099,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21100,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21101,"ChoicePrice":""}],"MenuItemId":197060,"MenuItemName":"Taco Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11235533,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Slice","id":21102,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21103,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21104,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21105,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21106,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21107,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21108,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21109,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21110,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21111,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21112,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21113,"ChoicePrice":""}],"MenuItemId":197061,"MenuItemName":"Baked Ziti Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8809016,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Fresh mozzarella cheese, tomatoes, garlic.","Choices":[{"ChoiceName":"Slice","id":21114,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21115,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21116,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21117,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21118,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21119,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21120,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21121,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21122,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21123,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21124,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21125,"ChoicePrice":""}],"MenuItemId":197062,"MenuItemName":"Capri Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4371260,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Sausage, ham, bacon, pepperoni, salami.","Choices":[{"ChoiceName":"Slice","id":21126,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21127,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21128,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21129,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21130,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21131,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21132,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21133,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21134,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21135,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21136,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21137,"ChoicePrice":""}],"MenuItemId":197063,"MenuItemName":"Stuffed Italian Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13446634,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Eggplant, mushrooms, green peppers. Sprinkled with garlic.","Choices":[{"ChoiceName":"Slice","id":21138,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21139,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21140,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21141,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21142,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21143,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21144,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21145,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21146,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21147,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21148,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21149,"ChoicePrice":""}],"MenuItemId":197064,"MenuItemName":"Garden White Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":18425871,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Slice","id":21150,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21151,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21152,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21153,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21154,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21155,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21156,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21157,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21158,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21159,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21160,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21161,"ChoicePrice":""}],"MenuItemId":197065,"MenuItemName":"Hawaiian Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7458221,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Slice","id":21162,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21163,"ChoicePrice":""},
	
	{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21164,"ChoicePrice":""},
	{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21165,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21166,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21167,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21168,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21169,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21170,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21171,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21172,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21173,"ChoicePrice":""}],"MenuItemId":197066,"MenuItemName":"Greek Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5211180,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Slice","id":21174,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21175,"ChoicePrice":""},
	{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21176,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21177,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21178,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21179,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21180,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21181,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21182,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21183,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21184,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21185,"ChoicePrice":""}],"MenuItemId":197067,"MenuItemName":"Chicken Bacon Ranch Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12806931,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Slice","id":21186,"ChoicePrice":3.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21187,"ChoicePrice":""},
	
	{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21188,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21189,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21190,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21191,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21192,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21193,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21194,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21195,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21196,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21197,"ChoicePrice":""}],"MenuItemId":197068,"MenuItemName":"Chicken Pesto Pizza Slice","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11246099,"MenuItemPrice":3.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Appetizers","category_id":13055,"MenuItem":[{"MenuItemDetail":"Mild, mild, BBQ or teriyaki.","MenuItemPrice":10.25,"Choices":[{},{"ChoiceName":"Hot","id":21199,"ChoicePrice":""},{"ChoiceName":"Mild Sauce","id":21200,"ChoicePrice":""},{"ChoiceName":"Teriyaki Sauce","id":21201,"ChoicePrice":""},{"ChoiceName":"BBQ Sauce","id":21202,"ChoicePrice":""},{"ChoiceName":"Extra Sauce","id":21203,"ChoicePrice":0.50},{"ChoiceName":"Ranch Dipping Sauce","id":21204,"ChoicePrice":0.50},{"ChoiceName":"Blue Cheese Dipping Sauce","id":21205,"ChoicePrice":0.50}],"MenuItemId":197069,"MenuItemName":"Wings 12 Pieces","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4273518,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.7,"Choices":[{"ChoiceName":"Appetizers","id":21206,"ChoicePrice":""}],"MenuItemId":197070,"MenuItemName":"Mussels Marinara","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":16589264,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.7,"Choices":[{"ChoiceName":"Appetizers","id":21207,"ChoicePrice":8.7}],"MenuItemId":197071,"MenuItemName":"Fried Calamari","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8285543,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With honey mustard sauce.","MenuItemPrice":8.5,"Choices":[{"ChoiceName":"Appetizers","id":21208,"ChoicePrice":8.5}],"MenuItemId":197072,"MenuItemName":"Chicken Fingers & French Fries","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":16748360,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Garlic bread.","MenuItemPrice":3.25,"Choices":[{"ChoiceName":"Appetizers","id":21209,"ChoicePrice":3.25}],"MenuItemId":197073,"MenuItemName":"Bruschetta","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9397496,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.0,"Choices":[{"ChoiceName":"Appetizers","id":21210,"ChoicePrice":8.0}],"MenuItemId":197074,"MenuItemName":"Shrimp Cocktail","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5540567,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.0,"Choices":[{"ChoiceName":"Appetizers","id":21211,"ChoicePrice":8.0}],"MenuItemId":197075,"MenuItemName":"Fried Ravioli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9852453,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},
	{"Category_name":"Chips","category_id":13056,"MenuItem":[{"MenuItemPrice":1.49,"Choices":{"ChoiceName":"","id":"","ChoicePrice":""},
	"MenuItemId":197076,"MenuItemName":"Chips","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":2.49,"Size":"Small"},{"Menu_item_Detail_detail":"","Price":3.99,"Size":"Medium"},{"Menu_item_Detail_detail":"","Price":6.99,"Size":"Large"}],"MenuItemCode":2988988,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Soups","category_id":13057,"MenuItem":[{"MenuItemDetail":"Please call the restaurant for today's selection.","MenuItemPrice":4.0,"Choices":[{}],"MenuItemId":197077,
	"MenuItemName":"Soup of the Day",
	"Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},
	"MenuItemCode":5041393,
	"ExtraItems":{}}],"Category_Detail":""},
	{"Category_name":"Salads","category_id":13058,
	"MenuItem":[{"MenuItemPrice":5.0,
	"Choices":[{"ChoiceName":"Soup","id":21213,"ChoicePrice":4.0}],
	"MenuItemId":197078,"MenuItemName":"Side Salad",
	"Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"",
	"Size":""},"MenuItemCode":952546,
	"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},
	{"MenuItemDetail":"Prosciutto, olives, artichokes, mozzarella cheese, roasted peppers.",
	"MenuItemPrice":10.45,"Choices":[{"ChoiceName":"Salad","id":21214,
	"ChoicePrice":10.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing",
	"id":21215,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing",
	"id":21216,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21217,
	"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21218,
	"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21219,
	"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21220,"ChoicePrice":""},
	{"ChoiceName":"Russian Dressing","id":21221,"ChoicePrice":""},
	{"ChoiceName":"Bleu Cheese Dressing","id":21222,"ChoicePrice":""},
	{"ChoiceName":"Caesar Dressing","id":21223,"ChoicePrice":""},
	{"ChoiceName":"Honey Mustard Dressing","id":21224,"ChoicePrice":""},
	{"ChoiceName":"No Dressing","id":21225,"ChoicePrice":""}],
	"MenuItemId":197079,"MenuItemName":"Classic Antipasto Salad",
	"Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},
	"MenuItemCode":8486735,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},
	{"MenuItemPrice":6.5,"Choices":[{"ChoiceName":"Salad","id":21226,
	"ChoicePrice":6.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing",
	"id":21227,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing",
	"id":21228,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21229,
	"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21230,
	"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21231,"ChoicePrice":""},
	{"ChoiceName":"French Dressing","id":21232,"ChoicePrice":""},
	{"ChoiceName":"Russian Dressing","id":21233,"ChoicePrice":""},
	{"ChoiceName":"Bleu Cheese Dressing","id":21234,"ChoicePrice":""},
	{"ChoiceName":"Caesar Dressing","id":21235,"ChoicePrice":""},
	{"ChoiceName":"Honey Mustard Dressing","id":21236,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21237,"ChoicePrice":""}],"MenuItemId":197080,"MenuItemName":"Tossed Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8496454,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":10.0,"Choices":[{"ChoiceName":"Salad","id":21238,"ChoicePrice":10.0},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21239,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21240,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21241,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21242,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21243,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21244,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21245,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21246,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21247,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21248,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21249,"ChoicePrice":""}],"MenuItemId":197081,"MenuItemName":"Antipasto Salad with Mixed Cold Cuts","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8484316,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.5,"Choices":[{"ChoiceName":"Salad","id":21250,"ChoicePrice":8.5},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21251,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21252,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21253,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21254,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21255,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21256,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21257,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21258,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21259,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21260,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21261,"ChoicePrice":""}],"MenuItemId":197082,"MenuItemName":"Chicken in Mayo Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7992560,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.0,"Choices":[{"ChoiceName":"Salad","id":21262,"ChoicePrice":8.0},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21263,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21264,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21265,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21266,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21267,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21268,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21269,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21270,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21271,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21272,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21273,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21274,"ChoicePrice":""}],"MenuItemId":197083,"MenuItemName":"Pasta Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12105161,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Iceberg & romaine lettuce, shrimp, tomatoes, tuna & black olives.","MenuItemPrice":9.75,"Choices":[{"ChoiceName":"Salad","id":21275,"ChoicePrice":9.75},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21276,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21277,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21278,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21279,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21280,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21281,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21282,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21283,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21284,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21285,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21286,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21287,"ChoicePrice":""}],"MenuItemId":197084,"MenuItemName":"Newport Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7932277,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Fresh mozzarella cheese, fresh tomatoes, drizzled with virgin olive oil & fresh herbs.","MenuItemPrice":9.2,"Choices":[{"ChoiceName":"Salad","id":21288,"ChoicePrice":9.2},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21289,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21290,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21291,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21292,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21293,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21294,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21295,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21296,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21297,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21298,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21299,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21300,"ChoicePrice":""}],"MenuItemId":197085,"MenuItemName":"Caprese Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6564663,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Swiss cheese, turkey, ham, hardboiled eggs & croutons.","MenuItemPrice":9.5,"Choices":[{"ChoiceName":"Salad","id":21301,"ChoicePrice":9.5},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21302,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21303,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21304,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21305,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21306,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21307,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21308,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21309,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21310,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21311,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21312,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21313,"ChoicePrice":""}],"MenuItemId":197086,"MenuItemName":"Chef's Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8931724,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.5,"Choices":[{"ChoiceName":"Salad","id":21314,"ChoicePrice":9.5},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21315,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21316,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21317,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21318,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21319,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21320,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21321,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21322,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21323,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21324,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21325,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21326,"ChoicePrice":""}],"MenuItemId":197087,"MenuItemName":"Grilled Shrimp Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13726637,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.25,"Choices":[{"ChoiceName":"Salad","id":21327,"ChoicePrice":9.25},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21328,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21329,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21330,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21331,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21332,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21333,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21334,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21335,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21336,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21337,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21338,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21339,"ChoicePrice":""}],"MenuItemId":197088,"MenuItemName":"Grilled Chicken Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10614613,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.5,"Choices":[{"ChoiceName":"Salad","id":21340,"ChoicePrice":9.5},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21341,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21342,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21343,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21344,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21345,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21346,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21347,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21348,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21349,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21350,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21351,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21352,"ChoicePrice":""}],"MenuItemId":197089,"MenuItemName":"Tuna Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8226387,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Salad","id":21353,"ChoicePrice":7.75},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21354,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21355,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21356,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21357,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21358,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21359,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21360,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21361,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21362,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21363,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21364,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21365,"ChoicePrice":""}],"MenuItemId":197090,"MenuItemName":"Caesar Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9529575,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.5,"Choices":[{"ChoiceName":"Salad","id":21366,"ChoicePrice":8.5},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21367,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21368,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21369,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21370,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21371,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21372,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21373,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21374,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21375,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21376,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21377,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21378,"ChoicePrice":""}],"MenuItemId":197091,"MenuItemName":"Turkey Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7192858,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.5,"Choices":[{"ChoiceName":"Salad","id":21379,"ChoicePrice":9.5},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21380,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21381,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21382,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21383,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21384,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21385,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21386,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21387,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21388,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21389,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21390,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21391,"ChoicePrice":""}],"MenuItemId":197092,"MenuItemName":"Grilled Chicken Caesar Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":14904737,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.75,"Choices":[{"ChoiceName":"Salad","id":21392,"ChoicePrice":8.75},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21393,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21394,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21395,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21396,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21397,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21398,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21399,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21400,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21401,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21402,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21403,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21404,"ChoicePrice":""}],"MenuItemId":197093,"MenuItemName":"Roasted Peppers Salad with Fresh Mozzarella","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4237127,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":10.45,"Choices":[{"ChoiceName":"Salad","id":21405,"ChoicePrice":10.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21406,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21407,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21408,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21409,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21410,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21411,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21412,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21413,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21414,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21415,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21416,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":21417,"ChoicePrice":""}],"MenuItemId":197094,"MenuItemName":"Grilled Tilapia Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10381483,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.25,"Choices":[{"ChoiceName":"Salad","id":21418,"ChoicePrice":9.25},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":21419,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":21420,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":21421,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":21422,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":21423,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":21424,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":21425,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":21426,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":21427,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":21428,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":21429,"ChoicePrice":""}],"MenuItemId":197095,"MenuItemName":"Crispy Chicken Finger Salad$925","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6733360,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Side Orders","category_id":13059,"MenuItem":[{"MenuItemPrice":4.5,"Choices":{"ChoiceName":"","id":"","ChoicePrice":""},"MenuItemId":197096,"MenuItemName":"French Fries","Menuitemdetails":[{"Menu_item_Detail_detail":"","Price":4.5,"Size":"Regular"},{"Menu_item_Detail_detail":"","Price":7.25,"Size":"Large"}],"MenuItemCode":2114875,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":5.0,"Choices":[{"ChoiceName":"Side","id":21430,"ChoicePrice":5.0}],"MenuItemId":197097,"MenuItemName":"French Fries with Cheese","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11558805,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":6.5,"Choices":[{"ChoiceName":"Side","id":21431,"ChoicePrice":6.5}],"MenuItemId":197098,"MenuItemName":"French Fries with Bacon & Cheese","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5228790,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Side","id":21432,"ChoicePrice":7.75}],"MenuItemId":197099,"MenuItemName":"Fried Mushrooms","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":3126571,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Side","id":21433,"ChoicePrice":7.75}],"MenuItemId":197100,"MenuItemName":"Hot Poppers","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":15468741,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":5.75,"Choices":[{"ChoiceName":"Side","id":21434,"ChoicePrice":5.75}],"MenuItemId":197101,"MenuItemName":"Side of Meatballs","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":18965874,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":3.75,"Choices":[{"ChoiceName":"Side","id":21435,"ChoicePrice":3.75}],"MenuItemId":197102,"MenuItemName":"Garlic Bread","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11827179,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":4.25,"Choices":[{"ChoiceName":"Side","id":21436,"ChoicePrice":4.25}],"MenuItemId":197103,"MenuItemName":"Garlic Bread with Cheese","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12817476,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":4.0,"Choices":[{"ChoiceName":"4 Pices","id":21437,"ChoicePrice":4.0}],"MenuItemId":197104,"MenuItemName":"Garlic Rolls","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6847539,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":5.5,"Choices":[{"ChoiceName":"Side","id":21438,"ChoicePrice":5.5}],"MenuItemId":197105,"MenuItemName":"Breadsticks","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13463066,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":6.5,"Choices":[{"ChoiceName":"Side","id":21439,"ChoicePrice":6.5}],"MenuItemId":197106,"MenuItemName":"Bredsticks & Cheese","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":2390972,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.5,"Choices":[{"ChoiceName":"Side","id":21440,"ChoicePrice":7.5}],"MenuItemId":197107,"MenuItemName":"Shrimp Basket","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10336932,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":5.5,"Choices":[{"ChoiceName":"Side","id":21441,"ChoicePrice":5.5}],"MenuItemId":197108,"MenuItemName":"Pizza Fries","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9569334,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":5.25,"Choices":[{"ChoiceName":"Side","id":21442,"ChoicePrice":5.25}],"MenuItemId":197109,"MenuItemName":"Onion Rings","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5083243,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Side","id":21443,"ChoicePrice":7.75}],"MenuItemId":197110,"MenuItemName":"Mozzarella Sticks","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13312135,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.25,"Choices":[{"ChoiceName":"Side","id":21444,"ChoicePrice":8.25}],"MenuItemId":197111,"MenuItemName":"Buffalo Chicken Fingers","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11636890,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":5.75,"Choices":[{"ChoiceName":"Side","id":21445,"ChoicePrice":5.75}],"MenuItemId":197112,"MenuItemName":"Side of Sausage","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":16898945,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":1.5,"Choices":[{"ChoiceName":"Side","id":21446,"ChoicePrice":1.5}],"MenuItemId":197113,"MenuItemName":"Buttered Rolls","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":14250547,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":2.25,"Choices":[{"ChoiceName":"1 Pices","id":21447,"ChoicePrice":2.25}],"MenuItemId":197114,"MenuItemName":"Broccoli Bites","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7173070,
	"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},
	{"MenuItemPrice":1.75,
	"Choices":[{"ChoiceName":"1 Pices","id":21448,"ChoicePrice":1.75}],
	
	"MenuItemId":197115,
	"MenuItemName":"Pepperoni Bites","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10968968,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":5.5,"Choices":[{"ChoiceName":"Side","id":21449,"ChoicePrice":5.5}],"MenuItemId":197116,"MenuItemName":"Mozzarella Fries","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":1065716,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Side","id":21450,"ChoicePrice":7.75}],"MenuItemId":197117,"MenuItemName":"Fried Ravioli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11769571,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Calzones","category_id":13060,"MenuItem":[{"MenuItemDetail":"Filled with ricotta cheese, mozzarella cheese & ham.","MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Personal","id":21451,"ChoicePrice":7.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21452,"ChoicePrice":""},
	
	{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21453,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21454,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21455,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21456,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21457,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21458,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21459,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21460,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21461,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21462,"ChoicePrice":""}],"MenuItemId":197118,"MenuItemName":"Calzone","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6531493,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Strombolis","category_id":13061,"MenuItem":[{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Personal","id":21463,"ChoicePrice":7.75},{"ChoiceName":"Large","id":21464,"ChoicePrice":15.75}],"MenuItemId":197119,"MenuItemName":"Pepperoni & Mozzarella Stromboli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5046918,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Salami, pepperoni, capicola, ham, mozzarella cheese.","MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Personal","id":21465,"ChoicePrice":7.75},{"ChoiceName":"Large","id":21466,"ChoicePrice":17.75}],"MenuItemId":197120,"MenuItemName":"Italian Stromboli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":14364131,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":"","Choices":[{"ChoiceName":"Personal","id":21467,"ChoicePrice":7.75},{"ChoiceName":"Large","id":21468,"ChoicePrice":17.75}],"MenuItemId":197121,"MenuItemName":"Veggie Stromboli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12912583,"MenuItemPrice":7.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Mushrooms, sweet peppers and onion.","Choices":[{"ChoiceName":"Personal","id":21469,"ChoicePrice":7.75},{"ChoiceName":"Large","id":21470,"ChoicePrice":17.75}],"MenuItemId":197122,"MenuItemName":"Cheesesteak Stromboli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7702559,"MenuItemPrice":0.0,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Personal","id":21471,"ChoicePrice":7.75},{"ChoiceName":"Large","id":21472,"ChoicePrice":17.75}],"MenuItemId":197123,"MenuItemName":"Chicken Steak Stromboli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12798011,"MenuItemPrice":7.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Green peppers & onions.","Choices":[{"ChoiceName":"Personal","id":21473,"ChoicePrice":7.75},{"ChoiceName":"Large","id":21474,"ChoicePrice":17.75}],"MenuItemId":197124,"MenuItemName":"Sausage & Peppers Stromboli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4140357,"MenuItemPrice":8.25,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Personal","id":21475,"ChoicePrice":8.25},{"ChoiceName":"Large","id":21476,"ChoicePrice":17.75}],"MenuItemId":197125,"MenuItemName":"Buffalo Chicken Stromboli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":18086402,"MenuItemPrice":8.0,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Personal","id":21477,"ChoicePrice":8.0},{"ChoiceName":"Large","id":21478,"ChoicePrice":17.5}],"MenuItemId":197126,"MenuItemName":"BBQ Chicken Stromboli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9796710,"MenuItemPrice":8.0,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Personal","id":21479,"ChoicePrice":8.0},{"ChoiceName":"Large","id":21480,"ChoicePrice":17.5}],"MenuItemId":197127,"MenuItemName":"Meat Lover's Stromboli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":15507197,"MenuItemPrice":0.0,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Club Sandwiches","category_id":13062,"MenuItem":[{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Sandwich","id":21481,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":21482,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21483,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21484,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21485,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21486,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21487,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21488,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":21489,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21490,"ChoicePrice":""}],"MenuItemId":197128,"MenuItemName":"Ham & Cheese Club Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":1996070,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":"","Choices":[{},{"ChoiceName":"Lettuce","id":21492,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21493,"ChoicePrice":""},
	{"ChoiceName":"Mustard","id":21494,"ChoicePrice":""},
	{"ChoiceName":"Ketchup","id":21495,"ChoicePrice":""},
	{"ChoiceName":"Mushrooms","id":21496,"ChoicePrice":""},
	{"ChoiceName":"Roasted Peppers","id":21497,"ChoicePrice":""},
	{"ChoiceName":"Green Peppers","id":21498,"ChoicePrice":""},
	{"ChoiceName":"Onions","id":21499,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21500,"ChoicePrice":""}],"MenuItemId":197129,"MenuItemName":"Tuna & Cheese Club Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13970078,"MenuItemPrice":7.0,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Sandwich","id":21501,"ChoicePrice":7.0},{"ChoiceName":"Lettuce","id":21502,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21503,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21504,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21505,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21506,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21507,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21508,"ChoicePrice":""},{"ChoiceName":"Onions","id":21509,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21510,"ChoicePrice":""}],"MenuItemId":197130,"MenuItemName":"BLT Club Sandwich","MenuItemPrice":7.75,"Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4528605,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Sandwich","id":21511,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":21512,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21513,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21514,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21515,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21516,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21517,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21518,"ChoicePrice":""},{"ChoiceName":"Onions","id":21519,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21520,"ChoicePrice":""}],"MenuItemId":197131,"MenuItemName":"Pastrami Club Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8021954,"MenuItemPrice":7.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":"","Choices":[{"ChoiceName":"Sandwich","id":21521,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":21522,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21523,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21524,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21525,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21526,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21527,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21528,"ChoicePrice":""},{"ChoiceName":"Onions","id":21529,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21530,"ChoicePrice":""}],"MenuItemId":197132,"MenuItemName":"Reuben Club Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":3881217,"MenuItemPrice":"0.0","ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Sandwich","id":21531,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":21532,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21533,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21534,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21535,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21536,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21537,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21538,"ChoicePrice":""},{"ChoiceName":"Onions","id":21539,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21540,"ChoicePrice":""}],"MenuItemId":197133,"MenuItemName":"Corned Beef Club Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":3422095,"MenuItemPrice":7.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Sandwich","id":21541,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":21542,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21543,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21544,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21545,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21546,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21547,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21548,"ChoicePrice":""},{"ChoiceName":"Onions","id":21549,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21550,"ChoicePrice":""}],"MenuItemId":197134,"MenuItemName":"Turkey & Cheese Club Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11475654,"MenuItemPrice":4.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Sandwich","id":21551,"ChoicePrice":4.75},{"ChoiceName":"Lettuce","id":21552,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21553,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21554,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21555,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21556,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21557,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21558,"ChoicePrice":""},{"ChoiceName":"Onions","id":21559,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21560,"ChoicePrice":""}],"MenuItemId":197135,"MenuItemName":"Grilled Cheese Club Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10812475,"MenuItemPrice":7.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Sandwich","id":21561,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":21562,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21563,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21564,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21565,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21566,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21567,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21568,"ChoicePrice":""},{"ChoiceName":"Onions","id":21569,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21570,"ChoicePrice":""}],"MenuItemId":197136,"MenuItemName":"Roast Beef & Cheese Club Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":1393178,"MenuItemPrice":5.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"Choices":[{"ChoiceName":"Sandwich","id":21571,"ChoicePrice":5.75},{"ChoiceName":"Lettuce","id":21572,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21573,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21574,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21575,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21576,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21577,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21578,"ChoicePrice":""},{"ChoiceName":"Onions","id":21579,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21580,"ChoicePrice":""}],"MenuItemId":197137,"MenuItemName":"Grilled Ham & Cheese Club Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5114686,"MenuItemPrice":9.0,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Hot Sandwiches","category_id":13063,"MenuItem":[{"Choices":[{"ChoiceName":"Lettuce","id":21582,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21583,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21584,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21585,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21586,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21587,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21588,"ChoicePrice":""},{"ChoiceName":"Onions","id":21589,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21590,"ChoicePrice":""}],"MenuItemId":197138,"MenuItemName":"Chicken, Spinach & Cheese Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":1272133,"MenuItemPrice":8.75,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.75,"Choices":[{"ChoiceName":"Sandwich","id":21591,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":21592,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21593,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21594,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21595,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21596,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21597,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21598,"ChoicePrice":""},{"ChoiceName":"Onions","id":21599,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21600,"ChoicePrice":""}],"MenuItemId":197139,"MenuItemName":"Sausage Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9772178,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.25,"Choices":[{"ChoiceName":"Sandwich","id":21601,"ChoicePrice":8.25},{"ChoiceName":"Lettuce","id":21602,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21603,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21604,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21605,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21606,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21607,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21608,"ChoicePrice":""},{"ChoiceName":"Onions","id":21609,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21610,"ChoicePrice":""}],"MenuItemId":197140,"MenuItemName":"Sausage Sandwich with Cheese","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11205283,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.75,"Choices":[{"ChoiceName":"Sandwich","id":21611,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":21612,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21613,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21614,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21615,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21616,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21617,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21618,"ChoicePrice":""},{"ChoiceName":"Onions","id":21619,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21620,"ChoicePrice":""}],"MenuItemId":197141,"MenuItemName":"Meatball Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9471554,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.25,"Choices":[{"ChoiceName":"Sandwich","id":21621,"ChoicePrice":8.25},{"ChoiceName":"Lettuce","id":21622,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21623,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21624,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21625,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21626,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21627,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21628,"ChoicePrice":""},{"ChoiceName":"Onions","id":21629,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21630,"ChoicePrice":""}],"MenuItemId":197142,"MenuItemName":"Meatball Sandwich with Cheese","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":3706044,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.5,"Choices":[{"ChoiceName":"Sandwich","id":21631,"ChoicePrice":8.5},{"ChoiceName":"Lettuce","id":21632,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21633,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21634,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21635,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21636,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21637,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21638,"ChoicePrice":""},{"ChoiceName":"Onions","id":21639,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21640,"ChoicePrice":""}],"MenuItemId":197143,"MenuItemName":"Sausage, Peppers & Onions Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11706098,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.5,"Choices":[{"ChoiceName":"Sandwich","id":21641,"ChoicePrice":8.5},{"ChoiceName":"Lettuce","id":21642,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21643,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21644,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21645,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21646,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21647,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21648,"ChoicePrice":""},{"ChoiceName":"Onions","id":21649,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21650,"ChoicePrice":""}],"MenuItemId":197144,"MenuItemName":"Chicken Parmigiana Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13563485,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.75,"Choices":[{"ChoiceName":"Sandwich","id":21651,"ChoicePrice":8.75},{"ChoiceName":"Lettuce","id":21652,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21653,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21654,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21655,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21656,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21657,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21658,"ChoicePrice":""},{"ChoiceName":"Onions","id":21659,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21660,"ChoicePrice":""}],"MenuItemId":197145,"MenuItemName":"Veal Parmigiana Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8126291,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.5,"Choices":[{"ChoiceName":"Sandwich","id":21661,"ChoicePrice":8.5},{"ChoiceName":"Lettuce","id":21662,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21663,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21664,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21665,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21666,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21667,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21668,"ChoicePrice":""},{"ChoiceName":"Onions","id":21669,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21670,"ChoicePrice":""}],"MenuItemId":197146,"MenuItemName":"Bacon, Egg & Cheese Sub Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8522439,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.75,"Choices":[{"ChoiceName":"Sandwich","id":21671,"ChoicePrice":8.75},{"ChoiceName":"Lettuce","id":21672,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21673,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21674,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21675,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21676,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21677,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21678,"ChoicePrice":""},{"ChoiceName":"Onions","id":21679,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21680,"ChoicePrice":""}],"MenuItemId":197147,"MenuItemName":"Grilled Chicken Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13739091,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"American, blue cheese dressing & ham on a kaiser roll.","MenuItemPrice":9.0,"Choices":[{"ChoiceName":"Sandwich","id":21681,"ChoicePrice":8.0},{"ChoiceName":"Lettuce","id":21682,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21683,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21684,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21685,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21686,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21687,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21688,"ChoicePrice":""},{"ChoiceName":"Onions","id":21689,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21690,"ChoicePrice":""}],"MenuItemId":197148,"MenuItemName":"Grilled Chicken Cordon Bleu Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5454153,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"No bread.","MenuItemPrice":9.25,"Choices":[{"ChoiceName":"Sandwich","id":21691,"ChoicePrice":8.25},{"ChoiceName":"Lettuce","id":21692,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21693,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21694,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21695,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21696,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21697,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21698,"ChoicePrice":""},{"ChoiceName":"Onions","id":21699,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21700,"ChoicePrice":""}],"MenuItemId":197149,"MenuItemName":"Grilled Chicken in a Dish Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":3695594,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.5,"Choices":[{"ChoiceName":"Sandwich","id":21701,"ChoicePrice":8.5},{"ChoiceName":"Lettuce","id":21702,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21703,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21704,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21705,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21706,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21707,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21708,"ChoicePrice":""},{"ChoiceName":"Onions","id":21709,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21710,"ChoicePrice":""}],"MenuItemId":197150,"MenuItemName":"Chicken & Roasted Peppers Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5299642,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.0,"Choices":[{"ChoiceName":"Sandwich","id":21711,"ChoicePrice":8.0},{"ChoiceName":"Lettuce","id":21712,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21713,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21714,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21715,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21716,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21717,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21718,"ChoicePrice":""},{"ChoiceName":"Onions","id":21719,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21720,"ChoicePrice":""}],"MenuItemId":197151,"MenuItemName":"Peppers & Eggs Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5497677,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.5,"Choices":[{"ChoiceName":"Sandwich","id":21721,"ChoicePrice":8.5},{"ChoiceName":"Lettuce","id":21722,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21723,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21724,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21725,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21726,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21727,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21728,"ChoicePrice":""},{"ChoiceName":"Onions","id":21729,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21730,"ChoicePrice":""}],"MenuItemId":197152,"MenuItemName":"Eggplant Parmigiana Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":14622280,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.5,"Choices":[{"ChoiceName":"sandwich","id":21731,"ChoicePrice":8.5},{"ChoiceName":"Lettuce","id":21732,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21733,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21734,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21735,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21736,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21737,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21738,"ChoicePrice":""},{"ChoiceName":"Onions","id":21739,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21740,"ChoicePrice":""}],"MenuItemId":197153,"MenuItemName":"Roast Port & Provolone Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":1966377,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.5,"Choices":[{"ChoiceName":"Sandwich","id":21741,"ChoicePrice":7.5},{"ChoiceName":"Lettuce","id":21742,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21743,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21744,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21745,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21746,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21747,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21748,"ChoicePrice":""},{"ChoiceName":"Onions","id":21749,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21750,"ChoicePrice":""}],"MenuItemId":197154,"MenuItemName":"Tuna Melt Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11442451,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.5,"Choices":[{"ChoiceName":"Sandwich","id":21751,"ChoicePrice":8.5},{"ChoiceName":"Lettuce","id":21752,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21753,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21754,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21755,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21756,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21757,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21758,"ChoicePrice":""},{"ChoiceName":"Onions","id":21759,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21760,"ChoicePrice":""}],"MenuItemId":197155,"MenuItemName":"Breaded Chicken Sandwich","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9095505,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Cold Subs","category_id":13064,"MenuItem":[{"MenuItemPrice":8.75,"Choices":[{"ChoiceName":"Sub","id":21761,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":21762,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21763,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21764,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21765,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21766,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21767,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21768,"ChoicePrice":""},{"ChoiceName":"Onions","id":21769,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21770,"ChoicePrice":""}],"MenuItemId":197156,"MenuItemName":"Italian Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4334518,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"In mayo.","MenuItemPrice":9.25,"Choices":[{"ChoiceName":"Sub","id":21771,"ChoicePrice":8.25},{"ChoiceName":"Lettuce","id":21772,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21773,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21774,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21775,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21776,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21777,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21778,"ChoicePrice":""},{"ChoiceName":"Onions","id":21779,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21780,"ChoicePrice":""},{"ChoiceName":"With Mayo On The Side","id":21781,"ChoicePrice":""}],"MenuItemId":197157,"MenuItemName":"Chicken Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":15440667,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.5,"Choices":[{"ChoiceName":"Sub","id":21782,"ChoicePrice":7.5},{"ChoiceName":"Lettuce","id":21783,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21784,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21785,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21786,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21787,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21788,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21789,"ChoicePrice":""},{"ChoiceName":"Onions","id":21790,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21791,"ChoicePrice":""}],"MenuItemId":197158,"MenuItemName":"Ham & Cheese Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5038014,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.0,"Choices":[{"ChoiceName":"Sub","id":21792,"ChoicePrice":8.0},{"ChoiceName":"Lettuce","id":21793,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21794,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21795,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21796,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21797,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21798,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21799,"ChoicePrice":""},{"ChoiceName":"Onions","id":21800,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21801,"ChoicePrice":""}],"MenuItemId":197159,"MenuItemName":"Turkey Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":18237220,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.0,"Choices":[{"ChoiceName":"Sub","id":21802,"ChoicePrice":8.0},{"ChoiceName":"Lettuce","id":21803,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21804,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21805,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21806,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21807,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21808,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21809,"ChoicePrice":""},{"ChoiceName":"Onions","id":21810,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21811,"ChoicePrice":""}],"MenuItemId":197160,"MenuItemName":"Roast Beef Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12263175,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.25,"Choices":[{"ChoiceName":"Sub","id":21812,"ChoicePrice":8.25},{"ChoiceName":"Lettuce","id":21813,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21814,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21815,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21816,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21817,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21818,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21819,"ChoicePrice":""},{"ChoiceName":"Onions","id":21820,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21821,"ChoicePrice":""}],"MenuItemId":197161,"MenuItemName":"Tuna Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10236125,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.5,"Choices":[{"ChoiceName":"Sub","id":21822,"ChoicePrice":7.5},{"ChoiceName":"Lettuce","id":21823,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21824,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21825,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21826,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21827,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21828,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21829,"ChoicePrice":""},{"ChoiceName":"Onions","id":21830,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21831,"ChoicePrice":""}],"MenuItemId":197162,"MenuItemName":"Zeps Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6844874,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.0,"Choices":[{"ChoiceName":"Sub","id":21832,"ChoicePrice":8.0},{"ChoiceName":"Lettuce","id":21833,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21834,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21835,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21836,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21837,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21838,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21839,"ChoicePrice":""},
	{"ChoiceName":"Onions","id":21840,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21841,"ChoicePrice":""}],"MenuItemId":197163,"MenuItemName":"Hot Grinder","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8044029,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.0,"Choices":[{"ChoiceName":"Sub","id":21842,"ChoicePrice":8.0},{"ChoiceName":"Lettuce","id":21843,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21844,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21845,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21846,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21847,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21848,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21849,"ChoicePrice":""},{"ChoiceName":"Onions","id":21850,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21851,"ChoicePrice":""}],"MenuItemId":197164,"MenuItemName":"Veggie Grinder","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13126014,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.0,"Choices":[{"ChoiceName":"Sub","id":21852,"ChoicePrice":8.0},{"ChoiceName":"Lettuce","id":21853,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21854,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21855,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21856,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21857,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21858,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21859,"ChoicePrice":""},{"ChoiceName":"Onions","id":21860,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21861,"ChoicePrice":""}],"MenuItemId":197165,"MenuItemName":"Pastrami & Swiss Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11354209,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With fresh mozzarella cheese.","MenuItemPrice":9.5,"Choices":[{"ChoiceName":"Sub","id":21862,"ChoicePrice":8.0},{"ChoiceName":"Lettuce","id":21863,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21864,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21865,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21866,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21867,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21868,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21869,"ChoicePrice":""},{"ChoiceName":"Onions","id":21870,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21871,"ChoicePrice":""}],"MenuItemId":197166,"MenuItemName":"Prosciutto Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6785063,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.5,"Choices":[{"ChoiceName":"Sub","id":21872,"ChoicePrice":7.5},{"ChoiceName":"Lettuce","id":21873,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21874,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21875,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21876,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21877,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21878,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21879,"ChoicePrice":""},{"ChoiceName":"Onions","id":21880,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21881,"ChoicePrice":""}],"MenuItemId":197167,"MenuItemName":"Corned Beef & Swiss Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5596863,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.25,"Choices":[{"ChoiceName":"Sub","id":21882,"ChoicePrice":8.25},{"ChoiceName":"Lettuce","id":21883,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21884,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21885,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21886,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21887,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21888,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21889,"ChoicePrice":""},{"ChoiceName":"Onions","id":21890,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21891,"ChoicePrice":""}],"MenuItemId":197168,"MenuItemName":"Grilled Chicken Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13296387,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With lettuce & tomatoes.","MenuItemPrice":9.25,"Choices":[{"ChoiceName":"Sub","id":21892,"ChoicePrice":8.25},{"ChoiceName":"Lettuce","id":21893,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21894,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21895,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21896,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21897,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21898,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21899,"ChoicePrice":""},{"ChoiceName":"Onions","id":21900,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21901,"ChoicePrice":""}],"MenuItemId":197169,"MenuItemName":"Fish Fillet Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":17064906,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Provolone cheese, swiss cheese & american cheese.","MenuItemPrice":8.0,"Choices":[{"ChoiceName":"Sub","id":21902,"ChoicePrice":7.0},{"ChoiceName":"Lettuce","id":21903,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21904,"ChoicePrice":""},
	{"ChoiceName":"Mustard","id":21905,"ChoicePrice":""},
	{"ChoiceName":"Ketchup","id":21906,"ChoicePrice":""},
	{"ChoiceName":"Mushrooms","id":21907,"ChoicePrice":""},
	{"ChoiceName":"Roasted Peppers","id":21908,"ChoicePrice":""},
	{"ChoiceName":"Green Peppers","id":21909,"ChoicePrice":""},
	{"ChoiceName":"Onions","id":21910,"ChoicePrice":""},
	{"ChoiceName":"American Cheese","id":21911,"ChoicePrice":""}],
	"MenuItemId":197170,"MenuItemName":"All Cheese Sub","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7999505,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Burgers","category_id":13065,"MenuItem":[{"MenuItemPrice":5.5,"Choices":[{},{"ChoiceName":"Rare","id":21913,"ChoicePrice":""},{"ChoiceName":"Medium Rare","id":21914,"ChoicePrice":""},{"ChoiceName":"Medium","id":21915,"ChoicePrice":""},{"ChoiceName":"Medium Well","id":21916,"ChoicePrice":""},{"ChoiceName":"Well Done","id":21917,"ChoicePrice":""},{"ChoiceName":"Lettuce","id":21918,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21919,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21920,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21921,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21922,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21923,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21924,"ChoicePrice":""},{"ChoiceName":"Onions","id":21925,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21926,"ChoicePrice":""}],"MenuItemId":197171,"MenuItemName":"Hamburger 5 OZ","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9132673,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":6.0,"Choices":[{},{"ChoiceName":"Rare","id":21928,"ChoicePrice":""},{"ChoiceName":"Medium Rare","id":21929,"ChoicePrice":""},{"ChoiceName":"Medium","id":21930,"ChoicePrice":""},{"ChoiceName":"Medium Well","id":21931,"ChoicePrice":""},{"ChoiceName":"Well Done","id":21932,"ChoicePrice":""},{"ChoiceName":"Lettuce","id":21933,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21934,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21935,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21936,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21937,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21938,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21939,"ChoicePrice":""},{"ChoiceName":"Onions","id":21940,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21941,"ChoicePrice":""}],"MenuItemId":197172,"MenuItemName":"Cheeseburger 5OZ","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6402756,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":6.25,"Choices":[{"ChoiceName":"5 OZ","id":21942,"ChoicePrice":6.25},{"ChoiceName":"Rare","id":21943,"ChoicePrice":""},{"ChoiceName":"Medium Rare","id":21944,"ChoicePrice":""},{"ChoiceName":"Medium","id":21945,"ChoicePrice":""},{"ChoiceName":"Medium Well","id":21946,"ChoicePrice":""},{"ChoiceName":"Well Done","id":21947,"ChoicePrice":""},{"ChoiceName":"Lettuce","id":21948,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21949,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21950,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21951,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21952,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21953,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21954,"ChoicePrice":""},{"ChoiceName":"Onions","id":21955,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21956,"ChoicePrice":""}],"MenuItemId":197173,"MenuItemName":"Bacon Cheeseburger 5OZ","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5040669,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Burger","id":21957,"ChoicePrice":7.75},{"ChoiceName":"Rare","id":21958,"ChoicePrice":""},{"ChoiceName":"Medium Rare","id":21959,"ChoicePrice":""},{"ChoiceName":"Medium","id":21960,"ChoicePrice":""},{"ChoiceName":"Medium Well","id":21961,"ChoicePrice":""},{"ChoiceName":"Well Done","id":21962,"ChoicePrice":""},{"ChoiceName":"Lettuce","id":21963,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21964,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21965,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21966,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21967,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21968,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21969,"ChoicePrice":""},{"ChoiceName":"Onions","id":21970,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21971,"ChoicePrice":""}],"MenuItemId":197174,"MenuItemName":"Cheeseburger Hoagie 5 OZ","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":1006196,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":"","Choices":[{"ChoiceName":"Burger","id":21972,"ChoicePrice":7.75},{"ChoiceName":"Rare","id":21973,"ChoicePrice":""},{"ChoiceName":"Medium Rare","id":21974,"ChoicePrice":""},{"ChoiceName":"Medium","id":21975,"ChoicePrice":""},{"ChoiceName":"Medium Well","id":21976,"ChoicePrice":""},{"ChoiceName":"Well Done","id":21977,"ChoicePrice":""},{"ChoiceName":"Lettuce","id":21978,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21979,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21980,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21981,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21982,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21983,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21984,"ChoicePrice":""},{"ChoiceName":"Onions","id":21985,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":21986,"ChoicePrice":""}],"MenuItemId":197175,"MenuItemName":"Double Cheeseburger","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13061393,"MenuItemPrice":6.25,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With pizza sauce & mozzarella cheese.","MenuItemPrice":6.25,"Choices":[{},{"ChoiceName":"Rare","id":21988,"ChoicePrice":""},{"ChoiceName":"Medium Rare","id":21989,"ChoicePrice":""},{"ChoiceName":"Medium","id":21990,"ChoicePrice":""},{"ChoiceName":"Medium Well","id":21991,"ChoicePrice":""},{"ChoiceName":"Well Done","id":21992,"ChoicePrice":""},{"ChoiceName":"Lettuce","id":21993,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":21994,"ChoicePrice":""},{"ChoiceName":"Mustard","id":21995,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":21996,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":21997,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":21998,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":21999,"ChoicePrice":""},{"ChoiceName":"Onions","id":22000,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22001,"ChoicePrice":""}],"MenuItemId":197176,"MenuItemName":"Pizza Burger","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9322419,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With lettuce, tomatoes & onions.","MenuItemPrice":6.25,"Choices":[{"ChoiceName":"5 OZ","id":22002,"ChoicePrice":6.25},{"ChoiceName":"Rare","id":22003,"ChoicePrice":""},{"ChoiceName":"Medium Rare","id":22004,"ChoicePrice":""},{"ChoiceName":"Medium","id":22005,"ChoicePrice":""},{"ChoiceName":"Medium Well","id":22006,"ChoicePrice":""},{"ChoiceName":"Well Done","id":22007,"ChoicePrice":""},{"ChoiceName":"Lettuce","id":22008,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22009,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22010,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22011,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22012,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22013,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22014,"ChoicePrice":""},{"ChoiceName":"Onions","id":22015,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22016,"ChoicePrice":""}],"MenuItemId":197177,"MenuItemName":"California Burger","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":14549826,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With French fries.","MenuItemPrice":7.5,"Choices":[{"ChoiceName":"Burger","id":22017,"ChoicePrice":7.5},{"ChoiceName":"Rare","id":22018,"ChoicePrice":""},{"ChoiceName":"Medium Rare","id":22019,"ChoicePrice":""},{"ChoiceName":"Medium","id":22020,"ChoicePrice":""},{"ChoiceName":"Medium Well","id":22021,"ChoicePrice":""},{"ChoiceName":"Well Done","id":22022,"ChoicePrice":""},{"ChoiceName":"Lettuce","id":22023,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22024,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22025,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22026,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22027,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22028,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22029,"ChoicePrice":""},{"ChoiceName":"Onions","id":22030,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22031,"ChoicePrice":""}],"MenuItemId":197178,"MenuItemName":"Cheeseburger Deluxe Platter","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10323886,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":6.0,"Choices":[{"ChoiceName":"Burger","id":22032,"ChoicePrice":6.0},{"ChoiceName":"Rare","id":22033,"ChoicePrice":""},{"ChoiceName":"Medium Rare","id":22034,"ChoicePrice":""},{"ChoiceName":"Medium","id":22035,"ChoicePrice":""},{"ChoiceName":"Medium Well","id":22036,"ChoicePrice":""},{"ChoiceName":"Well Done","id":22037,"ChoicePrice":""},{"ChoiceName":"Lettuce","id":22038,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22039,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22040,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22041,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22042,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22043,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22044,"ChoicePrice":""},{"ChoiceName":"Onions","id":22045,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22046,"ChoicePrice":""}],"MenuItemId":197179,"MenuItemName":"Hamburger with Lettuce","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":15955622,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Wraps","category_id":13066,"MenuItem":[{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Wrap","id":22047,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":22048,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22049,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22050,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22051,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22052,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22053,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22054,"ChoicePrice":""},{"ChoiceName":"Onions","id":22055,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22056,"ChoicePrice":""}],"MenuItemId":197180,"MenuItemName":"Italian Wrap","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7000736,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Wrap","id":22057,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":22058,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22059,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22060,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22061,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22062,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22063,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22064,"ChoicePrice":""},{"ChoiceName":"Onions","id":22065,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22066,"ChoicePrice":""}],"MenuItemId":197181,"MenuItemName":"Tuna Wrap","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":14038220,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Wrap","id":22067,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":22068,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22069,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22070,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22071,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22072,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22073,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22074,"ChoicePrice":""},{"ChoiceName":"Onions","id":22075,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22076,"ChoicePrice":""}],"MenuItemId":197182,"MenuItemName":"Turkey Wrap","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11709139,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Wrap","id":22077,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":22078,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22079,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22080,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22081,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22082,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22083,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22084,"ChoicePrice":""},{"ChoiceName":"Onions","id":22085,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22086,"ChoicePrice":""}],"MenuItemId":197183,"MenuItemName":"Chicken Fajita Wrap","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13568256,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Wrap","id":22087,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":22088,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22089,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22090,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22091,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22092,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22093,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22094,"ChoicePrice":""},{"ChoiceName":"Onions","id":22095,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22096,"ChoicePrice":""}],"MenuItemId":197184,"MenuItemName":"Chicken Caesar Wrap","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10124512,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":7.75,"Choices":[{"ChoiceName":"Wrap","id":22097,"ChoicePrice":7.75},{"ChoiceName":"Lettuce","id":22098,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22099,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22100,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22101,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22102,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22103,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22104,"ChoicePrice":""},{"ChoiceName":"Onions","id":22105,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22106,"ChoicePrice":""}],"MenuItemId":197185,"MenuItemName":"Chicken Salad Wrap","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":17056652,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.0,"Choices":[{"ChoiceName":"Wrap","id":22107,"ChoicePrice":8.0},{"ChoiceName":"Lettuce","id":22108,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22109,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22110,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22111,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22112,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22113,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22114,"ChoicePrice":""},{"ChoiceName":"Onions","id":22115,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22116,"ChoicePrice":""}],"MenuItemId":197186,"MenuItemName":"Ham Wrap","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":15233263,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With green peppers & onions.","MenuItemPrice":8.0,"Choices":[{"ChoiceName":"Wrap","id":22117,"ChoicePrice":8.0},{"ChoiceName":"Lettuce","id":22118,"ChoicePrice":""},{"ChoiceName":"Tomatoes","id":22119,"ChoicePrice":""},{"ChoiceName":"Mustard","id":22120,"ChoicePrice":""},{"ChoiceName":"Ketchup","id":22121,"ChoicePrice":""},{"ChoiceName":"Mushrooms","id":22122,"ChoicePrice":""},{"ChoiceName":"Roasted Peppers","id":22123,"ChoicePrice":""},{"ChoiceName":"Green Peppers","id":22124,"ChoicePrice":""},{"ChoiceName":"Onions","id":22125,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22126,"ChoicePrice":""}],"MenuItemId":197187,"MenuItemName":"Cheesesteak Wrap","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8437214,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Pasta Dishes","category_id":13067,"MenuItem":[{"MenuItemPrice":12.75,"Choices":[{"ChoiceName":"Pasta","id":22127,"ChoicePrice":11.75},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22128,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22129,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22130,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22131,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22132,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22133,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22134,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22135,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22136,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22137,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22138,"ChoicePrice":""}],"MenuItemId":197188,"MenuItemName":"Spaghetti with Meatballs","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":3973285,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":12.75,"Choices":[{"ChoiceName":"Pasta","id":22139,"ChoicePrice":77.75},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22140,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22141,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22142,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22143,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22144,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22145,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22146,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22147,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22148,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22149,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22150,"ChoicePrice":""},{"ChoiceName":"Add Extra","id":22151,"ChoicePrice":""}],"MenuItemId":197189,"MenuItemName":"Spaghetti with Sausage","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5914957,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Red or white.","MenuItemPrice":13.75,"Choices":[{"ChoiceName":"Pasta","id":22152,"ChoicePrice":12.75},{"ChoiceName":"Red Sauce","id":22153,"ChoicePrice":""},{"ChoiceName":"White Sauce","id":22154,"ChoicePrice":""},{"ChoiceName":"Penne","id":22155,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22156,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22157,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22158,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22159,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22160,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22161,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22162,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22163,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22164,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22165,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22166,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22167,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22168,"ChoicePrice":""},{"ChoiceName":"Add Extra","id":22169,"ChoicePrice":""}],"MenuItemId":197190,"MenuItemName":"Pasta with Clam Sauce","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7141283,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":13.45,"Choices":[{"ChoiceName":"Pasta","id":22170,"ChoicePrice":12.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22171,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22172,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22173,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22174,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22175,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22176,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22177,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22178,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22179,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22180,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22181,"ChoicePrice":""},{"ChoiceName":"Add Extra","id":22182,"ChoicePrice":""}],"MenuItemId":197191,"MenuItemName":"Gnocchi Marinara","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":17018651,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":12.7,"Choices":[{"ChoiceName":"Pasta","id":22183,"ChoicePrice":11.7},{"ChoiceName":"Spaghetti","id":22184,"ChoicePrice":""},{"ChoiceName":"Penne","id":22185,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22186,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22187,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22188,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22189,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22190,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22191,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22192,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22193,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22194,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22195,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22196,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22197,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22198,"ChoicePrice":""}],"MenuItemId":197192,"MenuItemName":"Pasta with Butter","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10368772,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":13.45,"Choices":[{"ChoiceName":"Pasta","id":22199,"ChoicePrice":12.45},{"ChoiceName":"Spaghetti","id":22200,"ChoicePrice":""},{"ChoiceName":"Penne","id":22201,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22202,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22203,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22204,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22205,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22206,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22207,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22208,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22209,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22210,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22211,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22212,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22213,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22214,"ChoicePrice":""},{"ChoiceName":"Add Extra","id":22215,"ChoicePrice":""}],"MenuItemId":197193,"MenuItemName":"Pasta with Marinara Sauce","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8656167,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":12.45,"Choices":[{"ChoiceName":"Pasta","id":22216,"ChoicePrice":11.45},{"ChoiceName":"Spaghetti","id":22217,"ChoicePrice":""},{"ChoiceName":"Penne","id":22218,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22219,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22220,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22221,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22222,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22223,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22224,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22225,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22226,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22227,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22228,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22229,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22230,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22231,"ChoicePrice":""},{"ChoiceName":"Add Extra","id":22232,"ChoicePrice":""}],"MenuItemId":197194,"MenuItemName":"Pasta with Garlic & Oil","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9268645,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":12.75,"Choices":[{"ChoiceName":"Pasta","id":22233,"ChoicePrice":11.75},{"ChoiceName":"Spaghetti","id":22234,"ChoicePrice":""},{"ChoiceName":"Penne","id":22235,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22236,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22237,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22238,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22239,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22240,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22241,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22242,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22243,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22244,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22245,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22246,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22247,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22248,"ChoicePrice":""},{"ChoiceName":"Add Extra","id":22249,"ChoicePrice":""}],"MenuItemId":197195,"MenuItemName":"Pasta & Broccoli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":1876722,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":13.45,"Choices":[{"ChoiceName":"Pasta","id":22250,"ChoicePrice":12.45},{"ChoiceName":"Spaghetti","id":22251,"ChoicePrice":""},{"ChoiceName":"Penne","id":22252,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22253,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22254,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22255,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22256,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22257,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22258,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22259,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22260,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22261,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22262,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22263,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22264,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22265,"ChoicePrice":""},{"ChoiceName":"Add Extra","id":22266,"ChoicePrice":""}],"MenuItemId":197196,"MenuItemName":"Pasta with Vodka Sauce","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10317260,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":12.45,"Choices":[{"ChoiceName":"Pasta","id":22267,"ChoicePrice":11.45},{"ChoiceName":"Spaghetti","id":22268,"ChoicePrice":""},{"ChoiceName":"Penne","id":22269,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22270,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22271,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22272,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22273,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22274,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22275,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22276,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22277,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22278,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22279,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22280,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22281,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22282,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22283,"ChoicePrice":""}],"MenuItemId":197197,"MenuItemName":"Pasta with Alfredo (Cream Sauce)","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5507139,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":14.45,"Choices":[{"ChoiceName":"Pasta","id":22284,"ChoicePrice":13.45},{"ChoiceName":"Spaghetti","id":22285,"ChoicePrice":""},{"ChoiceName":"Penne","id":22286,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22287,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22288,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22289,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22290,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22291,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22292,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22293,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22294,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22295,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22296,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22297,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22298,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22299,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22300,"ChoicePrice":""}],"MenuItemId":197198,"MenuItemName":"Pasta with Chicken Alfredo","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":16282894,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":15.45,"Choices":[{"ChoiceName":"Pasta","id":22301,"ChoicePrice":14.45},{"ChoiceName":"Spaghetti","id":22302,"ChoicePrice":""},{"ChoiceName":"Penne","id":22303,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22304,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22305,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22306,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22307,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22308,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22309,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22310,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22311,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22312,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22313,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22314,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22315,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22316,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22317,"ChoicePrice":""}],"MenuItemId":197199,"MenuItemName":"Pasta with Shrimp Alfredo","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10863904,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":14.7,"Choices":[{"ChoiceName":"Pasta","id":22318,"ChoicePrice":13.7},{"ChoiceName":"Spaghetti","id":22319,"ChoicePrice":""},{"ChoiceName":"Penne","id":22320,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22321,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22322,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22323,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22324,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22325,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22326,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22327,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22328,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22329,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22330,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22331,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22332,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22333,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22334,"ChoicePrice":""}],"MenuItemId":197200,"MenuItemName":"Pasta with Pink Sauce","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":3347046,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":15.25,"Choices":[{"ChoiceName":"Pasta","id":22335,"ChoicePrice":13.52},{"ChoiceName":"Spaghetti","id":22336,"ChoicePrice":""},{"ChoiceName":"Penne","id":22337,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22338,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22339,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22340,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22341,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22342,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22343,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22344,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22345,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22346,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22347,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22348,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22349,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22350,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22351,"ChoicePrice":""}],"MenuItemId":197201,"MenuItemName":"Veggie Pasta","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9712151,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Bacon & alfredo sauce.","MenuItemPrice":14.45,"Choices":[{"ChoiceName":"Pasta","id":22352,"ChoicePrice":13.45},{"ChoiceName":"Spaghetti","id":22353,"ChoicePrice":""},{"ChoiceName":"Penne","id":22354,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22355,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22356,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22357,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22358,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22359,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22360,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22361,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22362,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22363,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22364,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22365,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22366,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22367,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22368,"ChoicePrice":""}],"MenuItemId":197202,"MenuItemName":"Carbonara Pasta","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9436200,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Capers & black olive, marinara sauce.","MenuItemPrice":14.45,"Choices":[{"ChoiceName":"Pasta","id":22369,"ChoicePrice":13.45},{"ChoiceName":"Spaghetti","id":22370,"ChoicePrice":""},{"ChoiceName":"Penne","id":22371,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22372,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22373,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22374,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22375,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22376,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22377,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22378,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22379,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22380,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22381,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22382,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22383,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22384,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22385,"ChoicePrice":""}],"MenuItemId":197203,"MenuItemName":"Puttanesca Pasta","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12684311,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"In red sauce.","MenuItemPrice":17.25,"Choices":[{"ChoiceName":"Pasta","id":22386,"ChoicePrice":16.25},{"ChoiceName":"Spaghetti","id":22387,"ChoicePrice":""},{"ChoiceName":"Penne","id":22388,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22389,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22390,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22391,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22392,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22393,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22394,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22395,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22396,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22397,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22398,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22399,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22400,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22401,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22402,"ChoicePrice":""}],"MenuItemId":197204,"MenuItemName":"Seafood Pasta","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":16436932,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With fresh mozzarella cheese, fresh tomatoes & basil in a light garlic sauce.","MenuItemPrice":13.7,"Choices":[{"ChoiceName":"Pasta","id":22403,"ChoicePrice":12.7},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22404,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22405,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22406,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22407,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22408,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22409,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22410,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22411,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22412,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22413,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22414,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22415,"ChoicePrice":""}],"MenuItemId":197205,"MenuItemName":"Penne","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8459221,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":17.2,"Choices":[{"ChoiceName":"Pasta","id":22416,"ChoicePrice":16.2},{"ChoiceName":"Spaghetti","id":22417,"ChoicePrice":""},{"ChoiceName":"Penne","id":22418,"ChoicePrice":""},{"ChoiceName":"Liguine","id":22419,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22420,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22421,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22422,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22423,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22424,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22425,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22426,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22427,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22428,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22429,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22430,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22431,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22432,"ChoicePrice":""}],"MenuItemId":197206,"MenuItemName":"Chicken Broccoli Alfredo Pasta","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":14986810,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Pink sauce, bacon, peppers, mushrooms and cheese.","MenuItemPrice":15.7,"Choices":[{"ChoiceName":"Pasta","id":22433,"ChoicePrice":14.7},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22434,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22435,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22436,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22437,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22438,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22439,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22440,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22441,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22442,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22443,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22444,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22445,"ChoicePrice":""}],"MenuItemId":197207,"MenuItemName":"Penne Boscaiola","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11481807,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":"All pasta dishes are served with salad & hot bread."},{"Category_name":"Baked Dishes","category_id":13068,"MenuItem":[{"MenuItemPrice":13.25,"Choices":[{"ChoiceName":"Entree","id":22446,"ChoicePrice":13.25},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22447,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22448,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22449,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22450,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22451,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22452,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22453,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22454,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22455,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22456,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22457,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22458,"ChoicePrice":""}],"MenuItemId":197208,"MenuItemName":"Homemade Stuffed Shells","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7712891,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":13.25,"Choices":[{"ChoiceName":"Entree","id":22459,"ChoicePrice":13.25},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22460,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22461,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22462,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22463,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22464,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22465,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22466,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22467,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22468,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22469,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22470,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22471,"ChoicePrice":""}],"MenuItemId":197209,"MenuItemName":"Homemade Lasagna","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12143758,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":13.25,"Choices":[{"ChoiceName":"Entree","id":22472,"ChoicePrice":13.25},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22473,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22474,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22475,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22476,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22477,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22478,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22479,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22480,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22481,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22482,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22483,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22484,"ChoicePrice":""}],"MenuItemId":197210,"MenuItemName":"Homemade Manicotti","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9242076,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":12.75,"Choices":[{"ChoiceName":"Extree","id":22485,"ChoicePrice":12.75},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22486,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22487,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22488,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22489,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22490,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22491,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22492,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22493,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22494,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22495,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22496,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22497,"ChoicePrice":""}],"MenuItemId":197211,"MenuItemName":"Baked Ziti","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6977258,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":14.5,"Choices":[{"ChoiceName":"Entree","id":22498,"ChoicePrice":14.5},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22499,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22500,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22501,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22502,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22503,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22504,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22505,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22506,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22507,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22508,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22509,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22510,"ChoicePrice":""}],"MenuItemId":197212,"MenuItemName":"Baked Ravioli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10134297,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":14.5,"Choices":[{"ChoiceName":"Entree","id":22511,"ChoicePrice":14.5},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22512,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22513,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22514,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22515,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22516,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22517,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22518,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22519,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22520,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22521,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22522,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22523,"ChoicePrice":""}],"MenuItemId":197213,"MenuItemName":"Eggplant Parmigiana","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6799093,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Filled with spinach and cheese.","MenuItemPrice":15.25,"Choices":[{"ChoiceName":"Entree","id":22524,"ChoicePrice":15.25},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22525,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22526,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22527,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22528,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22529,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22530,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22531,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22532,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22533,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22534,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22535,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22536,"ChoicePrice":""}],"MenuItemId":197214,"MenuItemName":"Eggplant Rollatini","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4384765,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With ricotta cheese, mozzarella cheese, parmesan cheese.","MenuItemPrice":13.5,"Choices":[{"ChoiceName":"Entree","id":22537,"ChoicePrice":13.5},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22538,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22539,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22540,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22541,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22542,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22543,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22544,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22545,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22546,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22547,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22548,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22549,"ChoicePrice":""}],"MenuItemId":197215,"MenuItemName":"Gnocchi Roma","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6066803,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":"All baked dishes served with salad & hot bread."},{"Category_name":"Italian Specialties","category_id":13069,"MenuItem":[{"MenuItemPrice":14.95,"Choices":[{"ChoiceName":"Entree","id":22550,"ChoicePrice":14.95},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22551,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22552,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22553,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22554,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22555,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22556,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22557,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22558,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22559,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22560,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22561,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22562,"ChoicePrice":""}],"MenuItemId":197216,"MenuItemName":"Chicken Parmigiana","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4170493,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Chicken breast sauteed in lemon, capers, white wine and butter.","MenuItemPrice":13.95,"Choices":[{"ChoiceName":"Entree","id":22563,"ChoicePrice":13.95},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22564,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22565,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22566,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22567,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22568,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22569,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22570,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22571,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22572,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22573,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22574,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22575,"ChoicePrice":""}],"MenuItemId":197217,"MenuItemName":"Chicken Picata","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9087935,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Chicken breast sauteed in garlic, green peppers, onions and mushrooms in a light marinara sauce.","MenuItemPrice":13.95,"Choices":[{"ChoiceName":"Entree","id":22576,"ChoicePrice":13.95},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22577,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22578,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22579,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22580,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22581,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22582,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22583,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22584,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22585,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22586,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22587,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22588,"ChoicePrice":""}],"MenuItemId":197218,"MenuItemName":"Chicken Cacciatore","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5317502,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Alfredo or lemon sauce.","MenuItemPrice":14.25,"Choices":[{"ChoiceName":"Entree","id":22589,"ChoicePrice":14.24},{"ChoiceName":"Alfredo Sauce","id":22590,"ChoicePrice":""},{"ChoiceName":"Lemon Sauce","id":22591,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22592,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22593,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22594,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22595,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22596,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22597,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22598,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22599,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22600,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22601,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22602,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22603,"ChoicePrice":""}],"MenuItemId":197219,"MenuItemName":"Chicken & Broccoli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5284642,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Artichokes and roasted peppers.","MenuItemPrice":14.25,"Choices":[{"ChoiceName":"Entree","id":22604,"ChoicePrice":14.25},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22605,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22606,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22607,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22608,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22609,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22610,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22611,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22612,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22613,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22614,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22615,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22616,"ChoicePrice":""}],"MenuItemId":197220,"MenuItemName":"Chicken Kelly","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6191515,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Chicken breast sauteed in marinara sauce with capers and black olives. Topped with prosciutto and fresh mozzarella cheese.","MenuItemPrice":17.45,"Choices":[{"ChoiceName":"Entree","id":22617,"ChoicePrice":17.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22618,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22619,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22620,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22621,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22622,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22623,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22624,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22625,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22626,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22627,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22628,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22629,"ChoicePrice":""}],"MenuItemId":197221,"MenuItemName":"Chicken Toscano","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7832957,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":14.45,"Choices":[{"ChoiceName":"Entree","id":22630,"ChoicePrice":14.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22631,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22632,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22633,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22634,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22635,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22636,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22637,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22638,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22639,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22640,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22641,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22642,"ChoicePrice":""}],"MenuItemId":197222,"MenuItemName":"Penne Vodka with Grilled Chicken","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10552071,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Spinach and provolone cheese.","MenuItemPrice":15.45,"Choices":[{"ChoiceName":"Entree","id":22643,"ChoicePrice":15.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22644,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22645,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22646,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22647,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22648,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22649,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22650,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22651,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22652,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22653,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22654,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22655,"ChoicePrice":""}],"MenuItemId":197223,"MenuItemName":"Chicken Saltimbocca","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8181308,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":13.45,"Choices":[{"ChoiceName":"Entree","id":22656,"ChoicePrice":15.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22657,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22658,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22659,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22660,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22661,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22662,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22663,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22664,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22665,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22666,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22667,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22668,"ChoicePrice":""}],"MenuItemId":197224,"MenuItemName":"Chicken Genovese","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4419737,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Chicken, mushrooms, garlic, seasoned tomatoes over pasta.","MenuItemPrice":16.45,"Choices":[{"ChoiceName":"Entree","id":22669,"ChoicePrice":16.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22670,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22671,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22672,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22673,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22674,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22675,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22676,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22677,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22678,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22679,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22680,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22681,"ChoicePrice":""}],"MenuItemId":197225,"MenuItemName":"Chicken Olanda","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":2229321,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Chicken with garlic, lettuce, sauce over broccoli rabe and pasta.","MenuItemPrice":16.45,"Choices":[{"ChoiceName":"Entree","id":22682,"ChoicePrice":16.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22683,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22684,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22685,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22686,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22687,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22688,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22689,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22690,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22691,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22692,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22693,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22694,"ChoicePrice":""}],"MenuItemId":197226,"MenuItemName":"Chicken & Shrimp Castello","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5558539,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":14.75,"Choices":[{"ChoiceName":"Entree","id":22695,"ChoicePrice":14.75},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22696,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22697,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22698,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22699,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22700,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22701,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22702,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22703,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22704,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22705,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22706,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22707,"ChoicePrice":""}],"MenuItemId":197227,"MenuItemName":"Veal Parmigiana","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12289831,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":15.0,"Choices":[{"ChoiceName":"Entree","id":22708,"ChoicePrice":15.0},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22709,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22710,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22711,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22712,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22713,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22714,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22715,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22716,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22717,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22718,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22719,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22720,"ChoicePrice":""}],"MenuItemId":197228,"MenuItemName":"Veal Marsala","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":18567773,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With prosciutto, fresh mozzarella cheese, sliced tomatoes in cream sauce.","MenuItemPrice":15.75,"Choices":[{"ChoiceName":"Entree","id":22721,"ChoicePrice":15.75},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22722,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22723,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22724,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22725,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22726,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22727,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22728,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22729,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22730,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22731,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22732,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22733,"ChoicePrice":""}],"MenuItemId":197229,"MenuItemName":"Veal Prussia","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":14307913,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Prosciutto, spinach and provolone cheese.","MenuItemPrice":16.45,"Choices":[{"ChoiceName":"Entree","id":22734,"ChoicePrice":16.45},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22735,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22736,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22737,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22738,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22739,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22740,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22741,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22742,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22743,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22744,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22745,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22746,"ChoicePrice":""}],"MenuItemId":197230,"MenuItemName":"Veal Saltimbocca","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9431213,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Black olives, sweet peppers, marinara sauce.","MenuItemPrice":15.25,"Choices":[{"ChoiceName":"Entree","id":22747,"ChoicePrice":15.25},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22748,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22749,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22750,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22751,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22752,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22753,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22754,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22755,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22756,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22757,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22758,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22759,"ChoicePrice":""}],"MenuItemId":197231,"MenuItemName":"Veal Pizzaiola","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11971314,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Sauteed in garlic sauce, green peppers, mushrooms and marinara sauce.","MenuItemPrice":16.95,"Choices":[{"ChoiceName":"Entree","id":22760,"ChoicePrice":16.95},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22761,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22762,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22763,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22764,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22765,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22766,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22767,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22768,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22769,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22770,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22771,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22772,"ChoicePrice":""}],"MenuItemId":197232,"MenuItemName":"Veal Scaloppine","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12185675,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Mussels, clams scallops in light marinara sauce.","MenuItemPrice":17.95,"Choices":[{"ChoiceName":"Entree","id":22773,"ChoicePrice":17.95},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22774,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22775,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22776,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22777,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22778,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22779,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22780,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22781,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22782,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22783,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22784,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22785,"ChoicePrice":""}],"MenuItemId":197233,"MenuItemName":"Seafood Combination","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":16676108,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":13.95,"Choices":[{"ChoiceName":"Entree","id":22786,"ChoicePrice":13.95},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22787,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22788,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22789,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22790,"ChoicePrice":""},{"ChoiceName":"Ranch Dressing","id":22791,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22792,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22793,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22794,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22795,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22796,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22797,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22798,"ChoicePrice":""}],"MenuItemId":197234,"MenuItemName":"Shrimp Scampi","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8338176,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With a side of pasta.","MenuItemPrice":15.95,"Choices":[{"ChoiceName":"Entree","id":22799,"ChoicePrice":15.95},{"ChoiceName":"Spaghetti","id":22800,"ChoicePrice":""},{"ChoiceName":"Penne","id":22801,"ChoicePrice":""},{"ChoiceName":"Linguine","id":22802,"ChoicePrice":""},{"ChoiceName":"Fettuccine","id":22803,"ChoicePrice":""},{"ChoiceName":"Balsamic Vinegar & Oil Dressing","id":22804,"ChoicePrice":""},{"ChoiceName":"Lite Italian Dressing","id":22805,"ChoicePrice":""},{"ChoiceName":"Italian Dressing","id":22806,"ChoicePrice":""},{"ChoiceName":"Creamy Italian Dressing","id":22807,"ChoicePrice":""},
	{"ChoiceName":"Ranch Dressing","id":22808,"ChoicePrice":""},{"ChoiceName":"French Dressing","id":22809,"ChoicePrice":""},{"ChoiceName":"Russian Dressing","id":22810,"ChoicePrice":""},{"ChoiceName":"Bleu Cheese Dressing","id":22811,"ChoicePrice":""},{"ChoiceName":"Caesar Dressing","id":22812,"ChoicePrice":""},{"ChoiceName":"Honey Mustard Dressing","id":22813,"ChoicePrice":""},{"ChoiceName":"No Dressing","id":22814,"ChoicePrice":""},{"ChoiceName":"Extra Dressing","id":22815,"ChoicePrice":""}],"MenuItemId":197235,"MenuItemName":"Tilapia Marinara","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9651557,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":"All Italian specialties served with salad & hot bread."},{"Category_name":"Steaks","category_id":13070,"MenuItem":[{"MenuItemPrice":9.25,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22816,"ChoicePrice":8.25},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22817,"ChoicePrice":""},
	{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22818,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22819,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22820,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22821,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22822,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22823,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22824,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22825,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22826,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22827,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22828,"ChoicePrice":""}],"MenuItemId":197236,"MenuItemName":"Plain Steak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7630532,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.75,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22829,"ChoicePrice":8.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22830,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22831,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22832,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22833,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22834,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22835,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22836,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22837,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22838,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22839,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22840,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22841,"ChoicePrice":""}],"MenuItemId":197237,"MenuItemName":"Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6676954,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.7,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22842,"ChoicePrice":8.7},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22843,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22844,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22845,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22846,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22847,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22848,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22849,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22850,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22851,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22852,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22853,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22854,"ChoicePrice":""}],"MenuItemId":197238,"MenuItemName":"Pizza Steak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6073680,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.1,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22855,"ChoicePrice":8.1},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22856,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22857,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22858,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22859,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22860,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22861,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22862,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22863,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22864,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22865,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22866,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22867,"ChoicePrice":""}],"MenuItemId":197239,"MenuItemName":"Mushroom Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6120079,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.1,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22868,"ChoicePrice":8.1},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22869,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22870,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22871,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22872,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22873,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22874,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22875,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22876,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22877,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22878,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22879,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22880,"ChoicePrice":""}],"MenuItemId":197240,"MenuItemName":"Bacon Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":15911389,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.1,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22881,"ChoicePrice":8.1},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22882,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22883,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22884,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22885,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22886,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22887,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22888,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22889,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22890,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22891,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22892,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22893,"ChoicePrice":""}],"MenuItemId":197241,"MenuItemName":"Green Pepper Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":14618408,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.1,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22894,"ChoicePrice":8.1},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22895,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22896,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22897,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22898,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22899,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22900,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22901,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22902,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22903,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22904,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22905,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22906,"ChoicePrice":""}],"MenuItemId":197242,"MenuItemName":"Pepperoni Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":13241393,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.45,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22907,"ChoicePrice":8.45},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22908,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22909,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22910,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22911,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22912,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22913,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22914,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22915,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22916,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22917,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22918,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22919,"ChoicePrice":""}],"MenuItemId":197243,"MenuItemName":"Garlic Bread Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":15730597,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Lettuce, tomatoes, onions.","MenuItemPrice":9.3,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22920,"ChoicePrice":8.3},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22921,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22922,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22923,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22924,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22925,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22926,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22927,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22928,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22929,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22930,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22931,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22932,"ChoicePrice":""}],"MenuItemId":197244,"MenuItemName":"Steak Hoagie","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10060454,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Lettuce, tomatoes, onions.","MenuItemPrice":8.95,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22933,"ChoicePrice":7.95},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22934,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22935,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22936,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22937,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22938,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22939,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22940,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22941,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22942,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22943,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22944,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22945,"ChoicePrice":""}],"MenuItemId":197245,"MenuItemName":"Cheesesteak Hoagie","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12569367,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Chicken Steaks","category_id":13071,"MenuItem":[{"MenuItemPrice":8.25,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22946,"ChoicePrice":8.25},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22947,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22948,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22949,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22950,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22951,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22952,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22953,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22954,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22955,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22956,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22957,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22958,"ChoicePrice":""}],"MenuItemId":197246,"MenuItemName":"Chicken Steak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":2261885,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.75,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22959,"ChoicePrice":8.75},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22960,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22961,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22962,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22963,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22964,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22965,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22966,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22967,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22968,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22969,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22970,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22971,"ChoicePrice":""}],"MenuItemId":197247,"MenuItemName":"Chicken Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":9946952,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.35,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22972,"ChoicePrice":8.35},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22973,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22974,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22975,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22976,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22977,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22978,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22979,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22980,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22981,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22982,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22983,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22984,"ChoicePrice":""}],"MenuItemId":197248,"MenuItemName":"Chicken Pizza Steak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":4112096,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.7,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22985,"ChoicePrice":8.7},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22986,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22987,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22988,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22989,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22990,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22991,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22992,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22993,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22994,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22995,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22996,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":22997,"ChoicePrice":""}],"MenuItemId":197249,"MenuItemName":"Pizza Chicken Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8415563,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With lettuce, tomatoes & onions.","MenuItemPrice":8.7,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22998,"ChoicePrice":8.7},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":22999,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23000,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23001,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23002,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23003,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23004,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23005,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23006,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23007,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23008,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23009,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":23010,"ChoicePrice":""}],"MenuItemId":197250,"MenuItemName":"Chicken Cheesesteak Hoagie","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":8816700,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"With hot sauce & bleu cheese.","MenuItemPrice":8.7,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23011,"ChoicePrice":8.7},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23012,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23013,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23014,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23015,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23016,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23017,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23018,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23019,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23020,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23021,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23022,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":23023,"ChoicePrice":""}],"MenuItemId":197251,"MenuItemName":"Buffalo Chicken Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":5904275,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":8.85,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23024,"ChoicePrice":8.25},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23025,"ChoicePrice":""},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23026,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23027,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23028,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23029,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23030,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23031,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23032,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23033,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23034,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23035,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23036,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":23037,"ChoicePrice":""}],"MenuItemId":197252,"MenuItemName":"Everything Chicken Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":11920915,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":9.05,"Choices":[{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23038,"ChoicePrice":9.05},{"ChoiceName":"Special Topping","LeftPrice":5.0,"RightPrice":5.0,"WholePrice":10.0,"id":20696,"ChoicePrice":1},{"ChoiceName":"Sausage","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23039,"ChoicePrice":""},{"ChoiceName":"Pepperoni","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23040,"ChoicePrice":""},{"ChoiceName":"Mushrooms","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23041,"ChoicePrice":""},{"ChoiceName":"Onions","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23042,"ChoicePrice":""},{"ChoiceName":"Green Peppers","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23043,"ChoicePrice":""},{"ChoiceName":"Olives","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23044,"ChoicePrice":""},{"ChoiceName":"Anchovies","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23045,"ChoicePrice":""},{"ChoiceName":"Meatballs","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23046,"ChoicePrice":""},{"ChoiceName":"Steak","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23047,"ChoicePrice":""},{"ChoiceName":"Extra Cheese","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23048,"ChoicePrice":""},{"ChoiceName":"Bacon","LeftPrice":2.0,"RightPrice":2.0,"WholePrice":4.0,"id":23049,"ChoicePrice":""},{"ChoiceName":"American Cheese","id":23050,"ChoicePrice":""}],"MenuItemId":197253,"MenuItemName":"Everything Cheesesteak","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":3134461,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Ribs","category_id":13072,"MenuItem":[{"MenuItemDetail":"Served with fries and coleslaw.","MenuItemPrice":11.49,"Choices":[{"ChoiceName":"Half Rack","id":23051,"ChoicePrice":11.49},{"ChoiceName":"Full Rack","id":23052,"ChoicePrice":""}],"MenuItemId":197254,"MenuItemName":"Ribs","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":838508,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Desserts","category_id":13073,"MenuItem":[{"MenuItemPrice":4.25,"Choices":[{"ChoiceName":"Dessert","id":23053,"ChoicePrice":4.25}],"MenuItemId":197255,"MenuItemName":"Triple Chocolate Lava Cake","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":7393011,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemDetail":"Italian pastry.","MenuItemPrice":4.25,"Choices":[{"ChoiceName":"Dessert","id":23054,"ChoicePrice":4.25}],"MenuItemId":197256,"MenuItemName":"Sfogliatella","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":6100005,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":4.25,"Choices":[{"ChoiceName":"Dessert","id":23055,"ChoicePrice":4.25}],"MenuItemId":197257,"MenuItemName":"Cannoli","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":16827338,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":4.25,"Choices":[{"ChoiceName":"Dessert","id":23056,"ChoicePrice":4.25}],"MenuItemId":197258,"MenuItemName":"Cheesecake","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":14034964,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":4.25,"Choices":[{"ChoiceName":"Dessert","id":23057,"ChoicePrice":4.25}],"MenuItemId":197259,"MenuItemName":"Fruit Salad","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":18703675,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""},{"Category_name":"Beverages","category_id":13074,"MenuItem":[{"MenuItemPrice":2.5,"Choices":[{"ChoiceName":"20 OZ","id":23058,"ChoicePrice":2.5},{"ChoiceName":"2 Liter","id":23059,"ChoicePrice":""},{"ChoiceName":"Coke","id":23060,"ChoicePrice":""},{"ChoiceName":"Sprite","id":23061,"ChoicePrice":""},{"ChoiceName":"Diet Coke","id":23062,"ChoicePrice":""},{"ChoiceName":"Root Beer","id":23063,"ChoicePrice":""},{"ChoiceName":"Dr. Pepper","id":23064,"ChoicePrice":""},{"ChoiceName":"Apple Juice","id":23065,"ChoicePrice":""},{"ChoiceName":"Cranberry Juice","id":23066,"ChoicePrice":""},{"ChoiceName":"Iced Tea","id":23067,"ChoicePrice":""},{"ChoiceName":"Grape","id":23068,"ChoicePrice":""},{"ChoiceName":"Orange","id":23069,"ChoicePrice":""},{"ChoiceName":"Pepsi","id":23070,"ChoicePrice":""},{"ChoiceName":"Diet Pepsi","id":23071,"ChoicePrice":""},{"ChoiceName":"Ginger Ale","id":23072,"ChoicePrice":""}],"MenuItemId":197260,"MenuItemName":"Soft Drinks","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":3308571,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":2.25,"Choices":[{"ChoiceName":"Beverage","id":23073,"ChoicePrice":2.25}],"MenuItemId":197261,"MenuItemName":"Milk","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":12502710,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}},{"MenuItemPrice":6.5,"Choices":[{"ChoiceName":"Beverage","id":23074,"ChoicePrice":6.5}],"MenuItemId":197262,"MenuItemName":"Gallon of Milk","Menuitemdetails":{"Menu_item_Detail_detail":"","Price":"","Size":""},"MenuItemCode":10534790,"ExtraItems":{"ExtraPrice":"","id":"","Extraname":""}}],"Category_Detail":""}]
	
	}

		
var camelize = function (str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};
var divid = 1;

for (i in myObj.MenuJson) {


    divid = divid + 1;


}
x += "</div>";
x += "</div>"
x += "<div class='container-fluid tabsection' id='maindivforitems'";
x += "<div class='row'>";
x += "<div class='col-md-9 Mobiletabs' >";
x += "<div class='cart'>";



x += "<ul class='nav nav-tabs' role='tablist'>";
var q = 1;
frag = document.createDocumentFragment();
select = document.createElement("select");
var newdivforoption = document.createElement("div");
for (i in myObj.MenuJson) {

    var categoryname = myObj.MenuJson[i].Category_name;

   
    if (i < 21) {
        x += "<li><a class='CategoryName ' onclick='displayblock(" + q + ")' >" + camelize(categoryname) + "</a></li>";
    } else if (i ==21) {

        x += " <div class='dropdown'>";
           x+="<button class='mydropbtn' onclick='myFunction()'>More ";

        x += " <i class='fa fa-caret-down'></i>";
        x += "</button>";
          x+="<div class='dropdown-content'   id='myDropdown'>";
        x += "<li><a class='CategoryName' onclick='displayblock(" + q + ")' >" + camelize(categoryname) + "</a></li>";

    } else {

        x += "<li><a class='CategoryName' onclick='displayblock(" + q + ")' >" + camelize(categoryname) + "</a></li>";


    }

    q = q + 1;



}
x += "</ul>";
x += "</div></div>";
x += "<div class='row'>";
x += "<div class='col-md-8 MenuDetail'>";
var s = 1,
    u = 1;
var cat_name;
for (i in myObj.MenuJson) {

    x += "<div id='" + u + "' class='media-categorys" + s + "' style='display: none;'>";
    x += " <center><h2>" + myObj.MenuJson[i].Category_name + "</h2></center>"
	cat_name=myObj.MenuJson[i].Category_name;
	cat_name= cat_name.replace(/[^A-Z0-9 ]+/ig, '');
    u = u + 1;

    for (j in myObj.MenuJson[i].MenuItem) {
        var name = myObj.MenuJson[i].MenuItem[j].MenuItemName;
        name = name.replace(/[^A-Z0-9]+/ig, '');

        x += "<div class='media-dish" + s + "' data-c_name='"+camelize(cat_name)+"' id='" + name + "' data-menuitemprice='" + myObj.MenuJson[i].MenuItem[j].MenuItemPrice + "'>";
        x += "<div class='media-body'>";

        var menuitemprice, menuid;

        menuitemprice = myObj.MenuJson[i].MenuItem[j].MenuItemPrice;

        menuid = myObj.MenuJson[i].MenuItem[j].MenuItemId;
        


        if (myObj.MenuJson[i].MenuItem[j].MenuItemName) {
            x += "<h4 class='media-heading'  style='margin-top: 10px;     margin-left: 1%;'>" + camelize(myObj.MenuJson[i].MenuItem[j].MenuItemName);
            if (menuitemprice) {
                x += "<div class='pull-right itemprice' style='margin-right: 9px;' >" + menuitemprice + "</div></h4>";
            }
        } else {
            x += "<h4 class='media-heading'  style='margin-top: 10px;     margin-left: 1%;'>" + camelize(myObj.MenuJson[i].MenuItem[j].MenuItemName) + "<div class='pull-right' style='margin-right: 9px;' ></div></h4>";

        }
        if (myObj.MenuJson[i].MenuItem[j].MenuItemDetail) {
            x += "</h4><p id='hello' style='margin-left: 1%;'>" + myObj.MenuJson[i].MenuItem[j].MenuItemDetail + "</p>";
        }
        for (k in myObj.MenuJson[i].MenuItem[j].Menuitemdetails) {
            var increment = 0;
            var detailsize = myObj.MenuJson[i].MenuItem[j].Menuitemdetails[k].Size;
            var detailprice = myObj.MenuJson[i].MenuItem[j].Menuitemdetails[k].Price;

            var detaildetails = myObj.MenuJson[i].MenuItem[j].Menuitemdetails[k].Menu_item_Detail_detail;
            var detailname = detailsize;
            if (detailsize != null || detailsize != "" || detailsize != "undefined") {


            }

        }

        x += "<button  class='addtocartbtn' value='" + menuid + "' id='" + name + "' data-detailprice='" + detailprice + "' data-optionid='" + detailname + "'>Add </buton>";

        x += "<ul>";

        if (name != "") {

        } else {
           

        }


        x += "</ul>"
        x += "</ul>"


        x += "</div>";
        x += "</div>";




    }

    x += "</ul></div>";

}

y += " <div id='cartitems' class='right-checkout col-md-3' >";

y += "<div class='panel panel-danger' style='height:100%'>";
// y+="<div id='New-Totaldiv' class='TotalAmount'><span>Total Amount</span><span id='New-Total1'></span></div>";

y += "<div class='panel-heading' style=''>Your Order</div>";

y += "<div class='headingcart'><table class='table table-stripe'><tbody><tr><th>Item</th><th></th><th></th><th></th><th></th><th > Price</th></tr> </tbody></table></div>";

y += "<div>";
y += "<div id='show-cart' class='show-cart'>";

y += "<div class='listitems'>??????????</div>";
y += "</div>";

y += "<hr><div class='Subtotal'>Subtotal<span>$<span><span id='total-cart'></span></div><hr>";

if(DicountPersent>0){
y += "<hr><div id='AddDiscountdiv' class='TaxDiv'>0% Discount<span id='AddDiscount'>0%</span></div>";
}

y += "<hr><div id='AddTaxdiv' class='TaxDiv'>"+TaxRate+" % Sales Tax<span id='AddTax'>"+TaxRate+"</span></div><hr>";

/*y += "<hr>";
y += "<div id='AddTip' class='AddTip'>";
y += "<label class='container' >0%";
 y += " <input type='radio' value='0' checked='checked' onclick='calculateTips();' name='aradio'>";
 y += " <span class='checkmark'></span>";
y += "</label>";
y += "<label class='container' >5%";
 y += " <input type='radio' value='5' onclick='calculateTips();' name='aradio'>";
 y += " <span class='checkmark'></span>";
y += "</label>";
y += "<label class='container' >10%";
 y += " <input type='radio' value='10' onclick='calculateTips();'  name='aradio'>";
 y += " <span class='checkmark'></span>";
y += "</label>";
y += "<label class='container'   >15%";
 y += " <input type='radio' name='aradio' value='15'  onclick='calculateTips();' >";
  y += "<span class='checkmark'></span>";
y += "</label>";
y += "<label class='container' >20%";
 y += " <input type='radio' name='aradio' value='20' onclick='calculateTips();'>";
  y += "<span class='checkmark'></span>";
y += "</label>";
y += "<div class='containers'>Custom Tip $ ";
 y += " <input type='text' onchange='calculateTipsCustom();'  id='inputtip' name='inputtip'>";
  y += "<span class='checkmark'></span>";
y += "</div>";

y+="<hr></div>";

y += "<div id='maintipdiv' class='DeliveryCharges' style='display:none;'>Tip <span id='tipdiv'></span><hr></div>";
*/
y += "<div id='deliverydiv' class='DeliveryCharges' style='display:none;'>Delivery Charges<span id='DeliveryCharges'></span ><hr></div>";
if(processingfee>0){
y += "<hr><div id='processingdiv' class='processingfee'>Processing Fee "+processingfee+"% <span id='processingfee'> </span ><hr></div>";
}
y += "<div id='New-Totaldiv' class='TotalAmount'><span>Total Amount</span><span id='New-Total'></span><hr></div>";

y += "<div class='DeliveryContainer'>";

y += "<div class='checkoutdetails'>";


y += " <div id='emotion' class='row OrderSectionDiv'>";
/* y+=" <label class='order_type'>Order Type: </label><br>"; */
y+="<h3 id='displaycheck' style='display:none;color:red;'>.</h3>";

y += " <input type='submit' onclick='loginChk();' name='contact' value='Checkout' id='submitorder' class='btn btn-primary  btn-sq-xs btn-danger SubmitOrder' class='check_out' style='font-size: 19px'; disabled>";




y += "</div>";


y += "</div>";
var d = document.getElementById("demo");
var discount;
d.innerHTML = x;

document.getElementById("rightside").innerHTML = y;

function calculateTips(){

	//var getvalueoftip=document.getElementsByName("aradio").value;
var pervalue=$('input[name=aradio]:checked').val();
var total=$('#total-cart').text();


var AddTaxs = $('#AddTax').text();
AddTaxs= AddTaxs.replace('$', '');

//AddTaxs=AddTaxs.toFixed(2);
var pervalues = (total / 100) * pervalue;
pervalues=pervalues.toFixed(2);
var tipdivvalue = document.getElementById("maintipdiv");
var totalrate = document.getElementById("New-Total");
var totalratetop = document.getElementById("usernametop");
        //tipdivvalue.style.display = 'block';
		 var gettotalvalue = shoppingCart.totalCart();
		 //gettotalvalue= gettotalvalue.replace(/[^.-9 ]+/ig, '');
	
jQuery("#tipdiv").text("$" + pervalues);

var processingfeepers=gettotalvalue/100*processingfee;
console.log("Tip Value"+processingfeepers);
	 add=+gettotalvalue + +pervalues;
	 add=+add + +AddTaxs;
	 add=add+processingfeepers;
	add=add.toFixed(2);
  totalrate.innerHTML = add;
   totalratetop.innerHTML = add;
  

	
}
function calculateTipsCustom(){

	//var getvalueoftip=document.getElementsByName("aradio").value;
	var AddTaxs = $('#AddTax').text();
AddTaxs= AddTaxs.replace('$', '');
console.log(AddTaxs);
var pervalue=$('#inputtip').val();
var total=$('#total-cart').text();

//var pervalues = (total / 100) * pervalue;

var tipdivvalue = document.getElementById("maintipdiv");
var totalrate = document.getElementById("New-Total");
var totalratetop = document.getElementById("usernametop");
        tipdivvalue.style.display = 'block';
		 var gettotalvalue = shoppingCart.totalCart();
		 //gettotalvalue= gettotalvalue.replace(/[^.-9 ]+/ig, '');
	
jQuery("#tipdiv").text("$" + pervalue);

	 add=+gettotalvalue + +pervalue;
	  add=+add + +AddTaxs;
	  add=add+processingfee;
	add=add.toFixed(2);
	
  totalrate.innerHTML = add;
   totalratetop.innerHTML = add;

	
}

function deliversection() {
    var gettotalvalue1 = shoppingCart.totalCart();
    var gettotalvalue2 = parseFloat(gettotalvalue1) + 1;
    // alert(gettotalvalue2);
    if (document.getElementById("DeliveryId").checked == true) {
        var deliverydivvalue = document.getElementById("deliverydiv");
        deliverydivvalue.style.display = 'block';
        
        deliverydivvalue.innerHTML = 'Delivery Charges <span> $' + DeliveryCharges + '</span>';
        var gettotalvalue = $('#New-Total').text();
        var gettotalvalue1 = $('#New-Total1').text();
        // gettotalvalue=gettotalvalue.replace(/[^\d\.]/g, '');
        //  alert(gettotalvalue);
        //    var gettotalvalue=3;
        var subtotal = $('#total-cart').html();
        var taxamount = (subtotal / 100) * TaxRate;
        discount = (subtotal / 100) * DicountPersent;
        discount = discount.toFixed(2);
        taxamount = taxamount.toFixed(2);
        gettotalvalue = gettotalvalue2 + parseFloat(DeliveryCharges) + parseFloat(taxamount);
        gettotalvalue = gettotalvalue.toFixed(2);
        jQuery("#New-Total").text("$" + gettotalvalue);
        gettotalvalue1 = gettotalvalue2 + parseFloat(DeliveryCharges) + parseFloat(taxamount) + parseFloat(discount);
        gettotalvalue1 = gettotalvalue1.toFixed(2);
        jQuery("#New-Total1").text("$" + gettotalvalue1);
    } else {

    }
    var x = document.getElementById("delivery_Section");
    x.style.display = 'block';
}
function OrderLater() {
    $("#laterFeature").show("slow");


    $('#delivery_weekday').change(function() {
        var idx = this.selectedIndex;

        for (i in myObj.Restaurant_Hours) {
            var date = new Date();

            var day = date.getDate();

            var month = date.getMonth();


            var year = date.getFullYear();

            var n = idx;
  var today = new Date();

            if (n == 1) {
                n = "Monday";
             
                var day = today.getDay() || 7;
                if (day !== 1)
                    today.setHours(-24 * (day - 1));


            }

            if (n == 2) {
                n = "Tuesday";
                
                var day = today.getDay() || 7;
                if (day !== 1)
                    today.setHours(-24 * (day - 2));

                console.log(today);
            }

            if (n == 3) {
                n = "Wednesday";
               
                var day = today.getDay() || 7;
                if (day !== 1)
                    today.setHours(-24 * (day - 3));

                console.log(today);
            }

            if (n == 4) {
                n = "Thursday";
                var today = new Date();
                var day = today.getDay() || 7;
                if (day !== 1)
                    today.setHours(-24 * (day - 4));

                console.log(today);
            }

            if (n == 5) {
                n = "Friday";

            
                var day = today.getDay() || 7;
                if (day !== 1)
                    today.setHours(-24 * (day - 5));

                console.log(today);
            }

            if (n == 6) {
                n = "Saturday";
               
                var day = today.getDay() || 7;
                if (day !== 1)
                    today.setHours(-24 * (day - 6));

                console.log(today);
            }

            if (n == 7) {
                n = "Sunday";
           
                var day = today.getDay() || 7;
                if (day !== 1)
                    today.setHours(-24 * (day - 7));

                console.log(today);
            }
          
            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;

            var today1 = year + "-" + month + "-" + day;
			

          if (n === myObj.Restaurant_Hours[i].day) {
                if (n == "Monday" ) {

                    var day = today.getDay() || 7;
                    if (day !== 1)
                        today.setHours(-24 * (day - 1));

                    console.log("date" + today);
                    n = today;
                }
                if (n == "Tuesday") {

                    var day = today.getDay() || 7;
                    if (day !== 1)
                        today.setHours(-24 * (day - 2));

                    console.log("date" + today);
                    n = today;
                }
                if (n == "Wednesday") {

                    var day = today.getDay() || 7;
                    if (day !== 1)
                        today.setHours(-24 * (day - 3));

                    console.log("date" + today);
                    n = today;
                }
                if (n == "Thursday") {

                    var day = today.getDay() || 7;
                    if (day !== 1)
                        today.setHours(-24 * (day - 4));

                    console.log("date" + today);
                    n = today;
                }
                if (n == "Friday") {

                    var day = today.getDay() || 7;
                    if (day !== 1)
                        today.setHours(-24 * (day - 5));

                    console.log("date" + today);
                    n = today;
                }
                if (n == "Saturday") {

                    var day = today.getDay() || 7;
                    if (day !== 1)
                        today.setHours(-24 * (day - 6));

                    console.log("date" + today);
                    n = today;
                }
                if (n == "Sunday") {

                    var day = today.getDay() || 7;
                    if (day !== 1)
                        today.setHours(-24 * (day - 7));

                    console.log("date" + today);
                    n = today;
                }


                var starttime = myObj.Restaurant_Hours[i].StartTime;
                var endtimes = myObj.Restaurant_Hours[i].EndTime;

                document.getElementById("delivery_time").innerHTML = "";
                var timeArray = [],
                    d = new Date(),
                    h = d.getHours(),
                    m = d.getMinutes(),
                    meridiem = ['AM', 'PM'];
                var o;
                for (var i = starttime; i <= endtimes; ++i) {
                    for (var j = i == h ? Math.ceil(m / 15) : 0; j < 4; ++j) {

                        timeArray.push(i % 12 + ':' + (j * 15 || '00') + ' ' + meridiem[i / 12 | 0]);
                        var g = (i % 12 + ':' + (j * 15 || '00') + ' ' + meridiem[i / 12 | 0]);
                        o += "<option value='" + g + "'>" + g + "</option>";

                    }
                }

                document.getElementById("delivery_time").innerHTML = o;

                var OrderLaterDetail1 = n;
                var LaterTimeDate = "";
                var OrderLaterDetail2 = $("#delivery_time option:selected").val();
                //alert(OrderLaterDetail2);
                var OrderLaterDetail = OrderLaterDetail1 + OrderLaterDetail2;

                $('#delivery_time').change(function() {
                    var today1 = new Date();
                    today1.setHours(today.getHours() + MaxHour);
                    
						var curdatetoday=new Date();
						
						if(today<curdatetoday){
							var time=document.getElementById("TImeInterval");
							time.style.display = 'block';
								var cashonlineorder=document.getElementById("cashonlineorder");
								cashonlineorder.style.display = 'none';
							time.innerHTML="Minimum Order Ahead Time 24 Hours  ";
							
						}
                   else if (today1 < today  ) {
						var time=document.getElementById("TImeInterval");
						var cashonlineorder=document.getElementById("cashonlineorder");
								cashonlineorder.style.display = 'none';
							time.style.display = 'block';
							time.innerHTML="Order Range must not exceed " + MaxHour/24 + "Days";
                   
						
                    }
					else{
						var cashonlineorder=document.getElementById("cashonlineorder");
								cashonlineorder.style.display = 'block';
								var time=document.getElementById("TImeInterval");
									time.style.display = 'none';
                    var Latertime = $(this).val(); 
                    LaterTimeDate = today.setTime(Latertime) + " " + "at" + " " + Latertime;
                    console.log("Selected Time And Date" + LaterTimeDate);
                    $("#LaterDeliveryTime").val(LaterTimeDate);
					}
                });
                //alert(Latertime);
            } else {

            }
        }
    });

}
function OrderNow() {
    $("#laterFeature").hide("slow");
}

function pickupsection() {




    if ($('input[name=order_type]:checked').val() == "Pick Up") {
        var deliverydivvalue = document.getElementById("delivery_Section");
        deliverydivvalue.style.display = 'none';

        var gettotalvalue1 = shoppingCart.totalCart();
        var gettotalvalue2 = parseFloat(gettotalvalue1) + 1;
        gettotalvalue2 = gettotalvalue2.toFixed(2);
        jQuery("#New-Total").text("$" + gettotalvalue2);
        jQuery("#New-Total1").text("$" + gettotalvalue2);
        

    } else if ($('input[name=order_type]:checked').val() == "Delivery") {
        var deliverydivvalue = document.getElementById("deliverydiv");

        deliverydivvalue.style.display = 'block';
        console("In Delivery" + DeliveryCharges);
        deliverydivvalue.innerHTML += DeliveryCharges;
    }
}

function displayblock(o) {
	
	
    var ele=document.getElementById("myDropdown");
	ele.classList.remove("show");
    var getextendeddiv = document.getElementById("extendeddiv" + globalmenuitem);
    var addcartbtns = document.getElementById("btns" + globalmenuitem);
    var divsToHide1 = document.getElementsByClassName("media-categorys1");
    var i = 1;
    while (divsToHide1[i])
    // for(var i = 0; i < divsToHide.length; i++)
    {
        //var x[i]=divsToHide[i].style.visibility="hidden";

        //if (divsToHide[i].style.visibility === 'hidden') {

        if (getextendeddiv) {
            if (getextendeddiv.style.display = "block") {
                getextendeddiv.style.display = "none";
                addcartbtns.style.display = "none";
            }
        }

        document.getElementById(i).style.display = 'none';
        // else {
        // }
        i++;
    }

    document.getElementById(o).style.display = "block";

}
var hidden = false;

function showcart() {


    $("#mobilecartbtn").attr("id", "newhidebtns");

    document.getElementById("newhidebtns").textContent = "Hide Cart";

    if ($("#cartitems").css('display') == 'none') {
        $("#cartitems").css("display", "block");


    } else {


    }
}

function hidecart() {
    var x = document.getElementById("cartitems");
    hidden = !hidden;
    if (hidden) {
        x.style.visibility = 'hidden';
    } else {

    }
}



var getcartoption;

function loginChk() {

  
	var getvalueoftotal=$('#New-Total').text();
		getvalueoftotal=getvalueoftotal.replace("$", " ");
		//alert(getvalueoftotal);
		if(getvalueoftotal>MinOrder){
		
	   window.location.href = "checkout.html";
		}
		else
		{
				 $('#displaycheck').css({
            'display': 'block'


        });
			document.getElementById("displaycheck").innerHTML="Order Must Be More Than $"+MinOrder;
		
		}

		

    



}

function onlyAlphabets(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if ((charCode > 47 && charCode <= 57) || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    } catch (err) {
        alert(err.Description);
    }
}

function onlyNumber(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if ((charCode > 47 && charCode <= 57) || (charCode > 42 && charCode < 44))
            return true;
        else
            return false;
    } catch (err) {
        alert(err.Description);
    }
}


function onlineorder1() {
	var dt=document.getElementById("selecteddates").value;
								var tm=document.getElementById("selectedtimes").value;
								
								$("#LaterDeliveryTime").val(dt+" at "+tm);
    if ($("#username").val() == "" || $("#username").val() == "undefined" || $("#username").val() == null) {
        $('#username').css({
            'display': 'block',
            'color': 'white',
            'font-size': '16px',
            'background': '#f77070'

        });
        document.getElementById("username").focus();
    } else if ($("#useremail").val() == "" || $("#useremail").val() == "undefined" || $("#useremail").val() == null) {
        $('#useremail').css({
            'display': 'block',
            'color': 'white',
            'font-size': '16px',
            'background': '#f77070'

        });
        document.getElementById("useremail").focus();

    } else if ($("#userphone").val() == "" || $("#userphone").val() == "undefined" || $("#userphone").val() == null) {
        $('#userphone').css({
            'display': 'block',
            'color': 'white',
            'font-size': '16px',
            'background': '#f77070'

        });

        document.getElementById("userphone").focus();

    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("useremail").value)) {

        document.getElementById("useremail").focus();
    } 
	
	else {

        $('#cashonlineorder').css({
            'display': 'none'

        });
       
		var getvalueoftotal=$('#New-Total').text();
		getvalueoftotal=getvalueoftotal.replace("$", " ");
		//alert(getvalueoftotal);
		if(getvalueoftotal>MinOrder){
			 $('.loading').css({
            'display': 'block'


        });
       onlineorder();
		}
		else
		{
			 $('.loading').css({
            'display': 'none'


        });
			document.getElementById("orderdetail").innerHTML = "No Item Selected.";
		}
		


    }
}

function onlineorder() {


    var GetDelieveryTime = $("input[name='order_time']:checked").val();
    var SetDelieveryTime = "";

    if (GetDelieveryTime == "ASAP") {
        SetDelieveryTime = "Now";
    } else {
        SetDelieveryTime = $("#LaterDeliveryTime").val();
    }

    //alert(SetDelieveryTime);
    var cartArray = shoppingCart.listCart();
    var CartLengthCount = cartArray.length;
    if (CartLengthCount != 0) {


        var firstname = document.getElementById("username").value;
        if (firstname == "undefined" || firstname == null) {
            
            window.location.href = "login.html";
            // onlineorder();

        } else {

            var selecteditemsarray = [];


            var firstname = document.getElementById("username").value;
            var CognitEmail = document.getElementById("cognitoemail").value;
            var Cognitouserphoneno = document.getElementById("userphone").value;

            var order_type = $('input[name=order_type]:checked').val();
            var tax = "10.00";

            var contact_field = $("#userphone").val();;
            var email_field = CognitEmail;

            var name_field = $("#username").val();
            if ($('#inputadress').val()) {
                var address_field = document.getElementById("inputadress").value;
            }
            var estimatedtime_field = document.getElementById("delivery_time").value;
            var cart = document.getElementById("show-cart");
            var textofcartitems = cart.textContent || cart.innerText;
            getcartoption = textofcartitems;
			
            var today = new Date();
            var today1 = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            today = mm + '/' + dd + '/' + yyyy;

            var total = $("#total-cart").text();
            //alert(total);
            var createdivfortotal = "<div style='height: 50px;width: 100%;float: right;font-size: 18px;'>Total Amount : " + "" + total + "</div>";

            var sendemail = new Object();
            var NewTotalvalue = $('#New-Total').text();
            var NewTotalvalue1 = $('#New-Total1').text();
            var taxvalue = $('#AddTax').text();
            var dicount = $('#AddDiscount').text();
            var deliveryvalue;
            var process;
            if (processingfee > 0) {
                process = $('#processingdiv').text();
            } else {
                process = 0;
            }
            if ($('#deliverydiv').val()) {
                deliveryvalue = $('#deliverydiv').text();
               
            } else {
                deliveryvalue = 0;
            }
            var userphone = $("#userphone").val();



            var total = $("#total-cart").text();
            var createdivfortotal = "<div style='height: 50px;width: 100%;float: right;font-size: 18px;'>Total Amount : " + "" + total + "</div>";
            if ($("#delivery_time").val()) {


                estimatedtime_field = $("#delivery_weekday option:selected").text() + $("#delivery_time").val();
            } else {


                var a = new Date(Date.now());
                var d = new Date,
                    dformat = [d.getFullYear() + 1,
                        d.getMonth(),
                        d.getDate()
                    ].join('-') + ' ' + [d.getHours(),
                        d.getMinutes(),
                        d.getSeconds()
                    ].join(':');
                estimatedtime_field = dformat;
            }
            var checkoutdetails = new Object();
            checkoutdetails.fax = fax;
            checkoutdetails.phone = $("#userphone").val();
            checkoutdetails.email = $("#useremail").val();
            checkoutdetails.first_name = $("#username").val();

            checkoutdetails.restaurant_id = rest_id;
            checkoutdetails.orderType = order_type;
            checkoutdetails.orderTime = estimatedtime_field;
            // checkoutdetails.tax = tax;
            //checkoutdetails.sms = sms;
            checkoutdetails.processfee = processingfee;
            var taxWithout = taxvalue.replace('$', '');
            checkoutdetails.tax = taxWithout;
            var totalWithout = total.replace('$', '');
            checkoutdetails.total = totalWithout;
            var NewTotalvalueWithout = NewTotalvalue.replace('$', '');
            checkoutdetails.subtotal = NewTotalvalueWithout;
            
            if (discount) {
                checkoutdetails.discount = discount;
            } else {
                checkoutdetails.discount = 0;
            }
            checkoutdetails.delivery_charges = deliveryvalue;
            checkoutdetails.orderno = uniqueid;



            //CUSTOMER INFO
            var addressvalue = "";

            if (document.getElementById("address").value === "") {

            } else {
                addressvalue = document.getElementById("address").value;
            }
            checkoutdetails.restaurant_address = addressvalue;
            //  checkoutdetails.phone =  document.getElementById("contact").value;
            //  checkoutdetails.email =  document.getElementById("email").value;
            //  checkoutdetails.first_name =  document.getElementById("name").value;
            // checkoutdetails.OrderComment =  document.getElementById("comment").value;
            if ($('#creditcardnumber').val()) {
                checkoutdetails.creditcardnumber = document.getElementById("creditcardnumber").value;
            }
            if ($('#creditexpirydate').val()) {
                checkoutdetails.creditexpirydate = document.getElementById("creditexpirydate").value;
            }
            // checkoutdetails.creditexpiryyear =  document.getElementById("creditexpiryyear").value;
            checkoutdetails.orderDate = today1;
			var menu_itemname;
			var menu_itemprice;
			
			var jsonData = [];
           		   for (var i in cartArray) {
				
				
				
					
                for (var ItemqtyDisplay = 0; ItemqtyDisplay < cartArray[i].count; ItemqtyDisplay++) {
					item = {}
        item ["MenuItemName"] = cartArray[i].name;
        item ["MenuItemPrice"] = cartArray[i].price;

        jsonData.push(item);
					
						
                  
                       
																									}
											}
			
						
                   
                   console.log("Json Data"+JSON.stringify(jsonData));
                   checkoutdetails.orderdetail =JSON.stringify(jsonData);
                   
					if($("#tipdiv").text())
					{
						var tipval=$('#tipdiv').text();
						
						tipval=tipval.replace('$','');
						console.log("tipvaue"+tipval)
					checkoutdetails.tip = tipval;
					}
					else
					{
						checkoutdetails.tip = 0;
					}
						
                    if ($('#cvv').val()) 
					{
                        checkoutdetails.cvv = document.getElementById("cvv").value;
                    }
                    selecteditemsarray.push(checkoutdetails);
                    selecteditemsarray.push(textofcartitems);


                    var MenuJson = JSON.stringify(checkoutdetails);
					//console.log("mENUjSON"+MenuJson);
                    $.ajax({
                        data: MenuJson,
                        type: 'POST',
                        dataType: "html",
                        url: "https://bl9m5z7zpa.execute-api.us-east-2.amazonaws.com/prod/SaveOnlineOrder",
                        cache: false,
                        success: function(response) {
                            console.log("saveResponce1" + response);
                        }
                    });


                    try {
                        setTimeout(function() {
                            sendfax();

                            //location.href="thankyou1.html";		
                        }, 1000);

                    } catch (err) {
                        console.log(err);
                    }
                     console.log(PaymentTypess);
                    if(PaymentTypess=="Credit Card"){
                        sendemailtoowner();
                        creditorders();
		
						}
				else{
                    sendemailtoowner();
					
					}
                        
						 var PaymentTypess=$('input[name=paymenttype]:checked').val();
					console.log(PaymentTypess);	
			
                        //location.href="thankyou1.html";		
                    }






            } else {
                document.getElementById("orderdetail").innerHTML = "Please Add Some Items To Cart.";
            }
        }
        var getvalueofdetailsize;

        $(".addtocartbtn").click(function() {
				if(document.getElementsByClassName("extenddiv")){
					$("div.extenddiv").remove();
					$("Button.btnforadd").remove();
					
					//document.getElementsByClassName("extenddiv").display="none";
				}
            var getdiliveryvalue = document.getElementById("inputadress");
            $('input[type="checkbox"]:checked').prop('checked', false);
            $('input[name="extraname"]:checked').prop('checked', false);
            getvalueofdetailsize = $(this).data('optionid');
            //$('input[id='"+globalmenuitem+"'+"Choice"']).each(function() {
            this.checked = false;

           


            var menuitemname;
            var Menuitemprice;
            var div = document.createElement("div");
            div.className = "extenddiv";

            var menuitemid = $(this).val();

            var divid = $(this).attr('id');
            frag2 = document.createDocumentFragment(),
                select = document.createElement("select");

            $("#divid").hide();
            j = 0;
            var Menuitemdetails = document.createElement("label");
            Menuitemdetails.innerHTML = "Size :";
            Menuitemdetails.className = "detailsize";
            //div.appendChild(Menuitemdetails);
				
            for (i in myObj.MenuJson) {

                //var cat=myObj.MenuJson[i].category_id;
                for (j in myObj.MenuJson[i].MenuItem) {
                    var getid = myObj.MenuJson[i].MenuItem[j].MenuItemId;
					
                    if (getid == menuitemid) {

                        //var stringmenuitem=JSON.stringify(myObj.MenuJson[i].MenuItem);
                        menuitemname = myObj.MenuJson[i].MenuItem[j].MenuItemName;
                        Menuitemprice = myObj.MenuJson[i].MenuItem[j].MenuItemPrice;
                        menuitemname = menuitemname.replace(/[^A-Z0-9]+/ig, '');
                        div.id = "extendeddiv" + menuitemname;
                        var menuitemnameforvalue = myObj.MenuJson[i].MenuItem[j].MenuItemName;
                        globalmenuitem = myObj.MenuJson[i].MenuItem[j].MenuItemName;
                        globalmenuitem1 = myObj.MenuJson[i].MenuItem[j].MenuItemName;
                        globalmenuitem = globalmenuitem.replace(/[^A-Z0-9]+/ig, '');
                     


                        for (k in myObj.MenuJson[i].MenuItem[j].Extras) {

                            if (myObj.MenuJson[i].MenuItem[j].Extras[k].extraname) {

                                var checkboxelement = "";
                                checkboxelement = document.createElement("input");
                                checkboxelement.type = "checkbox";

                                checkboxelement.className = "checkboxextras";
                                //checkboxelement.setAttribute("type", "checkbox");

                                checkboxelement.setAttribute("value", "1");
                                checkboxelement.checked = true;
                                var name = document.createElement("label");
                                name.innerHTML = myObj.MenuJson[i].MenuItem[j].Extras[k].extraname + ":" + myObj.MenuJson[i].MenuItem[j].Extras[k].extraprice;
                                //checkboxelement=myObj.MenuJson[i].Extras[j].name+myObj.MenuJson[i].Extras[j].price;

                                name.appendChild(checkboxelement);

                                div.appendChild(name);
                            }
                        }
                        var FoodSize = document.createElement("div");
                        FoodSize.className = "ItemSize";
                        var createp = document.createElement("p");
						var radiobtn=document.createElement("input");
						radiobtn.type="radio";
                        createp.innerHTML = "Change Size Click Below";
                        FoodSize.appendChild(createp);
                        FoodSize.appendChild(select);
                        for (k in myObj.MenuJson[i].MenuItem[j].Menuitemdetails) {
                            //var detailsize=myObj.MenuJson[i].MenuItem[j].Menuitemdetails[k].size; 
                            //menuitemprice=myObj.MenuJson[i].MenuItem[j].Menuitemdetails[k].price;


                            var detailsize = myObj.MenuJson[i].MenuItem[j].Menuitemdetails[k].Size;
                            var detailprice = myObj.MenuJson[i].MenuItem[j].Menuitemdetails[k].Price;

                            var detaildetails = myObj.MenuJson[i].MenuItem[j].Menuitemdetails[k].Menu_item_Detail_detail;
				

                            if (!detailsize || detailsize == "undefined") {

                            } else {

								detailsize = detailsize.replace(/[^A-Z0-9()$]+/ig, '');
                                select.options.add(new Option(" Size : " + detailsize + "( $" + detailprice + " )", detailprice));
                                select.id = globalmenuitem + "choice";
                                select.className = "SelectedDivofChoice";
                                select.setAttribute('data-myprice', detailprice);
                                frag2.appendChild(select);
                                div.appendChild(FoodSize);;
                                //FoodSize.appendChild(select);
                                div.appendChild(frag2);
                            }


                            //s+="<p id='hello' style='margin-left: 9%;'>"+detaildetails+"</p>";

                        }


                    }

                }

            }


            var Extras = document.createElement("label");
            Extras.innerHTML = "Choose Options";
            Extras.className = "quantitytext";
            Extras.id = myObj.MenuJson[i].MenuItem[j].MenuItemId;

            var extrasinput = document.createElement("input");
            extrasinput.className = "quantitytext";
            var btn = document.getElementById(divid);
            frag1 = document.createDocumentFragment(),
                select = document.createElement("input");
            var parentElement = document.getElementById('myParentElement');
            var choicelabel = 0;
            for (i in myObj.MenuJson) {

                //var cat=myObj.MenuJson[i].category_id;
                for (j in myObj.MenuJson[i].MenuItem) {

                    var getid = myObj.MenuJson[i].MenuItem[j].MenuItemId;

                    if (getid == menuitemid) {
                        //var stringmenuitem=JSON.stringify(myObj.MenuJson[i].MenuItem);
                       var o=1;
                        for (k in myObj.MenuJson[i].MenuItem[j].Choices) {

                            if (myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName) {
                                if (choicelabel == 0) {
                                    div.appendChild(Extras);
                                }
                                choicelabel = choicelabel + 1;
                            
                                var name = myObj.MenuJson[i].MenuItem[j].MenuItemName;
                                name = name.replace(/[^A-Z0-9]+/ig, '');
                                var divtoping = document.createElement('span');
                                divtoping.className = 'divtoping';
                                var checkboxlabel = document.createElement('label');
								 var optionstopping = document.createElement('div');
                                checkboxlabel.setAttribute("id", myObj.MenuJson[i].MenuItem[j].MenuItemName + "mychoice");
                                checkboxlabel.className = 'myCheckbox';
                                checkboxlabel.innerHTML = myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName;
                                if (myObj.MenuJson[i].MenuItem[j].Choices[k].ChoicePrice > 0) {
                                    checkboxlabel.innerHTML = myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName + " + $" + myObj.MenuJson[i].MenuItem[j].Choices[k].ChoicePrice;

                                }
								
								
                             
								if (myObj.MenuJson[i].MenuItem[j].Choices[k].LeftPrice ) {
									if(o===1){
								optionstopping.innerHTML="<div id='topingid'><div class='col-md-5 col-sm-5'><h4 class='topngclass'>Topping</h4></div><div class='col-md-2 col-sm-2'>Half 1<img src='img/left.png' style='width:50px;height:50px;z-index: 1;'></div><div class='col-md-2 col-sm-2'>Half 2<img src='img/right.png' style='width:50px;height:50px;z-index: 1;'></div><div class='col-md-2 col-sm-2'>Whole<img src='img/full.png' style='width:50px;height:50px;z-index: 1;'></div></div>"
								o=o+1;
								
								}
								else{
									
								}
									  checkboxlabel.innerHTML = "<form id='radiobtntopping'><div class='topingclass'><div class='col-md-5' >"+myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName  +"</div><div   class='col-md-2'> <input type='radio' class='radiotoppings' onclick='handleClick(this);'  name='radiobtntopping"+k+"' id='"+myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName+"' value='"+myObj.MenuJson[i].MenuItem[j].Choices[k].LeftPrice+"' placeholder='"+myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName+" Left Side'>   $"  + myObj.MenuJson[i].MenuItem[j].Choices[k].LeftPrice+"</div><div  class='col-md-2' > <input type='radio' id='"+myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName+"' name='radiobtntopping"+k+"' class='radiotoppings' onclick='handleClick(this);' value='"+myObj.MenuJson[i].MenuItem[j].Choices[k].RightPrice+"' placeholder='"+myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName+" Right Side'> $"  + myObj.MenuJson[i].MenuItem[j].Choices[k].RightPrice+"</div><div class='col-md-3' > <input type='radio' class='radiotoppings' name='radiobtntopping"+k+"' onclick='handleClick(this);' id='"+myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName+"' value='"+myObj.MenuJson[i].MenuItem[j].Choices[k].WholePrice+"' placeholder='"+myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName+" Whole'>$"  + myObj.MenuJson[i].MenuItem[j].Choices[k].WholePrice+"</div></div></form>";
								 	
									
	
									

								}
								else{
									   var extracheckbox = document.createElement('input');
                                extracheckbox.type = 'checkbox';
                                extracheckbox.style = 'float:left; z-index:4';
                                extracheckbox.className = 'custom-control-input';
                                extracheckbox.id = name + "mychoice"; // need unique Ids!

                               
									 extracheckbox.value = myObj.MenuJson[i].MenuItem[j].Choices[k].ChoicePrice;
								 extracheckbox.text = "+" + myObj.MenuJson[i].MenuItem[j].Choices[k].ChoiceName;
                               
								checkboxlabel.appendChild(extracheckbox);
								}
							
							
                               
                                checkboxlabel.appendChild(divtoping);

								div.appendChild(optionstopping);
                                div.appendChild(checkboxlabel);

                            }



                        }

                    }

                }

            }
            var Extrasitems = document.createElement("label");
            Extrasitems.innerHTML = "Select Option";
            Extrasitems.className = "quantitytext";
            Extrasitems.id = myObj.MenuJson[i].MenuItem[j].MenuItemId;
            //div.appendChild(Extrasitems);
            var j1 = 0;
            var extrasinputdiv = document.createElement("input");
            extrasinputdiv.className = "quantitytext";
            var btn = document.getElementById(divid);
            addoptions = document.createDocumentFragment(),
                select = document.createElement("input");
            var parentElement = document.getElementById('myParentElement');

            for (i in myObj.MenuJson) {

                //var cat=myObj.MenuJson[i].category_id;
                for (j in myObj.MenuJson[i].MenuItem) {

                    var getid = myObj.MenuJson[i].MenuItem[j].MenuItemId;

                    if (getid == menuitemid) {
                        //var stringmenuitem=JSON.stringify(myObj.MenuJson[i].MenuItem);
                        if (myObj.MenuJson[i].MenuItem[j].ExtraItems) {
                            for (k in myObj.MenuJson[i].MenuItem[j].ExtraItems) {

                                if (myObj.MenuJson[i].MenuItem[j].ExtraItems[k].Extraname) {
                                    if (j1 == 0) {
                                        div.appendChild(Extrasitems);
                                    }
                                    j1 = j1 + 1;
                                 
                                    var name = myObj.MenuJson[i].MenuItem[j].MenuItemName;
                                    name = name.replace(/[^A-Z0-9]+/ig, '');
                                    var divExtras = document.createElement('span');
                                    divExtras.className = 'divtoping';
                                    var checkboxlabelforextras = document.createElement('label');
                                    checkboxlabelforextras.setAttribute("id", myObj.MenuJson[i].MenuItem[j].MenuItemName + "mychoice");
                                    checkboxlabelforextras.className = 'myCheckbox';
                                    checkboxlabelforextras.innerHTML = myObj.MenuJson[i].MenuItem[j].ExtraItems[k].Extraname
                                    if (myObj.MenuJson[i].MenuItem[j].ExtraItems[k].ExtraPrice > 0) {
                                        checkboxlabelforextras.innerHTML = myObj.MenuJson[i].MenuItem[j].ExtraItems[k].Extraname + " + $" + myObj.MenuJson[i].MenuItem[j].ExtraItems[k].ExtraPrice;
                                    }
                                    var extracheckboxelement = document.createElement('input');
                                    extracheckboxelement.type = 'radio';
                                    extracheckboxelement.name = 'extraname';
                                    extracheckboxelement.style = 'float:left; z-index:4';
                                    extracheckboxelement.className = 'custom-control-input';
                                    extracheckboxelement.id = name + "mychoice"; // need unique Ids!
                                    extracheckboxelement.setAttribute("data-getextranames", myObj.MenuJson[i].MenuItem[j].ExtraItems[k].Extraname);
                                    extracheckboxelement.value = myObj.MenuJson[i].MenuItem[j].ExtraItems[k].ExtraPrice;


                                    extracheckboxelement.text = myObj.MenuJson[i].MenuItem[j].ExtraItems[k].Extraname;

                                    checkboxlabelforextras.appendChild(extracheckboxelement);
                                    checkboxlabelforextras.appendChild(divExtras);
                                    div.appendChild(checkboxlabelforextras);


                                }


                            }

                        } else {

                        }


                    }
                }

            }

            var t = document.createElement("div");

            var plusbutton = document.createElement("button");
            plusbutton.style.background = "red";
            plusbutton.style.color = "white";
            plusbutton.innerHTML = "+";
            var quantitytext = document.createElement("label");
            quantitytext.innerHTML = "Quantity";
            quantitytext.className = "quantitytext";
            div.appendChild(quantitytext);

            var QuantityDiv = document.createElement('div');
            QuantityDiv.className = 'QuantityDiv';
            var QuantitySub = document.createElement('button');
            QuantitySub.id = 'sub';
            QuantitySub.onclick = "minus()";
            QuantitySub.onclick = function() {
                minus();
            };
            QuantitySub.className = 'btn QuantitySub';
            QuantitySub.innerHTML = '-';
            var QuantityField = document.createElement('input');

            QuantityField.type = 'text';
            //QuantityField.id='1';
            QuantityField.id = globalmenuitem + "quantity";
            QuantityField.setAttribute('value', '1');
            QuantityField.class = 'QualityKeyClass';
            //QuantityDiv.id=globalmenuitem+"quantity"; 

            var QuantityAdd = document.createElement('button');
            QuantityAdd.id = 'add';
            QuantityAdd.className = 'btn Quantityadd';
            QuantityAdd.innerHTML = '+';
            QuantityAdd.onclick = function() {
                plus();
            };
            QuantityDiv.appendChild(QuantitySub);
            QuantityDiv.appendChild(QuantityField);
            QuantityDiv.appendChild(QuantityAdd);

            // QuantityDiv.id=globalmenuitem+"quantity"; 
            frag.appendChild(QuantityDiv);

            div.appendChild(frag);

            //div.appendChild(extrasinput);
            var CommentDiv = document.createElement("div");

            var Comments = document.createElement("textarea");
            var CommentLabel = document.createElement("label");
            CommentLabel.innerHTML = "Special Requests";
            CommentLabel.className = "quantitytext";

            Comments.placeholder = "Write Special Instruction here";
            Comments.style.width = "95%";
            Comments.style.height = "70px";
            Comments.style.display = "inherit";
            Comments.className = "commentbox form-control";
            Comments.id = globalmenuitem + "mycommentbox";


            CommentDiv.appendChild(CommentLabel);
            CommentDiv.appendChild(Comments);
            div.appendChild(CommentDiv);
            var minusbutton = document.createElement("button");
            minusbutton.style.background = "red";
            minusbutton.style.color = "white";
            minusbutton.innerHTML = "-";



            btn.appendChild(div);


            var count = 1;
            var countEl = document.getElementById(globalmenuitem + "quantity");

            function plus() {
                count++;
                countEl.value = count;

            }

            function minus() {
                if (count > 1) {
                    count--;
                    countEl.value = count;

                }
            }




            var y = document.createElement("btn");

            y.innerHTML = "<button style='width:29%; background-color:teal!important; color:white;margin-top:-40px;margin-left:68%;'  id='btns" + globalmenuitem + "' data-price=" + Menuitemprice + "  value=" + globalmenuitem + "   type='button' class='btnforadd btn pull-left btn-sq-xs' onclick='showcart();cartsitems();'>Add to Cart</button>";

            btn.appendChild(y);
            //t.innerHTML=h;
            // btn.appendChild(t);

        });
        var name;
        var instructions;
        /*===================================Cart Items==================================================*/
        function cartsitems() {



            $(".panel-danger").css({
                'background-color': '#dad6d6'
            });
            $(".panel-heading").css({
                'background-color': '#dad6d6'
            });
            $(".table").css({
                'background-color': '#dad6d6'
            });
            $('#Checkoutshoppingbasket').css({
                'background-color': 'red',
                'color': 'white',
                'font-size': '16px',
                '-webkit-animation-name': 'cart',
                '-webkit-animation-duration': '4s'
            });
            //event.preventDefault();
            var getvalueofitem = document.getElementById(globalmenuitem);
            //globalmenuitemremove=globalmenuitem.replace(/[^a-zA-Z ]/g, "");
            globalmenuitem1 = globalmenuitem1.replace(/[^a-zA-Z0-9 ]/g, "");

         
            //var getextendeddiv=document.getElementById("extendeddiv"+globalmenuitem);
            //var addcartbtns=document.getElementById("btns"+globalmenuitem);
            //getextendeddiv.style.visibility="hidden";
            //addcartbtns.style.visibility="hidden";
            // alert(getvalueofitem);
			var catname = document.getElementById(globalmenuitem).getAttribute('data-c_name');
			var cat_name2=cat_name.toUpperCase();
			
            var name = globalmenuitem1  + $("#" + globalmenuitem + "choice").find(":selected").text() ;
			
			if($("#" + globalmenuitem + "mycommentbox").val()){
            instructions = "instructions :"+$("#" + globalmenuitem + "mycommentbox").val();
			$("#" + globalmenuitem + "mycommentbox").removeAttr('value');
			}
			else{
				instructions="";
			}
            var listValue = document.getElementById(globalmenuitem + "choice");

            var getchoiceprice = document.getElementById(globalmenuitem + "choice");
            var choiceprice = "";
            var choices = $("#" + globalmenuitem + "mychoice").find(":selected").text();
            var extraname1 = document.querySelectorAll('input[type=checkbox]:checked')
            var array = [];
            var price = "";
            var namearrayextras = [];
            for (var i = 0; i < extraname1.length; i++) {
                array.push(extraname1[i].value);

                namearrayextras.push(extraname1[i].text);
				if(extraname1[i].value>0){
				namearrayextras.push(extraname1[i].value);
				}

            }
            var sum = 0;
            for (var i = 0; i < array.length; i++) {

                sum = sum + Number(array[i]);

            }

            //var foo = document.getElementById('yourSelect');
            if (listValue) {
                if (listValue.selectedIndex != null) {
                    choiceprice = getchoiceprice.options[getchoiceprice.selectedIndex].value;
                    //alert(sum);
                    //alert(choiceprice);
                    choiceprice = parseFloat(sum) + parseFloat(choiceprice);

                } else {
                    choiceprice = getchoiceprice.options[getchoiceprice.selectedIndex].value;
                }
                price = choiceprice;
                //var cprice=parseFloat($("#"+globalmenuitem1+"mychoice").find(":selected").val());




            } else {
                var mainprice = document.getElementById(globalmenuitem).getAttribute('data-menuitemprice');
				var catg_name = document.getElementById(globalmenuitem).getAttribute('data-c_name');
                price = mainprice;
                price = parseFloat(sum) + parseFloat(price);

            }



            var quantity = document.getElementById(globalmenuitem + "quantity").value;
            if (namearrayextras != "") {
                name = globalmenuitem1 + $("#" + globalmenuitem + "choice").find(":selected").text() + " $ " + namearrayextras ;
				console.log("1368");

            } else {
                name = globalmenuitem1  +" "+ $("#" + globalmenuitem + "choice").find(":selected").text();
				console.log("1372");
            }
            var getextravalue;
            var extraname = $('input[name=extraname]:checked').attr("data-getextranames");

            getextravalue = $('input[name=extraname]:checked').val();

            if (getextravalue != null) {

                price = parseFloat(getextravalue) + parseFloat(price);
				if(getextravalue>0){
                name = name  + " Extras  " +extraname+" $ "+getextravalue ;
				}
				else{
					name = name  + " Extras  " +extraname ;
				}

            } else {


            }

            price = parseFloat(price).toFixed(2);
			
			var favorite1 = [];
				var favorite = [];
            $.each($("input[type='radio']:checked"), function(){
				favorite.push($(this).attr('placeholder'));				
                favorite.push($(this).val());
				  favorite1.push($(this).val());
					
            });
             var sum1 = 0;
            for (var i = 0; i < favorite1.length; i++) {

                sum1 = sum1 + Number(favorite1[i]);

            }
			var checkboxtoppingval ="";
			 var box3="";
			 
			
//alert(form.elements["radiobtntopping"].value);
            //alert(getextravalue);
			price=parseFloat(sum1) + parseFloat(price);
			
			
            /*===============================================end shopping cart===========================*/
             shoppingCart.addItemToCart("( "+catname+" ) "+camelize(name)+" "+favorite.join(", ")+camelize(instructions), price, quantity,camelize(instructions) , camelize(choices));

            displayCart();

            document.getElementById("usernametop").innerHTML = "Total " + document.getElementById("New-Total").innerHTML;

        }

        $("#clear-cart").click(function(event) {
            shoppingCart.clearCart();
            displayCart();
        });

        function displayCart() {

            var cartArray = shoppingCart.listCart();

            var CartLengthCount = cartArray.length;

            /*Setting value of total item in checkout page */


            /* if (CartLengthCount != 0) {
               $("#Checkoutshoppingbasket").append("<div class=\"basketitems\">" + CartLengthCount + "</div>")
             }*/

            /*end */
   
            var output = "";
            finalcart = "";
            CARTITEMS = "";
            //finalcart = "<table class='table'><tr  style='border:1px solid black;background-color:red;'><td style='height: 20px;width: 100%;color: black;text-align: left;font-size: 13px;'>Item :</td><td style='height: 20px;width: 100%;color: black;text-align: right;font-size: 13px;'>Price :</td></tr>"
finalcart = "<table class='table'><tr style='border:1px solid black;background-color:red;'><td style='height: 20px;width: 100%;color: black;text-align: left;font-size: 13px;'>Item :</td><td style='height: 20px;width: 100%;color: black;text-align: right;font-size: 13px;'>Price :</td></tr>";
       
           // finalcartforpdf = "<table class='table'><tr  style='border:1px solid black;background-color:red;'><td style='height: 20px;width: 80%;color: black;text-align: center;font-size: 13px;'>Item :</td>"
		//	+"<td style='height: 20px;width: 20%;color: black;border:1px solid black;text-align: center;font-size: 13px;background-color:red;'>Price :</td></tr>";
            // finalcart=cssHtml+cssHtml2+cssHtml4+cssHtml6+cssHtml8;
		finalcartforpdf = "<table class='table'><tr style='border:1px solid black;background-color:red;'><td style='height: 20px;width: 100%;color: black;text-align: left;font-size: 13px;'>Item :</td><td style='height: 20px;width: 100%;color: black;text-align: right;font-size: 13px;'>Price :</td></tr>";
               
            // arrycart.push(bd);



            for (var i in cartArray) {

                for (var ItemqtyDisplay = 0; ItemqtyDisplay < cartArray[i].count; ItemqtyDisplay++) {
                    output += "<hr><div class='maincart'><div class='menuitemsname'>" +
                        cartArray[i].name + "</div>" +
                        "<div class='cartprice'>" + cartArray[i].price + "</div>"

                        +
                        " <button class='subtract-item' data-name='" +
                        cartArray[i].name + "'> X </button>"

                        +
                        "</div>";
                    var instructions;
                    if (cartArray[i].getinstructions) {
					
                        instructions = cartArray[i].getinstructions;
						

                    } else {
                        instructions = ""
                    }



                    var choice = "";
                    if (cartArray[i].choices) {

                        choice = cartArray[i].choices;
						
                    } else {
                        choice = ""
                    }
                    //alert("choice"+choice);
                    var css1 = "<tr><td style='height: 50px;width: 80%;color: #fff;background-color: #343434;text-align: center;font-size: 18px;'>1 X " + cartArray[i].name + choice + instructions + "</td>";
                    var css2 = "<td style='height: 50px;width: 20%;color: #fff;background-color: #343434;text-align: center;font-size: 18px;vertical-align: middle;'>" + cartArray[i].price + "</td>";



                    CARTITEMS12 += css1 + css2;

                     var cssHtml1 = "<tr style='border 1px solid black'><td style='height: 50px;width: 60%;color: black;text-align: center;font-size: 13px;'>" + cartArray[i].name + "</td>";
                    var cssHtml3 = "<td style='height: 50px;width: 10%;color: black;text-align: center;font-size: 13px;'>" + cartArray[i].price + "</td>";
                    var cssHtml5 = "<td style='height: 50px;width: 10%;color: black;text-align: center;font-size: 13px;'>1</td>";
                    var cssHtml7 = "<td style='height: 50px;width: 10%;color: black;text-align: center;font-size: 13px;'>" + instructions + "</td></tr>";

                    var cssHtml8 = "<td style='height: 50px;width: 20%;color: black;text-align: center;font-size: 13px;'>" + choice + "</td>";
                   // var item = "<tr><td  style='width: 80%;color: black;text-align: center;font-size: 11px;'>________________________________________</td>"
				//	+"<td  style='width: 20%;color: black;text-align: center;font-size: 13px;'>______________________________</td>"
					//+"</tr><tr  style='border 1px solid black'>"
					//+"<td style='width: 200px;color: black;text-align: left;font-size: 11px;'>1 X " + cartArray[i].name + choice + instructions + "</td>"
					//+"<td style='width: 50px;color: black;text-align: center;font-size: 11px;'>" + cartArray[i].price +" </td>";
                    //line="<p>----------------------------------------------------------------------------------------------------------------------------------<p>";
                   var item2="<hr><tr><td  style='width: 70%;color: black;text-align: left;font-size: 11px;'>1 X " + cartArray[i].name + choice + instructions +"</td><td style='width: 20%;color: black;text-align: right;font-size: 13px;'>"+cartArray[i].price+" </td></tr>";
				  	var item="<tr><td  style='width: 80%;color: black;text-align: center;font-size: 11px;'>__________________________________________</td><td  style='width: 20%;color: black;text-align: center;font-size: 13px;'>___________________________________</td></tr><tr><td  style='width: 80%;color: black;text-align: left;font-size: 11px;'>1 X " + cartArray[i].name + choice + instructions +"</td><td style='height: 20px;width: 100%;color: black;text-align: right;font-size: 13px;'>"+cartArray[i].price+" </td></tr>";
				   CARTITEMS += item2;
                    CARTITEMSFORPDF += item ;

                }
                //arrycart.push(CARTITEMS);

                //arrycart.push(bd);


            }

            $("#show-cart").html(output);
            //$("#show-cart").html(output);

            $("#count-cart").html(shoppingCart.countCart());
            //$("#count-cart").html( shoppingCart.countCart() );
            var sNumber1 = shoppingCart.countCart();

            output = [],
                sNumber = sNumber1.toString();

            for (var i = 0, len = sNumber.length; i < len; i += 1) {
                output.push(+sNumber.charAt(i));
            }
            for (var i = 0, sum = 0; i < output.length; sum += output[i++]); {
             
                $("#Checkoutshoppingbasket").append("<div class='basketitems'>" + sum + "</div>");
            }

        



            $("#total-cart").html(shoppingCart.totalCart());
            var CartTotalMoney = $('#total-cart').html();
            var subtotal = $('#total-cart').html();

            subtotal = parseFloat(CartTotalMoney);
            if (processingfee > 0) {
			
	var processingfee1=shoppingCart.totalCart()/100*processingfee;
	processingfee1=processingfee1.toFixed(2);
	
                jQuery("#processingfee").text('$' + processingfee1);

                CartTotalMoney = parseFloat(CartTotalMoney) + parseFloat(processingfee1);

            } else {
				
               
            }

            if (TaxRate == 0 && DeliveryCharges > 0) {

                var gettaxelement = document.getElementById("AddTaxdiv");
                gettaxelement.style.display = 'none';

                //var newtotal=parseFloat(CartTotalMoney)+parseFloat(DeliveryCharges);
                var newtotal = parseFloat(CartTotalMoney);

                jQuery("#DeliveryCharges").text('$' + DeliveryCharges);
                //	alert(newtotal);

                jQuery("#New-Total").text('$' + newtotal.toFixed(2));
                jQuery("#New-Total1").text('$' + newtotal.toFixed(2));
            } else if (TaxRate == 0 && DeliveryCharges > 0 && DicountPersent == 0) {
                var newtotal = parseFloat(CartTotalMoney);

                jQuery("#DeliveryCharges").text('$' + DeliveryCharges);
                //	alert(newtotal);

                jQuery("#New-Total").text('$' + newtotal.toFixed(2));
                jQuery("#New-Total1").text('$' + newtotal.toFixed(2));

            } else if (DicountPersent > 0 && TaxRate == 0 && DeliveryCharges == 0 && processingfee == 0) {
                var deliveryelemnt = document.getElementById("deliverydiv");
                deliveryelemnt.style.display = 'none';
                var discount = (subtotal / 100) * DicountPersent;
                discount = discount.toFixed(2);
                var newtotal = parseFloat(CartTotalMoney) + parseFloat(discount);
                jQuery("#AddDiscount").text('$' + DicountPersent);

                jQuery("#New-Total").text('$' + newtotal.toFixed(2));
                jQuery("#New-Total1").text('$' + newtotal.toFixed(2));

            } else if (TaxRate > 0 && DeliveryCharges == 0 && processingfee == 0) {

                var deliveryelemnt = document.getElementById("deliverydiv");
                deliveryelemnt.style.display = 'none';
                var taxamount = (subtotal / 100) * TaxRate;
                taxamount = taxamount.toFixed(2);
                var newtotal = parseFloat(CartTotalMoney) + parseFloat(taxamount);
                jQuery("#AddTax").text('$' + taxamount);

                jQuery("#New-Total").text('$' + newtotal.toFixed(2));
                jQuery("#New-Total1").text('$' + newtotal.toFixed(2));
            } else if (TaxRate == 0 && DeliveryCharges == 0) {

                var gettaxelement1 = document.getElementById("AddTaxdiv");
                gettaxelement1.style.display = 'none';
                var deliveryelemnt = document.getElementById("deliverydiv");
                deliveryelemnt.style.display = 'none';

                jQuery("#New-Total1").text('$' + CartTotalMoney.toFixed(2));
                jQuery("#New-Total").text('$' + CartTotalMoney.toFixed(2));
            } else {
                
                var newtotal;
                var taxamount = (subtotal / 100) * TaxRate;
                taxamount = taxamount.toFixed(2);
                if (DicountPersent > 0) {
                    var discount = (subtotal / 100) * DicountPersent;
                    discount = discount.toFixed(2);
                   
                    newtotal = parseFloat(CartTotalMoney) - parseFloat(discount) + parseFloat(taxamount);
                    jQuery("#AddDiscount").text('$' + discount);
                } else {

                  
                    newtotal = parseFloat(CartTotalMoney) + parseFloat(taxamount);

                }
                jQuery("#AddTax").text('$' + taxamount);

                newtotal = parseFloat(newtotal).toFixed(2);
           

                var DelieveryType = $('input[name=order_type]:checked').val();
           
                if (DelieveryType == "Delivery") {
                    newtotal = newtotal + parseFloat(DeliveryCharges);
                    newtotal = newtotal.toFixed(2);
                    jQuery("#DeliveryCharges").text('$' + DeliveryCharges);
                    
                }
                jQuery("#DeliveryCharges").text('$' + DicountPersent);
                jQuery("#New-Total").text('$' + newtotal);
                jQuery("#New-Total1").text('$' + newtotal);



            }

            if (CartLengthCount == 0) {
                $(".SubmitOrder").attr("disabled", true);
                $(".headingcart").css("display", "none");

                $(".processingfee").css("display", "none");
                $(".TotalAmount").css("display", "none");


                var test = "<p id='ItemZero' class='ItemZeroClass'>You haven't added anything to your cart yet! Start adding your favourite dishes</p>";
                $("#show-cart").html(test);
                //$('.SubmitOrder').addAttr('disabled');
                //     $('.SubmitOrder').setAttribute('disabled');
            } else {
                $('.SubmitOrder').removeAttr('disabled');
                //  alert("not null");
                $(".headingcart").css("display", "block");

                $(".processingfee").css("display", "block");
                $(".TotalAmount").css("display", "block");
                $("#ItemZero").css("display", "none");

                //  $('.contact').prop('disabled', false);
            }
        }

        $("#show-cart").on("click touchstart", ".delete-item", function(event) {
            var name = $(this).attr("data-name");
            shoppingCart.removeItemFromCartAll(name);
            displayCart();
        });

        $("#show-cart").on("click", ".subtract-item", function(event) {
            var name = $(this).attr("data-name");
			
            shoppingCart.removeItemFromCart(name);

            displayCart();
			location.reload();
            var cartArray = shoppingCart.listCart();
            var CartLengthCount = cartArray.length;
			if($('#tipdiv').html()){
			calculateTips();
			}
            if (CartLengthCount != 0) {
                document.getElementById("usernametop").innerHTML = "Total " + document.getElementById("New-Total").innerHTML;
            } else {
                document.getElementById("usernametop").innerHTML = "Total 0";
            }
			
        });

        $("#show-cart").on("click touchstart", ".plus-item", function(event) {
            var name = $(this).attr("data-name");
            shoppingCart.addItemToCart(name, 0, 1);
            displayCart();
        });

        $("#show-cart").on("change touchstart", ".item-count", function(event) {

            var name = $(this).attr("data-name");
            var count = Number($(this).val());
            shoppingCart.setCountForItem(name, count);
            displayCart();
        });


        displayCart();
        var cart = document.getElementById("show-cart");
        var text1 = cart.textContent || cart.innerText;

        function sendemailtoowner() {

            var sendemail = new Object();
            sendemail.subject = "Online Order Recieved";


            var GetDelieveryTime = $("input[name='order_time']:checked").val();
            var SetDelieveryTime = "";

            if (GetDelieveryTime == "ASAP") {
                SetDelieveryTime = "Now";
            } else {
                SetDelieveryTime = $("#LaterDeliveryTime").val();
            }
            var NewTotalvalue = $('#New-Total').text();

            var taxvalue = "";
            if (TaxRate == 0) {

            } else {
                taxvalue = "<br>" + "Tax : " + taxvalue;

            }
            var disocunt = "";
            if (DicountPersent == 0) {

            } else {
                disocunt = "<br>" + "Tax : " + $('#deliverydiv').text();

            }
            var deliveryvalue = "";
            if (DeliveryCharges == 0) {
                deliveryvalue = "";
            } else {
                deliveryvalue = "<br>" + $('#deliverydiv').text();
            }
            var userphone = $("#userphone").val();

            if (processingfee == 0) {
                processfee = "";
            } else {
                processfee = "<br>" + $('#processingdiv').text();
            }

            var user_cat = $("input[name='paymenttype']:checked").val();
            var total = $("#total-cart").text();
            var createdivfortotal = "<div style='width: 100%;float: right;font-size: 18px;'>Total Amount : " + "" + total + "</div>";
   var DelieveryType = $('input[name=order_type]:checked').val();
          if (DelieveryType == "Pick Up") {
				if (processingfee >0  ) {
              
				sendemail.contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:center;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png' align='right'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='width:100%'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<hr>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+ "<hr>"
				+"<br><h1 style='text-align:center;padding:10px;'> Pickup </h1>" 
				+ "<hr><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+ "<hr>"
				+"<div style='color:black; font-weight:800;font-size:10px !important'>" + finalcart+"<hr>" + CARTITEMS 
				+"</tr></table></div><hr><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Sub Total : $" + total +"</h5>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>" +$('#processingdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>" + $('#AddTaxdiv').html() +"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Tip : " + $('#tipdiv').html()+"</h5>"
				+"<h4 style='color: black;text-align: right;font-size: 13px;width:100%'>Total : $" + NewTotalvalue +"</h4><hr>"
				+"</div></body></html>";
				console.log("line 1787");
				}
					else if (document.getElementById('AddTax').value==0 ) {
               
				    sendemail.contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:center;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png' align='right'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='width:100%'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<hr>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+ "<hr>"
				+"<h1 style='text-align:center;padding:10px;'> Pickup </h1>" 
				+ "<hr><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+ "<hr>"
				+"<div style='color:black; font-weight:800;font-size:10px !important'>" + finalcart+"<hr>" + CARTITEMS 
				+"</tr></table></div><hr><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Sub Total : $" + total +"</h5>" 
				+ "<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>" + $('#AddDiscountdiv').html()+"</h5>"

				+ "<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Tip : " + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Total : $" + NewTotalvalue +"</h5><hr>"
				+"</div></body></html>";
					console.log("line 1814");
				}
				else if (DicountPersent>0 ) {
               
				    sendemail.contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:center;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png' align='right'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='width:100%'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<hr>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+ "<hr>"
				+"<br><h1 style='text-align:center;padding:10px;'> Pickup </h1>" 
				+ "<hr><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+ "<hr>"
				+"<div style='color:black; font-weight:800;font-size:10px !important'>" + finalcart+"<hr>" + CARTITEMS 
				+"</tr></table></div><hr><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Sub Total : $" + total +"</h5>" 
				+ "<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>" + $('#AddDiscountdiv').html()+"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Tip :" + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Total : $" + NewTotalvalue +"</h5>"
				+"</div></body></html>";
					console.log("line 1840");
				}
				else {
                sendemail.contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:center;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png' align='right'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='width:100%'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<hr>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+ "<hr>"
				+"<br><h1 style='text-align:center;padding:10px;'> Pickup </h1>" 
				+ "<hr><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+ "<hr>"
				+"<div style='color:black; font-weight:800;font-size:10px !important'>" + finalcart+"<hr>" + CARTITEMS 
				+"</tr></table></div><hr><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Sub Total : $" + total +"</h5>" 
				+ "<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>" + $('#AddTaxdiv').html()+"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Tip :" + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;width:100%'>Total : $" + NewTotalvalue +"</h5>"
				+"</div></body></html>";
				console.log("Content 1865");
				}
				
		  }
            else {

                 if (processingfee >0  ) {
              
				sendemail.contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png' align='right'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<hr>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+ "<hr>"
				+"<br><h1 style='text-align:center;padding:10px;'> Delivery </h1>" 
				+"<h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+"<h3> Delivery Address:" + document.getElementById('address').value
				+ "<hr>"
				+"<div style='color:black; font-weight:800;font-size:10px !important'>" + finalcartforpdf+"<hr>" + CARTITEMSFORPDF 
				+"</table></div><hr><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5><br>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" +$('#processingdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" +$('#deliverydiv').html()+"</h5><br>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#AddTaxdiv').html() +"</h5><br>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip : " + $('#tipdiv').html()+"</h5><br>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><br>"
				+"</div></body></html>";
				console.log("Content 1898");
				}
					else if ( document.getElementById('AddTax').value==0 ) {
               
				    sendemail.contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<hr>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<hr>"
				+"<br><h1 style='text-align:center;padding:10px;'> Delivery </h1>" 
				+"<hr><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+"<h3> Delivery Address:" + document.getElementById('address').value
				+ "<hr>"
				+"<div style='color:black; font-weight:800;font-size:10px !important'>" + finalcartforpdf+"<hr>" + CARTITEMSFORPDF 
				+"</table></div><hr><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5><br>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" +$('#deliverydiv').html()+"</h5><br>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip :" + $('#tipdiv').html()+"</h5><br>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><br><hr>"
				+"</div></body></html>";
			console.log("Content 1923");
				}
				else if (DicountPersent>0 ) {
               
				    sendemail.contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<hr>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<hr>"
				+"<br><h1 style='text-align:center;padding:10px;'> Delivery </h1>" 
				+"<hr><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+"<h3> Delivery Address:" + document.getElementById('address').value
				+ "<hr>"
				+"<div style='color:black; font-weight:800;font-size:10px !important'>" + finalcartforpdf+"<hr>" + CARTITEMSFORPDF 
				+"</table></div><hr><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" +$('#deliverydiv').html()+"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#AddDiscountdiv').html()+"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip :" + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><hr>"
				+"</div></body></html>";
				console.log("Content 1950");
				}
				else {
                sendemail.contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<hr>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<hr>"
				+"<br><h1 style='text-align:center;padding:10px;'> Delivery </h1>" 
				+"<hr><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+"<h3> Delivery Address:" + document.getElementById('address').value
				+ "<hr>"
				+ "<div style='color:black; font-weight:800;font-size:10px !important'>" + finalcartforpdf+"<hr>" + CARTITEMSFORPDF 
				+"</table></div><hr><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" +$('#deliverydiv').html()+"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#AddTaxdiv').html()+"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip :" + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><br><hr>"
				+"</div></body></html>";
				console.log("Content 1977");
				}
				
				
            }
            //Write Customer Email Here///
            //sendemail.toMail = "support@cafesquad.com"+","+owneremail+","+$("#useremail").val();
            sendemail.toMail = owneremail;
            sendemail.tousermail = $("#useremail").val();;
            sendemail.replyToEmail = "support@bitecart.com";

            sendemail.restName = restaurantname;


            var MenuJson = JSON.stringify(sendemail);


            var settings = {
                "async": false,
                "crossDomain": true,
                "url": "https://bl9m5z7zpa.execute-api.us-east-2.amazonaws.com/prod/OrderEmail",
                "method": "POST",
                "headers": {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

                },
                "data": MenuJson
            }

            $.ajax(settings).done(function(response) {
				console.log("Email Response"+response);

              
            });
            var user_cat = $("input[name='paymenttype']:checked").val();
            if (user_cat === 'Credit Card') {
        



              
            }

        }

        function resetcartvalue() {


            shoppingCart.clearCart();
            $('#rightside').css({
                'display': 'none'

            });
            var elements = document.getElementsByClassName('col-md-9');

            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
            //document.getElementById("usernametop").innerHTML = "Total 0";
            //  document.getElementById("orderdetail").innerHTML="<h1>Order SuccessAlly Submitted</h1>";


        }
        var contentMail;

        function sendfax() {


            var GetDelieveryTime = $("input[name='order_time']:checked").val();
            var SetDelieveryTime = "";

            if (GetDelieveryTime == "ASAP") {
                SetDelieveryTime = "Now";
            } else {
                SetDelieveryTime = $("#LaterDeliveryTime").val();
            }
            var NewTotalvalue = $('#New-Total').text();

            var taxvalue;
            if (TaxRate == 0) {
                taxvalue = "";
            } else {
                taxvalue =  "Tax : " + TaxRate;

            }
            var discount;
            if (DicountPersent == 0) {
                deliveryvalue = "";
            } else {
                discount = "<br>" + $('#AddDiscountdiv').text();
            }
            var deliveryvalue = "";
            if (DeliveryCharges == 0) {
                deliveryvalue = "";
            } else {
                deliveryvalue = "<br>" + $('#deliverydiv').text();
            }
            var userphone = $("#userphone").val();
            var processfee = "";
            if (processingfee == 0) {
                processfee = 0;
            } else {
                processfee = "<br>" + $('#processingdiv').text();
            }

            var user_cat = $("input[name='paymenttype']:checked").val();
            var total = $("#total-cart").text();
            var createdivfortotal = "<div style='width: 100%;float: right;font-size: 18px;'>Total Amount : " + "" + total + "</div>";

            var DelieveryType = $('input[name=order_type]:checked').val();
            
            var d = new Date();
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            todaydate = days[d.getDay()] + ",";
            todaydate += month[d.getMonth()] + " ";
            todaydate += d.getDate() + " at ";
            todaydate += d.getHours() + ":";
            todaydate += d.getMinutes() + ":";
            todaydate += d.getSeconds();

             if (DelieveryType == "Pick Up") {
				if (processingfee >0  ) {
              var processingfeeper= processingfee >0  ? total/100*processingfee : 0 ;
				contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png' align='right'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<p>_____________________________________________________________________________</p>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<p>_____________________________________________________________________________</p>"
				+"<br><h1 style='text-align:center;padding:10px;'> Pickup </h1>" 
				+"<p>_____________________________________________________________________________</p><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+ "<p>----------------------------------------------------------------------------------------------------------------------------------</p>"
				+"<div style='color:black; font-weight:600;font-size:10px !important'>" + finalcartforpdf+"<p>_____________________________________________________________________________</p>" + CARTITEMSFORPDF 
				+"</table></div><p>_____________________________________________________________________________</p><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Processing Fee "+ processingfee +"% : " + processingfeeper +"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#AddTaxdiv').html() +"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip : " + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><p>_____________________________________________________________________________</p>"
				+"</div></body></html>";
				console.log("Content 2200");
				}
					else if ( document.getElementById('AddTax').value==0 ) {
               
				    contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<p>_____________________________________________________________________________</p>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<p>_____________________________________________________________________________</p>"
				+"<br><h1 style='text-align:center;padding:10px;'> Pickup </h1>" 
				+"<p>_____________________________________________________________________________</p><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+ "<p>----------------------------------------------------------------------------------------------------------------------------------</p>"
				+"<div style='color:black; font-weight:600;font-size:10px !important'>" + finalcartforpdf+"<p>_____________________________________________________________________________</p>" + CARTITEMSFORPDF 
				+"</table></div><p>_____________________________________________________________________________</p><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5>" 
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip : " + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><p>_____________________________________________________________________________</p>"
				+"</div></body></html>";
				console.log("Content 2225");
				}
				else if (DicountPersent>0 ) {
               
				    contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<p>_____________________________________________________________________________</p>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<p>_____________________________________________________________________________</p>"
				+"<br><h1 style='text-align:center;padding:10px;'> Pickup </h1>" 
				+"<p>_____________________________________________________________________________</p><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+ "<p>----------------------------------------------------------------------------------------------------------------------------------</p>"
				+"<div style='color:black; font-weight:600;font-size:10px !important'>" + finalcartforpdf+"<p>_____________________________________________________________________________</p>" + CARTITEMSFORPDF 
				+"</table></div><p>_____________________________________________________________________________</p><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Discount  : $" + discount +"</h5>" 
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip :" + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><p>_____________________________________________________________________________</p>"
				+"</div></body></html>";
				console.log("Content 2251"+contentMail);
				}
				else {
                contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<p>_____________________________________________________________________________</p>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<p>_____________________________________________________________________________</p>"
				+"<br><h1 style='text-align:center;padding:10px;'> Pickup </h1>" 
				+"<p>_____________________________________________________________________________</p><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+ "<p>----------------------------------------------------------------------------------------------------------------------------------</p>"
				+"<div style='color:black; font-weight:600;font-size:10px !important'>" + finalcartforpdf+"<p>_____________________________________________________________________________</p>" + CARTITEMSFORPDF 
				+"</table></div><p>_____________________________________________________________________________</p><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5>" 
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#AddTaxdiv').html()+"</h5>"
				
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip :" + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><p>_____________________________________________________________________________</p>"
				+"</div></body></html>";
				console.log("Content 2277");
				}
				
				
            } else {
				if (processingfee >0  ) {
              var processingfeeper=total/100*processingfee;
				contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png' align='right'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<p>_____________________________________________________________________________</p>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<p>_____________________________________________________________________________</p>"
				+"<br><h1 style='text-align:center;padding:10px;'> Delivery </h1>" 
				+"<p>_____________________________________________________________________________</p><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+"<h3> Delivery Address:" + document.getElementById('address').value
				+ "<p>--------------------------------------------------------------------------------------------------</p>"
				+"<div style='color:black; font-weight:600;font-size:10px !important'>" + finalcartforpdf+"<p>__________________________________________________________________</p>" + CARTITEMSFORPDF 
				+"</table></div><p>__________________________________________________________________</p><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Processing Fee "+ processingfee +"% : " + processingfeeper +"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#deliverydiv').html() +"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#AddTaxdiv').html() +"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip : " + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><p>__________________________________________________________________</p>"
				+"</div></body></html>";
				console.log("Content 2309");
				}
					else if (document.getElementById('AddTax').value==0 ) {
               
				    contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<p>_____________________________________________________________________________</p>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<p>_____________________________________________________________________________</p>"
				+"<br><h1 style='text-align:center;padding:10px;'> Delivery </h1>" 
				+"<p>_____________________________________________________________________________</p><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+"<h3> Delivery Address:" + document.getElementById('address').value
				+ "<p>----------------------------------------------------------------------------------------------------------------------------------</p>"
				+"<div style='color:black; font-weight:600;font-size:10px !important'>" + finalcartforpdf+"<p>_____________________________________________________________________________</p>" + CARTITEMSFORPDF 
				+"</table></div><p>_____________________________________________________________________________</p><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#deliverydiv').html() +"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip :" + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><p>_____________________________________________________________________________</p>"
				+"</div></body></html>";
				console.log("Content 2335");
				}
				else if (DicountPersent>0 ) {
               
				    contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<p>_____________________________________________________________________________</p>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<p>_____________________________________________________________________________</p>"
				+"<br><h1 style='text-align:center;padding:10px;'> Delivery </h1>" 
				+"<p>_____________________________________________________________________________</p><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+"<h3> Delivery Address:" + document.getElementById('address').value
				+ "<p>---------------------------------------------------------------------------------------------------------</p>"
				+"<div style='color:black; font-weight:600;font-size:10px !important'>" + finalcartforpdf+"<p>_____________________________________________________________________________</p>" + CARTITEMSFORPDF 
				+"</table></div><p>_____________________________________________________________________________</p><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#deliverydiv').html() +"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Discount  : $" + discount +"</h5>" 
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip :" + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5><p>_____________________________________________________________________________</p>"
				+"</div></body></html>";
				console.log("Content 2362");
				}
				else {
                contentMail = "<!DOCTYPE html><head></head><body><p style='text-align:right;'> " 
				+ new Date().toLocaleString() 
				+"<img src='https://s3.amazonaws.com/uploadexample/bitecartsmall.png'>"
				+"<p style='text-align:right'>for query contact Bitecart on 6508806006"
				+"<div style='text-align:left'><h3>" + restaurantname+"</h3><p style='text-align:left'>Email : " + owneremail 
				+ " </p><p style='text-align:left'>Website: " + website + " </p><p style='text-align:left'>" + rest_address +"</p> </div>"
				+ "<p>_____________________________________________________________________________</p>"
				+"<h3>Please accept or reject this order within 15minutes by calling the customer </h3>"
				+"<p>_____________________________________________________________________________</p>"
				+"<br><h1 style='text-align:center;padding:10px;'> Delivery </h1>" 
				+"<p>_____________________________________________________________________________</p><h3 style='font-weight:800;text-align:left;'> Customer Information</h3><h4 style='font-weight:800;text-align:left;'>" + document.getElementById('username').value 
				+ "</h4><h5 style='text-align:left !important'>" + document.getElementById('useremail').value + "</h5><h5 style='text-align:left'>" 
				+ document.getElementById('userphone').value + "</h5 style='text-align:left'><h5>Payment Type : " 
				+ user_cat + "</h5><h5 style='text-align:left'>Order Placed For : " + SetDelieveryTime + "</h5>"
				+"<h3> Delivery Address:" + document.getElementById('address').value
				+ "<p>----------------------------------------------------------------------------------------------------------------</p>"
				+ "<div style='color:black; font-weight:600;font-size:10px !important'>" + finalcartforpdf+"<p>_____________________________________________________________________________</p>" + CARTITEMSFORPDF 
				+"</table></div><p>_____________________________________________________________________________</p><div style='width:100%;'>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Sub Total : $" + total +"</h5>" 
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#deliverydiv').html() +"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>" + $('#AddTaxdiv').html()+"</h5>"
				+ "<h5 style='color: black;text-align: right;font-size: 13px;'>Tip :" + $('#tipdiv').html()+"</h5>"
				+"<h5 style='color: black;text-align: right;font-size: 13px;'>Total : $" + NewTotalvalue +"</h5>><p>_____________________________________________________________________________</p>"
				+"</div></body></html>";
				console.log("Content 2388");
				}
                 
            }

            htmlToPrint = contentMail;
          
            printHtmlToPdf(htmlToPrint);
        }
        var globalurl;

        function printHtmlToPdf(html) {
		try{
            var ORders = new Object();

            ORders.cartitems = html;

            ORders.ordercontents = uniqueid;
            localStorage.setItem("cafesquadOrderid", uniqueid);


            var dataobj = JSON.stringify(ORders);


            var settings = {
                "async": false,
                "crossDomain": true,
                "url": "https://0xx1ihrhqg.execute-api.us-east-1.amazonaws.com/prod/PdfCreation",
                "method": "POST",
                "headers": {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

                },
                "data": dataobj
            }

            $.ajax(settings).done(function(response) {



           
                console.log("SuccessAlly Uploaded PDF" + JSON.stringify(response) + "https://s3.amazonaws.com/uploadexample/order/OrderDetail"+ uniqueid+".pdf");


            });
		}
		catch (err) {

            } finally {
                sendfaxservice();
            }
		
          

        }

        function sendfaxservice() {
            try {
                var emailclub = new Object();
               
                emailclub.toPhone = fax;
                emailclub.url = "https://s3.amazonaws.com/uploadexample/order/OrderDetail" + uniqueid + ".pdf";
                var dataobj = JSON.stringify(emailclub);


                var settings = {
                    "async": false,
                    "crossDomain": true,
                    "url": "https://0xx1ihrhqg.execute-api.us-east-1.amazonaws.com/prod/FaxService",
                    "method": "POST",
                    "headers": {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

                    },
                    "data": dataobj
                }

                $.ajax(settings).done(function(response) {

               
                    localStorage.setItem("FaxID", response);

                    var emailclub = new Object();
                
                    emailclub.toPhone = fax;
                    emailclub.sid = response;

                    var dataobj = JSON.stringify(emailclub);


                    var settings = {
                        "async": false,
                        "crossDomain": true,
                        "url": "https://bl9m5z7zpa.execute-api.us-east-2.amazonaws.com/prod/FaxNotification",
                        "method": "POST",
                        "headers": {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

                        },
                        "data": dataobj
                    }


                    resetcartvalue();
					
	
			
                });
            } catch (err) {

            } finally {
                sendsmsservice();
            }


        }

        function sendsmsservice() {
            try {
                var NewTotalvalue = $('#New-Total').text();
                var emailclub = new Object();
                emailclub.toPhone = sms;
                emailclub.sms = "Hello you Have Recieved Online Order From " + document.getElementById("username").value + ".Phone No " + document.getElementById("userphone").value + " The Total Amount Of Order Is " + NewTotalvalue + "For More Details Click Here " + "https://s3.amazonaws.com/uploadexample/order/OrderDetail" + uniqueid + ".pdf";;


                var dataobj = JSON.stringify(emailclub);


                var settings = {
                    "async": false,
                    "crossDomain": true,
                    "url": "https://0xx1ihrhqg.execute-api.us-east-1.amazonaws.com/prod/SmsServiceTwilio",
                    "method": "POST",
                    "headers": {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

                    },
                    "data": dataobj
                }

                $.ajax(settings).done(function(response) {

                    console.log(response);


                });
            } catch (err) {

            } finally {
                sendCallService();
            }


            //location.href="thankyou1.html";


        }

        function sendCallService() {

            var emailclub = new Object();
            emailclub.toPhone = call;
            emailclub.inputvoice = "https://www.cafesquad.com/twilio/voiceorder.xml";


            var dataobj = JSON.stringify(emailclub);


            var settings = {
                "async": false,
                "crossDomain": true,
                "url": "https://0xx1ihrhqg.execute-api.us-east-1.amazonaws.com/prod/CallServiceTwilio",
                "method": "POST",
                "headers": {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

                },
                "data": dataobj
            }

            $.ajax(settings).done(function(response) {

                location.href = "thankyou1.html";


        });
		}
        $("#mobilecartbtn").parent().on("click", "#mobilecartbtn", function() {

            $('#cartitems').css({
                'min-height': '75px',
                'margin': '0px',
                'display': 'block'
            });
            $("#mobilecartbtn").attr("id", "newhidebtns");

            document.getElementById("newhidebtns").textContent = "Hide Cart";


            if ($("#cartitems").css('display') == 'none') {


                document.getElementById("cartitems").style = "margin-top:0px;";

            } else {
                $('#cartitems').css({
                    'min-height': '75px',
                    'margin': '0px'
                });

                // $("#cartitems").css("display","none");
                // document.getElementById("mobilecartbtn").textContent = "Show Cart";

            }

        });
        $("#mobilecartbtn").parent().on("click", "#newhidebtns", function() {

            $('#cartitems').css({

                'display': 'none'
            });
            $('.table-stripe').css({

                'display': 'none'
            });

            $("#newhidebtns").attr("id", "mobilecartbtn");
            document.getElementById("mobilecartbtn").textContent = "Show Cart";
        });

        var x = document.getElementById("delivery_Section");
        if (x.style.display = 'block') {
            x.style.display = 'none';
        }
        // Set the application ID
        // Set the application ID
      function creditorders(){
				   // alert(`The generated nonce is:\n${nonce}`);
                    // Assign the nonce value to the hidden form field
                  
					//document.getElementById('card-nonce').value = nonce;
 var _accessToken = "EAAAEIO9E-CB6L4gK7kqUFXSwCWVBahsHttylf-iL-7893qEej3iNp8qEgu4zbgs";
					  var _locationId = "ZEY8CG526N0K3";

					function guid() {
					  function s4() {
					    return Math.floor((1 + Math.random()) * 0x10000)
					      .toString(16)
					      .substring(1);
					  }
					  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
					    s4() + '-' + s4() + s4() + s4();
					}

					var uuid = guid();

					console.log("uuid: " + uuid);
						



   
   var cartArray = shoppingCart.listCartSquare();
          
                 var CartLengthCount=cartArray.length;
              
var CARTITEMSSquare = {};	

  console.log("Cart Array is",cartArray);

							order123 = {
								"idempotency_key": uuid,
								"order": {
									"reference_id": uniqueid,
									"line_items": cartArray 
								},
								"ask_for_shipping_address": true,
								"merchant_support_email": "",
								"pre_populate_buyer_email": "",
								"pre_populate_shipping_address": {
									"address_line_1": "",
									"address_line_2": "",
									"locality": "",
									"administrative_district_level_1": "",
									"postal_code": "",
									"first_name": "",
									"last_name": ""
								}
								
							}

				
								 
									
								 
								 
								  

								

									
var ORders = new Object();

ORders.locationId =  _locationId;

    var te=JSON.stringify(order123)

ORders.accessToken = _accessToken;
ORders.order = te;
console.log("This is order123 Object"+ORders.order);


var dataobj=JSON.stringify(ORders);
console.log("This is Data Object"+dataobj);

 var settings = {
  "async": false,
  "crossDomain": true,
  "url": "https://bl9m5z7zpa.execute-api.us-east-2.amazonaws.com/prod/SquareCheckout",
  "method": "POST",
  "headers": {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
   
  },
"data": dataobj
}

$.ajax(settings).done(function (response) {
	
		
             console.log("checkout  :: " + JSON.parse(response));
			 var r=JSON.parse(response);
             window.location.href = r.checkout.checkout_page_url; 
           
 
  
});
			 
			  
                    // POST the nonce form to the payment processing page
                    ///document.getElementById('nonce-form').submit();
	  }
        
		
   
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

		window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

myDivObj = document.getElementById("New-Total").innerHTML;
 

//document.getElementById("sq-creditcard").innerHTML="Pay : "+myDivObj;
													
