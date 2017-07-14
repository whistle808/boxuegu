define(["jquery", "template"], function ($, template) {
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function(info) {
            // console.log(info.result);
            if (info.code == 200) {
                // alert("1");
                var htmlStr = template("tc_list_tpl",info);
                // console.log(htmlStr);
                $("#tc_list_tBody").html(htmlStr);
            }
        },
        error:function(){
            console.log("123");
        }
    })

    $("#tc_list_tBody").on("click", ".check-btn", function () {
        // alert("123");
        var id = $(this).parent().attr('data-id');
        $.ajax({
            url:'/api/teacher/view',
            type:'get',
            data:{tc_id:id},
            success:function(info){
                if(info.code == 200){
                    var htmlStr = template('tc_info_tpl',info.result);
                    $('#teacherModal tbody').html(htmlStr);
                    $('teacherModal').modal();
                }
            }
        })
    })
})