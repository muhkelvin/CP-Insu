import { products } from '@/app/utils/products';

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug
    }));
}

export default function ProductDetail({ params }) {
    const product = products.find(p => p.slug === params.slug);

    if (!product) {
        return <div>Produk tidak ditemukan</div>;
    }

    return (
        <main>
            {/* Hero Section */}
            <section className="bg-[#1A1A1A] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-[--font-playfair] font-bold mb-6">
                        {product.title}
                    </h1>
                    <p className="text-xl text-[#E5E5E5] max-w-2xl">
                        {product.desc}
                    </p>
                </div>
            </section>

            {/* Detail Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2">
                            <div className="mb-12">
                                <h2 className="text-3xl font-[--font-playfair] font-bold mb-6">
                                    Benefit Utama
                                </h2>
                                <div className="grid gap-4">
                                    {product.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start p-4 bg-[#F9F9F9] rounded-lg">
                                            <svg className="w-6 h-6 mr-4 text-[#C5A47E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                            </svg>
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-[--font-playfair] font-bold mb-6">
                                    Cakupan Perlindungan
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {product.coverage.details.map((detail, index) => (
                                        <div key={index} className="flex items-center p-3 border rounded-lg">
                                            <div className="w-8 h-8 bg-[#C5A47E] rounded-full flex items-center justify-center mr-4">
                                                <span className="text-white">{index + 1}</span>
                                            </div>
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-[#F9F9F9] p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4">Detail Premi</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span>Masa Perlindungan</span>
                                        <span className="font-semibold">{product.coverage.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Kisaran Premi</span>
                                        <span className="font-semibold">{product.coverage.premium}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Maksimal Klaim</span>
                                        <span className="font-semibold">{product.coverage.maxCoverage}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#F9F9F9] p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4">Syarat & Ketentuan</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    {product.terms.map((term, index) => (
                                        <li key={index} className="text-[#666]">{term}</li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="w-full bg-[#0F4C75] text-white py-3 rounded-lg hover:bg-[#2C3E50] transition-colors">
                                    Ajukan Sekarang
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="bg-[#1A1A1A] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-[--font-playfair] font-bold mb-8">
                        Produk Lainnya
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {products
                            .filter(p => p.slug !== product.slug)
                            .slice(0, 3)
                            .map((relatedProduct) => (
                                <div key={relatedProduct.slug} className="bg-white text-[#1A1A1A] p-6 rounded-xl">
                                    <div className="text-4xl mb-4">{relatedProduct.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{relatedProduct.title}</h3>
                                    <p className="text-[#666] mb-4">{relatedProduct.desc}</p>
                                    <a
                                        href={`/products/${relatedProduct.slug}`}
                                        className="text-[#0F4C75] hover:text-[#C5A47E] flex items-center"
                                    >
                                        Lihat Detail
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </a>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </main>
    );
}