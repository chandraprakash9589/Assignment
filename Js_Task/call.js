function SetUsername(username){
    this.username = username
    console.log("SetUsername called...")
}

function GetUsername(username,email,password){
    SetUsername.call(this, username)
    this.email = email 
    this.password = password 
}

const user1 = new GetUsername("Rudra","rudra@gmail.com","rudra124")

console.log(user1)

console.log(user1.username)