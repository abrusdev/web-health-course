import classes from './index.module.css';

function Button({ children, width, height, ...props }) {
  return (
    <div {...props}>
      <button className={classes.content} style={{width: width, height: height}}>{children}</button>
    </div>
  )
}

export default Button;