Project introduction
-------------------------------------------------------
Project name: thriftBook 
Project created as hackathon submission for VHack 2024 targeting Case 1. Created by Tan Xin Sheng, Wun Lim Zhe, Kyle John Boudville and Karthik A/L Karunanithy.
Submitted via GitHub on 24th March 2024.

Technologies used
-------------------------------------------------------
Programming language: javascript <br/>
Libraries used: Node Package Module (NPM) <br/>
Framework: bootstrap, express.js <br/>

Purpose
-------------------------------------------------------
This project takes the form of a website and is a financial tracker that serves to complement preexisting initiatives such as the DMP. The princpal aim is to assist users in satisfying their debt management plans and other financial goals by directly managing their day-to-day expenditure and income sources, shaping them via product recommendations and other initiatives to fit the demands of their financial targets.

Currently the website only works with debt management plans provided by AKPK's DMP. The website works by tracking the user's income and expenditure activities relative to their DMP programme requirements via user updates. The website then uses this information along with user spending habits to recommend budget-friendly products and services suitable for the user. Products that are budget friendly will be given a high rating and recommended directly by the website. Meanwhile, products that are expensive will be given a lower rating so that users do not risk exceeding their budget and financial goals. 

At the same time, the website will recommend other initiatives, such as selling off their unused items or getting a side job to further empower users in building financial resillience and contribute towards their financial goals, such as debt repayment. If the user decides to pursue these initiatives, the website will also take them into account and update its product recommmendations accordingly.

Running the program
-------------------------------------------------------
Clone this repo:
```
git clone https://github.com/WUNLIMZHE/thriftbook.git
cd thriftbook
```
**Running with Node** <br/>
1. Make sure you have Node.JS installed.<br/>
Node installation link: <br/>
```
https://nodejs.org/en
```

2. In the thriftbook directory, install the dependencies using npm install.<br/>
```
npm install
```

2. Run the server:<br/>
```
node index.js
```

4. Go to http://localhost:3000.
```
http://localhost:3000
```

List of pages
-------------------------------------------------------
The project contains multiple webpages, where each webpage serves a specific purpose necessary for the smooth operation of the project as a whole. The webpages are categorized into 5 sections according to the features they provide within the project. A detailed explanation is given for each webpage as below:

1. Start up-This section covers the components that the user will interact with before they can access the website.
   
    i.  Start up
   * This is the page that is first displayed when the project is run. Users can choose to either log in via their websitele account, Google account or a thriftBook account. New users can also create their own account. If the user chooses to log in via websitele or Google accounts, they will be redirected to the home page once their respective accounts are verified. If they choose to log in with a thriftBook account, they will be redirected to the log in page. If they choose to create a new account, they will be redirected to the Sign-Up page.

    ii.  Log in
   * This page is for users who wish to log in via thriftBook account to enter their username and password. Once verification is successful, they will be redirected to the home page associated with their account.

    iii.  Sign Up
   * This page is for new users to sign up with the website and create their own account. Users will be asked to enter their email, desired username and password.

    iv.  DMP submission
   * This page is for new users to upload their debt management plans into the website. This is necessary so that the website may recommend products and services based on their budget constraints as stated within their DMP. Once the user has uploaded their DMP information, they will be sent to the homepage. Users who do not have a DMP plan may also skip this step and upload their DMP later.

2. Home page-This section covers all components related to managing the user's personal finance.
   
    i.	 Home-main
   * This is the main page of this section. Upon successful log in or account creation, the user will be redirected to this page. This page shows the user their budget details in terms of amount spent and budget requirements so that they may plan their spending. Users can also use this page to report recent transactions or update the details regarding their debt management plans here. Finally, users may also view their transaction history for both income and expenditures.

    ii.  Transaction reporting page 
   * This is the page where the user can report their financial transaction. Users enter the recepient's name, transaction type, category and amount and a short description describing the purpose and nature of the transaction. Users then submit them and the transaction is recorded by the website.

    iii.  My DMP
   * This is the page where users are allowed to manage and update their DMP. The contents of this page are similar to the DMP submission page in the Start up section.

