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

  function createTwinklingStars() {
    const starCount = 200;
    const memoryStars = [15, 65, 115, 165];
    const memories = [
      "Küçük Prens",
      "Uzay Macerası",
      "Kayan Yıldız",
      "Samanyolu",
    ];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const memoryIndex = memoryStars.indexOf(i);
      if (memoryIndex !== -1) {
        star.classList.add("memory-star");
        star.dataset.memory = memories[memoryIndex];
      } else {
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

  // Final sözü çocuklara uygun hale getirdik
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

  // HİKAYE VERİSİ GÜNCELLENDİ: DOSTLUK VE OYUN TEMASI
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
        moon.classList.add("wistful"); // Biraz düşünceli
      },
    },
    {
      text: `Güneş ise her yere yetişmeye çalışmaktan bazen yorulurmuş. Ay'ın o sakinliğini, sessizce süzülüşünü izler, "Ne güzel, o hiç terlemiyor," dermiş.`,
      action: () => {
        moon.classList.add("wistful");
      },
    },
    {
      text: `Bir gün Ay'ın canı çok sıkılmış. "Artık uzaktan bakmak istemiyorum," demiş. "Gidip Güneş ile saklambaç oynayacağım!"`,
      action: () => {
        moon.style.left = "78%";
        moon.classList.add("wistful");
      },
    },
    {
      text: `Böylece yörüngesinden yavaşça çıkıp, parmak uçlarında Güneş'e doğru yürümeye başlamış. Acaba Güneş onu oyuna kabul edecek miymiş?`,
      action: () => {
        moon.style.left = "75%";
      },
    },
    {
      text: `Ay yaklaştıkça heyecanlanmış. Kalbi güm güm atmaya başlamış. Gökyüzündeki diğer yıldızlar, "Hey Ay Dede nereye gidiyorsun?" diye fısıldaşmışlar.`,
      action: () => {
        moon.style.left = "72%";
        moon.classList.add("wistful");
      },
    },
    {
      text: `Güneş bir bakmış ki, en yakın arkadaşı ona doğru geliyor! Çok şaşırmış. "Ooo! Ay kardeş, gündüz vakti ne işin var burada?" diye sormuş.`,
      action: () => {
        sun.classList.add("surprised");
        moon.classList.add("wistful");
      },
    },
    {
      text: `Ay gülümsemiş. "Sıkıldım," demiş. "Seninle biraz yakalamaca oynamaya geldim!" Güneş bunu duyunca çok sevinmiş, ışıkları dans etmeye başlamış.`,
      action: () => {
        moon.style.left = "68%";
        moon.classList.add("happy");
      },
    },
    {
      text: `Böylece gökyüzünde büyük bir koşuşturmaca başlamış. Ay, Güneş'e doğru koştukça aralarındaki mesafe azalmış.`,
      action: () => {
        moon.style.left = "60%";
        moon.classList.add("happy");
      },
    },
    {
      text: `Güneş o kadar sıcakmış ki, Ay ona yaklaştıkça yanakları ısınmış, pespembe olmuş. Sanki utangaç bir çocuk gibi kızarmış.`,
      action: () => {
        moon.style.background = "#FFE4E1";
        moon.style.boxShadow = "0 0 20px #FFC0CB, 0 0 40px #FF69B4";
        moon.classList.add("happy");
      },
    },
    {
      text: `Güneş, Ay'ın bu haline kıkırdamış. "Dikkat et Ay kardeş, çok yaklaşırsan benim gibi yanarsın!" demiş şakayla. Ay ise, "Olsun, senin yanında ısınmak çok güzel," demiş.`,
      action: () => {
        sun.classList.add("surprised");
        moon.style.background = "#FFE4E1";
        moon.style.boxShadow = "0 0 20px #FFC0CB, 0 0 40px #FF69B4";
        moon.classList.add("happy");
      },
    },
    {
      text: `Artık o kadar yakınlarmış ki, gökyüzünde kocaman bir ışık topu gibi görünmüşler. İkisi de kıkır kıkır gülüyormuş.`,
      action: () => {
        sun.classList.remove("surprised");
        sun.classList.add("happy");
        moon.classList.add("happy");
        sun.style.left = "45%";
        moon.style.left = "55%";
      },
    },
    {
      text: `Ay: "Senin ışığın sayesinde ben de parlıyorum, teşekkür ederim Güneş!" demiş. Güneş: "Asıl ben teşekkür ederim, sen olmasan geceleri kim bekleyecek?" diye cevap vermiş.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `O sırada Güneş heyecandan hapşırmış ve elindeki ışık tozlarını yanlışlıkla etrafa saçmış.`,
      action: () => {
        sun.classList.add("surprised");
        moon.classList.add("happy");
      },
    },
    {
      text: `Ay kahkahalarla gülmüş: "Çok yaşa! Bak şimdi her yer simli oldu." Güneş'in sakarlığı bile oyuna neşe katmış.`,
      action: () => {
        moon.classList.add("happy");
        sun.classList.remove("surprised");
        sun.classList.add("happy");
        moon.style.transform = "translate(-50%, -50%) rotate(-15deg)";
      },
    },
    {
      text: `"Ben hep kusursuz parlamalıyım sanıyordum," demiş Güneş. Ay başını sallamış: "Hayır, bazen komik olmak en güzelidir."`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `İki arkadaş yan yana dururken, birbirlerinin farklı özelliklerini ne kadar çok sevdiklerini fark etmişler.`,
      action: () => {
        sun.style.left = "48%";
        moon.style.left = "52%";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Ay, "Seni yakalayacağım!" diyerek bir hamle daha yapmış. Gökyüzündeki en büyük ebelemece oyunu devam ediyormuş.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Güneş neşeyle bağırmış: "Beni yakalayamazsın kiii!" Ama Ay kararlıymış, adım adım ona doğru süzülmüş.`,
      action: () => {
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Ancak oyun o kadar hareketliymiş ki, bir an dengelerini kaybetmişler. Yerler karışmış!`,
      action: () => {
        sun.style.left = "30%";
        moon.style.left = "70%";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Ay bir an duraksamış. "Galiba biraz fazla uzaklaştık, yerimden oldum," diye düşünmüş.`,
      action: () => {
        sun.classList.add("wistful");
        moon.classList.add("wistful");
      },
    },
    {
      text: `Ama Güneş ona güven vermiş: "Merak etme, biz bir takımız. Nereye gidersen git, ışığım seninle."`,
      action: () => {
        sun.style.left = "40%";
        moon.style.left = "60%";
        sun.classList.add("happy");
        moon.classList.add("happy");
      },
    },
    {
      text: `Böylece anlamışlar ki, yan yana olmasalar bile kalpleri hep birlikte atıyor.`,
      action: () => {
        sun.style.left = "45%";
        moon.style.left = "55%";
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
      },
    },
    {
      text: `Ve hoop diye Güneş'in tam önüne atlamış! "Ce-eee!"`,
      action: () => {
        sun.classList.add("angry"); // Şaşkınlık tepkisi
        moon.classList.add("surprised");
        sun.style.left = "48%";
        moon.style.left = "52%";
        sun.style.transform = "translate(-50%, -50%) scale(1.1)";
      },
    },
    {
      text: `İşte tam o anda olanlar olmuş. Ay, Güneş'in tam önüne geçince Dünya'daki ışıklar kesilmiş! Buna "Güneş Tutulması" diyorlarmış.`,
      action: () => {
        sun.classList.add("sad");
        moon.classList.add("sad");
        sun.style.left = "25%";
        moon.style.left = "75%";
        world.style.left = "50%";
        world.style.opacity = "1";
      },
    },
    {
      text: `Dünya bir anda kararınca herkes şaşırmış. Güneş, "Hey Ay! Önümden çekil, çocuklar oyun oynayamıyor, her yer karanlık oldu!" demiş. Ay ise, "Eyvah! Ben sadece şaka yapmak istemiştim," diye üzülmüş.`,
      action: () => {
        sun.classList.add("sad");
        moon.classList.add("sad");
        sun.style.left = "25%";
        moon.style.left = "75%";
        world.style.left = "50%";
        world.style.opacity = "1";
        sun.style.boxShadow =
          "0 0 20px var(--sun-color), 0 0 40px var(--sun-glow1)";
        moon.style.boxShadow = "0 0 5px #444";
        moon.style.background = "#888";
      },
    },
    {
      text: `Güneş ışığını gönderemediği için üzgünmüş. Ay ise kendi rengini kaybetmiş, kapkara kalmış. Oyun biraz fazla ileri gitmiş.`,
      action: () => {
        // Durum devam ediyor
        sun.classList.add("sad");
        moon.classList.add("sad");
        sun.style.left = "25%";
        moon.style.left = "75%";
        world.style.left = "50%";
        world.style.opacity = "1";
        sun.style.boxShadow =
          "0 0 20px var(--sun-color), 0 0 40px var(--sun-glow1)";
        moon.style.boxShadow = "0 0 5px #444";
        moon.style.background = "#888";
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
        moon.style.background = "#f0f8ff";
        sun.classList.add("sad");
        moon.classList.add("sad");
      },
    },
    {
      text: `Ay yavaşça kenara çekilirken, kenarlarından parlak bir ışık hüzmesi yayılmış. Sanki "Her şey yolunda" diye göz kırpıyormuş.`,
      action: () => {
        moon.classList.remove("sad");
        moon.classList.add("happy");
        moon.style.boxShadow =
          "0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff";
        sun.classList.add("sad");
      },
    },
    {
      text: `Güneş, Ay'ın bu anlayışlı halini görünce çok mutlu olmuş. "Aferin benim akıllı arkadaşıma!" demiş.`,
      action: () => {
        sun.classList.remove("sad");
        sun.classList.add("wistful");
        moon.classList.add("happy");
      },
    },
    {
      text: `Ve nihayet Ay tamamen çekilince, Güneş'in ışığı tekrar dünyaya vurmuş! Kuşlar ötüşmeye, çiçekler açmaya başlamış.`,
      action: () => {
        sun.classList.add("surprised");
        moon.classList.add("happy");
        moon.style.boxShadow =
          "0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff";
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
        sun.style.left = "35%";
        moon.style.left = "65%";
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
        sun.style.left = "48%";
        sun.style.transform = "translate(-50%, -50%) rotate(-10deg)";
        moon.style.left = "52%";
        moon.style.transform = "translate(-50%, -50%) rotate(10deg)";
        moon.style.zIndex = "3";
      },
    },
  ];

  function resetAllStates() {
    const expressions = ["happy", "sad", "surprised", "angry", "wistful"];
    sun.classList.remove(...expressions);
    moon.classList.remove(...expressions);
    sun.style.left = "20%";
    sun.style.top = "50%";
    sun.style.transform = "translate(-50%, -50%) scale(1)";
    sun.style.boxShadow = `0 0 50px var(--sun-color), 0 0 100px var(--sun-glow1), 0 0 150px var(--sun-glow2)`;
    moon.style.left = "80%";
    moon.style.top = "50%";
    moon.style.transform = "translate(-50%, -50%) rotate(0deg)";
    moon.style.background = "var(--moon-color)";
    moon.style.boxShadow = "0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)";
    moon.style.zIndex = "2";
    world.style.left = "-100px";
    world.style.opacity = "0";
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
