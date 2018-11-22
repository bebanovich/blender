var a1 = $.ajax({
             url: 'json/tutorials.json',
             dataType: 'json'
         }),
    a2 = a1.then(function(data) {
             // .then() returns a new promise
             return $.ajax({
                 url: 'json/topics.json',
                 dataType: 'json',
                 data: data.sessionID
             });
         });

a2.done(function (data) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].tutorials.name + "</td>");
            tr.append("<td>" + json[i].tutorials.vid_id + "</td>");
            tr.append("<td>" + json[i].topics.name + "</td>");
            $('table').append(tr);
        }
    });
    //     $('#bothContent').html.console.log(data);
//
//
// });

//   }
//       success: function (jsonData) {
//         var output = document.getElementById('tutorials');
//         output.innerHTML = tutorials.this.name
//         $('#dataView1').css('outline', '8px solid red');
//         $('#dataView1').JSONView(jsonData);
//       }
//     }),
//     request2 = $.ajax({
//           url: 'json/topics.json',
//           success: function (jsonData) {
//             data1 = jsonData;
//             $('#dataView2').css('outline', '8px solid red');
//             $('#dataView2').JSONView(jsonData);
//           }
//         }),
//     request3 = $.ajax({
//       url: 'json/producers.json',
//       success: function (jsonData) {
//         data2 = jsonData;
//         $('#dataView3').css('outline', '8px solid red');
//           $('#dataView3').JSONView(jsonData);
//       }
//     });
//
// //when both requests are done
// $.when(request1, request2, request3).done(function () {
//   //wait one second, for demonstration purposes
//   setTimeout(function () {
//     $('.dataContainer').css('outline', '8px solid green');
//   }, 1000);
// });
