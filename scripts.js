console.log('Hello')

// making click effect on the menu bar

const choices = document.getElementsByClassName('choice');

for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', () => {
        for (let j = 0; j < choices.length; j++) {
            choices[j].style.color = 'hsl(235, 45%, 61%)';
        }
        choices[i].style.color = 'white'
    })
}

// work with data

const dataJson = `[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]`;

  const data = JSON.parse(dataJson);

  const workCurrent = document.getElementById('work-current');
  const workPrevious = document.getElementById('work-previous');
  const playCurrent = document.getElementById('play-current');
  const playPrevious = document.getElementById('play-previous');
  const studyCurrent = document.getElementById('study-current');
  const studyPrevious = document.getElementById('study-previous');
  const exerciseCurrent = document.getElementById('exercise-current');
  const exercisePrevious = document.getElementById('exercise-previous');
  const socialCurrent = document.getElementById('social-current');
  const socialPrevious = document.getElementById('social-previous');
  const selfCareCurrent = document.getElementById('self-care-current');
  const selfCarePrevious = document.getElementById('self-care-previous');

  function getData(timeframe) {
    workCurrent.innerText = data[0].timeframes[timeframe].current;
    workPrevious.innerText = data[0].timeframes[timeframe].previous;
    playCurrent.innerText = data[1].timeframes[timeframe].current;
    playPrevious.innerText = data[1].timeframes[timeframe].previous;
    studyCurrent.innerText = data[2].timeframes[timeframe].current;
    studyPrevious.innerText = data[2].timeframes[timeframe].previous;
    exerciseCurrent.innerText = data[3].timeframes[timeframe].current;
    exercisePrevious.innerText = data[3].timeframes[timeframe].previous;
    socialCurrent.innerText = data[4].timeframes[timeframe].current;
    socialPrevious.innerText = data[4].timeframes[timeframe].previous;
    selfCareCurrent.innerText = data[5].timeframes[timeframe].current;
    selfCarePrevious.innerText = data[5].timeframes[timeframe].previous;
  }

  // add event listeners to the menu bar

  const daily = document.getElementById('daily');
  const weekly = document.getElementById('weekly');
  const monthly = document.getElementById('monthly');

  daily.addEventListener('click', () => {
    getData("daily");
  });

  weekly.addEventListener('click', () => {
    getData("weekly");
  });

  monthly.addEventListener('click', () => {
    getData("monthly");
  })

  window.addEventListener('load', () => {
    getData("weekly");
    weekly.style.color = 'white';
  })