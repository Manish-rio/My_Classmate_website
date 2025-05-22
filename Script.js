// Pre-filled course data
const courses = [
  { id: 46, code: "19G105", title: "ENGLISH LANGUAGE PROFICIENCY", semester: 1, credits: 3, grade: "B+" },
  { id: 47, code: "19P101", title: "CALCULUS AND ITS APPLICATIONS", semester: 1, credits: 4, grade: "B+" },
  { id: 48, code: "19P102", title: "PHYSICS", semester: 1, credits: 3, grade: "B+" },
  { id: 49, code: "19P103", title: "CHEMISTRY", semester: 1, credits: 3, grade: "B+" },
  { id: 50, code: "19P104", title: "PROFESSIONAL ETHICS", semester: 1, credits: 2, grade: "B+" },
  { id: 51, code: "19P110", title: "ENGINEERING GRAPHICS", semester: 1, credits: 2, grade: "A" },
  { id: 52, code: "19P211", title: "C PROGRAMMING LABORATORY", semester: 1, credits: 2, grade: "C" },
  { id: 39, code: "19G001", title: "COMMUNICATION SKILLS FOR ENGINEERS", semester: 2, credits: 2, grade: "A" },
  { id: 40, code: "19P111", title: "BASIC SCIENCES LABORATORY", semester: 2, credits: 2, grade: "A+" },
  { id: 41, code: "19P112", title: "ENGINEERING PRACTICES", semester: 2, credits: 1, grade: "A" },
  { id: 42, code: "19P201", title: "COMPLEX VARIABLES AND TRANSFORMS", semester: 2, credits: 4, grade: "A" },
  { id: 43, code: "19P202", title: "MATERIALS SCIENCE", semester: 2, credits: 3, grade: "B+" },
  { id: 44, code: "19P203", title: "CHEMISTRY OF ENGINEERING MATERIALS", semester: 2, credits: 2, grade: "A" },
  { id: 45, code: "19P204", title: "ENGINEERING MECHANICS", semester: 2, credits: 4, grade: "B+" },
  { id: 29, code: "19K312", title: "ENVIRONMENTAL SCIENCE", semester: 3, credits: 0, grade: "C" },
  { id: 30, code: "19O306", title: "ECONOMICS FOR ENGINEERS", semester: 3, credits: 3, grade: "B+" },
  { id: 31, code: "19P205", title: "BASICS OF ELECTRICAL AND ELECTRONICS ENGINEERING", semester: 3, credits: 3, grade: "A" },
  { id: 32, code: "19P210", title: "ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY", semester: 3, credits: 1, grade: "A" },
  { id: 33, code: "19P301", title: "NUMERICAL METHODS", semester: 3, credits: 3, grade: "A+" },
  { id: 34, code: "19P302", title: "ENGINEERING METALLURGY", semester: 3, credits: 3, grade: "A+" },
  { id: 35, code: "19P304", title: "FLUID MECHANICS AND MACHINERY", semester: 3, credits: 4, grade: "A+" },
  { id: 36, code: "19P313", title: "BUILDING COMMUNICATION SKILLS", semester: 3, credits: 2, grade: "B+" },
  { id: 37, code: "19P406", title: "MACHINING TECHNOLOGY", semester: 3, credits: 3, grade: "A" },
  { id: 38, code: "19P411", title: "MACHINING TECHNOLOGY LABORATORY", semester: 3, credits: 1, grade: "A+" },
  { id: 21, code: "19O412", title: "INDIAN CONSTITUTION", semester: 4, credits: 0, grade: "C" },
  { id: 22, code: "19P303", title: "STRENGTH OF MATERIALS", semester: 4, credits: 4, grade: "A" },
  { id: 23, code: "19P305", title: "WELDING TECHNOLOGY", semester: 4, credits: 3, grade: "A" },
  { id: 24, code: "19P310", title: "MACHINE DRAWING", semester: 4, credits: 2, grade: "B+" },
  { id: 25, code: "19P311", title: "METALLURGY AND STRENGTH OF MATERIALS LABORATORY", semester: 4, credits: 1, grade: "A+" },
  { id: 26, code: "19P402", title: "THERMAL SYSTEMS AND HEAT TRANSFER", semester: 4, credits: 4, grade: "A" },
  { id: 27, code: "19P410", title: "THERMAL ENGINEERING AND FLUID MACHINERY LABORATORY", semester: 4, credits: 1, grade: "A+" },
  { id: 28, code: "19Q413", title: "SOFT SKILLS DEVELOPMENT", semester: 4, credits: 1, grade: "B+" },
  { id: 13, code: "19P013", title: "PLC PROGRAMMING AND APPLICATIONS", semester: 5, credits: 3, grade: "A" },
  { id: 14, code: "19P401", title: "PROBABILITY AND STATISTICS", semester: 5, credits: 3, grade: "A" },
  { id: 15, code: "19P404", title: "FOUNDRY TECHNOLOGY", semester: 5, credits: 3, grade: "O" },
  { id: 16, code: "19P405", title: "MECHANICS OF MACHINES", semester: 5, credits: 4, grade: "A+" },
  { id: 17, code: "19P503", title: "MANUFACTURING METROLOGY", semester: 5, credits: 3, grade: "A+" },
  { id: 18, code: "19P505", title: "APPLIED HYDRAULICS AND PNEUMATICS", semester: 5, credits: 3, grade: "A" },
  { id: 19, code: "19P511", title: "METROLOGY AND COMPUTER AIDED INSPECTION LABORATORY", semester: 5, credits: 2, grade: "A" },
  { id: 20, code: "19Q513", title: "BUSINESS AND MANAGERIAL COMMUNICATIONS", semester: 5, credits: 1, grade: "A+" },
  { id: 4, code: "19P009", title: "LEAN MANUFACTURING", semester: 6, credits: 3, grade: "A+" },
  { id: 5, code: "19P023", title: "STATISTICAL QUALITY CONTROL", semester: 6, credits: 3, grade: "B+" },
  { id: 6, code: "19P403", title: "METAL FORMING PROCESSES", semester: 6, credits: 3, grade: "B+" },
  { id: 7, code: "19P501", title: "COMPUTER NUMERICAL CONTROL MACHINES", semester: 6, credits: 3, grade: "A" },
  { id: 8, code: "19P502", title: "PROCESS PLANNING AND COST ESTIMATION", semester: 6, credits: 3, grade: "A" },
  { id: 9, code: "19P504", title: "DESIGN OF MACHINE ELEMENTS", semester: 6, credits: 4, grade: "A" },
  { id: 10, code: "19P510", title: "MANUFACTURING TECHNOLOGY LABORATORY", semester: 6, credits: 2, grade: "A" },
  { id: 11, code: "19P610", title: "FLUID POWER LABORATORY", semester: 6, credits: 1, grade: "A+" },
  { id: 12, code: "19Q613", title: "QUANTITATIVE AND REASONING SKILLS", semester: 6, credits: 1, grade: "O" },
  { id: 1, code: "19P008", title: "MANUFACTURE OF AUTOMOTIVE COMPONENTS/ SUPPLY CHAIN MANAGEMENT", semester: 7, credits: 3, grade: "A" },
  { id: 2, code: "19P701", title: "ENVIRONMENT CONSCIOUS MANUFACTURING", semester: 7, credits: 2, grade: "B" },
  { id: 3, code: "19P702", title: "PRODUCTION AND OPERATIONS MANAGEMENT", semester: 7, credits: 3, grade: "A+" },
  { no: 53, code: '19P601', title: 'QUANTITATIVE METHODS IN MANAGEMENT', semester: 8, credits: 3 },
  { no: 54, code: '19P602', title: 'JIGS AND FIXTURES', semester: 8, credits: 3 },
  { no: 55, code: '19P603', title: 'DESIGN FOR MANUFACTURE AND ASSEMBLY', semester: 8, credits: 3 },
  { no: 56, code: '19P604', title: 'AUTOMATION AND ROBOTICS', semester: 8, credits: 3 },
  { no: 57, code: '19P020', title: 'SIX SIGMA / COMPOSITE' , semester: 8, credits: 3 },
  { no: 58, code: '19P611', title: 'CAD, CAM AND CAE LABORATORY', semester: 8, credits: 2 },
  { no: 59, code: '19P711', title: 'INNOVATION PRACTICES', semester: 8, credits: 2 },
  { no: 60, code: '19O004', title: 'SUSTAINABLE DEVELOPMENT GOALS FOR MANUFACTURING INDUSTRIES', semester: 8, credits: 3 }


];

// Populate the table with pre-filled data

function populateCourses() {
  const tableBody = document.querySelector("#course-table tbody");
  courses.forEach((course, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
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
          <option value="0">N/A</option>
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
    const gradeValue = row.querySelector("td:nth-child(6) select").value; // Grade select

    if (gradeValue === "" || gradeValue === "0") {
      row.querySelector(".gpa-cell").textContent = "N/A"; // Set GPA cell to N/A for invalid grade
      return; // Skip this course in calculations
    }

    const grade = parseInt(gradeValue);
    const points = credits * grade; // Grade points

    totalCredits += credits; // Add to total credits
    totalPoints += points; // Add to total grade points

    row.querySelector(".gpa-cell").textContent = (points / credits).toFixed(2); // Update GPA cell
  });

  // Ensure total credits is not zero to avoid division by zero
  if (totalCredits === 0) {
    document.getElementById("cgpa-display").textContent = "CGPA: N/A (No valid grades selected)";
    return;
  }

  // Calculate CGPA
  const cgpa = totalPoints / totalCredits;
  document.getElementById("cgpa-display").textContent = `CGPA: ${cgpa.toFixed(2)}`;
}

// Populate table on page load
document.addEventListener("DOMContentLoaded", populateCourses);