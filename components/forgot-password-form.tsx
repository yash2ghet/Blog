"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setLoading(true);
    const { error } = await authClient.requestPasswordReset({
      email: data.email,
      redirectTo: "/reset-password",
    });

    if (error) {
      toast.error(error.message || "Failed to send reset email.");
      setLoading(false);
    } else {
      toast.success("Check your email for reset instructions.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-background p-4 overflow-hidden">
      <div className="w-full max-w-[360px] flex flex-col gap-4">
        <Card className="overflow-hidden p-0">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center mb-6">
                  <h1 className="text-2xl font-bold">Forgot Password?</h1>
                  <p className="text-balance text-muted-foreground">
                    No worries, we&apos;ll send you reset instructions.
                  </p>
                </div>

                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field aria-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Email address*</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="placeholder:text-muted-foreground/70"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Button type="submit" className="w-full mt-2" disabled={loading}>
                  {loading && <Spinner className="mr-2" />}
                  {loading ? "Sending..." : "Reset Password"}
                </Button>

                <div className="text-center">
                  <Link href="/login" className="text-sm underline-offset-2 hover:underline">
                    &lt; Back to login
                  </Link>
                </div>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}