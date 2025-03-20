import Link from 'next/link';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section
                className="relative min-h-[70vh] bg-gradient-to-r from-[#1A1A1A]/90 to-[#2C3E50]/90 text-white"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/70 to-[#2C3E50]/70"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-[--font-playfair] font-bold mb-6">
                            Protection for Life's Unexpected Moments
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            Comprehensive insurance solutions tailored to your needs
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Tombol menuju halaman Produk */}
                            <Link href="/products">
                                <button className="bg-[#C5A47E] text-[#1A1A1A] px-6 py-3 rounded-lg hover:bg-[#B2946B] transition-colors">
                                    Dapatkan Penawaran Sekarang
                                </button>
                            </Link>

                            {/* Tombol menuju WhatsApp, ganti nomor di URL sesuai dengan nomor WhatsApp kamu */}
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="border-2 border-[#C5A47E] text-[#C5A47E] px-6 py-3 rounded-lg hover:bg-[#C5A47E]/10 transition-colors">
                                    Konsultasi Gratis
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold text-center mb-12">
                        Layanan Unggulan Kami
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Asuransi Kesehatan',
                                icon: '🏥',
                                desc: 'Perlindungan komprehensif untuk kesehatan Anda dan keluarga'
                            },
                            {
                                title: 'Asuransi Properti',
                                icon: '🏠',
                                desc: 'Proteksi properti Anda dari risiko kerusakan dan kehilangan'
                            },
                            {
                                title: 'Asuransi Kendaraan',
                                icon: '🚗',
                                desc: 'Perlindungan menyeluruh untuk kendaraan kesayangan Anda'
                            },
                        ].map((service) => (
                            <div
                                key={service.title}
                                className="p-8 border border-[#E5E5E5] rounded-xl hover:shadow-lg transition-all"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-[--font-playfair] font-bold mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-[#666]">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* USP Section */}
            <section className="bg-[#1A1A1A] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold text-center mb-12">
                        Mengapa Memilih Kami?
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: 'Klaim Cepat', desc: 'Proses klaim 24 jam dengan garansi 3 hari kerja' },
                            { title: 'Premi Terjangkau', desc: 'Premi kompetitif dengan cakupan maksimal' },
                            { title: 'Jaringan Luas', desc: '400+ rumah sakit rekanan di seluruh Indonesia' },
                            { title: 'Experienced Team', desc: 'Tim profesional dengan pengalaman 20+ tahun' },
                        ].map((usp) => (
                            <div key={usp.title} className="text-center">
                                <div className="w-16 h-16 bg-[#C5A47E] rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{usp.title}</h3>
                                <p className="text-[#E5E5E5]">{usp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials & Partners */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Testimonials */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold mb-8">
                                Apa Kata Klien Kami
                            </h2>
                            <div className="space-y-8">
                                {[
                                    {
                                        text: 'Proses klaim sangat cepat dan transparan. Recommended!',
                                        author: 'Budi Santoso',
                                        role: 'Nasabah Asuransi Kendaraan'
                                    },
                                    {
                                        text: 'Pelayanan tim sangat profesional dan responsive.',
                                        author: 'Dewi Lestari',
                                        role: 'Nasabah Asuransi Kesehatan'
                                    }
                                ].map((testi, index) => (
                                    <div key={index} className="border-l-4 border-[#C5A47E] pl-4">
                                        <p className="text-lg italic mb-2">" {testi.text} "</p>
                                        <p className="font-bold">{testi.author}</p>
                                        <p className="text-sm text-[#666]">{testi.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Partners */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold mb-8">
                                Partner Kami
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {['BankBCA', 'HospitalGroup', 'Astra', 'Telkom', 'Pertamina', 'Garuda'].map((partner) => (
                                    <div
                                        key={partner}
                                        className="h-20 bg-[#F5F5F5] rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
                                    >
                                        <span className="font-bold text-[#666]">{partner}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="bg-[#F9F9F9] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Lihat Produk Kami',
                                desc: 'Temukan solusi asuransi yang tepat untuk Anda',
                                link: '/products',
                                bg: 'bg-[#0F4C75]'
                            },
                            {
                                title: 'Ajukan Klaim',
                                desc: 'Proses klaim mudah dan cepat',
                                link: '/claims',
                                bg: 'bg-[#2C3E50]'
                            },
                            {
                                title: 'Hubungi Kami',
                                desc: 'Tim kami siap membantu 24/7',
                                link: '/contact',
                                bg: 'bg-[#C5A47E]'
                            },
                        ].map((card) => (
                            <a
                                key={card.title}
                                href={card.link}
                                className={`${card.bg} text-white p-8 rounded-xl hover:opacity-90 transition-opacity`}
                            >
                                <h3 className="text-2xl font-[--font-playfair] font-bold mb-4">{card.title}</h3>
                                <p>{card.desc}</p>
                                <div className="mt-4 flex items-center gap-2">
                                    <span>Selengkapnya</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}