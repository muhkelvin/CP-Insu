export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-[#E5E5E5] mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-[--font-playfair] text-xl text-[#C5A47E] mb-4">InsurePlus</h3>
                        <p className="text-sm">Protecting Your Future with Excellence</p>
                    </div>
                    <div>
                        <h4 className="text-[#C5A47E] mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {['About Us', 'Products', 'Claims', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-[#C5A47E]">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[#C5A47E] mb-4">Contact</h4>
                        <p className="text-sm">Jl. Sudirman No.123<br/>Jakarta, Indonesia<br/>Phone: +62 21 1234 5678</p>
                    </div>
                    <div>
                        <h4 className="text-[#C5A47E] mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                                <a key={social} href="#" className="hover:text-[#C5A47E] text-sm">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#C5A47E]/20 mt-8 pt-8 text-center text-sm">
                    <p>© 2024 InsurePlus. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}