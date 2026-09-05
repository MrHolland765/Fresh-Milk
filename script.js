function sendWhatsapp(){

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let amount = document.getElementById("amount").value;
    let location = document.getElementById("location").value;


    let sellerNumber = "255773316131";
    

    let message =
    "Habari muuzaji,%0A%0A" +
    "Nataka kuagiza maziwa ya ng'ombe halisi.%0A%0A" +
    "Jina: " + name + "%0A" +
    "Namba ya simu: " + phone + "%0A" +
    "Idadi ya maziwa: " + amount + " Lita%0A" +
    "Mahali: " + location + "%0A%0A" +
    "Tafadhali nitumie namba ya malipo.%0A" +
    "Asante.";


    let url = 
    "https://wa.me/" + sellerNumber + "?text=" + message;


    window.open(url, "_blank");

}