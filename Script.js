// Pre-filled course data based on your input
const courses = [
    { sno: 1, code: "19P008", title: "MANUFACTURE OF AUTOMOTIVE COMPONENTS", semester: 7, credits: 3 },
    { sno: 2, code: "19P701", title: "ENVIRONMENT CONSCIOUS MANUFACTURING", semester: "", credits: 2 },
    { sno: 3, code: "19P702", title: "PRODUCTION AND OPERATIONS MANAGEMENT", semester: "", credits: 3 },
    { sno: 4, code: "19P009", title: "LEAN MANUFACTURING", semester: 6, credits: 3 },
    { sno: 5, code: "19P023", title: "STATISTICAL QUALITY CONTROL", semester: "", credits: 3 },
    { sno: 6, code: "19P403", title: "METAL FORMING PROCESSES", semester: "", credits: 3 },
    { sno: 7, code: "19P501", title: "COMPUTER NUMERICAL CONTROL MACHINES", semester: "", credits: 3 },
    { sno: 8, code: "19P502", title: "PROCESS PLANNING AND COST ESTIMATION", semester: "", credits: 3 },
    { sno: 9, code: "19P504", title: "DESIGN OF MACHINE ELEMENTS", semester: "", credits: 4 },
    { sno: 10, code: "19P510", title: "MANUFACTURING TECHNOLOGY LABORATORY", semester: "", credits: 2 },
    { sno: 11, code: "19P610", title: "FLUID POWER LABORATORY", semester: "", credits: 1 },
    { sno: 12, code: "19Q613", title: "QUANTITATIVE AND REASONING SKILLS", semester: "", credits: 1 },
    { sno: 13, code: "19P013", title: "PLC PROGRAMMING AND APPLICATIONS", semester: 5, credits: 3 },
    { sno: 14, code: "19P401", title: "PROBABILITY AND STATISTICS", semester: "", credits: 3 },
    { sno: 15, code: "19P404", title: "FOUNDRY TECHNOLOGY", semester: "", credits: 3 },
    { sno: 16, code: "19P405", title: "MECHANICS OF MACHINES", semester: "", credits: 4 },
    { sno: 17, code: "19P503", title: "MANUFACTURING METROLOGY", semester: "", credits: 3 },
    { sno: 18, code: "19P505", title: "APPLIED HYDRAULICS AND PNEUMATICS", semester: "", credits: 3 },
    { sno: 19, code: "19P511", title: "METROLOGY AND COMPUTER AIDED INSPECTION LABORATORY", semester: "", credits: 2 },
    { sno: 20, code: "19Q513", title: "BUSINESS AND MANAGERIAL COMMUNICATIONS", semester: "", credits: 1 },
    // Add more courses here
];

// Populate the table with pre-filled course data
function populateCourses() {
    const tableBody = document.querySelector("#course-table tbody");
    courses.forEach((course) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${course.sno}</td>
            <td>${course.code}</td>
            <td>${course.title}</td>
            <td>${course.semester || "--"}</td>
            <td>${course.credits}</td>
            <td>
                <select>
                    <option value="">Select Grade</option>
                    <option value="10">O</option>
                    <option value="9">A+</option>
                    <option value="8">A</option>
                    <option value="7">B+</option>
                    <option value="6">B</option>
                    <option value="5">C</option>
                </select>
            </td>
            <td class="gpa-cell">--</td>
        `;

        tableBody.appendChild(row);
    });
}

// Calculate CGPA based on user input
function calculateCGPA() {
    const rows = document.querySelectorAll("#course-table tbody tr");
    let totalCredits = 0;
    let totalPoints = 0;

    rows.forEach(row => {
        const credits = parseInt(row.children[4].textContent); // Credits column
        const grade = parseInt(row.querySelector("td:nth-child(6) select").value); // Grade select

        if (isNaN(grade)) {
            alert("Please select grades for all courses.");
            return;
        }

        const points = credits * grade; // Grade points
        totalCredits += credits;
        totalPoints += points;

        row.querySelector(".gpa-cell").textContent = (points / credits).toFixed(2); // Update GPA cell
    });

    const cgpa = totalPoints / totalCredits;
    document.getElementById("cgpa-display").textContent = `CGPA: ${cgpa.toFixed(2)}`;
}

// Populate table on page load
document.addEventListener("DOMContentLoaded", populateCourses);
