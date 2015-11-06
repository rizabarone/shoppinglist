

function addListItem() {
    
     var write = $('#newItem').val();
     var list = $('#itemList');
     var item = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + write + '</span><button class="delete">x</button></li>');
     var newItem = $("#newItem");

     if (write.length === 0  || write.length > 500) {
        return false;
    }

    list.prepend(item);
    $(newItem).val('');
}

/* Allows user to delete list items */
function deleteItem() {

    $(this).parent().remove();
}

/*ticks off item list */

function tickItem() {

    $(this).parent().toggleClass('tick'); 
    /* Moves ticked items to the bottom of the list */
	$('#itemList').find('.tick').appendTo('#itemList');
}


/*Clears all items on the list */
$(document).on('click', '#resetButton', function(){
    $('#itemList').empty();
    submissions = 0;
});

/* Adds item to the list */

$(function() {

    var add = $('#addItem');
    var newItem = $('#newItem');
    var list = $('#itemList');
    
    add.on('click', addListItem);
    list.on('click', '.checkbox', tickItem);
    list.on('click', '.delete', deleteItem);
    newItem.on('keypress', function (e) {
        if (e.which == 13) {
            addListItem();
        }
  
    });
});





