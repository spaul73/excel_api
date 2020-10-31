# excel_api
*api to upload excel files and store data in DB, also to retrieve data in json*

[Deployment Link](https://dark-alien-79782.herokuapp.com/)

# Usage

**Uploading Excel Files to DB**

Send POST to **"/upload"** with the excel file as a form-data parameter with key *"file"*
![Postman example](https://i.imgur.com/Row0ryY.png)

**Get all inovices in json**

Send GET request to **"/inovices"**
![Postman example](https://i.imgur.com/cLhOJ2l.png)

**Get all vendors in json**

Send GET request to **"/vendros"**
![Postman example](https://i.imgur.com/N8vfta2.png)
