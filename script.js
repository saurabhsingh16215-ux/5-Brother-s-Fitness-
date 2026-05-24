function showSection(section) {

    const sections = document.querySelectorAll('.product-section');

    sections.forEach(sec => {
        sec.classList.remove('active');
    });

    const target = document.getElementById(section);

    if(target){
        target.classList.add('active');
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Verification popup sirf scan/code par
function showVerification(brand, code){

    const overlay =
    document.getElementById("verification-overlay");

    const brandName =
    document.getElementById("dynamic-brand");

    const status =
    document.getElementById("dynamic-status");

    const desc =
    document.getElementById("dynamic-desc");

    const badge =
    document.getElementById("dynamic-badge");

    brandName.innerText = brand;

    badge.innerHTML =
    "✅ PRODUCT VERIFIED";

    status.innerHTML =
    "100% Authentic";

    desc.innerHTML =
    "Code verified successfully: " + code;

    overlay.style.display = "flex";
}

function closeVerification(){
    document.getElementById(
    "verification-overlay"
    ).style.display = "none";
}

// code verify
function verifyManualCode(){

    const code =
    document.getElementById(
    "manualCodeInput"
    ).value;

    if(code.trim() === ""){
        alert("Please enter code");
        return;
    }

    showVerification(
    "BigBrothers Supplement Store",
    code
    );
}

// page load par popup nahi
window.onload = function(){

    const overlay =
    document.getElementById(
    "verification-overlay"
    );

    if(overlay){
        overlay.style.display = "none";
    }
};
