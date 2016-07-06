/**
 * Created by ianarsenault on 7/5/16.
 */

function truncateString(str, num) {
    //var endStr = "...";      /* string holding ... */
    var trun;                /* to hold truncated string */

    if (str.length > num) {
        trun = str.slice(0, num-3) + "...";

    }
    else if (str.length <= num) {
        trun = str;
    }
    if (num <= 3) {
        trun = str.slice(0 , num) + "...";

    }

    return trun;

    /* Another way of doing it
     if (str.length <= num)  {
     return str;
     }
     else  {
     return str.slice(0, num > 3 ? num - 3 : num) + '...';
     }*/

}

/*  returns "A-tisket a-tasket A green and yellow basket" */
truncateString("A-tisket a-tasket A green and yellow basket", 11); // Output 'A-tisket...'


//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
            // output 'A-tisket a-tasket A green and yellow basket'