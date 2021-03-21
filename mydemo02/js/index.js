// 侧边栏点击事件
$("aside .nav-stacked li a").on("click",function(){
    // 处理多级菜单
    if ($(this).hasClass('switchDrop')){
        var switchDropIcon=$(this).children('.switchDropIcon')
        if($(switchDropIcon).hasClass('glyphicon-menu-left')){
            $(switchDropIcon).removeClass('glyphicon-menu-left')
            $(switchDropIcon).addClass('glyphicon-menu-down')
            $(switchDropIcon).parent().parent().children('ul').removeClass('hidden')
        }else{
            $(switchDropIcon).removeClass('glyphicon-menu-down')
            $(switchDropIcon).addClass('glyphicon-menu-left') 
            $(switchDropIcon).parent().parent().children('ul').addClass('hidden')
        }
    // 处理跳转路径
    }else if($(this).attr('data-url')){
        $("aside .nav-stacked li a.active").removeClass('active')
        $(this).addClass('active')
        $($(".content iframe")[0]).attr('src',$(this).data("url"))
    // 无论有无跳转路径，都得把状态变为激活
    }else{
        $("aside .nav-stacked li a.active").removeClass('active')
        $(this).addClass('active')
    }
})

// 动态处理iframe高度
$($(".content iframe")[0]).load(function(){
    setTimeout(function(){//此处setTimeout可从新获取documentHeight的值
        // console.log("b"+localStorage.getItem('documentHeight'))
        $($(".content iframe")[0]).css('height',localStorage.getItem('documentHeight'))
    },0)
    // console.log("a"+localStorage.getItem('documentHeight'))
})

