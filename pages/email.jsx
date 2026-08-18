import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { BsArrowLeft, BsSend, BsCheckCircleFill, BsExclamationCircleFill } from "react-icons/bs"
import SectionHeading from "../components/SectionHeading"
import Reveal from "../components/Reveal"
import AmbientOrbs from "../components/AmbientOrbs"
import MagneticButton from "../components/MagneticButton"

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "subject", label: "Subject", type: "text" },
]

export default function EmailPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
    const [status, setStatus] = useState("idle") // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState("")

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const sendEmail = async (e) => {
        e.preventDefault()
        setStatus("sending")
        setErrorMsg("")

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setErrorMsg("Email is not configured (missing EmailJS environment variables).")
            setStatus("error")
            return
        }

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    reply_to: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                { publicKey: PUBLIC_KEY }
            )
            setStatus("success")
            setForm({ name: "", email: "", subject: "", message: "" })
        } catch (err) {
            // EmailJS rejects with { status, text } — surface the real reason.
            console.error("EmailJS send failed:", err)
            const detail = err?.text || err?.message || "Unknown error"
            setErrorMsg(`Couldn't send (${err?.status ?? "?"}): ${detail}`)
            setStatus("error")
        }
    }

    // Floating-label input: the label sits inside the field and lifts into the
    // border once the field has content or focus (`peer` + `placeholder-shown`).
    const inputClass =
        "peer w-full rounded-2xl border border-gray-300 bg-white/70 px-5 pb-3 pt-6 text-gray-900 outline-none backdrop-blur-sm transition-all duration-300 placeholder-transparent focus:border-accent focus:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-white"
    const labelClass =
        "pointer-events-none absolute left-5 top-4 origin-left text-gray-500 transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs dark:text-gray-400"

    return (
        <>
            <Head>
                <title>Contact | Matt Curschman</title>
            </Head>
            <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-base py-16 dark:bg-base-dark">
                <AmbientOrbs variant="a" />

                <div className="relative w-full max-w-2xl px-6">
                    <Reveal from="down">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-accent dark:text-gray-400"
                        >
                            <BsArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                            Back to portfolio
                        </Link>
                    </Reveal>

                    <SectionHeading eyebrow="Drop me a line" className="pt-8">
                        Get In Touch
                    </SectionHeading>

                    <Reveal from="scale">
                        <form
                            onSubmit={sendEmail}
                            className="gradient-border rounded-3xl border border-gray-200 bg-white/60 p-6 backdrop-blur-sm dark:border-white/5 dark:bg-white/[0.03] sm:p-9"
                        >
                            <div className="flex flex-col gap-5">
                                {fields.map(({ name, label, type }) => (
                                    <div key={name} className="relative">
                                        <input
                                            id={name}
                                            type={type}
                                            name={name}
                                            placeholder={label}
                                            value={form[name]}
                                            onChange={handleChange}
                                            required
                                            className={inputClass}
                                        />
                                        <label htmlFor={name} className={labelClass}>
                                            {label}
                                        </label>
                                    </div>
                                ))}

                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className={`${inputClass} resize-none`}
                                    />
                                    <label htmlFor="message" className={labelClass}>
                                        Message
                                    </label>
                                </div>

                                {status === "success" && (
                                    <p className="animate-rise-in flex items-center gap-2 text-emerald-500 opacity-0">
                                        <BsCheckCircleFill /> Message sent! I&apos;ll be in touch soon.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="animate-rise-in flex items-start gap-2 break-words text-red-400 opacity-0">
                                        <BsExclamationCircleFill className="mt-1 flex-shrink-0" />
                                        {errorMsg || "Something went wrong. Please try again."}
                                    </p>
                                )}

                                <div className="flex justify-center pt-2">
                                    <MagneticButton strength={0.3}>
                                        <button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="shine-host inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-60"
                                            style={{ background: 'var(--brand-gradient)', backgroundSize: '200% auto' }}
                                        >
                                            {status === "sending" ? (
                                                <>
                                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                                    Sending…
                                                </>
                                            ) : (
                                                <>
                                                    Send Email <BsSend />
                                                </>
                                            )}
                                        </button>
                                    </MagneticButton>
                                </div>
                            </div>
                        </form>
                    </Reveal>
                </div>
            </div>
        </>
    )
}
