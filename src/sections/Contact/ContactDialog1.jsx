import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { SiTicktick } from "react-icons/si";
import { MdError } from "react-icons/md";

const ContactDialog = ({open, onClose}) => {
  const form = useRef();
  const timerRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState({message: "", isError: false});
  const [isSending, setIsSending] = useState(false);

    const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const isDisabled = !name.trim() || !email.trim() || !message.trim() || validateEmail(email) === false || isSending;

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const clearSendMessage = () => setSuccess({message: "", isError: false});

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm("service_g1ef4ro", "template_ta1raw7", form.current, {
        publicKey: "oybic5I9VtwkTSSpI",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess({message: "Message Sent Successfully", isError: false});
          setIsSending(false);

          timerRef.current = setTimeout(() => {
            clearSendMessage();
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess({message: "Error sending message", isError: true});
          setIsSending(false);

          timerRef.current = setTimeout(() => {
            clearSendMessage();
          }, 2000);
        }
      );
  };

  return (
    <div className={`fixed inset-0 flex justify-center items-center transition-transform duration-500 ${open? "translate-y-0": "-translate-y-full"} z-[100000]`}>
        <div className="relative py-56 contact font-body h-full w-full m-auto flex flex-col lg:flex-row justify-center lg:justify-baseline items-center gap-12 shadow bg-black text-white">
          <div onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="group absolute top-4 right-4 cursor-[url('/pointer.png'),pointer] flex flex-col w-12 h-12 justify-center items-center gap-1.5" onClick={onClose}>
            <span className="inline-block w-10 lg:w-12 h-0.5 bg-white rotate-45 translate-y-1 group-hover:bg-red-500"></span>
            <span className="inline-block w-10 lg:w-12 h-0.5 bg-white -rotate-45 -translate-y-1 group-hover:bg-red-500"></span>
          </div>
          <div className="contact-container flex flex-col gap-4 lg:gap-10 w-[90%] lg:w-[40%]">
              <h1 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-2xl md:text-3xl lg:text-7xl font-heading font-bold">
              Let's Work Together
              </h1>
              <div className="contact-text flex flex-col gap-2 lg:gap-6">
                  <h2 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-xl lg:text-2xl">yaduk.developer@gmail.com</h2>
                  <h2 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-xl lg:text-2xl">Mumbai, India</h2>
                  <h2 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-xl lg:text-2xl">+91 9137832949</h2>
              </div>
          </div>
          <div className="form-container w-[80%] lg:w-[40%]">
              <form
              ref={form}
              className="flex flex-col gap-5 w-full"
              onSubmit={sendEmail}
              >
                  <input
                      type="text"
                      required
                      placeholder="Name"
                      className="p-5 bg-transparent border border-white text-white rounded-md cursor-[url('/text-cursor.png'),auto] placeholder:text-zinc-200"
                      onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}
                      name="from_name"
                      value={name}
                      onChange={handleName}
                  />
                  <input
                      type="email"
                      required
                      placeholder="Email ID"
                      className="p-5 bg-transparent border border-white text-white rounded-md cursor-[url('/text-cursor.png'),auto] placeholder:text-zinc-200"
                      onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}
                      name="from_email"
                      value={email}
                      onChange={handleEmail}
                  />
                  <textarea
                      rows={8}
                      placeholder="Message"
                      className="p-5 bg-transparent border border-white text-white rounded-md cursor-[url('/text-cursor.png'),auto] placeholder:text-zinc-200"
                      onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}
                      name="message"
                      value={message}
                      onChange={handleMessage}
                  />
                  <button disabled={isDisabled} onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className={`${isDisabled ? "bg-gray-400 text-gray-900 cursor-[url('/dnd.png'),not-allowed]" : "bg-[#81bc06] text-black hover:bg-[#abf707] hover:text-zinc-900 cursor-[url('/pointer.png'),pointer]"} border-none px-4 py-2 rounded-full font-heading uppercase`}>
                    Send
                  </button>
                  <p className={`${isSending? "visible": "invisible"} font-heading absolute right-3 bottom-3 px-4 py-3 text-center flex justify-center items-center gap-5 rounded-lg text-black bg-blue-400`}><img src='/loading.png' alt='spinning-bottle-cap' className="marquee-star w-10 lg:w-10" />&nbsp;Sending Message ...</p>
                  {success.message && (<p className={`px-4 font-heading absolute right-3 bottom-3 py-3 text-center flex justify-center items-center gap-5 rounded-lg text-white transition-color ease-in-out duration-300 ${success.isError ? 'bg-red-600' : 'bg-green-700'}`}>{success.isError ? <SiTicktick /> : <MdError />}{success.message}</p>)}
              </form>
          </div>
        </div>
    </div>
  )
}

export default ContactDialog