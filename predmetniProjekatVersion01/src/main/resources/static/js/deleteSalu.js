$(document).on("submit", "#sala-delete", function (event){
    event.preventDefault();

    let ID = $("#id").val();

    let novaSala = {
        ID
    }

    console.log(novaSala);

    $.ajax({
        type: "DELETE",
        url : "http://localhost:8080/sala/obrisi" + ID,

        success: function (response){
            console.log(response);

            alert("Sala" + response.ID + "je obrisana!");
            window.location.href = "admin_page.html";
        },

        error : function (){
            console.log("Error!");
        }
    });
});