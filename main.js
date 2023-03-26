$(function () {
    $.getJSON("data.json", function (data) {
        console.log(data);
        let content = "";
        let cal = "";
        let highest = 0;
        $(".am").height("0px");
        for (var x in data) {
            var height = data[x].amount + "%";
            content = "<p>" + data[x].day + "</p>";
            cal =
                '<div class="am">' +
                '<p class="a">' +
                "$" +
                data[x].amount +
                "</p>" +
                "</div>";
            $("#can .dv")
                .eq(x)
                .html(cal + content);

            $(".am").eq(x).height(0).animate({ height: height }, 300);

            if (data[x].amount > highest) {
                highest = data[x].amount;
            }
        }
        $(".am")
            .eq(data.findIndex((item) => item.amount === highest))
            .css("background-color", "#76b5bc");
    });
});
