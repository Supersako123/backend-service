
# Backend Service

A simple backend service that periodically queries the Open Weather API and stores the data in
a database.

## Setup Instructions
 Step 1: 
download and open the file
 
 Step 2: 
In the terminal, download the Prisma CLI with the command:
#### npm install prisma --save-dev
 
 Step 3: 
Created an enviorment variable file in the root and name it '.env', and place the following text inside it:
#### DATABASE_URL="file:./dev.db"
#### API_KEY = {Your API key}

 Note: there should be a database named 'dev.db' already in the prisma folder, if it's not, run this command
#### npx prisma migrate dev --name init

 Step 4: run the program using:
#### npx tsx main.ts
I used Table Plus to view database data.

## Config

There is file named 'config.ts' in the root, in it you can change the frequency of weather queries, and the cities that are being tracked.

## Architecture overview

I decided to use SQlite and the prisma ORM to manage the database. I chose SQlite because the file-based database makes developement simple. Setup is quick without needing to connect to a seperate database. I chose prisma because prisma models fit perfectly into the typescript enviorment. A chose to use an ORM over raw SQL because using an ORM makes it easy to swap between databases.

main.ts handle all the business logic. It uses a database service provider, and single-responsibility functions. Errors are handled with functions returning an error
object, so that the business portion can decide what to do when there's an error. The database service provider is instantiated using a repository. This way if the prisma ORM ever needs to be changed in the future, only a new repository needs to be created and injected. The business logic code doesn't change. 
#
For fetching the data, the program will terminate on all errors except a 500 server error. I made it this way because in cases where the api key is invalid, or the endpoint is incorrect, the program must be stopped and the error needs to be fixed by the user. With a 500 server error, that means the server is down and our program just needs to keep sending requests until it is up and working again.

