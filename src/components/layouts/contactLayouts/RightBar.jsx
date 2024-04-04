import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import InputFloat from "../../elements/contactelements/InputFloat";
import TextFloat from "../../elements/contactelements/TextareFloat";

function LeftBar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const from = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h6ofn9j",
        "template_5lalopq",
        from.current,
        "YmD4CLNvY6c6HdH23"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("berhasil cok");
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
          setShowFail(true);
        }
      );

    // Mengatur ulang nilai input
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const [showModal, setShowModal] = useState(false);

  const modalPesan = () => {
    const closeModal = () => {
      setShowModal(false);
    };

    return (
      <>
        {showModal && (
          <dialog className="modal" open>
            <form method="dialog" className="bg-green-500 modal-box">
              <button
                className="absolute text-lg font-bold text-red-500 btn btn-sm btn-circle btn-ghost right-2 top-2 hover:bg-slate-800"
                onClick={closeModal}
              >
                ✕
              </button>
              <h3 className="text-lg font-bold">Pesan berhasil di kirim!</h3>
              <p className="py-4">
                Pesan berhasil di kirim ke Goncang Samudera
              </p>
            </form>
            <form
              method="dialog"
              id="modal_backdrop"
              className="modal-backdrop"
            />
          </dialog>
        )}
      </>
    );
  };

  const [showFail, setShowFail] = useState(false);

  const modalFail = () => {
    const closeModal = () => {
      setShowModal(false);
    };

    return (
      <>
        {showFail && (
          <dialog className="modal" open>
            <form method="dialog" className="bg-red-400 modal-box">
              <button
                className="absolute text-lg font-bold text-black btn btn-sm btn-circle btn-ghost right-2 top-2 hover:bg-white"
                onClick={closeModal}
              >
                ✕
              </button>
              <h3 className="text-lg font-bold text-black">
                Pesan gagal di kirim!
              </h3>
              <p className="py-4 text-black">
                Pesan gagal di kirim ke Goncang Samudera
              </p>
            </form>
            <form
              method="dialog"
              id="modal_backdrop"
              className="modal-backdrop"
            />
          </dialog>
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {modalPesan()}
      {modalFail()}
      <h2 className="mb-3 text-2xl font-bold text-black">Kirim Pesan</h2>
      <form
        className="flex flex-col items-center w-full h-full gap-5 px-0 text-lg md:px-7 justify-evenly"
        ref={from}
        onSubmit={sendEmail}
        method="onsubmit"
      >
        <InputFloat
          type="text"
          name="user_name"
          placeholder="Nama"
          value={name}
          onChange={(event) => setName(event.target.value)}
        >
          Nama
        </InputFloat>
        <InputFloat
          type="email"
          name="user_email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        >
          Email
        </InputFloat>
        <InputFloat
          type="number"
          name="user_phone"
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        >
          Phone
        </InputFloat>
        <TextFloat
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        >
          Pesan
        </TextFloat>
        <button
          type="submit"
          value="Send"
          className="w-5/12 py-2 text-white bg-blue-400 rounded-full hover:bg-blue-500"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

export default LeftBar;
