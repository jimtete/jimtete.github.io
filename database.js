var mathimata = CreateArray(38)

for (var i = 0; i < mathimata.length; i++) {
  mathimata[i] = new Array(7);
}


function CreateArray(size){
    return new Array(size);
}

mathimata[0]=["Μαθηματικά ΙΙ",1,9,2,3,9,2];
mathimata[1]=["Μετρήσεις και Κυκλώματα Εναλλασσόμενου Ρεύματος",1,11,2,2,14,2]
mathimata[2]=["Τεχνική Συγγραφή, Παρουσίαση και Ορολογία Ξένης Γλώσσας",4,14,2,4,16,2]
mathimata[3]=["Σχεδίαση Ψηφιακών Συστημάτων",3,11,2,5,11,2]
mathimata[4]=["Αντικειμενοστρεφής Προγραμματισμός",4,11,2,5,14,2]
mathimata[5]=["Οργάνωση και Αρχιτεκτονική Υπολογιστικών Συστημάτων",-1,-1,-1,-1,-1,-1]
mathimata[6]=["Συστήματα Διαχείρισης Βάσεων Δεδομένων",-1,-1,-1,-1,-1,-1]
mathimata[7]=["Τηλεπικοινωνιακά Συστήματα",-1,-1,-1,-1,-1,-1]
mathimata[8]=["Εισαγωγή στα Λειτουργικά Συστήματα",-1,-1,-1,-1,-1,-1]
mathimata[9]=["Ηλεκτρονικά Κυκλώματα",-1,-1,-1,-1,-1,-1]
mathimata[10]=["Τεχνητή Νοημοσύνη",-1,-1,-1,-1,-1,-1]
mathimata[11]=["Ενσωματωμένα Συστήματα",-1,-1,-1,-1,-1,-1]
mathimata[12]=["Σύνθεση Ηλεκτρονικών Κυκλωμάτων",-1,-1,-1,-1,-1,-1]
mathimata[13]=["Κβαντική Υπολογιστική",-1,-1,-1,-1,-1,-1]
mathimata[14]=["Μεθοδολογίες Σχεδιασμού Μικροηλεκτρονικών Κυκλωμάτων **",-1,-1,-1,-1,-1,-1]
mathimata[15]=["Μικροκυματική Τεχνολογία και Τηλεπισκόπηση",-1,-1,-1,-1,-1,-1]
mathimata[16]=["Οπτοηλεκτρονική και Οπτικές Επικοινωνίες",-1,-1,-1,-1,-1,-1]
mathimata[17]=["Συστήματα Μέσων Μαζικής Επικοινωνίας",-1,-1,-1,-1,-1,-1]
mathimata[18]=["Αριθμητικές Μέθοδοι",-1,-1,-1,-1,-1,-1]
mathimata[19]=["Προηγμένα Θέματα Αλληλεπίδρασης (Προγραμματισμός Κινητών Συσκευών)",-1,-1,-1,-1,-1,-1]
mathimata[20]=["Διοίκηση Έργων",-1,-1,-1,-1,-1,-1]
mathimata[21]=["Ασφάλεια Πληροφοριακών Συστημάτων",-1,-1,-1,-1,-1,-1]
mathimata[22]=["Αρχές και Μέθοδοι Μηχανικής Μάθησης",-1,-1,-1,-1,-1,-1]
mathimata[23]=["Διαδίκτυο των Πραγμάτων",-1,-1,-1,-1,-1,-1]
mathimata[24]=["Εφαρμογές Συστημάτων Αυτομάτου Ελέγχου",-1,-1,-1,-1,-1,-1]
mathimata[25]=["Μετατροπείς Ισχύος",-1,-1,-1,-1,-1,-1]
mathimata[26]=["Μικροηλεκτρονική *",-1,-1,-1,-1,-1,-1]
mathimata[27]=["Εφαρμογές Συστημάτων Ισχύος και ΑΠΕ *",-1,-1,-1,-1,-1,-1]
mathimata[28]=["Ηλεκτροκίνηση και Ευφυή Δίκτυα *",-1,-1,-1,-1,-1,-1]
mathimata[29]=["Ασύρματα Δίκτυα",-1,-1,-1,-1,-1,-1]
mathimata[30]=["Ειδικά Θέματα Δικτύων (CCNA) 1",-1,-1,-1,-1,-1,-1]
mathimata[31]=["Προηγμένα Θέματα Δικτύων",-1,-1,-1,-1,-1,-1]
mathimata[32]=["Συστήματα Κινητών Επικοινωνιών",-1,-1,-1,-1,-1,-1]
mathimata[33]=["Ελεύθερη Επιλογή Β",-1,-1,-1,-1,-1,-1]
mathimata[34]=["Ραδιοτηλεοπτική Παραγωγή *",-1,-1,-1,-1,-1,-1]
mathimata[35]=["Οργάνωση Δεδομένων και Εξόρυξη Πληροφορίας",-1,-1,-1,-1,-1,-1]
mathimata[36]=["Διαδικτυακές Υπηρεσίες Προστιθέμενης Αξίας",-1,-1,-1,-1,-1,-1]
mathimata[37]=["Ανάπτυξη Ολοκληρωμένων Πληροφοριακών Συστημάτων",-1,-1,-1,-1,-1,-1]

function fnExcelReport()
{
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('mainTable'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
    }  
    else                 //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

    return (sa);
}

//ONOMA/M1/W1/D1/M2/W2/D2