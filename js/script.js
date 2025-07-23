    AOS.init({
            duration: 1000,
            once: true,
        });

        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if(icon.classList.contains('fa-bars')){
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        function webdarigithub() {
    // URL tujuan
    var urlTujuan = "https://alisa-fadhli.github.io/web-perkenalan-diri-sendiri-smkn1-spt/"; // <-- ini adalah URL tujuan.

    // Tampilkan popup konfirmasi
    if (confirm("Anda yakin ingin meninggalkan halaman ini? anda akan diarahkan kehalaman dengan tampilan web yang sama! anda akan diarahkan ke https://alisa-fadhli.github.io/web-perkenalan-diri-sendiri-smkn1-spt")) {
        // Jika "OK", arahkan ke URL tujuan
        window.location.href = urlTujuan;
    }
    // Jika "Batal", tidak terjadi apa-apa
}
