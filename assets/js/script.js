$("#currentDay").text(moment().format("dddd, MMMM Do"));

for (let i = 9; i <= 21; i++) {

    let row = $("#" + i.toString());
    let currentHour = moment().format("k");
    let textBox = row.children("textarea");
    let saveBtn = row.children(".saveBtn");

    textBox.text(localStorage.getItem(i));

    row.children(".hour").text(moment(i.toString(), "k").format("hA"));
    
    if (i < currentHour) {
        textBox.addClass("past");
    } else if (i > currentHour) {
        textBox.addClass("future");
    } else {
        textBox.addClass("present");
    }
    
    saveBtn.on("click", function() {
            localStorage.setItem(i, textBox.val());
    });
}

