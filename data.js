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
                credit: 3,
                type: "theory"
            },

            {
                name: "Engineering Chemistry / Engineering Physics",
                credit: 3,
                type: "theory"
            },

            {
                name: "Basic Electronics Engineering / Basic Electrical Engineering",
                credit: 3,
                type: "theory"
            },

            {
                name: "Engineering Mechanics / Engineering Thermodynamics",
                credit: 2,
                type: "theory"
            },

            {
                name: "Computer Programming",
                credit: 3,
                type: "theory"
            },

            {
                name: "Basic Electronics Engineering Lab / Basic Electrical Engineering Lab",
                credit: 1,
                type: "practical"

            },

            {
                name: "Computer Programming Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Communicative & Technical English",
                credit: 2,
                type: "practical"
            },

            {
                name: "Workbench Practices / Engineering Graphics",
                credit: 1,
                type: "practical"
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
                credit: 3,
                type: "theory"
            },

            {
                name: "Engineering Physics / Engineering Chemistry",
                credit: 3,
                type: "theory"
            },

            {
                name: "Basic Electrical Engineering / Basic Electronics Engineering",
                credit: 3,
                type: "theory"
            },

            {
                name: "Engineering Thermodynamics / Engineering Mechanics",
                credit: 2,
                type: "theory"
            },

            {
                name: "Data Structures & Algorithms",
                credit: 3,
                type: "theory"
            },

            {
                name: "Basic Electronics Engineering Lab / Basic Electrical Engineering Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Data Structures & Algorithms Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Corporate Communication Skills",
                credit: 2,
                type: "practical"
            },

            {
                name: "Engineering Graphics / Workbench Practices",
                credit: 1,
                type: "practical"
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
                credit: 3,
                type: "theory"
            },

            {
                name: "OOP Using Java",
                credit: 3,
                type: "theory"
            },

            {
                name: "Management & Economics for Engineers / Biology for Engineers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Design & Analysis of Algorithms",
                credit: 4,
                type: "theory"
            },

            {
                name: "Operating Systems",
                credit: 3,
                type: "theory"
            },

            {
                name: "Digital Electronics",
                credit: 3,
                type: "theory"
            },

            {
                name: "OOP Using Java Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Design & Analysis of Algorithms Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Operating Systems Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Digital Electronics Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Summer Internship I",
                credit: 1,
                type: "project"
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
                name: "Optimization Techniques",
                credit: 3,
                type: "theory"
            },

            {
                name: "Programming in Python",
                credit: 3,
                type: "theory"
            },

            {
                name: "Management & Economics for Engineers / Biology for Engineers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Computer Organization & Architecture",
                credit: 3,
                type: "theory"
            },

            {
                name: "Database Management Systems",
                credit: 4,
                type: "theory"
            },

            {
                name: "Program Elective - I",
                credit: 3,
                type: "theory"

            },

            {
                name: "Honours / Minor - I",
                credit: 3,
                optional: true,
                type: "optional"
            },

            {
                name: "Programming in Python Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Computer Organization & Architecture Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Database Management Systems Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Internet & Web Technology Lab",
                credit: 2,
                type: "practical"
            }
        ]
    },

    // ======================
    // CSE - Semester 5
    // ======================

    "cse-5": {
        label: "CSE • Semester 5",

        subjects: [

            {
                name: "Computer Networks",
                credit: 3,
                type: "theory"
            },

            {
                name: "Machine Learning",
                credit: 4,
                type: "theory"
            },

            {
                name: "Software Engineering",
                credit: 3,
                type: "theory"
            },

            {
                name: "Formal Languages & Automata Theory",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - II",
                credit: 3,
                type: "theory"
                
            },

            {
                name: "Program Elective - III",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - II",
                credit: 3,
                optional: true,
                type: "optional"
            },

            {
                name: "Computer Networks Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Machine Learning Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Software Engineering Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Soft Skills for Professionals",
                credit: 1,
                type: "practical"
            },

            {
                name: "Summer Internship - II",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // CSE - Semester 6
    // ======================

    "cse-6": {
        label: "CSE • Semester 6",

        subjects: [

            {
                name: "Internet of Things",
                credit: 3,
                type: "theory"
            },

            {
                name: "Soft Computing",
                credit: 3,
                type: "theory"
            },

            {
                name: "Compiler Design",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - IV",
                credit: 3,
                type: "theory"
                
            },

            {
                name: "Program Elective - V",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - VI",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - III",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Internet of Things Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Soft Computing Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Emerging Technologies Lab / Entrepreneurship & Innovation",
                credit: 2,
                type: "practical"
            },

            {
                name: "Technical & Research Writing",
                credit: 1,
                type: "practical"
            }
        ]
    },

    // ======================
    // CSE - Semester 7
    // ======================

    "cse-7": {
        label: "CSE • Semester 7",

        subjects: [

            {
                name: "Open Elective - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "MOOC - I",
                credit: 3,
                type: "theory"

            },

            {
                name: "Honours / Minor - IV",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Honours / Minor - V",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Skill Lab & Project - I",
                credit: 2,
                type: "practical"
            },

            {
                name: "Summer Internship - III",
                credit: 1,
                type: "project"
            }
        ]
    },

    "cse-7-ps": {

        label:
        "CSE • Semester 7 • Practice School",

        subjects: [

            {
                name: "Practice School / Industry Internship",
                credit: 15,
                type: "project"
            },

            {
                name: "Summer Internship - III",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // CSE - Semester 8
    // ======================

    "cse-8": {
        label: "CSE • Semester 8",

        subjects: [

            {
                name: "Open Elective - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "MOOC - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "Presentation Skills & Technical Seminar",
                credit: 1,
                type: "practical"
            },

            {
                name: "Project - II",
                credit: 8,
                type: "project"
            }
        ]
    },

    "cse-8-ps": {

        label:
        "CSE • Semester 8 • Practice School",

        subjects: [

            {
                name: "Practice School / Industry Internship",
                credit: 15,
                type: "project"
            }
        ]
    },

    // ======================
    // ECE - Semester 3
    // ======================

    "ece-3": {
        label: "ECE • Semester 3",

        subjects: [

            {
                name: "Vector Calculus & Fourier Analysis",
                credit: 3,
                type: "theory"
            },

            {
                name: "OOP Using Java",
                credit: 3,
                type: "theory"
            },

            {
                name: "Management & Economics for Engineers / Biology for Engineers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Signals & Systems",
                credit: 3,
                type: "theory"
            },

            {
                name: "Analog Electronic Circuits",
                credit: 4,
                type: "theory"
            },

            {
                name: "Digital Electronics",
                credit: 3,
                type: "theory"
            },

            {
                name: "Circuit Theory",
                credit: 3,
                type: "theory"
            },

            {
                name: "OOP Using Java Lab ",
                credit: 1,
                type: "practical"
            },

            {
                name: "Analog Electronic Circuits Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Circuit Theory Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Summer Internship I",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // ECE - Semester 4
    // ======================

    "ece-4": {
        label: "ECE • Semester 4",

        subjects: [

            {
                name: "Complex Analysis & Numerical Methods",
                credit: 3,
                type: "theory"
            },

            {
                name: "Programming in Python",
                credit: 3,
                type: "theory"
            },

            {
                name: "Management & Economics for Engineers / Biology for Engineers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Digital Electronic Circuits",
                credit: 4,
                type: "theory"
            },

            {
                name: "Digital Signal Processing",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - I",
                credit: 3,
                optional: true,
                type: "optional"
            },

            {
                name: "Programming in Python Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Digital Electronic Circuits Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Digital Signal Processing Lab",
                credit: 1,
                type: "practical"
            },
        ]
    },

    // ======================
    // ECE - Semester 5
    // ======================

    "ece-5": {
        label: "ECE • Semester 5",

        subjects: [

            {
                name: "Microprocessors & Microcontrollers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Digital VLSI Design",
                credit: 4,
                type: "theory"
            },

            {
                name: "Analog Communication",
                credit: 3,
                type: "theory"
            },

            {
                name: "Electromagnetic Waves",
                credit: 4,
                type: "theory"
            },

            {
                name: "Program Elective - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - III",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - II",
                credit: 3,
                optional: true,
                type: "optional"
            },

            {
                name: "Microprocessors & Microcontrollers Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Digital VLSI Design Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Analog Communication Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Electromagnetic Waves Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Soft Skills for Professionals",
                credit: 1,
                type: "practical"
            },

            {
                name: "Summer Internship - II",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // ECE - Semester 6
    // ======================

    "ece-6": {
        label: "ECE • Semester 6",

        subjects: [

            {
                name: "Digital Communication",
                credit: 3,
                type: "theory"
            },

            {
                name: "Microwave Engineering ",
                credit: 3,
                type: "theory"
            },

            {
                name: "Control Systems Engineering",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - IV",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - V",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - VI",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - III",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Digital Communication Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "High Frequency Engineering Lab ",
                credit: 1,
                type: "practical"
            },

            {
                name: "Emerging Technologies Lab / Entrepreneurship & Innovation",
                credit: 2,
                type: "practical"
            },

            {
                name: "Technical & Research Writing",
                credit: 1,
                type: "practical"
            }
        ]
    },

    // ======================
    // ECE - Semester 7
    // ======================

    "ece-7": {
        label: "ECE • Semester 7",

        subjects: [

            {
                name: "Open Elective - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "MOOC - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - IV",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Honours / Minor - V",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Skill Lab & Project - I",
                credit: 2,
                type: "practical"
                
            },

            {
                name: "Summer Internship - III",
                credit: 1,
                type: "project"
            }
        ]
    },

    "ece-7-ps": {

        label:
        "ECE • Semester 7 • Practice School",

        subjects: [

            {
                name: "Practice School / Industry Internship",
                credit: 15,
                type: "project"
            },

            {
                name: "Summer Internship - III",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // ECE - Semester 8
    // ======================

    "ece-8": {
        label: "ECE • Semester 8",

        subjects: [

            {
                name: "Open Elective - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "MOOC - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "Presentation Skills & Technical Seminar",
                credit: 1,
                type: "practical"
            },

            {
                name: "Project - II",
                credit: 8,
                type: "project"
            }
        ]
    },

    "ece-8-ps": {

        label:
        "ECE • Semester 8 • Practice School",

        subjects: [

            {
                name: "Practice School / Industry Internship",
                credit: 15,
                type: "project"
            }
        ]
    },

    // ======================
    // EEE - Semester 3
    // ======================

    "eee-3": {
        label: "EEE • Semester 3",

        subjects: [

            {
                name: "Vector Calculus & Fourier Analysis",
                credit: 3,
                type: "theory"
            },

            {
                name: "OOP Using Java",
                credit: 3,
                type: "theory"
            },

            {
                name: "Management & Economics for Engineers / Biology for Engineers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Analog Electronics",
                credit: 3,
                type: "theory"
            },

            {
                name: "Circuits & Signals",
                credit: 4,
                type: "theory"
            },

            {
                name: "Electromagnetic Theory",
                credit: 3,
                type: "theory"
            },

            {
                name: "OOP Using Java Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Analog Electronics Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Circuits & Signals Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Summer Internship I",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // EEE - Semester 4
    // ======================

    "eee-4": {
        label: "EEE • Semester 4",

        subjects: [

            {
                name: "Complex Analysis & Numerical Methods",
                credit: 3,
                type: "theory"
            },

            {
                name: "Programming in Python",
                credit: 3,
                type: "theory"
            },

            {
                name: "Management & Economics for Engineers / Biology for Engineers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Digital Electronics",
                credit: 3,
                type: "theory"
            },

            {
                name: "Electrical Machines",
                credit: 4,
                type: "theory"
            },

            {
                name: "Program Elective - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - I",
                credit: 3,
                optional: true,
                type: "optional"
            },

            {
                name: "Programming in Python Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Electrical Machines Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Digital Electronics Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Electrical & Electronics Design Lab",
                credit: 1,
                type: "practical"
            },            

        ]
    },

    // ======================
    // EEE - Semester 5
    // ======================

    "eee-5": {
        label: "EEE • Semester 5",

        subjects: [

            {
                name: "Control Systems Engineering",
                credit: 3,
                type: "theory"
            },

            {
                name: "Electrical Power Transmission & Distribution",
                credit: 3,
                type: "theory"
            },

            {
                name: "Electrical & Electronics Measurement",
                credit: 3,
                type: "theory"
            },

            {
                name: "Power Electronics",
                credit: 4,
                type: "theory"
            },

            {
                name: "Program Elective - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - III",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - II",
                credit: 3,
                optional: true,
                type: "optional"
            },

            {
                name: "Control Systems Engineering Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Electrical & Electronics Measurement lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Power Electronics Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Soft Skills for Professionals",
                credit: 1,
                type: "practical"
            },

            {
                name: "Summer Internship - II",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // EEE - Semester 6
    // ======================

    "eee-6": {
        label: "EEE • Semester 6",

        subjects: [

            {
                name: "Fundamentals of MPMC",
                credit: 3,
                type: "theory"
            },

            {
                name: "Power Systems Operation & Control",
                credit: 4,
                type: "theory"
            },

            {
                name: "Introduction to Digital Signal Processing",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - IV",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - V",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - VI",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - III",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Fundamentals of MPMC Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Power Systems Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Emerging Technologies Lab / Entrepreneurship & Innovation",
                credit: 2,
                type: "practical"
            },

            {
                name: "Technical & Research Writing",
                credit: 1,
                type: "practical"
            }
        ]
    },

    // ======================
    // EEE - Semester 7
    // ======================

    "eee-7": {
        label: "EEE • Semester 7",

        subjects: [

            {
                name: "Open Elective - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "MOOC - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - IV",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Honours / Minor - V",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Skill Lab & Project - I",
                credit: 2,
                type: "practical"
                
            },

            {
                name: "Summer Internship - III",
                credit: 1,
                type: "project"
            }
        ]
    },

    "eee-7-ps": {

        label:
        "EEE • Semester 7 • Practice School",

        subjects: [

            {
                name: "Practice School / Industry Internship",
                credit: 15,
                type: "project"
            },

            {
                name: "Summer Internship - III",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // EEE - Semester 8
    // ======================

    "eee-8": {
        label: "EEE • Semester 8",

        subjects: [

            {
                name: "Open Elective - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "MOOC - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "Presentation Skills & Technical Seminar",
                credit: 1,
                type: "practical"
            },

            {
                name: "Project - II",
                credit: 8,
                type: "project"
            }
        ]
    },

    "eee-8-ps": {

        label:
        "EEE • Semester 8 • Practice School",

        subjects: [

            {
                name: "Practice School / Industry Internship",
                credit: 15,
                type: "project"
            }
        ]
    },

    // ======================
    // EIE - Semester 3
    // ======================

    "eie-3": {
        label: "EIE • Semester 3",

        subjects: [

            {
                name: "Vector Calculus & Fourier Analysis",
                credit: 3,
                type: "theory"
            },

            {
                name: "OOP Using Java",
                credit: 3,
                type: "theory"
            },

            {
                name: "Management & Economics for Engineers / Biology for Engineers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Basics of Instrumentation",
                credit: 3,
                type: "theory"
            },

            {
                name: "Circuit Theory",
                credit: 3,
                type: "theory"
            },

            {
                name: "Analog Electronic Circuits",
                credit: 4,
                type: "theory"
            },

            {
                name: "OOP Using Java Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Basics of Instrumentation Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Analog Electronic Circuits Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Summer Internship I",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // EIE - Semester 4
    // ======================

    "eie-4": {
        label: "EIE • Semester 4",

        subjects: [

            {
                name: "Complex Analysis & Numerical Methods",
                credit: 3,
                type: "theory"
            },

            {
                name: "Programming in Python",
                credit: 3,
                type: "theory"
            },

            {
                name: "Management & Economics for Engineers / Biology for Engineers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Transducers & Measurement Systems",
                credit: 3,
                type: "theory"
            },

            {
                name: "Digital Electronic Circuits",
                credit: 4,
                type: "theory"
            },

            {
                name: "Program Elective - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - I",
                credit: 3,
                optional: true,
                type: "optional"
            },

            {
                name: "Programming in Python Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Transducers & Measurement Systems Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Digital Electronic Circuits Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Simulation & Design Lab",
                credit: 1,
                type: "practical"
            },            

        ]
    },

    // ======================
    // EIE - Semester 5
    // ======================

    "eie-5": {
        label: "EIE • Semester 5",

        subjects: [

            {
                name: "Introduction to Digital Signal Processing",
                credit: 3,
                type: "theory"
            },

            {
                name: "Digital VLSI Design",
                credit: 4,
                type: "theory"
            },

            {
                name: "Instrumentation Devices & Systems",
                credit: 4,
                type: "theory"
            },

            {
                name: "Communication Systems Engineering",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - III",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - II",
                credit: 3,
                optional: true,
                type: "optional"
            },

            {
                name: "Introduction to Digital Signal Processing Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Digital VLSI Design Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Instrumentation Devices & Systems Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Soft Skills for Professionals",
                credit: 1,
                type: "practical"
            },

            {
                name: "Summer Internship - II",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // EIE - Semester 6
    // ======================

    "eie-6": {
        label: "EIE • Semester 6",

        subjects: [

            {
                name: "Industrial Automation & Control",
                credit: 3,
                type: "theory"
            },

            {
                name: "Microprocessors & Microcontrollers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Control Systems Engineering",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - IV",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - V",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - VI",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - III",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Industrial Automation & Control Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Microprocessors & Microcontrollers Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Emerging Technologies Lab / Entrepreneurship & Innovation",
                credit: 2,
                type: "practical"
            },

            {
                name: "Technical & Research Writing",
                credit: 1,
                type: "practical"
            }
        ]
    },

    // ======================
    // EIE - Semester 7
    // ======================

    "eie-7": {
        label: "EIE • Semester 7",

        subjects: [

            {
                name: "Open Elective - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "MOOC - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - IV",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Honours / Minor - V",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Skill Lab & Project - I",
                credit: 2,
                type: "practical"
                
            },

            {
                name: "Summer Internship - III",
                credit: 1,
                type: "project"
            }
        ]
    },

    "eie-7-ps": {

        label:
        "EIE • Semester 7 • Practice School",

        subjects: [

            {
                name: "Practice School / Industry Internship",
                credit: 15,
                type: "project"
            },

            {
                name: "Summer Internship - III",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // EIE - Semester 8
    // ======================

    "eie-8": {
        label: "EIE • Semester 8",

        subjects: [

            {
                name: "Open Elective - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "MOOC - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "Presentation Skills & Technical Seminar",
                credit: 1,
                type: "practical"
            },

            {
                name: "Project - II",
                credit: 8,
                type: "project"
            }
        ]
    },

    "eie-8-ps": {

        label:
        "EIE • Semester 8 • Practice School",

        subjects: [

            {
                name: "Practice School / Industry Internship",
                credit: 15,
                type: "project"
            }
        ]
    },

    // ======================
    // VLSI - Semester 3
    // ======================

    "vlsi-3": {
        label: "VLSI • Semester 3",

        subjects: [

            {
                name: "Vector Calculus & Fourier Analysis",
                credit: 3,
                type: "theory"
            },

            {
                name: "Programming in Python",
                credit: 3,
                type: "theory"
            },

            {
                name: "Management & Economics for Engineers / Biology for Engineers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Signals & Systems",
                credit: 3,
                type: "theory"
            },

            {
                name: "Circuit Theory",
                credit: 3,
                type: "theory"
            },

            {
                name: "Analog Circuit Design",
                credit: 4,
                type: "theory"
            },

            {
                name: "Programming in Python Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Circuit Theory Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Analog Circuit Design Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Summer Internship I",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // VLSI - Semester 4
    // ======================

    "vlsi-4": {
        label: "VLSI • Semester 4",

        subjects: [

            {
                name: "Complex Analysis & Numerical Methods",
                credit: 3,
                type: "theory"
            },

            {
                name: "Solid State Devices",
                credit: 3,
                type: "theory"
            },

            {
                name: "Management & Economics for Engineers / Biology for Engineers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Digital Circuit Design",
                credit: 4,
                type: "theory"
            },

            {
                name: "Communication Systems Engineering",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - I",
                credit: 3,
                optional: true,
                type: "optional"
            },

            {
                name: "Linux & TCL for SSD Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Digital Circuit Design Lab",
                credit: 2,
                type: "practical"
            },

            {
                name: "Communication Systems Engineering Lab",
                credit: 1,
                type: "practical"
            },
        ]
    },

    // ======================
    // VLSI - Semester 5
    // ======================

    "vlsi-5": {
        label: "VLSI • Semester 5",

        subjects: [

            {
                name: "Digital Signal Processing",
                credit: 3,
                type: "theory"
            },

            {
                name: "Electromagnetic Waves",
                credit: 4,
                type: "theory"
            },

            {
                name: "CMOS Integrated Circuits",
                credit: 4,
                type: "theory"
            },

            {
                name: "Electronic System Design",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - III",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - II",
                credit: 3,
                optional: true,
                type: "optional"
            },

            {
                name: "Digital Signal Processing Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Electromagnetic Waves Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "CMOS Integrated Circuits Lab",
                credit: 1,
                type: "practical"
            },
            
            {
                name: "Electronic System Design Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Soft Skills for Professionals",
                credit: 1,
                type: "practical"
            },

            {
                name: "Summer Internship - II",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // VLSI - Semester 6
    // ======================

    "vlsi-6": {
        label: "VLSI • Semester 6",

        subjects: [

            {
                name: "Microprocessors & Microcontrollers",
                credit: 3,
                type: "theory"
            },

            {
                name: "Analog VLSI Design",
                credit: 3,
                type: "theory"
            },

            {
                name: "Control Systems Engineering",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - IV",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - V",
                credit: 3,
                type: "theory"
            },

            {
                name: "Program Elective - VI",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - III",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Microprocessors & Microcontrollers Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Analog VLSI Design Lab",
                credit: 1,
                type: "practical"
            },

            {
                name: "Emerging Technologies Lab / Entrepreneurship & Innovation",
                credit: 2,
                type: "practical"
            },

            {
                name: "Technical & Research Writing",
                credit: 1,
                type: "practical"
            }
        ]
    },

    // ======================
    // VLSI - Semester 7
    // ======================

    "vlsi-7": {
        label: "VLSI • Semester 7",

        subjects: [

            {
                name: "Open Elective - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "MOOC - I",
                credit: 3,
                type: "theory"
            },

            {
                name: "Honours / Minor - IV",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Honours / Minor - V",
                credit: 4,
                optional: true,
                type: "optional"
            },

            {
                name: "Skill Lab & Project - I",
                credit: 2,
                type: "practical"
                
            },

            {
                name: "Summer Internship - III",
                credit: 1,
                type: "project"
            }
        ]
    },

    "vlsi-7-ps": {

        label:
        "VLSI • Semester 7 • Practice School",

        subjects: [

            {
                name: "Practice School / Industry Internship",
                credit: 15,
                type: "project"
            },

            {
                name: "Summer Internship - III",
                credit: 1,
                type: "project"
            }
        ]
    },

    // ======================
    // VLSI - Semester 8
    // ======================

    "vlsi-8": {
        label: "VLSI • Semester 8",

        subjects: [

            {
                name: "Open Elective - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "MOOC - II",
                credit: 3,
                type: "theory"
            },

            {
                name: "Presentation Skills & Technical Seminar",
                credit: 1,
                type: "practical"
            },

            {
                name: "Project - II",
                credit: 8,
                type: "project"
            }
        ]
    },

    "vlsi-8-ps": {

        label:
        "VLSI • Semester 8 • Practice School",

        subjects: [

            {
                name: "Practice School / Industry Internship",
                credit: 15,
                type: "project"
            }
        ]
    }
};
