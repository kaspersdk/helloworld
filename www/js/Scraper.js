class Scraper {

    constructor() {

    }


    static request() {

        if($.support.cors) {
            console.log("CORS OK");
        } else {
            console.log("CORS FAIL");
        }

        $.support.cors = true;
        
        console.log("TESTER");
        $.get('https://www.google.com', function(response) {
            $("#content-view").append(response);
            console.log(response);
        });

    }

}