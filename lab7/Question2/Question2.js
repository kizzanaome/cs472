class Student {
    #studentId
    answers = [];

    constructor(studentId) {
        this.#studentId = studentId
        this.answers = []
    }

    get studentId() {
        return this.#studentId;
    }


    addAnswer(question) {
        //an object
        this.answers.push(question)
    }
}

class Question {
    #qid;
    #answer;

    

    constructor(qid, answer){
        this.#qid =qid;
        this.#answer = answer;
    }

    get qid() {
        return this.#qid;
    }

    get answer() {
        return this.#answer;
    }


    checkAnswer(givenAnswer) {
        if (this.#answer == givenAnswer) {
            return true
        } else {
            return false
        }
    }
}

class Quiz {

    constructor(questions, students) {
        this.questions = new Map();
        questions.forEach(q => this.questions.set(q.qid, q.answer));
        this.students = students;

    }

    scoreStudentBySid(sid) {
        const student = this.students.find(s=>s.studentId === sid);
        if(!student) return 0;

        let score = 0;
        student.answers.forEach(ans =>{
            const correctAnswer = this.questions.get(ans.qid);
            if(correctAnswer === ans.answer){
                score++;
            }
        })
        return score;

    }
    //computes the average score over all students
    getAverageScore() {
        const total = this.students.reduce((acc,s) => acc + this.scoreStudentBySid(s.studentId), 0);
        return total/this.students.length;

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
const questions = [new Question(1, 'b'), new Question(2, 'a'), new
    Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5