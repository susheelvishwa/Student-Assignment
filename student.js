class Student {
  constructor(n,r,c,s,marks) {
    this.name = n;
    this.roll_no = r;
    this.class = c;
    this.section = s;
    this.marks_of_5_subjects = marks;
  }

  Top_3_Subjects(){
    const subjects = Object.keys(this.marks_of_5_subjects);
    const sortedSubjects = subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
    const top3Subjects = sortedSubjects.slice(0, 3);
    console.log("Top 3 Subjects:", top3Subjects);
  }
    ReportCard() {
    console.log("+----------------+");
    console.log("| REPORT CARD    |");
    console.log("+----------------+");
    console.log("| Name -", this.name);
    console.log("| Roll no. -", this.roll_no);
    console.log("| Class    -", this.class);
    console.log("| Section  -", this.section);

    for (const subject in this.marks_of_5_subjects) {
      console.log("|", subject, "-", this.marks_of_5_subjects[subject]);
    }

    const totalMarks = Object.values(this.marks_of_5_subjects).reduce((sum, marks) => sum + marks);
    const percentage = (totalMarks / Object.keys(this.marks_of_5_subjects).length) * 100;
    console.log("| Percentage -", percentage + "%");
    console.log("+-------------------------+");
  }
}

const student = new Student(
  "Susheel Vishwakarma",
  64,
  "cap01",
  "A",
  {
    maths: 100,
    social_science: 99,
    english: 97,
    hindi: 96,
    science: 95,
  }
);

student.Top_3_Subjects();
student.ReportCard();
