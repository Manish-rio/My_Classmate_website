// Pre-filled course data
const courses = [
  { semester: 1, code: "19P101", course: "CALCULUS AND ITS APPLICATIONS", credit: 4 },
  { semester: 1, code: "19G105", course: "ENGLISH LANGUAGE PROFICIENCY", credit: 3 },
  { semester: 1, code: "19P102", course: "PHYSICS", credit: 3 },
  { semester: 1, code: "19P103", course: "CHEMISTRY", credit: 3 },
  { semester: 1, code: "19P104", course: "PROFESSIONAL ETHICS", credit: 2 },
  { semester: 1, code: "19P110", course: "ENGINEERING GRAPHICS", credit: 2 },
  { semester: 1, code: "19P211", course: "C PROGRAMMING LABORATORY", credit: 2 },

  { semester: 2, code: "19G001", course: "COMMUNICATION SKILLS FOR ENGINEERS", credit: 2 },
  { semester: 2, code: "19P111", course: "BASIC SCIENCES LABORATORY", credit: 2 },
  { semester: 2, code: "19P112", course: "ENGINEERING PRACTICES", credit: 1 },
  { semester: 2, code: "19P201", course: "COMPLEX VARIABLES AND TRANSFORMS", credit: 4 },
  { semester: 2, code: "19P202", course: "MATERIALS SCIENCE", credit: 3 },
  { semester: 2, code: "19P203", course: "CHEMISTRY OF ENGINEERING MATERIALS", credit: 2 },
  { semester: 2, code: "19P204", course: "ENGINEERING MECHANICS", credit: 4 },

  { semester: 3, code: "19K312", course: "ENVIRONMENTAL SCIENCE", credit: 0 },
  { semester: 3, code: "19O306", course: "ECONOMICS FOR ENGINEERS", credit: 3 },
  { semester: 3, code: "19P205", course: "BASICS OF ELECTRICAL AND ELECTRONICS ENGINEERING", credit: 3 },
  { semester: 3, code: "19P210", course: "ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY", credit: 1 },
  { semester: 3, code: "19P301", course: "NUMERICAL METHODS", credit: 3 },
  { semester: 3, code: "19P302", course: "ENGINEERING METALLURGY", credit: 3 },
  { semester: 3, code: "19P304", course: "FLUID MECHANICS AND MACHINERY", credit: 4 },
  { semester: 3, code: "19P313", course: "BUILDING COMMUNICATION SKILLS", credit: 2 },
  { semester: 3, code: "19P406", course: "MACHINING TECHNOLOGY", credit: 3 },
  { semester: 3, code: "19P411", course: "MACHINING TECHNOLOGY LABORATORY", credit: 1 },

  { semester: 4, code: "19P303", course: "STRENGTH OF MATERIALS", credit: 4 },
  { semester: 4, code: "19P305", course: "WELDING TECHNOLOGY", credit: 3 },
  { semester: 4, code: "19P310", course: "MACHINE DRAWING", credit: 2 },
  { semester: 4, code: "19P311", course: "METALLURGY AND STRENGTH OF MATERIALS LABORATORY", credit: 1 },
  { semester: 4, code: "19P402", course: "THERMAL SYSTEMS AND HEAT TRANSFER", credit: 4 },
  { semester: 4, code: "19P410", course: "THERMAL ENGINEERING AND FLUID MACHINERY LABORATORY", credit: 1 },
  { semester: 4, code: "19Q413", course: "SOFT SKILLS DEVELOPMENT", credit: 1 },

  { semester: 5, code: "19P013", course: "PLC PROGRAMMING AND APPLICATIONS", credit: 3 },
  { semester: 5, code: "19P401", course: "PROBABILITY AND STATISTICS", credit: 3 },
  { semester: 5, code: "19P404", course: "FOUNDRY TECHNOLOGY", credit: 3 },
  { semester: 5, code: "19P405", course: "MECHANICS OF MACHINES", credit: 4 },
  { semester: 5, code: "19P503", course: "MANUFACTURING METROLOGY", credit: 3 },
  { semester: 5, code: "19P505", course: "APPLIED HYDRAULICS AND PNEUMATICS", credit: 3 },
  { semester: 5, code: "19P511", course: "METROLOGY AND COMPUTER AIDED INSPECTION LABORATORY", credit: 2 },
  { semester: 5, code: "19Q513", course: "BUSINESS AND MANAGERIAL COMMUNICATIONS", credit: 1 },
  { semester: 5, code: "190412", course: "INDIAN CONSTITUTION", credit: 0 },

  { semester: 6, code: "19P009", course: "LEAN MANUFACTURING", credit: 3 },
  { semester: 6, code: "19P023", course: "STATISTICAL QUALITY CONTROL", credit: 3 },
  { semester: 6, code: "19P403", course: "METAL FORMING PROCESSES", credit: 3 },
  { semester: 6, code: "19P501", course: "COMPUTER NUMERICAL CONTROL MACHINES", credit: 3 },
  { semester: 6, code: "19P502", course: "PROCESS PLANNING AND COST ESTIMATION", credit: 3 },
  { semester: 6, code: "19P504", course: "DESIGN OF MACHINE ELEMENTS", credit: 4 },
  { semester: 6, code: "19P510", course: "MANUFACTURING TECHNOLOGY LABORATORY", credit: 2 },
  { semester: 6, code: "19P610", course: "FLUID POWER LABORATORY", credit: 1 },
  { semester: 6, code: "19Q613", course: "QUANTITATIVE AND REASONING SKILLS", credit: 1 },

  { semester: 7, code: "19P701", course: "ENVIRONMENT CONSCIOUS MANUFACTURING", credit: 2 },
  { semester: 7, code: "19P702", course: "PRODUCTION AND OPERATIONAL MANAGEMENT", credit: 3 },
  { semester: 7, code: "19P008", course: "MANUFACTURING OF AUTOMOTIVE COMPONENTS / SUPPLY CHAIN MANAGEMENT", credit: 3 },

  { semester: 8, code: "19P601", course: "QUANTITATIVE METHODS IN MANAGEMENT", credit: 3 },
  { semester: 8, code: "19P602", course: "JIGS AND FIXTURES", credit: 3 },
  { semester: 8, code: "19P603", course: "DESIGN FOR MANYFACCTURE AND ASSEMBLY", credit: 3 },
  { semester: 8, code: "19P604", course: "AUTOMATION AND ROBOTICS", credit: 3 },
  { semester: 8, code: "19P020", course: "SIX SIGMA / COMPOSITE", credit: 3 },
  { semester: 8, code: "19P611", course: "CAD, CAM AND CAE LABORATORY", credit: 2 },
  { semester: 8, code: "19P711", course: "INNOVATION PRACTICES", credit: 2 },
  { semester: 8, code: "19O004", course: "SUSTAINABLE DEVELOPMENT GOALS FOR MANUFACTURING INDUSTRIES", credit: 3 }
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
