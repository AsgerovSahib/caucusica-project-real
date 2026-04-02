// Kodun ən yuxarısında Public Key-i unutma!
(function() {
    emailjs.init("PQ8UZakcvg1IDOObn"); 
})();

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Butonun səhifəni yeniləməsinin qarşısını alaq
            
            console.log("Düymə sıxıldı, proses başlayır..."); // Yoxlama üçün

            const serviceID = 'service_guul69d';
            const templateID = 'template_g9nev7k';

            // Elementlərin mövcudluğunu yoxlayaraq datanı alırıq
            try {
                const params = {
                    name: document.getElementsByName('first_name')[0].value,
                    email: document.getElementsByName('user_email')[0].value,
                    message: document.getElementsByName('message')[0].value,
                    travelling_as: document.getElementsByName('travelling_as')[0].value,
                    // HTML-də 'last_name' və 'travel_window' yoxdursa, xəta verməməsi üçün boş qoyuruq
                    title: "New Inquiry from Website" 
                };

                console.log("Göndərilən parametrlər:", params);

                emailjs.send(serviceID, templateID, params)
                    .then(res => {
                        alert("Uğurla göndərildi!");
                        location.reload();
                    })
                    .catch(err => {
                        console.error("EmailJS Xətası:", err);
                        alert("EmailJS xətası: " + JSON.stringify(err));
                    });

            } catch (error) {
                console.error("Datanı alarkən xəta:", error);
                alert("Formdakı məlumatları oxuyarkən xəta baş verdi. Konsola baxın.");
            }
        });
    } else {
        console.error("Səhv: 'submit-btn' ID-li buton tapılmadı!");
    }
});