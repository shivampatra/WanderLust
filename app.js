const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

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
app.get("/listings", async (req,res)=>{   
// Listing.find({}).then(res=>{console.log(res)});
let lists = await Listing.find();
res.render("listing/index.ejs",{lists});
});

//New ROute
app.get("/listings/new",(req,res)=>{
    res.render("listing/new.ejs");
})

//Show Route
app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    const listing =await Listing.findById(id);
    res.render("listing/show.ejs",{listing});
});

//Create Route
app.post("/listings",async (req,res)=>{
    // let {title,description,image,price,location,country} = req.body;
    // let listing = req.body.listing;
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    // console.log(listing);
    res.redirect("/listings");
});

//Edit Route
app.get("/listings/:id/edit",async (req,res)=>{
    let {id} = req.params;
    const listing =await Listing.findById(id);
    res.render("listing/edit.ejs",{listing});
});

//Update ROute
app.put("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing}); //deconstruct the js object value of req.body 
    res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id", async(req,res)=>{
    let {id} = req.params;
    let deletedList = await Listing.findByIdAndDelete(id);
    console.log(deletedList);
    res.redirect("/listings");
});

//Handling Error
app.use((err,req,res,next)=>{
    res.send("Something went wrong  ")
})

app.listen(8080,'0.0.0.0',()=>{
    console.log("app is listening on port 8080");
});