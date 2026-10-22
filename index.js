const button = document.getElementById("language");


button.addEventListener("click", function() 
{
    if (document.documentElement.lang == "ru")
        document.documentElement.lang = "en";
    else 
        document.documentElement.lang = "ru";
    
});