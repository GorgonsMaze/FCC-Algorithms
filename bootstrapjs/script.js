/**
 * Created by ianarsenault on 9/24/16.
 */
$(document).ready(function(){
    var p = document.querySelectorAll(".prettyprint");
    p.textContent = p.textContent.replace(/^\s+/mg, "");

    var code = document.querySelectorAll(".code-blocks");
    code.textContent = code.textContent.replace(/^\s+/mg, "");
});