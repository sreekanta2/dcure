// Sample Doctor Data
export const doctorsData = [
  {
    id: "1",
    userId: "user_cuid_123",
    user: {
      id: "user_cuid_123",
      name: "Dr.doctor",
      email: "doctor@example.com",
      specialties: "Dental Care",
      earn: 2000,
      image: "/images/doctor-profile/doctor-18.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
    },
    phoneNumber: "+1-234-567-8901",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    displayName: "Dr. John Doe",
    addresses: {
      id: "address_cuid_123",
      address: "123 Main St, New York",
      city: "New York",
      state: "NY",
      country: "USA",
      zip: "10001",
    },
    languages: [
      {
        id: "doctor_lang_cuid_123",
        language: {
          id: "lang_cuid_123",
          name: "English",
        },
      },
      {
        id: "doctor_lang_cuid_124",
        language: {
          id: "lang_cuid_124",
          name: "Spanish",
        },
      },
    ],
    experience: [
      {
        id: "exp_cuid_123",
        title: "Cambridge University Hospital, NHS Foundation Trust Cambridge",
        organization: "Dec 2020 - Jan 2022 Years 2 months",
        yearsOfExperience: "10",
        location: "New York",
        startDate: "2014-06-01T00:00:00Z",
        endDate: null,
        description:
          "Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine.",
        employmentsType: "fulltime",
        currentlyWorking: true,
        thumbnail: "/images/doctors/experience/experience-logo-01.svg",
      },
      {
        id: "exp_cuid_124",
        title: "Senior Cardiologist",
        organization: "ABC Hospital",
        yearsOfExperience: "10",
        location: "New York",
        startDate: "2014-06-01T00:00:00Z",
        endDate: null,
        description:
          "lorem ipsum dolor sit amet, consectetur adip nonum. Excepteur sint et nonum. Lore m erat non pro et non",
        employmentsType: "fulltime",
        currentlyWorking: true,
        thumbnail: "/images/doctors/experience/experience-logo-02.svg",
      },
    ],
    treatments: [
      {
        id: "treat_cuid_001",
        specialty: {
          id: "spec_cuid_001",
          name: "Orthopedic Consultation",
        },
        description:
          "Expert evaluation and treatment for bone and joint issues.",
        price: "150 USD",
        thumbnail: "https://example.com/orthopedic.jpg",
      },
      {
        id: "treat_cuid_002",
        specialty: {
          id: "spec_cuid_002",
          name: "Cardiology Checkup",
        },
        description: "Comprehensive heart health assessment and diagnostics.",
        price: "250 USD",
        thumbnail: "https://example.com/cardiology.jpg",
      },
      {
        id: "treat_cuid_003",
        specialty: {
          id: "spec_cuid_003",
          name: "Dermatology Consultation",
        },
        description:
          "Diagnosis and treatment for skin, hair, and nail conditions.",
        price: "120 USD",
        thumbnail: "https://example.com/dermatology.jpg",
      },
      {
        id: "treat_cuid_004",
        specialty: {
          id: "spec_cuid_004",
          name: "Neurology Consultation",
        },
        description: "Evaluation and management of neurological disorders.",
        price: "300 USD",
        thumbnail: "https://example.com/neurology.jpg",
      },
      {
        id: "treat_cuid_005",
        specialty: {
          id: "spec_cuid_005",
          name: "Pediatric Consultation",
        },
        description:
          "Comprehensive medical care for infants, children, and adolescents.",
        price: "100 USD",
        thumbnail: "https://example.com/pediatrics.jpg",
      },
      {
        id: "treat_cuid_006",
        specialty: {
          id: "spec_cuid_006",
          name: "Ophthalmology Examination",
        },
        description: "Eye health assessment and vision care services.",
        price: "180 USD",
        thumbnail: "https://example.com/ophthalmology.jpg",
      },
      {
        id: "treat_cuid_007",
        specialty: {
          id: "spec_cuid_007",
          name: "Dental Cleaning & Checkup",
        },
        description: "Professional dental cleaning and oral health checkup.",
        price: "80 USD",
        thumbnail: "https://example.com/dental.jpg",
      },
    ],

    insurances: [
      {
        id: "ins_cuid_123",
        name: "BlueCross BlueShield",
        insuranceType: "Health",
        thumbnail: "/images/doctors/insurances/insurence-logo-05.svg",
      },
      {
        id: "ins_cuid_124",
        name: "BlueCross BlueShield",
        insuranceType: "Health",
        thumbnail: "/images/doctors/insurances/insurence-logo-02.svg",
      },
      {
        id: "ins_cuid_125",
        name: "BlueCross BlueShield",
        insuranceType: "Health",
        thumbnail: "/images/doctors/insurances/insurence-logo-04.svg",
      },
      {
        id: "ins_cuid_126",
        name: "BlueCross BlueShield",
        insuranceType: "Health",
        thumbnail: "/images/doctors/insurances/insurence-logo-06.svg",
      },
      {
        id: "ins_cuid_127",
        name: "BlueCross BlueShield",
        insuranceType: "Health",
        thumbnail: "/images/doctors/insurances/insurence-logo-05.svg",
      },
      {
        id: "ins_cuid_128",
        name: "BlueCross BlueShield",
        insuranceType: "Health",
        thumbnail: "/images/doctors/insurances/insurence-logo-06.svg",
      },
      {
        id: "ins_cuid_129",
        name: "BlueCross BlueShield",
        insuranceType: "Health",
        thumbnail: "/images/doctors/insurances/insurence-logo-04.svg",
      },
      {
        id: "ins_cuid_130",
        name: "BlueCross BlueShield",
        insuranceType: "Health",
        thumbnail: "/images/doctors/insurances/insurence-logo-02.svg",
      },
      {
        id: "ins_cuid_131",
        name: "BlueCross BlueShield",
        insuranceType: "Health",
        thumbnail: "/images/doctors/insurances/insurence-logo-05.svg",
      },
    ],
    availability: [
      {
        id: "avail_cuid_001",
        date: new Date().toISOString(), // Today
        timeSlots: [
          {
            id: "slot_cuid_001",
            startTime: "09:00 AM",
            endTime: "11:00 AM",
            price: "150 USD",
            type: "Consultation",
            clinicId: "clinic_cuid_001",
          },
          {
            id: "slot_cuid_002",
            startTime: "02:00 PM",
            endTime: "04:00 PM",
            price: "200 USD",
            type: "Follow-up",
            clinicId: "clinic_cuid_001",
          },
        ],
      },
      {
        id: "avail_cuid_002",
        date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
        timeSlots: [
          {
            id: "slot_cuid_003",
            startTime: "10:00 AM",
            endTime: "12:00 PM",
            price: "180 USD",
            type: "Consultation",
            clinicId: "clinic_cuid_002",
          },
          {
            id: "slot_cuid_004",
            startTime: "03:00 PM",
            endTime: "05:00 PM",
            price: "250 USD",
            type: "Specialist Visit",
            clinicId: "clinic_cuid_002",
          },
        ],
      },
      {
        id: "avail_cuid_003",
        date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(), // Day After Tomorrow
        timeSlots: [
          {
            id: "slot_cuid_005",
            startTime: "08:30 AM",
            endTime: "10:30 AM",
            price: "170 USD",
            type: "Consultation",
            clinicId: "clinic_cuid_003",
          },
          {
            id: "slot_cuid_006",
            startTime: "01:00 PM",
            endTime: "03:00 PM",
            price: "220 USD",
            type: "Therapy Session",
            clinicId: "clinic_cuid_003",
          },
        ],
      },
      {
        id: "avail_cuid_004",
        date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 Days Later
        timeSlots: [
          {
            id: "slot_cuid_007",
            startTime: "11:00 AM",
            endTime: "01:00 PM",
            price: "160 USD",
            type: "General Checkup",
            clinicId: "clinic_cuid_004",
          },
          {
            id: "slot_cuid_008",
            startTime: "04:30 PM",
            endTime: "06:30 PM",
            price: "210 USD",
            type: "Consultation",
            clinicId: "clinic_cuid_004",
          },
        ],
      },
      {
        id: "avail_cuid_005",
        date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 Days Later
        timeSlots: [
          {
            id: "slot_cuid_009",
            startTime: "07:00 AM",
            endTime: "09:00 AM",
            price: "190 USD",
            type: "Emergency Visit",
            clinicId: "clinic_cuid_005",
          },
          {
            id: "slot_cuid_010",
            startTime: "12:00 PM",
            endTime: "02:00 PM",
            price: "230 USD",
            type: "Specialist Consultation",
            clinicId: "clinic_cuid_005",
          },
        ],
      },
    ],
    clinics: [
      {
        id: "clinic_cuid_123",
        name: "Heart Care Clinic",
        address: "456 Medical Rd, NY",
        price: "200 USD",
        latitude: "40.7128",
        longitude: "-74.0060",
        thumbnail: "/images/clinic/clinic-6.jpg",
      },
      {
        id: "clinic_cuid_124",
        name: "Heart Care Clinic",
        address: "456 Medical Rd, NY",
        price: "200 USD",
        latitude: "40.7128",
        longitude: "-74.0060",
        thumbnail: "/images/clinic/clinic-8.jpg",
      },
    ],
    awards: [
      {
        id: "award_cuid_001",
        name: "Best Cardiologist Award",
        organization: "National Health Association",
        description: "Recognized for excellence in cardiology",
        date: "2022-05-15T00:00:00Z",
      },
      {
        id: "award_cuid_002",
        name: "Excellence in Surgery",
        organization: "World Medical Federation",
        description:
          "Awarded for outstanding contributions to surgical advancements",
        date: "2021-11-20T00:00:00Z",
      },
      {
        id: "award_cuid_003",
        name: "Top Dermatologist of the Year",
        organization: "Global Skin Health Society",
        description: "Recognized for breakthroughs in skincare treatments",
        date: "2023-03-10T00:00:00Z",
      },
      {
        id: "award_cuid_004",
        name: "Innovator in Neurology",
        organization: "International Brain Research Organization",
        description: "Honored for groundbreaking research in neurology",
        date: "2020-07-25T00:00:00Z",
      },
      {
        id: "award_cuid_005",
        name: "Pediatric Care Excellence",
        organization: "American Pediatric Society",
        description:
          "Recognized for dedication and innovation in child healthcare",
        date: "2019-09-05T00:00:00Z",
      },
      {
        id: "award_cuid_006",
        name: "Best Orthopedic Surgeon",
        organization: "Global Orthopedic Society",
        description: "Awarded for exceptional skills in orthopedic surgery",
        date: "2023-06-18T00:00:00Z",
      },
      {
        id: "award_cuid_007",
        name: "Lifetime Achievement in Medicine",
        organization: "Medical Excellence Board",
        description:
          "Lifetime recognition for contributions to the medical field",
        date: "2018-04-12T00:00:00Z",
      },
      {
        id: "award_cuid_008",
        name: "Best Research in Oncology",
        organization: "Cancer Research Foundation",
        description: "Acknowledged for pioneering cancer treatment research",
        date: "2022-12-30T00:00:00Z",
      },
      {
        id: "award_cuid_009",
        name: "Global Health Leadership Award",
        organization: "World Health Organization (WHO)",
        description: "For leadership in global healthcare improvement",
        date: "2021-08-09T00:00:00Z",
      },
      {
        id: "award_cuid_010",
        name: "Excellence in Cardiac Surgery",
        organization: "American Heart Association",
        description: "Recognized for exceptional expertise in heart surgeries",
        date: "2023-01-15T00:00:00Z",
      },
    ],

    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
      {
        id: "review_cuid_124",
        patient: {
          name: "Alice",
          image: "/images/patient/patient2.webp",
        },
        rating: 5,
        comment:
          "Dr. Alice has been a lifesaver. I had been dealing with chronic pain for months, and she was the only one who took the time to properly diagnose and treat my condition. Her approach is holistic, considering not only my physical symptoms but also my emotional and mental well-being. The treatments she recommended have made a huge difference in my quality of life. Dr. Alice’s compassion and professionalism are unmatched, and I’m so grateful to have found such a caring doctor. I highly recommend her to anyone looking for thorough, personalized care.",
      },
      {
        id: "review_cuid_125",
        patient: {
          name: "Peter",
          image: "/images/patient/patient3.webp",
        },
        rating: 5,
        comment:
          "Dr. Peter is exceptional. From the first consultation, I could tell that he truly cares about his patients. He takes the time to listen to all of your concerns and answers questions in a way that is clear and easy to understand. He has a calm and reassuring demeanor that made me feel comfortable throughout my treatment process. His diagnostic skills are impressive, and I trust him completely. If you’re looking for a doctor who listens, is compassionate, and provides the best possible care, Dr. Peter is the one to see.",
      },
      {
        id: "review_cuid_126",
        patient: {
          name: "Olivia",
          image: "/images/patient/patient4.webp",
        },
        rating: 5,
        comment:
          "I’ve been seeing Dr. Olivia for several years now, and I can confidently say that she is one of the best doctors I’ve ever had. Her patient care is second to none, and she always takes the time to explain things in detail. Dr. Olivia is incredibly knowledgeable, and her expertise has helped me make informed decisions about my health. Her friendly and approachable nature makes her easy to talk to, and I always feel heard when I speak with her. I’m incredibly grateful for her care and highly recommend her to anyone seeking a top-notch doctor.",
      },
      {
        id: "review_cuid_127",
        patient: {
          name: "Samuel",
          image: "/images/patient/patient5.webp",
        },
        rating: 5,
        comment:
          "Dr. Samuel is an outstanding doctor. He’s treated me for several different health concerns over the years, and each time he has gone above and beyond to make sure I understand my diagnosis and treatment options. His caring approach and thorough explanations make him stand out from other doctors I’ve seen in the past. Dr. Samuel’s expertise and willingness to always take the time to ensure I feel comfortable and well-informed has made all the difference in my healthcare. I highly recommend him to anyone looking for a knowledgeable, compassionate doctor.",
      },
    ],

    createdAt: "2024-03-08T10:00:00Z",
    updatedAt: "2024-03-08T10:00:00Z",
  },
  {
    id: "101",
    userId: "user_cuid_12412123",
    user: {
      id: "user_cuid_123",
      name: "Dr. Json Smith",
      image: "/images/doctor-profile/doctor-03.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Orthodontics",
      earn: 3500,
      createdAt: "2024-03-08T10:00:00Z",
      updatedAt: "2024-03-08T10:00:00Z",
    },
    addresses: {
      id: "address_cuid_123",
      address: "123 Main St, New York",
      city: "New York",
      state: "NY",
      country: "USA",
      zip: "10001",
    },
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
  },
  {
    id: "2",
    userId: "user_cuid_124",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_124",
      name: "Dr. Emily Smith",
      image: "/images/doctor-profile/doctor-22.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Pediatrics",
      earn: 4000,
      createdAt: "2024-03-08T11:00:00Z",
      updatedAt: "2024-03-08T11:00:00Z",
    },
    addresses: {
      id: "address_cuid_124",
      address: "456 Oak St, Boston",
      city: "Boston",
      state: "MA",
      country: "USA",
      zip: "20002",
    },
  },
  {
    id: "3",
    userId: "user_cuid_125",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_125",
      name: "Dr. Michael Johnson",
      image: "/images/doctor-profile/doctor-05.jpg",

      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Neurology",
      earn: 3000,
      createdAt: "2024-03-08T12:00:00Z",
      updatedAt: "2024-03-08T12:00:00Z",
    },
    addresses: {
      id: "address_cuid_125",
      address: "789 Pine St, Los Angeles",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      zip: "90001",
    },
  },
  {
    id: "4",
    userId: "user_cuid_126",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_126",
      name: "Dr. Sarah Williams",
      image: "/images/doctor-profile/doctor-19.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Dermatology",
      earn: 2500,

      createdAt: "2024-03-08T13:00:00Z",
      updatedAt: "2024-03-08T13:00:00Z",
    },
    addresses: {
      id: "address_cuid_126",
      address: "123 Elm St, Chicago",
      city: "Chicago",
      state: "IL",
      country: "USA",
      zip: "60601",
    },
  },
  {
    id: "5",
    userId: "user_cuid_127",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_127",
      name: "Dr. David Lee",
      image: "/images/doctor-profile/doctor-09.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Pediatrics",
      earn: 3500,
      createdAt: "2024-03-08T14:00:00Z",
      updatedAt: "2024-03-08T14:00:00Z",
    },
    addresses: {
      id: "address_cuid_127",
      address: "321 Birch St, San Francisco",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      zip: "94103",
    },
  },
  {
    id: "6",
    userId: "user_cuid_128",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_128",
      name: "Dr. Laura Davis",
      image: "/images/doctor-profile/doctor-12.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Ophthalmology",
      earn: 2800,
      createdAt: "2024-03-08T15:00:00Z",
      updatedAt: "2024-03-08T15:00:00Z",
    },
    addresses: {
      id: "address_cuid_128",
      address: "654 Cedar St, Houston",
      city: "Houston",
      state: "TX",
      country: "USA",
      zip: "77001",
    },
  },
  {
    id: "7",
    userId: "user_cuid_129",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_129",
      name: "Dr. James Brown",
      image: "/images/doctor-profile/doctor-13.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Dermatology",
      earn: 2000,
      createdAt: "2024-03-08T16:00:00Z",
      updatedAt: "2024-03-08T16:00:00Z",
    },
    addresses: {
      id: "address_cuid_129",
      address: "987 Maple St, Miami",
      city: "Miami",
      state: "FL",
      country: "USA",
      zip: "33101",
    },
  },
  {
    id: "8",
    userId: "user_cuid_130",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_130",
      name: "Dr. Rachel Martinez",
      image: "/images/doctor-profile/doctor-14.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Cardiology",
      earn: 3200,
      createdAt: "2024-03-08T17:00:00Z",
      updatedAt: "2024-03-08T17:00:00Z",
    },
    addresses: {
      id: "address_cuid_130",
      address: "654 Oak St, Seattle",
      city: "Seattle",
      state: "WA",
      country: "USA",
      zip: "98101",
    },
  },
  {
    id: "9",
    userId: "user_cuid_131",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_131",
      name: "Dr. Daniel Wilson",
      image: "/images/doctor-profile/doctor-18.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Pediatrics",
      earn: 2500,

      createdAt: "2024-03-08T18:00:00Z",
      updatedAt: "2024-03-08T18:00:00Z",
    },
    addresses: {
      id: "address_cuid_131",
      address: "123 Pine St, Phoenix",
      city: "Phoenix",
      state: "AZ",
      country: "USA",
      zip: "85001",
    },
  },
  {
    id: "10",
    userId: "user_cuid_132",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_132",
      name: "Dr. Olivia Taylor",
      image: "/images/doctor-profile/doctor-08.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Gastroenterology",
      earn: 3500,
      createdAt: "2024-03-08T19:00:00Z",
      updatedAt: "2024-03-08T19:00:00Z",
    },
    addresses: {
      id: "address_cuid_132",
      address: "987 Elm St, Dallas",
      city: "Dallas",
      state: "TX",
      country: "USA",
      zip: "75201",
    },
  },
  {
    id: "11",
    userId: "user_cuid_133",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_133",
      name: "Dr. Mark Allen",
      image: "/images/doctor-profile/doctor-06.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Cardiology",
      earn: 4000,

      createdAt: "2024-03-08T20:00:00Z",
      updatedAt: "2024-03-08T20:00:00Z",
    },
    addresses: {
      id: "address_cuid_133",
      address: "321 Pine St, Denver",
      city: "Denver",
      state: "CO",
      country: "USA",
      zip: "80201",
    },
  },
  {
    id: "12",
    userId: "user_cuid_134",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_134",
      name: "Dr. Emma Clark",
      image: "/images/doctor-profile/doctor-10.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Dermatology",
      earn: 3800,
      createdAt: "2024-03-08T21:00:00Z",
      updatedAt: "2024-03-08T21:00:00Z",
    },
    addresses: {
      id: "address_cuid_134",
      address: "432 Cedar St, Portland",
      city: "Portland",
      state: "OR",
      country: "USA",
      zip: "97201",
    },
  },
  {
    id: "13",
    userId: "user_cuid_135",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_135",
      name: "Dr. Noah Harris",
      image: "/images/doctor-profile/doctor-11.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Cardiology",
      earn: 4200,
      createdAt: "2024-03-08T22:00:00Z",
      updatedAt: "2024-03-08T22:00:00Z",
    },
    addresses: {
      id: "address_cuid_135",
      address: "654 Oak St, Austin",
      city: "Austin",
      state: "TX",
      country: "USA",
      zip: "73301",
    },
  },
  {
    id: "14",
    userId: "user_cuid_136",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_136",
      name: "Dr. Isabella Robinson",
      image: "/images/doctor-profile/doctor-16.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Ophthalmology",
      earn: 3000,
      createdAt: "2024-03-08T23:00:00Z",
      updatedAt: "2024-03-08T23:00:00Z",
    },
    addresses: {
      id: "address_cuid_136",
      address: "987 Maple St, San Diego",
      city: "San Diego",
      state: "CA",
      country: "USA",
      zip: "92101",
    },
  },
  {
    id: "15",
    userId: "user_cuid_137",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_137",
      name: "Dr. William Scott",
      image: "/images/doctor-profile/doctor-19.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Orthopedics",
      earn: 3500,
      createdAt: "2024-03-08T23:30:00Z",
      updatedAt: "2024-03-08T23:30:00Z",
    },
    addresses: {
      id: "address_cuid_137",
      address: "432 Birch St, Orlando",
      city: "Orlando",
      state: "FL",
      country: "USA",
      zip: "32801",
    },
  },
  {
    id: "16",
    userId: "user_cuid_138",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_138",
      name: "Dr. Megan Young",
      image: "/images/doctor-profile/doctor-23.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Gynecology",
      earn: 3200,
      createdAt: "2024-03-09T01:00:00Z",
      updatedAt: "2024-03-09T01:00:00Z",
    },
    addresses: {
      id: "address_cuid_138",
      address: "654 Cedar St, Phoenix",
      city: "Phoenix",
      state: "AZ",
      country: "USA",
      zip: "85002",
    },
  },
  {
    id: "17",
    userId: "user_cuid_139",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_139",
      name: "Dr. Jacob Allen",
      image: "/images/doctor-profile/doctor-25.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Neurology",
      earn: 3000,
      createdAt: "2024-03-09T02:00:00Z",
      updatedAt: "2024-03-09T02:00:00Z",
    },
    addresses: {
      id: "address_cuid_139",
      address: "321 Oak St, Los Angeles",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      zip: "90002",
    },
  },
  {
    id: "18",
    userId: "user_cuid_140",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_140",
      name: "Dr. Aiden Carter",
      image: "/images/doctor-profile/doctor-29.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Orthopedics",
      earn: 3800,
      createdAt: "2024-03-09T03:00:00Z",
      updatedAt: "2024-03-09T03:00:00Z",
    },
    addresses: {
      id: "address_cuid_140",
      address: "987 Pine St, Tampa",
      city: "Tampa",
      state: "FL",
      country: "USA",
      zip: "33601",
    },
  },
  {
    id: "19",
    userId: "user_cuid_141",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_141",
      name: "Dr. Sophia Martinez",
      image: "/images/doctor-profile/doctor-24.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Gynecology",
      earn: 3200,
      createdAt: "2024-03-09T04:00:00Z",
      updatedAt: "2024-03-09T04:00:00Z",
    },
    addresses: {
      id: "address_cuid_141",
      address: "654 Maple St, Austin",
      city: "Austin",
      state: "TX",
      country: "USA",
      zip: "73302",
    },
  },
  {
    id: "20",
    userId: "user_cuid_142",
    reviews: [
      {
        id: "review_cuid_123",
        patient: {
          name: "John",
          image: "/images/patient/patient1.webp",
        },
        rating: 5,
        comment:
          "Dr. John is an excellent doctor! From the moment I walked into his office, I felt at ease. His staff is incredibly friendly, and the office environment is welcoming. Dr. John took the time to listen to my concerns and explained everything thoroughly, which made me feel confident about the treatment plan. He’s very knowledgeable and has a calming presence, which is so important when you’re seeing a doctor. After my appointment, I felt much better about my health, and I appreciated his follow-up to check in. I highly recommend Dr. John to anyone looking for a compassionate and skilled doctor.",
      },
    ],
    user: {
      id: "user_cuid_142",
      name: "Dr. Lucas Garcia",
      image: "/images/doctor-profile/doctor-23.jpg",
      password: "$2b$10$encryptedpasswordhere",
      role: "doctor",
      specialties: "Cardiology",
      earn: 3600,
      createdAt: "2024-03-09T05:00:00Z",
      updatedAt: "2024-03-09T05:00:00Z",
    },
    addresses: {
      id: "address_cuid_142",
      address: "321 Birch St, Atlanta",
      city: "Atlanta",
      state: "GA",
      country: "USA",
      zip: "30301",
    },
  },
];
