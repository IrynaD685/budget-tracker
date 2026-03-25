
import type { ComponentPropsWithRef } from "react";
import classes from "./Input.module.css";

type InputProps = ComponentPropsWithRef<"input"> & {
  label: string;
  id: string;
};

export default function Input({ label, id, ...props }: InputProps) {
    return <div className={classes.wrapper}>
        <label className={classes.label} htmlFor={id}>{label}</label>
        <input className={classes.input}
            id={id}
            {...props}
        />
    </div>
}