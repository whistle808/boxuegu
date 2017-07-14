 require.config({
     baseUrl: "/view/public",
     paths: {
         "jquery": "assets/jquery/jquery.min",
         "bootstrap": "assets/bootstrap/js/bootstrap.min",
         "nprogress": "assets/nprogress/nprogress",
         "echarts": "assets/echarts/echarts.min",
         "cookie": "assets/jquery-cookie/jquery.cookie",
         "form": "assets/jquery-form/jquery.form",
         "template": "assets/artTemplate/template",
         "datepicker":"assets/bootstrap-datepicker/js/bootstrap-datepicker.min",
         "datepickerzh":"assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
         "common": "js/common"
       
     },
     shim: {
         "bootstrap": {
             deps: ["jquery"]
         },
         "datepickerzh":{
             deps:["jquery"]
         }
     }
 })
 require(["common"]);