// ---------- STATE ----------

let selectedBranch = null;
let selectedSemester = null;
let currentSemesterKey = null;

// ---------- GRADE POINTS ----------

const gradePoints = {
    O: 10,
    E: 9,
    A: 8,
    B: 7,
    C: 6,
    D: 5,
    U: 0
};

// ---------- ELEMENTS ----------

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );

const sections = {
    home:
        document.getElementById(
            "homeSection"
        ),

    sgpa:
        document.getElementById(
            "sgpaSection"
        ),

    cgpa:
        document.getElementById(
            "cgpaSection"
        ),

    about:
        document.getElementById(
            "aboutSection"
        )
};

const goToSgpa =
    document.getElementById(
        "goToSgpa"
    );

const branchChips =
    document.querySelectorAll(
        ".branch-chip"
    );

const semesterChips =
    document.querySelectorAll(
        ".semester-chip"
    );

const semesterInfo =
    document.getElementById(
        "semesterInfo"
    );

const semesterTitle =
    document.getElementById(
        "semesterTitle"
    );

const subjectCount =
    document.getElementById(
        "subjectCount"
    );

const totalCredits =
    document.getElementById(
        "totalCredits"
    );

const subjectsCard =
    document.getElementById(
        "subjectsCard"
    );

const subjectsContainer =
    document.getElementById(
        "subjectsContainer"
    );

const buttonsSection =
    document.getElementById(
        "buttonsSection"
    );

const calculateBtn =
    document.getElementById(
        "calculateBtn"
    );

const resetBtn =
    document.getElementById(
        "resetBtn"
    );

const resultCard =
    document.getElementById(
        "resultCard"
    );

const sgpaValue =
    document.getElementById(
        "sgpaValue"
    );

const motivationTitle =
    document.getElementById(
        "motivationTitle"
    );

const motivationMessage =
    document.getElementById(
        "motivationMessage"
    );

const errorMessage =
    document.getElementById(
        "errorMessage"
    );

const comingSoon =
    document.getElementById(
        "comingSoon"
    );

// ---------- NAVIGATION ----------

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            const section =
                link.dataset.section;

            navLinks.forEach(
                l =>
                l.classList.remove(
                    "active"
                )
            );

            link.classList.add(
                "active"
            );

            Object.values(
                sections
            ).forEach(
                section => {

                    section.classList.add(
                        "hidden"
                    );
                }
            );

            sections[
                section
            ].classList.remove(
                "hidden"
            );
        }
    );
});

goToSgpa?.addEventListener(
    "click",
    () => {

        document.querySelector(
            '[data-section="sgpa"]'
        ).click();
    }
);

// ---------- BRANCH ----------

branchChips.forEach(
    chip => {

    chip.addEventListener(
        "click",
        () => {

            branchChips.forEach(
                c =>
                c.classList.remove(
                    "active"
                )
            );

            chip.classList.add(
                "active"
            );

            selectedBranch =
                chip.dataset.branch;

            loadSemesterData();
        }
    );
});

// ---------- SEMESTER ----------

semesterChips.forEach(
    chip => {

    chip.addEventListener(
        "click",
        () => {

            semesterChips.forEach(
                c =>
                c.classList.remove(
                    "active"
                )
            );

            chip.classList.add(
                "active"
            );

            selectedSemester =
                chip.dataset.semester;

            loadSemesterData();
        }
    );
});

// ---------- LOAD DATA ----------

function loadSemesterData() {

    hideEverything();

    if (
        !selectedBranch ||
        !selectedSemester
    ) {
        return;
    }

    let key;

    // Semester 1 & 2 common
    if (
        selectedSemester === "1" ||
        selectedSemester === "2"
    ) {
        key = `1yr-${selectedSemester}`;
    }

    else  {
        key = `${selectedBranch.toLowerCase()}-${selectedSemester}`;
    }

    const data = semesterData[key];

    if (!data) {
        comingSoon.classList.remove("hidden");
        return;
    }

    currentSemesterKey = key;

    renderSemesterInfo(data);
    renderSubjects(data);

    semesterInfo.classList.remove("hidden");
    subjectsCard.classList.remove("hidden");
    buttonsSection.classList.remove("hidden");
}

// ---------- SEMESTER INFO ----------

function renderSemesterInfo(
    data
) {

    semesterTitle.textContent =
        data.label;

    subjectCount.textContent =
        `${data.subjects.length} Subjects`;

    let credits = 0;

    data.subjects.forEach(
        subject => {

            if (
                !subject.optional
            ) {

                credits +=
                    subject.credit;
            }
        }
    );

    totalCredits.textContent =
        credits;
}

// ---------- SUBJECTS ----------

function renderSubjects(
    data
) {

    subjectsContainer.innerHTML =
        "";

    data.subjects.forEach(
        subject => {

        const row =
            document.createElement(
                "div"
            );

        row.className =
            "subject-row";

        row.dataset.credit =
            subject.credit;

        row.innerHTML = `
            <div class="subject-info">
                <h4>
                    ${subject.name}
                </h4>

                <p>
                    Credit:
                    ${subject.credit}
                </p>
            </div>

            <div class="subject-controls">

                ${
                    subject.optional

                    ?

                    `
                    <div class="optional-pills">

                        <button
                        class="toggle-pill optional-toggle active"
                        data-value="no">
                            Not Taken
                        </button>

                        <button
                        class="toggle-pill optional-toggle"
                        data-value="yes">
                            Taken
                        </button>

                    </div>

                    <div class="optional-content hidden"></div>
                    `

                    :

                    `
                    <div class="subject-input-wrapper">
                        ${renderInputUI()}
                    </div>
                    `
                }

            </div>
        `;

        subjectsContainer
        .appendChild(row);
    });

    attachListeners();
}

