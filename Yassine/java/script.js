"use strict";

$(function () {


    var naam;
    var soundStart = $("#musicStart")[0];
    var width = 1;
    var europe;
    var afrika;
    var asia;
    var toon;
    var toonAfrika;
    var toonAsia;
    var resultaat = 0;
    var count = 0;
    var level;
    var timer;
    var retry = false;





    $(document).ready(function () {
        load1();
        soundStart.play();
    });

    function load1() {

        setTimeout(function () {
            $.mobile.changePage("#gegevens", {
                transition: "slideup"
            });

        }, 2000);
    }


    $("#btnConfirm").click(function () {

        naam = $("#txtNaam").val();

        if (naam == "") {
            alert("Enter your name please ! ")

        } else {


            document.getElementById("welcomeParagraph").innerHTML = "Welcome <br>" + naam;

            setTimeout(function () {
                $.mobile.changePage("#welcome", {
                    transition: "turn"
                });
            }, 1000);

        }

    })

    document.getElementById("txtNaam")
        .addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode == 13) {
                document.getElementById("btnConfirm").click();
            }
        });



    $("#buttonAccept").click(function () {

        $.mobile.changePage("#menu", {
            transition: "slideup"
        });

    })




    function load2() {

        setTimeout(function () {
            $.mobile.changePage("#menu", {
                transition: "slideup"
            });

        }, 3000);
    };


    var sound = false;

    $(".sound").click(function () {

        if (sound == false) {
            $(".sound").attr("src", "image/sound.png");
            soundStart.play();
            sound = true;
        } else {
            $(".sound").attr("src", "image/muet.png");
            soundStart.pause();
            sound = false;
        }


    })

    $("#infoApp").click(function () {
        $("#popupInfo").popup("open");
    })

    $("#returnBtn").click(function () {
        window.location.href = "#menu";
 
    })

    /*********************** Level Continent EUROPE ******************/




    $("#europeBTN").click(function () {
       
        document.getElementById("GoodOrNot").innerHTML = "Feedback : ";

        var elem = document.getElementById("scoor");
        elem.style.width = width + '%';
        $("#antwoord").val('');
        level = 1;
        resultaat = 0;
        width = 0;

        elem.style.width = width + '%';
        $.mobile.changePage("#world", {
            transition: "slideup"
        });

        document.getElementById("continent").innerHTML = "Europe";
        document.getElementById("point").innerHTML = "point:" + resultaat + "/5";
        europe = ["GERMANY", "ITALY", "FRANCE", "BELGIUM", "SPAIN"];

        toon = europe[Math.floor(Math.random() * europe.length)];

        $("#countryVraag").attr("src", "image/EUROPE/" + toon + ".png");




    })
    
    document.getElementById("antwoord")
        .addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode == 13) {
                document.getElementById("btnAntwoord").click();
            }
        });




    /*********************** Level Continent AFRIKA ******************/


    $("#afrikaBTN").click(function () {
        
        $("#infoApp").hide();
        if (count < 1) {

            alert('You have to finish the continent Europe to unlock Afrika')
        } else {
            var elem = document.getElementById("scoor");
            level = 2;
            resultaat = 0;
            width = 0;
            elem.style.width = width + '%';
            $("#antwoord").val('');
            $("#countryVraag").attr("src", "");
            document.getElementById("continent").innerHTML = "AFRIKA";
            document.getElementById("point").innerHTML = "point:" + resultaat + "/5";
            $.mobile.changePage("#world", {
                transition: "slideup"
            });


            afrika = ["CONGO", "GUINEA", "TOGO", "COMOROS", "BURKINA FASO"];

            toonAfrika = afrika[Math.floor(Math.random() * afrika.length)];


            $("#countryVraag").attr("src", "../image/AFRICA/" + toonAfrika + ".png");



            setTimeout(function () {
                $("#countryVraag").attr("src", "../image/vraagteken.png");

            }, 2000);

        }


    })

    /*********************** Level Continent ASIA ******************/


    $("#asiaBTN").click(function () {
        if (count < 2) {

            alert('You have to finish the continent Europe and Afrika to unlock ASIA')
        } else {
            var elem = document.getElementById("scoor");
            timer = 60;
            document.getElementById("timer").innerHTML = "timer:" + timer;

            var id = setInterval(timerI, 1000);

            function timerI() {
                if (timer == 0) {
                    clearInterval(id);

                    document.getElementById("naamRes").innerHTML = naam + " Try again you do beter than this ";
                    $("#resultaatImg").attr("src", "../image/gameover.gif");
                    $.mobile.changePage("#resultaat", {
                        transition: "turn"
                    });
                } else {

                    timer--;
                    document.getElementById("timer").innerHTML = "timer:" + timer;


                }

            }


            level = 3;
            resultaat = 0;
            width = 0;
            elem.style.width = width + '%';
            $("#antwoord").val('');
            $("#countryVraag").attr("src", "");
            document.getElementById("continent").innerHTML = "ASIA";
            document.getElementById("point").innerHTML = "point:" + resultaat + "/5";
            $.mobile.changePage("#world", {
                transition: "turn"
            });


            asia = ["CHINA", "AFGHANISTAN", "INDIA", "LEBANON", "QATAR"];
            toonAsia = asia[Math.floor(Math.random() * asia.length)];


            $("#countryVraag").attr("src", "../image/ASIA/" + toonAsia + ".png");



            setTimeout(function () {
                $("#countryVraag").attr("src", "../image/vraagteken.png");

            }, 2000);

        }


    })








    $("#btnAntwoord").click(function () {
        if (level == 1) {
            level1();
        } else if (level == 2) {
            level2();
        } else if (level == 3) {
            level3();
        } else {
            alert('fout opgetreden');
        }

    })









    /******************* Levels *******************/


    function level1() {
        if (resultaat != 5) {
            var elem = document.getElementById("scoor");
            var low = document.getElementById("antwoord").value;

            var res = low.toUpperCase();


            if (toon == res) {
                width = width + 20;
                elem.style.width = width + '%';
                resultaat++;
                document.getElementById("GoodOrNot").innerHTML = "Good " + naam + ",Yet another ";
                
                  setTimeout(function () {

                        document.getElementById("GoodOrNot").innerHTML = "Feedback : ";

                    }, 1000);
                document.getElementById("point").innerHTML = "point:" + resultaat + "/5";



            } else {

                if (width == 0 && resultaat == 0) {
                    $("#antwoord").val('');
                    document.getElementById("GoodOrNot").innerHTML = "You can better " + naam;
                    setTimeout(function () {

                        document.getElementById("GoodOrNot").innerHTML = "Feedback : ";

                    }, 1000);

                } else {
                    $("#antwoord").val('');
                    width = width - 20;

                    elem.style.width = width + '%';
                    resultaat--;
                    document.getElementById("point").innerHTML = "point:" + resultaat + "/5";

                    document.getElementById("GoodOrNot").innerHTML = "You can better " + naam;
                    setTimeout(function () {

                        document.getElementById("GoodOrNot").innerHTML = "Feedback : ";

                    }, 1000)


                }
            }








        


        setTimeout(function () {
            europe = ["GERMANY", "ITALY", "FRANCE", "BELGIUM", "SPAIN"];

            toon = europe[Math.floor(Math.random() * europe.length)];


            $("#countryVraag").attr("src", "image/EUROPE/" + toon + ".png");
            $("#countryVraag").fadeIn(350);
            $("#antwoord").val('');
        }, 600);






    } else {
        count = 1;
        $("#lockAfrika").attr("src", "../image/unlock.png");
        $.mobile.changePage("#menu", {
            transition: "slideup"
        });



    }


}



