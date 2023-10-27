Configuration changes :

1. first install the ntml though terminal with below command"
npm install --save-dev cypress-ntlm-auth

2. In the file cypress/support/commands.js (or .ts) add this line/ in ele.js or in command.js

import "cypress-ntlm-auth/dist/commands";

3. 
The most convenient way to start Cypress with NTLM authentication is

npx cypress-ntlm open