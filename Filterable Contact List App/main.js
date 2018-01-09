document.getElementById("submit").addEventListener("click", ()=> {
    function saveContact() {
        //Get all the data from Input
        var firstName = document.getElementById("first_name").value;
        var lastName  = document.getElementById("last_name").value;
        var mobile    = document.getElementById("mobilePhone").value; 
        //Store data in an Object
        var contactDetails = {
            "firstName" : firstName,
            "lastName"  : lastName,
            "mobile"    : mobile
            }
        console.log(contactDetails);

        //Store all data to Browser's localStorage
        //Check if key for data storage is present in LocalStorage
        if(localStorage.getItem("contacts") === null){
            //create contacts
            var contacts = [];
            //push contactDetails to contacs
            contacts.push(contactDetails);
            //Now store contactDetails to LocalStorage; convert Contacts to be a string.
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }
    }

});