import classes from './index.module.css';
import { cn } from "@/utils";

function Container(props) {
  return (
    <section className={cn(classes.content, props.className)} id={props.id}>
      {props.children}
    </section>
  )
}

export default Container