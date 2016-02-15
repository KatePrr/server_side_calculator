var operator;
$(document).ready(function() {

    $('.operatorType').on('click', operatorType);
    $('#submit').on('click', clickPostData);
    $('#clear').on('click', clearForm);
});


function clearForm() {
    $('#calculator-form').find('input[type = text]').val('');
}


function operatorType(id) {
    event.preventDefault();
    operator = this.id;
    return operator;
}


function appendToDom(data) {
    $('#resultDiv').append('<div>' + data + '</div>');
}


function clickPostData() {
    event.preventDefault();
    var values = {};
    $.each($('#calculator-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
        values['type'] = operator;
    });
    //console.log(values);

    if (values.type == 'add'){
        $.ajax({
            type: 'POST',
            url: '/add',
            data: values,
            beforeSend: function () {
                console.log('before!');
            },
            success: function (data) {
                console.log('From Server: ', data);
                console.log(data);
                $('#resultDiv').append('<div>' + data + '</div>');
            }
    })
    } else if (values.type == 'subtract') {
        $.ajax({
            type: 'POST',
            url: '/subtract',
            data: values,
            beforeSend: function () {
                console.log('before!');
            },
            success: function (data) {
                console.log('From Server: ', data);
                console.log(data);
                $('#resultDiv').append('<div>' + data + '</div>');
            }
        })
    } else if (values.type == 'multiply') {
        $.ajax({
            type: 'POST',
            url: '/multiply',
            data: values,
            beforeSend: function () {
                console.log('before!');
            },
            success: function (data) {
                console.log('From Server: ', data);
                console.log(data);
                $('#resultDiv').append('<div>' + data + '</div>');
            }
        })
    } else if (values.type == 'divide') {
        $.ajax({
            type: 'POST',
            url: '/divide',
            data: values,
            beforeSend: function () {
                console.log('before!');
            },
            success: function (data) {
                console.log('From Server: ', data);
                console.log(data);
                $('#resultDiv').append('<div>' + data + '</div>');
            }
        });
    }
}












