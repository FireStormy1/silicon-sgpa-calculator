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

// ---------- GRADE OPTIONS ----------

const gradeOptions = [
    "",
    "O",
    "E",
    "A",
    "B",
    "C",
    "D",
    "U"
];

// ---------- SUBJECT DATA ----------

const semesterData = {

    // ======================
    // 1st Year - Semester 1
    // ======================

    "1yr-1": {
        label: "1st Year • Semester 1",

        subjects: [

            {
                name: "ODE & Matrix Algebra",
                credit: 3
            },

            {
                name: "Engineering Chemistry / Engineering Physics",
                credit: 3
            },

            {
                name: "Basic Electronics Engineering / Basic Electrical Engineering",
                credit: 3
            },

            {
                name: "Engineering Mechanics / Engineering Thermodynamics",
                credit: 2
            },

            {
                name: "Computer Programming",
                credit: 3
            },

            {
                name: "Basic Electronics Engineering Lab / Basic Electrical Engineering Lab",
                credit: 1
            },

            {
                name: "Computer Programming Lab",
                credit: 2
            },

            {
                name: "Communicative & Technical English",
                credit: 2
            },

            {
                name: "Workbench Practices / Engineering Graphics",
                credit: 1
            }
        ]
    },

    // ======================
    // 1st Year - Semester 2
    // ======================

    "1yr-2": {
        label: "1st Year • Semester 2",

        subjects: [

            {
                name: "Probability & Statistics",
                credit: 3
            },

            {
                name: "Engineering Physics / Engineering Chemistry",
                credit: 3
            },

            {
                name: "Basic Electrical Engineering / Basic Electronics Engineering",
                credit: 3
            },

            {
                name: "Engineering Thermodynamics / Engineering Mechanics",
                credit: 2
            },

            {
                name: "Data Structures & Algorithms",
                credit: 3
            },

            {
                name: "Basic Electronics Engineering Lab / Basic Electrical Engineering Lab",
                credit: 1
            },

            {
                name: "Data Structures & Algorithms Lab",
                credit: 2
            },

            {
                name: "Corporate Communication Skills",
                credit: 2
            },

            {
                name: "Engineering Graphics / Workbench Practices",
                credit: 1
            }
        ]
    },


    // ======================
    // CSE - Semester 3
    // ======================

    "cse-3": {
        label: "CSE • Semester 3",

        subjects: [

            {
                name: "Discrete Mathematics",
                credit: 3
            },

            {
                name: "OOP Using Java",
                credit: 3
            },

            {
                name:
                "Management & Economics for Engineers / Biology for Engineers",
                credit: 3
            },

            {
                name:
                "Design & Analysis of Algorithms",
                credit: 4
            },

            {
                name: "Operating Systems",
                credit: 3
            },

            {
                name: "Digital Electronics",
                credit: 3
            },

            {
                name:
                "OOP Using Java Lab",
                credit: 1
            },

            {
                name:
                "Design & Analysis of Algorithms Lab",
                credit: 1
            },

            {
                name:
                "Operating Systems Lab",
                credit: 1
            },

            {
                name:
                "Digital Electronics Lab",
                credit: 1
            },

            {
                name:
                "Summer Internship 1",
                credit: 1
            }
        ]
    },

    // ======================
    // CSE - Semester 4
    // ======================

    "cse-4": {
        label: "CSE • Semester 4",

        subjects: [

            {
                name:
                "Optimization Techniques",
                credit: 3
            },

            {
                name:
                "Programming in Python",
                credit: 3
            },

            {
                name:
                "Management & Economics for Engineers / Biology for Engineers",
                credit: 3
            },

            {
                name:
                "Computer Organization & Architecture",
                credit: 3
            },

            {
                name:
                "Database Management Systems",
                credit: 4
            },

            {
                name:
                "Program Elective - I",
                credit: 3
            },

            {
                name:
                "Honors / Minor - I (Optional)",
                credit: 3,
                optional: true
            },

            {
                name:
                "Programming in Python Lab",
                credit: 1
            },

            {
                name:
                "Computer Organization & Architecture Lab",
                credit: 1
            },

            {
                name:
                "Database Management Systems Lab",
                credit: 2
            },

            {
                name:
                "Internet & Web Technology Lab",
                credit: 2
            }
        ]
    }
};
