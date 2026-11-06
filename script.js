
console.log("Digital Library Teknik Sipil aktif!");

// ==================================
// 1. DATA MATA KULIAH DAN DOSEN
// ==================================


const dataPerkuliahan = {
    1: [
        { nama: "Pendidikan Agama", kode: "001009–001015 (sesuai pilihan)", sks: 2, dosen: [] },
        { nama: "Pancasila", kode: "001001", sks: 2, dosen: [] },
        { nama: "Matematika 1", kode: "503001", sks: 3, dosen: [] },
        { nama: "Ilmu Ukur Tanah", kode: "503002", sks: 2, dosen: [] },
        { nama: "Mekanika Bahan", kode: "503004", sks: 2, dosen: [] },
        { nama: "Menggambar Bangunan Sipil", kode: "503005", sks: 2, dosen: [] },
        { nama: "Dasar-Dasar Rekayasa Transportasi", kode: "503006", sks: 2, dosen: [] },
        { nama: "Kimia Dasar", kode: "503007", sks: 2, dosen: [] },
        { nama: "Fisika Dasar", kode: "503008", sks: 2, dosen: [] },
        { nama: "Praktikum Ilmu Ukur Tanah", kode: "503003", sks: 1, dosen: [] }
    ],

    2: [
    {
        nama: "Matematika 2",
        kode: "503009",
        sks: 3,
        dosen: [
            {
                nama: "Dosen A",
                dokumen: [
                    {
                        judul: "Tabel Chi Square",
                        deskripsi: "Dokumen perkuliahan",
                        file: "materi/semester-2/matematika 2/Tabel Chi Square.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 1",
                        deskripsi: "Tugas Matematika 2",
                        file: "materi/semester-2/matematika 2/1.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                ]
                
            }
        ]
    },
    {
        nama: "Bahasa Inggris",
        kode: "001006",
        sks: 2,
        dosen: [
            {
                nama: "Noor Sahid Kusuma Hadi Manggolo, S.Pd.I., M.A., TESL.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Bahasa Indonesia",
        kode: "001003",
        sks: 2,
        dosen: [
            {
                nama: "Dosen Indonesia",
                dokumen: []
            }
        ]
    },
    {
        nama: "Rekayasa Lalu Lintas",
        kode: "503010",
        sks: 2,
        dosen: [
            {
                nama: "Dr.rer.soc.oec. Yusfita Chrisnawati, S.Pd.T., M.Sc.",
                dokumen: [
                    {
                        judul: "Laporan DDRT U-Turn",
                        deskripsi: "Hasil Laporan DDRT U-Turn",
                        file: "materi/semester-2/ddrt/LAPORAN DDRT U-TURN.docx",
                        pertemuan: null,
                        tipe: "docx"
                    },
                    {
                        judul: "LAPORAN DDRT PERSIMPANGAN",
                        deskripsi: "Hasil Laporan DDRT Persimpangan",
                        file: "materi/semester-2/ddrt/LAPORAN DDRT.docx",
                        pertemuan: null,
                        tipe: "docx"
                    },
                    {
                        judul: "Laporan Rute 3",
                        deskripsi: "Hasil Laporan Rute 3",
                        file: "materi/semester-2/ddrt/Laporan Rute 3.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Perhitungan Excel",
                        deskripsi: "Proses atau urutan perhitungan DDRT",
                        file: "materi/semester-4/rll/perhitungan tubes.xlsx",
                        pertemuan: null,
                        tipe: "xlsx"
                    },
                    {
                        judul: "Tugas 5 (PDF)",
                        deskripsi: "Hasil Tugas 5 Rekayasa Lalu Lintas",
                        file: "materi/semester-4/rll/tugas 5.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 5 (EXCEL)",
                        deskripsi: "Proses atau urutan perhitungan DDRT",
                        file: "materi/semester-4/rll/tugas 5.xlsx",
                        pertemuan: null,
                        tipe: "xlsx"
                    },
                ]
            }
        ]
    },
    {
        nama: "Struktur Bangunan Gedung",
        kode: "503012",
        sks: 2,
        dosen: [
            {
                nama: "Dr. Ir. Yudhi Arnandha, M.T.",
                dokumen: [
                    {
                        judul: "Responsi",
                        deskripsi: "Rumah Kucing",
                        file: "materi/semester-2/sbg/responsi.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                ]
            }
        ]
    },
    {
        nama: "Analisa Struktur 1",
        kode: "503011",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Anis Rakhmawati, S.T., M.T., IPM.",
                dokumen: [
                    {
                        judul: "Tugas 1",
                        deskripsi: "Rumah Kucing",
                        file: "materi/semester-3/as1/Tugas 1.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 2",
                        deskripsi: "Rumah Kucing",
                        file: "materi/semester-3/as1/Tugas 2.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 3",
                        deskripsi: "Rumah Kucing",
                        file: "materi/semester-3/as1/Tugas 3.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 4",
                        deskripsi: "Rumah Kucing",
                        file: "materi/semester-3/as1/Tugas 4.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 5",
                        deskripsi: "Rumah Kucing",
                        file: "materi/semester-3/as1/Tugas 5.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 6",
                        deskripsi: "Rumah Kucing",
                        file: "materi/semester-3/as1/Tugas 6.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                ]
            }
        ]
    },
    {
        nama: "Teori Probabilitas",
        kode: "503014",
        sks: 2,
        dosen: [
            {
                nama: "Prof.Dr.Ir. Gito Sugiyanto, S.T., M.T., IPM., ASEAN Eng.",
                dokumen: [
                    {
                        judul: "Perhitungan Excel Tugas 4",
                        deskripsi: "Probabilitas dan Distribusi Probabilitas",
                        file: "materi/semester-2/probabilitas/Tugas 4.xlsx",
                        pertemuan: null,
                        tipe: "xlsx"
                    },
                    {
                        judul: "Perhitungan Excel Tugas 5",
                        deskripsi: "Probabilitas dan Distribusi Probabilitas",
                        file: "materi/semester-2/probabilitas/Tugas 5.xlsx",
                        pertemuan: null,
                        tipe: "xlsx"
                    },
                ]
            }
        ]
    },
    {
        nama: "Statistika",
        kode: "503015",
        sks: 2,
        dosen: [
            {
                nama: "Dosen Statistika",
                dokumen: []
            }
        ]
    },
    {
        nama: "Fisika 2",
        kode: "503013",
        sks: 3,
        dosen: [
            {
                nama: "Abul Fida Ismaili, S.T., M.Sc.",
                dokumen: []
            }
        ]
    },
    ],

    3: [
    {
        nama: "Hidrologi",
        kode: "503018",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Arrizka Yanuar Adipradana, S.T., M.Eng.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Geometri Jalan",
        kode: "503020",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Woro Partini Maryunani, S.T., M.T.",
                dokumen: [
                    {
                        judul: "Laporan Geojal",
                        deskripsi: "Hasil Laporan Geometri Jalan",
                        file: "materi/semester-3/geojal/laporan.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                ]
            }
        ]
    },
    {
        nama: "Matematika 3",
        kode: "503016",
        sks: 3,
        dosen: [
            {
                nama: "Ety Fitriyani, S.T., M.Eng.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Metode Numerik 1",
        kode: "503021",
        sks: 2,
        dosen: [
            {
                nama: "Mutia Gina Savira, S.Tr.T., M.Tr.T.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Struktur Beton 1",
        kode: "503022",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Anis Rakhmawati, S.T., M.T., IPM.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Analisa Struktur 2",
        kode: "503017",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Anis Rakhmawati, S.T., M.T., IPM.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Teknik Penyehatan",
        kode: "503019",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Muhammad Amin, S.T., M.Eng.",
                dokumen: [
                    {
                        judul: "Laporan Bendungan Boro",
                        deskripsi: "Hasil Pengamatan dan Kunjungan ke Bendungan Boro, Purworejo",
                        file: "materi/semester-2/penyehatan/laporan bendungan.docx",
                        pertemuan: null,
                        tipe: "docx"
                    },
                    {
                        judul: "Tugas 1 (Fitoremediasi)",
                        deskripsi: "Tugas Pertama tentang tumbuhan-tumbuhan yang berbahaya dalam proses fitoremediasi",
                        file: "materi/semester-2/penyehatan/tugas fitoremediasi.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                     {
                        judul: "Tugas Sanitasi",
                        deskripsi: "Tugas tentang sanitasi dan pengolahan air limbah",
                        file: "materi/semester-2/penyehatan/tugas sanitasi.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                     {
                        judul: "Tugas 3",
                        deskripsi: "Menilai sirkulasi udara di ruangan tempat tinggal",
                        file: "materi/semester-2/penyehatan/tugas udara.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                ]
            }
        ]
    },
    {
        nama: "Persamaan Diferensial",
        kode: "503023",
        sks: 2,
        dosen: [
            {
                nama: "Mutia Gina Savira, S.Tr.T., M.Tr.T.",
                dokumen: []
            }
        ]
    },
        {
        nama: "Praktikum Mekfluida dan Hidraulika",
        kode: "503025",
        sks: 1,
        dosen: [
            {
                nama: "Ir. Arrizka Yanuar Adipradana, S.T., M.Eng.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Mekanika Fluida dan Hidraulika",
        kode: "503024",
        sks: 3,
        dosen: [
            {
                nama: "Ir. Arrizka Yanuar Adipradana, S.T., M.Eng.",
                dokumen: []
            }
        ]
    },
    ],

    4: [
      {
        nama: "PKn",
        kode: "001002",
        sks: 2,
        dosen: [
            {
                nama: "Dosen PKn",
                dokumen: []
            }
        ]
    },
    {
        nama: "Mekanika Tanah",
        kode: "503026",
        sks: 3,
        dosen: [
            {
                nama: "Hulfa Istikomah, S.T., M.T.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Matematika 4",
        kode: "503034",
        sks: 3,
        dosen: [
            {
                nama: "Nasrul Arfianto, S.T., M.T.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Metode Numerik 2",
        kode: "503030",
        sks: 3,
        dosen: [
            {
                nama: "Bina Arumbinang Wajdi, S.T., M.T.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Struktur Beton 2",
        kode: "503029",
        sks: 3,
        dosen: [
            {
                nama: "Ir. Anis Rakhmawati, S.T., M.T., IPM.",
                dokumen: [
                     {
                        judul: "Tugas 1",
                        deskripsi: "Perhitungan Struktur Beton 2 Tugas 1",
                        file: "materi/semester-4/sb/tugas 1.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 2",
                        deskripsi: "Perhitungan Struktur Beton 2 Tugas 2",
                        file: "materi/semester-4/sb/tugas 2.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 2",
                        deskripsi: "Perhitungan Struktur Beton 2 Tugas 2",
                        file: "materi/semester-4/sb/tugas 2.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 3",
                        deskripsi: "Perhitungan Struktur Beton 2 Tugas 3",
                        file: "materi/semester-4/sb/tugas 3.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 4",
                        deskripsi: "Perhitungan Struktur Beton 2 Tugas 4",
                        file: "materi/semester-4/sb/tugas 4.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 5",
                        deskripsi: "Perhitungan Struktur Beton 2 Tugas 5",
                        file: "materi/semester-4/sb/tugas 5.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 6",
                        deskripsi: "Perhitungan Struktur Beton 2 Tugas 6",
                        file: "materi/semester-4/sb/tugas 6.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 7",
                        deskripsi: "Perhitungan Struktur Beton 2 Tugas 7",
                        file: "materi/semester-4/sb/tugas 7.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Perhiutungan",
                        deskripsi: "Perhitungan Struktur Beton 2 ",
                        file: "materi/semester-4/sb/perhitungan.xlsx",
                        pertemuan: null,
                        tipe: "xlsx"
                    },
                ]
            }
        ]
    },
    {
        nama: "Analisa Struktur 3",
        kode: "503028",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Anis Rakhmawati, S.T., M.T., IPM.",
                dokumen: [
                     {
                        judul: "Tugas 1",
                        deskripsi: "Perhitungan Analisa Struktur 3 Tugas 1",
                        file: "materi/semester-4/as3/tugas 1.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                     {
                        judul: "Tugas 2",
                        deskripsi: "Perhitungan Analisa Struktur 3 Tugas 2",
                        file: "materi/semester-4/as3/tugas 2.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                     {
                        judul: "Tugas 3",
                        deskripsi: "Perhitungan Analisa Struktur 3 Tugas 3",
                        file: "materi/semester-4/as3/tugas 3.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                     {
                        judul: "Tugas 4",
                        deskripsi: "Perhitungan Analisa Struktur 3 Tugas 4",
                        file: "materi/semester-4/as3/tugas 4.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                     {
                        judul: "Perhitungan",
                        deskripsi: "Perhitungan Analisa Struktur 3 ",
                        file: "materi/semester-4/as3/perhitungan.xlsx",
                        pertemuan: null,
                        tipe: "xlsx"
                    },
                ]
            }
        ]
    },
    {
        nama: "Desain Fondasi 1",
        kode: "503031",
        sks: 2,
        dosen: [
            {
                nama: "Abul Fida Ismaili, S.T., M.Sc.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Teknologi Bahan",
        kode: "503032",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Yudhi Arnandha, M.T.",
                dokumen: []
            }
        ]
    },
        {
        nama: "Praktikum Teknologi Bahan",
        kode: "503033",
        sks: 1,
        dosen: [
            {
                nama: "Ir. Yudhi Arnandha, M.T.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Praktikum Mekanika Tanah",
        kode: "503027",
        sks: 3,
        dosen: [
            {
                nama: "Hulfa Istikomah, S.T., M.T.",
                dokumen: []
            }
        ]
    },
    ],

   5: [
    {
        nama: "Aplikasi Komputer",
        kode: "503035",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Dedy Firmansyah, S.Pd., M.T.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Jalan Rel",
        kode: "503036",
        sks: 2,
        dosen: [
            {
                nama: "Prof. Dr. Ir. Gito Sugiyanto, S.T., M.T., IPM., ASEAN Eng.",
                dokumen: [
                    {
                        judul: "Hitungan Tubes",
                        deskripsi: "Proses perhitungan jalan rel",
                        file: "materi/semester-3/jalan rel/hitungan.xlsx",
                        pertemuan: null,
                        tipe: "xlsx"
                    },
                    {
                        judul: "Laporan Tubes",
                        deskripsi: "Proses perhitungan jalan rel",
                        file: "materi/semester-3/jalan rel/laporan.docx",
                        pertemuan: null,
                        tipe: "docx"
                    },
                ]
            }
        ]
    },
    {
        nama: "Struktur Baja 1",
        kode: "503037",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Dwi Sat Agus Yuwana, M.T.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Analisis Struktur Jembatan",
        kode: "503038",
        sks: 2,
        dosen: [
            {
                nama: "Dr. Ir. Yudhi Arnandha, M.T.",
                dokumen: [
                    {
                        judul: "Tugas 1",
                        deskripsi: "Tugas Analisis Struktur Jembatan",
                        file: "materi/semester-5/asj/Tugas 1.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 2",
                        deskripsi: "Tugas Analisis Struktur Jembatan",
                        file: "materi/semester-5/asj/Tugas 2.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    },
                    {
                        judul: "Tugas 3",
                        deskripsi: "Tugas Analisis Struktur Jembatan",
                        file: "materi/semester-5/asj/Tugas 3.pdf",
                        pertemuan: null,
                        tipe: "pdf"
                    }
                ]
            }
        ]
    },
    {
        nama: "Drainase",
        kode: "503040",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Arrizka Yanuar Adipradana, S.T., M.Eng.",
                dokumen: [
                    {
                        judul: "contoh soal 1",
                        deskripsi: "Pembahasan Yang Luas Luas Intinya",
                        file: "materi/semester-5/drainase/Contoh Soal.xlsx",
                        pertemuan: null,
                        tipe: "xlsx"
                    },
                    {
                        judul: "Kunci Jawaban",
                        deskripsi: "Kunci Jawaban Soal Drainase dari Asdos",
                        file: "materi/semester-5/drainase/Quis.xlsx",
                        pertemuan: null,
                        tipe: "xlsx"
                    },
                    {
                        judul: "Remedial UTS",
                        deskripsi: "Hasil Pengerjaan Remedial UTS Drainase",
                        file: "materi/semester-5/drainase/remedial uts.xlsx",
                        pertemuan: null,
                        tipe: "xlsx"
                    }
                ]
            },
            {
                nama: "Bina Arumbinang Wajdi, S.T., M.T.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Manajemen Proyek",
        kode: "503041",
        sks: 3,
        dosen: [
            {
                nama: "Ety Fitriyani, S.T., M.Eng.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Desain Fondasi 2",
        kode: "503039",
        sks: 2,
        dosen: [
            {
                nama: "Hulfa Istikomah, S.T., M.T.",
                dokumen: []
            },
            {
                nama: "Abul Fida Ismaili, S.T., M.Sc.",
                dokumen: []
            },
            {
                nama: "Aswin Wahyu Kurniawan, S.Tr.T., M.Eng.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Bahan Perkerasan",
        kode: "503042",
        sks: 2,
        dosen: [
            {
                nama: "Prof. Dr. Ir. Gito Sugiyanto, S.T., M.T., IPM., ASEAN Eng.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Pengelolaan Alat Berat",
        kode: "503044",
        sks: 2,
        dosen: [
            {
                nama: "Ir. Dwi Sat Agus Yuwana, M.T.",
                dokumen: []
            }
        ]
    },
    {
        nama: "Praktikum Bahan Perkerasan",
        kode: "503043",
        sks: 1,
        dosen: [
            {
                nama: "Prof. Dr. Ir. Gito Sugiyanto, S.T., M.T., IPM., ASEAN Eng.",
                dokumen: []
            },
            {
                nama: "Hulfa Istikomah, S.T., M.T.",
                dokumen: []
            },
            {
                nama: "Abul Fida Ismaili, S.T., M.Sc.",
                dokumen: []
            },
            {
                nama: "Woro Partini Maryunani, S.T., M.T.",
                dokumen: []
            }
        ]
    }
],

    6: [
        { nama: "Dasar-Dasar Kewirausahaan", kode: "001004", sks: 2, dosen: [] },
        { nama: "Rekayasa Irigasi", kode: "503045", sks: 2, dosen: [] },
        { nama: "Struktur Baja 2", kode: "503046", sks: 2, dosen: [] },
        { nama: "Analisa Dinamika Struktur dan Teknik Gempa", kode: "503047", sks: 2, dosen: [] },
        { nama: "Metodologi Penelitian", kode: "503048", sks: 2, dosen: [] },
        { nama: "Pengembangan dan Manajemen SDA", kode: "503052", sks: 2, dosen: [] },
        { nama: "Digitalisasi Konstruksi (BIM)", kode: "503050", sks: 2, dosen: [] },
        { nama: "Ekonomi Teknik", kode: "503051", sks: 2, dosen: [] },
        { nama: "Perancangan Perkerasan Jalan", kode: "503049", sks: 2, dosen: [] },
        { nama: "Pengantar Metode Pelaksanaan dan Pembongkaran Konstruksi", kode: "503001", sks: 2, dosen: [] },
        { nama: "MK Pilihan 1", kode: "-", sks: 2, dosen: [] }
    ],

    7: [
        { nama: "Praktikum Kewirausahaan", kode: "001005", sks: 2, dosen: [] },
        { nama: "Perancangan Bangunan Sipil (Capstone)", kode: "Perlu verifikasi", sks: 4, dosen: [] },
        { nama: "Kerja Praktik", kode: "503055", sks: 2, dosen: [] },
        { nama: "KKN", kode: "001007", sks: 3, dosen: [] },
        { nama: "MK Pilihan 2", kode: "-", sks: 2, dosen: [] },
        { nama: "MK Pilihan 3", kode: "-", sks: 2, dosen: [] }
    ],

    8: [
        { nama: "Tugas Akhir", kode: "001008", sks: 4, dosen: [] }
    ]
};


// ==================================
// 2. MEMILIH SEMESTER
// ==================================

function pilihSemester(nomorSemester) {

    const courseSection =
        document.getElementById("courseSection");

    const lecturerSection =
        document.getElementById("lecturerSection");

    const documentSection =
        document.getElementById("documentSection");

    const semesterTitle =
        document.getElementById("semesterTitle");

    const courseList =
        document.getElementById("courseList");

    // Tampilkan daftar mata kuliah
    courseSection.style.display = "block";

    // Sembunyikan bagian berikutnya
    lecturerSection.style.display = "none";
    documentSection.style.display = "none";

    semesterTitle.textContent =
        "Mata Kuliah Semester " + nomorSemester;

    courseList.innerHTML = "";

    const daftar = dataPerkuliahan[nomorSemester] || [];

    if (daftar.length === 0) {
        courseList.innerHTML =
            "<p>Belum ada data mata kuliah untuk semester ini.</p>";
    }

    daftar.forEach(function(mataKuliah, index) {

        courseList.innerHTML += `
            <div class="course-card"
                 onclick="pilihMataKuliah(${nomorSemester}, ${index})">

                <h3>${mataKuliah.nama}</h3>

                <p>Kode: ${mataKuliah.kode}</p>

                <p>${mataKuliah.sks} SKS</p>

                <span class="course-arrow">
                    Lihat Dosen →
                </span>

            </div>
        `;
    });

    courseSection.scrollIntoView({
        behavior: "smooth"
    });
}


// ==================================
// 3. MEMILIH MATA KULIAH
// ==================================

function pilihMataKuliah(nomorSemester, indexMataKuliah) {

    const mataKuliah =
        dataPerkuliahan[nomorSemester][indexMataKuliah];

    const lecturerSection =
        document.getElementById("lecturerSection");

    const documentSection =
        document.getElementById("documentSection");

    const courseTitle =
        document.getElementById("courseTitle");

    const lecturerList =
        document.getElementById("lecturerList");

    lecturerSection.style.display = "block";
    documentSection.style.display = "none";

    courseTitle.textContent =
        "Dosen Pengampu - " + mataKuliah.nama;

    lecturerList.innerHTML = "";

    if (!mataKuliah.dosen || mataKuliah.dosen.length === 0) {

        lecturerList.innerHTML = `
            <p>Data dosen pengampu belum ditambahkan.</p>
        `;

    } else {

        mataKuliah.dosen.forEach(function(dosen, indexDosen) {

            lecturerList.innerHTML += `
                <div class="lecturer-card"
                     onclick="pilihDosen(
                        ${nomorSemester},
                        ${indexMataKuliah},
                        ${indexDosen}
                     )">

                    <h3>${dosen.nama}</h3>

                    <p>${dosen.dokumen.length} dokumen tersedia</p>

                    <span class="course-arrow">
                        Lihat Dokumen →
                    </span>

                </div>
            `;
        });
    }

    lecturerSection.scrollIntoView({
        behavior: "smooth"
    });
}


// ==================================
// 4. MEMILIH DOSEN
// ==================================

function pilihDosen(
    nomorSemester,
    indexMataKuliah,
    indexDosen
) {

    const dosen =
        dataPerkuliahan[nomorSemester]
        [indexMataKuliah].dosen[indexDosen];

    const documentSection =
        document.getElementById("documentSection");

    const lecturerTitle =
        document.getElementById("lecturerTitle");

    const documentList =
        document.getElementById("documentList");

    documentSection.style.display = "block";

    lecturerTitle.textContent =
        "Dokumen - " + dosen.nama;

    documentList.innerHTML = "";

    if (dosen.dokumen.length === 0) {

        documentList.innerHTML = `
            <p>Belum ada dokumen dari dosen ini.</p>
        `;

    } else {

        dosen.dokumen.forEach(function(dokumen, indexDokumen) {

            documentList.innerHTML += `
                <div class="document-card">

                    <div class="document-info">

                        <h3>${dokumen.judul}</h3>

                        <p>${dokumen.deskripsi}</p>

                        <small>
                            Pertemuan:
                            ${dokumen.pertemuan ?? "Materi umum"}
                        </small>

                    </div>

                    <div class="document-actions">

                        <button class="preview-button"
                            onclick="bukaPratinjau(
                                ${nomorSemester},
                                ${indexMataKuliah},
                                ${indexDosen},
                                ${indexDokumen}
                            )">
                            Pratinjau
                        </button>

                        <a class="download-button"
                           href="${dokumen.file}"
                           download>
                            Unduh
                        </a>

                    </div>

                </div>
            `;
        });
    }

    documentSection.scrollIntoView({
        behavior: "smooth"
    });
}


// ==================================
// 5. PRATINJAU DOKUMEN
// ==================================

function bukaPratinjau(
    nomorSemester,
    indexMataKuliah,
    indexDosen,
    indexDokumen
) {

    const dokumen =
        dataPerkuliahan[nomorSemester]
        [indexMataKuliah]
        .dosen[indexDosen]
        .dokumen[indexDokumen];

    const previewModal =
        document.getElementById("previewModal");

    const previewTitle =
        document.getElementById("previewTitle");

    const previewContent =
        document.getElementById("previewContent");

    previewModal.style.display = "flex";

    previewTitle.textContent = dokumen.judul;

    if (dokumen.tipe === "pdf") {

        previewContent.innerHTML = `
            <iframe
                src="${dokumen.file}"
                width="100%"
                height="100%"
                title="Pratinjau PDF">
            </iframe>
        `;

    } else if (
        ["jpg", "jpeg", "png", "webp"].includes(dokumen.tipe)
    ) {

        previewContent.innerHTML = `
            <img src="${dokumen.file}"
                 alt="${dokumen.judul}"
                 style="max-width: 100%; max-height: 100%;">
        `;

    } else {

        previewContent.innerHTML = `
            <p>Pratinjau belum tersedia untuk format ini.</p>
            <a href="${dokumen.file}" download>
                Unduh dokumen
            </a>
        `;
    }
}


// ==================================
// 6. MENUTUP PRATINJAU
// ==================================

function tutupPratinjau() {

    const previewModal =
        document.getElementById("previewModal");

    const previewContent =
        document.getElementById("previewContent");

    previewModal.style.display = "none";

    // Menghentikan tampilan PDF ketika modal ditutup
    previewContent.innerHTML = "";
}
