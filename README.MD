# Install tools
> install nodejs from https://nodejs.org/en/

> install mysql from https://www.mysql.com/downloads/

# Set up MySQL
> mysql -u   _username_  -p   _DBName_  < accrevocompany.sql

# Set up project
### In project folder.
> sudo npm -g nodemon <br>
npm install <br>
npm start
### Config connection between NodeJS and MySQL in dbconnection.js
# Routing
- home page
` baseurl/ `
- post 15 column data to MySQL accrevocompany database ` baseurl/company `                                      
- get companyname if exist else return null ` baseurl/company/{companyname} `             
- create and get company name's new api key ` baseurl/company/getnewapikey/{companyname} `

