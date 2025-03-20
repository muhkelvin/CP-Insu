// app/products/page.js
import Link from 'next/link';
import { products } from '@/app/utils/products';

export default function Products() {
    return (
        <main>
            {/* Product Listing */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-[--font-playfair] font-bold text-center mb-12">
                        Paket Perlindungan Kami
                    </h1>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {products.map((product) => (
                            <div
                                key={product.slug}
                                className="border border-[#E5E5E5] rounded-xl p-8 hover:shadow-lg transition-all"
                            >
                                <div className="text-4xl mb-4">{product.icon}</div>
                                <h3 className="text-2xl font-[--font-playfair] font-bold mb-4">
                                    {product.title}
                                </h3>
                                <p className="text-[#666] mb-6">{product.desc}</p>
                                <ul className="space-y-2 mb-6">
                                    {product.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-[#C5A47E]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                            </svg>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/products/${product.slug}`}
                                    className="text-[#0F4C75] font-semibold hover:text-[#C5A47E] flex items-center"
                                >
                                    Selengkapnya
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto">
                        <h2 className="text-3xl font-[--font-playfair] font-bold mb-8">Perbandingan Produk</h2>
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="bg-[#1A1A1A] text-white">
                                <th className="p-4 text-left">Fitur</th>
                                {products.map((product) => (
                                    <th key={product.slug} className="p-4 text-left">{product.title}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {[
                                {
                                    feature: 'Masa Perlindungan',
                                    values: products.map(p => p.coverage.duration)
                                },
                                {
                                    feature: 'Premi Mulai Dari',
                                    values: products.map(p => p.coverage.premium)
                                },
                                {
                                    feature: 'Maksimal Klaim',
                                    values: products.map(p => p.coverage.maxCoverage)
                                },
                            ].map((row, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-4 font-semibold bg-[#F9F9F9]">{row.feature}</td>
                                    {row.values.map((value, i) => (
                                        <td key={i} className="p-4">{value}</td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center bg-[#0F4C75] text-white rounded-xl p-12">
                        <h3 className="text-3xl font-[--font-playfair] font-bold mb-6">
                            Butuh Konsultasi Produk?
                        </h3>
                        <Link
                            href="/contact"
                            className="inline-block bg-[#C5A47E] text-[#1A1A1A] px-8 py-3 rounded-lg hover:bg-[#B2946B] transition-colors"
                        >
                            Hubungi Ahli Kami
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}