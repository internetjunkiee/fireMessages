const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    const data = {
        USERNAME: username,
        MESSAGE: message
}
    database.push(data);
}

// Set database "child_added" event listener here
database.on("child_added", function(rowData){
    const data = rowData.val();
    const container = document.querySelector(".allMessages");
    const p = document.createElement("p");
    container.appendChild(p);
    p.innerText = data.USERNAME + " : " + data.MESSAGE;
 })
