const vm = new Vue({
    el: '#app',
    data() {
        return { 
        companies: [
            {
                judul: "CV1", modal: "modal-1",
                harga: "Rp20.000",
                image: "img/cv/CV1.jpg",
                link: "https://api.whatsapp.com/send?phone=6285280146477&text=Halo%20Saya%20ingin%20membeli%20CV1."
            },
            {
                judul: "CV2", modal: "modal-2",
                harga: "Rp20.000",
                image: "img/cv/CV2.jpg",
                link: "https://api.whatsapp.com/send?phone=6285280146477&text=Halo%20Saya%20ingin%20membeli%20CV2."
            },
            {
                judul: "CV3", modal: "modal-3",
                harga: "Rp20.000",
                image: "img/cv/CV3.jpg",
                link: "https://api.whatsapp.com/send?phone=6285280146477&text=Halo%20Saya%20ingin%20membeli%20CV3."
            },
            {
                judul: "CV4", modal: "modal-4",
                harga: "Rp20.000",
                image: "img/cv/CV4.jpg",
                link: "https://api.whatsapp.com/send?phone=6285280146477&text=Halo%20Saya%20ingin%20membeli%20CV4."
            },
            {
                judul: "CV5", modal: "modal-5",
                harga: "Rp20.000",
                image: "img/cv/CV5.jpg",
                link: "https://api.whatsapp.com/send?phone=6285280146477&text=Halo%20Saya%20ingin%20membeli%20CV5."
            },
            {
                judul: "CV6", modal: "modal-6",
                harga: "Rp20.000",
                image: "img/cv/CV6.jpg",
                link: "https://api.whatsapp.com/send?phone=6285280146477&text=Halo%20Saya%20ingin%20membeli%20CV6."
            },
            {
                judul: "CV7", modal: "modal-7",
                harga: "Rp20.000",
                image: "img/cv/CV7.jpg",
                link: "https://api.whatsapp.com/send?phone=6285280146477&text=Halo%20Saya%20ingin%20membeli%20CV7."
            },
            {
                judul: "CV8", modal: "modal-8",
                harga: "Rp20.000",
                image: "img/cv/CV8.jpg",
                link: "https://api.whatsapp.com/send?phone=6285280146477&text=Halo%20Saya%20ingin%20membeli%20CV8."
            },
        ],
        companiesVisible: 3,
        step: 3,
        }
    },
    computed: {
        visibleCompanies() {
        return this.companies.slice(0, this.companiesVisible)
        }
    }
})