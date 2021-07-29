import React, { useState } from "react";
import { useForm } from "@mantine/hooks";
import { TextInput, Textarea, Button } from "@mantine/core";

export const ContactForm = () => {
  interface EntriesProps {
    time: number;
    name?: string;
    email: string;
    message: string;
  }

  const [entries, setEntries] = useState<EntriesProps[]>([]);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
    },
  });

  const handleSubmit = (e: any) => {
    const timestamp: number = Date.now();
    const formGather = {
      time: timestamp,
      name: e.name,
      email: e.email,
      message: e.message,
    };
    form.reset();
    setEntries([...entries, formGather]);
  };

  console.log(entries);

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <TextInput
        variant="default"
        label="Name"
        placeholder="Your name"
        style={{ margin: ".5rem 0" }}
        value={form.values.name}
        onChange={(event) =>
          form.setFieldValue("name", event.currentTarget.value)
        }
      />

      <TextInput
        placeholder="Your (valid) email address"
        variant="default"
        style={{ margin: ".5rem 0" }}
        label="Email"
        required
        error={form.errors.email && "Please specify valid email"}
        value={form.values.email}
        onChange={(event) =>
          form.setFieldValue("email", event.currentTarget.value)
        }
      />
      <Textarea
        value={form.values.message}
        variant="default"
        label="Message"
        onChange={(event) =>
          form.setFieldValue("message", event.currentTarget.value)
        }
        placeholder="Your message"
        style={{ margin: ".5rem 0" }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
