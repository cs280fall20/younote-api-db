# YouNote API Persisted

This repository starts with [the refactored version of the YouNote API](https://github.com/cs280fall20/younote-api-refactor). It then adds persistence to the application by connecting it to a MongoDB cluster in the cloud. 

## Local Development

* Clone this repository. 
* Open the root folder in the terminal and type in `npm install`.
* You must refer to the lecture notes to setup a MongoDV cluster in the cloud. 
  * Create a `.env` file and add your database admin password
    ```text
    DB_ADMIN_PASSWORD="your-password-goes-here"
    ```
  * Open `data/db.js` and update the `dbname` and `URI` accordingly.
* To run the application: `nodemon index.js` (make sure `nodemon` is installed; see the lecture notes).