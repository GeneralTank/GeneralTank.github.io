const pwsupp="pw"
const unsupp="ADMIN"

$(document).ready(function(e){
    $(".btn").submit(function(e){
        e.preventDefault()
        send()					
    });

    $(".btn").click(send)

    function send(){
        console.log("reached send function")
        var location=''
        let un = $(".usernamein").val()
        let pw = $(".passwordin").val()

        if(un==unsupp && pw==pwsupp){
            login()
//                        alert("SADASD")
        }
        else if(un=='' || pw==''){
            alert("MUST ENTER CREDENTIALS")
        }
        else{
            alert("WRONG PASSWORD/USERNAME")
        }


    }

    function login(){
        window.location.href="Dashboard.html"  
    }
})