3. Search-This section covers all components responsible for providing the product and job recommendation features.
   
    i.  Search-main
   * This is the main page of the section. This page allows users to directly access the product recommendations within the website. Thus, it also serves as a junction for the various product categories classified. In this page, users can set their location information to localize website recommendations. A general search bar is also provided to enable direct searching for products, services or jobs. Below the search bar are buttons that lead to different product categories, such as food and groceries. Users can tap on the button associated with each category to navigate to their respective category pages. Finally, general product recommendations fill the remainder of the page.
    
    ii.  Food and grocery pages
   * These pages are demo pages to showcase the User Interface associated with each of the category pages mentioned in 3. i. They include a search bar for searching products within their categories (food and groceries) and an explanation of the product recommendation system. Below it is the search by demand function, where the website recommends product combinations according to budget size, number of products and entered keywords. Finally, general product recommendations fill the remainder of the page.

    iii.  My purchase list
   * This page covers the products that the user intends to purchase. The total cost of the products and the available budget are shown to help users make a sound judgement before they proceed with their purchase.

    iv.  Transaction confirmation page
   * If the user decides to proceed with purchasing the items within the purchase list (3. iii), this page is displayed. It informs users that the website acknowledges the purchase made and will use it to recalculate product recommendations.

4. Community-This section covers the components responsible for connecting users to the community.
   
    i.  Community-main
   * This is the main page of the section. In this page, users can manage their advertisements on the platform as well as the sale of their unwanted items as second-hand products. Their advertisements serve as the products that may be recommended to other users. Meanwhile, the items they put up as second-hand products will be visible to other users who are browsing for second-hand deals. Users can also access forums started by other users and participate in active discussion. A personal message system is also implemented for private conversations between different users.

    ii.  Advertisements and Second-Hand wares
   * These pages allow users to manage their advertisements and second-hand wares respectively. They are accessible by  websiteing on the "Manage my advertisements" and "Manage my second-hand wares" buttons in the Community-main page. In each page, items can be sorted according to categories and directly interacted with.

5. Profile-This section covers all components that assist the user in managing their account.
   
    i.  Profile-main
   * This page enables users to directly manage their profile on the website. Users can edit their profile, see their saved posts, manage blocked users, synchronize e-wallets and modify website settings. They can also log out of their account in this page. Logging out brings them to the start up page.

    ii.  Edit profile
   * This page enables users to edit their profile.

    iii.  Saved posts
   * This page enables users to see their saved posts.

    iv.  Blocked contacts
   * This page enables users to see other users that they have blocked
    
    v.  Sync e-wallet
   * This page provides a feature where the user can synchronize the website with an e-wallet account. This enables the website to directly recognize transactions made using the registered e-wallets without user input. 

        
Business model
-------------------------------------------------------
This website generates a profit by charging merchants an advertisement fee for advertising their products. The advertisement fee is charged either monthly or yearly and is based on number of products advertised.
    For users selling second-hand items, a 3% commission is incurred upon every successful transaction. 

Market segment
-------------------------------------------------------
   It is expected that at least 60% of users would be DMP applicants, as the website is currently catered towards them. However, since the website is open to all users regardless of their particiaption in a debt management programme, it is also expected to receive users from the B40 demographic as well as financially savvy students, who may not be under debt or any major financial burden.

Competitor Analysis
-------------------------------------------------------
It is believed that the main competitors will be Shopee and Mudah.my. The reason is that Shopee and Mudah.my are also known to promote affordable products on their platforms and cater towards the same demographic of consumers. However, as fully commercialized platforms, they prioritize volume of purchases over smart spending and are not capable of personalizing product recommendations based on their user's spending power and budget, making them less suitable for debt management purposes. In contrast, as a purpose-built financial tracker, this website proritizes careful spending over total volume of products sold, and includes various features to assist users in attaining financial independence and mitigating their debts. Thus, the emphasis on careful spending could serve as a competitive edge over our competitors in terms of attracting users from less well-off backgrounds.

Potential Future improvements
-------------------------------------------------------
The following section contains potential improvements in the project that can be implemented in the future
1. Gamification
   * It is believed that the gamification of the website will vastly improve the allure of the app towards users. The central premise is that the partial gamification of the project can be used to further reward constructive actions, motivating users to make sound decisions and improving financial discipline. Rewards issued to users may include cheap vouchers for discounts.

3. Delivery system
   * Currently, the project does not feature delivery systems that directly ship products to the user's own home. Instead, the website redirects users to other websites that offer their own delivery systems, such as those of our competitors. As a platform that proritizes affordability of products, it is believed that integrating an in-house delivery system that is maintained as a function of the project will help users cut costs in terms of online delivery. Thus, the idea of updating the project to support a built-in delivery system is currently under heavy consideration.
