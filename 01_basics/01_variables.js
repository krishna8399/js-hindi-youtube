const acct_id = 133445
let acct_email = "acd@google.com"
var acct_password = "12345"
acct_city = "Jaipur"
let acct_state;

// acct_id = 33

acct_email = "ks@ks.com"
var acct_password = "12345678"
acct_city = "delhi"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(acct_id);
console.table([acct_id,acct_email,acct_password,acct_city,acct_state])