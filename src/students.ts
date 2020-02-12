import { subjects } from "./course";

export const students = [
  {
    key: "1",
    name: "Frank Yellow",
    age: 12,
    address: "Randburg, 201 Bram Fischer Dr",
    gender: "Male",
    results: [
      {
        subject: subjects.History,
        mark: 55
      },
      {
        subject: subjects.Shona,
        mark: 59
      },
      {
        subject: subjects.Geography,
        mark: 50
      }
    ]
  },

  {
    key: "2",
    name: "Vimbai Red",
    age: 13,
    address: "Sandton, 15 Grayston Dr",
    gender: "Female",
    results: [
      {
        subject: subjects.Accounts,
        mark: 35
      },
      {
        subject: subjects.Geography,
        mark: 39
      },
      {
        subject: subjects.Business,
        mark: 25
      }
    ]
  },

  {
    key: "3",
    name: "Tatenda Blue",
    age: 13,
    address: "Fourways, 451 Camdeboo Rd",
    gender: "Male",
    results: [
      {
        subject: subjects.Maths,
        mark: 65
      },
      {
        subject: subjects.Physics,
        mark: 55
      },
      {
        subject: subjects.Chemistry,
        mark: 64
      }
    ]
  },

  {
    key: "4",
    name: "Gamuchirai Green",
    age: 14,
    address: "Bryanston, 300 Sloane",
    gender: "Male",
    results: [
      {
        subject: subjects.Accounts,
        mark: 90
      },
      {
        subject: subjects.Business,
        mark: 85
      },
      {
        subject: subjects.Commerce,
        mark: 82
      }
    ]
  },

  {
    key: "5",
    name: "Gundani Orange",
    age: 12,
    address: "Bryanston, 300 Kooks",
    gender: "Male",
    results: [
      {
        subject: subjects.Maths,
        mark: 88
      },
      {
        subject: subjects.Biology,
        mark: 80
      },
      {
        subject: subjects.Chemistry,
        mark: 89
      }
    ]
  },

  {
    key: "6",
    name: "Gamuchirai Green",
    age: 16,
    address: "Bryanston, 300 Sloane",
    gender: "Male",
    results: [
      {
        subject: subjects.Accounts,
        mark: 70
      },
      {
        subject: subjects.Business,
        mark: 69
      },
      {
        subject: subjects.Commerce,
        mark: 77
      }
    ]
  },

  {
    key: "7",
    name: "John Navy",
    age: 16,
    address: "Sunninghill, 796 Zoo lake",
    gender: "Male",
    results: [
      {
        subject: subjects.Maths,
        mark: 65
      },
      {
        subject: subjects.Physics,
        mark: 55
      },
      {
        subject: subjects.Chemistry,
        mark: 68
      }
    ]
  },

  {
    key: "8",
    name: "Grace Black",
    age: 11,
    address: "Akasia, 741 Deeds Street",
    gender: "Female",
    results: [
      {
        subject: subjects.Literature,
        mark: 95
      },
      {
        subject: subjects.Shona,
        mark: 85
      },
      {
        subject: subjects.History,
        mark: 82
      }
    ]
  },

  {
    key: "9",
    name: "Vivian Black",
    age: 13,
    address: "Monument, 3 Silver lake",
    gender: "Female",
    results: [
      {
        subject: subjects.Accounts,
        mark: 73
      },
      {
        subject: subjects.Business,
        mark: 75
      },
      {
        subject: subjects.Maths,
        mark: 70
      }
    ]
  },

  {
    key: "10",
    name: "Florence Silver",
    age: 17,
    address: "Cosmo Creek, 300 Malibongwe",
    gender: "Female",
    results: [
      {
        subject: subjects.History,
        mark: 49
      },
      {
        subject: subjects.Literature,
        mark: 42
      },
      {
        subject: subjects.Geography,
        mark: 31
      }
    ]
  },

  {
    key: "11",
    name: "Lorien Brown",
    age: 17,
    address: "Cosmo Creek, 411 Malibongwe",
    gender: "Female",
    results: [
      {
        subject: subjects.History,
        mark: 49
      }
    ]
  }
];

export type result = { subject: subjects; mark: number };
export type resultDetail = { grade: string; point: number };
export type finalResult = { subject: subjects; details: resultDetail };

export function computeResults(results: Array<result>) {
  return results.map(result => {
    return {
      subject: result.subject,
      details: determineResultDetails(result.mark)
    };
  });
}

export function computePoints(finalResults: Array<finalResult>) {
  return finalResults
    .map(result => result.details.point)
    .reduce((a, b) => a + b, 0);
}

function determineResultDetails(mark: number) {
  switch (true) {
    case mark >= 80:
      return { grade: "A", point: 5 };
    case mark >= 70:
      return { grade: "B", point: 4 };
    case mark >= 60:
      return { grade: "C", point: 3 };
    case mark >= 50:
      return { grade: "D", point: 2 };
    case mark >= 40:
      return { grade: "E", point: 1 };
    default:
      return { grade: "U", point: 0 };
  }
}
