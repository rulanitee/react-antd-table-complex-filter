import { result, finalResult, computePoints, computeResults } from "./students";
import { subjects } from "./course";

const x_expected = [
  {
    subject: subjects.Accounts,
    details: {
      grade: "A",
      point: 5
    }
  }
];

const u_expected = [
  {
    subject: subjects.History,
    details: {
      grade: "U",
      point: 0
    }
  },
  {
    subject: subjects.Literature,
    details: {
      grade: "U",
      point: 0
    }
  },
  {
    subject: subjects.Geography,
    details: {
      grade: "U",
      point: 0
    }
  }
];

const e_expected = [
  {
    subject: subjects.Maths,
    details: {
      grade: "B",
      point: 4
    }
  },
  {
    subject: subjects.Accounts,
    details: {
      grade: "A",
      point: 5
    }
  },
  {
    subject: subjects.Geography,
    details: {
      grade: "B",
      point: 4
    }
  }
];

const d_expected = [
  {
    subject: subjects.Maths,
    details: {
      grade: "E",
      point: 1
    }
  },
  {
    subject: subjects.Physics,
    details: {
      grade: "D",
      point: 2
    }
  },
  {
    subject: subjects.Geography,
    details: {
      grade: "D",
      point: 2
    }
  }
];

const c_expected = [
  {
    subject: subjects.Accounts,
    details: {
      grade: "B",
      point: 4
    }
  },
  {
    subject: subjects.Maths,
    details: {
      grade: "C",
      point: 3
    }
  },
  {
    subject: subjects.Business,
    details: {
      grade: "A",
      point: 5
    }
  }
];

const b_expected = [
  {
    subject: subjects.Maths,
    details: {
      grade: "A",
      point: 5
    }
  },
  {
    subject: subjects.Biology,
    details: {
      grade: "A",
      point: 5
    }
  },
  {
    subject: subjects.Chemistry,
    details: {
      grade: "B",
      point: 4
    }
  }
];

const a_expected = [
  {
    subject: subjects.Maths,
    details: {
      grade: "A",
      point: 5
    }
  },
  {
    subject: subjects.Physics,
    details: {
      grade: "A",
      point: 5
    }
  },
  {
    subject: subjects.Chemistry,
    details: {
      grade: "A",
      point: 5
    }
  }
];

const x_results = [
  {
    subject: subjects.Accounts,
    mark: 81
  }
];

const u_results = [
  {
    subject: subjects.History,
    mark: 33
  },
  {
    subject: subjects.Literature,
    mark: 25
  },
  {
    subject: subjects.Geography,
    mark: 39
  }
];

const e_results = [
  {
    subject: subjects.Maths,
    mark: 77
  },
  {
    subject: subjects.Accounts,
    mark: 86
  },
  {
    subject: subjects.Geography,
    mark: 78
  }
];

const d_results = [
  {
    subject: subjects.Maths,
    mark: 47
  },
  {
    subject: subjects.Physics,
    mark: 50
  },
  {
    subject: subjects.Geography,
    mark: 53
  }
];

const c_results = [
  {
    subject: subjects.Accounts,
    mark: 78
  },
  {
    subject: subjects.Maths,
    mark: 61
  },
  {
    subject: subjects.Business,
    mark: 87
  }
];

const b_results = [
  {
    subject: subjects.Maths,
    mark: 83
  },
  {
    subject: subjects.Biology,
    mark: 80
  },
  {
    subject: subjects.Chemistry,
    mark: 75
  }
];

const a_results = [
  {
    subject: subjects.Maths,
    mark: 85
  },
  {
    subject: subjects.Physics,
    mark: 90
  },
  {
    subject: subjects.Chemistry,
    mark: 81
  }
];

describe("computePoints()", () => {
  it("should compute final point as 5 given the point is 5", () => {
    testComputePoints(x_expected, 5);
  });

  it("should compute final point as 0 given the points are all 0", () => {
    testComputePoints(u_expected, 0);
  });

  it("should compute final point as 13 given the points are 4,5,4", () => {
    testComputePoints(e_expected, 13);
  });

  it("should compute final point as 5 given the points are 2,2,1", () => {
    testComputePoints(d_expected, 5);
  });

  it("should compute final point as 12 given the points are 5,3,4", () => {
    testComputePoints(c_expected, 12);
  });

  it("should compute final point as 14 given the points are 5,5,4", () => {
    testComputePoints(b_expected, 14);
  });

  it("should compute final point as 15 given the points are all 5", () => {
    testComputePoints(a_expected, 15);
  });
});

describe("computeResult()", () => {
  it("should compute final results as A given the mark is above 80", () => {
    testComputeResults(x_results, x_expected);
  });

  it("should compute final results as U,U,U given all the marks are below 40", () => {
    testComputeResults(u_results, u_expected);
  });

  it("should compute final results as B,A,B given the marks are 78,86,77", () => {
    testComputeResults(e_results, e_expected);
  });

  it("should compute final results as D,D,E given the marks are 53,50,47", () => {
    testComputeResults(d_results, d_expected);
  });

  it("should compute final results as A,C,B given the marks are 87,61,78", () => {
    testComputeResults(c_results, c_expected);
  });

  it("should compute final results as B,A,A given the marks are 75,80,83", () => {
    testComputeResults(b_results, b_expected);
  });

  it("should compute final results as A,A,A given the marks are 81,90,85", () => {
    testComputeResults(a_results, a_expected);
  });
});

function testComputePoints(
  finalResults: Array<finalResult>,
  expectedPoints: number
) {
  expect(computePoints(finalResults)).toBe(expectedPoints);
}

function testComputeResults(
  results: Array<result>,
  expectedResults: Array<finalResult>
) {
  expect(computeResults(results)).toEqual(expectedResults);
}
