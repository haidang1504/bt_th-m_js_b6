
//Bài 5


document.getElementById("bntSoNguyen").onclick = function () {
    var number = document.getElementById("tbtNumber").value

    function demSo() {
        var content = ""

        for (var i = 0; i < number; i++) {
            content += i + ", "
        }
        return content;
    }
    var ketQuaSoNguyen = " Số nguyên là :  " + demSo();
    document.getElementById("soNguyen").innerHTML = ketQuaSoNguyen;

}