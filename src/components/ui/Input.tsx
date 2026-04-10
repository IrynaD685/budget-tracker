
import type { ComponentPropsWithRef } from "react";
import classes from "./Input.module.css";
import type { FieldError } from "react-hook-form";

type InputProps = ComponentPropsWithRef<"input"> & {
  label: string;
  id: string;
  error?: FieldError
  
};

export default function Input({ label, id, error, ...props }: InputProps) {
    return <div className={classes.wrapper}>
        <label className={classes.label} htmlFor={id}>{label}</label>
        <input className={classes.input}
            id={id}
            {...props}
        />
        {error && <div className={classes.errorWrapper}><span>{error.message}</span></div>}
    </div>
}