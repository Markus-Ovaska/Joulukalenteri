let today = new Date();
// let d = ["01-12-2023"]
//let first = new Date("01-12-2023");
//let second = new Date("02-12-2023");
//let third = new Date("03-12-2023");
//let fourth = new Date("04-12-2023");
//let fifth = new Date("05-12-2023");
//let sixth = new Date("06-12-2023");
//let seventh = new Date("07-12-2023");
//let eighth = new Date("08-12-2023");
//let ninth = new Date("09-12-2023");
//let tenth = new Date("10-12-2023");
//let eleventh = new Date("11-12-2023");
//let twelvth = new Date("12-12-2023")
//let thirteenth = new Date("13-12-2023")
//let fourteenth = new Date("14-12-2023")
//let fifteenth = new Date("15-12-2023")
//let sixteenth = new Date("16-12-2023")
//let seventeeth = new Date("17-12-2023")
//let eighteenth = new Date("18-12-2023")
//let nineteenth = new Date("19-12-2023")
//let twentieth = new Date("20-12-2023")
//let twentyfirst = new Date("21-12-2023")
//let twentysecond = new Date("22-12-2023")
//let twentythird = new Date("23-12-2023")
//let twentyfourth = new Date("24-12-2023")

function open(){
    box = this.document.getElementsByClassName("day").value
    boxi = new Date(box+"-12-2023")

    if (boxi < today) {
        return false
    } else {
        return true
    }
}





