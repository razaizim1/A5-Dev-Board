const allButtons = document.querySelectorAll('.complete-btn');

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function (e) {
        alert('Borad Updated Successfully');
        e.preventDefault();
        this.classList.add('opacity-30', 'cursor-not-allowed');

        let assignedTask = document.getElementById('assigned-task');
        let assignedTaskInner = parseInt(assignedTask.innerText);
        let taskValue = assignedTaskInner - 1;

        if (taskValue < 10) {
            assignedTask.innerText = '0' + taskValue;
        } else {
            assignedTask.innerText = taskValue;
        }

        let addedTask = document.getElementById('added-task');
        let addedTaskInner = parseInt(addedTask.innerText);
        let addedValue = addedTaskInner + 1;
        if (addedValue < 10) {
            addedTask.innerText = '0' + addedValue;
        } else {
            addedTask.innerText = addedValue;
        }

        const parentElem = e.target.parentElement.parentElement;
        const allTitle = parentElem.querySelectorAll('.task-title');

        for (let j = 0; j < allTitle.length; j++) {
            const activityHistory = document.getElementById('acitvity-history');
            let newHistory = document.createElement('li');
            newHistory.classList.add('bg-color-bg', 'p-3', 'rounded-lg', 'mt-3');
            let currentTime = new Date().toLocaleTimeString('en-US');
            newHistory.innerText = `You have Complete The Task ${allTitle[j].innerText} at ${currentTime} PM`;
            activityHistory.appendChild(newHistory);
        }
    })
}

const clearHistoryBtn = document.getElementById('clear-history-button');

clearHistoryBtn.addEventListener('click', function() {
    document.getElementById('acitvity-history').innerHTML = '';
});

