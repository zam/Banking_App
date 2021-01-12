var userList = [];
//var userID = 0;

function UserInfo(username, password){
    this.username = username;
    this.password = password;
    //this.profileImage = 
}


function createUser() {
    inputUsername = document.getElementById('register-username').value;
    inputPassword = document.getElementById('register-password').value;

    //Checking if username exists
    if (userList.length !== 0){
        for(let x = 0; x < userList.length; x++){
            if ( inputUsername === userList[x].username){
                usernameTaken = true;
            } else {
                usernameTaken = false;
            }
        }

        if ( usernameTaken === true ){
            console.log('Username is already taken');
        } else {
            var newUser = new UserInfo(inputUsername, inputPassword); 
            userList.push(newUser);
        }
    } else {
        var newUser = new UserInfo(inputUsername, inputPassword); 
        userList.push(newUser);
    }
    

}

