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
- use postman to post 15 column data to companys table and 3 column to companykey in MySQL accrevocompany database ` baseurl/company `
![alt text][logo]

[logo]: https://lh3.googleusercontent.com/9m5ud0_B6TfNclr_ZstB_vrWz-eJS7FEvZdwhGG7wOTYx-gqQpt66TgBIin2Vtl3Qls-20CixAwdcNR3PSEhTDRJ83Q0kgu1rgtIlzxqw4kmgxL2_IJLPD4_XopBUofqirDj_Dun7XBm4a5ZhWZ0JY6ngeJC4WdPUW4ViD0QA2624No6uxGY74G7A_IRBSMB8oEEOctr4iUQKMBuN4BPcYW3Ws7-wlUIQuHSd23ioH1m5_ctSvZjwdknCo1Jr65300atjKz-F6dBXvr4uvYaQF7uZIb8HnhYSn5rppF-cS4ZUhcT6MizPyG31cDRfydk_km8LB79Sir3PaGLltO01iMw84i3rdgsoXy_3xfcLJMHWbovaj5Y-1Fv8k7quffnJNJUB7cnBpKbh7462ExpAJ3xDIFJI49m-3Gz4HlW-N9lDDrnt_XimQq1juKNnznMoQ3Umfvo8oYLXMBRVjrWxp0rR9MxFvWBSkw_GMlLFPMvKYBFNg5Cp14dYwYea6Mw9bs3qsMJ49r_O1dLnuIHOExk6HV_bhUT2ST4rNEsb_Sbn0vH5k-tIWzwkyduNxxBr6xlqOYU-ulIy72S5VetLqsg4hgF4LIEepfr9Sv5liKExJuF2wqVyuhbnnZwdmTjO6GlqClVYgHR5ZEBNCpkitqwPS6IpEgAJzUR68-ljg=w1479-h731-no "Logo Title Text 2"                                      
- get companyname if exist else return null ` baseurl/company/{companyname} `             
- create and get company name's new api key ` baseurl/company/getnewapikey/{companyname} `

