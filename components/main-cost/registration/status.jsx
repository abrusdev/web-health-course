import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',

    position: 'relative',
    width: ({ width }) => width,
    height: 76,

    "&:before": {
      content: '""',

      position: 'absolute',
      bottom: 0,

      width: '100%',
      height: 6,

      background: ({ isPassed }) => isPassed ? '#1958FA' : '#FFFFFF',
      borderRadius: 20,
    }
  },
  step: {
    width: 30,
    height: 30,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    fontWeight: 700,
    fontSize: 16,
    lineHeight: '120%',

    color: ({ isPassed }) => isPassed ? '#ffffff' : '#BADBFF',
    background: ({ isPassed }) => isPassed ? '#1958FA' : '#FFFFFF',
    borderRadius: 64,
  },
  title: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: '120%',
  },
}))

function MainCostRegistrationStatus({ step, title, width, isPassed }) {
  const styles = useStyles({ width, isPassed })

  return (
    <div className={styles.content}>
      <p className={styles.step}>{step}</p>
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default MainCostRegistrationStatus;