function level2() {
    if (resultaat != 5) {
        var elem = document.getElementById("scoor");
        var low = document.getElementById("antwoord").value;
        var res = low.toUpperCase();


        if (toonAfrika == res) {
            width = width + 20;
            elem.style.width = width + '%';
            resultaat++;
            document.getElementById("point").innerHTML = "point:" + resultaat + "/5";



        } else {
            if (width == 0 && resultaat == 0) {
                    $("#antwoord").val('');
                    document.getElementById("GoodOrNot").innerHTML = "You can better " + naam;
                    setTimeout(function () {

                        document.getElementById("GoodOrNot").innerHTML = "Feedback : ";

                    }, 1000);

                } else {
                    $("#antwoord").val('');
                    width = width - 20;

                    elem.style.width = width + '%';
                    resultaat--;
                    document.getElementById("point").innerHTML = "point:" + resultaat + "/5";

                    document.getElementById("GoodOrNot").innerHTML = "You can better " + naam;
                    setTimeout(function () {

                        document.getElementById("GoodOrNot").innerHTML = "Feedback : ";

                    }, 1000)


                }

        }

        setTimeout(function () {
            afrika = ["CONGO", "GUINEA", "TOGO", "COMOROS", "BURKINA FASO"];

            toonAfrika = afrika[Math.floor(Math.random() * afrika.length)];


            $("#countryVraag").attr("src", "../image/AFRICA/" + toonAfrika + ".png");
            $("#countryVraag").fadeIn(350);
            $("#antwoord").val('');
        }, 500);

        setTimeout(function () {
            $("#countryVraag").attr("src", "../image/vraagteken.png");

        }, 2000);




    } else {
        count = 2;
        $("#lockAsia").attr("src", "../image/unlock.png");
        $.mobile.changePage("#menu", {
            transition: "slideup"
        });



    }


}


