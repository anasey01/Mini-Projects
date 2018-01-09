document.getElementById("siteForm").addEventListener("submit", saveBookmark);

function saveBookmark(event) {
    //Grab form Inputs
    var siteName = document.getElementById("siteName").value;
    var siteUrl  = document.getElementById("siteUrl").value;

    if(!siteName || !siteUrl) {
        alert('Please fill in the Form!');
        return false;
    }

    //Store the values in an object so it can be saved in localstorage
    var bookmark = {
        name : siteName,
        url  : siteUrl
    }

    document.getElementById("siteForm").reset();

    //Check if the Item exists in localstorage.
    if(localStorage.getItem("bookmarks")=== null) {
        //create a variable to hold the Items
        var bookmarks = [];
        //Push bookmark into the array.
        bookmarks.push(bookmark);
        //Set Item for Localstorage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }else{
        //Get the Item from LocalStorage
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

        bookmarks.push(bookmark);
         //Set Item for Localstorage
         localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    getBookmark();
    //Stop the form from submitting
    event.preventDefault();
}

function getBookmark(){
    //Reference Div to display Item Saved to localstorage.
    var siteResult = document.getElementById("siteResult");
        siteResult.innerHTML = "";
    //Get all the Stored Item and Loop through them.
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.forEach((value) => {
        var name = value.name;
        var url  = value.url;
        siteResult.innerHTML += '<div class="card card-body bg-light">' + 
                                '<h3>'+ name + 
                                ' <a class="btn btn-primary" target="_blank" href=' + url +'> visit '+'</a>'+
                                ' <a onclick="deleteBookmark(\''+url+'\' )" class="btn btn-danger"> Delete '+'</a>'
                                '</h3>'+
                                '</div>' 
    });
}

function deleteBookmark(url){
    //Get all the Stored Item and Loop through them.
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    //loop through the Stored Item and check if the current URL equals the URL that was clicked.
    for(var i = 0; i < bookmarks.length; i++) {
        console.log(bookmarks[i]);
        if(bookmarks[i].url === url) {
            //Delete the Item
            bookmarks.splice(i, 1);
        }
    }
    //Set Item for Localstorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    //Reload the page
    getBookmark();
}