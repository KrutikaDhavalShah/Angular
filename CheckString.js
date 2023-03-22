// Write a typescript program which contains one function named as ChkString.
// That function accepts one string and
// check whether that string contains "Marvellous" word or not.
//Input:  "Pune Kothrud Marvellous Infosystems"
//Output: String contains Marvellous in it.
function ChkString(str1, str2) {
    var No = 0;
    No = str1.search(str2);
    if (No > 0) {
        return true;
    }
    else {
        return false;
    }
}
var string = "Pune Kothrud Marvellous Infosystems";
var substring = "Marvellous";
var bRet = false;
bRet = ChkString(string, substring);
if (bRet == true) {
    console.log("String contains Marvellous in it.");
}
else {
    console.log("String does not contain Marvellous in it.");
}
