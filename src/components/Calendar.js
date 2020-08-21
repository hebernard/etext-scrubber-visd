import React from 'react';
import moment from 'moment'
import { extendMoment } from 'moment-range';
const momentRange = extendMoment(moment);

const Calendar = props => {

    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

    const [ calendarState, setCalendarState ] = React.useState({
        dayShowing: moment().format('MMMM Do YYYY'),
        weekShowing: '',
        monthShowing:moment().format('MMMM'),
        nowShowing: 'Day',
        empties:[],
        allDays:[],
        count: 0,
    })

    const [ calHeader, setCalHeader ] = React.useState(calendarState.dayShowing)

    React.useEffect(() => {
    //set initial state
       let currentDayOfWeek = moment().format('d');
       let startOfWeek = moment().subtract(currentDayOfWeek,'days');
       let endOfWeek = moment().subtract(currentDayOfWeek,'days').add(6, 'days');
    //load Calendar
       let tempEmpty = [];
       let tempAll = [];
       for(let i=0; i < moment().daysInMonth(); i++){
        tempAll.push(i)
       }
       for(let i=0; i < moment().startOf("month").format("d"); i++){
        tempEmpty.push(i)
        tempAll.push(i)
       }
       setCalendarState({
        ...calendarState,
        weekShowing: startOfWeek.format('MMMM Do YYYY') + " - " + endOfWeek.format('MMMM Do YYYY'),
        empties:tempEmpty,
        allDays:tempAll
       })
    }, []);

    const handleNav = (e) => {
        let count = calendarState.count;
        if(e.target.closest('BUTTON').className == 'previous'){
            count -= 1
        }else if(e.target.closest('BUTTON').className == 'next'){
            count += 1;
        }else{
            count = 0;
        }
        let newDay, newWeek, newMonth;
        if(calendarState.nowShowing == 'Day'){
            newDay = moment().add(count,'days').format('MMMM Do YYYY');
            newWeek = calendarState.weekShowing;
            newMonth = moment().add(count,'days').format('MMMM');
            if(moment().add(count,'days').format('d') == 0){
                let startOfWeek = moment().add(count,'days');
                let endOfWeek = moment().add(count,'days').add(6,'days');
                newWeek = startOfWeek.format('MMMM Do YYYY') + " - " + endOfWeek.format('MMMM Do YYYY');
            }else if(moment().add(count,'days').format('d') == 6){
                let startOfWeek = moment().add(count,'days').subtract(6,'days');
                let endOfWeek = moment().add(count,'days');
                newWeek = startOfWeek.format('MMMM Do YYYY') + " - " + endOfWeek.format('MMMM Do YYYY');
            }
            setCalHeader(newDay)
        }else if(calendarState.nowShowing == 'Month'){
            newDay = moment().add(count,'months').set('date', 1).format('MMMM Do YYYY');
            newMonth = moment().add(count,'months').format('MMMM');
            let startOfWeek = moment().add(count,'months').set('date', 1);
            let endOfWeek = moment().add(count,'months').set('date', 1).add(6,'days');
            newWeek = startOfWeek.format('MMMM Do YYYY') + " - " + endOfWeek.format('MMMM Do YYYY');
            setCalHeader(newMonth)
        }

        setCalendarState({
            ...calendarState,
            dayShowing: newDay,
            weekShowing: newWeek,
            monthShowing: newMonth,
            count: count,
        })
        }

    const showMenu = () => {
        let menu = document.querySelector('.view-menu');
        menu.getAttribute('hidden') == null ? menu.setAttribute('hidden', '') : menu.removeAttribute('hidden')
    }

    const changeView = (e) => {
        let view = e.target.children[0].innerText
        let allLists = document.querySelectorAll('.calendar .list')
        let activeList = document.querySelector('.' + e.target.children[0].innerText + '-list')
        allLists.forEach(list => {
            list.setAttribute('hidden', '')
        })
        activeList.removeAttribute('hidden')
        if(view == 'Month'){
            setCalHeader(calendarState.monthShowing)
        }else if(view == 'Week'){
            setCalHeader(calendarState.weekShowing)
        }else{
            setCalHeader(calendarState.dayShowing)
        }
        setCalendarState({
            ...calendarState,
            nowShowing: view,
            count: 0,
        })
        showMenu()
    }

    return(
      <div className="calendar">
          <div className="controls">
              <button onClick={handleNav} ><span>Today</span></button>
              <div className="current-item">
                  <button onClick={handleNav} className="previous">
                      <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#252525"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                      </svg>
                  </button>
                  <p>{calHeader}</p>
                  <button onClick={handleNav} className="next">
                      <svg focusable="false" viewBox="0 0 25 25" aria-hidden="true" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" fill="#252525"></path>
                      </svg>
                  </button>
              </div>
              <button className="view" onClick={showMenu}>
                  <span>{calendarState.nowShowing}</span>
                  <svg focusable="false" viewBox="0 0 25 25" aria-hidden="true" width="24" height="24">
                     <path xmlns="http://www.w3.org/2000/svg" d="M9.62193909,12.7616134 C9.25409223,13.0918069 8.69027111,13.0789828 8.33764681,12.7231411 L3.27435567,7.61365203 C2.90854811,7.24450681 2.90854811,6.64600414 3.27435567,6.27685892 C3.64016324,5.90771369 4.23325448,5.90771369 4.59906205,6.27685892 L9,10.7179514 L13.400938,6.27685892 C13.7667455,5.90771369 14.3598368,5.90771369 14.7256443,6.27685892 C15.0914519,6.64600414 15.0914519,7.24450681 14.7256443,7.61365203 L9.66235319,12.7231411 C9.64896608,12.7366503 9.63548354,12.7494543 9.62191255,12.7615685 L9.62193909,12.7616134 Z" fill-rule="nonzero"/>
                  </svg>
              </button>
              <div className="menu view-menu" hidden>
                <ul>
                    <li onClick={changeView}><p>Day</p></li>
                    <li onClick={changeView}><p>Week</p></li>
                    <li onClick={changeView}><p>Month</p></li>
                </ul>
              </div>
          </div>
          <div className="list Month-list" hidden>
              <div className="week-days">
                  {
                      weekdays.map((day, i) => {
                          return (
                            <span key={i} className={moment().format("ddd") == day ? "today week-day" : "week-day"}>{day}</span>
                          )
                      })
                  }
              </div>
              <div className="cells">
              {
                  calendarState.allDays.map((date, i) => {
                    if(i < calendarState.empties.length) {
                        return (
                            <div key={'empty' + i} className="empty"></div>
                        )
                    } else{
                        let number = (i - calendarState.empties.length) +1;
                        let monthCheck = moment().format('MMMM') == calendarState.monthShowing ? true : false;
                        return(
                            <div key={number} className={moment().format("D") == number && monthCheck == true ? "today date" : "date"}><span>{number}</span></div>
                        )
                     }
                  })
              }
              </div>
          </div>
          <div className="list Week-list" hidden>
            <p>Week calendar</p>
          </div>
          <div className="list Day-list">
            <p>Day calendar</p>
          </div>
      </div>
    )
}

export default Calendar;
