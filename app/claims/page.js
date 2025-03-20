// app/claims/page.js
"use client";
import { useState } from 'react';

export default function Claims() {
    const [claimNumber, setClaimNumber] = useState('');
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="bg-[#1A1A1A] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-[--font-playfair] font-bold mb-6">
                        Proses Klaim Cepat & Mudah
                    </h1>
                    <p className="text-xl text-[#E5E5E5] max-w-2xl mx-auto">
                        Ajukan klaim Anda secara online dan pantau perkembangannya dalam waktu nyata
                    </p>
                </div>
            </section>

            {/* Step-by-Step Guide */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold text-center mb-12">
                        Panduan Pengajuan Klaim
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8">
                        {[
                            {
                                step: 1,
                                title: 'Siapkan Dokumen',
                                desc: 'Kumpulkan dokumen yang diperlukan'
                            },
                            {
                                step: 2,
                                title: 'Ajukan Online',
                                desc: 'Isi formulir pengajuan klaim'
                            },
                            {
                                step: 3,
                                title: 'Verifikasi',
                                desc: 'Tim kami akan memverifikasi data'
                            },
                            {
                                step: 4,
                                title: 'Proses Klaim',
                                desc: 'Klaim diproses maksimal 3 hari kerja'
                            }
                        ].map((step, index) => (
                            <div key={step.step} className="flex-1 relative">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-[#C5A47E] rounded-full flex items-center justify-center mb-4">
                                        <span className="text-2xl text-white">{step.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-[#666]">{step.desc}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 right-[-40%] w-[80%] h-0.5 bg-[#E5E5E5]"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dokumen yang Dibutuhkan */}
            <section className="bg-[#F9F9F9] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold text-center mb-12">
                        Dokumen yang Diperlukan
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                type: 'Klaim Kesehatan',
                                docs: [
                                    'Formulir klaim yang sudah diisi',
                                    'Fotokopi KTP',
                                    'Original tagihan rumah sakit',
                                    'Surat rujukan dokter'
                                ]
                            },
                            {
                                type: 'Klaim Kendaraan',
                                docs: [
                                    'STNK asli',
                                    'Berita Acara Kepolisian',
                                    'Foto kerusakan',
                                    'Surat keterangan bengkel'
                                ]
                            }
                        ].map((docType) => (
                            <div key={docType.type} className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold mb-4 text-[#0F4C75]">{docType.type}</h3>
                                <ul className="list-disc pl-5 space-y-2 text-[#666]">
                                    {docType.docs.map((doc, index) => (
                                        <li key={index}>{doc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tracking Status */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-[--font-playfair] font-bold mb-8 text-center">
                            Cek Status Klaim
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Nomor Klaim</label>
                                <input
                                    type="text"
                                    value={claimNumber}
                                    onChange={(e) => setClaimNumber(e.target.value)}
                                    className="w-full p-3 border rounded-lg"
                                    placeholder="Masukkan nomor klaim Anda"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#0F4C75] text-white py-3 rounded-lg hover:bg-[#2C3E50] transition-colors"
                            >
                                Cek Status
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#1A1A1A] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-[--font-playfair] font-bold text-center mb-12">
                        Pertanyaan Umum
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                q: 'Berapa lama proses verifikasi klaim?',
                                a: 'Proses verifikasi biasanya memakan waktu 1-2 hari kerja setelah dokumen lengkap diterima'
                            },
                            {
                                q: 'Apakah bisa mengajukan klaim via mobile?',
                                a: 'Ya, Anda bisa mengajukan klaim melalui website mobile kami atau aplikasi'
                            },
                            {
                                q: 'Bagaimana jika dokumen tidak lengkap?',
                                a: 'Tim kami akan menghubungi Anda via email/telepon untuk melengkapi dokumen'
                            }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-[#C5A47E]/20">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left py-4 flex justify-between items-center"
                                >
                                    <span className="text-lg font-medium">{faq.q}</span>
                                    <svg
                                        className={`w-6 h-6 transform transition-transform ${faqOpen === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                                {faqOpen === index && (
                                    <div className="pb-4 text-[#E5E5E5]">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#C5A47E] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-[--font-playfair] font-bold mb-6">
                        Masih Ada Pertanyaan?
                    </h3>
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-[#1A1A1A] text-white px-8 py-3 rounded-lg hover:bg-[#2C3E50] transition-colors">
                            Hubungi Customer Service
                        </button>
                    </a>

                </div>
            </section>
        </main>
    );
}