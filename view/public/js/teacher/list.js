define(["jquery", "template"], function ($, template) {
    // 渲染教师列表
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
//  查看每个讲师的信息
    $("#tc_list_tBody").on("click","a.check-btn", function () {
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

    $("#tc_list_tBody").on("click","a.btnHandle",function(){
        var id = $(this).parent().attr("data-id");
        var _this = $(this);
        $.ajax({
            url:'/api/teacher/handle',
            type:"post",
            data:{
                tc_id:id,
                tc_status: _this.attr("data-status")
            },
            success:function(info){
                if(info.result.tc_status==1){
                    _this.text("启用");
                }else{
                    _this.text("注销");
                }
                _this.attr("data-status",info.result.tc_status);
            }
        })
    })
})