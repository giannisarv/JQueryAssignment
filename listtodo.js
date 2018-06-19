// let counter = 0;
let counter = $('#todo-list li').length;
console.log($('#howMany').text("How many to do: " + counter));

$('#Addbutt').on('click', function() {
        let addText = $('#textBox').val();
        if (addText == ""){
            // alert("empty");
            console.log($('#validation')
            .text("Oxi klepsies!!!")
            .css("color","red"));
        }
        else {
        $('#validation').hide();    
        $('#todo-list')
            .append($('<li class="list-item"></li>').text(addText));
        counter = counter + 1;
        console.log($('#howMany').text("How many to do: " + counter));}
});


$('#todo-list').on('click','li', function() {
   
    let selectedElement = $(this);
    selectedElement.hide();
    counter = counter - 1;
    console.log($('#howMany').text("How many to do: " + counter));
   
    $('#done-list')
   
        .append($('<li class="donelist-item"></li>')
   
        .text(selectedElement.text()));
   
});

$('#done-list').on('click','li', function() {
   
    let selectedElement = $(this);
    selectedElement.hide();
    counter = counter + 1;
    console.log($('#howMany').text("How many to do: " + counter));
   
    $('#todo-list')
   
        .append($('<li class="list-item"></li>')
   
        .text(selectedElement.text()));
   
});