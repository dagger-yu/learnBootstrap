$(function(){
    $(window).on("resize",function (){
        // 1.1 获取窗口宽度
        let clientW=$(window).width()
        // 1.2 设置临界值
        let isShowBigImg=clientW>=800
        // 1.3 获取所有item
        let $allItems=$("#carousel-example-generic .item")
        // console.log($allItems)
        // 1.4 遍历
        $allItems.each(function(index,item){
            // 1.4.1 取出图片路径
            let src=isShowBigImg?$(item).data("lg-img"):$(item).data("sm-img")
            let imgUrl='url("'+src+'")'
            // 1.4.2 设置背景
            $(item).css({backgroundImage:imgUrl})
            // 1.4.3 设置img标签
            if(!isShowBigImg){
                let $img='<img src="'+src+'">'
                $(item).empty().append($img)
            }else{
                $(item).empty()
            }
        })

    })

    // 工具提示
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    // 处理产品列表
    $(window).on("resize",function(){
        let $ul=$("#product .nav")
        let $allList=$("[role='presentation']",$ul)
        // console.log($allList)
        
        // 遍历
        let totalW=0
        $allList.each(function(index,item){
            totalW+=$(item).width()
        })

        // 获取父标签宽度
        let parentW=$ul.parent().width()

        // 设置宽度
        if(totalW > parentW){
            $ul.css("width",totalW+"px")
        }else{
            $ul.removeAttr("style")
        }
    })


    // 处理导航
    let navLists=$("#bs-example-navbar-collapse-1 li")
    $(navLists[2]).on('click',function(){
        $("html,body").animate({scrollTop:$("#hot").offset().top},1000)
    })




    $(window).trigger("resize")



})