import { motion } from "motion/react";
import { useState } from "react";
import { libre } from "../fonts";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const disabled =
    email === "" || name === "" || subject === "" || message === "";

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message, subject }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Error while sending email!");
      }
    } catch {
      setStatus("error");
    }
    setInterval(() => setStatus(""), 5000);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      return;
    }

    const newIntervalId = setInterval(() => {
      setStatus("");
    }, 5000);
    setIntervalId(newIntervalId);
  };

  return (
    <motion.div
      className="flex xl:flex-row max-xl:flex-col xl:gap-8 rounded-4xl contactshadow bg-mainbg p-2 xl:w-[calc(40%+16px)] max-xl:w-full"
      initial={{ transform: "translateY(40px)", opacity: 0 }}
      whileInView={{ transform: "none", opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="p-2 rounded-[24px] border-border border w-full flex flex-col gap-3 xl:bg-(image:--gradient-contactbox) max-xl:bg-(image:--gradient-contactbox1) max-xl:border-b-0 max-xl:rounded-b-none text-text">
        <h1 className={`leading-none text-[30px] ${libre.className} m-2`}>
          Email Me
        </h1>
        <input
          className="inputbox"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name*"
        />
        <textarea
          className="inputbox flex-1"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Type of Inquiry*"
        />
        <input
          className="inputbox xl:!rounded-b-2xl"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address*"
        />
      </div>
      <div className="p-2 max-xl:pt-1 rounded-[24px] border-border border w-full flex flex-col gap-3 xl:bg-(image:--gradient-contactbox) max-xl:bg-(image:--gradient-contactbox2) max-xl:border-t-0 max-xl:rounded-t-none">
        <div>
          <textarea
            className="inputbox flex-1 h-56 xl:!rounded-t-2xl"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message...*"
          />
          <p className="text-xs text-secondarytext">* fields are required.</p>
        </div>
        <button
          className={`sendbutton !rounded-b-2xl ${
            disabled ? "disabledbutton" : ""
          }`}
          onClick={handleSubmit}
          disabled={disabled || status !== ""}
        >
          {status === "" ? (
            <Icon icon="line-md:email" width={18} height={18} key={"send"} />
          ) : status === "loading" ? (
            <Icon
              icon="line-md:loading-twotone-loop"
              width={18}
              height={18}
              key={"loading"}
            />
          ) : status === "error" ? (
            <Icon icon="line-md:remove" width={18} height={18} key={"error"} />
          ) : (
            <Icon
              icon="line-md:confirm"
              width={18}
              height={18}
              key={"success"}
            />
          )}
          <p className={disabled || status !== "" ? "text-text" : "text-white"}>
            {status === ""
              ? "Send Mail"
              : status === "loading"
                ? "Sending..."
                : status === "error"
                  ? "Error happened, Try again!"
                  : "Successfully sent!"}
          </p>
        </button>
      </div>
    </motion.div>
  );
}
