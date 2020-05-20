# Node-key-concepts

Important key concepts and snippets

## SQL SERVER,Connecting to local database

### Steps

    - check your sql server manager (C:\Windows\SysWOW64\SQLServerManager11.msc)
    - Start the Browser service( Set the start mode to automated)
  
### Reset password

    - Start the SQLEXPRESS with -m parameter( to be added in startup parameter) and restart the service
    - Start the SQL studio with administrator and reset the password and role in security->logins->user.
    - Remove the -m parameter and restart the service.
