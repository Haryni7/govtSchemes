import { useState } from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    income: "",
    caste: "",
    gender: "",
    education: "",
    maritalStatus: "",
    religion: "",
    occupation: "",
    location: "",
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query as user types
  };

  // List of schemes
  const schemes = [
    "Rebate on Stamp duty and registration charges for Privately Developed Industrial Estates",
    "Rebate/ Reimbursement of Stamp duty & Registration charges for Micro and Small Enterprises",
    "Supply of Free Bicycles",
    "AWARD FOR THE VISUALLY HANDICAPPED STUDENTS OF XII STANDARD RANK HOLDERS DISTRICT LEVEL",
    "Abolition of Bonded Labour System",
    "Issue of Tools and appliances - Sewing machines/Carpentry things to the ITI holders. (Iron boxes will be supplied those who undertook ironing as a Trade)",
    "Western Ghats Development Programme -WGDP - Plantation incentive",
    "Individual Entrepreneur Development Scheme",
    "Assistance for Funeral Rites",
    "District central Cooperative Banks and through its branches - For Maternity Loan through Self help groups",
    "Adi Dravidar and Tribal Welfare Department -Incentive / Award of Prizes - District Level Prize plus2 Examination Rs.3000/- 10th Std First prize Rs.1000/- Second Prize Rs.500/- Third Prize Rs.300/",
    "Distribution of Minikits at free of cost",
    "READERS ALLOWANCE TO VISUALLY HANDICAPPED PERSONS",
    "CALIPERS AND CRUTCHES",
    "Self Help Groups - Financial assistance for Economic Activities",
    "NUTRITION - INTEGRATED CHILD DEVELOPMENT SERVICES SCHEME",
    "GRANTS-IN-AID TO THE INSTITUTIONS UNDER THE SCHEME FOR WELFARE OF CHILDREN IN NEED OF CARE AND PROTECTION",
    "Sericulture Scheme",
    "FREE SUPPLY OF TEXT BOOKS AND NOTE BOOKS TO WIDOWS CHILDREN",
    "NATIONAL IDENTITY CARD FOR THE DISABLED PERSONS",
    "Adi Dravidar and Tribal Welfare Department -Hostels - Special Guides",
    "Free supply of Bicycles",
    "Mahathma Gandhi Bunkar Bima Yojana Scheme (Insurance Scheme for Handloom Weavers)",
    "Application for sanction of subsidy for the purchase of Generator Set",
    "Primary Cooperative Agriculture and Rural Development Bank - For Tractor Purchase",
    "Schemes of Revenue dept Relief to loss of crops due to natural calamites during monsoon season (Government of India Lr.No. 23.3.2003/NDM)",
    "REHABILITATION OF THE DISABLED - DISTRIBUTION OF PRE-RECORDED CASSETTES AND TAPE RECORDERS TO VISUALLY HANDICAPPED",
    "Construction of free houses for tribals",
    "CHIEF MINISTER’S AWARD -Sports School Hostel",
    "Destitute physically handicapped pension scheme",
    "Welfare Schemes of the School Education Department - Talent Examination - National Talent Exam",
    "CHIEF MINISTER’S AWARD - JOINT SPORTS DEVELOPMENT CENTRE",
    "GOGGLES AND FOLDING STICKS",
    "Handlooms and Textiles Department - Scheme for integrated textile parks(SITP) Under the Scheme for setting up of Integrated Textile Parks",
    "Primary Cooperative Agriculture and Rural Development Bank - For Animal Husbandry",
    "Land Purchase Scheme",
    "Provision of link road facilities to the tribal village connecting with plains or main villages",
    "SATHIYAVANI MUTHU AMMAIYAR NINAIVU FREE SUPPLY OF SEWING MACHINE SCHEME",
    "Sericulture - Catalytic Development Programme - Establish ment of twisting units",
    "Production of Certified Seeds of Maize",
    "MARRIAGE ASSISTANCE TO NORMAL PERSONS MARRYING VISUALLY HANDICAPPED PERSONS",
    "Youth Welfare and Sports Development Department - CHIEF MINISTER’S STATE SPORTS AWARD",
    "Handlooms and Textiles Department - Institutions Under The Control Of The Department And Their Activities - Co-operative Spinning Mills",
    "Assistance to Lawyers for Starting their Practice",
    "Awards to Bright Students",
    "Adi Dravidar and Tribal Welfare Department -Incentive / Award of Prizes - For each subjects (c) plus2 Examination Rs.2000/- (d)10th Std Examination Rs.1000/-",
    "Distribution of Rhizobium",
    "District Collector's Discretionery Fund",
    "Schemes of revenue dept Distress Relief scheme (G.O.470, Finance(CMPFR))Department, dated 23.5.1989)",
    "Schemes of Revenue Dept Track Rent",
    "Distribution of Certified seeds - Oil Seeds",
    "Sericulture - Catalytic Development Programme - Installation of Multiend reeling",
    "Primary Cooperative Agriculture and Rural Development Bank - For Sericulture In irrigated area",
    "IAS/IPS CIVIL SERVICE EXAMINATION TRAINING",
    "Post matric scholarships to minority students",
    "Development Schemes - Free Power Supply to Handloom and Powerloom Weavers",
    "Schemes of Revenue dept Relief of insurance agency through revenue - severe injuries through insurance company",
    "Schemes of Revenue Dept Tamil Nadu Agriculture Labourers – farmer (Social security and welfare) scheme, 2006 05",
    "Sprinkler irrigation, drip irrigation, Laying pipe lines",
    "FREE TRAVEL CONCESSION TO THE DISABLED PERSONS IN STATE OWNED TRANSPORT CORPORATION BUSES",
    "For Registered medical practioners & Engineering graduates",
    "TRAINING TO THE ADULT BLIND WOMEN",
    "District central Cooperative Banks and through its branches - For Housing, House construction, repair extension loan",
    "MARRIAGE ASSISTANCE TO NORMAL PERSON MARRYING SPEECH AND HEARING IMPAIRED PERSON",
    "Primary Cooperative Agriculture and Rural Development Bank - Jewel loans",
    "Book bank - books will be purchased for medical/ engineering/ law / m.b.a./veterinary / agri. and polytechnic/courses and placed in the library",
    "Sericulture - Catalytic Development Programme - Supply of quality Disinfectants",
    "National Cadet Crops - Scholarships",
    "Link Road - Link Roads are provided connecting the AD/Tribal habitation with the main roads / villages",
    "Awarding Scholarships under the M.G.R. Handloom Weavers' Welfare Trust",
    "Issue of certificate - Birth Certificate",
    "RESERVATION OF JOBS IN GOVERNMENT DEPARTMENTS / GOVERNMENT UNDERTAKINGS",
    "Training in basket making, tailoring etc. for the women",
    "CHIEF MINISTER’S AWARD - CASH INCENTIVES FOR SAF GAMES / NATIONAL GAMES ( TEAM GAMES PER PLAYER )",
    "Educational Scholarship to Children of Scavengers / Sweepers - Educational Scholarship to Children of Scavengers / sweepers",
    "Welfare Schemes of the School Education Department - Free Text Book - Supply of free text books",
    "Tamil Nadu Agriculture Labourers – farmer (Social security and welfare) scheme, 2006",
    "District central Cooperative Banks and through its branches - For Revamped Micro credit loan for women vendors of flower, vegetable, fruit etc.",
    "DIRECTORATE OF NON FORMAL AND ADULT EDUCATION - Continuing Education Programme",
    "Community Halls",
    "Schemes of Revenue dept Relief of insurance agency through revenue Dept.",
    "Development Schemes - Scheme of Free Supply of Uniforms to School Children",
    "AWARD FOR THE VISUALLY HANDICAPPED STUDENTS",
    "District central Cooperative Banks and through its branches - For Working women",
    "District central Cooperative Banks and through its branches - For Women Enterpreneurs",
    "Issue of certificate - Widow Certificate",
    "Award of Rs.20,000/- to Best Writers",
    "REHABILITATION OF THE DISABLED SCHOLARSHIP - For Degree Course",
    "REHABILITATION OF THE DISABLED - STARTING OF DEGREE COURSES FOR THE HEARING IMPAIRED STUDENTS",
    "SATHYA AMMAIYAR NINAIVU GOVERNMENT ORPHANAGES",
    "Vocational Training Programme",
    "Training of Farmers on Pulses Production Technologies",
    "Adi Dravidar and Tribal Welfare Department -Scholarship - Free Education upto 12th Std. to all i.e. tuition fee will not be collected and the amount will be reimbursed by Government",
    "Free Education Professional Courses",
    "MARRIAGE ASSISTANCE TO NORMAL PERSON MARRYING ORTHOPAEDICALLY HANDICAPPED PERSON",
    "Individual Term Loan Scheme",
    "farmer (Social security and welfare) scheme, 2006 01",
    "Hill Area Development Programme",
    "Drinking Water facility - Provision of drinking water facilities to AD and Tribal Habitations",
    "Development Schemes - Rebate Subsidy Scheme",
    "Afforestation schemes providing incentives and providing employment to Tribals in Forest Operation",
    "Welfare Schemes of the School Education Department - National Institute of Open Schooling (NIOS)",
    "Sericulture - Catalytic Development Programme - Installation of drip irrigation system",
    "Milch animal loan schemes",
    "MOOVALUR RAMAMIRTHAM AMMAIYAR NINAIVU MARRIAGE ASSISTANCE SCHEME",
    "Primary Cooperative Agriculture and Rural Development Bank - For Minor irrigation",
    "Schemes of Revenue dept Relief to damaged huts due to natural calamities like cyclone, flood and fire(G.O(Ms)No. 388, revenue, dated 04.10.2001)",
    "Handlooms and Textiles Department - Payment of scholarship under Shiksha Sahayog Yojana",
    "FREE TRAVEL CONCESSION TO THE VISUALLY HANDICAPPED / ORTHOPEADICALLY HANDICAPPED PERSONS IN STATE OWNED TRANSPORT CORPORATION BUSES",
    "Schemes of Revenue dept Issue of certificate (contd.) 10",
    "CHIEF MINISTER’S AWARD - CASH INCENTIVES FOR COMMONWEALTH GAMES INDIVIDUAL EVENT /TEAM EVENTS PER PLAYER",
    "TRICYCLES",
    "Schemes of revenue dept destitute old age pension scheme (g.o. 73, finance (pension) department, dated 22.1.1962 - Annapoora rice scheme",
    "FREE SUPPLY OF BRAILLE BOOKS",
    "Primary Cooperative Agriculture and Rural Development Bank - For Fishing Boats (Catamarans)",
    "Livelihood activities for asset less persons - Sponsored By State Govt",
    "ADOPTION",
    "Stationery - Special Guides (Question and Answer)",
    "Schemes of Revenue dept Accident Relief Scheme (G.O. 471, Finance (CMPRF) dt. 23.5.1989 - For Agricultural labour and Former",
    "Animal Husbandry",
    "Organizing Block Demonstration through Department and also through TNAU",
    "Sports Development Authority of Tamil Nadu - Government of Tamil Nadu For participation in Republic Day Camp and RD oriented camps",
    "Vocational Guidance center are functioning at Udhagamandalam to the guidance of Tribal youths for employment purpose",
    "Integrated Handlooms Development Scheme - Group approach for development of Handlooms",
    "Welfare Schemes of the School Education Department - Free uniform - Supply of Free Uniform",
    "Sericulture - Hill Area Development Programme (HADP) - Procurement of improved Rearing Appliances",
    "District central Cooperative Banks and through its branches - For Consumer durables T.V., Fridge and two wheelers loan",
    "Providing interest free loan to tribals, provision of essential articles at reasonable price and marketing the Minor Forest produces to ensure better returns to the tribals through LAMP Societies",
    "Schemes of Revenue Dept The scheme of distribution of 2 acres of waste lands to the families of landless poor agriculturalists",
    "Adi Dravidar and Tribal Welfare Department -Hostels - Special Guides",
    "Schemes of Revenue dept Relief to loss of cattle due to natural calamities like flood, cyclone and fire (G.O. (Ms)No. 515 dated 25.10.1996)",
    "Youth Welfare and Sports Development Department - National Cadet Crops 'C' Certificate holders",
    "OLD AGE HOME",
    "House extension, renovation",
    "PHYSIOTHERAPY EXERCISE",
    "Youth Welfare and Sports Development Department - outstanding sports persons",
    "District central Cooperative Banks and through its branches - For Professional loan to Doctors, Engineers and Self employed professional",
    "ARTIFICIAL LIMBS",
    "Institutions Under The Control Of The Department And Their Activities - Tamilnadu Handloom Weavers Co-operative Society Limited (Co-optex),Chennai",
    "Incentives scheme for rural girl students (MBC /DNC only)",
    "REHABILITATION OF THE DISABLED- SCHOLARSHIP",
    "Hostels - Uniforms",
    "Grant-cum-loan scheme for small and medium farmers",
    "NUTRITION - Puratchi Thalaivar MGR Nutritious Meal Programme",
    "Burial Ground - Provision of Burial Grounds and pathway to Burial Grounds",
    "Primary Cooperative Agriculture and Rural Development Bank - For Plantation (Tea)",
    "Annal Gandhi Memorial Award - Two (One Boy and One Girl) Hindu AD Students in each district who have secured first rank in the 12th Std Public Examinations and continue their studies",
    "District central Cooperative Banks and through its branches - For SSI unit loan and other NFS activities",
    "Organizing Block Demonstration",
    "Destitute Agricultural Labourer Pension Scheme",
    "Issue of certificate - ST Community Certificate",
    "Cadet Welfare Society High Risk Activities ( For temporary disability cases )",
    "Schemes of social welfare and nutritious meal programme Destitute Deserted Wives Pension Scheme",
    "EARLY INTERVENTION CENTRE FOR THE MENTALLY RETARDED CHILDREN",
    "Book Bank - Books will be purchased for Medical/ Engineering/ Law / M.B.A./Veterinary / Agri. and Polytechnic/courses and placed in the Library",
    "Integrated Education for the Disabled Children ( IEDC) - To enable the disabled children to mingle freely with normal children without barriers",
    "Primary Cooperative Agriculture and Rural Development Bank - For Poultry development",
    "AWARD FOR THE VISUALLY HANDICAPPED STUDENTS OF X STANDARD RANK HOLDERS STATE LEVEL",
    "Micro Nutrient spray",
    "Schemes of Revenue Dept Tamil Nadu Agriculture Labourers – farmer (Social security and welfare) scheme, 2006 11",
    "Schemes of revenue dept Accident relief scheme (G.O. 471, Finance (CMPRF) dt. 23.5.1989",
    "Issue of certificate - Certificate for loss of school records for getting duplicate",
    "Dr Muthulakshmi Reddy Intercaste Marriage scheme",
    "Health Insurance Scheme for Weavers",
    "Postmatric Scholarship - All compulsorily payable fees, Exam fees and maintenance charges payable to Schools and Colleges are sanctioned as scholarship",
    "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY TRAINING",
    "CHIEF MINISTER’S AWARD - CHIEF MINISTER’S AWARD FOR COACHES AND PHYSICAL EDUCATION TEACHERS",
    "Book Bank - Books will be purchased for Medical/ Engineering/ Law / M.B.A./Veterinary / Agri. and Polytechnic / courses and placed in the Library",
    "Handlooms and Textiles Department - Institutions Under The Control Of The Department And Their Activities - Tamilnadu Co-operative Spinning Mills Federation Limited (TANSPIN), Chennai",
    "Pipes carrying water from source to field - Pulses ISPOM",
    "Provision of Minor Irrigation",
    "Under Integrated Scheme for Oilseeds, Oilpalm and Maize (ISOPOM)",
    "Distribution of Certified Seeds of maize",
    "Special Prize Money Award - Grant of one time award to the Graduates and Post Graduate & Professional courses",
    "Co-operative Handloom Weavers’ Savings and Security Scheme",
    "CHIEF MINISTER’S AWARD - CASH INCENTIVES FOR SAF GAMES / NATIONAL GAMES ( INDIVIDUAL EVENTS )",
    "Distribution of manually operated Plant Protection Equipment",
    "Handlooms and Textiles Department - Prize Award Scheme for the Best Exporters",
    "Welfare Schemes of the School Education Department - Distribution of Free Uniforms",
    "Incentive / Award of Prizes - State Level (a) +2 Public Examination Rs. 25,000/-(b)10th public Examination Rs. 10,000/-",
    "Development Schemes - Free Supply of Dhothies and Sarees Scheme",
    "Distribution of Rhizobium Packets - Oilseeds",
    "Production of Foundation Seeds",
    "Book Bank - Books will be purchased for Medical/ Engineering/ Law / M.B.A./Veterinary / Agri. and Polytechnic / courses and placed in the Library",
    "Adi Dravidar and Tribal Welfare Department - Stationary - Text Books",
    "Integrated Pest Management Demonstration cum Training",
    "Schemes of BC, MBC, dept - Stationery - Note Books",
    "Purchase of passenger bus, Mini lorry, Car, Jeep",
    "APPOINTMENT OF GUARDIANS TO SPECIAL CATEGORIES OF DISABLED PERSONS UNDER THE NATIONAL TRUST ACT, 1999",
    "Free Education - Special fee and Examination fee to students studying in B.A., B.Sc., B.Com., other degree courses & Girl Students of P.G. Courses",
    "Destitute Agricultural Labourers Pension Scheme (G.O(Ms)164, S.W. & N.M.P. Department, dated 12.3.1981",
    "Handlooms and Textiles Department -Institutions Under The Control Of The Department And Their Activities - Tamilnadu Co-operative Textile Processing Mills Limited, Erode",
    "Handlooms and Textiles Department - Institutions Under The Control Of The Department And Their Activities - Tamilnadu Textile Corporation Limited, Coimbatore",
    "Pipes carrying water from source to field",
    "Primary Cooperative Agriculture and Rural Development Bank - For Handloom and other non farm sector activities",
    "Schemes of Revenue dept Road Accident Relief (G.O.817, Home(Transport) - For loss one eye,one hand,one leg",
    "Abolition of Bonded Labour System",
    "YOUTH WELFARE AND SPORTS DEVELOPMENT DEPARTMENT - NATIONAL CADET CORPS",
    "Handlooms and Textiles Department - Institutions Under The Control Of The Department And Their Activities - Tamilnadu Handloom Development Corporation Limited, Chennai",
    "Welfare Schemes of the School Education Department - Parent Teacher Association - Parent Teacher Association",
    "Issue of certificate - Ownership Certificate for loan",
    "Co-operative Handloom Weavers’ Old Age Pension Scheme",
    "GOVERNMENT CARE CAMP, MELPAKKAM",
    "Issue of certificate - Deserted Women Certificate for getting preference in Govt. employment",
    "Salary loan for government employee",
    "MOTORISED CYCLES (INVALID CARRIAGE)",
    "Reservation for Micro Enterprises in TANSIDCO Industrial Estates",
    "Reservation for Micro , Small and Medium Enterprises in SIPCOT Industrial Estates",
    "Infrastructure subsidy for Privately Developed Industrial Estates",
    "Site Purchase",
    "Chief Minister Merit Award- Given Rs.3000/- per annum for 5 years",
    "All India Service Examinations like I.A.S., I.P.S., I.R.S., etc.",
    "Admission of Adi Dravidar / Tribal students in plusone at reputed schools",
    "Produce pledge loan",
    "Schemes of Revenue dept Relief to Loss of human lives occurred due to natural calamities like food, cyclone and fire during seasonal and unseasonal periods (G.O(Ms)No. 1121,Revenue, dated 25.10.1996)",
    "Scholarship - Assistance to the children of those engaged in unclean occupations",
    "WHEEL CHAIRS",
    "FREE TRAVEL CONCESSION TO THE MENTALLY RETARDED PERSONS IN STATE OWNED TRANSPORT CORPORATION BUSES",
    "Sericulture - Catalytic Development Programme - Bivoltine Training to farmers",
    "FREE TRAVEL CONCESSION TO THE DISABLED PERSONS IN STATE OWNED TRANSPORT CORPORATION BUSES",
    "Sahara Group of Companies",
    "Text Books From 1st to 12th std BC MBC DNC",
    "Primary Cooperative Agriculture and Rural Development Bank - For Inland fishing",
    "Stationery - Uniforms",
    "Grant of State's Overseas Scholarship - Scholarship to AD/Tribal students pursuing higher studies in abroad",
    "Issue of certificate - Unmarried certificate",
    "Schemes of Revenue Dept Transfer of land",
    "Sericulture - Catalytic Development Programme -Provision of incentive to Bivoltine Silk production",
    "Welfare Schemes of the School Education Department - Distribution of Free Text Books",
    "HOMES FOR THE MENTALLY RETARDED ABOVE THE AGE OF 14 YEARS",
    "Examination fees - From 2007-08 academic year onwards Tamil Medium students are exempted from payment of examination fees",
    "Youth Welfare and Sports Development Department - Outstanding sports persons of yesteryears in indigent circumstances",
    "Distribution of Gypsum",
    "Schemes of revenue dept Accident Relief Scheme (G.O. 471, Finance (CMPRF) dt. 23.5.1989",
    "Free Bus Pass - Providing Free Bus Pass to Students",
    "Award of Rs.20,000/- to Best Writers",
    "Employment opportunities to Educated Tribal Youths",
    "Issue of certificate - No dues certificate for loan",
    "Co-operative Handloom Weavers’ Family Pension Scheme",
    "Large sized multi purpose Coop.Society For interest free loan",
    "farmer (Social security and welfare) scheme, 2006 02",
    "FREE TRAVEL CONCESSION TO THE HEARING IMPAIRED AND LOCOMOTOR DISABLED PERSONS IN STATE OWNED TRANSPORT CORPORATION BUSES",
    "Construction of free houses for tribals",
    "Chief Minister s Merit Award",
    "Welfare Schemes of the School Education Department - Special Literacy Proramme for Women",
    "Distribution of Gypsum - Oil Seeds",
    "Adi Dravidar and Tribal Welfare Department -Scholarship - Public Examination fee for 10th and 12th Std.",
    "SELF EMPLOYMENT",
    "Maintenance Charges - Dayscholars",
    "Schemes of Revenue Dept Assignment of land to landless poor - house site assignment",
    "National Teachers Welfare Fund - Educational scholarship to the children of Teachers",
    "Schemes of Revenue Dept Issue of Patta Transfer",
    "Issue of certificate - Nativity Certificate",
    "National Teachers Welfare Fund - Medical Aid to Teachers",
    "Loan on title deeds",
    "ASSISTANCE FOR CORRECTIVE SURGERY FOR POLIO AND SPINAL CORD INJURED PERSONS",
    "Food Grant",
    "Adi Dravidar and Tribal Welfare Department - Stationary - Text Books",
    "Livelihood activities for asset less persons-2012",
    "Sericulture - Hill Area Development Programme (HADP) - Plantation incentive",
    "Sericulture - Catalytic Development Programme - Procurement of improved Rearing Appliances",
    "farmer (Social security and welfare) scheme, 2006 III FUNERAL EXPENSES Rs.2,500",
    "Sports Development Authority of Tamil Nadu - Government of Tamil Nadu Allotment of ½ mark for the oral test in the B.T. / P.G. Assistants recruitment appointment",
    "Primary Cooperative Agriculture and Rural Development Bank - For Power tiller",
    "Assistance for delivery of a child",
    "Crop loans Sugarcane",
    "Schemes of Revenue Dept Tamil Nadu Agriculture Labourers – farmer (Social security and welfare) scheme, 2006 07",
    "Assistance for Marriage",
    "Welfare Schemes of the School Education Department - Incentive to Girls Students",
    "Handlooms and Textiles Department - Payment of scholarship to students of Indian Institute of Handloom Technology, Salem",
    "Schemes of social welfare and nutritious meal programme. Annapurna Scheme",
    "PERARIGNAR ANNA MEMORIAL AWARD",
    "PRE-MATRIC SCHOLARSHIP SCHEME",
    "Postmatric Scholarship are sanctioned from 11th Standard to Research level as per the rates prescribed in the Scholarship Notitification",
    "Scholarship - Beyond 12th Std. Students studying in Govt. / Govt. aided institutions are exempted from payment of tuition fees",
    "CHIEF MINISTER’S AWARD - JOINT SPORTS DEVELOPMENT CENTRE - KIT AND SPORTS EQUIPMENTS",
    "Adi Dravidar and Tribal Welfare Department -Incentive / Award of Prizes - District Level Prize +2 Examination Rs.3000/- 10th Std First prize Rs.1000/- Second Prize Rs.500/- Third Prize Rs.300/",
    "Post Matric Scholarship",
    "FREE EDUCATION SCHEME",
    "DISTRICT LEVEL PRIZES PUBLIC EXAMINATION 10th Standard and 12th Standard",
    "SECONDARY GRADE TEACHERS TRAINING INSTITUTE FOR THE VISUALLY AND ORTHOPAEDICALLY HANDICAPPED PERSONS (DIPLOMA IN TEACHER EDUCATION)",
    "Free education scholarship for three year Diploma (Polytechnic Courses)",
    "Free education scholarship for Professional Courses (Engineering, Medical, Agriculture, Veterinary and Law)",
    "Schemes of BC, MBC, dept - Stationery - Supply of Slates",
    "Prize Schemes to the Students STATE LEVEL PRIZES",
    "Free Education (Degree)",
    "Issue of certificate - Certificates of destitute for admission in Orphanages",
    "Scheme for Meritorious students to pursue Higher Secondary Education in the best schools of TamilNadu",
    "Chief Minister's Merit Award",
    "EARLY INTERVENTION CENTRE FOR INFANT AND YOUNG CHILDREN WITH HEARING IMPAIRMENT",
    "Insurance scheme to the Primitive Tribal (Janasree Beema Yojana scheme)",
    "Indira Gandhi National Old Age Pension Scheme",
    "Schemes of Tribal Welfare Department",
    "Issue of certificate - Location certificate",
    "Higher Education Special Scholarship Scheme",
    "Land Development Scheme",
    "UNEMPLOYMENT ALLOWANCE TO THE VISUALLY HANDICAPPED",
    "GOVERNMENT REHABILITATION HOMES",
    "Stationary - Note Books",
    "NSKFDC",
    "Grants to perform Funeral Rites",
    "Animal Husbandry",
    "NSLRS",
    "WORKING WOMEN’S HOSTEL",
    "BRAILLE WATCHES",
    "Handlooms and Textiles Department - Scheme for integrated textile parks(SITP)",
    "Housing Scheme",
    "Distress Relief Scheme",
    "SSI unit",
    "Schemes of Revenue Dept Issue of extract of Village Account",
    "Educational Scholarship - Educational Scholarship to Children of Servicemen / Ex-Servicemen, Sri Lankan and other Refugees",
    "Accident Relief Scheme",
    "Tuition Fees for English Medium Students",
    "Farmers Interest Group (FIG)",
    "Free Education Polytechnic",
    "Maintenance Charges - Hostellers",
    "Sericulture - Catalytic Development Programme - Establishment of cottage basin reeling units",
    "Sericulture - Hill Area Development Programme (HADP) - Construction of separate Rearing House",
    "Schemes of Revenue Dept Assignment of land to landless poor",
    "For two wheelers",
    "Welfare Schemes of the School Education Department - Supply of Free Bicycles",
    "ASSISTANCE TO LAW GRADUATES",
    "Revamped Micro Credit",
    "Western GHAT Development Programme",
    "Schemes of Revenue Dept Tamil Nadu Agriculture Labourers – farmer (Social security and welfare) scheme, 2006 06",
    "Schemes of Revenue dept Accident related injuries (G.O. 471, Finance(CMPRF) dt. 23.5.1989",
    "Construction of House",
    "RESERVATION OF NON TEACHING POSTS IN EDUCATIONAL INSTITUTIONS FOR SPEECH AND HEARING IMPAIRED PERSONS",
    "District central Cooperative Banks and through its branches - For Jewel loan",
    "Adi Dravidar and Tribal Welfare Department -Scholarship - Public Examination fee for 10th & 12th Std.",
    "E.V.R. Maniammaiyar Ninaivu Poor Widow’s Daughter’s Marriage Assistance Scheme",
    "Youth Welfare and Sports Development Department - SPORTS PERSONS’ WELFARE FUND",
    "CHIEF MINISTER’S AWARD - CASH INCENTIVES",
    "Distribution of Nuclear Poly Hedrosis Virus",
    "TRAINING TO THE SPEECH AND HEARING IMPAIRED (MALE)",
    "Schemes of BC, MBC, dept - Stationery - Free supply of Text Books",
    "Sericulture - Catalytic Development Programme - Establishment of chawkie rearing center",
    "Afforestation schemes providing incentives and providing employment to Tribals in Forest Operation",
    "Burial Ground - Provision of Burial Grounds and pathway to Burial Grounds",
    "Medal winners",
    "Supply of Sewing Machines",
    "DG NCC (Towards Scholarship for All India Best Cadets",
    "FREE COMPUTER TRAINING COURSE",
    "Self Help Group",
    "Sports Development Authority of Tamil Nadu - Government of Tamil Nadu Scholarship For Junior Division /Junior Wing Cadets",
    "Assistance for Funeral Rites",
    "Handlooms and Textiles Department - Technology Upgradation Fund Scheme (TUFS)",
    "Supply of 10 Beehives at free of cost for collecting honey",
    "Pre Matric Scholarships",
    "Job Oriented Training - 2.2 Typewriting and shorthand",
    "REGISTRATION OF COMPLAINTS UNDER PERSONS WITH DISABILITIES ACT, 1995",
    "Cadet Welfare Society Scholarships",
    "farmer (Social security and welfare) scheme, 2006 03",
    "GOVERNMENT SERVICE HOME",
    "Schemes of Revenue Dept Tamil Nadu Agriculture Labourers – farmer (Social security and welfare) scheme, 2006",
    "Hostels - Mats and Bed Sheets",
    "Issue of certificate - No house site Certificate",
    "Production of Certified Seeds",
    "Hostels - Free Boarding and lodging to student studying upto 12th standard",
    "Maternity loan through Self help group",
    "SPECIAL EDUCATION",
    "Distribution of Soil Health card",
    "Sericulture - Catalytic Development Programme - Construction of separate Rearing House",
    "Issue of certificate - Solvency Certificate",
    "Assistance for miscarriage or Termination of Pregnancy",
    "Issue of certificate - DNC Community Certificate",
    "Development of Agricultural lands",
    "Issue of certificate - Unemployement Certificate",
    "Merit-cum-Means Scholarships to minority students",
    "CHIEF MINISTER’S AWARD - CASH INCENTIVES FOR ASIAN GAMES INDIVIDUAL EVENT /TEAM EVENTS PER PLAYER",
    "MAINTENANCE ALLOWANCE TO MENTALLY RETARDED PERSONS",
    "Primary Cooperative Agriculture and Rural Development Bank - For Horticulture",
    "Journalists Medical Fund",
    "Issue of certificate - Non Graduate certificate",
    "farmer (Social security and welfare) scheme, 2006 10",
    "Welfare Schemes of the School Education Department - Project for Residual Illiteracy (PRI)",
    "Schemes of Revenue Dept Distribution of free color television",
    "Issue of certificate - Intercaste Marriage Certificate",
    "Employees Cooperative societies Surety loan",
    "Integrated Handlooms Development Scheme - Cluster Development Programme",
    "Stationary - Bicycles",
    "Annai Theresa Ninaivu Orphan girls Marriage Assistance Scheme",
    "Loans for Transport Sector:",
    "Housing and other Schemes",
    "Housing and other Schemes - Encroachments will be regularised for issue of pattas",
    "Death and Funeral Expenses",
    "Application for State Capital Subsidy",
    "Visit of Contract Farming farmers to the Research Stations in Karnataka",
    "SIVAGAMI AMMAIYAR MEMORIAL GIRL CHILD PROTECTION SCHEME",
    "Free Education - Granting of admission fees, Registration fees to ADs / Tribals / AD Converted to Christianity Girls students who join Degree, Post Graduate Degree, Professional Courses",
    "Schemes of revenue dept Deserted and Destitute wife Pension Scheme (G.O.(Ms).1465, S.W. Department, dated 3.5.1984",
    "Schemes of Revenue dept Road Accident Relief (G.O.817, Home(Transport) Dept., dt. 8.6. 99",
    "TRAINING TO THE VISUALLY HANDICAPPED (MALE)",
    "Scholarship - Granting of Special fee",
    "Schemes of revenue dept destitute old age pension scheme (g.o. 73, finance (pension) department, dated 22.1.1962 - Free Saree/Dhothi",
    "Farmers Training",
    "Awards to Bright Students",
    "farmer (Social security and welfare) scheme, 2006 farmer (Social security and welfare) scheme, 2006 09",
    "Subsidy on the assessed Value Added Tax (VAT)",
    "Assistance for purchase of Spectacles",
    "Assistance for Education",
    "SCHOLARSHIP - For age of 12 to 14",
    "Community Halls",
    "Professional Courses",
    "Protection of women from domestic violence",
    "HEARING AIDS AND SOLAR RE-CHARGEABLE BATTERIES",
    "Schemes of revenue dept Destitute Physically handicapped pension Scheme (G.O. 1402 , Finance Pension) Department,dated 6.11.1974)",
    "Youth Welfare and Sports Development Department - RESERVATION IN RECRUITMENT",
    "Seed Multiplication Scheme of Paddy, Millets, Pulses, Oilseeds and Cotton",
    "Quality Paddy seed Distribution",
    "Reimbursement of hall rent for conducting exhibition by MSME Association",
    "Large sized multi purpose Coop.Society Jewel Loan (interest free)",
    "Free Education - Special fee and Examination fee to students studying in B.A., B.Sc., B.Com., other degree courses & Girl Students of P.G. Courses",
    "Subsidy on the cost of Trade Mark Registration in India or abroad",
    "Organizing Block demonstration on Polythene mulch Technology in Groundnut",
    "LOAN ASSISTANCE FROM NATIONAL HANDICAPPED FINANCE AND DEVELOPMENT CORPORATION (NHFDC)",
    "Issue of certificate - Residence Certificate",
    "Tamil Nadu Agricultural Labourers Agriculturalists Social Security And Welfare Scheme 2006 - Provision of education Scholarship to the children of agricultural labourers who have passed 10th and 12th standards",
    "PRE SCHOOL FOR YOUNG HEARING IMPAIRED CHILDREN",
    "Sports Development Authority of Tamil Nadu - Government of Tamil Nadu Scholarship For Senior Division /Senior Wing Cadets",
    "MAINTENANCE ALLOWANCE TO SEVERELY DISABLED PERSONS",
    "GOVERNMENT INSTITUTE FOR THE MENTALLY CHALLENGED, CHENNAI",
    "Cadet Welfare Society High Risk Activities ( For death cases )",
    "Technology Development Fund for evolving cleaner and / or energy efficient or IT enabled technologies for Micro, Small & Medium Manufacturing Sector",
    "Schemes of revenue dept Destitute Widow Pension Scheme (G.O. 507, Finance Department, dated 27.5.1975)",
    "Supply of Iron Box",
    "Sericulture - All Technical Assistance - Supply of layings & Technical guidelines",
    "AWARD FOR THE VISUALLY HANDICAPPED STUDENTS OF X STANDARD RANK HOLDERS DISTRICT LEVEL",
    "Handlooms and Textiles Department - Important Activities Prescribed In The TamilNadu Co-Operative Socieites Act,1983",
    "Schemes of Revenue Dept Tamil Nadu Agriculture Labourers – farmer (Social security and welfare) scheme, 2006 08",
    "Annal Gandhi Memorial Award - Two (One Boy and One Girl) Hindu AD Students in each district who have secured first rank in the 12th Std Public Examinations and continue their studies",
    "District central Cooperative Banks and through its branches - For Small Road Transport Operators loan (SRTO loan)",
    "Issue of certificate - Aliveness Certificate for pension",
    "Cadet Welfare Society High Risk Activities ( For permanent disability cases )",
    "Stationary - Special Guides and Question Bank",
    "Dr. Dharmambal Ammaiyar Ninaivu Widow Remarriage Scheme",
    "CHIEF MINISTER’S AWARD - NATIONAL SERVICE SCHEME",
    "Tamil Nadu Agricultural Labourers Agriculturalists Social Security And Welfare Scheme 2006 - Educational Assistance to Children of whose father / mother died (Or) permanently incapacitated in accidents",
    "Members Children Educational Loan",
    "Issue of certificate - BC Community Certificate",
    "GOVERNMENT INSTITUTE FOR THE MENTALLY CHALLENGED",
    "MODULAR FUNCTIONAL ARTIFICIAL LIMBS (MODULAR TRANSTIBIAL PROSTHESIS)",
    "CHIEF MINISTER’S AWARD - NATIONAL SERVICE SCHEME FOR SPECIAL CAMPING",
    "SCHOLARSHIP - For age of 6 to 11",
    "RESERVATION OF TEACHING POSTS IN EDUCATIONAL INSTITUTIONS FOR VISUALLY HANDICAPPED",
    "Issue of certificate - Income Certificate",
    "Large sized multi purpose Coop.Society Medium Term loan to Tribal members",
    "Production of Foundation and Certified Seeds",
    "Educational Scholarship to School Students - Adi Dravida, Tribal, Most Backward Denotified Communities. Backward Communities Welfare Scholarship",
    "REHABILITATION OF THE DISABLED- READERS ALLOWANCE TO VISUALLY HANDICAPPED PERSONS",
    "Consumer durables",
    "Sericulture - Western Ghats Development Programme -WGDP - Procurement of improved Rearing Appliances",
    "SCRIBE ASSISTANCE",
    "Stationary - Uniforms",
    "Distribution of Free House Site Patta",
    "Jewel loan",
    "Handlooms and Textiles Department - Institutions Under The Control Of The Department And Their Activities - Tamilnadu Zari Limited, Kancheepuram",
    "Subamathi Self Help Group",
    "Training to Farmers",
    "Sericulture - Western Ghats Development Programme -WGDP - Construction of separate Rearing House",
    "Issue of certificate - MBC Community Certificate",
    "farmer (Social security and welfare) scheme, 2006 04",
    "Provision of street lights to Tribal habitations",
    "Assistance to Lawyers for Starting their Practice",
    "Destitute Widow Pension Scheme",
    "Annal Gandhi Memorial Award",
    "Journalists Family Benefit Fund",
    "Stamp duty exemption on mortgaged and pledged documents",
    "Low Tension power tariff subsidy",
    "Special capital subsidy for thrust sector enterprises",
    "Generator subsidy",
    "Term loan obtained for Technology upgradation / modernisation schemes",
    "Term loan obtained under NEF scheme of TIIC (Renamed as Micro/Small Enterprises Funding Scheme)",
    "Term loan obtained for ISO Certification/R&D under NSICTANSIDCO Consortium",
    "Term loan obtained under Credit Guarantee Fund Trust Scheme",
    "Price Preference for Micro and Small Enterprises in Government purchases",
    "Waiver of Earnest Money Deposit for participation in Tenders",
    "Subsidy on the cost of Patent Registration in India or abroad",
    "Skill Development Training Schemes and Skill Upgradation Training Schemes",
    "Unemployed Youth Employment Generation Programme (UYEGP)",
    "Application for Special Capital (Investment) Subsidy",
    "New Health Insurance Scheme",
    "Journalists Pension",
    "Journalists Family Pension",
    "Farm Production System and micro enterprises - Sponsored By State Govt",
  ];

  const filteredSchemes = schemes.filter((scheme) =>
    scheme.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <motion.h1
        className="text-3xl font-bold text-center text-orange-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Schemes Finder - தமிழ்நாடு அரசு திட்டங்கள்
      </motion.h1>

      {/* Form Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name / முழு பெயர்"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <select
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Age / வயதை தேர்ந்தெடு</option>
            <option value="Below 18">Below 18 / 18 க்கு கீழ்</option>
            <option value="18-35">18-35</option>
            <option value="35-60">35-60</option>
            <option value="Above 60">Above 60 / 60 க்கு மேல்</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="income"
            value={formData.income}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Income / வருமானத்தை தேர்ந்தெடு</option>
            <option value="Below 1.5 Lakh">
              Below 1.5 Lakh / 1.5 லட்சத்திற்கு கீழ்
            </option>
            <option value="1.5-3 Lakhs">1.5-3 Lakhs</option>
            <option value="3-6 Lakhs">3-6 Lakhs</option>
            <option value="6-12 Lakhs">6-12 Lakhs</option>
            <option value="Above 12 Lakhs">
              Above 12 Lakhs / 12 லட்சத்திற்கு மேல்
            </option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="caste"
            value={formData.caste}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Caste / சாதியை தேர்ந்தெடு</option>
            <option value="SC">SC / எஸ்சி (Scheduled Caste)</option>
            <option value="ST">ST / எஸ்டி (Scheduled Tribe)</option>
            <option value="OBC">OBC / ஓபிசி (Other Backward Class)</option>
            <option value="MBC">MBC / எம்பிசி (Most Backward Class)</option>
            <option value="FC">FC / எஃப்சி (Forward Caste)</option>
            <option value="General">General / பொது</option>
            <option value="Others">Others / மற்றவை</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Gender / பாலினத்தை தேர்ந்தெடு</option>
            <option value="Male">Male / ஆண்</option>
            <option value="Female">Female / பெண்</option>
            <option value="Other">Other / மற்றவை</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Education / கல்வியை தேர்ந்தெடு</option>
            <option value="Below 8th">
              Below 8th / 8 ஆம் வகுப்புக்கு கீழ்
            </option>
            <option value="8th Pass">8th Pass / 8 ஆம் வகுப்பு</option>
            <option value="10th Pass">10th Pass / 10 ஆம் வகுப்பு</option>
            <option value="12th Pass">12th Pass / 12 ஆம் வகுப்பு</option>
            <option value="Graduate">Graduate / பட்டதாரி</option>
            <option value="Postgraduate">Postgraduate / முதுகலை</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">
              Select Marital Status / திருமண நிலையை தேர்ந்தெடு
            </option>
            <option value="Single">Single / திருமணமாகாதவர்</option>
            <option value="Married">Married / திருமணமானவர்</option>
            <option value="Divorced">Divorced / விவாகரத்து பெற்றவர்</option>
            <option value="Widowed">Widowed / விதவை/விதவர்</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Religion / மதத்தை தேர்ந்தெடு</option>
            <option value="Hindu">Hindu / இந்து</option>
            <option value="Muslim">Muslim / முஸ்லிம்</option>
            <option value="Christian">Christian / கிறிஸ்தவர்</option>
            <option value="Sikh">Sikh / சீக்கியர்</option>
            <option value="Other">Other / மற்றவை</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Occupation / தொழிலை தேர்ந்தெடு</option>
            <option value="Agriculture">Agriculture / விவசாயம்</option>
            <option value="Government Employee">
              Government Employee / அரசு ஊழியர்
            </option>
            <option value="Private Sector">
              Private Sector / தனியார் துறை
            </option>
            <option value="Self-Employed">Self-Employed / சுயதொழில்</option>
            <option value="Unemployed">Unemployed / வேலையில்லாதவர்</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Location / இடத்தை தேர்ந்தெடு</option>
            <option value="Ariyalur">Ariyalur / அரியலூர்</option>
            <option value="Chengalpattu">Chengalpattu / செங்கல்பட்டு</option>
            <option value="Chennai">Chennai / சென்னை</option>
            <option value="Coimbatore">Coimbatore / கோயம்புத்தூர்</option>
            <option value="Cuddalore">Cuddalore / கடலூர்</option>
            <option value="Dharmapuri">Dharmapuri / தர்மபுரி</option>
            <option value="Dindigul">Dindigul / திண்டுக்கல்</option>
            <option value="Erode">Erode / ஈரோடு</option>
            <option value="Kallakurichi">Kallakurichi / கல்லக்குறிச்சி</option>
            <option value="Kanchipuram">Kanchipuram / காஞ்சிபுரம்</option>
            <option value="Kanyakumari">Kanyakumari / கன்னியாகுமரி</option>
            <option value="Karur">Karur / கரூர்</option>
            <option value="Krishnagiri">Krishnagiri / கிருஷ்ணகிரி</option>
            <option value="Madurai">Madurai / மதுரை</option>
            <option value="Mayiladuthurai">Mayiladuthurai / மயிலாடுதுறை</option>
            <option value="Nagapattinam">Nagapattinam / நாகப்பட்டினம்</option>
            <option value="Namakkal">Namakkal / நாமக்கல்</option>
            <option value="Perambalur">Perambalur / பெரம்பலூர்</option>
            <option value="Pudukkottai">Pudukkottai / புதுக்கோட்டை</option>
            <option value="Ramanathapuram">Ramanathapuram / ராமநாதபுரம்</option>
            <option value="Ranipet">Ranipet / ராணிப்பேட்டை</option>
            <option value="Salem">Salem / சேலம்</option>
            <option value="Sivaganga">Sivaganga / சிவகங்கை</option>
            <option value="Tenkasi">Tenkasi / தென்காசி</option>
            <option value="Thanjavur">Thanjavur / தஞ்சாவூர்</option>
            <option value="Theni">Theni / தேனி</option>
            <option value="Thoothukudi">Thoothukudi / தூத்துக்குடி</option>
            <option value="Tiruchirappalli">
              Tiruchirappalli / திருச்சிராப்பள்ளி
            </option>
            <option value="Tirunelveli">Tirunelveli / திருநெல்வேலி</option>
            <option value="Tirupathur">Tirupathur / திருப்பத்தூர்</option>
            <option value="Tiruppur">Tiruppur / திருப்பூர்</option>
            <option value="Tiruvallur">Tiruvallur / திருவள்ளூர்</option>
            <option value="Tiruvannamalai">
              Tiruvannamalai / திருவண்ணாமலை
            </option>
            <option value="Tiruvarur">Tiruvarur / திருவாரூர்</option>
            <option value="Vellore">Vellore / வேலூர்</option>
            <option value="Viluppuram">Viluppuram / விழுப்புரம்</option>
            <option value="Virudhunagar">Virudhunagar / விருதுநகர்</option>
            <option value="Other">Other / மற்றவை</option>
          </select>
        </div>

        <button className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200">
          Search / தேடு
        </button>
      </div>

      {/* Schemes List Section */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Available Schemes / கிடைக்கும் திட்டங்கள்
        </h2>

        {/* Search Filter Input */}
        <input
          type="text"
          placeholder="Search Schemes / திட்டங்களைத் தேடு"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full max-w-md p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <div className="w-full max-h-96 overflow-y-auto">
          <ul className="list-decimal pl-6 space-y-2">
            {filteredSchemes.length > 0 ? (
              filteredSchemes.map((scheme, index) => (
                <motion.li
                  key={index}
                  className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {scheme}
                </motion.li>
              ))
            ) : (
              <li className="text-gray-500">
                No schemes found / திட்டங்கள் எதுவும் கிடைக்கவில்லை
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
