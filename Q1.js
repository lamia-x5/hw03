//Q1
var str = "I want to count the number of occurances of each char in this string";

var counts = {};
var ch, index, len, count;
for (index = 0, len = str.length; index < len; ++index) {
    ch = str.charAt(index); 

    count = counts[ch];
    counts[ch] = count ? count + 1 : 1;
}
for (ch in counts) {
    console.log(ch + " count: " + counts[ch]);
}