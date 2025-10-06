"use client";

import { useForm } from "@tanstack/react-form";
import { useMutation } from "convex/react";
import { ArrowRightIcon } from "lucide-react";
import { toast } from "sonner";
import z from "zod";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { api } from "../../convex/_generated/api";

const schema = z.object({
  email: z.email(),
});

const IndexPage = () => {
  const insertFormSubmission = useMutation(api.form.insert);

  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => {
      try {
        await insertFormSubmission({ email: value.email });
        toast.success("Email enviado com sucesso");
      } catch {
        toast.error("Email já foi enviado para este endereço");
      }
    },
    validators: {
      onMount: schema,
      onChange: schema,
      onSubmit: schema,
    },
  });

  return (
    <div className="relative flex flex-1">
      <div className="relative z-1 flex flex-1 overflow-auto">
        <div className="h-screen w-full p-4">
          <form
            className="relative flex h-full w-full flex-1 items-center justify-center p-4"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <div className="col-span-1 row-span-3 flex max-w-md flex-col items-center justify-center gap-6 rounded-2x">
              <div className="flex min-w-[280px] flex-col items-center gap-2 md:min-w-[350px]">
                <Logo />
                <span className="font-semibold text-foreground text-xl">
                  Ganha acesso antecipado à parte 2
                </span>
                <span className="text-muted-foreground text-sm">
                  Introduz o teu email para garantir o teu acesso
                </span>
              </div>
              <div className="w-full">
                <form.Field name="email">
                  {(field) => (
                    <FieldSet>
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="email">Email</FieldLabel>
                          <Input
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="m@exemplo.com"
                            value={field.state.value}
                          />
                        </Field>
                      </FieldGroup>
                    </FieldSet>
                  )}
                </form.Field>
              </div>
              <div className="w-full">
                <form.Subscribe
                  selector={(state) => ({
                    isSubmitting: state.isSubmitting,
                    canSubmit: state.canSubmit,
                  })}
                >
                  {({ isSubmitting, canSubmit }) => (
                    <Button
                      className="w-full"
                      disabled={!canSubmit || isSubmitting}
                      type="submit"
                      variant="secondary"
                    >
                      <span className="text-primary-foreground">Continuar</span>
                      {isSubmitting ? (
                        <Spinner />
                      ) : (
                        <ArrowRightIcon
                          className="text-primary-foreground"
                          size={10}
                        />
                      )}
                    </Button>
                  )}
                </form.Subscribe>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
