import * as Dialog from "@radix-ui/react-dialog";
// import { useForm } from "react-hook-form";
import { GoogleButton } from "@/app/components/ui/button";
import { login } from "@/app/lib/action/auth";
// import { trackEvent } from "@/lib/analytics";

type AuthModalProps = {
  onLogin?: (data: unknown) => void;
  providers?: string[];
};

export function AuthenticationDialog({
  providers = ["google"],
}: AuthModalProps) {
  // const { register, handleSubmit } = useForm();

  // const submit = handleSubmit((data) => {
  //   onLogin?.(data);
  //   // trackEvent("LOGIN_SUBMIT");
  // });

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Sign up</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

        {/* Modal Content */}
        <Dialog.Content
          className="fixed flex flex-col items-center justify-center top-1/2 left-1/2 z-50 w-full max-w-md transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-b from-white to-purple-300 p-6 shadow-lg focus:outline-none"
          role="dialog"
          aria-describedby="auth-modal-description">
          {/* Close Button */}
          <Dialog.Close
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
            aria-label="Close">
            {"×"}
          </Dialog.Close>

          {/* Title */}
          <Dialog.Title className="text-2xl font-bold text-gray-900">
            Hi Aspirant
          </Dialog.Title>
          <Dialog.Description
            id="auth-modal-description"
            className="text-sm text-gray-500 mt-1">
            We love to see you here!
          </Dialog.Description>

          {/* Login Form */}
          {/* <form onSubmit={submit} className="mt-6 space-y-4">
            <Input
              {...register("email")}
              placeholder="Email"
              type="email"
              required
            />
            <Input
              {...register("otp")}
              placeholder="OTP"
              type="text"
              required
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form> */}

          {/* Google Provider */}
          {providers.includes("google") && (
            <div className="mt-4">
              <GoogleButton onClick={login} />
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
