var express=require('express');
var app=express();
app.use(express.static(__dirname+"/public"));
// body aprser is used to convert data into json form
var bodyParser = require('body-parser');
//bodyparser is a middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//to integrate pug engine
app.set('views',"./public/allsanas");
//jis file ko app pug ka zariya used kar rahah ho us ka path denay ha or extension us file ki pug honi chaiyeh
//now set engine
app.set('view engine','pug');

//By using bodyParser() middleware, we get the data from the form, 
//parse it and assign the values to corresponding keys, by creating a new user.
// setting connection of mongo db
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.set('useFindAndModify', false);//is say abb deprecation warning nahi aay gi
mongoose.connect("mongodb://anaskhalilahmed:gravity123@ds237955.mlab.com:37955/hotelsorders",{ useNewUrlParser: true });
//is ko hum na mlab ka sath connect kiya ha hamray mlab db name hotelsorders ha jis ka username
//anaskhalilahmed ha or password gravity123 ha
//or mlab ma login honay ka liya usernmae Anas Khalil ha or password anas12345
// create collections for hotelsorders
// pillows schema also used for hotelsorder when combine all items to one schema
var Pillows=mongoose.Schema({
FullName:String,
HotelName:String,
ManagerName:String,
Email:String,
PhoneNo:String,
CNIC:String,
Address:String,
Date:String,
PillowsVariety:String,
PillowsColor:String,
PillowsQuantity:Number,
PillowsSize:String,
PillowsCaseVariety:String,
PillowsCaseColor:String,
PillowsCaseQuantity:Number,
PillowsCaseSize:String,
PillowsCaseOwnHeightsize:Number,
PillowsCaseOwnWidthsize:Number,
agree:String,
/*curtainsvariety:String,
curtainscolor:String,
curtainsquantity:Number,
curtainssize:String,
curtainsownheightsize:Number,
curtainsownwidthsize:Number,
towelsvariety:String,
towelscolor:String,
towelsquantity:Number,
towelssize:String,
towelsownheightsize:Number,
towelsownwidthsize:Number,
tableclothesvariety:String,
tableclothescolor:String,
tableclothesquantity:Number,
tableclothessizes:String,
bedsheetsvariety:String,
bedsheetscolor:String,
bedsheetsquantity:Number,
bedsheetssizes:String,
bedsheetsluxurysizes:String
*/});

//schema for curtains
var Curtains=mongoose.Schema({
FullName:String,
HotelName:String,
ManagerName:String,
Email:String,
PhoneNo:String,
CNIC:String,
Address:String,
Date:String,
CurtainsVariety:String,
CurtainsColor:String,
CurtainsQuantity:Number,
CurtainsSize:String,
CurtainsOwnHeightsize:Number,
CurtainsOwnWidthsize:Number,
agree:String,
});

//schema for towels
var Towels=mongoose.Schema({
    FullName:String,
    HotelName:String,
    ManagerName:String,
    Email:String,
    PhoneNo:String,
    CNIC:String,
    Address:String,
    Date:String,
    TowelsVariety:String,
    TowelsColor:String,
    TowelsQuantity:Number,
    TowelsSize:String,
    TowelsOwnHeightsize:Number,
    TowelsOwnWidthsize:Number,
    agree:String,
});

//schema for tableclothes
var Table=mongoose.Schema({
FullName:String,
HotelName:String,
ManagerName:String,
Email:String,
PhoneNo:String,
CNIC:String,
Address:String,
Date:String,
TableClothesVariety:String,
TableClothesColor:String,
TableClothesQuantity:Number,
TableClothesSizes:String,
agree:String,
});
// schema for bedsheets
var Bed=mongoose.Schema({
FullName:String,
HotelName:String,
ManagerName:String,
Email:String,
PhoneNo:String,
CNIC:String,
Address:String,
Date:String,
BedsheetsVariety:String,
BedsheetsColor:String,
BedsheetsQuantity:Number,
BedsheetsBasicSizes:String,
BedsheetsLuxurySizes:String,
agree:String,
});



