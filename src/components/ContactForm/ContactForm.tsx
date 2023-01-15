import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useState } from "react";
import ContactFormResultModal from "./ContactFormResultModal";
import axios from "axios";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name." }),
  email: z
    .string()
    .min(1, { message: "Please enter your email." })
    .email({ message: "Please, enter a valid email." }),
  message: z
    .string()
    .min(10, { message: "Your message must have at least 10 characters." }),
});

type ContactFormSchemaType = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });
  const [contactFormSentSuccessfully, setContactFormSentSuccessfully] =
    useState(false);
  const [showContactFormResultModal, setShowContactFormResultModal] =
    useState(false);

  const onSubmit = async (data: ContactFormSchemaType) => {
    try {
      await axios.post("/api/send-contact-request", data);
      setContactFormSentSuccessfully(true);
      reset();
    } catch (error) {
      setContactFormSentSuccessfully(false);
    }
    setShowContactFormResultModal(true);
  };

  return (
    <form
      className="bg-gradient-to-r from-neutral-800 to-neutral-900 w-full rounded p-4 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {showContactFormResultModal && (
        <ContactFormResultModal
          isSuccess={contactFormSentSuccessfully}
          onClose={() => setShowContactFormResultModal(false)}
        />
      )}
      <div>
        <label className="block text-white text-sm font-bold mb-1">Name</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          {...register("name")}
        />
        {errors.name && (
          <div className="text-lime-500 text-sm">{errors.name.message}</div>
        )}
      </div>
      <div>
        <label className="block text-white text-sm font-bold mb-1">Email</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          {...register("email")}
        />
        {errors.email && (
          <div className="text-lime-500 text-sm">{errors.email.message}</div>
        )}
      </div>
      <div>
        <label className="block text-white text-sm font-bold mb-1">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          rows={8}
          {...register("message")}
        />
        {errors.message && (
          <div className="text-lime-500 text-sm">{errors.message.message}</div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Button loading={isSubmitting} type="submit">
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
