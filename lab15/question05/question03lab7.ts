class Question {
    qid: number;
    answer: string;

    constructor(qid: number, answer: string) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer: string): boolean {
        return this.answer === answer;
    }
}

class Student {
    studentId: number;
    answers: Question[] = [];

    constructor(studentId: number) {
        this.studentId = studentId;
    }

    addAnswer(question: Question): void {
        this.answers.push(question);
    }
}

class Quiz {
    questions: Map<number, string>;
    students: Student[];

    constructor(questions: Question[], students: Student[]) {
        this.questions = new Map();
        questions.forEach(q => this.questions.set(q.qid, q.answer));
        this.students = students;
    }

    scoreStudentBySid(sid: number): number {
        const student = this.students.find(s => s.studentId === sid);
        if (!student) return 0;

        return student.answers.reduce((score, q) => {
            const correctAnswer = this.questions.get(q.qid);
            if (correctAnswer && correctAnswer === q.answer) {
                score++;
            }
            return score;
        }, 0);
    }

    getAverageScore(): number {
        const total = this.students.reduce((sum, student) => sum + this.scoreStudentBySid(student.studentId), 0);
        return total / this.students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];

const quiz = new Quiz(questions, students);

console.log(quiz.scoreStudentBySid(10)); 
console.log(quiz.scoreStudentBySid(11)); 
console.log(quiz.getAverageScore());  
