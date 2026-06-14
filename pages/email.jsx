import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import SectionHeading from "../components/SectionHeading"

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

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

    const inputClass =
        "bg-white dark:bg-base-dark text-gray-900 dark:text-white border-2 border-accent w-2/3 h-12 rounded-full px-5 my-3 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent-hover"

    return (
        <>
            <Head>
                <title>Contact | Portfolio</title>
            </Head>
            <div className="min-h-screen w-full flex justify-center items-center bg-base dark:bg-base-dark">
                <div className="w-full max-w-xl px-4">
                    <form onSubmit={sendEmail} className="flex flex-col items-center">
                        <SectionHeading>Email Form</SectionHeading>

                        <div className="flex flex-col w-full items-center mt-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className={inputClass}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className={inputClass}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={form.subject}
                                onChange={handleChange}
                                required
                                className={inputClass}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="bg-white dark:bg-base-dark text-gray-900 dark:text-white border-2 border-accent w-2/3 h-48 rounded-xl px-5 pt-4 my-3 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent-hover resize-none"
                            />

                            {status === "success" && (
                                <p className="text-green-400 mb-2">Message sent! I&apos;ll be in touch soon.</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 mb-2 text-center px-4 break-words">
                                    {errorMsg || "Something went wrong. Please try again."}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="text-white bg-accent h-10 w-40 rounded-full mt-2 mb-6 disabled:opacity-60 hover:bg-accent-hover transition-colors"
                            >
                                {status === "sending" ? "Sending..." : "Send Email"}
                            </button>
                        </div>

                        <Link href="/" className="text-accent text-sm hover:underline mb-8">
                            ← Back to portfolio
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}
