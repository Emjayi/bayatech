"use client";
import * as z from "zod";
import { formSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import {
  Field,
  FieldGroup,
  FieldContent,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldSeparator,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Schema = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<Schema>({
    resolver: zodResolver(formSchema as any),
  });
  const {
    formState: { isSubmitting, isSubmitSuccessful },
  } = form;

  const handleSubmit = form.handleSubmit(async (data: Schema) => {
    try {
      // TODO: implement form submission
      console.log(data);
      form.reset();
    } catch (error) {
      // TODO: handle error
    }
  });

  if (isSubmitSuccessful) {
    return (
      <div className="p-2 sm:p-5 md:p-8 bg-white  w-full rounded-md gap-2 border">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, stiffness: 300, damping: 25 }}
          className="h-full py-6 px-3"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 500,
              damping: 15,
            }}
            className="mb-4 flex justify-center rounded-full w-fit mx-auto p-2"
          >
            <Check className="size-8" />
          </motion.div>
          <h2 className="text-center text-2xl text-pretty font-bold mb-2">
            Thank you
          </h2>
          <p className="text-center text-lg text-pretty text-muted-foreground">
            Form submitted successfully, we will get back to you soon
          </p>
        </motion.div>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 text-left sm:p-5 md:p-8 w-full  gap-2 max-w-3xl mx-auto"
    >
      <FieldGroup className="grid  text-left md:grid-cols-6 gap-4 mb-6">
        <Controller
          name="fullName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="gap-1 col-span-full"
            >
              <Input
                {...field}
                id="fullName"
                type="text"
                className="bg-white"
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                aria-invalid={fieldState.invalid}
                placeholder="Name"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="gap-1 col-span-full"
            >
              <Input
                {...field}
                id="email"
                type="text"
                className="bg-white"
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                aria-invalid={fieldState.invalid}
                placeholder="Email address"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="gap-1 col-span-full"
            >
              <Input
                {...field}
                id="phone"
                type="text"
                className="bg-white"
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                aria-invalid={fieldState.invalid}
                placeholder="Phone number"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="subject"
          control={form.control}
          render={({ field, fieldState }) => {
            const options = [
              { label: "Google", value: "google" },
              { label: "Facebook", value: "facebook" },
              { label: "Instagram", value: "instagram" },
              { label: "Friend", value: "friend" },
            ];
            return (
              <Field
                data-invalid={fieldState.invalid}
                className="gap-1 col-span-full"
              >

                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="How did you find us?" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            );
          }}
        />
      </FieldGroup>
      <div className="flex justify-stretch items-center w-full">
        <Button disabled={isSubmitting} className="w-full bg-green-600 hover:bg-green-700">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
