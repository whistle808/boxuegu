define(["jquery","cookie"],function($,cookie){
      $("#formId").submit(function(){
        // 获取用户名和用户密码,发送请求

        var data = $(this).serializeArray();
        console.log(data);
        $.ajax({
            url:'/api/login',
            type:'post',
            data:data,
            success:function(result){
                
                if(result.code == 200){
                    $.cookie("tcInfo",JSON.stringify(result.result));
                    // alert(result.msg);
                    location.href = 'index';
                }
            },
            error:function(error){
                console.log("您输入的用户名或者密码错误")
            }

        })
        return false;
    })
})