// Scheme database. Plain JS so the site works with no server (file:// blocks fetch of .json).
// Amounts are illustrative for a student demo. Regenerate with: python tools/build_schemes.py
window.SCHEMES = [
  {
    "id": "pm-kisan",
    "name": "PM-KISAN income support",
    "category": "agriculture",
    "level": "central",
    "benefit": "Rs 6,000 a year in three instalments",
    "applyAt": "pmkisan.gov.in or the village agriculture office",
    "documents": [
      "Aadhaar",
      "land records",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "kisan nidhi",
        "land",
        "paisa",
        "pm kisan",
        "pmkisan",
        "samman",
        "seed"
      ]
    },
    "applyLink": "https://pmkisan.gov.in"
  },
  {
    "id": "pmksy-irrigation",
    "name": "PM Krishi Sinchai Yojana - drip, sprinkler and pump subsidy",
    "category": "agriculture",
    "level": "central",
    "benefit": "Subsidy on drip or sprinkler systems and pump sets",
    "applyAt": "District agriculture or horticulture office",
    "documents": [
      "Aadhaar",
      "land records",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "borewell",
        "crop",
        "drip",
        "ekar",
        "farmer",
        "irrigation",
        "kheti",
        "kisan",
        "land",
        "paani",
        "pmksy irrigation",
        "pump",
        "seed",
        "sinchai",
        "sprinkler",
        "water"
      ]
    },
    "applyLink": "https://pmksy.gov.in"
  },
  {
    "id": "pmfby",
    "name": "PM Fasal Bima Yojana crop insurance",
    "category": "agriculture",
    "level": "central",
    "benefit": "Low premium insurance for notified crops against drought, flood and pests",
    "applyAt": "Bank, CSC or pmfby.gov.in",
    "documents": [
      "Aadhaar",
      "land records",
      "sowing certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "bima",
        "crop",
        "crop insurance",
        "drought",
        "ekar",
        "farmer",
        "fasal",
        "kheti",
        "kisan",
        "land",
        "loss",
        "pmfby",
        "seed"
      ]
    },
    "applyLink": "https://pmfby.gov.in"
  },
  {
    "id": "kcc",
    "name": "Kisan Credit Card",
    "category": "agriculture",
    "level": "central",
    "benefit": "Crop loan at concessional interest with a limit set on land and crop",
    "applyAt": "Any bank or cooperative bank",
    "documents": [
      "Aadhaar",
      "land records",
      "photo",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "credit",
        "crop",
        "ekar",
        "farmer",
        "karza",
        "kcc",
        "kheti",
        "kisan",
        "kisan card",
        "land",
        "loan",
        "seed"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "nmif",
    "name": "Micro irrigation subsidy under the National Mission on Micro Irrigation",
    "category": "agriculture",
    "level": "central",
    "benefit": "Capital subsidy on micro-irrigation equipment",
    "applyAt": "State agriculture department",
    "documents": [
      "Aadhaar",
      "land records",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "crop",
        "drip",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "micro",
        "micro irrigation",
        "nmif",
        "seed",
        "sprinkler"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "soil-health",
    "name": "Soil Health Card and free soil testing",
    "category": "agriculture",
    "level": "central",
    "benefit": "Free soil testing with crop-wise nutrient advice",
    "applyAt": "Krishi Vigyan Kendra or a soil testing lab",
    "documents": [
      "Aadhaar",
      "soil sample"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "fertiliser",
        "khad",
        "kheti",
        "kisan",
        "land",
        "mitti",
        "seed",
        "soil",
        "soil health",
        "test"
      ]
    },
    "applyLink": "https://soilhealth.dac.gov.in"
  },
  {
    "id": "agri-mech",
    "name": "Agriculture mechanisation subsidy and custom hiring centres",
    "category": "agriculture",
    "level": "central",
    "benefit": "Subsidy to buy or hire tractors, harvesters and implements",
    "applyAt": "District agriculture engineering department",
    "documents": [
      "Aadhaar",
      "land records",
      "bank passbook",
      "quote"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "agri mech",
        "agriculture",
        "annadam",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "harvester",
        "kheti",
        "kisan",
        "land",
        "machinery",
        "rent",
        "seed",
        "tractor"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "pashudhan",
    "name": "Pashudhan Sansthan animal health card and vaccination",
    "category": "agriculture",
    "level": "central",
    "benefit": "Free vaccination, registration and a health card for livestock",
    "applyAt": "Veterinary hospital or ANM",
    "documents": [
      "Aadhaar",
      "animal details"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "animal",
        "annadam",
        "bakri",
        "bij",
        "cattle",
        "crop",
        "ekar",
        "farmer",
        "gaay",
        "kheti",
        "kisan",
        "land",
        "livestock",
        "pashu",
        "pashudhan",
        "seed"
      ]
    },
    "applyLink": "https://pashudhan.myscheme.gov.in"
  },
  {
    "id": "dairy-edds",
    "name": "Dairy Entrepreneurship Development Scheme",
    "category": "agriculture",
    "level": "central",
    "benefit": "Bank loan with subsidy to start a small dairy unit",
    "applyAt": "NABARD district office or a bank",
    "documents": [
      "Aadhaar",
      "bank passbook",
      "project report"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "crop",
        "dairy",
        "dairy edds",
        "dugdh",
        "ekar",
        "farmer",
        "gowala",
        "kheti",
        "kisan",
        "land",
        "milk",
        "seed"
      ]
    },
    "applyLink": "https://www.nabard.org"
  },
  {
    "id": "fisheries",
    "name": "Fisheries and aquaculture subsidy",
    "category": "agriculture",
    "level": "central",
    "benefit": "Subsidy on ponds, hatcheries and fish farming inputs",
    "applyAt": "State fisheries department",
    "documents": [
      "Aadhaar",
      "pond records",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "aquaculture",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "fish",
        "fisheries",
        "kheti",
        "kisan",
        "land",
        "machhli",
        "pond",
        "seed"
      ]
    },
    "applyLink": "https://www.dof.gov.in"
  },
  {
    "id": "pmkusum-pump",
    "name": "PM-KUSUM solar pump subsidy",
    "category": "agriculture",
    "level": "central",
    "benefit": "Subsidised standalone solar pump for irrigation",
    "applyAt": "State agriculture or solar energy agency",
    "documents": [
      "Aadhaar",
      "land records",
      "bank passbook",
      "tubewell details"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "bijli",
        "crop",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "pmkusum",
        "pmkusum pump",
        "pump",
        "seed",
        "solar pump",
        "surya"
      ]
    },
    "applyLink": "https://pmkusum.mnre.gov.in"
  },
  {
    "id": "agri-infra",
    "name": "Agri Infrastructure Fund for storage and processing",
    "category": "agriculture",
    "level": "central",
    "benefit": "Loans with interest subvention for warehouses, cold storage and processing",
    "applyAt": "Bank or agriinfra.dac.gov.in",
    "documents": [
      "Aadhaar",
      "bank passbook",
      "project estimate"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "agri",
        "agri infra",
        "annadam",
        "bij",
        "cold storage",
        "crop",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "processing",
        "seed",
        "storage",
        "warehouse"
      ]
    },
    "applyLink": "https://agriinfra.dac.gov.in"
  },
  {
    "id": "fpo",
    "name": "Farmer Producer Organisation support",
    "category": "agriculture",
    "level": "central",
    "benefit": "Equity grant and management support for a registered FPO",
    "applyAt": "NABARD, SFAC or the state marketing board",
    "documents": [
      "Aadhaar",
      "FPO registration",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "collective",
        "crop",
        "ekar",
        "farmer",
        "fpo",
        "group",
        "kheti",
        "kisan",
        "land",
        "producer company",
        "seed"
      ]
    },
    "applyLink": "https://sfacindia.com"
  },
  {
    "id": "enam",
    "name": "e-NAM online mandi selling",
    "category": "agriculture",
    "level": "central",
    "benefit": "Sell produce online to verified buyers at notified mandis",
    "applyAt": "eNAM portal or the mandi office",
    "documents": [
      "Aadhaar",
      "land records",
      "produce details"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bhav",
        "bij",
        "crop",
        "ekar",
        "enam",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "mandi",
        "market",
        "produce",
        "seed",
        "sell"
      ]
    },
    "applyLink": "https://enam.gov.in"
  },
  {
    "id": "sericulture",
    "name": "Sericulture and mulberry plantation subsidy",
    "category": "agriculture",
    "level": "central",
    "benefit": "Subsidy on mulberry gardens, rearing sheds and silkworm seed",
    "applyAt": "State sericulture department",
    "documents": [
      "Aadhaar",
      "land records"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "mulberry",
        "resham",
        "seed",
        "sericulture",
        "silk"
      ]
    },
    "applyLink": "https://csb.gov.in"
  },
  {
    "id": "natural-farming",
    "name": "Community managed natural farming support",
    "category": "agriculture",
    "level": "central",
    "benefit": "Training and input support for low-cost natural farming",
    "applyAt": "State agriculture department under RKVY",
    "documents": [
      "Aadhaar",
      "land records"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "community",
        "crop",
        "desi kheti",
        "ekar",
        "farmer",
        "jeevamrut",
        "kheti",
        "kisan",
        "land",
        "natural farming",
        "organic",
        "seed"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "pragati",
    "name": "Pragati Scholarship for Girls",
    "category": "education",
    "level": "central",
    "benefit": "Fee support plus a monthly maintenance allowance for girls in technical courses",
    "applyAt": "National Scholarship Portal or AICTE Pragati",
    "documents": [
      "Aadhaar",
      "12th marksheet",
      "income certificate",
      "college ID",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 800000,
      "gender": "female",
      "minAge": 16,
      "keywords": [
        "admission",
        "college",
        "diploma",
        "engineering",
        "fees",
        "girl",
        "marksheet",
        "padhai",
        "polytechnic",
        "pragati",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "nsp-post-matric",
    "name": "National Scholarship Portal post-matric scholarship",
    "category": "education",
    "level": "central",
    "benefit": "Need-based scholarship after class 10 or 12",
    "applyAt": "scholarships.gov.in",
    "documents": [
      "Aadhaar",
      "marksheet",
      "income certificate",
      "caste certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 15,
      "keywords": [
        "admission",
        "college",
        "fees",
        "marksheet",
        "nsp post matric",
        "padhai",
        "post matric",
        "scholarship",
        "school",
        "student",
        "study",
        "undergraduate"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "nsp-pre-matric",
    "name": "National Scholarship Portal pre-matric scholarship",
    "category": "education",
    "level": "central",
    "benefit": "Scholarship for students in class 9 and 10",
    "applyAt": "scholarships.gov.in",
    "documents": [
      "Aadhaar",
      "marksheet",
      "income certificate",
      "caste certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 10,
      "keywords": [
        "10th",
        "9th",
        "admission",
        "college",
        "fees",
        "marksheet",
        "nsp pre matric",
        "padhai",
        "pre matric",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "nmmms",
    "name": "National Means-cum-Merit Scholarship",
    "category": "education",
    "level": "central",
    "benefit": "Rs 12,000 a year for class 8 students from families below Rs 3.5 lakh",
    "applyAt": "State education department through the scholarship portal",
    "documents": [
      "Aadhaar",
      "class 8 marksheet",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 350000,
      "gender": "any",
      "minAge": 13,
      "keywords": [
        "admission",
        "class 8",
        "college",
        "exam",
        "fees",
        "marksheet",
        "merit",
        "nmmms",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "pm-yasasvi",
    "name": "PM YASASVI scholarship for OBC, ST and minority students",
    "category": "education",
    "level": "central",
    "benefit": "Scholarship and coaching support for students from class 9 to PhD",
    "applyAt": "National Scholarship Portal",
    "documents": [
      "Aadhaar",
      "marksheet",
      "income certificate",
      "caste certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 800000,
      "gender": "any",
      "minAge": 14,
      "keywords": [
        "admission",
        "college",
        "fees",
        "marksheet",
        "minority",
        "obc",
        "padhai",
        "pm yasasvi",
        "scholarship",
        "school",
        "st",
        "student",
        "study",
        "yasasvi"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "single-girl-child",
    "name": "National scholarship for a single girl child",
    "category": "education",
    "level": "central",
    "benefit": "Rs 50,000 towards higher education of a single girl child",
    "applyAt": "Scholarships portal or CBSE",
    "documents": [
      "Aadhaar",
      "12th marksheet",
      "income certificate",
      "affidavit"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 800000,
      "gender": "female",
      "minAge": 16,
      "keywords": [
        "admission",
        "beti",
        "college",
        "fees",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "single girl",
        "single girl child",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "uchattar",
    "name": "AICTE PG scholarship for technical postgraduates",
    "category": "education",
    "level": "central",
    "benefit": "Maintenance allowance for postgraduate students in AICTE courses",
    "applyAt": "AICTE or the scholarship portal",
    "documents": [
      "Aadhaar",
      "graduation marksheet",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 800000,
      "gender": "any",
      "minAge": 20,
      "keywords": [
        "admission",
        "aicte",
        "college",
        "fees",
        "marksheet",
        "masters",
        "mtech",
        "padhai",
        "pg",
        "postgraduate",
        "scholarship",
        "school",
        "student",
        "study",
        "uchattar"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "pg-rank",
    "name": "Postgraduate scholarship for university rank holders",
    "category": "education",
    "level": "central",
    "benefit": "Monthly allowance for students who won a university rank",
    "applyAt": "UGC or the scholarship portal",
    "documents": [
      "Aadhaar",
      "rank certificate",
      "marksheet"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 20,
      "keywords": [
        "admission",
        "college",
        "fees",
        "marksheet",
        "merit",
        "padhai",
        "pg",
        "pg rank",
        "postgraduate",
        "rank",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "pg-medical",
    "name": "Aarogya scholarship for postgraduate medical students",
    "category": "education",
    "level": "central",
    "benefit": "Stipend support for postgraduate medical and nursing students",
    "applyAt": "State health department or the scholarship portal",
    "documents": [
      "Aadhaar",
      "MBBS marksheets",
      "admission letter"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 21,
      "keywords": [
        "aarogya",
        "admission",
        "college",
        "fees",
        "marksheet",
        "medical",
        "neet",
        "nursing",
        "padhai",
        "pg",
        "pg medical",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "mining-scholarship",
    "name": "Scholarship for students from mining-affected areas",
    "category": "education",
    "level": "central",
    "benefit": "Scholarship for school and college students in mining-affected districts",
    "applyAt": "District mining office or the scholarship portal",
    "documents": [
      "Aadhaar",
      "marksheet",
      "residence proof"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 450000,
      "gender": "any",
      "minAge": 10,
      "keywords": [
        "admission",
        "college",
        "fees",
        "marksheet",
        "mining",
        "mining scholarship",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "ner-scholarship",
    "name": "Scholarship for students from the North Eastern Region",
    "category": "education",
    "level": "central",
    "benefit": "Scheme-specific scholarship for NER students studying in the mainland",
    "applyAt": "Ministry of DoNER through the scholarship portal",
    "documents": [
      "Aadhaar",
      "marksheet",
      "NER domicile"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "admission",
        "college",
        "fees",
        "marksheet",
        "ner",
        "ner scholarship",
        "north east",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "sports-scholarship",
    "name": "National scholarship for sportspersons",
    "category": "education",
    "level": "central",
    "benefit": "Scholarship for students who represented at state or national level",
    "applyAt": "Khelo India or the state sports authority",
    "documents": [
      "Aadhaar",
      "sports certificate",
      "marksheet"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 12,
      "keywords": [
        "admission",
        "athletics",
        "college",
        "fees",
        "khelo",
        "marksheet",
        "padhai",
        "player",
        "scholarship",
        "school",
        "sports",
        "sports scholarship",
        "student",
        "study"
      ]
    },
    "applyLink": "https://sportsauthorityofindia.nic.in"
  },
  {
    "id": "eklavya",
    "name": "Eklavya Model Residential School for ST students",
    "category": "education",
    "level": "central",
    "benefit": "Free residential schooling with hostel and books for classes 6 to 12",
    "applyAt": "State tribal welfare department",
    "documents": [
      "Aadhaar",
      "ST certificate",
      "previous marksheet"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 11,
      "keywords": [
        "admission",
        "ashram",
        "college",
        "eklavya",
        "fees",
        "marksheet",
        "padhai",
        "residential",
        "scholarship",
        "school",
        "st",
        "student",
        "study",
        "tribal"
      ]
    },
    "applyLink": "https://tribal.nic.in"
  },
  {
    "id": "disability-fellowship",
    "name": "National fellowship and scholarship for students with disability",
    "category": "education",
    "level": "central",
    "benefit": "Scholarship for students with at least 40% disability",
    "applyAt": "UGC or the district disability officer",
    "documents": [
      "Aadhaar",
      "disability certificate",
      "marksheet"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "admission",
        "college",
        "disability fellowship",
        "divyang",
        "fees",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "special",
        "student",
        "study"
      ]
    },
    "applyLink": "https://www.ugc.gov.in"
  },
  {
    "id": "pm-cares-scholarship",
    "name": "PM CARES special scholarship for higher education",
    "category": "education",
    "level": "central",
    "benefit": "Fee and maintenance support for meritorious students from weaker sections",
    "applyAt": "PM CARES portal through the state nodal agency",
    "documents": [
      "Aadhaar",
      "12th marksheet",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 600000,
      "gender": "any",
      "minAge": 17,
      "keywords": [
        "admission",
        "college",
        "fees",
        "marksheet",
        "padhai",
        "pm cares",
        "pm cares scholarship",
        "scholarship",
        "school",
        "student",
        "study",
        "undergraduate"
      ]
    },
    "applyLink": "https://pmcares.gov.in"
  },
  {
    "id": "pre-matric-sc",
    "name": "Pre-matric scholarship for SC students",
    "category": "education",
    "level": "central",
    "benefit": "Annual scholarship for SC students in class 9 and 10",
    "applyAt": "Scheduled Caste Welfare department or the scholarship portal",
    "documents": [
      "Aadhaar",
      "SC certificate",
      "marksheet",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 10,
      "keywords": [
        "admission",
        "college",
        "fees",
        "marksheet",
        "padhai",
        "pre matric",
        "pre matric sc",
        "prematric",
        "sc",
        "scheduled caste",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "post-matric-sc",
    "name": "Post-matric scholarship for SC students",
    "category": "education",
    "level": "central",
    "benefit": "Full fees plus maintenance for SC students after class 10",
    "applyAt": "Scheduled Caste Welfare department or the scholarship portal",
    "documents": [
      "Aadhaar",
      "SC certificate",
      "marksheet",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 15,
      "keywords": [
        "admission",
        "college",
        "fees",
        "marksheet",
        "padhai",
        "post matric",
        "post matric sc",
        "postmatric",
        "sc",
        "scheduled caste",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "post-matric-st",
    "name": "Post-matric scholarship for ST students",
    "category": "education",
    "level": "central",
    "benefit": "Full fees plus maintenance for ST students after class 10",
    "applyAt": "Tribal Welfare department or the scholarship portal",
    "documents": [
      "Aadhaar",
      "ST certificate",
      "marksheet",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 15,
      "keywords": [
        "admission",
        "college",
        "fees",
        "marksheet",
        "padhai",
        "post matric st",
        "postmatric",
        "scheduled tribe",
        "scholarship",
        "school",
        "st",
        "student",
        "study",
        "tribal"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "ebc-scholarship",
    "name": "Scholarship for Economically Backward Classes",
    "category": "education",
    "level": "central",
    "benefit": "Fee assistance for EBC and Denotified community students",
    "applyAt": "Backward Classes Welfare department",
    "documents": [
      "Aadhaar",
      "EBC certificate",
      "marksheet",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "admission",
        "backward",
        "college",
        "denotified",
        "ebc",
        "ebc scholarship",
        "fees",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "pm-vidya",
    "name": "PM e-VIDYA free digital lessons",
    "category": "education",
    "level": "central",
    "benefit": "Free curriculum lessons on TV, radio and online",
    "applyAt": "Swayam Prabha, DIKSHA or the NCERT portal",
    "documents": [
      "None needed"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 6,
      "keywords": [
        "admission",
        "classes",
        "college",
        "fees",
        "marksheet",
        "online",
        "padhai",
        "pm vidya",
        "scholarship",
        "school",
        "student",
        "study",
        "video"
      ]
    },
    "applyLink": "https://ncert.nic.in"
  },
  {
    "id": "swayam",
    "name": "SWAYAM free online courses with credit",
    "category": "education",
    "level": "central",
    "benefit": "Free courses from IITs and central universities with credit transfer",
    "applyAt": "swayam.gov.in",
    "documents": [
      "Aadhaar",
      "marksheet"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "admission",
        "college",
        "course",
        "credit",
        "fees",
        "marksheet",
        "mooc",
        "online",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study",
        "swayam"
      ]
    },
    "applyLink": "https://swayam.gov.in"
  },
  {
    "id": "pmjay",
    "name": "Ayushman Bharat PM-JAY health cover",
    "category": "health",
    "level": "central",
    "benefit": "Health cover up to Rs 5 lakh per family per year in empanelled hospitals",
    "applyAt": "Empanelled hospital or a CSC; pmjay.gov.in",
    "documents": [
      "Aadhaar",
      "ration card or SECC details"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "ayushman",
        "bimari",
        "cancer",
        "dawai",
        "dialysis",
        "doctor",
        "golden card",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "pmjay",
        "surgery",
        "treatment"
      ]
    },
    "applyLink": "https://pmjay.gov.in"
  },
  {
    "id": "abha",
    "name": "Ayushman Bharat Health Account card",
    "category": "health",
    "level": "central",
    "benefit": "Free digital health ID that keeps records and speeds up treatment",
    "applyAt": "abha.gov.in or any CSC",
    "documents": [
      "Aadhaar",
      "mobile number"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "student",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "abha",
        "ayushman",
        "bimari",
        "dawai",
        "digital health id",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "records",
        "treatment"
      ]
    },
    "applyLink": "https://abha.gov.in"
  },
  {
    "id": "janani",
    "name": "Janani Suraksha Yojana delivery assistance",
    "category": "health",
    "level": "central",
    "benefit": "Cash assistance for institutional delivery",
    "applyAt": "Government hospital, ANM or ASHA",
    "documents": [
      "Aadhaar",
      "MCP card",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "baby",
        "bimari",
        "dawai",
        "delivery",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "janani",
        "medicine",
        "operation",
        "prasan",
        "pregnant",
        "treatment"
      ]
    },
    "applyLink": "https://nhm.gov.in"
  },
  {
    "id": "pjsmy",
    "name": "Free antenatal check-up under Surakshit Matritva Abhiyan",
    "category": "health",
    "level": "central",
    "benefit": "Free antenatal consultation and medicines on the 9th of every month",
    "applyAt": "Government hospital on the 9th",
    "documents": [
      "Aadhaar",
      "MCP card"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bimari",
        "checkup",
        "dawai",
        "doctor",
        "government hospital",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "mother",
        "operation",
        "pjsmy",
        "pregnancy",
        "treatment"
      ]
    },
    "applyLink": "https://pjsmy.in"
  },
  {
    "id": "ncd-free-care",
    "name": "Free cancer, dialysis and cardiac care at district hospitals",
    "category": "health",
    "level": "central",
    "benefit": "Free or subsidised dialysis, chemotherapy and basic cardiac treatment",
    "applyAt": "District hospital NCD unit",
    "documents": [
      "Aadhaar",
      "medical records"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 500000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "bimari",
        "cancer",
        "chemo",
        "dawai",
        "dialysis",
        "doctor",
        "health",
        "heart",
        "hospital",
        "ilaj",
        "medicine",
        "ncd free care",
        "operation",
        "treatment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "janaushadhi",
    "name": "Jan Aushadhi generic medicines",
    "category": "health",
    "level": "central",
    "benefit": "Generic medicines at 50 to 90% lower prices",
    "applyAt": "Nearest Pradhan Mantri Jan Aushadhi Kendra",
    "documents": [
      "Aadhaar",
      "prescription"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "student",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "bimari",
        "cheap",
        "dawai",
        "doctor",
        "generic",
        "health",
        "hospital",
        "ilaj",
        "janaushadhi",
        "medicine",
        "operation",
        "pharmacy",
        "treatment"
      ]
    },
    "applyLink": "https://janaushadhi.gov.in"
  },
  {
    "id": "rbsk",
    "name": "Child health screening and free treatment",
    "category": "health",
    "level": "central",
    "benefit": "Free screening and treatment for children for listed conditions",
    "applyAt": "Anganwadi or PHC",
    "documents": [
      "Aadhaar",
      "birth certificate",
      "child health card"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "bachcha",
        "bimari",
        "child",
        "dawai",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "rbsk",
        "screening",
        "treatment"
      ]
    },
    "applyLink": "https://rbk.mohfw.gov.in"
  },
  {
    "id": "tele-manas",
    "name": "Tele-MANAS free mental health counselling",
    "category": "health",
    "level": "central",
    "benefit": "Free 24x7 counselling in regional languages",
    "applyAt": "Call 14416 or the DigiMind app",
    "documents": [
      "Mobile number"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "student",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 10,
      "keywords": [
        "anxiety",
        "bimari",
        "dawai",
        "depression",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "manas",
        "medicine",
        "mental",
        "operation",
        "sleep",
        "tele manas",
        "telemanas",
        "tension",
        "treatment"
      ]
    },
    "applyLink": "https://telemanas.mohfw.gov.in"
  },
  {
    "id": "pm-abhyam",
    "name": "PM Abhyam free cancer, heart and kidney care",
    "category": "health",
    "level": "central",
    "benefit": "Free treatment for cancer, heart and kidney disease irrespective of income",
    "applyAt": "Empanelled government hospital",
    "documents": [
      "Aadhaar",
      "income or BPL proof",
      "medical records"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 500000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "bimari",
        "cancer",
        "dawai",
        "dialysis",
        "doctor",
        "health",
        "heart",
        "hospital",
        "ilaj",
        "kidney",
        "medicine",
        "operation",
        "pm abhyam",
        "treatment"
      ]
    },
    "applyLink": "https://pmabhyam.gov.in"
  },
  {
    "id": "ujjwala",
    "name": "Pradhan Mantri Ujjwala Yojana LPG connection",
    "category": "women",
    "level": "central",
    "benefit": "LPG connection with subsidy on the deposit and a free first refill",
    "applyAt": "Nearest LPG distributor",
    "documents": [
      "Aadhaar",
      "BPL or ration card",
      "bank account of the woman",
      "address proof"
    ],
    "eligibility": {
      "occupations": [
        "woman",
        "farmer",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "beti",
        "chulha",
        "connection",
        "cylinder",
        "gas",
        "ladies",
        "lpg",
        "mahila",
        "mother",
        "pradhan",
        "ujjwala",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.pmuy.gov.in"
  },
  {
    "id": "sukanya",
    "name": "Sukanya Samriddhi girl child savings account",
    "category": "women",
    "level": "central",
    "benefit": "High-interest savings account for a girl child below 10 years",
    "applyAt": "Post office or an authorised bank",
    "documents": [
      "Aadhaar of parent",
      "birth certificate of the girl"
    ],
    "eligibility": {
      "occupations": [
        "woman",
        "farmer",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bachchi",
        "beti",
        "deposit",
        "girl",
        "ladies",
        "mahila",
        "mother",
        "saving",
        "sukanya",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.nsiindia.gov.in"
  },
  {
    "id": "matritva-benefit",
    "name": "Paid maternity benefit for women workers",
    "category": "women",
    "level": "central",
    "benefit": "Cash maternity benefit for women covered under ESIC",
    "applyAt": "ESIC office or the employer",
    "documents": [
      "Aadhaar",
      "ESIC card",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "baby",
        "beti",
        "ladies",
        "mahila",
        "maternity",
        "matritva benefit",
        "mother",
        "paid",
        "paid leave",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.esic.in"
  },
  {
    "id": "women-hostel",
    "name": "Subsidised hostel for working women and students",
    "category": "women",
    "level": "central",
    "benefit": "Low-cost hostel for women working or studying away from home",
    "applyAt": "District Women Development Officer",
    "documents": [
      "Aadhaar",
      "employment or admission proof",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "woman",
        "worker",
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "beti",
        "hostel",
        "ladies",
        "mahila",
        "mother",
        "pg",
        "subsidised",
        "wife",
        "woman",
        "women hostel",
        "working women"
      ]
    },
    "applyLink": "https://wcd.nic.in"
  },
  {
    "id": "creche",
    "name": "Creche support for working mothers",
    "category": "women",
    "level": "central",
    "benefit": "Subsidised crèche near the workplace or construction site",
    "applyAt": "District Women and Child Development office",
    "documents": [
      "Aadhaar",
      "child birth certificate",
      "address proof"
    ],
    "eligibility": {
      "occupations": [
        "woman",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bachcha",
        "beti",
        "child care",
        "creche",
        "ladies",
        "mahila",
        "mother",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://wcd.nic.in"
  },
  {
    "id": "women-entrepreneurship",
    "name": "Women Entrepreneurship Platform support",
    "category": "women",
    "level": "central",
    "benefit": "Free handholding, mentorship and scheme matching for women entrepreneurs",
    "applyAt": "wep.gov.in",
    "documents": [
      "Aadhaar",
      "business idea or GST"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "beti",
        "business",
        "entrepreneur",
        "ladies",
        "mahila",
        "mentor",
        "mother",
        "startup",
        "wife",
        "woman",
        "women",
        "women entrepreneurship"
      ]
    },
    "applyLink": "https://wep.gov.in"
  },
  {
    "id": "nsap-old-age",
    "name": "Indira Gandhi National Old Age Pension",
    "category": "senior",
    "level": "central",
    "benefit": "Monthly pension for citizens above 60 from BPL households, topped up by the state",
    "applyAt": "Block or tehsil social welfare office, or e-District",
    "documents": [
      "Aadhaar",
      "age proof",
      "BPL card",
      "bank passbook",
      "2 photos"
    ],
    "eligibility": {
      "occupations": [
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 150000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "budhapa",
        "grandfather",
        "indira",
        "nsap old age",
        "old age",
        "pension",
        "senior",
        "vridh"
      ]
    },
    "applyLink": "https://nsap.nic.in"
  },
  {
    "id": "nsap-widow",
    "name": "Indira Gandhi Widow and Deserted Woman Pension",
    "category": "senior",
    "level": "central",
    "benefit": "Monthly pension for BPL widows and deserted women aged 40 to 60",
    "applyAt": "Tehsil social welfare office or e-District",
    "documents": [
      "Aadhaar",
      "death certificate or proof of desertion",
      "BPL card",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 150000,
      "gender": "female",
      "minAge": 40,
      "keywords": [
        "alone",
        "budhapa",
        "deserted",
        "grandfather",
        "indira",
        "nsap widow",
        "old age",
        "pension",
        "senior",
        "vridh",
        "widow"
      ]
    },
    "applyLink": "https://nsap.nic.in"
  },
  {
    "id": "nsap-disability",
    "name": "National Disability Pension",
    "category": "disability",
    "level": "central",
    "benefit": "Monthly pension for people with 80% or more disability",
    "applyAt": "District disability officer or e-District",
    "documents": [
      "Aadhaar",
      "disability certificate",
      "income proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 150000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "disability",
        "disabled",
        "divyang",
        "handicap",
        "nsap disability",
        "severe disability"
      ]
    },
    "applyLink": "https://nsap.nic.in"
  },
  {
    "id": "family-care-grant",
    "name": "Family care grant for a severe disability caregiver",
    "category": "disability",
    "level": "central",
    "benefit": "Monthly grant for the caregiver of a person with severe disability",
    "applyAt": "District disability officer",
    "documents": [
      "Aadhaar",
      "disability certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 150000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "caregiver",
        "disability",
        "disabled",
        "divyang",
        "family",
        "family care grant",
        "handicap",
        "severe disability"
      ]
    },
    "applyLink": "https://nsap.nic.in"
  },
  {
    "id": "adip",
    "name": "ADIP free assistive devices",
    "category": "disability",
    "level": "central",
    "benefit": "Free or subsidised calipers, hearing aids, wheelchairs and corrective surgery",
    "applyAt": "District disability officer or an ADIP centre",
    "documents": [
      "Aadhaar",
      "disability certificate",
      "prescription",
      "photos"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 100000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "adip",
        "caliper",
        "device",
        "disability",
        "disabled",
        "divyang",
        "handicap",
        "hearing aid",
        "operation",
        "wheelchair"
      ]
    },
    "applyLink": "https://depw.gov.in"
  },
  {
    "id": "niramaya",
    "name": "Niramaya health insurance for persons with disability",
    "category": "disability",
    "level": "central",
    "benefit": "Cashless health insurance cover for registered disabled persons",
    "applyAt": "District disability officer",
    "documents": [
      "Aadhaar",
      "disability certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 10,
      "keywords": [
        "disability",
        "disabled",
        "divyang",
        "handicap",
        "health",
        "insurance",
        "niramaya"
      ]
    },
    "applyLink": "https://niramaya.gov.in"
  },
  {
    "id": "ud-id",
    "name": "Unique Disability ID and disability certificate",
    "category": "disability",
    "level": "central",
    "benefit": "A national disability certificate and ID usable for every scheme",
    "applyAt": "District disability officer or the UDID portal",
    "documents": [
      "Aadhaar",
      "medical certificate",
      "photos"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "student",
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "certificate",
        "disability",
        "disabled",
        "divyang",
        "handicap",
        "id",
        "ud id",
        "ud-id",
        "unique"
      ]
    },
    "applyLink": "https://www.udidividhaan.gov.in"
  },
  {
    "id": "pm-janman",
    "name": "PM-JANMAN for particularly vulnerable tribal groups",
    "category": "social",
    "level": "central",
    "benefit": "Converged housing, health, education and livelihood support for PVTGs",
    "applyAt": "District tribal welfare office or tehsil",
    "documents": [
      "Aadhaar",
      "ST certificate",
      "residence proof"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "adivasi",
        "backward",
        "caste",
        "jaati",
        "janajati",
        "nomadic tribe",
        "obc",
        "pm janman",
        "pmjanman",
        "pvtg",
        "sc",
        "st",
        "tribe"
      ]
    },
    "applyLink": "https://tribal.nic.in"
  },
  {
    "id": "pm-canp",
    "name": "PM CARE and nutrition support for Denotified Tribes",
    "category": "social",
    "level": "central",
    "benefit": "Nutrition, education and shelter support for Denotified and Nomadic Tribes",
    "applyAt": "State SC/ST or Minor Welfare department",
    "documents": [
      "Aadhaar",
      "caste certificate",
      "residence proof"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "backward",
        "caste",
        "dnt",
        "jaati",
        "nomadic",
        "obc",
        "pm canp",
        "sc",
        "st",
        "tribe"
      ]
    },
    "applyLink": "https://socialjustice.gov.in"
  },
  {
    "id": "mgnrega",
    "name": "MGNREGA 100 days of guaranteed work",
    "category": "employment",
    "level": "central",
    "benefit": "At least 100 days of paid unskilled work per household every year",
    "applyAt": "Gram panchayat with a job card, or the state NREGA portal",
    "documents": [
      "Aadhaar",
      "job card",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "100 days",
        "100 din",
        "berozgari",
        "din",
        "guarantee",
        "job",
        "kaam",
        "mazdoori",
        "mgnrega",
        "naukri",
        "rozgar",
        "unemployed",
        "work"
      ]
    },
    "applyLink": "https://nrega.nic.in"
  },
  {
    "id": "naps",
    "name": "National Apprenticeship Promotion Scheme",
    "category": "skill",
    "level": "central",
    "benefit": "Stipend during on-the-job training plus support to the employer",
    "applyAt": "Apprenticeship portal with a registered employer",
    "documents": [
      "Aadhaar",
      "ITI or diploma certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "apprenticeship",
        "certificate",
        "course",
        "job",
        "naps",
        "seekhna",
        "skill",
        "stipend",
        "training"
      ]
    },
    "applyLink": "https://www.apprenticeshipportal.gov.in"
  },
  {
    "id": "pmkvyskill",
    "name": "Free short-term skill training with placement help",
    "category": "skill",
    "level": "central",
    "benefit": "No-cost skill course with certification and placement assistance",
    "applyAt": "Nearest PMKVY training centre or Skill India portal",
    "documents": [
      "Aadhaar",
      "10th or 12th marksheet",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker",
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 15,
      "keywords": [
        "certificate",
        "course",
        "kaushal",
        "placement",
        "pmkvyskill",
        "seekhna",
        "skill",
        "training"
      ]
    },
    "applyLink": "https://www.skillindia.gov.in"
  },
  {
    "id": "construction-welfare",
    "name": "Building and construction worker welfare card",
    "category": "labour",
    "level": "central",
    "benefit": "Registration unlocking housing, education, pension and accident benefits",
    "applyAt": "District Building and Other Construction Workers Welfare Board",
    "documents": [
      "Aadhaar",
      "proof of 20 days work",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "building",
        "construction",
        "construction welfare",
        "labour",
        "mazdoor",
        "shram",
        "shram card",
        "unorganised",
        "worker"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "esic",
    "name": "ESIC medical and cash benefits for low-wage workers",
    "category": "labour",
    "level": "central",
    "benefit": "Medical care, sickness and maternity benefit for organised sector employees",
    "applyAt": "Employer or the ESIC branch office",
    "documents": [
      "Aadhaar",
      "ESIC card",
      "wage proof"
    ],
    "eligibility": {
      "occupations": [
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "esic",
        "factory",
        "insurance",
        "labour",
        "mazdoor",
        "shram",
        "sick",
        "unorganised",
        "wages",
        "worker"
      ]
    },
    "applyLink": "https://www.esic.in"
  },
  {
    "id": "epf",
    "name": "Provident fund and pension for organised employees",
    "category": "finance",
    "level": "central",
    "benefit": "Employer and employee contributions with pension and withdrawal rules",
    "applyAt": "Employer or the EPFO member portal",
    "documents": [
      "Aadhaar",
      "UAN",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "account",
        "bank",
        "bima",
        "epf",
        "insurance",
        "khata",
        "pension",
        "pf",
        "provident",
        "withdrawal"
      ]
    },
    "applyLink": "https://www.epfindia.gov.in"
  },
  {
    "id": "e-shram",
    "name": "e-Shram unorganised worker card",
    "category": "labour",
    "level": "central",
    "benefit": "Free Universal Account Number that links social security for unorganised workers",
    "applyAt": "eshram.gov.in or a CSC",
    "documents": [
      "Aadhaar",
      "bank passbook",
      "mobile number"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "e shram",
        "eshram",
        "labour",
        "labour card",
        "mazdoor",
        "shram",
        "uan",
        "unorganised",
        "worker"
      ]
    },
    "applyLink": "https://eshram.gov.in"
  },
  {
    "id": "svanidhi",
    "name": "PM SVANidhi street vendor working capital loan",
    "category": "business",
    "level": "central",
    "benefit": "Working capital loan starting at Rs 10,000 with interest subsidy",
    "applyAt": "ULB, a lending bank or the PM SVANidhi portal",
    "documents": [
      "Aadhaar",
      "vendor certificate or letter of recommendation",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "business",
        "dukan",
        "hawker",
        "loan",
        "rehdi",
        "shop",
        "startup",
        "street",
        "svanidhi",
        "thela",
        "udhyog",
        "vendor",
        "vyapar"
      ]
    },
    "applyLink": "https://pmsvanidhi.mohua.gov.in"
  },
  {
    "id": "mudra",
    "name": "Pradhan Mantri MUDRA collateral-free business loan",
    "category": "business",
    "level": "central",
    "benefit": "Loan up to Rs 10 lakh without collateral under Shishu, Kishore and Tarun",
    "applyAt": "Bank, MFI or mudra.org.in",
    "documents": [
      "Aadhaar",
      "business details",
      "bank passbook",
      "quotations"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "farmer",
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "business",
        "dukan",
        "loan",
        "mudra",
        "pradhan",
        "shop",
        "small business",
        "startup",
        "udhyog",
        "vyapar"
      ]
    },
    "applyLink": "https://www.mudra.org.in"
  },
  {
    "id": "pmegp",
    "name": "PMEGP subsidy for a new micro enterprise",
    "category": "business",
    "level": "central",
    "benefit": "Subsidised term loan up to Rs 50 lakh for a new unit",
    "applyAt": "KVIC district office or kviconline.gov.in",
    "documents": [
      "Aadhaar",
      "10th marksheet",
      "project report",
      "bank details"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "woman",
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 19,
      "keywords": [
        "business",
        "dukan",
        "employment",
        "industry",
        "kvi",
        "loan",
        "pmegp",
        "shop",
        "startup",
        "udhyog",
        "unit",
        "vyapar"
      ]
    },
    "applyLink": "https://kviconline.gov.in"
  },
  {
    "id": "stand-up-india",
    "name": "Stand-Up India loan for SC, ST and women entrepreneurs",
    "category": "business",
    "level": "central",
    "benefit": "Bank loan between Rs 10 lakh and Rs 1 crore for a first enterprise",
    "applyAt": "Any bank branch or standupmitra.in",
    "documents": [
      "Aadhaar",
      "caste or gender proof",
      "project report",
      "bank details"
    ],
    "eligibility": {
      "occupations": [
        "woman",
        "farmer",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "business",
        "dukan",
        "greenfield",
        "loan",
        "sc",
        "shop",
        "st",
        "stand up india",
        "standup",
        "startup",
        "udhyog",
        "vyapar",
        "women loan"
      ]
    },
    "applyLink": "https://www.standupmitra.in"
  },
  {
    "id": "startup-seed",
    "name": "Startup India Seed Fund",
    "category": "business",
    "level": "central",
    "benefit": "Grant and seed money for an early-stage startup through an incubator",
    "applyAt": "Startup India portal via an incubator",
    "documents": [
      "Aadhaar",
      "pitch deck",
      "incubator selection letter"
    ],
    "eligibility": {
      "occupations": [
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "business",
        "dukan",
        "incubator",
        "innovation",
        "loan",
        "pitch",
        "seed",
        "shop",
        "startup",
        "startup seed",
        "udhyog",
        "vyapar"
      ]
    },
    "applyLink": "https://seedfund.startupindia.gov.in"
  },
  {
    "id": "vishwakarma",
    "name": "PM Vishwakarma support for artisans and craftsmen",
    "category": "employment",
    "level": "central",
    "benefit": "Toolkit incentive, training and collateral-free loan up to Rs 3 lakh",
    "applyAt": "pmfvy.com through a bank or CSC",
    "documents": [
      "Aadhaar",
      "community or caste certificate",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "artisan",
        "barber",
        "berozgari",
        "blacksmith",
        "carpenter",
        "job",
        "kaam",
        "mazdoori",
        "naukri",
        "rozgar",
        "tailor",
        "unemployed",
        "vishwakarma",
        "viswakarma"
      ]
    },
    "applyLink": "https://www.pmfvy.com"
  },
  {
    "id": "shg-nrlm",
    "name": "Self-help group bank linkage under DAY-NRLM",
    "category": "finance",
    "level": "central",
    "benefit": "SHG registration with working capital and bank credit links",
    "applyAt": "Block community resource person or district NRLM unit",
    "documents": [
      "Aadhaar",
      "bank passbook",
      "group registration"
    ],
    "eligibility": {
      "occupations": [
        "woman",
        "farmer",
        "worker"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "account",
        "bank",
        "bima",
        "group",
        "insurance",
        "khata",
        "mahila sangh",
        "mbp",
        "micro finance",
        "pension",
        "selfhelp",
        "shg",
        "shg nrlm"
      ]
    },
    "applyLink": "https://nrlm.gov.in"
  },
  {
    "id": "jan-dhan",
    "name": "Pradhan Mantri Jan Dhan Yojana zero-balance account",
    "category": "finance",
    "level": "central",
    "benefit": "Zero-balance account with a RuPay card and built-in accident cover",
    "applyAt": "Any bank branch or business correspondent point",
    "documents": [
      "Aadhaar",
      "mobile number",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "student",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 10,
      "keywords": [
        "account",
        "bank",
        "bima",
        "insurance",
        "jan dhan",
        "khata",
        "pension",
        "pradhan",
        "rupee card"
      ]
    },
    "applyLink": "https://pmjdy.gov.in"
  },
  {
    "id": "apy",
    "name": "Atal Pension Yojana",
    "category": "finance",
    "level": "central",
    "benefit": "Guaranteed monthly pension of Rs 1,000 to Rs 5,000 after age 60",
    "applyAt": "Any bank branch or the APAIS portal",
    "documents": [
      "Aadhaar",
      "bank passbook",
      "mobile number"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "farmer",
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "account",
        "apy",
        "atal",
        "bank",
        "bima",
        "contribute",
        "insurance",
        "khata",
        "nidhi",
        "pension",
        "retirement"
      ]
    },
    "applyLink": "https://www.npscra.nsdl.co.in"
  },
  {
    "id": "pmsby",
    "name": "Pradhan Mantri Suraksha Bima Yojana accident cover",
    "category": "finance",
    "level": "central",
    "benefit": "Rs 10 lakh accidental death and disability cover for about Rs 20 a year",
    "applyAt": "The bank where the savings account is held",
    "documents": [
      "Aadhaar",
      "bank passbook",
      "mobile number"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "student",
        "worker",
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "accident",
        "account",
        "bank",
        "bima",
        "cover",
        "insurance",
        "khata",
        "pension",
        "pmsby",
        "pradhan"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "pmjjby",
    "name": "Pradhan Mantri Jeevan Jyoti Bima Yojana life cover",
    "category": "finance",
    "level": "central",
    "benefit": "Rs 7.5 lakh life insurance for about Rs 450 a year",
    "applyAt": "The bank where the savings account is held",
    "documents": [
      "Aadhaar",
      "bank passbook",
      "mobile number"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "account",
        "bank",
        "bima",
        "claim",
        "cover",
        "insurance",
        "jeevan bima",
        "khata",
        "life insurance",
        "pension",
        "pmjjby",
        "pradhan"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "pmay-gramin",
    "name": "PMAY-Gramin pucca house assistance",
    "category": "housing",
    "level": "central",
    "benefit": "Financial assistance to build a pucca house in rural areas",
    "applyAt": "Gram panchayat or the rural development office",
    "documents": [
      "Aadhaar",
      "SECC or deprivation proof",
      "land or site details",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "awas",
        "flat",
        "ghar",
        "house",
        "housing",
        "kachcha",
        "makan",
        "pmay gramin",
        "pmaygramin",
        "pucca"
      ]
    },
    "applyLink": "https://pmayg.nic.in"
  },
  {
    "id": "pmay-urban",
    "name": "PMAY-Urban housing assistance",
    "category": "housing",
    "level": "central",
    "benefit": "Assistance or interest subsidy for an eligible urban house",
    "applyAt": "ULB, municipal office or the PMAY-U portal",
    "documents": [
      "Aadhaar",
      "income proof",
      "residence proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "woman",
        "student",
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 600000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "awas",
        "city house",
        "flat",
        "ghar",
        "house",
        "makan",
        "pmay urban",
        "pmayurban",
        "pucca",
        "urban"
      ]
    },
    "applyLink": "https://pmaymis.gov.in"
  },
  {
    "id": "pmay-clss",
    "name": "Interest subsidy on a home loan",
    "category": "housing",
    "level": "central",
    "benefit": "Interest subsidy on a home loan for eligible income groups",
    "applyAt": "A bank offering PMAY-linked housing loans",
    "documents": [
      "Aadhaar",
      "income proof",
      "loan documents",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "woman",
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 1800000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "awas",
        "emi",
        "flat",
        "ghar",
        "home loan",
        "house",
        "interest",
        "interest subsidy",
        "makan",
        "pmay clss",
        "pucca"
      ]
    },
    "applyLink": "https://pmaymis.gov.in"
  },
  {
    "id": "jjm",
    "name": "Jal Jeevan Mission household tap connection",
    "category": "utilities",
    "level": "central",
    "benefit": "Free household tap connection with a functional water supply",
    "applyAt": "Gram panchayat or the state Jal Jeevan Mission unit",
    "documents": [
      "Aadhaar",
      "house or land record",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "jjm",
        "nal",
        "paani",
        "shauchalaya",
        "tap",
        "toilet",
        "water",
        "water pipeline"
      ]
    },
    "applyLink": "https://jaljeevanmission.gov.in"
  },
  {
    "id": "sbm-toilet",
    "name": "Individual household toilet subsidy",
    "category": "utilities",
    "level": "central",
    "benefit": "Subsidy to build an individual household toilet",
    "applyAt": "Gram panchayat or ULB under SBM-Grameen",
    "documents": [
      "Aadhaar",
      "house record",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bathroom",
        "individual",
        "nal",
        "paani",
        "sbm toilet",
        "shauchalaya",
        "tap",
        "toilet",
        "water"
      ]
    },
    "applyLink": "https://sbm.gov.in"
  },
  {
    "id": "surya-ghar",
    "name": "PM Surya Ghar rooftop solar power",
    "category": "energy",
    "level": "central",
    "benefit": "Subsidy for a rooftop solar system, with surplus power sold to the DISCOM",
    "applyAt": "State DISCOM or pmsuryaghar.gov.in",
    "documents": [
      "Aadhaar",
      "electricity bill",
      "house ownership proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bijli",
        "current",
        "electricity",
        "electricity bill save",
        "power",
        "rooftop solar",
        "roshni",
        "solar",
        "surya",
        "surya ghar"
      ]
    },
    "applyLink": "https://pmsuryaghar.gov.in"
  },
  {
    "id": "solar-heater",
    "name": "Solar water heater subsidy",
    "category": "energy",
    "level": "central",
    "benefit": "Capital subsidy for a household solar water heating system",
    "applyAt": "State Nodal Agency or the MNRE portal",
    "documents": [
      "Aadhaar",
      "electricity bill",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "woman",
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bijli",
        "current",
        "electricity",
        "garam paani",
        "heater",
        "power",
        "roshni",
        "solar",
        "solar heater"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "improved-chulha",
    "name": "Improved smoke-free cook stove subsidy",
    "category": "energy",
    "level": "central",
    "benefit": "Subsidised cook stove that cuts firewood use and smoke",
    "applyAt": "State Nodal Agency for domestic energy",
    "documents": [
      "Aadhaar",
      "BPL or ration card",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "woman",
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bijli",
        "chulha",
        "current",
        "electricity",
        "improved",
        "improved chulha",
        "power",
        "roshni",
        "smoke",
        "solar",
        "stove",
        "wood"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "biogas",
    "name": "Household biogas plant subsidy",
    "category": "energy",
    "level": "central",
    "benefit": "Subsidy to install a household biogas plant on cattle dung",
    "applyAt": "KVIC or the state biogas nodal agency",
    "documents": [
      "Aadhaar",
      "land or cattle proof",
      "quotation"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "all"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bijli",
        "biogas",
        "current",
        "electricity",
        "gas plant",
        "gobar",
        "household",
        "power",
        "roshni",
        "solar"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "minority-post-matric",
    "name": "Post-matric scholarship for minority students",
    "category": "minority",
    "level": "central",
    "benefit": "Fee and maintenance support for students from minority communities",
    "applyAt": "State Minorities Welfare department or the scholarship portal",
    "documents": [
      "Aadhaar",
      "minority certificate",
      "marksheet",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 15,
      "keywords": [
        "christian",
        "community",
        "minority",
        "minority post matric",
        "muslim",
        "post matric",
        "postmatric",
        "sikh"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "nai-manzil",
    "name": "Nai Manzil scholarship and skill training for minority students",
    "category": "minority",
    "level": "central",
    "benefit": "Scholarship plus skill training for minority students up to postgraduate level",
    "applyAt": "State agency or the scholarship portal",
    "documents": [
      "Aadhaar",
      "minority certificate",
      "marksheet"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 17,
      "keywords": [
        "christian",
        "community",
        "minority",
        "muslim",
        "nai manzil",
        "scholarship",
        "sikh",
        "skill"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "naim-coaching",
    "name": "NAIM free coaching for competitive exams",
    "category": "minority",
    "level": "central",
    "benefit": "Coaching and a stipend for minority students preparing for competitive exams",
    "applyAt": "State agency through the scholarship portal",
    "documents": [
      "Aadhaar",
      "minority certificate",
      "marksheet"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "all"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 17,
      "keywords": [
        "christian",
        "coaching",
        "community",
        "competitive",
        "exams",
        "minority",
        "muslim",
        "naim",
        "naim coaching",
        "sikh",
        "upsc"
      ]
    },
    "applyLink": "https://scholarships.gov.in"
  },
  {
    "id": "ts-rythu-bharosa",
    "name": "Rythu Bharosa farm family support",
    "category": "agriculture",
    "level": "state",
    "benefit": "Annual direct assistance to eligible farm families through Rythu Bharosa Kendras",
    "applyAt": "Rythu Bharosa Kendra or the Village Officer",
    "documents": [
      "Aadhaar",
      "pahani or land record",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Telangana"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bharosa",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "rythu",
        "seed",
        "telangana",
        "ts rythu bharosa"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ts-chenithulu",
    "name": "Chenithulu free power for agriculture",
    "category": "energy",
    "level": "state",
    "benefit": "Free power connection and no electricity bill for agricultural pump sets",
    "applyAt": "District agricultural engineer or the power department",
    "documents": [
      "Aadhaar",
      "pahani",
      "dose copy",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Telangana"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bijli",
        "chenithulu",
        "current",
        "electricity",
        "free power",
        "power",
        "pump",
        "roshni",
        "solar",
        "telangana",
        "ts chenithulu"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ts-borewell",
    "name": "Telangana borewell and irrigation subsidy",
    "category": "agriculture",
    "level": "state",
    "benefit": "About half the cost of a borewell and connected irrigation work",
    "applyAt": "Mandal agriculture office or MESEVA",
    "documents": [
      "Aadhaar",
      "pahani",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Telangana"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "borewell",
        "crop",
        "ekar",
        "ekaralu",
        "farmer",
        "irrigation",
        "kheti",
        "kisan",
        "land",
        "pump",
        "seed",
        "telangana",
        "ts borewell"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ts-aarogyasri",
    "name": "Aarogyasri health cover",
    "category": "health",
    "level": "state",
    "benefit": "Cashless surgery and treatment beyond the central scheme ceiling",
    "applyAt": "Empanelled hospital or the Aarogyasri helpdesk",
    "documents": [
      "Aadhaar",
      "ration card",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "Telangana"
      ],
      "maxIncome": 500000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "aarogyasri",
        "bimari",
        "dawai",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "surgery",
        "telangana",
        "treatment",
        "ts aarogyasri"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ts-kalyana-kanakam",
    "name": "Kalyana Kanakam and Laksham marriage assistance",
    "category": "marriage",
    "level": "state",
    "benefit": "Cash assistance of about Rs 1 lakh for SC, BC and trans marriages",
    "applyAt": "Welfare department, municipal office or MESEVA",
    "documents": [
      "Aadhaar",
      "caste certificate",
      "marriage proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman",
        "worker",
        "farmer"
      ],
      "states": [
        "Telangana"
      ],
      "maxIncome": 500000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "dowry",
        "girl",
        "kalyana",
        "kanakam",
        "laksham",
        "marriage",
        "shadi",
        "shadida",
        "telangana",
        "ts kalyana kanakam",
        "vivah"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ts-bhagya-lakshmi",
    "name": "Bhagya Lakshmi marriage assistance",
    "category": "marriage",
    "level": "state",
    "benefit": "Cash assistance of about Rs 75,000 for the marriage of an eligible girl",
    "applyAt": "Welfare department or a MESEVA centre",
    "documents": [
      "Aadhaar",
      "income certificate",
      "marriage proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Telangana"
      ],
      "maxIncome": 500000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "bhagya",
        "bhagya lakshmi",
        "dowry",
        "girl",
        "marriage",
        "shadi",
        "shadida",
        "telangana",
        "ts bhagya lakshmi",
        "vivah"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ts-mahalaxmi-bus",
    "name": "Mahalaxmi free bus travel for women",
    "category": "women",
    "level": "state",
    "benefit": "Free travel for women on state transport buses",
    "applyAt": "No application; travel with an ID on TSRTC services",
    "documents": [
      "Aadhaar or ration card"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Telangana"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 8,
      "keywords": [
        "beti",
        "bus",
        "free",
        "ladies",
        "mahalaxmi",
        "mahila",
        "mother",
        "telangana",
        "travel",
        "ts mahalaxmi bus",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.tsrtc.telangana.gov.in"
  },
  {
    "id": "ts-unemployment",
    "name": "Telangana youth unemployment allowance",
    "category": "employment",
    "level": "state",
    "benefit": "Monthly allowance for registered unemployed degree holders",
    "applyAt": "Employment Exchange or the state portal",
    "documents": [
      "Aadhaar",
      "degree certificate",
      "domicile",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Telangana"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 21,
      "keywords": [
        "allowance",
        "berozgari",
        "job",
        "kaam",
        "mazdoori",
        "naukri",
        "rozgar",
        "telangana",
        "ts unemployment",
        "unemployed",
        "unemployment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ap-arogyasri",
    "name": "Arogyasri health cover",
    "category": "health",
    "level": "state",
    "benefit": "Cashless treatment and surgery for eligible families",
    "applyAt": "Empanelled hospital or the Arogyasri helpdesk",
    "documents": [
      "Aadhaar",
      "white or yellow ration card"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "maxIncome": 500000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "andhra",
        "ap arogyasri",
        "arogyasri",
        "bimari",
        "dawai",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "surgery",
        "treatment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ap-amma-vodi",
    "name": "Amma Vodi school support paid to mothers",
    "category": "women",
    "level": "state",
    "benefit": "Annual cash incentive to mothers who keep their children in school",
    "applyAt": "School headmaster or the Ward Sachivalayam",
    "documents": [
      "Aadhaar",
      "bank passbook",
      "child study certificate"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "amma",
        "amma vodi",
        "andhra",
        "ap amma vodi",
        "beti",
        "ladies",
        "mahila",
        "mother",
        "school",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ap-kanakia",
    "name": "NTR Kanakia Videsam marriage assistance",
    "category": "marriage",
    "level": "state",
    "benefit": "Cash assistance for the marriage of girls from eligible families",
    "applyAt": "Welfare department or the Ward Sachivalayam",
    "documents": [
      "Aadhaar",
      "income certificate",
      "marriage proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "maxIncome": 500000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "andhra",
        "ap kanakia",
        "dowry",
        "girl",
        "kanakia",
        "marriage",
        "shadi",
        "shadida",
        "vivah"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ap-vidya-kanuka",
    "name": "Jagananna Vidya Kanuka school supplies",
    "category": "education",
    "level": "state",
    "benefit": "Uniforms, books and supplies for government school students",
    "applyAt": "Government school or the Ward Sachivalayam",
    "documents": [
      "Aadhaar",
      "study certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 6,
      "keywords": [
        "admission",
        "andhra",
        "ap vidya kanuka",
        "books",
        "college",
        "fees",
        "jagananna",
        "kanuka",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study",
        "uniform",
        "vidya"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ap-thodu-bidda",
    "name": "Thodu Bidda seed and input support",
    "category": "agriculture",
    "level": "state",
    "benefit": "Direct seed and input support for farm families",
    "applyAt": "Rythu Bharosa Kendra",
    "documents": [
      "Aadhaar",
      "land records",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "andhra",
        "annadam",
        "ap thodu bidda",
        "bidda",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "seed",
        "thodu"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "haryana-post-matric",
    "name": "Haryana post-matric scholarship",
    "category": "education",
    "level": "state",
    "benefit": "Fee support and in many cases a full waiver for eligible category students",
    "applyAt": "Haryana scholarship portal or the college office",
    "documents": [
      "Aadhaar",
      "12th marksheet",
      "caste or income certificate",
      "Haryana domicile"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Haryana"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "admission",
        "college",
        "faridabad",
        "fees",
        "gurugram",
        "haryana",
        "haryana post matric",
        "marksheet",
        "padhai",
        "post matric",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://harchhatravratti.higheredu.hry.gov.in"
  },
  {
    "id": "haryana-old-age",
    "name": "Haryana Old Age Samman Allowance",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly samman allowance for eligible senior citizens",
    "applyAt": "Antyodaya SARAL or the social welfare office",
    "documents": [
      "Aadhaar",
      "age proof",
      "Haryana residence",
      "bank passbook",
      "2 photos"
    ],
    "eligibility": {
      "occupations": [
        "senior"
      ],
      "states": [
        "Haryana"
      ],
      "maxIncome": 200000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "budhapa",
        "grandfather",
        "haryana",
        "haryana old age",
        "old age",
        "pension",
        "samman",
        "senior",
        "vridh"
      ]
    },
    "applyLink": "https://saralharyana.gov.in"
  },
  {
    "id": "haryana-ashirwad",
    "name": "Ashirwad assistance for widows and single women",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly financial assistance for widows and deserted women",
    "applyAt": "Antyodaya SARAL or the social welfare office",
    "documents": [
      "Aadhaar",
      "death certificate or residence proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Haryana"
      ],
      "maxIncome": 200000,
      "gender": "female",
      "minAge": 40,
      "keywords": [
        "ashirwad",
        "budhapa",
        "grandfather",
        "haryana",
        "haryana ashirwad",
        "old age",
        "pension",
        "senior",
        "vridh",
        "widow"
      ]
    },
    "applyLink": "https://saralharyana.gov.in"
  },
  {
    "id": "haryana-saksham",
    "name": "Saksham disability allowance",
    "category": "disability",
    "level": "state",
    "benefit": "Monthly disability allowance and assistive device support",
    "applyAt": "SARAL portal or the District Social Defence Officer",
    "documents": [
      "Aadhaar",
      "disability certificate",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "student"
      ],
      "states": [
        "Haryana"
      ],
      "maxIncome": 200000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "disability",
        "disabled",
        "divyang",
        "handicap",
        "haryana",
        "haryana saksham",
        "saksham"
      ]
    },
    "applyLink": "https://saralharyana.gov.in"
  },
  {
    "id": "haryana-yuva-nidhi",
    "name": "Yuva Nidhi allowance for unemployed youth",
    "category": "employment",
    "level": "state",
    "benefit": "Monthly allowance for two years for job-seeking graduates and ITI holders",
    "applyAt": "State career portal or the Employment Exchange",
    "documents": [
      "Aadhaar",
      "degree or ITI certificate",
      "domicile",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Haryana"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 21,
      "keywords": [
        "berozgari",
        "haryana",
        "haryana yuva nidhi",
        "job",
        "kaam",
        "mazdoori",
        "naukri",
        "rozgar",
        "unemployed",
        "unemployment",
        "yuva",
        "yuva nidhi"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "haryana-irri-kisan",
    "name": "Irri-Kisan free power for agriculture",
    "category": "energy",
    "level": "state",
    "benefit": "Free electricity for agricultural tube wells",
    "applyAt": "Superintending Engineer of the power division",
    "documents": [
      "Aadhaar",
      "land records",
      "tubewell details"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Haryana"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bijli",
        "current",
        "electricity",
        "free power",
        "haryana",
        "haryana irri kisan",
        "irri kisan",
        "irrikisan",
        "power",
        "roshni",
        "solar",
        "tubewell"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "haryana-parivartan",
    "name": "Parivartan support for the poorest households",
    "category": "social",
    "level": "state",
    "benefit": "Monthly family support for BPL households",
    "applyAt": "SARAL portal or the Block Development Officer",
    "documents": [
      "Aadhaar",
      "BPL card",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman"
      ],
      "states": [
        "Haryana"
      ],
      "maxIncome": 150000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "backward",
        "bpl",
        "caste",
        "gareeb",
        "haryana",
        "haryana parivartan",
        "jaati",
        "obc",
        "parivartan",
        "sc",
        "st",
        "tribe"
      ]
    },
    "applyLink": "https://saralharyana.gov.in"
  },
  {
    "id": "haryana-beti",
    "name": "Apni Beti Apna Dhan girl child scheme",
    "category": "women",
    "level": "state",
    "benefit": "Bond issued at the birth of a girl, encashable at 18",
    "applyAt": "Civil surgeon or PHC at registration of birth",
    "documents": [
      "Aadhaar",
      "birth certificate",
      "mother's bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Haryana"
      ],
      "maxIncome": 300000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "apni",
        "apni beti",
        "beti",
        "dhan",
        "haryana",
        "haryana beti",
        "ladies",
        "mahila",
        "mother",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "up-vridh",
    "name": "UP Vridhajan Pension",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly old age pension for eligible senior citizens",
    "applyAt": "Tehsil office or the state social welfare portal",
    "documents": [
      "Aadhaar",
      "age proof",
      "income certificate",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "senior"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "maxIncome": 150000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "budhapa",
        "grandfather",
        "old age",
        "pension",
        "senior",
        "up",
        "up vridh",
        "vridh"
      ]
    },
    "applyLink": "https://samajkalyan.up.gov.in"
  },
  {
    "id": "up-widow",
    "name": "UP widow and separated woman pension",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly pension for widows and separated women",
    "applyAt": "Tehsil office or the state social welfare portal",
    "documents": [
      "Aadhaar",
      "death certificate",
      "income proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "maxIncome": 150000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "budhapa",
        "grandfather",
        "old age",
        "pension",
        "senior",
        "up",
        "up widow",
        "vridh",
        "widow"
      ]
    },
    "applyLink": "https://samajkalyan.up.gov.in"
  },
  {
    "id": "up-divyang",
    "name": "UP Divyangjan Pension",
    "category": "disability",
    "level": "state",
    "benefit": "Monthly pension for persons with at least 40% disability",
    "applyAt": "Tehsil office or the state social welfare portal",
    "documents": [
      "Aadhaar",
      "disability certificate",
      "income proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "student"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "maxIncome": 150000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "disability",
        "disabled",
        "divyang",
        "handicap",
        "pension",
        "up",
        "up divyang"
      ]
    },
    "applyLink": "https://samajkalyan.up.gov.in"
  },
  {
    "id": "up-kanyadan",
    "name": "UP Kanyadan Yojana marriage assistance",
    "category": "marriage",
    "level": "state",
    "benefit": "Financial assistance for the marriage of eligible girls",
    "applyAt": "Tehsil office or the state welfare portal",
    "documents": [
      "Aadhaar",
      "income certificate",
      "marriage proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "maxIncome": 200000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "dowry",
        "girl",
        "kanyadan",
        "marriage",
        "shadi",
        "shadida",
        "up",
        "up kanyadan",
        "vivah"
      ]
    },
    "applyLink": "https://samajkalyan.up.gov.in"
  },
  {
    "id": "up-yuva",
    "name": "UP self-employment help for unemployed youth",
    "category": "employment",
    "level": "state",
    "benefit": "Tool-kit and self-employment assistance for registered unemployed youth",
    "applyAt": "Employment Exchange or the state skill portal",
    "documents": [
      "Aadhaar",
      "degree certificate",
      "domicile",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 21,
      "keywords": [
        "berozgari",
        "job",
        "kaam",
        "kaushal",
        "mazdoori",
        "naukri",
        "rozgar",
        "unemployed",
        "unemployment",
        "up",
        "up yuva",
        "yuva"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "maha-ladki-bahin",
    "name": "Majhi Ladki Bahin monthly support",
    "category": "women",
    "level": "state",
    "benefit": "Monthly cash transfer to eligible women of the household",
    "applyAt": "State portal or the Gram Panchayat and Mahanagar portal",
    "documents": [
      "Aadhaar",
      "income certificate",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Maharashtra"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 21,
      "keywords": [
        "beti",
        "ladies",
        "ladki bahin",
        "maha ladki bahin",
        "maharashtra",
        "mahila",
        "majhi",
        "mother",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "maha-mahadbt",
    "name": "Maharashtra post-matric scholarship via Mahadbt",
    "category": "education",
    "level": "state",
    "benefit": "Fee and maintenance scholarships for students of eligible categories",
    "applyAt": "Mahadbt portal or the college office",
    "documents": [
      "Aadhaar",
      "marksheet",
      "income or caste certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Maharashtra"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "admission",
        "college",
        "fees",
        "maha mahadbt",
        "mahadbt",
        "maharashtra",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://www.mahadbt.maharashtra.gov.in"
  },
  {
    "id": "maha-kisan",
    "name": "Farm power and input relief for farmers",
    "category": "agriculture",
    "level": "state",
    "benefit": "Relief on farm electricity and loans for eligible farmers",
    "applyAt": "Talathi or the district agriculture office",
    "documents": [
      "Aadhaar",
      "7/12 extract",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Maharashtra"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "bijli",
        "crop",
        "ekar",
        "farm",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "maha kisan",
        "maharashtra",
        "pump",
        "seed"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ka-gruha-lakshmi",
    "name": "Gruha Lakshmi monthly support for women",
    "category": "women",
    "level": "state",
    "benefit": "Monthly cash transfer to the woman who is head of the household",
    "applyAt": "Seva Sindhu portal or the Gram and Nakara Kendaya office",
    "documents": [
      "Aadhaar",
      "family card",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Karnataka"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "beti",
        "gruha",
        "gruha lakshmi",
        "ka gruha lakshmi",
        "karnataka",
        "ladies",
        "mahila",
        "mother",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://sevasindhu.karnataka.gov.in"
  },
  {
    "id": "ka-gruha-jyothi",
    "name": "Gruha Jyothi free electricity",
    "category": "energy",
    "level": "state",
    "benefit": "Free electricity up to the notified monthly consumption",
    "applyAt": "Seva Sindhu or the electricity supply company",
    "documents": [
      "Aadhaar",
      "electricity bill",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman",
        "farmer",
        "worker"
      ],
      "states": [
        "Karnataka"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bijli",
        "current",
        "electricity",
        "gruha",
        "gruha jyothi",
        "ka gruha jyothi",
        "karnataka",
        "power",
        "roshni",
        "solar"
      ]
    },
    "applyLink": "https://sevasindhu.karnataka.gov.in"
  },
  {
    "id": "ka-ankur",
    "name": "Ankur allowance for unemployed graduates",
    "category": "employment",
    "level": "state",
    "benefit": "Monthly allowance for registered unemployed youth with a degree or diploma",
    "applyAt": "Seva Sindhu or the Employment Exchange",
    "documents": [
      "Aadhaar",
      "degree certificate",
      "domicile",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Karnataka"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 21,
      "keywords": [
        "ankur",
        "berozgari",
        "job",
        "ka ankur",
        "kaam",
        "karnataka",
        "mazdoori",
        "naukri",
        "rozgar",
        "unemployed",
        "unemployment"
      ]
    },
    "applyLink": "https://sevasindhu.karnataka.gov.in"
  },
  {
    "id": "ka-vidyagiri",
    "name": "Vidyagiri scholarship for eligible communities",
    "category": "education",
    "level": "state",
    "benefit": "Fee and maintenance support for students from notified communities",
    "applyAt": "Welfare department through the state portal",
    "documents": [
      "Aadhaar",
      "caste certificate",
      "marksheet",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Karnataka"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "admission",
        "college",
        "fees",
        "ka vidyagiri",
        "karnataka",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study",
        "vidyagiri"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "kl-universal-pension",
    "name": "Kerala monthly pension for seniors, widows and disabled persons",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly pension covering senior citizens, widows and persons with disability",
    "applyAt": "Panchayat or municipality office, or e-District",
    "documents": [
      "Aadhaar",
      "age or disability proof",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "senior",
        "woman",
        "worker"
      ],
      "states": [
        "Kerala"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "budhapa",
        "divyang",
        "grandfather",
        "kerala",
        "kl universal pension",
        "old age",
        "pension",
        "senior",
        "vridh",
        "widow"
      ]
    },
    "applyLink": "https://edistrict.kerala.gov.in"
  },
  {
    "id": "kl-karunya",
    "name": "Karunya subsidised treatment and medicines",
    "category": "health",
    "level": "state",
    "benefit": "Subsidised treatment and medicines at government hospitals",
    "applyAt": "Government hospital or the Health Services department",
    "documents": [
      "Aadhaar",
      "income certificate",
      "medical records"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "Kerala"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "bimari",
        "dawai",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "karunya",
        "kerala",
        "kl karunya",
        "medicine",
        "operation",
        "treatment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "kl-kudumbashree",
    "name": "Kudumbashree women's group livelihood support",
    "category": "employment",
    "level": "state",
    "benefit": "Group loans, training and micro-enterprise support for women",
    "applyAt": "NEDGRIS or the local body Kudumbashree officer",
    "documents": [
      "Aadhaar",
      "group details",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Kerala"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "berozgari",
        "group",
        "job",
        "kaam",
        "kerala",
        "kl kudumbashree",
        "kudumbashree",
        "mazdoori",
        "naukri",
        "rozgar",
        "shg",
        "unemployed"
      ]
    },
    "applyLink": "https://kudumbashree.org"
  },
  {
    "id": "kl-home-care",
    "name": "Home-based care for the elderly",
    "category": "senior",
    "level": "state",
    "benefit": "Free home nursing and elder care support",
    "applyAt": "Local body or the Health department",
    "documents": [
      "Aadhaar",
      "age proof",
      "medical records"
    ],
    "eligibility": {
      "occupations": [
        "senior"
      ],
      "states": [
        "Kerala"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "budhapa",
        "elderly",
        "grandfather",
        "home care",
        "homebased",
        "kerala",
        "kl home care",
        "nursing",
        "old age",
        "pension",
        "senior",
        "vridh"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "rj-chiranjeevi",
    "name": "Chiranjeevi health cover",
    "category": "health",
    "level": "state",
    "benefit": "Cashless treatment cover for eligible families over and above Ayushman",
    "applyAt": "Empanelled hospital or the state health portal",
    "documents": [
      "Aadhaar",
      "ration card or income certificate"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "Rajasthan"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "bimari",
        "chiranjeevi",
        "dawai",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "rajasthan",
        "rj chiranjeevi",
        "treatment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "rj-rajlakshmi",
    "name": "Raj Lakshmi girl child support",
    "category": "women",
    "level": "state",
    "benefit": "Staged cash incentive for the birth and education of a girl child",
    "applyAt": "Anganwadi or the state women and child portal",
    "documents": [
      "Aadhaar",
      "birth certificate",
      "bank passbook",
      "vaccination card"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Rajasthan"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "beti",
        "ladies",
        "mahila",
        "mother",
        "raj lakshmi",
        "rajasthan",
        "rj rajlakshmi",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "rj-kanyadan",
    "name": "Rajasthan Kanyadan marriage assistance",
    "category": "marriage",
    "level": "state",
    "benefit": "Financial help for the marriage of girls from eligible families",
    "applyAt": "Tehsil office or the state scheme repository",
    "documents": [
      "Aadhaar",
      "income certificate",
      "marriage proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Rajasthan"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "dowry",
        "girl",
        "kanyadan",
        "marriage",
        "rajasthan",
        "rj kanyadan",
        "shadi",
        "shadida",
        "vivah"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "rj-old-age",
    "name": "Rajasthan old age pension",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly pension for senior citizens from eligible households",
    "applyAt": "Panchayat or municipality, through an e-Mitra centre",
    "documents": [
      "Aadhaar",
      "age proof",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "senior"
      ],
      "states": [
        "Rajasthan"
      ],
      "maxIncome": 200000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "budhapa",
        "grandfather",
        "old age",
        "pension",
        "rajasthan",
        "rj old age",
        "senior",
        "vridh"
      ]
    },
    "applyLink": "https://emitra.rajasthan.gov.in"
  },
  {
    "id": "mp-ladli-behna",
    "name": "Ladli Behna monthly support for women",
    "category": "women",
    "level": "state",
    "benefit": "Monthly cash transfer to eligible married women",
    "applyAt": "State portal or the Gram Panchayat",
    "documents": [
      "Aadhaar",
      "income certificate",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "maxIncome": 300000,
      "gender": "female",
      "minAge": 21,
      "keywords": [
        "beti",
        "ladies",
        "ladli",
        "ladli behna",
        "mahila",
        "mother",
        "mp",
        "mp ladli behna",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "mp-sambal",
    "name": "Sambal monthly pensions",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly pension for widows, senior citizens and persons with disability",
    "applyAt": "Tehsil office or the Sambal portal",
    "documents": [
      "Aadhaar",
      "age or disability proof",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "senior",
        "woman",
        "worker"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "maxIncome": 200000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "budhapa",
        "divyang",
        "grandfather",
        "mp",
        "mp sambal",
        "old age",
        "pension",
        "sambal",
        "senior",
        "vridh",
        "widow"
      ]
    },
    "applyLink": "https://sambal.mp.gov.in"
  },
  {
    "id": "mp-kanyadan",
    "name": "Ladli Kanyadan marriage assistance",
    "category": "marriage",
    "level": "state",
    "benefit": "Cash assistance for the marriage of girls from eligible families",
    "applyAt": "State portal or the Gram Sabha",
    "documents": [
      "Aadhaar",
      "income certificate",
      "marriage proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "dowry",
        "girl",
        "kanyadan",
        "ladli",
        "marriage",
        "mp",
        "mp kanyadan",
        "shadi",
        "shadida",
        "vivah"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "mp-gopal",
    "name": "Interest-free education loan",
    "category": "education",
    "level": "state",
    "benefit": "Interest-free loan for professional and technical courses",
    "applyAt": "MP Online centre or a partner bank",
    "documents": [
      "Aadhaar",
      "admission letter",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 17,
      "keywords": [
        "admission",
        "college",
        "education",
        "fees",
        "gopal",
        "interestfree",
        "loan",
        "marksheet",
        "mp",
        "mp gopal",
        "padhai",
        "professional",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "gj-pension",
    "name": "Old age and disability pension",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly pension for senior citizens and persons with disability",
    "applyAt": "Talati or the i-Khandan household portal",
    "documents": [
      "Aadhaar",
      "age or disability proof",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "senior",
        "worker"
      ],
      "states": [
        "Gujarat"
      ],
      "maxIncome": 200000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "budhapa",
        "divyang",
        "gj pension",
        "grandfather",
        "gujarat",
        "old age",
        "pension",
        "senior",
        "vridh"
      ]
    },
    "applyLink": "https://ikhandan.gujarat.gov.in"
  },
  {
    "id": "gj-uma",
    "name": "Nutrition and girl child support",
    "category": "women",
    "level": "state",
    "benefit": "Nutrition and financial support for pregnant women and girls",
    "applyAt": "Anganwadi or the Women and Child Development circle",
    "documents": [
      "Aadhaar",
      "pregnancy or birth proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Gujarat"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "beti",
        "gj uma",
        "gujarat",
        "ladies",
        "mahila",
        "mother",
        "nutrition",
        "uma",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "gj-labh",
    "name": "Seed and input support for farmers",
    "category": "agriculture",
    "level": "state",
    "benefit": "Seed and input support at the notified per-acre rate",
    "applyAt": "Talati or the agriculture department",
    "documents": [
      "Aadhaar",
      "7/12 land record",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Gujarat"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "gj labh",
        "gujarat",
        "kheti",
        "kisan",
        "labh",
        "land",
        "seed"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "tn-health-screening",
    "name": "Free mass health screening camps",
    "category": "health",
    "level": "state",
    "benefit": "Free screening for diabetes, hypertension and oral and breast cancer",
    "applyAt": "Government hospital or the mobile health van",
    "documents": [
      "Aadhaar"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bimari",
        "blood sugar",
        "cancer",
        "checkup",
        "dawai",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "pressure",
        "tamil nadu",
        "tn health screening",
        "treatment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "tn-health-relief",
    "name": "Chief Minister health relief for patients",
    "category": "health",
    "level": "state",
    "benefit": "Cash relief for patients from eligible families undergoing treatment",
    "applyAt": "Government hospital or the state health portal",
    "documents": [
      "Aadhaar",
      "income certificate",
      "medical records"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "maxIncome": 500000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "bimari",
        "chief",
        "dawai",
        "doctor",
        "health",
        "health relief",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "tamil nadu",
        "tn health relief",
        "treatment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "tn-pudhumai-penn",
    "name": "Pudhumai Penn monthly support for college girls",
    "category": "education",
    "level": "state",
    "benefit": "Monthly assistance to girls pursuing higher education after class 12",
    "applyAt": "College office or the state portal",
    "documents": [
      "Aadhaar",
      "12th marksheet",
      "admission proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 17,
      "keywords": [
        "admission",
        "beti",
        "college",
        "fees",
        "marksheet",
        "padhai",
        "pudhumai",
        "pudhumai penn",
        "scholarship",
        "school",
        "student",
        "study",
        "tamil nadu",
        "tn pudhumai penn"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "tn-amma-canteen",
    "name": "Subsidised municipal canteen meals",
    "category": "social",
    "level": "state",
    "benefit": "Very low cost meals at municipal canteens",
    "applyAt": "Municipal corporation canteen",
    "documents": [
      "No documents needed"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "farmer",
        "student"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 10,
      "keywords": [
        "amma",
        "backward",
        "canteen",
        "caste",
        "food",
        "jaati",
        "meal",
        "obc",
        "sc",
        "st",
        "subsidised",
        "tamil nadu",
        "tn amma canteen",
        "tribe"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "wb-kanyashree",
    "name": "Kanyashree scholarship for girls",
    "category": "education",
    "level": "state",
    "benefit": "Annual scholarship and a one-time grant for unmarried school-going girls",
    "applyAt": "School, Gram Panchayat or the state portal",
    "documents": [
      "Aadhaar",
      "study certificate",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "West Bengal"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 10,
      "keywords": [
        "admission",
        "bengal",
        "beti",
        "college",
        "fees",
        "kanyashree",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study",
        "wb kanyashree"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "wb-rupashri",
    "name": "Rupashri marriage assistance",
    "category": "marriage",
    "level": "state",
    "benefit": "Cash grant for the marriage of girls from eligible families",
    "applyAt": "Block office or the state portal",
    "documents": [
      "Aadhaar",
      "income certificate",
      "marriage proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "West Bengal"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "bengal",
        "dowry",
        "girl",
        "marriage",
        "rupashri",
        "shadi",
        "shadida",
        "vivah",
        "wb rupashri"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "wb-swasthya-sathi",
    "name": "Swasthya Sathi family health cover",
    "category": "health",
    "level": "state",
    "benefit": "Family health cover for eligible residents",
    "applyAt": "Empanelled hospital or the state health portal",
    "documents": [
      "Aadhaar",
      "ration card"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "West Bengal"
      ],
      "maxIncome": 500000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "bengal",
        "bimari",
        "dawai",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "swasthya",
        "swasthya sathi",
        "treatment",
        "wb swasthya sathi"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "pj-yuva",
    "name": "Unemployment allowance for youth",
    "category": "employment",
    "level": "state",
    "benefit": "Monthly allowance for registered unemployed youth",
    "applyAt": "Employment Exchange or the state portal",
    "documents": [
      "Aadhaar",
      "degree certificate",
      "domicile",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Punjab"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 21,
      "keywords": [
        "berozgari",
        "job",
        "kaam",
        "mazdoori",
        "naukri",
        "pj yuva",
        "punjab",
        "rozgar",
        "unemployed",
        "unemployment",
        "yuva"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "pj-student-bus",
    "name": "Subsidised bus travel for students",
    "category": "education",
    "level": "state",
    "benefit": "Free or heavily discounted bus travel for students",
    "applyAt": "Roadways counter with a student ID",
    "documents": [
      "Aadhaar",
      "student ID",
      "domicile"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Punjab"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 11,
      "keywords": [
        "admission",
        "bus",
        "college",
        "fees",
        "marksheet",
        "padhai",
        "pj student bus",
        "punjab",
        "scholarship",
        "school",
        "student",
        "study",
        "subsidised",
        "travel"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "pj-farm-power",
    "name": "Free power for agricultural tube wells",
    "category": "energy",
    "level": "state",
    "benefit": "No electricity bill for agricultural tube well connections",
    "applyAt": "District agriculture officer or the power board",
    "documents": [
      "Aadhaar",
      "land records",
      "tubewell connection"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Punjab"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bijli",
        "current",
        "electricity",
        "free power",
        "pj farm power",
        "power",
        "punjab",
        "roshni",
        "solar",
        "tubewell"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "br-girl-education",
    "name": "Girl child education incentive",
    "category": "education",
    "level": "state",
    "benefit": "Cash incentive for the schooling of girls from eligible households",
    "applyAt": "Block or district education office",
    "documents": [
      "Aadhaar",
      "study certificate",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Bihar"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 10,
      "keywords": [
        "admission",
        "beti",
        "bihar",
        "br girl education",
        "college",
        "fees",
        "girl",
        "kanya",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "br-kisan-bonus",
    "name": "Bonus on wheat and paddy procurement",
    "category": "agriculture",
    "level": "state",
    "benefit": "Per-quintal bonus on wheat and paddy sold at procurement centres",
    "applyAt": "Procurement centre or the Block Agriculture Officer",
    "documents": [
      "Aadhaar",
      "land record",
      "produce receipt",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Bihar"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bihar",
        "bij",
        "bonus",
        "br kisan bonus",
        "crop",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "paddy",
        "seed",
        "wheat"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "br-pension",
    "name": "Old age, widow and disability pension",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly pension for senior citizens, widows and persons with disability",
    "applyAt": "Panchayat office or the state pension portal",
    "documents": [
      "Aadhaar",
      "age or disability proof",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "senior",
        "woman",
        "worker"
      ],
      "states": [
        "Bihar"
      ],
      "maxIncome": 150000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "bihar",
        "br pension",
        "budhapa",
        "divyang",
        "grandfather",
        "old age",
        "pension",
        "senior",
        "vridh",
        "widow"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "od-mamahi",
    "name": "Mamahi monthly support for women",
    "category": "women",
    "level": "state",
    "benefit": "Monthly cash assistance to eligible women",
    "applyAt": "State portal or the Anganwadi supervisor",
    "documents": [
      "Aadhaar",
      "income certificate",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Odisha"
      ],
      "maxIncome": 500000,
      "gender": "female",
      "minAge": 21,
      "keywords": [
        "beti",
        "ladies",
        "mahila",
        "mamahi",
        "mother",
        "od mamahi",
        "odisha",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "od-krushak",
    "name": "Krushak input support for farmers",
    "category": "agriculture",
    "level": "state",
    "benefit": "Per-acre input support for two crops for farm families",
    "applyAt": "Block Agriculture Officer",
    "documents": [
      "Aadhaar",
      "land records",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Odisha"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "input",
        "kheti",
        "kisan",
        "krushak",
        "land",
        "od krushak",
        "odisha",
        "seed"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "jh-yuva",
    "name": "Youth self-employment and skill support",
    "category": "employment",
    "level": "state",
    "benefit": "Stipend and tool-kit support for trained unemployed youth",
    "applyAt": "Employment Exchange or the state skill mission",
    "documents": [
      "Aadhaar",
      "degree or ITI certificate",
      "domicile",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Jharkhand"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 21,
      "keywords": [
        "berozgari",
        "jh yuva",
        "jharkhand",
        "job",
        "kaam",
        "mazdoori",
        "naukri",
        "rozgar",
        "skill",
        "unemployed",
        "youth",
        "yuva"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "jh-didi",
    "name": "Girl child monthly support",
    "category": "women",
    "level": "state",
    "benefit": "Monthly cash transfer for the education of a girl child",
    "applyAt": "Block office or the state portal",
    "documents": [
      "Aadhaar",
      "birth certificate",
      "study certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Jharkhand"
      ],
      "maxIncome": 300000,
      "gender": "female",
      "minAge": 10,
      "keywords": [
        "beti",
        "didi",
        "girl",
        "jh didi",
        "jharkhand",
        "ladies",
        "mahila",
        "mother",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "cg-pension",
    "name": "Chhattisgarh old age, widow and disability pension",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly pension for senior citizens, widows and persons with disability",
    "applyAt": "Gram Panchayat or the state portal",
    "documents": [
      "Aadhaar",
      "age or disability proof",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "senior",
        "woman",
        "worker"
      ],
      "states": [
        "Chhattisgarh"
      ],
      "maxIncome": 150000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "budhapa",
        "cg pension",
        "chhattisgarh",
        "divyang",
        "grandfather",
        "old age",
        "pension",
        "senior",
        "vridh",
        "widow"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "cg-mamta",
    "name": "Mamta prenatal and infant cash support",
    "category": "women",
    "level": "state",
    "benefit": "Cash assistance during pregnancy and the first two years of the child",
    "applyAt": "Health sub-centre or the ward office",
    "documents": [
      "Aadhaar",
      "MCP card",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Chhattisgarh"
      ],
      "maxIncome": 300000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "baby",
        "beti",
        "cg mamta",
        "chhattisgarh",
        "ladies",
        "mahila",
        "mamta",
        "mother",
        "pregnancy",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "delhi-mohalla",
    "name": "Mohalla Clinic free consultation and medicines",
    "category": "health",
    "level": "state",
    "benefit": "Free consultation and medicines at neighbourhood clinics",
    "applyAt": "Nearest Mohalla Clinic",
    "documents": [
      "Aadhaar or mobile number"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "farmer",
        "student",
        "woman",
        "senior"
      ],
      "states": [
        "Delhi"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 10,
      "keywords": [
        "bimari",
        "clinic",
        "dawai",
        "delhi",
        "delhi mohalla",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "mohalla",
        "operation",
        "treatment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "delhi-water",
    "name": "Household water supply subsidy",
    "category": "utilities",
    "level": "state",
    "benefit": "Free water supply up to the notified monthly consumption per household",
    "applyAt": "Municipal corporation or the water board",
    "documents": [
      "Aadhaar",
      "property tax or ration card"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "farmer",
        "woman"
      ],
      "states": [
        "Delhi"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bill",
        "delhi",
        "delhi water",
        "household",
        "nal",
        "paani",
        "shauchalaya",
        "tap",
        "toilet",
        "water"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "delhi-power",
    "name": "Electricity bill relief for households",
    "category": "energy",
    "level": "state",
    "benefit": "Low or nil electricity bill for consumption up to the notified limit",
    "applyAt": "Distribution company or the state power department",
    "documents": [
      "Aadhaar",
      "electricity bill"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "farmer",
        "woman",
        "senior"
      ],
      "states": [
        "Delhi"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bijli",
        "current",
        "delhi",
        "delhi power",
        "electricity",
        "power",
        "roshni",
        "solar"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "as-grihalakshmi",
    "name": "Assam monthly support for women",
    "category": "women",
    "level": "state",
    "benefit": "Monthly cash transfer to eligible women of the household",
    "applyAt": "State portal or the Gram Panchayat development officer",
    "documents": [
      "Aadhaar",
      "income certificate",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Assam"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 21,
      "keywords": [
        "as grihalakshmi",
        "assam",
        "beti",
        "griha lakshmi",
        "ladies",
        "mahila",
        "mother",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "as-bihu",
    "name": "Cash assistance for farm families",
    "category": "agriculture",
    "level": "state",
    "benefit": "Annual direct assistance to small and marginal farmers",
    "applyAt": "Revenue or agriculture circle officer",
    "documents": [
      "Aadhaar",
      "land records",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Assam"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "as bihu",
        "assam",
        "bihu",
        "bij",
        "cash",
        "crop",
        "ekar",
        "farm",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "seed"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "uk-grahini",
    "name": "Uttarakhand monthly support for housewives",
    "category": "women",
    "level": "state",
    "benefit": "Monthly cash assistance to married women of eligible households",
    "applyAt": "Gram Sabha or the state portal",
    "documents": [
      "Aadhaar",
      "income certificate",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Uttarakhand"
      ],
      "maxIncome": 300000,
      "gender": "female",
      "minAge": 21,
      "keywords": [
        "beti",
        "grahini",
        "ladies",
        "mahila",
        "mother",
        "uk grahini",
        "uttarakhand",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "uk-yuva",
    "name": "Uttarakhand unemployment allowance",
    "category": "employment",
    "level": "state",
    "benefit": "Monthly allowance for registered unemployed youth",
    "applyAt": "Employment Exchange or the state portal",
    "documents": [
      "Aadhaar",
      "degree certificate",
      "domicile",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Uttarakhand"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 21,
      "keywords": [
        "berozgari",
        "job",
        "kaam",
        "mazdoori",
        "naukri",
        "rozgar",
        "uk yuva",
        "unemployed",
        "unemployment",
        "uttarakhand",
        "yuva"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "hp-old-age",
    "name": "Himachal old age and widow pension",
    "category": "senior",
    "level": "state",
    "benefit": "Monthly pension for senior citizens and widows",
    "applyAt": "Tehsil or Panchayat office",
    "documents": [
      "Aadhaar",
      "age or spouse death proof",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "senior",
        "woman"
      ],
      "states": [
        "Himachal Pradesh"
      ],
      "maxIncome": 200000,
      "gender": "any",
      "minAge": 60,
      "keywords": [
        "budhapa",
        "grandfather",
        "himachal",
        "hp old age",
        "old age",
        "pension",
        "senior",
        "vridh",
        "widow"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "hp-dindayal",
    "name": "Himachal skill training with a placement allowance",
    "category": "skill",
    "level": "state",
    "benefit": "Free training plus a monthly allowance for ITI and diploma students",
    "applyAt": "State technical education directorate",
    "documents": [
      "Aadhaar",
      "ITI or diploma certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Himachal Pradesh"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "certificate",
        "course",
        "dindayal",
        "himachal",
        "hp dindayal",
        "iti",
        "seekhna",
        "skill",
        "training"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "goa-health",
    "name": "Goa health cover for residents",
    "category": "health",
    "level": "state",
    "benefit": "Cashless treatment cover for eligible resident families",
    "applyAt": "Government hospital or the state health portal",
    "documents": [
      "Aadhaar",
      "residence proof",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "Goa"
      ],
      "maxIncome": 500000,
      "gender": "any",
      "minAge": 0,
      "keywords": [
        "bimari",
        "dawai",
        "doctor",
        "goa",
        "goa health",
        "health",
        "health cover",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "treatment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "goa-yuva",
    "name": "Goa allowance for unemployed youth",
    "category": "employment",
    "level": "state",
    "benefit": "Monthly assistance for registered unemployed youth",
    "applyAt": "Employment Exchange or the state portal",
    "documents": [
      "Aadhaar",
      "degree certificate",
      "domicile",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Goa"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 21,
      "keywords": [
        "berozgari",
        "goa",
        "goa yuva",
        "job",
        "kaam",
        "mazdoori",
        "naukri",
        "rozgar",
        "unemployed",
        "unemployment",
        "yuva"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "tn-makkalai",
    "name": "Household health survey and free follow-up treatment",
    "category": "health",
    "level": "state",
    "benefit": "Doorstep health screening with free drugs and referral treatment",
    "applyAt": "ASHA or ANM worker, government hospital",
    "documents": [
      "Aadhaar"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "bimari",
        "dawai",
        "doctor",
        "doorstep",
        "health",
        "hospital",
        "household",
        "ilaj",
        "medicine",
        "operation",
        "survey",
        "tamil nadu",
        "tn makkalai",
        "treatment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "wb-school-meals",
    "name": "Enhanced cooked school meals for children",
    "category": "child",
    "level": "state",
    "benefit": "Improved nutrition and cooked meals for government school children",
    "applyAt": "School headmaster or the mid-day meal programme office",
    "documents": [
      "Aadhaar",
      "study certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "West Bengal"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 6,
      "keywords": [
        "baccha",
        "bachcha",
        "bengal",
        "child",
        "enhanced",
        "food",
        "mid day meal",
        "minor",
        "school",
        "wb school meals"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "rj-yuva",
    "name": "Entrepreneur support with a monthly allowance",
    "category": "employment",
    "level": "state",
    "benefit": "Monthly allowance and infrastructure support for first-time entrepreneurs",
    "applyAt": "State portal or the District Industries Centre",
    "documents": [
      "Aadhaar",
      "degree certificate",
      "project report",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Rajasthan"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 21,
      "keywords": [
        "berozgari",
        "entrepreneur",
        "job",
        "kaam",
        "mazdoori",
        "naukri",
        "rajasthan",
        "rj yuva",
        "rozgar",
        "unemployed",
        "yuva"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "mp-yuva",
    "name": "Self-employment loan with subsidy",
    "category": "business",
    "level": "central",
    "benefit": "Subsidised loan for self-employment through banks and SHGs",
    "applyAt": "District Industries Centre or a partner bank",
    "documents": [
      "Aadhaar",
      "project report",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "woman"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "business",
        "dukan",
        "loan",
        "mp",
        "mp yuva",
        "self employment",
        "selfemployment",
        "shop",
        "startup",
        "swarojgar",
        "udhyog",
        "vyapar"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "gj-yuva",
    "name": "Skill training with placement support",
    "category": "skill",
    "level": "state",
    "benefit": "Free short-term training with a stipend and placement assistance",
    "applyAt": "District skill centre or the state skill mission",
    "documents": [
      "Aadhaar",
      "10th or 12th marksheet",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Gujarat"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "certificate",
        "course",
        "gj yuva",
        "gujarat",
        "placement",
        "seekhna",
        "skill",
        "training"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "up-safai",
    "name": "Sanitation worker welfare and regularisation",
    "category": "labour",
    "level": "state",
    "benefit": "Insurance, kit and wage support for sanitation workers",
    "applyAt": "Municipal corporation or the ULB health officer",
    "documents": [
      "Aadhaar",
      "work proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "maxIncome": 200000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "labour",
        "mazdoor",
        "safai",
        "sanitation",
        "shram",
        "unorganised",
        "up",
        "up safai",
        "worker"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ka-sc-st-hostel",
    "name": "Residential hostel for SC and ST students",
    "category": "education",
    "level": "state",
    "benefit": "Free hostel and meals for students from notified communities",
    "applyAt": "Welfare department hostel office or the state portal",
    "documents": [
      "Aadhaar",
      "caste certificate",
      "study certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Karnataka"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 11,
      "keywords": [
        "admission",
        "college",
        "fees",
        "hostel",
        "ka sc st hostel",
        "karnataka",
        "marksheet",
        "padhai",
        "residential",
        "sc",
        "scholarship",
        "school",
        "st",
        "student",
        "study"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ts-vidyasree",
    "name": "Telangana post-matric scholarship for SC and BC students",
    "category": "education",
    "level": "state",
    "benefit": "Fees, books and maintenance for SC and BC students after class 10",
    "applyAt": "Welfare department or the state e-service portal",
    "documents": [
      "Aadhaar",
      "caste certificate",
      "marksheet",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Telangana"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 15,
      "keywords": [
        "admission",
        "bc",
        "college",
        "fees",
        "marksheet",
        "padhai",
        "post matric",
        "sc",
        "scholarship",
        "school",
        "student",
        "study",
        "telangana",
        "ts vidyasree",
        "vidyasree"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "tn-amma-pharmacy",
    "name": "Subsidised medicines at Amma Pharmacies",
    "category": "health",
    "level": "state",
    "benefit": "Generic medicines at a large discount from municipal pharmacies",
    "applyAt": "Nearest Amma Pharmacy counter",
    "documents": [
      "Aadhaar",
      "prescription"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman",
        "senior"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "amma",
        "bimari",
        "dawai",
        "doctor",
        "health",
        "hospital",
        "ilaj",
        "medicine",
        "operation",
        "pharmacy",
        "subsidised",
        "tamil nadu",
        "tn amma pharmacy",
        "treatment"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "kl-students-train",
    "name": "Travel concession for students",
    "category": "education",
    "level": "state",
    "benefit": "Concessionary bus and rail travel for students",
    "applyAt": "State transport counter with a student pass",
    "documents": [
      "Aadhaar",
      "student ID",
      "domicile"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Kerala"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 11,
      "keywords": [
        "admission",
        "bus",
        "college",
        "concession",
        "fees",
        "kerala",
        "kl students train",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study",
        "travel"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "ap-vidyosa",
    "name": "Postmetric scholarship for AP students",
    "category": "education",
    "level": "state",
    "benefit": "Fee and maintenance support for students from eligible categories",
    "applyAt": "State scholarship portal or the college office",
    "documents": [
      "Aadhaar",
      "marksheet",
      "income or caste certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "admission",
        "andhra",
        "ap vidyosa",
        "college",
        "fees",
        "marksheet",
        "padhai",
        "postmetric",
        "scholarship",
        "school",
        "student",
        "study",
        "vidyosa"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "maha-ushus",
    "name": "Housing assistance for urban low-income families",
    "category": "housing",
    "level": "state",
    "benefit": "Ownership support for eligible households in urban areas",
    "applyAt": "Municipal corporation or the state housing board",
    "documents": [
      "Aadhaar",
      "income proof",
      "residence proof",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "worker",
        "woman"
      ],
      "states": [
        "Maharashtra"
      ],
      "maxIncome": 400000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "awas",
        "flat",
        "ghar",
        "gruh",
        "house",
        "housing",
        "maha ushus",
        "maharashtra",
        "makan",
        "pucca"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "maha-santhe",
    "name": "Farmer producer and market linkage support",
    "category": "agriculture",
    "level": "state",
    "benefit": "Training, infrastructure and direct market links for farmer groups",
    "applyAt": "District agriculture office or the state marketing board",
    "documents": [
      "Aadhaar",
      "land records",
      "group registration"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Maharashtra"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "maha santhe",
        "maharashtra",
        "mandi",
        "market",
        "santhe",
        "seed"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "pn-women-loan",
    "name": "Interest-free loan for women self-help groups",
    "category": "finance",
    "level": "state",
    "benefit": "Interest-free working capital for registered women's groups",
    "applyAt": "Block community development officer or a partner bank",
    "documents": [
      "Aadhaar",
      "SHG registration",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Punjab"
      ],
      "maxIncome": 300000,
      "gender": "female",
      "minAge": 18,
      "keywords": [
        "account",
        "bank",
        "bima",
        "insurance",
        "interest free",
        "interestfree",
        "khata",
        "pension",
        "pn women loan",
        "punjab",
        "shg",
        "women loan"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "br-lijnee",
    "name": "Study-abroad and higher education loan assistance",
    "category": "education",
    "level": "state",
    "benefit": "Interest subsidy on education loans for students from Bihar",
    "applyAt": "Bank branch or the state portal",
    "documents": [
      "Aadhaar",
      "admission letter",
      "loan sanction",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Bihar"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 17,
      "keywords": [
        "admission",
        "bihar",
        "br lijnee",
        "college",
        "education",
        "fees",
        "loan",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study",
        "study abroad",
        "studyabroad"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "od-boya",
    "name": "Seed and crop loss relief",
    "category": "agriculture",
    "level": "state",
    "benefit": "Compensation for crop loss notified by the district administration",
    "applyAt": "Taluk or revenue office",
    "documents": [
      "Aadhaar",
      "land records",
      "pahani",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Andhra Pradesh",
        "Odisha",
        "Telangana"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "andhra",
        "annadam",
        "bij",
        "boya",
        "compensation",
        "crop",
        "crop loss",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "od boya",
        "relief",
        "seed"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "od-mo-rupee",
    "name": "Monthly cash support for poor households",
    "category": "social",
    "level": "state",
    "benefit": "Monthly assistance for families below the poverty line",
    "applyAt": "Gram Panchayat or the district portal",
    "documents": [
      "Aadhaar",
      "BPL card",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer",
        "worker",
        "woman"
      ],
      "states": [
        "Odisha"
      ],
      "maxIncome": 150000,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "backward",
        "bpl",
        "cash",
        "caste",
        "jaati",
        "mo rupee",
        "monthly",
        "obc",
        "od mo rupee",
        "odisha",
        "sc",
        "st",
        "tribe"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "cg-hitel",
    "name": "Free higher education support for meritorious students",
    "category": "education",
    "level": "state",
    "benefit": "Fee support for students who clear state merit lists",
    "applyAt": "College office or the state higher education portal",
    "documents": [
      "Aadhaar",
      "12th marksheet",
      "income certificate"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Chhattisgarh"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 17,
      "keywords": [
        "admission",
        "cg hitel",
        "chhattisgarh",
        "college",
        "fees",
        "hitel",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "jh-mukhyamantri",
    "name": "Jharkhand monthly support for women",
    "category": "women",
    "level": "state",
    "benefit": "Monthly cash transfer to eligible women of the household",
    "applyAt": "Block office or the state portal",
    "documents": [
      "Aadhaar",
      "income certificate",
      "bank passbook",
      "photo"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "Jharkhand"
      ],
      "maxIncome": 300000,
      "gender": "female",
      "minAge": 21,
      "keywords": [
        "beti",
        "jh mukhyamantri",
        "jharkhand",
        "ladies",
        "mahila",
        "monthly",
        "mother",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "up-kisan",
    "name": "UP seed and input support for small farmers",
    "category": "agriculture",
    "level": "state",
    "benefit": "Subsidised seed, inputs and micro-irrigation for small and marginal farmers",
    "applyAt": "District agriculture office",
    "documents": [
      "Aadhaar",
      "land records",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "farmer"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "maxIncome": null,
      "gender": "any",
      "minAge": 18,
      "keywords": [
        "acre",
        "annadam",
        "bij",
        "crop",
        "ekar",
        "farmer",
        "kheti",
        "kisan",
        "land",
        "seed",
        "up",
        "up kisan"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "tn-kalaignar-scholarship",
    "name": "District merit scholarship for college students",
    "category": "education",
    "level": "state",
    "benefit": "Monthly scholarship for students admitted under merit and reserved categories",
    "applyAt": "College office or the state higher education portal",
    "documents": [
      "Aadhaar",
      "marksheet",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 17,
      "keywords": [
        "admission",
        "college",
        "district",
        "fees",
        "marksheet",
        "merit",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study",
        "tamil nadu",
        "tn kalaignar scholarship"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "wb-joy",
    "name": "Monthly assistance for widowed women",
    "category": "women",
    "level": "state",
    "benefit": "Monthly cash help for widows from eligible households",
    "applyAt": "Block office or the state portal",
    "documents": [
      "Aadhaar",
      "death certificate",
      "income certificate",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "woman"
      ],
      "states": [
        "West Bengal"
      ],
      "maxIncome": 250000,
      "gender": "female",
      "minAge": 40,
      "keywords": [
        "bengal",
        "beti",
        "joy",
        "ladies",
        "mahila",
        "monthly",
        "mother",
        "wb joy",
        "widow",
        "wife",
        "woman"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "delhi-skill",
    "name": "Free certification courses with a placement stipend",
    "category": "skill",
    "level": "state",
    "benefit": "Short-term certification training with a monthly stipend",
    "applyAt": "State skill mission centre or a partner institute",
    "documents": [
      "Aadhaar",
      "10th or 12th marksheet",
      "bank passbook"
    ],
    "eligibility": {
      "occupations": [
        "student",
        "worker"
      ],
      "states": [
        "Delhi"
      ],
      "maxIncome": 300000,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "certificate",
        "course",
        "delhi",
        "delhi skill",
        "placement",
        "seekhna",
        "skill",
        "stipend",
        "training"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  },
  {
    "id": "assam-bodo",
    "name": "Tribal and plains area scholarship for students",
    "category": "education",
    "level": "state",
    "benefit": "Scholarship for students from notified tribal and plains areas",
    "applyAt": "Autonomous council office or the state portal",
    "documents": [
      "Aadhaar",
      "ST or tribal certificate",
      "marksheet"
    ],
    "eligibility": {
      "occupations": [
        "student"
      ],
      "states": [
        "Assam"
      ],
      "maxIncome": 250000,
      "gender": "any",
      "minAge": 16,
      "keywords": [
        "admission",
        "assam",
        "assam bodo",
        "college",
        "fees",
        "marksheet",
        "padhai",
        "scholarship",
        "school",
        "student",
        "study",
        "tribal"
      ]
    },
    "applyLink": "https://www.myscheme.gov.in"
  }
];
