var hero = $(".hero_area");
var menu = $(".custom_menu-container");
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > hero.height()) {
        menu.addClass("menu_fixed-position");
        $(".custom_menu-container + section").addClass("mt-5");
    } else {
        menu.removeClass("menu_fixed-position");
        $(".custom_menu-container + section").removeClass("mt-5");
    }
});


var myCircle = Circles.create({
    id: "circles-1",
    radius: 65,
    value: 80,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-2",
    radius: 65,
    value: 70,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-3",
    radius: 65,
    value: 90,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-4",
    radius: 65,
    value: 75,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-5",
    radius: 65,
    value: 55,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-6",
    radius: 65,
    value: 100,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-7",
    radius: 65,
    value: 85,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-8",
    radius: 65,
    value: 50,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-9",
    radius: 65,
    value: 80,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-10",
    radius: 65,
    value: 65,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-11",
    radius: 65,
    value: 65,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 500,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});