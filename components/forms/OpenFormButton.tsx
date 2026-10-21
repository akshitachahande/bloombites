"use client";

import { Button, type ButtonProps } from "@/components/ui/Button";
import { useForms, type FormName } from "./FormsProvider";

type OpenFormButtonProps = Extract<ButtonProps, { href?: undefined }> & {
  form: FormName;
};

/** A Button that opens one of the site's modal forms. */
export function OpenFormButton({ form, onClick, ...props }: OpenFormButtonProps) {
  const { open } = useForms();
  return (
    <Button
      {...props}
      aria-haspopup="dialog"
      onClick={(e) => {
        onClick?.(e);
        open(form);
      }}
    />
  );
}
