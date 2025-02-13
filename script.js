document.addEventListener("DOMContentLoaded", function () {
    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        let cells = Array.from(row.querySelectorAll("td"));
        let gradesCells = cells.slice(1, 6); 
        let avgCell = cells[6]; 

        let grades = gradesCells
            .map(td => parseInt(td.textContent))
            .filter(num => !isNaN(num)); 

        if (grades.length > 0) {
            let sum = grades.reduce((acc, grade) => acc + grade, 0);
            let avg = (sum / grades.length).toFixed(1);
            avgCell.textContent = avg;

            if (avg >= 10) {
                avgCell.classList.add("highlight");
            }
        }
    });
});
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const url = URL.createObjectURL(file); // Створюємо URL для завантаження
        const fileInfo = document.getElementById('fileInfo');
        
        fileInfo.innerHTML = `
            <p>📑 Завантажено: <a href="${url}" download="${file.name}" class="file-link">${file.name}</a></p>
        `;
    }
});


