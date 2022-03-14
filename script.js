
        var TicketBoard = ge('TicketBoard');

        //variables for lotto
        var Lotto_rangeMin = 0,
            Lotto_rangeMax = 0,
            Lotto_rangeSize = 0,
            Lotto_generate = ge('Lotto_generate');

        //variables for euros
        var Euro_rangeMin = 0,
            Euro_rangeMax = 0,
            Euro_rangeSize = 0,
            Euro_starMin = 0,
            Euro_starMax = 0,
            Euro_starSize = 0,
            Euro_generate = ge('Euro_generate');
            
        //variables for thunders
        var Thunder_rangeMin = 0,
            Thunder_rangeMax = 0,
            Thunder_rangeSize = 0,
            Thunder_starMin = 0,
            Thunder_starMax = 0,
            Thunder_starSize = 0,
            Thunder_generate = ge('Thunder_generate');

        //get a lotto ticket
        Lotto_generate.addEventListener("click", function () {
            var numbers = new Array(),
                Lotto_ticket = "";
            getRange();

            for (i = 0; i < Lotto_rangeSize; i++) {
                do {
                    numbers[i] = newNumber(Lotto_rangeMin, Lotto_rangeMax)
                } while (i > 0 && numbers.lastIndexOf(numbers[i], i - 1) >= 0)
            }
            //return
            Lotto_ticket = "<span>";
            Lotto_ticket += numbers.sort(function (a, b) { return a - b }).join("</span><span>");
            Lotto_ticket += "</span>";

            //console.log(Lotto_ticket);
            TicketBoard.innerHTML += (Lotto_ticket + "<br />");
        });

        //get a euro ticket
        Euro_generate.addEventListener("click", function () {
            var numbers = new Array(),
                stars = new Array(),
                Euro_ticket = "";
            getRange();

            //get the numbers
            for (i = 0; i < Euro_rangeSize; i++) {
                do {
                    numbers[i] = newNumber(Euro_rangeMin, Euro_rangeMax)
                } while (i > 0 && numbers.lastIndexOf(numbers[i], i - 1) >= 0)
            }
            //get the stars
            for (i = 0; i < Euro_starSize; i++) {
                do {
                    stars[i] = newNumber(Euro_starMin, Euro_starMax)
                } while (i > 0 && stars.lastIndexOf(stars[i], i - 1) >= 0)
            }
            //return
            Euro_ticket = "<span>";
            Euro_ticket += numbers.sort(function (a, b) { return a - b }).join("</span><span>");
            Euro_ticket += "</span><span class='estar'>";
            Euro_ticket += stars.sort(function (a, b) { return a - b }).join("</span><span class='estar'>");
            Euro_ticket += "</span>";

            //console.log(Euro_ticket);
            TicketBoard.innerHTML += (Euro_ticket + "<br />");
        });

        //get a Thunder ticket
        Thunder_generate.addEventListener("click", function () {
            var numbers = new Array(),
                stars = new Array(),
                Thunder_ticket = "";
            getRange();

            //get the numbers
            for (i = 0; i < Thunder_rangeSize; i++) {
                do {
                    numbers[i] = newNumber(Thunder_rangeMin, Thunder_rangeMax)
                } while (i > 0 && numbers.lastIndexOf(numbers[i], i - 1) >= 0)
            }
            //get the stars
            for (i = 0; i < Thunder_starSize; i++) {
                do {
                    stars[i] = newNumber(Thunder_starMin, Thunder_starMax)
                } while (i > 0 && stars.lastIndexOf(stars[i], i - 1) >= 0)
            }
            //return
            Thunder_ticket = "<span>";
            Thunder_ticket += numbers.sort(function (a, b) { return a - b }).join("</span><span>");
            Thunder_ticket += "</span><span class='tstar'>";
            Thunder_ticket += stars.sort(function (a, b) { return a - b }).join("</span><span class='tstar'>");
            Thunder_ticket += "</span>";

            //console.log(Thunder_ticket);
            TicketBoard.innerHTML += (Thunder_ticket + "<br />");
        });


        //update the requirements
        function getRange() {
            //for lotto
            Lotto_rangeMin = Number(ge('Lotto_rangeMin', true)) || 1;
            Lotto_rangeMax = Number(ge('Lotto_rangeMax', true)) || 59;
            Lotto_rangeSize = Number(ge('Lotto_rangeSize', true)) || 6;
            //for euro
            Euro_rangeMin = Number(ge('Euro_rangeMin', true)) || 1;
            Euro_rangeMax = Number(ge('Euro_rangeMax', true)) || 50;
            Euro_rangeSize = Number(ge('Euro_rangeSize', true)) || 5;
            Euro_starMin = Number(ge('Euro_starMin', true)) || 1;
            Euro_starMax = Number(ge('Euro_starMax', true)) || 12;
            Euro_starSize = Number(ge('Euro_starSize', true)) || 2;
            //for thunder
            Thunder_rangeMin = Number(ge('Thunder_rangeMin', true)) || 1;
            Thunder_rangeMax = Number(ge('Thunder_rangeMax', true)) || 39;
            Thunder_rangeSize = Number(ge('Thunder_rangeSize', true)) || 5;
            Thunder_starMin = Number(ge('Thunder_starMin', true)) || 1;
            Thunder_starMax = Number(ge('Thunder_starMax', true)) || 14;
            Thunder_starSize = Number(ge('Thunder_starSize', true)) || 1;
        }

        //get an element or an elements value
        function ge(e, v) {
            if (v != true) {
                return document.getElementById(e);
            }
            else {
                return document.getElementById(e).value;
            }
        }

        //get a new number 
        function newNumber(min, max) {
            var number = Math.floor(Math.random() * (max - min + 1)) + min;
            return number
        }