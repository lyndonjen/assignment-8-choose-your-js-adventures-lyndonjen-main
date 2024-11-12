"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the innerHTML of the element with id
    // "courseList" to be used as a template.
    let courseList = document.getElementById("courseList").innerHTML;
    let courseFilledList = Handlebars.compile(courseList);
    let courseContainer = document.getElementById("courses");

    // Initialize an empty string to accumulate the HTML content
    let genHtml = "";

    // Loop through each course item and accumulate the generated HTML
    coursesData["courses"].forEach(function (courseItem) {
        genHtml += courseFilledList(courseItem);
    });

    // Insert the generated HTML into the courseContainer
    courseContainer.innerHTML = genHtml;
});
