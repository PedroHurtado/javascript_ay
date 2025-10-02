function* getDays(){
    for(let i=0;i<31;i++){
        yield i+1
    }
}

export function* generateCalendar(date) {
    const baseDate = date || new Date(2025, 9, 25);

    const year = baseDate.getFullYear();
    const month = baseDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);

    let dayOfWeek = firstDayOfMonth.getDay();

    dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - dayOfWeek);



    for (let i = 0; i < 42; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);


        yield {
            date: new Date(currentDate),
            day: currentDate.getDate(),
            month: currentDate.getMonth(),
            year: currentDate.getFullYear(),
            dayOfWeek: currentDate.getDay(),
            isCurrentMonth: currentDate.getMonth() === month
        }
    }

}