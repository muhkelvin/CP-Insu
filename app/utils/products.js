export const products = [
    {
        slug: 'health',
        category: 'Kesehatan',
        icon: '❤️',
        title: 'Asuransi Kesehatan Komprehensif',
        desc: 'Perlindungan rawat inap, operasi, dan checkup rutin',
        benefits: [
            'Cover hingga Rp5M/tahun',
            '500+ rumah sakit partner',
            'Santunan harian rawat inap'
        ],
        coverage: {
            duration: '1 Tahun',
            premium: 'Rp300.000 - Rp2.000.000/bulan',
            maxCoverage: 'Rp5.000.000.000',
            details: [
                'Rawat inap rumah sakit',
                'Biaya operasi',
                'Pemeriksaan rutin',
                'Obat-obatan',
                'Darurat 24 jam'
            ]
        },
        terms: [
            'Usia 18-65 tahun',
            'Tidak ada kondisi kritis yang sudah ada sebelumnya',
            'Masa tunggu 30 hari'
        ]
    },
    {
        slug: 'vehicle',
        category: 'Kendaraan',
        icon: '🚗',
        title: 'Asuransi Kendaraan All Risk',
        desc: 'Proteksi total untuk mobil dan motor Anda',
        benefits: [
            'Cover kecelakaan & pencurian',
            'Ganti rugi 100% nilai pasar',
            'Servis darurat 24 jam'
        ],
        coverage: {
            duration: '1 Tahun',
            premium: 'Rp200.000 - Rp1.500.000/bulan',
            maxCoverage: 'Rp1.000.000.000',
            details: [
                'Kerusakan akibat kecelakaan',
                'Pencurian total',
                'Kerusakan alam',
                'Bantuan darurat jalan'
            ]
        },
        terms: [
            'Kendaraan maksimal 10 tahun',
            'Surat lengkap (STNK, BPKB)',
            'Pemakaian kendaraan pribadi'
        ]
    },
    {
        slug: 'property',
        category: 'Properti',
        icon: '🏠',
        title: 'Asuransi Rumah Lengkap',
        desc: 'Proteksi properti dari kebakaran, bencana alam, dan kerusakan',
        benefits: [
            'Cover bangunan & isi rumah',
            'Proteksi terhadap 15 jenis risiko',
            'Asuransi kebakaran'
        ],
        coverage: {
            duration: '1 Tahun',
            premium: 'Rp500.000 - Rp5.000.000/bulan',
            maxCoverage: 'Rp2.000.000.000',
            details: [
                'Kerusakan akibat kebakaran',
                'Bencana alam (gempa, banjir)',
                'Pencurian dengan kekerasan',
                'Kerusakan air'
            ]
        },
        terms: [
            'Bangunan permanen',
            'Lokasi di wilayah tercover',
            'Surat kepemilikan sah'
        ]
    }
];