//create schema for sign in users 
var Sign=mongoose.Schema({
    email:String,
    });

//create schema for users contacts
var Contacts=mongoose.Schema({
    name:String,
    email:String,
    phoneno:String,
    message:String,
    date:String

})
// create schema for usersreply
var Reply=mongoose.Schema({
    username:String,
    useremail:String,
    usermessage:String,
   date:String
});


Reply.methods.date1=function(){
    return Date();
}
Contacts.methods.date2=function(){
    return Date();
}

Pillows.methods.dates=function(){
    return Date();
}

Curtains.methods.dates3=function(){
    return Date();
}

Towels.methods.dates4=function(){
    return Date();
}
Table.methods.dates5=function(){
    return Date();
}
Bed.methods.dates6=function(){
    return Date();
}



// A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, 
// default values, validators, etc., whereas a Mongoose model 
// provides an interface to the database for creating, querying, updating, deleting records, etc





// Models are defined by passing a Schema instance to mongoose.model.
//model and schema are integrated hum model ka through db ma data insert delete or update kartay ha
// hotel orders model
// var HotelModel=mongoose.model('orders',Hotel);
//sign in models
var SignModel=mongoose.model('signinusers',Sign);
//users contact model
var ContactModel=mongoose.model('userscontacts',Contacts);
//usersreply model
var UserReply=mongoose.model('usermessages',Reply);
//pillowsmodel
var PillowsModel=mongoose.model("pillowsorders",Pillows);
//curtaisnmodel
var CurtainsModel=mongoose.model("curtainsorders",Curtains);
//towel model
var TowelsModel=mongoose.model("towelsorders",Towels);
//table model
var TableModel=mongoose.model("tableclothesorders",Table);
//bedsheet models
var BedModel=mongoose.model("bedshhetsorders",Bed);






// for homeroute requests
app.get("/",function(req,res){
res.sendFile(__dirname+"/public"+"/home2.html");
});
// for pillowsorders request
app.get("/pillowsorder",function(req,res){
res.sendFile(__dirname+"/public"+"/pillowsorder1.html");
});
// for curtains request
app.get("/curtainsorder",function(req,res){
res.sendFile(__dirname+"/public"+"/curtainsorder1.html");
});
// for towels request
app.get("/towelorders",function(req,res){
res.sendFile(__dirname+"/public"+"/towelsorder1.html");
});
            // for tableclothes request
app.get("/tableclotheorders",function(req,res){
    res.sendFile(__dirname+"/public"+"/tableclotheorder1.html");
    });
                // for bedsheets orders requests
app.get("/bedsheetsorders",function(req,res){
res.sendFile(__dirname+"/public"+"/bedsheetorder1.html");
});
    
// for hotelpillows orders req
app.post("/hotelpillows",function(req,res){
var FirstOrder= new PillowsModel(req.body);
FirstOrder.Date=FirstOrder.dates();
FirstOrder.save(function(err,result){
if(err) throw err;
res.send("<center><h2>your order is saved</h2></center>");
});
});

// for hotelcurtains orders req
app.post("/hotelcurtains",function(req,res){
var SecondOrder= new CurtainsModel(req.body);
    SecondOrder.Date=SecondOrder.dates3();
    SecondOrder.save(function(err,result){
    if(err) throw err;
    res.send("<center><h2>your order is saved</h2></center>");
    });
    });
    

// for hoteltowels orders req
app.post("/hoteltowels",function(req,res){
var ThirdOrder= new TowelsModel(req.body);
ThirdOrder.Date=ThirdOrder.dates4();
ThirdOrder.save(function(err,result){
if(err) throw err;
// Mongoose will execute the query asynchronously and pass the results to the callback .
//monogge pehlay query ko run kartay ha or us ka result hamray callback function ka premes ma palced 
//kar detay ha
res.send("<center><h2>your order is saved</h2></center>");
});
});
            

