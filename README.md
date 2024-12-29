# backend-service

## Setup Instructions
#### Step 1: download and open the file
 
## Step 2: In the terminal, download the Prisma CLI with the command:
#### npm install prisma --save-dev
# 
## Step 3: Created an enviorment variable file in the root and name it '.env', and place this text inside it
#### DATABASE_URL="file:./dev.db"
#### API_KEY = {Your API key}
#
### Note: there should be a database named 'dev.db' already in the prisma folder, if it's not in, run this command
### npx prisma migrate dev --name init
#
## Step 4: run the program using:
### npx tsx main.ts