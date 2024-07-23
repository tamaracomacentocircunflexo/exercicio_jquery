$(document).ready(function() {
    $('#task-form').on('submit', function(event) {
        event.preventDefault();
        const taskInput = $('#task-input');
        const taskList = $('#task-list');
        
        if (taskInput.val().trim() !== '') {
            const listItem = $('<li></li>').text(taskInput.val());
            listItem.on('click', function() {
                $(this).toggleClass('completed');
            });
            taskList.append(listItem);
            taskInput.val('');
        }
    });
});