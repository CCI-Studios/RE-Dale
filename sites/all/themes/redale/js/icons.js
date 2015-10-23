(function($) {
    $(function(){

        if($(".node-type-engineering-services #block-system-main .field-name-field-icons .field-item").length > 0)
        {
            var icon = $("#block-system-main .field-name-field-icons .field-item").text().toLowerCase();
           
        }
        if($('#block-system-main .field-name-field-icons-basicpage .field-item').length > 0)
        {   
            console.log('yes');
            var icon=$("#block-system-main .field-name-field-icons-basicpage  .field-item a").text().toLowerCase();
        }
    

        if ($("body").hasClass("page-engineering-services") || $("body").hasClass("node-type-projects") || $("body").hasClass("page-node-17"))
        {
            icon = "services";
        }
            
        

       if($(".view-engineering-services .views-field-field-icons").length > -1)
        {
              $(".view-engineering-services .views-field-field-icons .field-content").each(function(){
                  var icon =  $(this).text(); 

                    switch(icon)
                    {
                    case "Consulting":
                        icon = "consulting";
                        break;
                    case "Civil":
                        icon = "civil";
                        break;
                    case "Design":
                        icon = "design";
                        break;
                    case "Plumbing":
                        icon = "plumbing";
                        break;
                    case "PM":
                        icon = "pm";
                        break;
                    case "Shoring":
                        icon = "shoring";
                        break;
                    case "Planning":
                        icon = "planning";
                        break;
                    }

                    if (icon)
                    {   
                        if( $("body").hasClass("page-node-17"))
                        {
                          var title_url = "/sites/all/themes/redale/images/icons/icon-title-"+icon+"-red.png";
                        }
                        else
                        {
                            var title_url = "/sites/all/themes/redale/images/icons/icon-title-"+icon+".png";

                        }
                        $("<img class=\"title-icons\" src='"+title_url+"' alt='' />").prependTo($(this).parents('.views-row').find(".views-field-title"));
                    }


                });
        }

        switch(icon)
        {
        case "Consulting":
            icon = "consulting";
            break;
        case "Civil":
            icon = "civil";
            break;
        case "Design":
            icon = "design";
            break;
        case "Plumbing":
            icon = "plumbing";
            break;
        case "PM":
            icon = "pm";
            break;
        case "Shoring":
            icon = "shoring";
            break;
        case "Planning":
            icon = "planning";
            break;
        }

        if(icon)
        {
            var title_url = "/sites/all/themes/redale/images/icons/icon-title-"+icon+".png";
            $("<img src='"+title_url+"' alt='' />").insertBefore("h1#page-title");
        }

        
    });
}(jQuery));