// for hoteltableclothes orders req
app.post("/hoteltableclothes",function(req,res){
    var ForthOrder= new TableModel(req.body);
    ForthOrder.Date=ForthOrder.dates5();
    ForthOrder.save(function(err,result){
    if(err) throw err;
    res.send("<center><h2>your order is saved</h2></center>");
    });
    });
                
// for hotelbedsheets orders req
app.post("/hotelbedsheets",function(req,res){
var FifthOrder= new BedModel(req.body);
FifthOrder.Date=FifthOrder.dates6();
FifthOrder.save(function(err,result){
if(err) throw err;
res.send("<center><h2>your order is saved</h2></center>");
});
});
    





// for user signin req
app.post("/signin",function(req,res){
var Signin=new SignModel(req.body);
Signin.save(function(err,resulted){
    if(err) throw err;
    res.send("<center><h2>Thanks For Subscribing Us</h2><center>");
});
});

// for user-contacts req
app.post("/users-contacts",function(req,res){
var userscontacts=new ContactModel(req.body);
userscontacts.date=userscontacts.date2();
userscontacts.save(function(err,result3){
if(err) throw err;
res.send("<center>Thanks for contat us</center>");
});

});

// for usermessage req
app.post("/users-messages",function(req,res){
    var usersmessage=new UserReply(req.body);
    usersmessage.date=usersmessage.date1();
    usersmessage.save(function(err,result8){
        if(err) throw err;
        res.send("<center><h2>Thanks for give message to us</h2></center>")
    })
})




// pillows finds or delete section
app.post("/findpillows",function(req,res){
var b=req.body.cnic;
// hum na find ki query is liya used kiya ha ka agar akk cnic number pay two orders atay hay to 
//to user ko woh donoy orders shows ho jai gay
PillowsModel.find({CNIC:b},function(err,result1){
// if(err) throw err;
if(result1.length==0){
    res.send("NOT FOUND THIS CNIC");
}
else{
// res.send("order that matches your given cnic is"+"<br>"+"<table border=1><tr><td>"+result1+"</td></tr></table>");
res.render('pillows',{order:result1});
}
});
});

app.post("/deletepillows",function(req,res){
var c=req.body.usercnic;
PillowsModel.findOneAndDelete({CNIC:c},function(err,result2){
if(err) throw err;
res.send("deleted"+"<br>"+"<table border=1><tr><td><td>"+result2+"</td></td></tr></table>");
});
});

/*app.post("/deletebyid1",function(req,res){
    var n=req.body.userid;
    HotelModel.findByIdAndDelete(n,function(err,result2){
    if(err) throw err;
    res.send("deleted"+"<br>"+"<h4>"+result2+"</h4>");
    });
    });
  */  
 

// end pillows finds or delete section




//  curtains finds or delete section
 app.post("/findcurtains",function(req,res){
    var b=req.body.cnic;
    // hum na find ki query is liya used kiya ha ka agar akk cnic number pay two orders atay hay to 
    //to user ko woh donoy orders shows ho jai gay
    CurtainsModel.find({CNIC:b},function(err,result1){
    // if(err) throw err;
    if(result1.length==0){
        res.send("NOT FOUND ON THIS CNIC");
    }
    else{
    // res.send("order that matches your given cnic is"+"<br>"+"<table border=1><tr><td>"+result1+"</td></tr></table>");
    res.render('curtains',{orders:result1});
}    
});
    });
    
    app.post("/deletecurtains",function(req,res){
    var c=req.body.usercnic;
    CurtainsModel.findOneAndDelete({CNIC:c},function(err,result2){
    if(err) throw err;
    res.send("deleted"+"<br>"+"<table border=1><tr><td>"+result2+"</td></tr></table>");
    });
    });

// end curtains finds or delete section

