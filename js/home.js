function calculateAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age
}

document.getElementById("testForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const getName = document.getElementById("name").value;
    const getBdate = document.getElementById("bDate").value;

    const age = calculateAge(getBdate);
    alert(`${getName}, tu edad es: ${age} años`);
});