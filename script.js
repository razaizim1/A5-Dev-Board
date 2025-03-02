const allButtons = document.querySelectorAll('.complete-btn');
const allCards = document.querySelectorAll('.card');
let clickCount = 0;

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function (e) {
        alert('Borad Updated Successfully');
        e.preventDefault();
        this.disabled = true;

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
        };

        clickCount++;

        if (clickCount === allCards.length) {
            alert('Congratulations! You have completed all the current tasks');
        }
    })

    console.log(clickCount);
}

const clearHistoryBtn = document.getElementById('clear-history-button');

clearHistoryBtn.addEventListener('click', function () {
    document.getElementById('acitvity-history').innerHTML = '';
});

const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', function () {
    const fullBody = document.getElementById('body');
    const colors = ['blue', 'red', 'yellow', 'aqua', 'orange', 'aquamarine', 'brown'];
    const randomValue = Math.floor(Math.random() * colors.length);
    fullBody.style.backgroundColor = colors[randomValue];
});

// Week
let currentDate = new Date();
let dayNumber = currentDate.getDay();
let daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let weekday = daysArray[dayNumber];
document.getElementById('task-week').innerText = weekday;

let monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
let monthIndex = currentDate.getMonth();
let monthName = monthNames[monthIndex]

let day = currentDate.getDate();
let year = currentDate.getFullYear();
let formattedDate = `${monthName} ${day} ${year}`;
document.getElementById('task-date').innerText = formattedDate;