function level3() {
    if (resultaat != 5) {

        var elem = document.getElementById("scoor");
        var low = document.getElementById("antwoord").value;
        var res = low.toUpperCase();


        if (toonAsia == res) {
            width = width + 20;
            elem.style.width = width + '%';
            resultaat++;
            document.getElementById("point").innerHTML = "point:" + resultaat + "/5";



        } else {
            if (width == 0 && resultaat == 0) {
                    $("#antwoord").val('');
                    document.getElementById("GoodOrNot").innerHTML = "You can better " + naam;
                    setTimeout(function () {

                        document.getElementById("GoodOrNot").innerHTML = "Feedback : ";

                    }, 1000);

                } else {
                    $("#antwoord").val('');
                    width = width - 20;

                    elem.style.width = width + '%';
                    resultaat--;
                    document.getElementById("point").innerHTML = "point:" + resultaat + "/5";

                    document.getElementById("GoodOrNot").innerHTML = "You can better " + naam;
                    setTimeout(function () {

                        document.getElementById("GoodOrNot").innerHTML = "Feedback : ";

                    }, 1000)


                }

        }

        setTimeout(function () {
            asia = ["CHINA", "AFGHANISTAN", "INDIA", "LEBANON", "QATAR"];

            toonAsia = asia[Math.floor(Math.random() * asia.length)];


            $("#countryVraag").attr("src", "../image/ASIA/" + toonAsia + ".png");
            $("#countryVraag").fadeIn(350);
            $("#antwoord").val('');
        }, 500);

        setTimeout(function () {
            $("#countryVraag").attr("src", "../image/vraagteken.png");

        }, 2000);




    } else {

        document.getElementById("naamRes").innerHTML = naam + " You're great !!!!";
        $("#resultaatImg").attr("src", "../image/bravo.gif");


        $.mobile.changePage("#resultaat", {
            transition: "slideup"
        });





    }


}

$(".back").click(function () {

    $.mobile.changePage("#menu", {
        transition: "flip"
    });
})


$(".tryagain").click(function () {

    location.reload();
})





});