// towels finds or delete section
app.post("/findtowels",function(req,res){
        var b=req.body.cnic;
        // hum na find ki query is liya used kiya ha ka agar akk cnic number pay two orders atay hay to 
        //to user ko woh donoy orders shows ho jai gay
TowelsModel.find({CNIC:b},function(err,result1){
        // if(err) throw err;
if(result1.length==0){
    res.send("NOT FOUND ON THIS CNIC");
}
else{
        // res.send("order that matches your given cnic is"+"<br>"+"<table border=1><tr><td>"+result1+"</td></tr></table>");
res.render('towels',{orders:result1});
}
});
        
        });
        
        app.post("/deletetowels",function(req,res){
        var c=req.body.usercnic;
        TowelsModel.findOneAndDelete({CNIC:c},function(err,result2){
        if(err) throw err;
        res.send("deleted"+"<br>"+"<table border=1><tr><td>"+result2+"</td></tr></table>");
        });
        });
    
// end towels finds or delete section    


// tableclothes finds or delete section
app.post("/findtableclothes",function(req,res){
    var b=req.body.cnic;
    // hum na find ki query is liya used kiya ha ka agar akk cnic number pay two orders atay hay to 
    //to user ko woh donoy orders shows ho jai gay
    TableModel.find({CNIC:b},function(err,result1){
    // if(err) throw err;
 if(result1.length==0){
     res.send("NOT FOUND ON THIS CNIC");
 }
 else{    // res.send("order that matches your given cnic is"+"<table border=1><tr><td>"+result1+"</td></tr></table>");
    res.render('tableclothes',{orders:result1});
}   
});
});
    
    app.post("/deletetableclothes",function(req,res){
    var c=req.body.usercnic;
    TableModel.findOneAndDelete({CNIC:c},function(err,result2){
    if(err) throw err;
    res.send("deleted"+"<br>"+"<table border=1><tr><td>"+result2+"</td></tr></table>");
    });
    });
// end tableclothes find or delete sections

// bedsheets finds or delete section
app.post("/findbedsheets",function(req,res){
    var b=req.body.cnic;
    // hum na find ki query is liya used kiya ha ka agar akk cnic number pay two orders atay hay to 
    //to user ko woh donoy orders shows ho jai gay
    BedModel.find({CNIC:b},function(err,result1){
    // if(err) throw err;
if(result1.length==0){
    res.send("NOT FOUND ON THIS CNIC");
}else{
    // res.send("order that matches your given cnic is"+"<br>"+"<table border=1><tr><td>"+result1+"</td></tr></table>");
res.render('bedsheets',{orders:result1});    
}   
});
    
    });
    
    app.post("/deletebedsheets",function(req,res){
    var c=req.body.usercnic;
    BedModel.findOneAndDelete({CNIC:c},function(err,result2){
    if(err) throw err;
    res.send("deleted"+"<br>"+"<table border=1><tr><td>"+result2+"</td></tr></table>");
    });
    });
// end tableclothes find or delete sections











//for pillows.html
app.get("/pillowsbootstrap.html",function(req,res){
    res.sendFile(__dirname+"/public"+"/pillowsbootstrap.html");
});

//for curtain.html
app.get("/curtainsbootstrap.html",function(req,res){
    res.sendFile(__dirname+"public"+"curtainsbootstrap.html");
});
//for towels.html
app.get("/towelsbootstrap.html",function(req,res){
    res.sendFile(__dirname+"/public"+"/towels.html");
});
//for tableclothes.html
app.get("/tableclothesbootstrap.html",function(req,res){
    res.sendFile(__dirname+"/public"+"/tableclothes.html");
});
//for bedsheets.html
app.get("/bedsheetsbootstrap.html",function(req,res){
    res.sendFile(__dirname+"/public"+"/bedsheets.html");
});

//for Reply.html
app.get("/reply.html",function(req,res){
    res.sendFile(__dirname+"/public"+"/reply.html");
});
//for payment.html
app.get("/payment-method",function(req,res){
res.sendFile(__dirname+"/public"+"/payment.html");
});

app.get("/terms.html",function(req,res){
    res.sendFile(__dirname+"/public"+"/terms.html");
    });
    


app.listen(process.env.PORT||3000);