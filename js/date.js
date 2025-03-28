// deze function zorgt ervoor dat het dynamish word geladen zodra de pagina is geladen
document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    let currentDate = new Date();

    function generateYearCalendar(year) {
        const calendarContainer = document.getElementById("calendar-container");
        const yearTitle = document.getElementById("year-title");

        yearTitle.innerText = `Jaar Kalender - ${year}`;
        calendarContainer.innerHTML = "";

        // dit laat de dagen zien van de maand in de kalender 
        const daysOfWeek = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

        // Deze for-loop toont elke maand van de kalender voor het geselecteerde jaar
        for (let month = 0; month < 12; month++) {
            let monthDiv = document.createElement("div");
            monthDiv.classList.add("month");

            let monthTitle = document.createElement("div");
            monthTitle.classList.add("month-title");
            monthTitle.innerText = new Date(year, month).toLocaleString('default', { month: 'long' });

            let daysContainer = document.createElement("div");
            daysContainer.classList.add("days");


            daysOfWeek.forEach(day => {
                let dayHeader = document.createElement("div");
                dayHeader.classList.add("day-header");
                dayHeader.innerText = day;
                daysContainer.appendChild(dayHeader);
            });

            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();

            // dit zorg ervoor dat de maanden / dagen goed worden uitgevoerd
            let adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
            for (let i = 0; i < adjustedFirstDay; i++) {
                let emptyDiv = document.createElement("div");
                emptyDiv.classList.add("empty");
                daysContainer.appendChild(emptyDiv);
            }

            //   hier zie je welke dag het is met kleur blauw 
            for (let day = 1; day <= lastDate; day++) {
                let dayDiv = document.createElement("div");
                dayDiv.classList.add("day");
                dayDiv.innerText = day;


                if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
                    dayDiv.classList.add("today");
                }

                daysContainer.appendChild(dayDiv);
            }

            monthDiv.appendChild(monthTitle);
            monthDiv.appendChild(daysContainer);
            calendarContainer.appendChild(monthDiv);
        }
    }
    //  hier klik je naar volgend jaar of een jaar terug
    document.getElementById("prev-year").addEventListener("click", function () {
        currentYear--;
        generateYearCalendar(currentYear);
    });

    document.getElementById("next-year").addEventListener("click", function () {
        currentYear++;
        generateYearCalendar(currentYear);
    });

    generateYearCalendar(currentYear);
});
