"# codebox" 

'# cb_frontend'
Yarn Yarn install to install nodemodules and lock files
Yarn start to  Start the file

'# cb_backend'

npm install to install nodemodules and lock files

npm run dev to run the folder

'To test'
api_url='http://localhost:8000/'

get-`api_url/api/file/:lang`,get the required language and for lang: pyhton and Javascript

/--------------------------------------------------------------------------------------------------------/

post-`api_url/api/run`,post the code at required language

/--------------------------------------------------------------------------------------------------------/

post-`api_url/account/register`to register an account and use proper email

/--------------------------------------------------------------------------------------------------------/

post-`api_url/account/authenticate`to login

/--------------------------------------------------------------------------------------------------------/

post-`api_url/account/verify-emai`to verify-email

/--------------------------------------------------------------------------------------------------------/

post-`api_url/account/forgot-password`to have link for forget password

/--------------------------------------------------------------------------------------------------------/

post-`api_url/account/validate-reset-token`to have link for validating account

/--------------------------------------------------------------------------------------------------------/

post-`api_url/account/reset-password`to have link for reset password

/--------------------------------------------------------------------------------------------------------/

get-`api_url/account/chat/messages/get`to get all messages

/--------------------------------------------------------------------------------------------------------/

post-`api_url/account/chat/messages`to post message

/--------------------------------------------------------------------------------------------------------/

post-`api_url/stripe/payment`to do payment

/--------------------------------------------------------------------------------------------------------/

For stripe-Account deatail will be stored in stripe.com

compiler-front-end will run the compiler