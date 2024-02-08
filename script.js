const dates = ["Sélectionner une date","2024-01-27", "2024-02-03", "2024-02-10"];

    ajouterDate();
    const plus = document.getElementById('plus');
    plus.addEventListener('click', ajouter);

    // Fonction pour ajouter une nouvelle réservation
    function ajouter() {
      const reservation = document.querySelector('.reserv');
      const reservationCopie = reservation.cloneNode(true);

      const date = reservationCopie.querySelector('.date');
      const billet = reservationCopie.querySelector('.billet');

      const recupererDate = recupDate();
      const options = date.options;
      for (let i = 0; i < options.length; i++) {
        if (recupererDate.includes(options[i].value) === false) {
          options[i].disabled = false;
        } else {
          console.log(dates.splice(options[i]));
          options[i].disabled = true;
        }
      }

      date.selectedIndex = 0;
      billet.value = '1';

      document.getElementById('ticket').appendChild(reservationCopie);
    }

    const moins = document.getElementById('moins');
    moins.addEventListener('click', supprimer);
    // Fonction pour ajouter une supprimer une réservation
    function supprimer() {
      const reservations = document.querySelectorAll('.reserv');
      if (reservations.length > 1) {
        const dernierReservation = reservations[reservations.length - 1];
        dernierReservation.remove();
      }
    }
    
    // Fonction pour ajouter les dates dans le <select>
    function ajouterDate() {
      for(let i = 0; i < dates.length; i++) {
        if(i > 0) { // Condition pour eviter de formater la date pour le premier element du tableau
          const newDate = new Date(dates[i]).toLocaleDateString();  // Changer le format de la date
          const selection = document.querySelector(".date");
          const option = document.createElement("option");
          option.value = dates[i];
          option.text = newDate;
          selection.appendChild(option);
        } else {
          const selection = document.querySelector(".date");
          const option = document.createElement("option");
          option.value = dates[i];
          option.text = dates[i];
          selection.appendChild(option);
        }
      }
    }
    
    // Fonction pour récupérer la date et l'enlever si déjà sélectionnées
    function recupDate() {
      const datesSelectionnees = [];
      const reservations = document.querySelectorAll('.reserv');
      reservations.forEach(reservation => {
        const dateSelectionnee = reservation.querySelector('.date').value;
        if (dateSelectionnee !== dates[0]) {
          datesSelectionnees.push(dateSelectionnee);
        }
      });
      return datesSelectionnees;
    }
