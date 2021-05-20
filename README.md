![tagger logo](https://res.cloudinary.com/dk1u2xsjk/image/upload/v1621539827/Screenshot_from_2021-05-20_17-27-41_nzgtde.png =250x)


# Tagger

Tagger is a social network for sharing posts with assigned tags.


## Requirements

To be able to test the website locally, you will need a **MongoDB** database so the server can connect to it to store all data. If you have some issues with the installation, check the [**Official MongoDB docs**](https://docs.mongodb.com/manual/installation/). \
You will also need to have **node.js** installed. If you do not have it already, you can refer to the [**npm website**](https://www.npmjs.com/get-npm).

## Important

In order to run the server locally, you will need to create an .env with:

- *PORT*: the port number on which the server will be running.
- *DOMAIN_LOCAL*: must be the URL (port included if necessary) on which the Frontend will be running (to be added to the CORS "whitelist")
- *MONGODB_URI*: is the MongoDB database connection URI.
- *SECRET*: will be used for the algorithm that modifies the session data.


## Setup

- Fork this repo
- Clone this repo

Then, on the server, you will have to type these commands in your console (valid for Linux):

 ````javascript
sudo npm i nodemon -g // if not already installed
npm install
npm run dev
 ````

Now, on the client, type:

 ````javascript
npm install
npm start
 ````

## Submission

If you want to merge your changes, add them to your GitHub repository and create a PR.


## Backend Rest API endpoints


| Method          | Endpoint                            | Functionality                |
| --------------- | ----------------------------------- | ---------------------------- |
| Post            | /api/auth/new-user                  | Signup                       |
| Post            | /api/auth/login                     | Login                        |
| Logout          | /api/auth/logout                    | Logout                       |
| Get             | /api/auth/IsLoggedIn                | Check if user is logged      |
| Post            | /api/admin/new-tag                  | Create a new tag             |
| Get             | /api/admin/users-list               | List all users               |
| Get             | /api/admin/edit-tag/:tagId          | Get a tag data               |
| Put             | /api/admin/edit-tag/:tagId          | Edit a tag                   |
| Delete          | /api/admin/delete-user/:userId      | Delete a user (logical way)  |
| Delete          | /api/admin/delete-post/:postId      | Delete a post                |
| Delete          | /api/admin/delete-tag/:tagId        | Delete a tag                 |
| Get             | /api/user/current-user              | Own user profile             |
| Get             | /api/user/:username                 | See other users profile      |
| Get             | /api/user/fav-tag-list              | List of favorites tags       |
| Put             | /api/user/add-fav-user/:username    | Add a fav user               |
| Put             | /api/user/add-fav-tag/:tagname      | Add a fav tag                |
| Put             | /api/user/remove-fav-tag/:tagname   | Remove a fav tag             |
| Post            | /api/post/new                       | New post creation            |
| Get             | /api/post/getByAuthor/:userId       | Get posts by author          |
| Get             | /api/post/getPostsByTags            | List all posts by tags       |
| Get             | /api/post/getAllPosts               | List all posts               |
| Get             | /api/post/:postId                   | Get a post data              |
| Put             | /api/post/:postId                   | Edit a post                  |
| Post            | /api/post/:postId/new-comment       | New comment creation         |
| Get             | /api/post/:postId/allComments       | List all comments of a post  |
| Get             | /api/tag/tag-list                   | List all tags                |
| Get             | /api/tag/available-tag-list         | Tag list (except favorites)  |


## Special thanks 

- [Germán Álvarez](https://github.com/german-alvarez-dev)
- Teo López

Without them I would not have been able to learn so much and understand everything so well, and without their help this project would not have been possible.
