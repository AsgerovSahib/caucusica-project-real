document.getElementById('submit-btn').addEventListener('click', function() {
    
    // 1. YENİ GMAIL ÜÇÜN ID-LƏR (Buranı dəyişdim)
    const serviceID = 'service_bltnoje'; 
    const templateID = 'template_6emk3ov';

    const params = {
        first_name: document.getElementsByName('first_name')[0].value,
        last_name: document.getElementsByName('last_name')[0].value,
        user_email: document.getElementsByName('user_email')[0].value,
        travel_window: document.getElementsByName('travel_window')[0].value,
        travelling_as: document.getElementsByName('travelling_as')[0].value,
        region: document.getElementsByName('region')[0].value,
        message: document.getElementsByName('message')[0].value
    };

    // Göndərmə funksiyası
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Uğurla göndərildi! Yeni Gmail-ə mesaj getdi.");
            location.reload(); 
        })
        .catch(err => {
            console.error("Xəta:", err);
            alert("Xəta baş verdi. Yenidən yoxlayın.");
        });
});