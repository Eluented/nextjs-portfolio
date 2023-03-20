import React, { useState, useContext } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { sendContactForm } from "../utils/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function ContactMe() {
  const router = useRouter();

  const [validEmail, setValidEmail] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [touched, setTouched] = useState({});
  const [contactState, setContactState] = useState({
    email: "",
    subject: "",
    message: "",
    isLoading: false,
    error: "",
  });

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const formSubmitDisable =
    !contactState.email ||
    !contactState.subject ||
    !contactState.message ||
    !validEmail;

  const handleSubmit = async () => {
    setContactState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm({
        subject: contactState.subject,
        plan: contactState.plan,
        message: contactState.message,
        email: contactState.email,
      });
      setContactState({
        email: "",
        plan: "",
        subject: "",
        message: "",
        isLoading: false,
        error: "",
      });
      toast.success("Message has been sent", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      setContactState((prev) => ({
        ...prev,
        isLoading: false,
        error: err.message,
      }));
    }
  };

  const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setValidEmail(!!validateEmail(e.target.value));
    }
    setContactState({ ...contactState, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="pl-[8vw] md:pl-0 ">
        <h1 className="text-5xl font-bold py-6 md:text-center  border-separate   rounded-full underline underline-offset-8 decoration-cyan-500">
          Contact
        </h1>
        <p className="md:text-center">
          Submit the form below to ask me anything or shoot me an email at:
          email@email.com
        </p>
      </div>
      <div id="contact">
        {/* Toast Container */}
        <ToastContainer
          position="bottom-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {/* Contact Us Form */}
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  ">
          {/* ERROR HANDLER */}
          {contactState.error && (
            <Text color="red.300" my={4} fontSize="xl">
              {contactState.error}
            </Text>
          )}
          <Container action="#" className="space-y-8 ">
            <FormControl isRequired isInvalid={touched.email && !validEmail}>
              <FormLabel className="mb-2 text-base font-medium">
                Your email
              </FormLabel>
              <Input
                color="gray.900"
                errorBorderColor="red.500"
                type="text"
                id="email"
                name="email"
                value={contactState.email}
                className="contact-input"
                variant="outline"
                placeholder="name@email.com"
                required
                onChange={handleChange}
                onBlur={onBlur}
                focusBorderColor="purple.300"
                bgColor="gray.50"
                size={"lg"}
              />
              <FormErrorMessage className="text-red-500 -mb-1">
                Enter a valid email address
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired className="w-full">
              <FormLabel className="mb-2 mt-5 text-base font-medium">
                Subject
              </FormLabel>
              <Input
                color="gray.900"
                className="contact-input"
                type="text"
                id="subject"
                name="subject"
                value={contactState.subject}
                placeholder="What's this about?"
                required
                onChange={handleChange}
                bgColor="gray.50"
                focusBorderColor="purple.300"
                size={"lg"}
              />
            </FormControl>
            <FormControl isRequired className="w-full">
              <FormLabel className="mb-2 mt-6 text-base font-medium">
                Message
              </FormLabel>
              <Textarea
                color="gray.900"
                focusBorderColor="purple.300"
                bgColor="gray.50"
                type="text"
                id="message"
                name="message"
                rows={4}
                value={contactState.message}
                placeholder="Let us know how we can help you"
                required
                onChange={handleChange}
                size={"lg"}
                className="contact-input"
              />
            </FormControl>
            <Button
              aria-label="Contact Submit"
              isDisabled={formSubmitDisable}
              isLoading={contactState.isLoading}
              onClick={handleSubmit}
              className="form-button"
            >
              Submit
            </Button>
          </Container>
        </div>
      </div>
    </>
  );
}
