// app/contact/page.js
export default function Contact() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-[#1A1A1A] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-[--font-playfair] font-bold mb-6">
                        Hubungi Kami
                    </h1>
                    <p className="text-xl text-[#E5E5E5] max-w-2xl mx-auto">
                        Tim kami siap membantu Anda 24/7 melalui berbagai saluran komunikasi
                    </p>
                </div>
            </section>

            {/* Contact Info Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {/* Contact Methods */}
                        <div className="bg-[#F9F9F9] p-8 rounded-xl">
                            <h2 className="text-2xl font-[--font-playfair] font-bold mb-6 text-[#0F4C75]">
                                Informasi Kontak
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-[#C5A47E] rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Telepon</p>
                                        <p className="text-[#666]">+62 21 1234 5678</p>
                                        <p className="text-[#666]">+62 811 2233 4455 (WhatsApp)</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-[#C5A47E] rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-[#666]">cs@insureplus.com</p>
                                        <p className="text-[#666]">support@insureplus.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-[#C5A47E] rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Kantor Pusat</p>
                                        <p className="text-[#666]">
                                            Jl. Sudirman No.123<br/>
                                            Jakarta Selatan<br/>
                                            Indonesia 12190
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-[#F9F9F9] p-8 rounded-xl">
                            <h2 className="text-2xl font-[--font-playfair] font-bold mb-6 text-[#0F4C75]">
                                Jam Operasional
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { day: 'Senin - Jumat', time: '08:00 - 17:00 WIB' },
                                    { day: 'Sabtu', time: '08:00 - 12:00 WIB' },
                                    { day: 'Minggu', time: 'Tutup' },
                                ].map((schedule, index) => (
                                    <div key={index} className="flex justify-between border-b pb-2">
                                        <span className="text-[#666]">{schedule.day}</span>
                                        <span className="font-semibold">{schedule.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-[--font-playfair] font-bold mb-6 text-[#0F4C75]">
                                Kirim Pesan
                            </h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#C5A47E]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#C5A47E]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Pesan</label>
                                    <textarea
                                        rows="4"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#C5A47E]"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#0F4C75] text-white py-3 rounded-lg hover:bg-[#2C3E50] transition-colors"
                                >
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613506864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x9bf7e43ad1ab2e28!2sJl.%20Sudirman%20No.123%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1623396787047!5m2!1sen!2sid"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="rounded-xl"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Social Media */}
            <section className="bg-[#1A1A1A] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-[--font-playfair] font-bold mb-8">
                        Ikuti Kami di Media Sosial
                    </h2>
                    <div className="flex justify-center space-x-6">
                        {[
                            { name: 'Facebook', icon: '📘' },
                            { name: 'Twitter', icon: '🐦' },
                            { name: 'LinkedIn', icon: '💼' },
                            { name: 'Instagram', icon: '📸' },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-4xl hover:text-[#C5A47E] transition-colors"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}