function speedInfo(input) {

    let a = Number(input[0]);

    if (a <= 10) {
        console.log("slow");
    } else if (a <= 50) {
        console.log("average");
    } else if (a <= 150) {
        console.log("fast");
    } else if (a <= 1000) {
        console.log("ultra fast");
    } else if (a > 1000) {
        console.log("extremely fast");
    }
}

speedInfo(["8"]);