// A $( document ).ready() block.

var UserList = [];
var TodoList = []
 var val1 = '';
 var val2 = '';
$( document ).ready(function() {
    console.log( "ready!" );
    $( "#Todo_list" ).hide();
    $( "#back" ).hide();
    
        $.getJSON( "https://jsonplaceholder.typicode.com/users", function( data ) {
        var rnd =1;
                    data.forEach(element =>{
                        if(rnd >= 0 && rnd <=10){
                            $("#name"+rnd).text(element.name);
                            rnd++;
                        }
                    });
        });


       
        

    function Getdata(userId,name){
        console.log(name); 
        $( "#back" ).show();
        $( "#Title1" ).append(name);
        $.getJSON( "https://jsonplaceholder.typicode.com/todos", function( data1 ) {
            
            data1.forEach(element =>{
                if(element.userId === userId){
                    if(element.completed == true){
                        $( "#Todo" ).append('<div class="col col-8 mt-3">'+
                        '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
                        '<h5>' + element.title+ "     "+ element.completed+'</h5>'+
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+
                        '</div>'+'</div>');
                    }
                    else{
                        $( "#Todo" ).append('<div class="col col-8 mt-3">'+
                        '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
                        '<h5>' + element.title+ "     "+ element.completed+'</h5>'+
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+
                        '</div>'+'</div>');
                    }
                   
                }
            });
        }); 
        }

        $( "#UserList1" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList1" ).hide();
            var name =    document.getElementById("#name1");
            Getdata(1,name);

        });

        $( "#UserList2" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList2" ).hide();
            var name =    document.getElementById("#name2");
            Getdata(2,name);

        });

        $( "#UserList3" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList3" ).hide();
            var name =    document.getElementById("#name3");
            Getdata(3,name);

        });

        $( "#UserList4" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList4" ).hide();
            var name =    document.getElementById("#name4");
            Getdata(4,name);

        });

        $( "#UserList5" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList5" ).hide();
            var name =  document.getElementById("#name5");
            Getdata(5,name);

        });

        $( "#UserList6" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList6" ).hide();
            var name =   document.getElementById("#name6");
            Getdata(6,name);

        });

        $( "#UserList7" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList7" ).hide();
            var name =   document.getElementById("#name7");
            Getdata(7,name);

        });

        $( "#UserList8" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList8" ).hide();
            var name =    document.getElementById("#name8");
            Getdata(8,name);

        });

        $( "#UserList9" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList9" ).hide();
            var name =   document.getElementById("#name9");
            Getdata(9,name);

        });

        $( "#UserList10" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList1-" ).hide();
            var name =   document.getElementById("#name10");
            Getdata(10,name);

        });

});