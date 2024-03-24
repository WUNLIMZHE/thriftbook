import express from "express";
import bodyParser from "body-parser";
import generateUniqueId from "generate-unique-id";
import _ from 'lodash';
import formidable from 'formidable';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/images', express.static('images'));

app.use(bodyParser.urlencoded({ extended: true }));

app.locals.htmlDisplay = html => _.escape(html).replace(/\n/g, '<br>');

var login = false;

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const monthNames = ["Jan", "Feb", "Mac", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const joinDate = (`${day} ${monthNames[month]} ${year}`);

const userID = generateUniqueId({
  includeSymbols: ['@','#','$'],
  length: 10,
});
var username;
var blogName ="";
var blogTitle = "Your blog name";
var bloggerAbout = "To be added...";
var profilePic = "images/default-profile.jpg";

var payPeriod="None";
var payAmount="0";
var activeIncome="0";
var passiveIncome="0";
var portfolioIncome="0";
var fixedExpenses="0";
var variableExpenses="0";

var numPost = 0;
var postTitle = []; //storing all product name
var keyword = []; //storing all search keyword
var price = []; //storing all prices
var postDate = [];
var editPostId;
var delPostId;

var blogCount = 3;

app.get("/", (req, res) => {
  login = false;
  res.render("index.ejs", {login:login});
});

app.get("/home", (req, res) => {
  res.render("index.ejs", {login:login});
});

app.get("/login", (req, res) => {
  if (login){
    res.render("user-blog.ejs", {author: req.body["username"], login:login});
  } else{
    res.render("login.ejs");
  }
});

app.post("/main", (req, res) => {
  if (req.body["password"] === "ILoveProgramming") {
    login = true;
    username = req.body["username"];
    if(blogName === ""){
      blogName = username;
    }
    res.render("user-blog.ejs", {
      username: req.body["username"], 
      login: login, 
      postTitle:postTitle,
      postDate:postDate,
      username: username, 
      blogName: blogName, 
      profilePic: profilePic,
      blogTitle: blogTitle, 
      bloggerAbout: bloggerAbout
    });
  } else {
    res.status(401).send("Incorrect password. Please try again.");
  }
});

app.get("/main", (req, res) => {
  res.render("user-blog.ejs", {
    login: login, 
    postTitle:postTitle,
    postDate:postDate,
    username: username, 
    blogName: blogName, 
    profilePic: profilePic,
    blogTitle: blogTitle, 
    bloggerAbout: bloggerAbout
  });
});

app.get("/top-blog-1", (req, res) => {
  res.render("blog-1.ejs", {login:login});
});

app.get("/top-blog-2", (req, res) => {
  res.render("blog-2.ejs", {login:login});
});

app.get("/top-blog-3", (req, res) => {
  res.render("blog-3.ejs", {login:login});
});

app.get("/food", (req, res) => {
  res.render("food.ejs", {login:login});
});

app.get("/groceries", (req, res) => {
  res.render("groceries.ejs", {login:login});
});

app.get("/transportation", (req, res) => {
  res.render("transportation.ejs", {login:login});
});

app.get("/clothing", (req, res) => {
  res.render("clothing.ejs", {login:login});
});

app.get("/electronics", (req, res) => {
  res.render("electronics.ejs", {login:login});
});

app.get("/books-and-stationery", (req, res) => {
  res.render("books-and-stationery.ejs", {login:login});
});

app.get("/entertainment", (req, res) => {
  res.render("entertainment.ejs", {login:login});
});

app.get("/home-and-living", (req, res) => {
  res.render("home-and-living.ejs", {login:login});
});

app.get("/health-and-fitness", (req, res) => {
  res.render("health-and-fitness.ejs", {login:login});
});

app.get("/jobs", (req, res) => {
  res.render("jobs.ejs", {login:login});
});

app.get("/second-hand", (req, res) => {
  res.render("second-hand.ejs", {login:login});
});

app.get("/new-post", (req, res) => {
  res.render("add-post.ejs", {login:login});
});

app.post("/add", (req, res) => {
  numPost++;
  postTitle.push(req.body["postTitle"]);
  keyword.push(req.body["keyword"]);
  price.push(req.body["price"]);
  postDate.push((`${day} ${monthNames[month]} ${year}`));
  res.render("user-blog.ejs", {
    login:login, 
    postTitle:postTitle,
    postDate:postDate,
    profilePic: profilePic,
    username: username, 
    blogName: blogName, 
    blogTitle: blogTitle, 
    bloggerAbout: bloggerAbout,
    keyword:keyword,
    price:price
  });
});

app.post("/edit-post", (req, res) => {
  editPostId = req.body["postId"];
  res.render("edit-post.ejs", {
    login:login, 
    postTitle:postTitle[editPostId],
    keyword:keyword[editPostId],
    price:price[editPostId]
  });
});

app.post("/refresh", (req, res) => {
  postTitle[editPostId] = req.body["postTitle"];
  keyword[editPostId] = req.body["keyword"];
  price[editPostId] = req.body["price"];
  res.render("user-blog.ejs", {
    login:login, 
    postTitle:postTitle,
    postDate:postDate,
    profilePic: profilePic,
    username: username, 
    blogName: blogName, 
    blogTitle: blogTitle, 
    bloggerAbout: bloggerAbout,
    keyword:keyword,
    price:price
  });
});

app.post("/delete", (req, res) => {
  delPostId = req.body["postId"];
  numPost--;
  postTitle.splice(delPostId, 1); // Removes 1 element starting from index delPostId
  keyword.splice(delPostId, 1); // Removes 1 element starting from index delPostId
  price.splice(delPostId, 1); // Removes 1 element starting from index delPostId
  // delete postTitle[delPostId]; // Deletes the element at index delPostId
  res.render("user-blog.ejs", {
    login:login, 
    postTitle:postTitle,
    postDate:postDate,
    profilePic: profilePic,
    username: username, 
    blogName: blogName, 
    blogTitle: blogTitle, 
    bloggerAbout: bloggerAbout
  });
});

app.get("/edit-profile", (req, res) => {
  res.render("edit-profile.ejs", {
    numPost:numPost,
    login:login, 
    userID:userID, 
    username:username, 
    profilePic: profilePic,
    joinDate:joinDate, 
    payPeriod:payPeriod,
    payAmount:payAmount,
    activeIncome:activeIncome,
    passiveIncome:passiveIncome,
    portfolioIncome:portfolioIncome,
    fixedExpenses:fixedExpenses,
    variableExpenses:variableExpenses
  });
});

app.post("/updated", (req, res) => {
  //update the user's info after each update
  username = req.body["username"];
  payPeriod = req.body["payPeriod"];
  payAmount = req.body["payAmount"];
  activeIncome = req.body["activeIncome"];
  passiveIncome = req.body["passiveIncome"];
  portfolioIncome = req.body["portfolioIncome"];
  fixedExpenses = req.body["fixedExpenses"];
  variableExpenses = req.body["variableExpenses"];

  // Render the user-blog.ejs template with updated user information
  res.render("user-blog.ejs", {
    login: login, 
    postTitle:postTitle,
    postDate:postDate,
    profilePic: profilePic,
    username: username, 
    blogName: blogName, 
    blogTitle: blogTitle, 
    bloggerAbout: bloggerAbout
  });
});

app.listen(port, () =>{
  console.log(`Listening on port ${port}`);
});