// ---------- INPUT UI ----------

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

        <div class="subject-input">
            ${renderGradePills()}
        </div>
    `;
}

function renderGradePills() {

    return `
        <div class="grade-pills">

            ${[
                "O",
                "E",
                "A",
                "B",
                "C",
                "D",
                "U"
            ]

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
            type="number"
            min="0"
            max="100"
            class="marks-input"
            placeholder="Enter marks"
        />
    `;
}

// ---------- LISTENERS ----------

function attachListeners() {

    // Optional subject

    document
    .querySelectorAll(
        ".optional-toggle"
    )

    .forEach(btn => {

        btn.onclick =
        function () {

            const wrapper =
                this.parentElement;

            wrapper
            .querySelectorAll(
                ".optional-toggle"
            )

            .forEach(
                b =>
                b.classList.remove(
                    "active"
                )
            );

            this.classList.add(
                "active"
            );

            const content =
                wrapper.nextElementSibling;

            if (
                this.dataset.value ===
                "yes"
            ) {

                content.innerHTML =
                    renderInputUI();

                content
                .classList.remove(
                    "hidden"
                );

                attachListeners();
            }

            else {

                content.innerHTML =
                    "";

                content
                .classList.add(
                    "hidden"
                );
            }
        };
    });

    // Grade / marks switch

    document
    .querySelectorAll(
        ".method-btn"
    )

    .forEach(btn => {

        btn.onclick =
        function () {

            const parent =
                this.parentElement;

            parent
            .querySelectorAll(
                ".method-btn"
            )

            .forEach(
                b =>
                b.classList.remove(
                    "active"
                )
            );

            this.classList.add(
                "active"
            );

            const inputBox =
                parent.nextElementSibling;

            inputBox.innerHTML =

                this.dataset.method
                === "grade"

                ?
                renderGradePills()

                :
                renderMarksInput();

            attachListeners();
        };
    });

    // Grade pills

    document
    .querySelectorAll(
        ".grade-pill"
    )

    .forEach(btn => {

        btn.onclick =
        function () {

            this.parentElement
            .querySelectorAll(
                ".grade-pill"
            )

            .forEach(
                b =>
                b.classList.remove(
                    "active"
                )
            );

            this.classList.add(
                "active"
            );
        };
    });
}

// ---------- MARKS TO GRADE ----------

function marksToGrade(
    marks
) {

    marks =
        Number(marks);

    if (marks >= 90)
        return "O";

    if (marks >= 80)
        return "E";

    if (marks >= 70)
        return "A";

    if (marks >= 60)
        return "B";

    if (marks >= 50)
        return "C";

    if (marks >= 40)
        return "D";

    return "U";
}

// ---------- CALCULATE ----------

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

    for (
        const row
        of rows
    ) {

        const credit =
            Number(
                row.dataset.credit
            );

        const optional =
            row.querySelector(
                ".optional-toggle.active"
            );

        if (
            optional &&
            optional.dataset.value
            === "no"
        ) {
            continue;
        }

        let grade =
            null;

        const gradeBtn =
            row.querySelector(
                ".grade-pill.active"
            );

        const marksInput =
            row.querySelector(
                ".marks-input"
            );

        if (
            gradeBtn
        ) {

            grade =
                gradeBtn
                .dataset.grade;
        }

        else if (
            marksInput &&
            marksInput.value
            !== ""
        ) {

            grade =
                marksToGrade(
                    marksInput.value
                );
        }

        else {

            showError(
                "Please complete all subject inputs."
            );

            return;
        }

        weightedSum +=
            credit *
            gradePoints[grade];

        creditSum +=
            credit;
    }

    hideError();

    const sgpa = (
        weightedSum /
        creditSum
    ).toFixed(2);

    showResult(
        Number(sgpa)
    );
}

// ---------- RESULT ----------

function showResult(
    sgpa
) {

    sgpaValue.textContent =
        sgpa;

    if (
        sgpa >= 9
    ) {

        motivationTitle.textContent =
            "🎉 Excellent!";

        motivationMessage.textContent =
            "Outstanding performance this semester.";
    }

    else if (
        sgpa >= 8
    ) {

        motivationTitle.textContent =
            "✨ Great Job!";

        motivationMessage.textContent =
            "You're doing really well.";
    }

    else {

        motivationTitle.textContent =
            "💪 Keep Going";

        motivationMessage.textContent =
            "Consistency beats motivation.";
    }

    resultCard
    .classList.remove(
        "hidden"
    );
}

// ---------- RESET ----------

resetBtn?.addEventListener(
    "click",
    () => {

        location.reload();
    }
);

// ---------- ERROR ----------

function showError(
    message
) {

    errorMessage.textContent =
        message;

    errorMessage
    .classList.remove(
        "hidden"
    );
}

function hideError() {

    errorMessage
    .classList.add(
        "hidden"
    );
}

// ---------- HIDE ----------

function hideEverything() {

    comingSoon
    .classList.add(
        "hidden"
    );

    semesterInfo
    .classList.add(
        "hidden"
    );

    subjectsCard
    .classList.add(
        "hidden"
    );

    buttonsSection
    .classList.add(
        "hidden"
    );

    resultCard
    .classList.add(
        "hidden"
    );

    subjectsContainer
    .innerHTML = "";
}
