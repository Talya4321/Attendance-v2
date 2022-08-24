var names_of_students_array = [];

function Submit() {
    var display_student_name = [];
    for (var j = 1; j < 11; j++) {
        var name_of_student = document.getElementById("name_of_student_" + j).value;
        console.log(name_of_student);
        names_of_students_array.push(name_of_student);
    }

    console.log(names_of_students_array);

    var length_of_names_of_students_array = names_of_students_array.length;
    console.log(length_of_names_of_students_array);

    for (var t = 0; t < length_of_names_of_students_array; t++) {
        display_student_name.push('<h4>NAME- ' + names_of_students_array[t] + '</h4>');
        console.log("inside the for loop");
        console.log(display_student_name);
    }
    console.log("outside the for loop");
    console.log(display_student_name);

    document.getElementById("display_name_with_comma").innerHTML = display_student_name;

    var remove_comma = display_student_name.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_comma").innerHTML = remove_comma;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sorting_button").style.display = "inline-block";
}
function Sorting() {
    names_of_students_array.sort();
    console.log(names_of_students_array);

    var display_student_name_v2 = [];
    var length_of_names_of_students_array = names_of_students_array.length;
    console.log(length_of_names_of_students_array);

    for(var m = 0; m < length_of_names_of_students_array; m++){
        display_student_name_v2.push("<h4 style='color: blue;'>NAME- "+names_of_students_array[m]+"</h4>");
        console.log(display_student_name_v2);
    }
    var remove_comma_v2 = display_student_name_v2.join(" ");
    document.getElementById("display_name_without_comma").innerHTML = remove_comma_v2;
}