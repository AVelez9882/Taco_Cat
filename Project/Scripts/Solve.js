<script>

    // letting the user press Enter to run the function
    var input = document.getElementById("palInput");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("btnPal").click();
        }
    });

	$("#pOutput").hide();

    // function to run once button is clicked
    $("#btnPal").on("click", function () {
        let palWord = $("#palInput").val().toLowerCase().replace(/\s|\'|\.|\,|\"/g, '');

        let palOG = $("#palInput").val().toLowerCase();

        if (palOG === palWord) {
            $("#stmt1").text(`The word you entered is ${palWord}.`);
        }
        else {
            $("#stmt1").text(`Let's clean that up a bit...your word is ${palWord}.`);
        }

        let revWord = palWord.split("").reverse().join("");
        $("#stmt2").text(`Reversed, this spells ${revWord}.`);


        if (palWord === revWord) {
            $("#palOut").text("Therefore, this is a Palindrome.");
            $("#pOutput").show();
        }
        else {
            $("#palOut").text("Therefore, this is not a Palindrome.");
            $("#pOutput").show();
        }
    });



</script>
