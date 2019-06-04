let doc;
var test = setInterval(function () {
    console.log("DOKTOR!: " + doc);
    if (document.getElementById("productPhotoImg") != undefined) {
        console.log(doc);
        doc = document.getElementById("productPhotoImg");
        clearInterval(test);
        var checkExist = setInterval(function () {
            console.log("going");
            if (document.getElementsByClassName("bold_option_value_swatch")[0].childNodes[0].style.backgroundImage) {
                let img;
                let lengthBold = document.getElementsByClassName("bold_option_value").length;
                console.log("length" + lengthBold);
                for (var i = 0; i < lengthBold; i++) {
                    document.getElementsByClassName("bold_option_value")[i].onclick = (function (i) {
                        return function () {
                            console.log("I: " + i);
                            img = document.getElementsByClassName("bold_option_value_swatch")[i].childNodes[0].style.backgroundImage;
                            console.log(img);
                            img = img.substring(img.indexOf("h"));
                            img = img.substring(0, img.length - 2);
                            doc.src = img;
                        };
                    })(i);
                };

                //  document.getElementsByClassName("bold_option_value_swatch")[0].childNodes[0].click();
                // document.getElementById("productPhotoImg changeThis").src = img;
                clearInterval(checkExist)
            }
        }, 100); // check every 100ms

    }
}, 100);
console.log("doctor: " + doc); 