/* ==========================================================
    STATE
========================================================== */

let selectedBranch = null;
let selectedSemester = null;

/* ==========================================================
    GRADE POINTS
========================================================== */

const gradePoints = {
    O: 10,
    E: 9,
    A: 8,
    B: 7,
    C: 6,
    D: 5,
    U: 0
};

/* ==========================================================
    WAIT FOR DOM
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================
        ELEMENTS
    ========================================================== */

    const navLinks = document.querySelectorAll(".nav-link");

    const sections = {
        home: document.getElementById("homeSection"),
        sgpa: document.getElementById("sgpaSection"),
        cgpa: document.getElementById("cgpaSection"),
        about: document.getElementById("aboutSection")
    };

    const goToSgpa = document.getElementById("goToSgpa");
    const goToCgpa = document.getElementById("goToCgpa");

    const branchChips = document.querySelectorAll(".branch-chip");
    const semesterChips = document.querySelectorAll(".semester-chip");

    const semesterInfo = document.getElementById("semesterInfo");
    const semesterTitle = document.getElementById("semesterTitle");
    const subjectCount = document.getElementById("subjectCount");
    const totalCredits = document.getElementById("totalCredits");

    const subjectsCard = document.getElementById("subjectsCard");
    const subjectsContainer = document.getElementById("subjectsContainer");

    const buttonsSection = document.getElementById("buttonsSection");
    const calculateBtn = document.getElementById("calculateBtn");
    const resetBtn = document.getElementById("resetBtn");

    const resultCard = document.getElementById("resultCard");
    const sgpaValue = document.getElementById("sgpaValue");

    const motivationTitle = document.getElementById("motivationTitle");
    const motivationMessage =
        document.getElementById("motivationMessage");

    const errorMessage = document.getElementById("errorMessage");
    const comingSoon = document.getElementById("comingSoon");

    const downloadPdfBtn =
        document.getElementById("downloadPdfBtn");

    /* ==========================================================
        NAVIGATION
    ========================================================== */

    navLinks.forEach(link => {
        link.addEventListener("click", () => {

            const section = link.dataset.section;

            navLinks.forEach(l =>
                l.classList.remove("active")
            );

            link.classList.add("active");

            Object.values(sections).forEach(sec =>
                sec.classList.add("hidden")
            );

            sections[section].classList.remove("hidden");
        });
    });

    goToSgpa?.addEventListener("click", () => {
        document
            .querySelector('[data-section="sgpa"]')
            .click();
    });

    goToCgpa?.addEventListener("click", () => {
        document
            .querySelector('[data-section="cgpa"]')
            .click();
    });

    /* ==========================================================
        BRANCH SELECTION
    ========================================================== */

    branchChips.forEach(chip => {
        chip.addEventListener("click", () => {

            branchChips.forEach(c =>
                c.classList.remove("active")
            );

            chip.classList.add("active");

            selectedBranch = chip.dataset.branch;

            loadSemesterData();
            saveState();
        });
    });

    /* ==========================================================
        SEMESTER SELECTION
    ========================================================== */

    semesterChips.forEach(chip => {
        chip.addEventListener("click", () => {

            semesterChips.forEach(c =>
                c.classList.remove("active")
            );

            chip.classList.add("active");

            selectedSemester = chip.dataset.semester;

            loadSemesterData();
            saveState();
        });
    });

    /* ==========================================================
        LOAD DATA
    ========================================================== */

    function loadSemesterData() {

        hideEverything();

        if (!selectedBranch || !selectedSemester) {
            return;
        }

        let key;

        if (
            selectedSemester === "1" ||
            selectedSemester === "2"
        ) {
            key = `1yr-${selectedSemester}`;
        } else {
            key =
                `${selectedBranch.toLowerCase()}-${selectedSemester}`;
        }

        const data = semesterData[key];

        if (!data) {
            comingSoon.classList.remove("hidden");
            return;
        }

        renderSemesterInfo(data);
        renderSubjects(data);

        semesterInfo.classList.remove("hidden");
        subjectsCard.classList.remove("hidden");
        buttonsSection.classList.remove("hidden");
    }

    /* ==========================================================
        SEMESTER INFO
    ========================================================== */

    function renderSemesterInfo(data) {

        semesterTitle.textContent = data.label;

        subjectCount.textContent =
            `${data.subjects.length} Subjects`;

        let baseCredits = 0;
        let totalWithOptional = 0;

        data.subjects.forEach(subject => {

            totalWithOptional += subject.credit;

            if (!subject.optional) {
                baseCredits += subject.credit;
            }
        });

        if (baseCredits === totalWithOptional) {

            totalCredits.textContent =
                `${baseCredits}`;

        } else {

            totalCredits.innerHTML =
                `${baseCredits}/<span class="optional-credit">${totalWithOptional}</span>`;
        }
    }

    /* ==========================================================
        SUBJECT RENDERING
    ========================================================== */

    function renderSubjects(data) {

        subjectsContainer.innerHTML = "";

        data.subjects.forEach(subject => {

            const row = document.createElement("div");

            row.className = "subject-row";
            row.dataset.credit = subject.credit;

            row.innerHTML = `
                <div class="subject-info">
                    <h4>${subject.name}</h4>
                    <p>Credit: ${subject.credit}</p>
                </div>

                <div class="subject-controls">

                    ${subject.optional ? `
                        <div class="optional-pills">
                            <button
                                class="toggle-pill optional-toggle active"
                                data-value="no"
                            >
                                Not Taken
                            </button>

                            <button
                                class="toggle-pill optional-toggle"
                                data-value="yes"
                            >
                                Taken
                            </button>
                        </div>

                        <div class="optional-content hidden"></div>
                    `
                    : renderInputUI()}

                </div>
            `;

            subjectsContainer.appendChild(row);
        });

        attachListeners();
    }

    /* ==========================================================
        INPUT UI
    ========================================================== */

    function renderInputUI() {

        return `
            <div class="method-pills">
                <button
                    class="toggle-pill method-btn active"
                    data-method="grade"
                >
                    Grade
                </button>

                <button
                    class="toggle-pill method-btn"
                    data-method="marks"
                >
                    Marks
                </button>
            </div>

            <div class="input-area">
                <div class="grade-area">
                    ${renderGradePills()}
                </div>

                <div class="marks-area hidden">
                    ${renderMarksInput()}
                </div>
            </div>
        `;
    }

    function renderGradePills() {

        return `
            <div class="grade-pills">
                ${["O", "E", "A", "B", "C", "D", "U"]
                    .map(grade => `
                        <button
                            class="grade-pill"
                            data-grade="${grade}"
                        >
                            ${grade}
                        </button>
                    `)
                    .join("")}
            </div>
        `;
    }

    function renderMarksInput() {

        return `
            <input
                type="text"
                inputmode="numeric"
                min="0"
                max="100"
                step="1"
                autocomplete="off"
                class="marks-input"
                placeholder="Enter marks"
            >
        `;
    }

    /* ==========================================================
        LISTENERS
    ========================================================== */

    function attachListeners() {

        /* ==========================================
            MARKS INPUT VALIDATION
        ========================================== */

        document
            .querySelectorAll(".marks-input")
            .forEach(input => {

                input.oninput = function () {

                    // allow only whole numbers
                    this.value =
                        this.value.replace(/[^0-9]/g, "");

                    let value = Number(this.value);

                    if (value > 100) {
                        this.value = 100;
                    }

                    if (value < 0) {
                        this.value = 0;
                    }
                    saveState();
                };
            });

        /* ==========================================
            OPTIONAL SUBJECT TOGGLE
        ========================================== */

        document
            .querySelectorAll(".optional-toggle")
            .forEach(button => {

                button.onclick = function () {

                    const wrapper =
                        this.parentElement;

                    wrapper
                        .querySelectorAll(
                            ".optional-toggle"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "active"
                            )
                        );

                    this.classList.add("active");

                    const content =
                        wrapper.nextElementSibling;

                    if (
                        this.dataset.value ===
                        "yes"
                    ) {
                        content.innerHTML =
                            renderInputUI();

                        content.classList.remove(
                            "hidden"
                        );

                        attachListeners();

                    } else {

                        content.innerHTML = "";

                        content.classList.add(
                            "hidden"
                        );
                    }

                    saveState();
                };
            });

        /* ==========================================
            METHOD SWITCH (GRADE / MARKS)
        ========================================== */

        document
            .querySelectorAll(".method-btn")
            .forEach(button => {

                button.onclick = function () {

                    const parent =
                        this.parentElement;

                    const container =
                        parent.nextElementSibling;

                    const gradeArea =
                        container.querySelector(
                            ".grade-area"
                        );

                    const marksArea =
                        container.querySelector(
                            ".marks-area"
                        );

                    parent
                        .querySelectorAll(
                            ".method-btn"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "active"
                            )
                        );

                    this.classList.add("active");
                    
                    const gradePills =
                        container.querySelectorAll(
                            ".grade-pill"
                        );

                    const marksInput =
                        container.querySelector(
                            ".marks-input"
                        );

                    if (
                        this.dataset.method ===
                        "grade"
                    ) {

                        // clear marks input
                        if (marksInput) {
                            marksInput.value = "";
                        }

                        gradeArea.classList.remove(
                            "hidden"
                        );

                        marksArea.classList.add(
                            "hidden"
                        );

                    } else {

                        // clear selected grade
                        gradePills.forEach(pill =>
                            pill.classList.remove(
                                "active"
                            )
                        );

                        gradeArea.classList.add(
                            "hidden"
                        );

                        marksArea.classList.remove(
                            "hidden"
                        );
                    }

                    saveState();
                };
            });

        /* ==========================================
            GRADE PILL SELECTION
        ========================================== */

        document
            .querySelectorAll(".grade-pill")
            .forEach(button => {

                button.onclick = function () {

                    this.parentElement
                        .querySelectorAll(
                            ".grade-pill"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "active"
                            )
                        );

                    this.classList.add("active");
                    saveState();
                };
            });
    }

    /* ==========================================================
        MARKS TO GRADE
    ========================================================== */

    function marksToGrade(marks) {

        marks = Number(marks);

        if (marks >= 90) return "O";
        if (marks >= 80) return "E";
        if (marks >= 70) return "A";
        if (marks >= 60) return "B";
        if (marks >= 50) return "C";
        if (marks >= 40) return "D";

        return "U";
    }

    /* ==========================================================
        SGPA CALCULATION
    ========================================================== */

    calculateBtn?.addEventListener(
        "click",
        calculateSGPA
    );

    function calculateSGPA() {

        const rows =
            document.querySelectorAll(
                ".subject-row"
            );

        let weightedSum = 0;
        let creditSum = 0;

        for (const row of rows) {

            const credit =
                Number(row.dataset.credit);

            const optional =
                row.querySelector(
                    ".optional-toggle.active"
                );

            if (
                optional &&
                optional.dataset.value === "no"
            ) {
                continue;
            }

            let grade = null;

            const gradeButton =
                row.querySelector(
                    ".grade-pill.active"
                );

            const marksInput =
                row.querySelector(
                    ".marks-input"
                );

            if (gradeButton) {

                grade =
                    gradeButton.dataset.grade;

            } else if (
                marksInput &&
                marksInput.value !== ""
            ) {

                grade = marksToGrade(
                    marksInput.value
                );

            } else {

                showError(
                    "Please complete all subject inputs."
                );

                return;
            }

            weightedSum +=
                credit *
                gradePoints[grade];

            creditSum += credit;
        }

        if (creditSum === 0) {

            showError(
                "Please select at least one subject."
            );

            return;
        }

        hideError();

        const sgpa =
            (
                weightedSum /
                creditSum
            ).toFixed(2);

        showResult(Number(sgpa));
    }

    /* ==========================================================
        RESULT CARD
    ========================================================== */

    function showResult(sgpa) {

        sgpaValue.textContent = sgpa;

        if (sgpa >= 9) {

            motivationTitle.textContent =
                "🎉 Excellent!";

            motivationMessage.textContent =
                "Outstanding performance this semester.";

        } else if (sgpa >= 8) {

            motivationTitle.textContent =
                "✨ Great Job!";

            motivationMessage.textContent =
                "You're doing really well.";

        } else {

            motivationTitle.textContent =
                "💪 Keep Going";

            motivationMessage.textContent =
                "Consistency beats motivation.";
        }

        resultCard.classList.remove(
            "hidden"
        );

        resultCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    /* ==========================================================
        PDF DOWNLOAD
    ========================================================== */

    downloadPdfBtn?.addEventListener(
        "click",
        () => {
            
            if (resultCard.classList.contains("hidden")
            ) {
                alert("Please calculate SGPA first."

                );
                return;
            }

            const { jsPDF } =
                window.jspdf;

            const doc =
                new jsPDF();

            const sgpa =
                document.getElementById(
                    "sgpaValue"
                ).textContent;

            const branch =
                selectedBranch
                    ?.toUpperCase() || "N/A";

            const semester =
                selectedSemester || "N/A";

            /* ==========================================
                HEADER
            ========================================== */

            doc.setFontSize(18);
            doc.text(
                "Acadelytics",
                14,
                20
            );

            doc.setFontSize(12);

            doc.text(
                "Grade Sheet Report",
                14,
                30
            );

            doc.text(
                `Branch: ${branch}`,
                14,
                40
            );

            doc.text(
                `Semester: ${semester}`,
                14,
                48
            );

            /* ==========================================
                TABLE DATA
            ========================================== */

            const rows =
                document.querySelectorAll(
                    ".subject-row"
                );

            const tableData = [];

            rows.forEach(row => {

                const optional =
                    row.querySelector(
                        ".optional-toggle.active"
                    );

                if (
                    optional &&
                    optional.dataset.value === "no"
                ) {
                    return;
                }

                const name =
                    row.querySelector(
                        ".subject-info h4"
                    )?.textContent ||
                    "Subject";

                const credit =
                    row.dataset.credit;

                let grade = "NA";

                const gradeButton =
                    row.querySelector(
                        ".grade-pill.active"
                    );

                const marksInput =
                    row.querySelector(
                        ".marks-input"
                    );

                if (gradeButton) {

                    grade =
                        gradeButton.dataset.grade;

                } else if (
                    marksInput &&
                    marksInput.value !== ""
                ) {

                    grade =
                        marksToGrade(
                            marksInput.value
                        );
                }

                tableData.push([
                    name,
                    credit,
                    grade
                ]);
            });

            if (
                tableData.some(row => row[2] === "NA")
            ) {
                alert(
                    "Please complete all subject inputs."
                );
                return;
            }

            /* ==========================================
                TABLE
            ========================================== */

            doc.autoTable({
                startY: 60,

                head: [[
                    "Subject",
                    "Credit",
                    "Grade"
                ]],

                body: tableData,

                theme: "grid",

                styles: {
                    fontSize: 10,
                    cellPadding: 3
                },

                headStyles: {
                    fillColor: [
                        35,
                        134,
                        54
                    ]
                }
            });

            /* ==========================================
                FINAL SGPA
            ========================================== */

            const finalY =
                doc.lastAutoTable.finalY +
                10;

            doc.setFontSize(14);

            doc.text(
                `Final SGPA: ${sgpa}`,
                14,
                finalY
            );

            doc.save(
                `SGPA_${branch}_Sem${semester}.pdf`
            );
        });

    /* ==========================================================
        RESET
    ========================================================== */

    resetBtn?.addEventListener(
        "click",
        resetSGPA
    );

    function resetSGPA() {

        localStorage.removeItem(
            "acadelyticsState"
        );

        // reset selected state
        selectedBranch = null;
        selectedSemester = null;

        // remove active chips
        branchChips.forEach(chip =>
            chip.classList.remove("active")
        );

        semesterChips.forEach(chip =>
            chip.classList.remove("active")
        );

        // clear rendered subjects
        subjectsContainer.innerHTML = "";

        // hide visible sections
        semesterInfo.classList.add(
            "hidden"
        );

        subjectsCard.classList.add(
            "hidden"
        );

        buttonsSection.classList.add(
            "hidden"
        );

        resultCard.classList.add(
            "hidden"
        );

        comingSoon.classList.add(
            "hidden"
        );

        // clear result
        sgpaValue.textContent = "0.00";

        motivationTitle.textContent = "";

        motivationMessage.textContent =
            "";

        // hide errors
        hideError();

        // clear semester info
        semesterTitle.textContent = "";

        subjectCount.textContent = "";

        totalCredits.textContent = "";
    }

    /* ==========================================================
        ERROR HANDLING
    ========================================================== */

    function showError(message) {

        errorMessage.textContent =
            message;

        errorMessage.classList.remove(
            "hidden"
        );
    }

    function hideError() {

        errorMessage.textContent = "";

        errorMessage.classList.add(
            "hidden"
        );
    }

    /* ==========================================================
        HIDE EVERYTHING
    ========================================================== */

    function hideEverything() {

        hideError();

        comingSoon.classList.add(
            "hidden"
        );

        semesterInfo.classList.add(
            "hidden"
        );

        subjectsCard.classList.add(
            "hidden"
        );

        buttonsSection.classList.add(
            "hidden"
        );

        resultCard.classList.add(
            "hidden"
        );

        subjectsContainer.innerHTML =
            "";

        semesterTitle.textContent =
            "";

        subjectCount.textContent =
            "";

        totalCredits.textContent =
            "";
    }
    /* ==========================================================
        LOCAL STORAGE
    ========================================================== */

    function saveState() {

        const state = {
            selectedBranch,
            selectedSemester,
            subjects: [],
            cgpa: {
                selectedSemCount,
                values: []
            }
        };

        document
            .querySelectorAll(".subject-row")
            .forEach(row => {

                const optional =
                    row.querySelector(
                        ".optional-toggle.active"
                    )?.dataset.value || null;

                const method =
                    row.querySelector(
                        ".method-btn.active"
                    )?.dataset.method || null;

                const grade =
                    row.querySelector(
                        ".grade-pill.active"
                    )?.dataset.grade || "";

                const marks =
                    row.querySelector(
                        ".marks-input"
                    )?.value || "";

                state.subjects.push({
                    optional,
                    method,
                    grade,
                    marks
                });
            });

        document
            .querySelectorAll(
                "#cgpa-inputs input"
            )
            .forEach(input => {
                state.cgpa.values.push(
                    input.value
                );
            });

        localStorage.setItem(
            "acadelyticsState",
            JSON.stringify(state)
        );
    }

    function loadState() {

        const saved =
            localStorage.getItem(
                "acadelyticsState"
            );

        if (!saved) return;

        const state =
            JSON.parse(saved);

        selectedBranch =
            state.selectedBranch;

        selectedSemester =
            state.selectedSemester;

        if (
            selectedBranch &&
            selectedSemester
        ) {

            document
                .querySelector(
                    `[data-branch="${selectedBranch}"]`
                )
                ?.classList.add("active");

            document
                .querySelector(
                    `[data-semester="${selectedSemester}"]`
                )
                ?.classList.add("active");

            loadSemesterData();

            setTimeout(() => {

                const rows =
                    document.querySelectorAll(
                        ".subject-row"
                    );

                rows.forEach(
                    (row, index) => {

                        const savedSubject =
                            state.subjects[index];

                        if (
                            !savedSubject
                        ) return;

                        // optional
                        if (
                            savedSubject.optional &&
                            savedSubject.optional !== "no"
                        ) {
                            row.querySelector(
                                `.optional-toggle[data-value="${savedSubject.optional}"]`
                            )?.click();
                        }

                        // method
                        if (savedSubject.method) {
                            row.querySelector(
                                `.method-btn[data-method="${savedSubject.method}"]`
                            )?.click();
                        }

                        // restore based on method
                        if (savedSubject.method === "grade") {

                            if (savedSubject.grade) {
                                row.querySelector(
                                    `.grade-pill[data-grade="${savedSubject.grade}"]`
                                )?.click();
                            }

                        } else if (
                            savedSubject.method === "marks"
                        ) {

                            const input =
                                row.querySelector(".marks-input");

                            if (input) {
                                input.value =
                                    savedSubject.marks;

                                input.dispatchEvent(
                                    new Event("input")
                                );
                            }
                        }
                    }
                );
            }, 100);
        }

        // restore cgpa
        if (
            state.cgpa
                ?.selectedSemCount
        ) {

            selectedSemCount =
                state.cgpa
                    .selectedSemCount;

            document
                .querySelector(
                    `.cgpa-count[data-count="${selectedSemCount}"]`
                )
                ?.click();

            setTimeout(() => {

                const inputs =
                    cgpaInputs.querySelectorAll(
                        "input"
                    );

                inputs.forEach(
                    (input, index) => {

                        input.value =
                            state.cgpa
                                .values[
                                index
                            ] || "";
                    }
                );
            }, 100);
        }
    }
    /* ==========================================================
        CGPA MODULE
    ========================================================== */

    const cgpaButtons =
        document.querySelectorAll(
            ".cgpa-count"
        );

    const cgpaInputCard =
        document.getElementById(
            "cgpa-input-card"
        );

    const cgpaInputs =
        document.getElementById(
            "cgpa-inputs"
        );

    const cgpaCalcBtn =
        document.getElementById(
            "cgpa-calc-btn"
        );

    const cgpaResetBtn =
        document.getElementById(
            "cgpa-reset-btn"
        );
        
    const cgpaResult =
        document.getElementById(
            "cgpa-result"
        );

    const cgpaValue =
        document.getElementById(
            "cgpa-value"
        );

    const cgpaMsg =
        document.getElementById(
            "cgpa-msg"
        );

    const cgpaSubmsg =
        document.getElementById(
            "cgpa-submsg"
        );

    let selectedSemCount = 0;

    /* ==========================================
        SELECT SEMESTER COUNT
    ========================================== */

    cgpaButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                cgpaButtons.forEach(btn =>
                    btn.classList.remove(
                        "active"
                    )
                );

                button.classList.add(
                    "active"
                );

                selectedSemCount =
                    Number(
                        button.dataset.count
                    );

                cgpaInputCard.classList.remove(
                    "hidden"
                );

                cgpaResult.classList.add(
                    "hidden"
                );

                renderCgpaInputs(
                    selectedSemCount
                );
                saveState();
            }
        );
    });

    /* ==========================================
        CREATE INPUTS
    ========================================== */

    function renderCgpaInputs(count) {

        cgpaInputs.innerHTML = "";

        for (
            let i = 1;
            i <= count;
            i++
        ) {

            const input =
                document.createElement(
                    "input"
                );

            input.type = "text";
            input.inputMode = "decimal";
            input.min = "0";
            input.max = "10";
            input.step = "0.01";

            input.placeholder =
                `Semester ${i} SGPA`;

            input.className =
                "cgpa-input";

            cgpaInputs.appendChild(
                input
            );

            input.addEventListener("input", function () {

                let value = this.value;

                // allow only digits and one decimal
                value = value.replace(/[^0-9.]/g, "");

                // keep only first decimal point
                const firstDot = value.indexOf(".");
                if (firstDot !== -1) {
                    value =
                        value.slice(0, firstDot + 1) +
                        value
                            .slice(firstDot + 1)
                            .replace(/\./g, "");
                }

                // limit to 2 decimal places
                const parts = value.split(".");
                if (parts[1]) {
                    parts[1] = parts[1].slice(0, 2);
                    value = parts.join(".");
                }

                // limit max value to 10
                const num = parseFloat(value);
                if (!isNaN(num) && num > 10) {
                    value = "10";
                }

                this.value = value;

                saveState();
            });
        }
    }

    /* ==========================================
        CALCULATE CGPA
    ========================================== */

    cgpaCalcBtn?.addEventListener(
        "click",
        () => {

                const inputs =
                    cgpaInputs.querySelectorAll(
                        "input"
                    );

                let sum = 0;

                let count =
                    inputs.length;

                if (inputs.length === 0) {
                    alert(
                        "Please select semesters."
                    );
                    return;
                }

                for (let input of inputs) {

                const value =
                    Number(input.value);

                if (
                    input.value.trim() === "" ||
                    value < 0 ||
                    value > 10
                ) {

                    alert(
                        "Please enter valid SGPA (0–10)"
                    );

                    return;
                }

                sum += value;
            }

            const cgpa =
                (
                    sum /
                    count
                ).toFixed(2);

            cgpaValue.textContent =
                cgpa;

            if (cgpa >= 9) {

                cgpaMsg.textContent =
                    "🔥 Outstanding!";

                cgpaSubmsg.textContent =
                    "You’re performing at top level.";

            } else if (
                cgpa >= 8
            ) {

                cgpaMsg.textContent =
                    "✨ Great Consistency!";

                cgpaSubmsg.textContent =
                    "Keep pushing forward.";

            } else if (
                cgpa >= 7
            ) {

                cgpaMsg.textContent =
                    "👍 Good Performance";

                cgpaSubmsg.textContent =
                    "You can still level up.";

            } else {

                cgpaMsg.textContent =
                    "💪 Needs Improvement";

                cgpaSubmsg.textContent =
                    "Focus on consistency.";
            }

            cgpaResult.classList.remove("hidden");

            setTimeout(() => {
                cgpaResult.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 100);
        });

        /* ==========================================
            RESET CGPA
        ========================================== */

        cgpaResetBtn?.addEventListener(
            "click",
            () => {

                // remove active semester count
                cgpaButtons.forEach(btn =>
                    btn.classList.remove(
                        "active"
                    )
                );

                // clear generated inputs
                cgpaInputs.innerHTML = "";

                // hide cards
                cgpaInputCard.classList.add(
                    "hidden"
                );

                cgpaResult.classList.add(
                    "hidden"
                );

                // reset texts
                cgpaValue.textContent =
                    "0.00";

                cgpaMsg.textContent = "";

                cgpaSubmsg.textContent =
                    "";

                selectedSemCount = 0;

                saveState();
            }
        );
        
    /* ==========================================
        DOWNLOAD CGPA PDF
    ========================================== */

    const downloadCgpaPdfBtn =
        document.getElementById(
            "downloadCgpaPdfBtn"
        );

    downloadCgpaPdfBtn?.addEventListener(
        "click",
        () => {

            if (
                cgpaResult.classList.contains("hidden")
            ) {
                alert(
                    "Please calculate CGPA first."
                );
                return;
            }

            const { jsPDF } =
                window.jspdf;

            const doc =
                new jsPDF();

            const inputs =
                cgpaInputs.querySelectorAll(
                    "input"
                );

            if (inputs.length === 0) {
                alert(
                    "Please select semesters."
                );
                return;
            }

            for (let input of inputs) {

                const value =
                    Number(input.value);

                if (
                    input.value.trim() === "" ||
                    value < 0 ||
                    value > 10
                ) {

                    alert(
                        "Please complete all semester SGPA inputs."
                    );

                    return;
                }
            }

            let sum = 0;

            for (let input of inputs) {
                sum += Number(input.value);
            }

            const cgpa =
                (sum / inputs.length).toFixed(2);

            /* ==================================
                HEADER
            ================================== */

            doc.setFontSize(18);
            doc.text(
                "Acadelytics",
                14,
                20
            );

            doc.setFontSize(12);

            doc.text(
                "CGPA Report",
                14,
                30
            );

            doc.text(
                `Total Semesters: ${inputs.length}`,
                14,
                40
            );

            /* ==================================
                TABLE DATA
            ================================== */

            const tableData = [];

            inputs.forEach(
                (input, index) => {

                    tableData.push([
                        `Semester ${index + 1}`,
                        input.value
                    ]);
                }
            );

            doc.autoTable({
                startY: 50,

                head: [[
                    "Semester",
                    "SGPA"
                ]],

                body: tableData,

                theme: "grid",

                styles: {
                    fontSize: 10,
                    cellPadding: 3
                },

                headStyles: {
                    fillColor: [
                        35,
                        134,
                        54
                    ]
                }
            });

            /* ==================================
                FINAL CGPA
            ================================== */

            const finalY =
                doc.lastAutoTable.finalY +
                10;

            doc.setFontSize(14);

            doc.text(
                `Final CGPA: ${cgpa}`,
                14,
                finalY
            );

            doc.save(
                `CGPA_${inputs.length}Sem.pdf`
            );
        }
    );

    /* ==========================================================
        GRADE SCALE TOOLTIP
    ========================================================== */

    document
        .querySelectorAll(".grade-item")
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".grade-item"
                        )
                        .forEach(el => {

                            if (
                                el !== item
                            ) {
                                el.classList.remove(
                                    "show-tooltip"
                                );
                            }
                        });

                    item.classList.toggle(
                        "show-tooltip"
                    );
                }
            );
        });
        loadState();
    });


