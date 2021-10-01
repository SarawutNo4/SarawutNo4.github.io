// A $( document ).ready() block.

var UserList = [];
var TodoList = []
 var val1 = '';
 var val2 = '';
$( document ).ready(function() {
    console.log( "ready!" );
    $( "#back" ).hide();
    $( "#Todo_list" ).hide();
  
    
        $.getJSON( "https://jsonplaceholder.typicode.com/users", function( data ) {
        var rnd =1;
                    data.forEach(element =>{
                        if(rnd >= 0 && rnd <=10){
                            $("#name"+rnd).text(element.name);
                            $("#name"+rnd).val(element.name);
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
                        $( "#Todo" ).append('<div class="col col-12 mt-3">'+
                        '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
                        '<h4>' + element.title+'</h4>'+
                        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+
                        '</div>'+'</div>');
                    }
                    else{
                        $( "#Todo" ).append('<div class="col col-12 mt-3">'+
                        '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
                        '<h4>' + element.title+'</h4>'+
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
            var username1 =    document.getElementById("#name1");
            Getdata(1,username1);

        });

        $( "#UserList2" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList2" ).hide();
            var username2 =    document.getElementById("#name2");
            Getdata(2,username2);

        });

        $( "#UserList3" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList3" ).hide();
            var username3 =    document.getElementById("#name3");
            Getdata(3,username3);

        });

        $( "#UserList4" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList4" ).hide();
            var username4 =    document.getElementById("#name4");
            Getdata(4,username4);

        });

        $( "#UserList5" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList5" ).hide();
            var username5 =  document.getElementById("#name5");
            Getdata(5,username5);

        });

        $( "#UserList6" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList6" ).hide();
            var username6 =   document.getElementById("#name6");
            Getdata(6,username6);

        });

        $( "#UserList7" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList7" ).hide();
            var username7 =   document.getElementById("#name7");
            Getdata(7,username7);

        });

        $( "#UserList8" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList8" ).hide();
            var username8 =    document.getElementById("#name8");
            Getdata(8,username8);

        });

        $( "#UserList9" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList9" ).hide();
            var username9 =   document.getElementById("#name9");
            Getdata(9,username9);

        });

        $( "#UserList10" ).click(function() {
            $( "#U_list" ).hide();
            $( "#Todo_list" ).show();
            $( "#UserList1-" ).hide();
            var username10 =   document.getElementById("#name10");
            Getdata(10,username10);

        });

});