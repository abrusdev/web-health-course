import classes from "./index.module.css";


function Calendar() {

  const renderedTimes = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((item, index) => {
    const char = index % 2 === 0 ? `${item}:00` : `*`
    return (
      <>
        <p key={item} className={classes.time}>{char}</p>
      </>
    )
  })


  // all in seconds

  const items = [
    {
      start: 0,
      duration: 60 * 60,
    },
    {
      start: 2 * 60 * 60,
      duration: 30 * 60
    },
    {
      start: 5 * 60 * 60,
      duration: 120 * 60
    }
  ]

  const items2 = [
    {
      start: 60 * 60,
      duration: 2 * 60 * 60,
    },
    {
      start: 3.2 * 60 * 60,
      duration: 60 * 60
    },
    {
      start: 6 * 60 * 60,
      duration: 5 * 60 * 60
    }
  ]

  const oldItems = [60 * 60, 10 * 60, 15 * 60]

  const renderedItems = []

  for (let i = 0; i < items.length; i++) {
    let beforeItemsSum = 0;

    if (i > 0) {
      beforeItemsSum = items[i - 1].start + items[i - 1].duration
    }

    renderedItems.push((
      <>
        <span style={{ flex: items[i].start - beforeItemsSum }}></span>
        <div style={{ flex: items[i].duration }} className={classes.item}>
          <div className={classes.itemContent} style={{ visibility: items[i].duration < 60 * 60 ? 'hidden' : '' }}>
            <div className={classes.avatarContent}>
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="first-image" />
              <img
                src="https://img.freepik.com/premium-photo/young-handsome-entrepreneur-man-face-closeup-very-angry-upset-very-tense_1187-16157.jpg"
                alt="first-image" />
              <img
                src="https://img.freepik.com/free-photo/indoor-portrait-displeased-discontent-upset-male-model-with-trendy-hairdo-mustache-beard-wears-round-glasses_273609-8721.jpg"
                alt="first-image" />
            </div>

            <h4 className={classes.itemTitle}>Статус митинг Январь 2022</h4>
            <h4 className={classes.itemDesc}>11:00 - 16:00</h4>
          </div>
        </div>
      </>
    ))
  }

  const renderedItems2 = []

  for (let i = 0; i < items2.length; i++) {
    let beforeItemsSum = 0;

    if (i > 0) {
      beforeItemsSum = items2[i - 1].start + items2[i - 1].duration
    }

    renderedItems2.push((
      <>
        <span style={{ flex: items2[i].start - beforeItemsSum }}></span>
        <div style={{ flex: items2[i].duration, background: '#D2F1B3' }} className={classes.item}>
          <div className={classes.itemContent} style={{ visibility: items2[i].duration < 60 * 60 ? 'hidden' : '' }}>
            <div className={classes.avatarContent}>
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="first-image" />
              <img
                src="https://img.freepik.com/premium-photo/young-handsome-entrepreneur-man-face-closeup-very-angry-upset-very-tense_1187-16157.jpg"
                alt="first-image" />
              <img
                src="https://img.freepik.com/free-photo/indoor-portrait-displeased-discontent-upset-male-model-with-trendy-hairdo-mustache-beard-wears-round-glasses_273609-8721.jpg"
                alt="first-image" />
            </div>

            <h4 className={classes.itemTitle}>Статус митинг Январь 2022</h4>
            <h4 className={classes.itemDesc}>11:00 - 16:00</h4>
          </div>
        </div>
      </>
    ))
  }

  const sum = items[items.length - 1].start + items[items.length - 1].duration
  const sum2 = items2[items2.length - 1].start + items2[items.length - 1].duration


  // 43200 f
  return (
    <div className={classes.content}>

      <div className={classes.timesContent}>
        {renderedTimes}
      </div>

      <h3 style={{ marginTop: 10 }}>Этаж 1</h3>

      <div className={classes.innerContent}>
        {renderedItems}
        <span style={{ flex: 43200 - sum }}></span>
      </div>

      <div style={{width: '100%', height: 1, background: "rgba(0,0,0,0.1)", marginTop: 20}}></div>

      <div className={classes.innerContent}>
        {renderedItems2}
        <span style={{ flex: 43200 - sum2 }}></span>
      </div>

      <div style={{width: '100%', height: 1, background: "rgba(0,0,0,0.1)", marginTop: 20}}></div>

      <div className={classes.innerContent}>
        {renderedItems}
        <span style={{ flex: 43200 - sum }}></span>
      </div>
    </div>
  )
}

export default Calendar;