document.getElementById("submit").addEventListener("click", saveContact);
    function saveContact() {
        //Get all the data from Input
        var firstName = document.getElementById("first_name").value;
        var lastName  = document.getElementById("last_name").value;
        var mobile    = document.getElementById("mobilePhone").value; 
        //Check to make sure Input value isn't empty
        if(!firstName || !lastName || !mobile){
            alert("please fill in all the details");
            return false;
        }
        //Store data in an Object
        var contactDetails = {
            "firstName" : firstName,
            "lastName"  : lastName,
            "mobile"    : mobile
            }
        console.log(contactDetails);
        document.getElementById("contactForm").reset();

        //Store all data to Browser's localStorage
        //Check if key for data storage is present in LocalStorage
        if(localStorage.getItem("contacts") === null){
            //create contacts
            var contacts = [];
            //push contactDetails to contacs
            contacts.push(contactDetails);
            //Now store contactDetails to LocalStorage; convert Contacts to be a string.
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }else {
            //What to do if key of contact is available in LocalStorage
            //Convert entire Item to JSON
            var contacts = JSON.parse(localStorage.getItem("contacts"));
            //Add exsiting contact details to contacts
            contacts.push(contactDetails);
            //Set Items Back to LocalStorage
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }
    }