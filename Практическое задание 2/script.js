function deleteTags(str) {
    let a = 0;
    
    for (i = 0; i < str.length; i++) {
        if (str[i] === '<') {
            let closeTag = str.indexOf('>')+1;
            let p = replaceBetween (i, closeTag);
            str = str.replace(p, '');
            function replaceBetween (start, end) {
            a = str.substring (start, end);
            return a;
            }
            
        }
    }
    return str;
}

let str ='<br>sdfs, <col>wcrwecjy <embed>uyfjtersser, dhfggh,jhdf <hr>, <img>';
console.log(deleteTags(str));



