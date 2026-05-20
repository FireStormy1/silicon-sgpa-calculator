// ---------- ELEMENTS ----------

const branchSelect = document.getElementById("branch");
const semesterSelect = document.getElementById("semester");

const comingSoon = document.getElementById("comingSoon");

const semesterInfo = document.getElementById("semesterInfo");
const semesterTitle = document.getElementById("semesterTitle");
const subjectCount = document.getElementById("subjectCount");
const totalCredits = document.getElementById("totalCredits");

const subjectsCard = document.getElementById("subjectsCard");
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

const errorMessage =
    document.getElementById(
        "errorMessage"
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

// ---------- GLOBAL STATE ----------

let currentSemesterKey =
    null;

// ---------- EVENT LISTENERS ----------

branchSelect.addEventListener(
    "change",
    loadSemesterData
);

semesterSelect.addEventListener(
    "change",
    loadSemesterData
);

calculateBtn.addEventListener(
    "click",
    calculateSGPA
);

resetBtn.addEventListener(
    "click",
    resetAll
);

// ---------- LOAD SEMESTER ----------

function loadSemesterData() {

    hideEverything();

    const branch =
        branchSelect.value;

    const semester =
        semesterSelect.value;

    if (
        !branch ||
        !semester
    ) {
        return;
    }

    let key = null;

    // Global first year
    if (
        semester === "1" ||
        semester === "2"
    ) {
        key = `1yr-${semester}`;
    }

    // CSE semesters
    else if (
        branch === "cse" &&
        (
            semester === "3" ||
            semester === "4" ||
            semester === "5" ||
            semester === "6"
        )
    ) {
        key = `cse-${semester}`;
    }

    if (!key) {

        comingSoon.classList.remove(
            "hidden"
        );

        return;
    }

    currentSemesterKey = key;

    const data =
        semesterData[key];

    renderSemesterInfo(data);
    renderSubjects(data);

    semesterInfo.classList.remove(
        "hidden"
    );

    subjectsCard.classList.remove(
        "hidden"
    );

    buttonsSection.classList.remove(
        "hidden"
    );
}

// ---------- RENDER INFO ----------

function renderSemesterInfo(data) {

    semesterTitle.textContent =
        data.label;

    subjectCount.textContent =
        `${data.subjects.length} Subjects`;

    const credits =
        data.subjects.reduce(
            (sum, subject) =>
                sum +
                subject.credit,
            0
        );

    totalCredits.textContent =
        credits;
}

// ---------- RENDER SUBJECTS ----------

function renderSubjects(data) {

    subjectsContainer.innerHTML =
        "";

    data.subjects.forEach(
        (subject, index) => {

        const row =
            document.createElement(
                "div"
            );

        row.className =
            "subject-row";

        row.innerHTML = `
            <div class="subject-info">
                <h4>${subject.name}</h4>
                <p>Credit: ${subject.credit}</p>
            </div>

            <div class="credit-badge">
                ${subject.credit}
            </div>

            <div class="optional-wrapper">

                ${
                    subject.optional
                    ?
                    `
                    <select
                        class="optional-toggle"
                    >
                        <option value="no">
                            Not Taken
                        </option>

                        <option value="yes">
                            Taken
                        </option>
                    </select>

                    <select
                        class="grade-select hidden"
                        data-index="${index}"
                    >
                        ${gradeOptions()}
                    </select>
                    `
                    :
                    `
                    <select
                        class="grade-select"
                        data-index="${index}"
                    >
                        ${gradeOptions()}
                    </select>
                    `
                }

            </div>
        `;

        subjectsContainer.appendChild(
            row
        );
    });

    // Grade change
    const gradeSelects =
        document.querySelectorAll(
            ".grade-select"
        );

    gradeSelects.forEach(
        select => {

        select.addEventListener(
            "change",
            calculateSGPA
        );
    });

    // Optional toggle
    const optionalToggles =
        document.querySelectorAll(
            ".optional-toggle"
        );

    optionalToggles.forEach(
        toggle => {

        toggle.addEventListener(
            "change",
            function () {

                const parent =
                    this.parentElement;

                const gradeSelect =
                    parent.querySelector(
                        ".grade-select"
                    );

                if (
                    this.value ===
                    "yes"
                ) {

                    gradeSelect
                    .classList
                    .remove(
                        "hidden"
                    );
                }
                else {

                    gradeSelect.value =
                        "";

                    gradeSelect
                    .classList
                    .add(
                        "hidden"
                    );

                    calculateSGPA();
                }
            }
        );
    });
}

// ---------- GRADE OPTIONS ----------

function gradeOptions() {

    return `
        <option value="">
            Select Grade
        </option>

        <option value="O">
            O — Outstanding
        </option>

        <option value="E">
            E — Excellent
        </option>

        <option value="A">
            A — Very Good
        </option>

        <option value="B">
            B — Good
        </option>

        <option value="C">
            C — Average
        </option>

        <option value="D">
            D — Satisfactory
        </option>

        <option value="U">
            U — Unsatisfactory
        </option>
    `;
}

// ---------- CALCULATE SGPA ----------

function calculateSGPA() {

    if (
        !currentSemesterKey
    ) return;

    const data =
        semesterData[
            currentSemesterKey
        ];

    const gradeSelects =
        document.querySelectorAll(
            ".grade-select"
        );

    const optionalToggles =
        document.querySelectorAll(
            ".optional-toggle"
        );

    let weightedSum = 0;
    let creditSum = 0;

    for (
        let i = 0;
        i <
        gradeSelects.length;
        i++
    ) {

        const grade =
            gradeSelects[i]
            .value;

        const subject =
            data.subjects[i];

        // Optional
        if (
            subject.optional
        ) {

            const toggle =
                optionalToggles[0];

            const taken =
                toggle &&
                toggle.value ===
                "yes";

            if (!taken) {
                continue;
            }

            if (!grade) {

                showError(
                    "Please select grade for optional subject."
                );

                return;
            }
        }

        // Compulsory
        else {

            if (!grade) {

                showError(
                    "Please select grades for all compulsory subjects."
                );

                resultCard
                .classList
                .add(
                    "hidden"
                );

                return;
            }
        }

        weightedSum +=
            subject.credit *
            gradePoints[
                grade
            ];

        creditSum +=
            subject.credit;
    }

    hideError();

    const sgpa =
        (
            weightedSum /
            creditSum
        ).toFixed(2);

    showResult(
        Number(sgpa)
    );
}

// ---------- SHOW RESULT ----------

function showResult(sgpa) {

    sgpaValue.textContent =
        sgpa;

    const motivation =
        getMotivation(
            sgpa
        );

    motivationTitle.textContent =
        `${motivation.emoji} ${motivation.title}`;

    motivationMessage.textContent =
        motivation.message;

    resultCard.classList.remove(
        "hidden"
    );
}

// ---------- MOTIVATION ----------

function getMotivation(
    sgpa
) {

    if (
        sgpa >= 9
    ) {
        return {
            emoji: "🎉",
            title:
                "Excellent!",
            message:
                "Outstanding performance this semester."
        };
    }

    if (
        sgpa >= 8
    ) {
        return {
            emoji: "✨",
            title:
                "Great Job!",
            message:
                "You're doing really well. Keep it up."
        };
    }

    if (
        sgpa >= 7
    ) {
        return {
            emoji: "👍",
            title:
                "Good Work",
            message:
                "Keep pushing higher. You have the potential."
        };
    }

    return {
        emoji: "💪",
        title:
            "Room to Grow",
        message:
            "Stay consistent. Every semester is a new start."
    };
}

// ---------- RESET ----------

function resetAll() {

    branchSelect
        .selectedIndex = 0;

    semesterSelect
        .selectedIndex = 0;

    currentSemesterKey =
        null;

    hideError();
    hideEverything();

    sgpaValue.textContent =
        "";

    motivationTitle.textContent =
        "";

    motivationMessage.textContent =
        "";
}

// ---------- ERROR ----------

function showError(message) {

    errorMessage.textContent =
        message;

    errorMessage.classList.remove(
        "hidden"
    );
}

function hideError() {

    errorMessage.classList.add(
        "hidden"
    );
}

// ---------- HIDE ----------

function hideEverything() {

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

    semesterTitle.textContent =
        "";

    subjectCount.textContent =
        "";

    totalCredits.textContent =
        "";

    subjectsContainer.innerHTML =
        "";
}
