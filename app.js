const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then( () => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errorMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errorMsg);
    }
  else{
        next()
    }
}

app.get("/", (req,res) => {
     res.send("Hi, I am root");
});
 
// app.get("/testListing", async (req,res)=>{
//     let sampleListing = new Listing({
//         title:"My new villa",
//         description:"By the beach",
//         price:1200,
//        location:"Calangute, Goa",
//         country:"India"
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });


//Index Route
app.get("/listings", wrapAsync(async (req,res)=>{   
// Listing.find({}).then(res=>{console.log(res)});
let lists = await Listing.find();
res.render("listing/index.ejs",{lists});
}));

//New ROute
app.get("/listings/new",(req,res)=>{
    res.render("listing/new.ejs");
});

//Show Route
app.get("/listings/:id",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing =await Listing.findById(id);
    res.render("listing/show.ejs",{listing});
}));

//Create Route
// app.post("/listings",async (req,res)=>{
//     try{
//         // let {title,description,image,price,location,country} = req.body;
//     // let listing = req.body.listing;
//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     // console.log(listing);
//     res.redirect("/listings");
//     }
//     catch(err){
//         next(err);
//         // res.send(err);
//     }
// });


// Using WRAPASYNC - CREATE ROUTE

app.post(
    "/listings",
    validateListing,
    wrapAsync(async (req,res)=>{

    if(!req.body.listing){
        throw new ExpressError(400,"Send valid data for listing");  // 400 - Bad request
    } 
    
    const newListing = new Listing(req.body.listing);

//  if(!newListing.description){
//                 throw new ExpressError(400,"Description missing");  // 400 - Bad request

//     }
//      if(!newListing.price){
//                 throw new ExpressError(400,"price missing");  // 400 - Bad request

//     }

    await newListing.save();
    res.redirect("/listings");
}));

//Edit Route
app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing =await Listing.findById(id);
    res.render("listing/edit.ejs",{listing});
}));

//Update ROute
app.put(
    "/listings/:id",
    validateListing,
    wrapAsync(async (req,res)=>{
    //  if(!req.body.listing){
    //           throw new ExpressError(400,"Send valid data for listing");  // 400 - Bad request
    // }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing}); //deconstruct the js object value of req.body 
    res.redirect(`/listings/${id}`);
}));

//Delete Route
app.delete("/listings/:id",
    wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let deletedList = await Listing.findByIdAndDelete(id);
    console.log(deletedList);
    res.redirect("/listings");
}));

// app.all("*",(req,res,next)=>{
//     next(new ExpressError(404,"Page not Found!"));  //NOT VALID ANYMORE - EXPRESS IS UPDATED
// });

app.use((req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!"));
});

// Handling Error
app.use((err,req,res,next)=>{
    let {statusCode=500,message="something went wrong"} = err;
    res.status(statusCode).render("error.ejs",{err});
    // res.status(statusCode).send(message);
    // res.send("Something went wrong  ")
});

app.listen(8080,()=>{
    console.log("app is listening on port 8080");
});