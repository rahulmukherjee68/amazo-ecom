The Amazon E-com Rest api's are:- 

Register User:- localhost:3000/users/register   Method:- Post
Body-sample- 
{
	"name":"Rahul Mukherjee",
	"email":"rahulmukherjee68@gmail.com",
	"password":"123456789",
	"cpassword":"123456789"
}
Login/signup User :- http://localhost:3000/users/login Method:- POST
Body -sample:-{
    "email":"rahulmukherjee68@gmail.com",
    "password":"123456789"
}

Profile User :- http://localhost:3000/users/profile Method:- GET
headers JWT encoded string 
x-auth-token:- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMDJlMjQ4YWY5NDA3NzI3MWQ0MzU5MCJ9.wVrQGA83lua4nzl8Y2tJd095szG-L2JQ23od3sp_su0

JWT Private key:- "JWT@123" and pass the id of user from mongo as the payload 

------------------------------------------------------------------------------------

Products

Get all Products:- http://localhost:3000/product/getAll Method:-GET

Get BY Id:- http://localhost:3000/product/getById/5f034abafea8242cdb470cce Method:-GEt
where param is the product id

Get By category/type :- http://localhost:3000/product/getByType/Laptop  Method:-GET
where param is the type of accesiories

Add a product :-  http://localhost:3000/product/add  Method:-POST
body-sample:- 
 {
      "prod_name": "leneovo thinkpad2 330p",
      "prod_type": "laptop",
      "prod_price": 500000,
      "prod_rating":0,
      "prod_details":"hardcore Processor ,Lite Weight"
}

Rate a product:- http://localhost:3000/product/rateById/ Method:- PUT
body-sample:- 
 {"
 id":"5f034b6bfea8242cdb470cd1",
 "prod_rating":1
}

Search a Product:- http://localhost:3000/product/search/?search_query=Iphone Method:-GET
here search_query is query string that is to be searched on product name

Add a Product to cart:- http://localhost:3000/users/addCart MEthod:- PUT
body-sample:- 
{

	"id":"5f02e248af94077271d43590",
	"prod_id":"5f02e248af94077271d43559"
	
}

the prod_id would be added to an array of carts in user document

