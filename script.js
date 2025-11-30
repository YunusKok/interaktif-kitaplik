document.addEventListener("DOMContentLoaded", () => {
  const universe = document.getElementById("universe");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const world = document.getElementById("world");
  const storyContainer = document.getElementById("story-scroll-container");
  const preloader = document.getElementById("preloader");
  const memoryModal = document.getElementById("memory-modal");
  const memoryText = document.getElementById("memory-text");
  const closeModal = document.querySelector(".close-modal");

  // GÜNCELLEME: Anı yıldızları artık normal yıldız sınıfını almıyor, bu sayede görünüyorlar.
  function createTwinklingStars() {
    const starCount = 200;
    const memoryStars = [15, 65, 115, 165];
    const memories = [
      "Küçük Prens'in Gülü",
      "Apollo 11'in Ayak İzi",
      "Kuyruklu Yıldız Halley",
      "Samanyolu Rehberi",
    ];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");

      const memoryIndex = memoryStars.indexOf(i);
      if (memoryIndex !== -1) {
        star.classList.add("memory-star");
        star.dataset.memory = memories[memoryIndex];
        star.style.width = `${Math.random() * 3 + 10}px`;
        star.style.height = star.style.width;
      } else {
        star.classList.add("star");
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        star.style.animationDuration = `${Math.random() * 2 + 3}s`;
      }

      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      universe.appendChild(star);
    }
  }

  function createShootingStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    star.style.top = `${Math.random() * 60}%`;
    star.style.transform = `rotate(-25deg)`;
    star.style.animationDuration = `${Math.random() * 2 + 3}s`;
    universe.appendChild(star);
    setTimeout(() => {
      star.remove();
    }, 5000);
  }

  function createCursorTrail(e) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    if (isScrolling) {
      trail.style.transform = "translate(-50%, -50%) scale(2)";
    }
    document.body.appendChild(trail);
    setTimeout(() => {
      trail.remove();
    }, 800);
  }

  function createFinalQuote() {
    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add("final-quote");
    quoteContainer.innerText = "Gerçek dostlar, gökyüzünü paylaşmayı bilirler.";
    storyContainer.appendChild(quoteContainer);

    setInterval(() => {
      if (document.querySelectorAll(".final-quote .sparkle").length < 20) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.top = `${Math.random() * 80 + 10}%`;
        sparkle.style.left = `${Math.random() * 90 + 5}%`;
        sparkle.style.animationDelay = `${Math.random() * 1.5}s`;
        quoteContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
      }
    }, 100);
  }

  // HİKAYE VERİSİ GÜNCELLENDİ: DAHA FAZLA ANİMASYON VE EL HAREKETİ
  const storyData = [
    {
      text: `Evvel zaman içinde, gökyüzünün kocaman oyun parkında, iki çok iyi arkadaş yaşarmış: Biri pırıl pırıl Güneş, diğeri ise tonton Ay.`,
      action: () => {},
    },
    {
      text: `Güneş, sabahları erkenden uyanır, çocukları okula uğurlar, çiçekleri gıdıklayıp uyandırırmış. Ay ise biraz uykucuymuş; geceleri ortaya çıkar, herkese ninniler söylermiş.`,
      action: () => {},
    },
    {
      text: `Bu iki arkadaş birbirlerini çok severmiş ama bir sorun varmış: Biri gündüz, diğeri gece çalıştığı için oyun oynamaya hiç vakit bulamazlarmış.`,
      action: () => {},
    },
    {
      text: `Uzaktan birbirlerine el sallarlarmış. Ay, Güneş'in yaydığı o neşeli ışığa hayranmış. "Keşke ben de onun kadar sıcak ve parlak olabilsem," diye iç geçirirmiş.`,
      action: () => {
        moon.classList.add("wistful");
      },
    },
    {
      text: `Güneş ise her yere yetişmeye çalışmaktan bazen yorulurmuş. Ay'ın o sakinliğini, sessizce süzülüşünü izler, "Ne güzel, o hiç terlemiyor," dermiş.`,
      action: () => {
        moon.classList.add("wistful");
        sun.classList.add("wistful"); // Güneş de biraz özlem duysun
      },
    },
    {
      text: `Bir gün Ay'ın canı çok sıkılmış. "Artık uzaktan bakmak istemiyorum," demiş. "Gidip Güneş ile saklambaç oynayacağım!"`,
      action: () => {
        moon.style.left = "78%";
        moon.classList.add("wistful");
        // GÜNCELLEME: Kararlılık göstergesi olarak elleri çıksın
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Böylece yörüngesinden yavaşça çıkıp, parmak uçlarında Güneş'e doğru yürümeye başlamış. Acaba Güneş onu oyuna kabul edecek miymiş?`,
      action: () => {
        moon.style.left = "75%";
        // GÜNCELLEME: Hafifçe yukarı doğru hareket ve dönme
        moon.style.top = "45%";
        moon.style.transform = "translate(-50%, -50%) rotate(-10deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Ay yaklaştıkça heyecanlanmış. Kalbi güm güm atmaya başlamış. Gökyüzündeki diğer yıldızlar, "Hey Ay Dede nereye gidiyorsun?" diye fısıldaşmışlar.`,
      action: () => {
        moon.style.left = "72%";
        moon.classList.add("wistful");
        // GÜNCELLEME: Harekete devam
        moon.style.top = "42%";
        moon.style.transform = "translate(-50%, -50%) rotate(-20deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Güneş bir bakmış ki, en yakın arkadaşı ona doğru geliyor! Çok şaşırmış. "Ooo! Ay kardeş, gündüz vakti ne işin var burada?" diye sormuş.`,
      action: () => {
        sun.classList.add("surprised");
        moon.classList.add("wistful");
        moon.style.left = "70%";
        moon.style.top = "45%"; // Güneş'e bakmak için biraz aşağı insin
        moon.style.transform = "translate(-50%, -50%) rotate(0deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Ay gülümsemiş. "Sıkıldım," demiş. "Seninle biraz yakalamaca oynamaya geldim!" Güneş bunu duyunca çok sevinmiş, ışıkları dans etmeye başlamış.`,
      action: () => {
        moon.style.left = "68%";
        moon.classList.add("happy");
        sun.classList.add("happy");
        // GÜNCELLEME: Oyun başlıyor, eller aktif
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Böylece gökyüzünde büyük bir koşuşturmaca başlamış. Ay, Güneş'e doğru koştukça aralarındaki mesafe azalmış.`,
      action: () => {
        // GÜNCELLEME: Daha dinamik bir kavisli koşu yolu
        moon.style.left = "55%";
        moon.style.top = "35%";
        moon.style.transform = "translate(-50%, -50%) rotate(-30deg)";
        moon.classList.add("happy");
        moon.classList.add("hands-active");
        sun.classList.add("happy");
      },
    },
    {
      text: `Güneş o kadar sıcakmış ki, Ay ona yaklaştıkça yanakları ısınmış, pespembe olmuş. Sanki utangaç bir çocuk gibi kızarmış.`,
      action: () => {
        // GÜNCELLEME: Yaklaşmaya devam ve kızarma
        moon.style.left = "45%";
        moon.style.top = "45%";
        moon.style.transform = "translate(-50%, -50%) rotate(-15deg)";
        moon.style.background = "#FFE4E1";
        moon.style.boxShadow = "0 0 20px #FFC0CB, 0 0 40px #FF69B4";
        moon.classList.add("happy");
        moon.classList.add("hands-active");
        sun.classList.add("happy");
      },
    },
    {
      text: `Güneş, Ay'ın bu haline kıkırdamış. "Dikkat et Ay kardeş, çok yaklaşırsan benim gibi yanarsın!" demiş şakayla. Ay ise, "Olsun, senin yanında ısınmak çok güzel," demiş.`,
      action: () => {
        sun.classList.add("surprised");
        moon.style.background = "#FFE4E1";
        moon.style.boxShadow = "0 0 20px #FFC0CB, 0 0 40px #FF69B4";
        moon.classList.add("happy");
        // GÜNCELLEME: Çok yakınlar
        moon.style.left = "35%";
        moon.style.top = "55%";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Artık o kadar yakınlarmış ki, gökyüzünde kocaman bir ışık topu gibi görünmüşler. İkisi de kıkır kıkır gülüyormuş.`,
      action: () => {
        sun.classList.remove("surprised");
        sun.classList.add("happy");
        moon.classList.add("happy");
        // GÜNCELLEME: Yan yana, hafifçe dönmüş şekilde duruyorlar
        sun.style.left = "42%";
        moon.style.left = "58%";
        sun.style.transform = "translate(-50%, -50%) rotate(-10deg)";
        moon.style.transform = "translate(-50%, -50%) rotate(10deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Ay: "Senin ışığın sayesinde ben de parlıyorum, teşekkür ederim Güneş!" demiş. Güneş: "Asıl ben teşekkür ederim, sen olmasan geceleri kim bekleyecek?" diye cevap vermiş.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        // GÜNCELLEME: Konuşurken pozisyonlarını korusunlar
        sun.style.left = "42%";
        moon.style.left = "58%";
        sun.style.transform = "translate(-50%, -50%) rotate(-10deg)";
        moon.style.transform = "translate(-50%, -50%) rotate(10deg)";
      },
    },
    {
      text: `O sırada Güneş heyecandan hapşırmış ve elindeki ışık tozlarını yanlışlıkla etrafa saçmış.`,
      action: () => {
        sun.classList.add("surprised");
        moon.classList.add("happy");
        // GÜNCELLEME: Hapşırınca biraz titresin/zıplasın
        sun.style.transform = "translate(-50%, -50%) scale(1.1) rotate(-5deg)";
      },
    },
    {
      text: `Ay kahkahalarla gülmüş: "Çok yaşa! Bak şimdi her yer simli oldu." Güneş'in sakarlığı bile oyuna neşe katmış.`,
      action: () => {
        moon.classList.add("happy");
        sun.classList.remove("surprised");
        sun.classList.add("happy");
        // GÜNCELLEME: Ay gülerken biraz geri çekilsin ve dönsün
        moon.style.left = "65%";
        moon.style.transform = "translate(-50%, -50%) rotate(20deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `"Ben hep kusursuz parlamalıyım sanıyordum," demiş Güneş. Ay başını sallamış: "Hayır, bazen komik olmak en güzelidir."`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        moon.style.left = "60%";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `İki arkadaş yan yana dururken, birbirlerinin farklı özelliklerini ne kadar çok sevdiklerini fark etmişler.`,
      action: () => {
        // GÜNCELLEME: Sakince yan yana gelsinler
        sun.style.left = "45%";
        moon.style.left = "55%";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Ay, "Seni yakalayacağım!" diyerek bir hamle daha yapmış. Gökyüzündeki en büyük ebelemece oyunu devam ediyormuş.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        // GÜNCELLEME: Ani bir hamle, eller aktifleşir
        moon.style.left = "52%";
        moon.style.transform = "translate(-50%, -50%) scale(1.1)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Güneş neşeyle bağırmış: "Beni yakalayamazsın kiii!" Ama Ay kararlıymış, adım adım ona doğru süzülmüş.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        // GÜNCELLEME: Güneş kaçıyor, Ay kovalıyor
        sun.style.left = "40%";
        moon.style.left = "48%";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Ancak oyun o kadar hareketliymiş ki, bir an dengelerini kaybetmişler. Yerler karışmış!`,
      action: () => {
        // GÜNCELLEME: Hızlı bir yer değiştirme ve dönme efekti
        sun.style.left = "70%";
        moon.style.left = "30%";
        sun.style.transform = "translate(-50%, -50%) rotate(180deg)";
        moon.style.transform = "translate(-50%, -50%) rotate(-180deg)";
        sun.classList.add("happy");
        moon.classList.add("happy");
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Ay bir an duraksamış. "Galiba biraz fazla uzaklaştık, yerimden oldum," diye düşünmüş.`,
      action: () => {
        sun.classList.add("wistful");
        moon.classList.add("wistful");
        // GÜNCELLEME: Duraksama anı, dönme normale döner
        sun.style.transform = "translate(-50%, -50%) rotate(0deg)";
        moon.style.transform = "translate(-50%, -50%) rotate(0deg)";
      },
    },
    {
      text: `Ama Güneş ona güven vermiş: "Merak etme, biz bir takımız. Nereye gidersen git, ışığım seninle."`,
      action: () => {
        sun.style.left = "60%";
        moon.style.left = "40%";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Böylece anlamışlar ki, yan yana olmasalar bile kalpleri hep birlikte atıyor.`,
      action: () => {
        // GÜNCELLEME: Tekrar merkeze yakınlaşma
        sun.style.left = "55%";
        moon.style.left = "45%";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Tam o sırada Güneş şakacıktan kaşlarını çatmış. "Hey! Bak bütün gezegenler sana bakıyor, benim pabucum dama atıldı galiba!"`,
      action: () => {
        sun.classList.add("angry"); // Şakacı kızgınlık
        sun.style.boxShadow =
          "0 0 70px #FF4500, 0 0 140px #FF0000, 0 0 200px var(--sun-color)";
        moon.classList.add("surprised");
      },
    },
    {
      text: `Ay hemen cevap vermiş: "Olur mu hiç? Ben sadece senin ışığını yansıtıyorum, asıl kahraman sensin."`,
      action: () => {
        sun.classList.remove("angry");
        moon.classList.add("happy");
      },
    },
    {
      text: `Bu sefer Ay biraz somurtmuş: "Ama sen de ışığını herkese bol bol dağıtıyorsun, bana kalmayacak diye korkuyorum."`,
      action: () => {
        moon.classList.add("angry"); // Şakacı trip
        // GÜNCELLEME: Somurturken kollarını kavuştursun (eller kaybolsun)
        moon.classList.remove("hands-active");
      },
    },
    {
      text: `Güneş kahkaha atmış: "Işık paylaştıkça azalmaz ki şapşal! Paylaştıkça çoğalır." Ay bunu duyunca rahatlamış.`,
      action: () => {
        moon.classList.remove("angry");
        sun.classList.add("happy");
      },
    },
    {
      text: `Bir gün Ay, Güneş'e bir sürpriz yapmak istemiş. "Şimdi ona öyle bir şaka yapacağım ki şaşıracak," demiş.`,
      action: () => {
        moon.classList.add("wistful");
        sun.classList.add("surprised");
        // GÜNCELLEME: Sinsice yaklaşma planı
        moon.style.left = "60%";
        moon.style.top = "30%";
        moon.style.transform = "translate(-50%, -50%) rotate(-45deg)";
        moon.classList.add("hands-active");
      },
    },
    {
      text: `Ve hoop diye Güneş'in tam önüne atlamış! "Ce-eee!"`,
      action: () => {
        sun.classList.add("angry"); // Şaşkınlık tepkisi
        moon.classList.add("surprised");
        // GÜNCELLEME: Tam önüne geçiş
        sun.style.left = "50%";
        moon.style.left = "50%";
        moon.style.top = "50%";
        sun.style.transform = "translate(-50%, -50%) scale(1.2)"; // Güneş şaşkınlıktan büyüsün
        moon.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
        moon.style.zIndex = "15"; // Ay öne geçsin
        moon.classList.add("hands-active");
      },
    },
    {
      text: `İşte tam o anda olanlar olmuş. Ay, Güneş'in tam önüne geçince Dünya'daki ışıklar kesilmiş! Buna "Güneş Tutulması" diyorlarmış.`,
      action: () => {
        sun.classList.add("sad");
        moon.classList.add("sad");
        // GÜNCELLEME: Tutulma pozisyonu
        sun.style.left = "50%";
        moon.style.left = "50%";
        world.style.left = "50%"; // Dünya merkeze gelsin
        world.style.top = "80%"; // Dünya aşağıda dursun
        world.style.opacity = "1";
        moon.style.zIndex = "15";
      },
    },
    {
      text: `Dünya bir anda kararınca herkes şaşırmış. Güneş, "Hey Ay! Önümden çekil, çocuklar oyun oynayamıyor, her yer karanlık oldu!" demiş. Ay ise, "Eyvah! Ben sadece şaka yapmak istemiştim," diye üzülmüş.`,
      action: () => {
        sun.classList.add("sad");
        moon.classList.add("sad");
        sun.style.left = "50%";
        moon.style.left = "50%";
        world.style.left = "50%";
        world.style.top = "80%";
        world.style.opacity = "1";
        moon.style.zIndex = "15";
        sun.style.boxShadow =
          "0 0 20px var(--sun-color), 0 0 40px var(--sun-glow1)";
        moon.style.boxShadow = "0 0 5px #444";
        moon.style.background = "#333"; // Ay iyice kararsın
      },
    },
    {
      text: `Güneş ışığını gönderemediği için üzgünmüş. Ay ise kendi rengini kaybetmiş, kapkara kalmış. Oyun biraz fazla ileri gitmiş.`,
      action: () => {
        // Durum devam ediyor
        sun.classList.add("sad");
        moon.classList.add("sad");
        sun.style.left = "50%";
        moon.style.left = "50%";
        world.style.left = "50%";
        world.style.top = "80%";
        world.style.opacity = "1";
        moon.style.zIndex = "15";
        sun.style.boxShadow =
          "0 0 20px var(--sun-color), 0 0 40px var(--sun-glow1)";
        moon.style.boxShadow = "0 0 5px #444";
        moon.style.background = "#333";
      },
    },
    {
      text: `Güneş şöyle demiş: "Bak, ikimiz de farklıyız. Ben dünyayı aydınlatmalıyım, sen de geceyi süslemelisin. Birbirimizin önüne geçersek işler karışıyor."`,
      action: () => {
        // Aynı sahne
      },
    },
    {
      text: `Ay karanlıkta kaldığı o an düşünmüş. "Haklısın Güneş. Ben senin ışığın olmadan görünmez oluyorum. Biz harika bir ekibiz, birbirimize engel olmamalıyız."`,
      action: () => {
        // Aynı sahne
      },
    },
    {
      text: `Karanlığın içinde Ay, kendi içindeki gücü hissetmeye başlamış. "Tamam," demiş, "Şimdi kenara çekileceğim ve görevime döneceğim."`,
      action: () => {
        moon.style.boxShadow = "0 0 10px #add8e6, 0 0 20px #4682b4";
        moon.style.background = "#444"; // Hafifçe aydınlanmaya başlasın
        sun.classList.add("sad");
        moon.classList.add("sad");
        moon.style.zIndex = "15";
      },
    },
    {
      text: `Ay yavaşça kenara çekilirken, kenarlarından parlak bir ışık hüzmesi yayılmış. Sanki "Her şey yolunda" diye göz kırpıyormuş.`,
      action: () => {
        moon.classList.remove("sad");
        moon.classList.add("happy");
        // GÜNCELLEME: Çekilme hareketi başlıyor
        moon.style.left = "60%";
        moon.style.boxShadow =
          "0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff";
        sun.classList.add("sad");
        moon.style.zIndex = "2"; // Z-index normale dönsün
      },
    },
    {
      text: `Güneş, Ay'ın bu anlayışlı halini görünce çok mutlu olmuş. "Aferin benim akıllı arkadaşıma!" demiş.`,
      action: () => {
        sun.classList.remove("sad");
        sun.classList.add("wistful");
        moon.classList.add("happy");
        // GÜNCELLEME: Çekilme devam ediyor
        moon.style.left = "70%";
      },
    },
    {
      text: `Ve nihayet Ay tamamen çekilince, Güneş'in ışığı tekrar dünyaya vurmuş! Kuşlar ötüşmeye, çiçekler açmaya başlamış.`,
      action: () => {
        sun.classList.add("surprised"); // Mutlu şaşkınlık
        moon.classList.add("happy");
        moon.style.boxShadow =
          "0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff";
        // GÜNCELLEME: Güneş eski parlaklığına dönsün
        sun.style.boxShadow = `0 0 50px var(--sun-color), 0 0 100px var(--sun-glow1), 0 0 150px var(--sun-glow2)`;
        moon.style.left = "80%";
      },
    },
    {
      text: `Böylece tutulma sona ermiş. Herkes rahat bir nefes almış.`,
      action: () => {
        world.style.left = "120%";
        world.style.opacity = "0";
        sun.classList.remove("surprised");
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `O günden sonra Ay ve Güneş, gökyüzünün kurallarına hep uymuşlar. Biliyorlarmış ki, gerçek arkadaşlık birbirine engel olmak değil, birbirini parlatmaktır.`,
      action: () => {
        // GÜNCELLEME: Normal pozisyonlarına dönüş
        sun.style.left = "25%";
        moon.style.left = "75%";
        moon.style.background = "var(--moon-color)";
        moon.style.boxShadow = "0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Güneş gündüzleri ısıtmış, Ay geceleri aydınlatmış. Hiç ayrılmamışlar, sadece sırayla çalışmışlar.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Ve gökyüzünde mutlu mesut yaşamaya devam etmişler. Her günbatımında ve gündoğumunda birbirlerine el sallamayı da hiç unutmamışlar.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
        // GÜNCELLEME: Finalde birbirlerine el sallasınlar
        sun.style.left = "40%";
        sun.style.transform = "translate(-50%, -50%) rotate(-15deg)";
        moon.style.left = "60%";
        moon.style.transform = "translate(-50%, -50%) rotate(15deg)";
        moon.classList.add("hands-active");
      },
    },
  ];

  // GÜNCELLEME: hands-active sınıfını da sıfırla
  function resetAllStates() {
    const expressions = [
      "happy",
      "sad",
      "surprised",
      "angry",
      "wistful",
      "hands-active",
    ];
    sun.classList.remove(...expressions);
    moon.classList.remove(...expressions);
    sun.style.left = "20%";
    sun.style.top = "50%";
    sun.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
    sun.style.boxShadow = `0 0 50px var(--sun-color), 0 0 100px var(--sun-glow1), 0 0 150px var(--sun-glow2)`;
    sun.style.zIndex = "2";

    moon.style.left = "80%";
    moon.style.top = "50%";
    moon.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1)";
    moon.style.background = "var(--moon-color)";
    moon.style.boxShadow = "0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)";
    moon.style.zIndex = "2";

    world.style.left = "-100px";
    world.style.top = "50%";
    world.style.opacity = "0";
    world.style.zIndex = "10";
  }

  function populateStory() {
    const totalScenes = storyData.length;
    storyData.forEach((scene, index) => {
      const sceneEl = document.createElement("div");
      sceneEl.classList.add("story-scene");
      sceneEl.setAttribute("data-scene-index", index);

      const paragraph = document.createElement("p");
      paragraph.innerHTML = scene.text;
      sceneEl.appendChild(paragraph);

      const progressIndicator = document.createElement("div");
      progressIndicator.classList.add("scene-progress");
      progressIndicator.innerText = `${index + 1} / ${totalScenes}`;
      sceneEl.appendChild(progressIndicator);

      storyContainer.appendChild(sceneEl);
    });
  }

  const options = { root: null, rootMargin: "0px", threshold: 0.6 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeScene = entry.target;
        const sceneIndex = parseInt(
          activeScene.getAttribute("data-scene-index")
        );
        document
          .querySelectorAll(".story-scene")
          .forEach((el) => el.classList.remove("is-active"));
        activeScene.classList.add("is-active");
        resetAllStates();
        storyData[sceneIndex].action();
      }
    });
  }, options);

  document.addEventListener("mousemove", createCursorTrail);
  let isScrolling;
  window.addEventListener("scroll", () => {
    isScrolling = true;
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      isScrolling = false;
    }, 100);
  });

  window.addEventListener("load", () => {
    preloader.classList.add("hidden");
  });

  universe.addEventListener("click", (e) => {
    // .star sınıfını kaldırdığımız için artık sadece .memory-star kontrolü yeterli
    if (e.target.classList.contains("memory-star")) {
      memoryText.textContent = e.target.dataset.memory;
      memoryModal.classList.add("active");
    }
  });

  closeModal.addEventListener("click", () => {
    memoryModal.classList.remove("active");
  });

  memoryModal.addEventListener("click", (e) => {
    if (e.target.id === "memory-modal") {
      memoryModal.classList.remove("active");
    }
  });

  createTwinklingStars();
  setInterval(createShootingStar, 7000);
  populateStory();
  const scenes = document.querySelectorAll(".story-scene");
  scenes.forEach((scene) => observer.observe(scene));
  createFinalQuote();
});
// SİMLERİ OLUŞTURAN FONKSİYON
function createSneezeDust() {
  // Önce varsa eski tozları temizle
  document.querySelectorAll(".light-dust").forEach((el) => el.remove());

  const dustCount = 50; // Kaç tane sim olsun?
  // Güneş o sahnede nerede? (Scene 15'te left: 42%, top: 50% civarında olacak)
  const sunCenterX = 42;
  const sunCenterY = 50;

  for (let i = 0; i < dustCount; i++) {
    const dust = document.createElement("div");
    dust.classList.add("light-dust");

    // Güneşin etrafına rastgele dağıt
    // X ekseninde %30 ile %54 arası, Y ekseninde %40 ile %60 arası
    const randomX = sunCenterX + (Math.random() * 24 - 12);
    const randomY = sunCenterY + (Math.random() * 20 - 10);

    dust.style.left = `${randomX}%`;
    dust.style.top = `${randomY}%`;

    // Rastgele boyutlar (küçük ve büyük simler)
    const size = Math.random() * 4 + 2;
    dust.style.width = `${size}px`;
    dust.style.height = `${size}px`;

    // Hafifçe yanıp sönmeleri için gecikme
    dust.style.animationDelay = `${Math.random() * 0.5}s`;

    universe.appendChild(dust);
  }
}

// SİMLERİ DÜŞÜREN VE SİLEN FONKSİYON
function removeSneezeDust() {
  const dusts = document.querySelectorAll(".light-dust");
  dusts.forEach((dust) => {
    dust.classList.add("falling"); // CSS'teki düşme efektini tetikle
  });

  // 2 saniye sonra tamamen DOM'dan sil (performans için)
  setTimeout(() => {
    dusts.forEach((dust) => dust.remove());
  }, 2000);
}
