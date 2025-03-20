export default function About() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-[#1A1A1A] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-[--font-playfair] font-bold mb-6">
                        Membangun Kepercayaan Sejak 1995
                    </h1>
                    <p className="text-xl text-[#E5E5E5] max-w-2xl mx-auto">
                        Menjadi partner perlindungan terpercaya bagi lebih dari 1 juta keluarga Indonesia
                    </p>
                </div>
            </section>

            {/* Sejarah Perusahaan */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold mb-8">
                                Perjalanan Kami
                            </h2>
                            <div className="space-y-8">
                                <div className="border-l-4 border-[#C5A47E] pl-4">
                                    <p className="text-2xl font-bold mb-2">1995</p>
                                    <p className="text-[#666]">Pendirian perusahaan di Jakarta dengan 10 karyawan pertama</p>
                                </div>
                                <div className="border-l-4 border-[#C5A47E] pl-4">
                                    <p className="text-2xl font-bold mb-2">2008</p>
                                    <p className="text-[#666]">Meraih penghargaan Asuransi Terbaik versi OJK</p>
                                </div>
                                <div className="border-l-4 border-[#C5A47E] pl-4">
                                    <p className="text-2xl font-bold mb-2">2023</p>
                                    <p className="text-[#666]">Mencapai 1 juta nasabah aktif di seluruh Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 bg-[#F5F5F5] rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                                alt="Office"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Misi, Visi & Nilai */}
            <section className="bg-[#F9F9F9] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold text-center mb-12">
                        Misi, Visi & Nilai
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white rounded-xl shadow-sm">
                            <div className="w-16 h-16 bg-[#C5A47E] rounded-full mb-6 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Visi</h3>
                            <p className="text-[#666]">
                                Menjadi perusahaan asuransi terdepan dalam inovasi dan pelayanan di Asia Tenggara
                            </p>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-sm">
                            <div className="w-16 h-16 bg-[#0F4C75] rounded-full mb-6 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Misi</h3>
                            <p className="text-[#666]">
                                Memberikan solusi perlindungan finansial yang terjangkau dan berkelanjutan
                            </p>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-sm">
                            <div className="w-16 h-16 bg-[#2C3E50] rounded-full mb-6 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Nilai</h3>
                            <ul className="list-disc text-[#666] pl-5 space-y-2">
                                <li>Integritas</li>
                                <li>Inovasi</li>
                                <li>Kepuasan Pelanggan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tim Manajemen */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold text-center mb-12">
                        Tim Kepemimpinan
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Budi Santoso',
                                role: 'CEO',
                                photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
                                experience: '25 tahun pengalaman di industri asuransi'
                            },
                            {
                                name: 'Anita Wijaya',
                                role: 'CFO',
                                photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
                                experience: 'Spesialis keuangan dengan latar belakang akuntansi'
                            },
                            {
                                name: 'Dewanto Pratama',
                                role: 'COO',
                                photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
                                experience: 'Ahli operasional dengan sertifikasi internasional'
                            }
                        ].map((member) => (
                            <div key={member.name} className="group relative overflow-hidden rounded-xl">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-96 object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A1A] p-6">
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-[#C5A47E] mb-2">{member.role}</p>
                                    <p className="text-sm text-[#E5E5E5]">{member.experience}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sertifikasi & Penghargaan */}
            <section className="bg-[#1A1A1A] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold text-center text-white mb-12">
                        Pengakuan & Sertifikasi
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            {
                                title: 'ISO 9001 Certified',
                                img: '/iso.svg'
                            },
                            {
                                title: 'Best Insurance 2023',
                                img: '/insura.jpg'
                            },
                            {
                                title: 'OJK Registered',
                                img: '/ojg.png'
                            },
                            {
                                title: 'Top Brand Award',
                                img: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            }
                        ].map((cert) => (
                            <div
                                key={cert.title}
                                className="bg-white p-4 rounded-lg flex items-center justify-center h-32"
                            >
                                <img
                                    src={cert.img}
                                    alt={cert.title}
                                    className="max-h-16 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#0F4C75] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold mb-6">
                        Siap Melindungi Masa Depan Anda?
                    </h2>
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-[#C5A47E] text-[#1A1A1A] px-8 py-3 rounded-lg hover:bg-[#B2946B] transition-colors">
                            Hubungi Kami Sekarang
                        </button>
                    </a>

                </div>
            </section>
        </main>
    );
}