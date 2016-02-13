var operator;

$(document).ready(function() {


    $('.operatorType').on('click', operatorType);
    $('#submit').on('click', clickPostData);
    $('#clear').on('click', clearForm);

});

//var operator;

function clearForm() {
    $('#calculator-form').find('input[type = text]').val('');
};

function operatorType(id) {
    event.preventDefault();
    operator = this.id;
    return operator;
};
//
//function clickPostData() {
//     event.preventDefault();
//     var values = {};
//     $.each($('#calculator-form').serializeArray(), function(i, field) {
//         values[field.name] = field.value;
//         values['type'] = operator;
//     });
//
//     $.ajax({
//         type: 'POST',
//         url: '/data',
//         data: values,
//         beforeSend: function() {
//             console.log('before!');
//         },
//         success: function(data) {
//             console.log('From Server: ', data);
//             console.log(data);
//             answerToDOM(data, '#answer');
//            }
//        });
//
//        console.log(values);
// }

function clickPostData() {
    event.preventDefault();
    var values = {};
    $.each($('#calculator-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
        values['type'] = operator;
    });
//switch statement for operator-based ajax calls:
   switch(values.type) {
       case add:




    $.ajax({
        type: 'POST',
        url: '/data',
        data: values,
        beforeSend: function () {
            console.log('before!');
        },
        success: function (data) {
            console.log('From Server: ', data);
            console.log(data);
            answerToDOM(data, '#answer');
        }


    }

    });

    console.log(values);
}













