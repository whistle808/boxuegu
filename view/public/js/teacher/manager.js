define(["jquery", "template", "form", "datepicker", "datepickerzh"], function ($, template, form, dp, dpzn) {
    // 讲师添加
    //     function addTeacher(){
    //         $("#addT").on("click",function(){
    //             var data = $("#addTcForm").serializeArray();
    //             console.log(data);
    //             $.ajax({
    //                 url:"/api/teacher/add",
    //                 type:"post",
    //                 data:data,
    //                 suc
    //             })
    //         })
    //         return false;
    //     }
    //    addTeacher();
    var temp = {};
    var search = location.search;
    search = search.slice(1);
    // console.log(search);
    var searchArr = search.split('&');
    // console.log(searchArr);
    for (var i = 0; i < searchArr.length; i++) {
        sArr = searchArr[i].split('=');
        // console.log(sArr);
        temp[sArr[0]] = sArr[1];
    }
    // console.log(temp);
    var id = temp.tc_id;
    // console.log(id);
    if (id) {
        $.ajax({
            url: '/api/teacher/edit',
            type: "get",
            data: {
                tc_id: temp.tc_id
            },
            success: function (info) {
                console.log(info.result);
                info.result.title = "讲师编辑";
                info.result.btnSave = "保 存";
                // console.log(info.result);
                if (info.code == 200) {
                    var htmlStr = template("tc_manager_tpl", info.result);
                    $(".teacher").html(htmlStr);
                    $('input[name = tc_join_date]').datepicker({
                        format: "yyyy/mm/dd",
                        language: "zh-CN"
                    })
                }
            }
        })
    } else {
        var htmlStr = template("tc_manager_tpl", {
            title: "添加讲师",
            btnSave: "添加",
            tc_gender: 1
        });
        $(".teacher").html(htmlStr);
        $('input[name = tc_join_date]').datepicker({
            format: "yyyy/mm/dd",
            language: "zh-CN"
        })
        $(".teacher").on("click", "#addT", function () {
            // alert("添加失败");
            $("form").ajaxSubmit({
                url: '/api/teacher/add',
                type: 'post',
                success: function (res) {
                    alert("添加成功");
                    // location.href = "/teacher/list";
                },
                error:function(){
                    alert("添加失败");
                }
            })
        })
    }
    return false;

})