"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const schema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export function ResetPasswordForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setLoading(true);
    
    if (!token) {
      toast.error("Reset token is missing.");
      setLoading(false);
      return;
    }

    const { error } = await authClient.resetPassword({
      newPassword: data.password,
      token,
    });

    if (error) {
      toast.error(error.message || "Failed to reset password.");
      setLoading(false);
      return;
    }

    toast.success("Password reset successfully! Please login.");
    localStorage.removeItem("resetEmail");
    router.push("/login");
  };

  return (
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-background p-4">
      <div className={cn("w-full max-w-[360px] flex flex-col gap-4", className)} {...props}>
        <Card className="overflow-hidden p-0">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center mb-4">
                  <h1 className="text-2xl font-bold">Reset Password</h1>
                  <p className="text-sm text-muted-foreground">Create a new password</p>
                </div>

                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel>New Password</FieldLabel>
                      <Input {...field} type="password" placeholder="••••••••" className="placeholder:text-muted-foreground/70" />
                      {fieldState.error && <FieldError errors={[{ message: fieldState.error.message! }]} />}
                    </Field>
                  )}
                />

                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel>Confirm Password</FieldLabel>
                      <Input {...field} type="password" placeholder="••••••••" className="placeholder:text-muted-foreground/70" />
                      {fieldState.error && <FieldError errors={[{ message: fieldState.error.message! }]} />}
                    </Field>
                  )}
                />

                <Button type="submit" className="w-full mt-2" disabled={loading}>
                  {loading && <Spinner className="mr-2" />}
                  {loading ? "Resetting..." : "Reset Password"}
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