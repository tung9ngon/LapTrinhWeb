class Student {
    constructor(id, name, gender, birthday, hometown) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.hometown = hometown;
    }
}

class StudentManager {
    constructor() {
        this.students = JSON.parse(localStorage.getItem('students')) || [];
    }

    addStudent(student) {
        this.students.push(student);
        this.updateLocalStorage();
    }

    editStudent(id, updatedStudent) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students[index] = updatedStudent;
            this.updateLocalStorage();
        }
    }

    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
        this.updateLocalStorage();
    }

    getStudents() {
        return this.students;
    }

    updateLocalStorage() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }
}

const studentManager = new StudentManager();

function renderStudentTable() {
    const tbody = document.getElementById('student-table-body');
    tbody.innerHTML = '';

    studentManager.getStudents().forEach(student => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.birthday}</td>
            <td>${student.hometown}</td>
            <td>
                <button class="edit-btn" onclick="editStudent('${student.id}')">Sửa</button>
                <button class="delete-btn" onclick="deleteStudent('${student.id}')">Xóa</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const id = document.getElementById('student-id').value.trim();
    const name = document.getElementById('student-name').value.trim();
    const gender = document.getElementById('student-gender').value;
    const birthday = document.getElementById('student-birthday').value;
    const hometown = document.getElementById('student-hometown').value.trim();

    const newStudent = new Student(id, name, gender, birthday, hometown);

    const existingStudent = studentManager.getStudents().find(student => student.id === id);
    if (existingStudent) {
        studentManager.editStudent(id, newStudent);
    } else {
        studentManager.addStudent(newStudent);
    }

    renderStudentTable();
    this.reset();
});


function editStudent(id) {
    const student = studentManager.getStudents().find(student => student.id === id);
    if (student) {
        document.getElementById('student-id').value = student.id;
        document.getElementById('student-name').value = student.name;
        document.getElementById('student-gender').value = student.gender;
        document.getElementById('student-birthday').value = student.birthday;
        document.getElementById('student-hometown').value = student.hometown;
    }
}

function deleteStudent(id) {
    if (confirm("Bạn có chắc muốn xóa sinh viên này?")) {
        studentManager.deleteStudent(id);
        renderStudentTable();
    }
}

document.addEventListener('DOMContentLoaded', renderStudentTable);
