import { component$ } from "@builder.io/qwik";
import { type DocumentHead, z } from "@builder.io/qwik-city";
import { formAction$, zodForm$ } from "@modular-forms/qwik";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginForm = z.infer<typeof LoginSchema>;

export const useFormAction = formAction$<LoginForm>((values) => {
  console.log(values);
}, zodForm$(LoginSchema));

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
