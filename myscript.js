function helloworld(){
    console.log("Hello World9");
}

setTimeout(helloworld,2000);

$.ajax({
    url : "http://localhost:3000/EKKO",
    type: "GET",
    success : function(result){
        console.log("Header");
        console.log(result);

        $.ajax({
            url : "http://localhost:3000/EKPO?EBELN="+result[0].EBELN,
            type: "GET",
            success : function(result){
                console.log("Header " +result[0].EBELN + " items" );
                console.log(result);
            },
            error : function(error){
                console.log(error);
            }
        })

    },
    error : function(error){
        console.log(error);
    }
})
console.log("call done");