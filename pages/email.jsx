import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import Underline from "../components/Underline"

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export default function EmailPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
    const [status, setStatus] = useState("idle") // idle | sending | success | error

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const sendEmail = async (e) => {
        e.preventDefault()
        setStatus("sending")
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                { publicKey: PUBLIC_KEY }
            )
            setStatus("success")
            setForm({ name: "", email: "", subject: "", message: "" })
        } catch {
            setStatus("error")
        }
    }

    const inputClass =
        "bg-[#010718] text-[#4070F4] border-2 border-[#4070F4] w-2/3 h-12 rounded-full px-5 my-3 placeholder-[#4070F4]/50 focus:outline-none focus:border-blue-300"

    return (
        <>
            <Head>
                <title>Contact | Portfolio</title>
            </Head>
            <div className="min-h-screen w-full flex justify-center items-center dark:bg-[#010718] bg-gray-50">
                <div className="w-full max-w-xl px-4">
                    <form onSubmit={sendEmail} className="flex flex-col items-center">
                        <div className="w-full flex justify-center font-bold text-3xl font-serif dark:text-white text-gray-900 pt-6">
                            Email Form
                        </div>
                        <Underline color="white" />

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
                                className="bg-[#010718] text-[#4070F4] border-2 border-[#4070F4] w-2/3 h-48 rounded-xl px-5 pt-4 my-3 placeholder-[#4070F4]/50 focus:outline-none focus:border-blue-300 resize-none"
                            />

                            {status === "success" && (
                                <p className="text-green-400 mb-2">Message sent! I&apos;ll be in touch soon.</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 mb-2">Something went wrong. Please try again.</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="text-white bg-[#4070F4] h-10 w-40 rounded-full mt-2 mb-6 disabled:opacity-60 hover:bg-blue-500 transition-colors"
                            >
                                {status === "sending" ? "Sending..." : "Send Email"}
                            </button>
                        </div>

                        <Link href="/" className="text-[#4070F4] text-sm hover:underline mb-8">
                            ← Back to portfolio
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}
