document.addEventListener('DOMContentLoaded', function () {
  const sel = document.querySelectorAll('select')
  M.FormSelect.init(sel)
})

document.addEventListener('DOMContentLoaded', function () {
  const date = document.querySelectorAll('.datepicker')
  M.Datepicker.init(date, {
    format: 'dd.mm.yyyy',
    i18n: {
      cancel: 'Закрыть',
      clear: 'Очистить',
      done: 'Выбрать',
      months: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      weekdays: [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
      ],
      monthsShort: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      weekdaysShort: [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
      ],
      weekdaysAbbrev: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧT', 'ПТ', 'СБ'],
    },
  })
})

addEventListener('load', () => {
  document.querySelector('.submit-btn').addEventListener('click', () => {
    const data = {}
    document
      .querySelectorAll('select, input[type=text], textarea')
      .forEach((item) => {
        if (!item.classList.contains('select-dropdown')) {
          data[item.name] = item.value
        }
      })
    console.log(data)
    console.log(JSON.stringify(data))
  })

  document.querySelector('.clean-btn').addEventListener('click', () => {
    document.querySelectorAll('input[type=text], textarea').forEach((item) => {
      item.value = ''
    })
    document.querySelectorAll('select').forEach((item) => {
      item.selectedIndex = -1
      M.FormSelect.init(item)
    })
  })
})
