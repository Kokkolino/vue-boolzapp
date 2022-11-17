var app = new Vue({
    el: '#root',
    data: {
      contacts: [
        // first contact
        {
        name: 'Michele',
        avatar: './assets/img/avatar_1.jpg',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Hai portato a spasso il cane?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'Ricordati di stendere i panni',
        status: 'sent'
        },
        {
        date: '10/01/2020 16:15:22',
        message: 'Tutto fatto!',
        status: 'received'
        }
        ],
        },
        // second contact
        {
        name: 'Fabio',
        avatar: './assets/img/avatar_2.jpg',
        visible: true,
        messages: [
        {
        date: '20/03/2020 16:30:00',
        message: 'Ciao come stai?',
        status: 'sent'
        },
        {
        date: '20/03/2020 16:30:55',
        message: 'Bene grazie! Stasera ci vediamo?',
        status: 'received'
        },
        {
        date: '20/03/2020 16:35:00',
        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'sent'
        }
        ],
        },
         // third contact
        {
        name: 'Samuele',
        avatar: './assets/img/avatar_3.jpg',
        visible: true,
        messages: [
        {
        date: '28/03/2020 10:10:40',
        message: 'La Marianna va in campagna',
        status: 'received'
        },
        {
        date: '28/03/2020 10:20:10',
        message: 'Sicuro di non aver sbagliato chat?',
        status: 'sent'
        },
        {
        date: '28/03/2020 16:15:22',
        message: 'Ah scusa!',
        status: 'received'
        }
        ],
        },
        // fourth contact
        {
        name: 'Alessandro B.',
        avatar: './assets/img/avatar_4.jpg',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'Si, ma preferirei andare al cinema',
        status: 'received'
        }
        ],
        },
        // fifth contact
        {
        name: 'Alessandro L.',
        avatar: './assets/img/avatar_5.jpg',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Ricordati di chiamare la nonna',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'Va bene, stasera la sento',
        status: 'received'
        }
        ],
        },
        // sixth contact
        {
        name: 'Claudia',
        avatar: './assets/img/avatar_6.jpg',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Ciao Claudia, hai novità?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'Non ancora',
        status: 'received'
        },
        {
        date: '10/01/2020 15:51:00',
        message: 'Nessuna nuova, buona nuova',
        status: 'sent'
        }
        ],
        },
        // seventh contact
        {
        name: 'Federico',
        avatar: './assets/img/avatar_7.jpg',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Fai gli auguri a Martina che è il suo compleanno!',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'Grazie per avermelo ricordato, le scrivo subito!',
        status: 'received'
        }
        ],
        },
        // eighth contact
        {
        name: 'Davide',
        avatar: './assets/img/avatar_8.jpg',
        visible: true,
        messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Ciao, andiamo a mangiare la pizza stasera?',
        status: 'received'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:51:00',
        message: 'OK!!',
        status: 'received'
        }
        ],
        }
      ],
      user: 0,
      writingMsg: '',
      filterArr: [],
      filter: "",
    },
    methods:{
      lastMessage: function (index){
       let x = this.contacts[index].messages.length - 1;
       return x;
      },

      lastSeen: function (user) {
        let x = 0;
        let length = this.contacts[user].messages.length;
        for (let i = 0; i < length; i++){
          if(this.contacts[user].messages[i].status == 'received'){
            x = i;
          }
        }
        return x
      },

      sendMsg: function (user){
        // my msg
        let day = dayjs().get('date');
        let month = dayjs().get('month');
        let year = dayjs().get('year');
        let hour = dayjs().get('hour');
        let second = dayjs().get('second');
        let minute = dayjs().get('minute');
        let y = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
        const x = {
          date: `${y}`,
          message: this.writingMsg,
          status: 'sent'
        };
        this.contacts[user].messages.push(x);
        // his msg
        setTimeout(() => {
          day = dayjs().get('date');
          month = dayjs().get('month');
          year = dayjs().get('year');
          hour = dayjs().get('hour');
          second = dayjs().get('second');
          minute = dayjs().get('minute');
          y = `${day}/${month}/${year} ${hour}:${minute}:${second}`;

          const xx = {
            date: `${y}`,
            message: "ok",
            status: 'received'
          };
          this.contacts[user].messages.push(xx);

        } ,3000)
        this.writingMsg = "";
        return
      }
  } 
})