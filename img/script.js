// Countdown Timer
const countDownDate = new Date("Dec 31, 2024 15:37:25").getTime();
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Acara telah berlangsung";
    }
}, 1000);

// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
}

// Show Gift Details
function showGiftDetails(giftType) {
    let giftMessage;
    switch(giftType) {
        case 'voucher':
            giftMessage = "Voucher perjalanan bisa berupa tiket pesawat, voucher hotel, atau paket perjalanan wisata.";
            break;
        case 'household':
            giftMessage = "Peralatan rumah tangga seperti blender, oven, atau alat memasak lainnya.";
            break;
        case 'cash':
            giftMessage = "Kado dalam bentuk uang tunai bisa dikirim melalui rekening bank.";
            break;
        case 'other':
            giftMessage = "Hadiah lainnya sesuai dengan keinginan dan kreativitas Anda.";
            break;
        default:
            giftMessage = "Pilih hadiah yang sesuai.";
    }
    alert(giftMessage);
}

// RSVP Form Submission
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Terima kasih atas konfirmasi kehadirannya!");
});
