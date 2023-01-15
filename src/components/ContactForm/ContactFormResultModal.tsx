interface Props {
  isSuccess: boolean;
  onClose: () => void;
}

const successTitle = "Success ✅";
const errorTitle = "Error ⛔";

const successMessage =
  "Your form was submitted successfully, I will get back to you shortly. Thanks!";
const errorMessage =
  "Something happening while trying to send your request. Please try again later or use a different contact method like WhatsApp, Calendly or Facebook.";

const ContactFormResultModal = ({ isSuccess, onClose }: Props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative w-full h-full flex justify-center items-center">
        <div
          className="absolute bg-transparent top-0 left-0 right-0 bottom-0"
          onClick={onClose}
        ></div>
        <div className="max-w-md  flex flex-col gap-4 w-full bg-white text-black p-8 rounded-md">
          <div className="text-center text-4xl font-bold">
            {isSuccess ? successTitle : errorTitle}
          </div>
          <div>{isSuccess ? successMessage : errorMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormResultModal;
