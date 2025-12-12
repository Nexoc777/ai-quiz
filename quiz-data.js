// quiz-data.js

const ALL_QUIZ_DATA = [
    // Questions from Séquence 1: Introduction et fondements de l'Intelligence Artificielle (IA)
    {
        question_fr: "Selon la Séquence 1, quelle est l'une des définitions de l'Intelligence selon le Larousse ?",
        question_ar: "حسب التسلسل 1، ما هو أحد تعريفات الذكاء وفقًا لقاموس لاروس؟",
        options_fr: ["La capacité à dormir 8 heures par nuit.", "L'ensemble des fonctions mentales ayant pour objet la connaissance conceptuelle et rationnelle.", "L'aptitude à écrire de longs poèmes.", "La capacité à soulever des poids lourds."],
        options_ar: ["القدرة على النوم 8 ساعات ليلاً.", "مجموعة الوظائف العقلية التي هدفها المعرفة المفاهيمية والعقلانية.", "القدرة على كتابة قصائد طويلة.", "القدرة على رفع الأوزان الثقيلة."],
        answer: 1
    },
    {
        question_fr: "Qu'est-ce que l'Intelligence Artificielle (IA) selon la Séquence 1 ?",
        question_ar: "ما هو الذكاء الاصطناعي (IA) وفقًا للتسلسل 1؟",
        options_fr: ["Une simple base de données géante.", "La capacité de simuler les processus d'intelligence humaine par des machines.", "Un programme qui ne peut faire que des calculs simples.", "Un robot physique sans capacité logicielle."],
        options_ar: ["قاعدة بيانات عملاقة بسيطة.", "القدرة على محاكاة عمليات الذكاء البشري بواسطة الآلات.", "برنامج يمكنه إجراء عمليات حسابية بسيطة فقط.", "روبوت مادي بدون قدرة برمجية."],
        answer: 1
    },
    {
        question_fr: "Quelle est l'une des composantes de l'Intelligence citée dans la Séquence 1 ?",
        question_ar: "ما هو أحد مكونات الذكاء المذكورة في التسلسل 1؟",
        options_fr: ["La Navigation maritime.", "La Planification.", "La Cuisine gastronomique.", "La Vitesse de course."],
        options_ar: ["الملاحة البحرية.", "التخطيط (La Planification).", "الطبخ الفاخر.", "سرعة الجري."],
        answer: 1
    },
    {
        question_fr: "Comment l'IA dite 'Super-IA' est-elle définie dans la Séquence 1 ?",
        question_ar: "كيف يتم تعريف 'الذكاء الاصطناعي الفائق' (Super-IA) في التسلسل 1؟",
        options_fr: ["Une IA capable d'effectuer une seule tâche spécifique.", "Une IA qui égale l'intelligence humaine générale.", "Une IA qui dépasse largement l'intelligence humaine dans tous les domaines.", "Une IA uniquement capable d'apprendre par la répétition."],
        options_ar: ["ذكاء اصطناعي قادر على أداء مهمة محددة واحدة.", "ذكاء اصطناعي يعادل الذكاء البشري العام.", "ذكاء اصطناعي يتجاوز الذكاء البشري بكثير في جميع المجالات.", "ذكاء اصطناعي قادر فقط على التعلم عن طريق التكرار."],
        answer: 2
    },
    {
        question_fr: "Lequel des éléments suivants est un inconvénient de l'IA mentionné dans la Séquence 1 ?",
        question_ar: "أي من العناصر التالية يمثل عيبًا للذكاء الاصطناعي مذكورًا في التسلسل 1؟",
        options_fr: ["L'amélioration de la qualité de vie.", "Le biais et la discrimination algorithmique.", "La stimulation de l'innovation.", "L'automatisation des tâches répétitives."],
        options_ar: ["تحسين جودة الحياة.", "الانحياز والتمييز الخوارزمي.", "تحفيز الابتكار.", "أتمتة المهام المتكررة."],
        answer: 1
    },
    {
        question_fr: "D'après la Séquence 1, qu'est-ce que l'intelligence émotionnelle (Daniel Goleman) ?",
        question_ar: "وفقًا للتسلسل 1، ما هو الذكاء العاطفي (دانييل جولمان)؟",
        options_fr: ["La capacité de mémoriser les formules mathématiques complexes.", "La capacité de reconnaître, de comprendre et de gérer ses propres émotions et celles des autres.", "L'aptitude à construire des robots sophistiqués.", "La rapidité d'exécution des tâches informatiques."],
        options_ar: ["القدرة على حفظ الصيغ الرياضية المعقدة.", "القدرة على التعرف على وفهم وإدارة العواطف الخاصة والغير.", "القدرة على بناء روبوتات متطورة.", "سرعة تنفيذ المهام الحاسوبية."],
        answer: 1
    },
    {
        question_fr: "Selon la Séquence 1, une limite de l'IA est son manque de...?",
        question_ar: "وفقًا للتسلسل 1، أحد قيود الذكاء الاصطناعي هو افتقاره إلى...؟",
        options_fr: ["...capacité de calcul.", "...dépendance aux données.", "...compréhension humaine.", "...accès à internet."],
        options_ar: ["...القدرة على الحساب.", "...الاعتماد على البيانات.", "...الفهم البشري.", "...الوصول إلى الإنترنت."],
        answer: 2
    },
    {
        question_fr: "Quel terme décrit l'IA qui est 'capable d'effectuer une seule tâche spécifique' ?",
        question_ar: "ما هو المصطلح الذي يصف الذكاء الاصطناعي القادر على 'أداء مهمة محددة واحدة'؟",
        options_fr: ["Narrow AI (ou IA faible).", "General AI (ou IA forte).", "Super AI.", "IA générative."],
        options_ar: ["الذكاء الاصطناعي الضيق (Narrow AI).", "الذكاء الاصطناعي العام (General AI).", "الذكاء الاصطناعي الفائق (Super AI).", "الذكاء الاصطناعي التوليدي."],
        answer: 0
    },
    {
        question_fr: "Quelle est l'une des utilités de l'IA dans la vie quotidienne, selon la Séquence 1 ?",
        question_ar: "ما هي إحدى فوائد الذكاء الاصطناعي في الحياة اليومية، حسب التسلسل 1؟",
        options_fr: ["La création de tempêtes tropicales.", "L'aide à la prise de décision dans de nombreux domaines.", "La suppression de tous les emplois.", "L'invention d'une nouvelle langue."],
        options_ar: ["خلق العواصف الاستوائية.", "المساعدة في اتخاذ القرارات في العديد من المجالات.", "إلغاء جميع الوظائف.", "اختراع لغة جديدة."],
        answer: 1
    },
    {
        question_fr: "Laquelle de ces affirmations sur l'IA est une préoccupation éthique/sociétale mentionnée dans la Séquence 1 ?",
        question_ar: "أي من هذه العبارات حول الذكاء الاصطناعي هي مصدر قلق أخلاقي/اجتماعي مذكور في التسلسل 1؟",
        options_fr: ["La nécessité d'avoir des écrans de meilleure résolution.", "Le risque de dépendance cognitive et de perte d'esprit critique.", "Le manque de modèles de langage bilingues.", "La vitesse de calcul trop lente."],
        options_ar: ["الحاجة إلى شاشات ذات دقة أعلى.", "خطر الاعتماد المعرفي وفقدان التفكير النقدي.", "نقص نماذج اللغة ثنائية اللغة.", "سرعة الحساب البطيئة جداً."],
        answer: 1
    },
    {
        question_fr: "La 'capacité de saisir une chose par la pensée' est une définition de... (Séquence 1)",
        question_ar: "القدرة على إدراك شيء بالفكر' هي تعريف لـ... (التسلسل 1)",
        options_fr: ["La Mémorisation.", "La Compréhension.", "L'Intelligence.", "Le Réflexe."],
        options_ar: ["الحفظ.", "الفهم.", "الذكاء.", "رد الفعل."],
        answer: 2
    },
    {
        question_fr: "Quel facteur n'est PAS mentionné comme alimentant l'essor de l'IA dans les années 2020 (Séquence 1) ?",
        question_ar: "ما هو العامل الذي لم يذكر كمحرك لصعود الذكاء الاصطناعي في سنوات 2020 (التسلسل 1)؟",
        options_fr: ["Big Data.", "GPU (processeurs graphiques).", "L'invention de l'imprimerie.", "Cloud computing."],
        options_ar: ["البيانات الضخمة (Big Data).", "وحدات معالجة الرسوميات (GPU).", "اختراع المطبعة.", "الحوسبة السحابية (Cloud computing)."],
        answer: 2
    },
    {
        question_fr: "L'IA générale (ou IA forte) se caractérise par... (Séquence 1)",
        question_ar: "يتميز الذكاء الاصطناعي العام (أو الذكاء الاصطناعي القوي) بـ... (التسلسل 1)",
        options_fr: ["Sa performance uniquement dans les jeux vidéo.", "Sa capacité à raisonner, résoudre des problèmes et apprendre comme un humain.", "Sa limitation à la traduction de textes.", "Son incapacité à s'adapter à de nouvelles tâches."],
        options_ar: ["أدائه فقط في ألعاب الفيديو.", "قدرته على التفكير وحل المشكلات والتعلم كإنسان.", "قصره على ترجمة النصوص.", "عدم قدرته على التكيف مع المهام الجديدة."],
        answer: 1
    },
    {
        question_fr: "Selon la Séquence 1, qu'est-ce qui est menacé par l'analyse d'une immense quantité d'informations personnelles par l'IA ?",
        question_ar: "حسب التسلسل 1، ما الذي يهدده تحليل الذكاء الاصطناعي لكمية هائلة من المعلومات الشخصية؟",
        options_fr: ["Le droit à la vie privée.", "L'accès aux bases de données publiques.", "La température globale.", "L'innovation technologique."],
        options_ar: ["الحق في الحياة الخاصة.", "الوصول إلى قواعد البيانات العامة.", "درجة الحرارة العالمية.", "الابتكار التكنولوجي."],
        answer: 0
    },
    {
        question_fr: "Dans quel domaine l'IA offre-t-elle des opportunités majeures selon la Séquence 1 ?",
        question_ar: "في أي مجال يقدم الذكاء الاصطناعي فرصًا كبيرة حسب التسلسل 1؟",
        options_fr: ["L'amélioration de la vie quotidienne.", "La création de problèmes juridiques insolubles.", "La destruction des écosystèmes.", "L'augmentation des erreurs de calcul."],
        options_ar: ["تحسين الحياة اليومية.", "خلق مشاكل قانونية لا يمكن حلها.", "تدمير النظم البيئية.", "زيادة أخطاء الحساب."],
        answer: 0
    },
    {
        question_fr: "Le raisonnement est défini dans la Séquence 1 comme :",
        question_ar: "يُعرّف الاستدلال (Raisonnement) في التسلسل 1 بأنه:",
        options_fr: ["La capacité de courir rapidement.", "La capacité de tirer des conclusions logiques à partir d'informations.", "La capacité de mémoriser sans comprendre.", "La capacité à soulever des poids."],
        options_ar: ["القدرة على الجري بسرعة.", "القدرة على استخلاص استنتاجات منطقية من المعلومات.", "القدرة على الحفظ دون فهم.", "القدرة على رفع الأوزان."],
        answer: 1
    },
    {
        question_fr: "Un des risques de l'IA mentionné est le risque de 'Responsabilité et confiance', qui pose la question de :",
        question_ar: "أحد مخاطر الذكاء الاصطناعي المذكورة هو خطر 'المسؤولية والثقة'، الذي يطرح سؤال:",
        options_fr: ["Qui est responsable quand une erreur se produit (utilisateur, concepteur, algorithme) ?", "Comment former plus de data scientists ?", "Quel est le meilleur langage de programmation ?", "Faut-il utiliser plus de robots ?"],
        options_ar: ["من هو المسؤول عند حدوث خطأ (المستخدم، المصمم، الخوارزمية)؟", "كيف ندرب المزيد من علماء البيانات؟", "ما هي أفضل لغة برمجة؟", "هل يجب استخدام المزيد من الروبوتات؟"],
        answer: 0
    },

    // Questions from Sequence 2: Les données, les algorithmes et le Machine Learning
    {
        question_fr: "D'après la Séquence 2, d'où proviennent principalement les données utilisées par l'IA ?",
        question_ar: "وفقًا للتسلسل 2، ما هو المصدر الرئيسي للبيانات التي يستخدمها الذكاء الاصطناعي؟",
        options_fr: ["Exclusivement des livres de la bibliothèque nationale.", "De nous, les utilisateurs, des appareils (capteurs) et des bases publiques.", "Uniquement des serveurs secrets gouvernementaux.", "Seulement des dessins faits à la main."],
        options_ar: ["حصريًا من كتب المكتبة الوطنية.", "منا، نحن المستخدمون، ومن الأجهزة (أجهزة الاستشعار) والقواعد العامة.", "فقط من الخوادم الحكومية السرية.", "فقط من الرسوم المرسومة باليد."],
        answer: 1
    },
    {
        question_fr: "Qu'est-ce qu'une donnée selon la Séquence 2 ?",
        question_ar: "ما هي البيانات (une donnée) حسب التسلسل 2؟",
        options_fr: ["Uniquement un texte écrit.", "Uniquement une image numérique.", "Une information brute que l'on peut enregistrer et traiter à l'aide d'un ordinateur.", "Un concept philosophique abstrait."],
        options_ar: ["نص مكتوب فقط.", "صورة رقمية فقط.", "معلومة خام يمكن تسجيلها ومعالجتها بواسطة جهاز حاسوب.", "مفهوم فلسفي مجرد."],
        answer: 2
    },
    {
        question_fr: "Selon la Séquence 2, pourquoi les données sont-elles si importantes pour l'IA ?",
        question_ar: "وفقًا للتسلسل 2، لماذا تعد البيانات بالغة الأهمية للذكاء الاصطناعي؟",
        options_fr: ["Elles permettent à l'IA d'apprendre par observation.", "Elles déterminent la couleur de l'interface utilisateur.", "Elles décident du prix des logiciels.", "Elles garantissent que l'IA ne fait jamais d'erreurs."],
        options_ar: ["إنها تمكن الذكاء الاصطناعي من التعلم عن طريق الملاحظة.", "إنها تحدد لون واجهة المستخدم.", "إنها تقرر سعر البرامج.", "إنها تضمن أن الذكاء الاصطناعي لا يرتكب أخطاء أبدًا."],
        answer: 0
    },
    {
        question_fr: "En plus d'être en grand nombre, quelles qualités doivent avoir les données pour être efficaces pour l'IA (Séquence 2) ?",
        question_ar: "بالإضافة إلى كونها بكميات كبيرة، ما هي الصفات التي يجب أن تتمتع بها البيانات لتكون فعالة للذكاء الاصطناعي (التسلسل 2)؟",
        options_fr: ["Être chères et rares.", "Être uniquement textuelles.", "Être fiables, pertinentes et variées.", "Être stockées sur un seul serveur."],
        options_ar: ["أن تكون باهظة الثمن ونادرة.", "أن تكون نصية فقط.", "أن تكون موثوقة وذات صلة ومتنوعة.", "أن يتم تخزينها على خادم واحد."],
        answer: 2
    },
    {
        question_fr: "Qu'est-ce qu'un algorithme dans le contexte de l'IA (Séquence 2) ?",
        question_ar: "ما هي الخوارزمية في سياق الذكاء الاصطناعي (التسلسل 2)؟",
        options_fr: ["Un type de café très rare.", "Un ensemble d'instructions précises et organisées permettant de résoudre un problème.", "Un nouveau modèle de smartphone.", "Le nom d'un célèbre chercheur en IA."],
        options_ar: ["نوع نادر جدًا من القهوة.", "مجموعة من التعليمات الدقيقة والمنظمة التي تسمح بحل مشكلة.", "نموذج جديد للهاتف الذكي.", "اسم باحث مشهور في الذكاء الاصطناعي."],
        answer: 1
    },
    {
        question_fr: "Quelle est la principale différence entre l'approche 'Symbolique' et l'approche 'Statistique' de l'IA (Séquence 2) ?",
        question_ar: "ما هو الاختلاف الرئيسي بين النهج 'الرمزي' و النهج 'الإحصائي' للذكاء الاصطناعي (التسلسل 2)؟",
        options_fr: ["L'approche Symbolique utilise des règles données par les humains, tandis que l'approche Statistique analyse de grands ensembles de données.", "L'approche Symbolique est plus rapide que la Statistique.", "La Statistique utilise des réseaux de neurones, contrairement à la Symbolique.", "Il n'y a aucune différence notable."],
        options_ar: ["النهج الرمزي يستخدم قواعد يحددها البشر، بينما النهج الإحصائي يحلل مجموعات كبيرة من البيانات.", "النهج الرمزي أسرع من الإحصائي.", "النهج الإحصائي يستخدم شبكات عصبية، على عكس الرمزي.", "لا يوجد فرق ملحوظ."],
        answer: 0
    },
    {
        question_fr: "Qu'est-ce que le 'Machine Learning' selon la Séquence 2 ?",
        question_ar: "ما هو 'التعلم الآلي' (Machine Learning) حسب التسلسل 2؟",
        options_fr: ["Un processus où la machine est programmée pour obéir sans apprendre.", "La capacité d'un ordinateur à apprendre sans avoir été explicitement programmé pour chaque tâche.", "Uniquement l'utilisation d'une souris et d'un clavier.", "L'étude des machines à vapeur."],
        options_ar: ["عملية تتم فيها برمجة الآلة للطاعة دون تعلم.", "قدرة الحاسوب على التعلم دون برمجته صراحة لكل مهمة.", "استخدام الفأرة ولوحة المفاتيح فقط.", "دراسة الآلات البخارية."],
        answer: 1
    },
    {
        question_fr: "Comment le Machine Learning 'supervisé' est-il décrit (Séquence 2) ?",
        question_ar: "كيف يُوصف التعلم الآلي 'المُوجَّه' (supervisé) (التسلسل 2)؟",
        options_fr: ["La machine apprend sans aucune donnée.", "La machine apprend à partir de données qui sont étiquetées (ex: 'chat' ou 'chien').", "La machine ne peut qu'exécuter des commandes vocales.", "La machine apprend en jouant à des jeux vidéo."],
        options_ar: ["الآلة تتعلم بدون أي بيانات.", "الآلة تتعلم من بيانات مُعلَّمة (مثل: 'قطة' أو 'كلب').", "الآلة لا تستطيع سوى تنفيذ الأوامر الصوتية.", "الآلة تتعلم من خلال ممارسة ألعاب الفيديو."],
        answer: 1
    },
    {
        question_fr: "Quelle est la caractéristique principale du 'Deep Learning' (Séquence 2) ?",
        question_ar: "ما هي السمة الرئيسية 'للتعلم العميق' (Deep Learning) (التسلسل 2)؟",
        options_fr: ["Il utilise uniquement des règles logiques simples.", "Il repose sur des réseaux de neurones artificiels profonds pour apprendre des motifs complexes.", "Il ne nécessite qu'une seule couche de traitement.", "Il est plus lent et moins précis que le Machine Learning classique."],
        options_ar: ["يستخدم فقط قواعد منطقية بسيطة.", "يعتمد على شبكات عصبية اصطناعية عميقة لتعلم الأنماط المعقدة.", "يتطلب طبقة معالجة واحدة فقط.", "هو أبطأ وأقل دقة من التعلم الآلي الكلاسيكي."],
        answer: 1
    },
    {
        question_fr: "Dans le Machine Learning 'non-supervisé', les données utilisées sont... (Séquence 2)",
        question_ar: "في التعلم الآلي 'غير الموجَّه' (non-supervisé)، تكون البيانات المستخدمة... (التسلسل 2)",
        options_fr: ["...étiquetées avec la bonne réponse.", "...non-étiquetées, et l'IA doit trouver des structures cachées.", "...toutes inventées par l'IA.", "...uniquement des sons."],
        options_ar: ["...مُعلَّمة بالإجابة الصحيحة.", "...غير مُعلَّمة، ويجب على الذكاء الاصطناعي العثور على هياكل مخفية.", "...جميعها مُختلَقة من قبل الذكاء الاصطناعي.", "...أصوات فقط."],
        answer: 1
    },
    {
        question_fr: "Quel est l'un des types de données listés dans la Séquence 2 ?",
        question_ar: "ما هو أحد أنواع البيانات المذكورة في التسلسل 2؟",
        options_fr: ["Un nuage.", "Un chiffre (une température, une statistique).", "Une émotion.", "Un fantôme."],
        options_ar: ["سحابة.", "رقم (درجة حرارة، إحصائية).", "عاطفة.", "شبح."],
        answer: 1
    },
    {
        question_fr: "Une limite du raisonnement artificiel citée dans la Séquence 2 est que l'IA...",
        question_ar: "أحد قيود الاستدلال الاصطناعي المذكورة في التسلسل 2 هو أن الذكاء الاصطناعي...",
        options_fr: ["...comprend toujours le contexte émotionnel.", "...ne possède pas de conscience.", "...peut remplacer la réflexion humaine à 100%.", "...est capable de faire des choix moraux complexes."],
        options_ar: ["...يفهم دائمًا السياق العاطفي.", "...لا يمتلك وعيًا.", "...يمكن أن يحل محل التفكير البشري بنسبة 100%.", "...قادر على اتخاذ خيارات أخلاقية معقدة."],
        answer: 1
    },
    {
        question_fr: "Que signifie le fait que les décisions d'une IA sont 'opaques' (Séquence 2) ?",
        question_ar: "ماذا يعني أن قرارات الذكاء الاصطناعي 'غامضة' (opaques) (التسلسل 2)؟",
        options_fr: ["Elles sont secrètes et ne peuvent être consultées par personne.", "On ne sait pas toujours comment l'IA est arrivée à sa décision.", "Elles sont visibles uniquement la nuit.", "Elles sont toujours en couleur."],
        options_ar: ["إنها سرية ولا يمكن لأي شخص الاطلاع عليها.", "لا نعرف دائمًا كيف توصل الذكاء الاصطناعي إلى قراره.", "إنها مرئية فقط في الليل.", "إنها دائماً ملونة."],
        answer: 1
    },
    {
        question_fr: "Quel type d'approche historique repose sur les 'Réseaux de neurones artificiels' (Séquence 2) ?",
        question_ar: "أي نوع من النهج التاريخي يعتمد على 'الشبكات العصبية الاصطناعية' (التسلسل 2)؟",
        options_fr: ["L'approche Symbolique.", "L'approche Connexionniste.", "L'approche Logistique.", "L'approche Empirique."],
        options_ar: ["النهج الرمزي (Symbolique).", "النهج الاتصالية (Connexionniste).", "النهج اللوجستي.", "النهج التجريبي."],
        answer: 1
    },
    {
        question_fr: "Comment les réseaux de neurones sont-ils inspirés (Séquence 2) ?",
        question_ar: "كيف تستوحي الشبكات العصبية إلهامها (التسلسل 2)؟",
        options_fr: ["Du fonctionnement des moteurs thermiques.", "Du cerveau humain.", "Des mécanismes d'horlogerie.", "Des mouvements des planètes."],
        options_ar: ["من عمل المحركات الحرارية.", "من الدماغ البشري.", "من آليات صناعة الساعات.", "من حركات الكواكب."],
        answer: 1
    },
    {
        question_fr: "Dans le Deep Learning, qu'est-ce que l'apprentissage 'hiérarchique' (Séquence 2) ?",
        question_ar: "في التعلم العميق، ما هو التعلم 'الهرمي' (hiérarchique) (التسلسل 2)؟",
        options_fr: ["La machine apprend uniquement par l'erreur.", "La machine apprend étape par étape, des formes simples aux éléments complexes.", "La machine apprend une seule tâche à la fois.", "La machine apprend uniquement en lisant du texte."],
        options_ar: ["تتعلم الآلة من خلال الخطأ فقط.", "تتعلم الآلة خطوة بخطوة، من الأشكال البسيطة إلى العناصر المعقدة.", "تتعلم الآلة مهمة واحدة فقط في كل مرة.", "تتعلم الآلة عن طريق قراءة النص فقط."],
        answer: 1
    },
    {
        question_fr: "Quel est l'un des critères pour un 'bon ensemble de données' selon la Séquence 2 ?",
        question_ar: "ما هو أحد معايير 'مجموعة البيانات الجيدة' حسب التسلسل 2؟",
        options_fr: ["Être très ancien.", "Être pertinent (correspondre au sujet étudié).", "Être incomplet.", "Être uniquement en langue anglaise."],
        options_ar: ["أن تكون قديمة جداً.", "أن تكون ذات صلة (تتوافق مع الموضوع المدروس).", "أن تكون غير كاملة.", "أن تكون باللغة الإنجليزية فقط."],
        answer: 1
    },

    // Questions from Sequence 3: L'Intelligence Artificielle Générative (Gen AI)
    {
        question_fr: "Qu'est-ce que l'IA générative (Gen AI) selon la Séquence 3 ?",
        question_ar: "ما هو الذكاء الاصطناعي التوليدي (Gen AI) حسب التسلسل 3؟",
        options_fr: ["Une forme d'IA capable de produire du contenu nouveau (texte, image, son, code).", "Une IA qui ne fait que classer des données existantes.", "Un simple moteur de recherche.", "Un programme qui sert uniquement à corriger l'orthographe."],
        options_ar: ["شكل من أشكال الذكاء الاصطناعي القادر على إنتاج محتوى جديد (نص، صورة، صوت، شفرة برمجية).", "ذكاء اصطناعي يكتفي بتصنيف البيانات الموجودة.", "محرك بحث بسيط.", "برنامج يستخدم فقط لتصحيح الأخطاء الإملائية."],
        answer: 0
    },
    {
        question_fr: "Quel est l'objectif principal de l'IA générative, contrairement au Deep Learning classique (Séquence 3) ?",
        question_ar: "ما هو الهدف الرئيسي للذكاء الاصطناعي التوليدي، على عكس التعلم العميق الكلاسيكي (التسلسل 3)؟",
        options_fr: ["Uniquement reconnaître des visages.", "Créer, inventer, générer du nouveau contenu.", "Calculer des moyennes statistiques.", "Trier des fichiers par date."],
        options_ar: ["التعرف على الوجوه فقط.", "الإبداع، الاختراع، وتوليد محتوى جديد.", "حساب المتوسطات الإحصائية.", "فرز الملفات حسب التاريخ."],
        answer: 1
    },
    {
        question_fr: "Sur quel mécanisme l'IA générative s'appuie-t-elle pour produire du texte (Séquence 3) ?",
        question_ar: "على أي آلية يعتمد الذكاء الاصطناعي التوليدي لإنتاج النصوص (التسلسل 3)؟",
        options_fr: ["La lecture de pensées humaines.", "La prédiction du mot le plus probable suivant dans une séquence.", "L'utilisation de règles grammaticales rigides.", "L'enregistrement d'une voix humaine."],
        options_ar: ["قراءة الأفكار البشرية.", "التنبؤ بالكلمة الأكثر احتمالاً التالية في تسلسل.", "استخدام قواعد نحوية صارمة.", "تسجيل صوت بشري."],
        answer: 1
    },
    {
        question_fr: "Quel exemple d'outil d'IA générative est mentionné dans la Séquence 3 ?",
        question_ar: "ما هو مثال أداة الذكاء الاصطناعي التوليدي المذكور في التسلسل 3؟",
        options_fr: ["Le microscope.", "ChatGPT ou Gemini.", "Le tableur Excel.", "La calculatrice de poche."],
        options_ar: ["المجهر.", "ChatGPT أو Gemini.", "برنامج جداول البيانات (Excel).", "الآلة الحاسبة الجيبية."],
        answer: 1
    },
    {
        question_fr: "Quel est l'un des risques d'usage de l'IA générative mentionné dans la Séquence 3 ?",
        question_ar: "ما هو أحد مخاطر استخدام الذكاء الاصطناعي التوليدي المذكورة في التسلسل 3؟",
        options_fr: ["Le risque de plagiat (reprendre un texte généré sans mention).", "Le manque de rapidité de la réponse.", "La difficulté à trouver des sujets.", "Le coût très bas d'utilisation."],
        options_ar: ["خطر الانتحال (أخذ نص مُوَلَّد دون ذكر الأداة).", "نقص سرعة الاستجابة.", "صعوبة إيجاد المواضيع.", "التكلفة المنخفضة جداً للاستخدام."],
        answer: 0
    },
    {
        question_fr: "L'un des avantages de l'IA générative pour l'étudiant est l'aide à la...",
        question_ar: "إحدى مزايا الذكاء الاصطناعي التوليدي للطالب هي المساعدة في...",
        options_fr: ["...construction d'un mur en briques.", "...compréhension (reformulation de concepts complexes).", "...mémorisation de numéros de téléphone.", "...préparation du petit-déjeuner."],
        options_ar: ["...بناء جدار من الطوب.", "...الفهم (إعادة صياغة المفاهيم المعقدة).", "...حفظ أرقام الهواتف.", "...إعداد وجبة الإفطار."],
        answer: 1
    },
    {
        question_fr: "Pourquoi l'IA générative peut-elle donner des 'erreurs et imprécisions' (Séquence 3) ?",
        question_ar: "لماذا يمكن للذكاء الاصطناعي التوليدي أن يعطي 'أخطاء وعدم دقة' (التسلسل 3)؟",
        options_fr: ["Parce qu'elle n'est pas connectée à internet.", "Parce que ses productions reposent sur des associations statistiques et non une réflexion logique.", "Parce qu'elle est trop lente.", "Parce qu'elle est toujours mise à jour."],
        options_ar: ["لأنها غير متصلة بالإنترنت.", "لأن إنتاجاتها تعتمد على الارتباطات الإحصائية وليس على تفكير منطقي.", "لأنها بطيئة جداً.", "لأنها يتم تحديثها دائماً."],
        answer: 1
    },
    {
        question_fr: "Quel type de contenu l'IA générative est-elle capable de produire (Séquence 3) ?",
        question_ar: "ما هو نوع المحتوى الذي يستطيع الذكاء الاصطناعي التوليدي إنتاجه (التسلسل 3)؟",
        options_fr: ["Des fossiles archéologiques.", "Des images, des sons, des vidéos, du texte ou du code.", "Des machines à voyager dans le temps.", "Des lois physiques inédites."],
        options_ar: ["حفريات أثرية.", "صور، أصوات، فيديوهات، نصوص، أو شفرات برمجية.", "آلات للسفر عبر الزمن.", "قوانين فيزيائية جديدة."],
        answer: 1
    },
    {
        question_fr: "Selon la Séquence 3, qu'est-ce qu'un 'Modèle de diffusion' (Diffusion Model) ?",
        question_ar: "حسب التسلسل 3، ما هو 'نموذج الانتشار' (Diffusion Model)؟",
        options_fr: ["Un modèle de langage comme ChatGPT.", "Un modèle permettant de générer des images et vidéos ultra-réalistes.", "Un modèle pour la création de musique classique.", "Un modèle pour la gestion de bases de données."],
        options_ar: ["نموذج لغوي مثل ChatGPT.", "نموذج يسمح بتوليد صور وفيديوهات واقعية جداً.", "نموذج لإنشاء الموسيقى الكلاسيكية.", "نموذج لإدارة قواعد البيانات."],
        answer: 1
    },
    {
        question_fr: "L'usage excessif de l'IA peut réduire... (Séquence 3)",
        question_ar: "الاستخدام المفرط للذكاء الاصطناعي قد يقلل من... (التسلسل 3)",
        options_fr: ["...la capacité d'analyse et de rédaction autonome.", "...la quantité de données disponibles sur internet.", "...le nombre de mots par phrase.", "...la qualité des images générées."],
        options_ar: ["...القدرة على التحليل والكتابة المستقلة.", "...كمية البيانات المتاحة على الإنترنت.", "...عدد الكلمات في الجملة.", "...جودة الصور المولدة."],
        answer: 0
    },
    {
        question_fr: "Quel rôle le Prompt joue-t-il dans l'IA générative (Séquence 3) ?",
        question_ar: "ما هو الدور الذي يلعبه 'الطلب' (Prompt) في الذكاء الاصطناعي التوليدي (التسلسل 3)؟",
        options_fr: ["Il sert uniquement à sauvegarder les fichiers.", "C'est la consigne donnée par l'utilisateur pour générer du contenu.", "C'est le résultat final produit par l'IA.", "C'est le nom du créateur de l'IA."],
        options_ar: ["يستخدم فقط لحفظ الملفات.", "هو التعليمات التي يعطيها المستخدم لتوليد المحتوى.", "هو النتيجة النهائية التي ينتجها الذكاء الاصطناعي.", "هو اسم مبتكر الذكاء الاصطناعي."],
        answer: 1
    },
    {
        question_fr: "Quel type de modèle est utilisé pour la traduction et la rédaction (Séquence 3) ?",
        question_ar: "ما هو نوع النموذج المستخدم للترجمة والكتابة (التسلسل 3)؟",
        options_fr: ["Modèle de diffusion.", "Modèle de langage (LLM).", "Modèle quantique.", "Modèle de tri."],
        options_ar: ["نموذج الانتشار.", "نموذج لغوي كبير (LLM).", "نموذج كمي.", "نموذج الفرز."],
        answer: 1
    },
    {
        question_fr: "Un des risques d'usage mentionné est 'l'absence de raisonnement', car les productions de l'IA reposent sur...",
        question_ar: "أحد مخاطر الاستخدام المذكورة هو 'غياب التفكير'، لأن إنتاجات الذكاء الاصطناعي تعتمد على...",
        options_fr: ["...une réflexion critique humaine.", "...des associations statistiques.", "...des règles de logique pure.", "...des émotions complexes."],
        options_ar: ["...تفكير نقدي بشري.", "...الارتباطات الإحصائية.", "...قواعد منطقية بحتة.", "...عواطف معقدة."],
        answer: 1
    },
    {
        question_fr: "L'IA générative fait partie de quel champ plus large (Séquence 3) ?",
        question_ar: "الذكاء الاصطناعي التوليدي هو جزء من أي مجال أوسع (التسلسل 3)؟",
        options_fr: ["La biologie marine.", "L'Intelligence Artificielle.", "L'architecture traditionnelle.", "La géographie physique."],
        options_ar: ["البيولوجيا البحرية.", "الذكاء الاصطناعي.", "الهندسة المعمارية التقليدية.", "الجغرافيا الطبيعية."],
        answer: 1
    },
    {
        question_fr: "La transparence quant à l'usage de l'IA est une exigence académique pour éviter quel risque (Séquence 3) ?",
        question_ar: "الشفافية بشأن استخدام الذكاء الاصطناعي هي مطلب أكاديمي لتجنب أي خطر (التسلسل 3)؟",
        options_fr: ["Le risque de panne électrique.", "Le risque de plagiat.", "Le risque de se perdre dans la forêt.", "Le risque de pluie."],
        options_ar: ["خطر انقطاع الكهرباء.", "خطر الانتحال (Plagiat).", "خطر الضياع في الغابة.", "خطر المطر."],
        answer: 1
    },
    {
        question_fr: "Quel avantage de l'IA générative est de 'Stimulation de la créativité' (Séquence 3) ?",
        question_ar: "ما هي ميزة الذكاء الاصطناعي التوليدي التي هي 'تحفيز الإبداع' (التسلسل 3)؟",
        options_fr: ["Elle propose des idées et favorise la recherche de solutions originales.", "Elle écrit le texte final sans intervention.", "Elle imprime le document automatiquement.", "Elle corrige les fautes de frappe de l'utilisateur."],
        options_ar: ["إنها تقترح أفكارًا وتشجع على البحث عن حلول أصلية.", "إنها تكتب النص النهائي دون تدخل.", "إنها تطبع الوثيقة تلقائياً.", "إنها تصحح أخطاء الطباعة للمستخدم."],
        answer: 0
    },
    {
        question_fr: "Quel terme correspond à l'apprentissage des structures complexes avec des réseaux de neurones (Séquence 3) ?",
        question_ar: "ما هو المصطلح الذي يتوافق مع تعلم الهياكل المعقدة باستخدام الشبكات العصبية (التسلسل 3)؟",
        options_fr: ["Machine Learning.", "Deep Learning.", "Intelligence Artificielle.", "IA Générative."],
        options_ar: ["التعلم الآلي (Machine Learning).", "التعلم العميق (Deep Learning).", "الذكاء الاصطناعي (Intelligence Artificielle).", "الذكاء الاصطناعي التوليدي."],
        answer: 1
    },

    // Questions from Sequence 4: Éthique et usage responsable
    {
        question_fr: "D'où vient le mot 'éthique' et que signifie-t-il (Séquence 4) ?",
        question_ar: "من أين تأتي كلمة 'أخلاق' (éthique) وماذا تعني (التسلسل 4)؟",
        options_fr: ["Du latin 'lex', signifiant 'loi'.", "Du grec 'êthos', signifiant 'manière d'être' ou 'façon d'agir'.", "De l'anglais 'data', signifiant 'données'.", "Du français 'règle', signifiant 'prescription'." ],
        options_ar: ["من اللاتينية 'lex'، بمعنى 'قانون'.", "من اليونانية 'êthos'، بمعنى 'طريقة وجود' أو 'طريقة تصرف'.", "من الإنجليزية 'data'، بمعنى 'بيانات'.", "من الفرنسية 'règle'، بمعنى 'وصفة'." ],
        answer: 1
    },
    {
        question_fr: "L'éthique est la réflexion qui nous aide à décider ce qui est... (Séquence 4)",
        question_ar: "الأخلاق هي التفكير الذي يساعدنا في تحديد ما هو... (التسلسل 4)",
        options_fr: ["...rapide, efficace et bon marché.", "...juste, responsable et respectueux des personnes.", "...difficile, rare et compliqué.", "...esthétique et parfait."],
        options_ar: ["...سريع، فعال ورخيص.", "...صحيح، مسؤول ويحترم الأشخاص.", "...صعب، نادر ومعقد.", "...جمالي ومثالي."],
        answer: 1
    },
    {
        question_fr: "Selon la Séquence 4, pourquoi l'éthique est-elle particulièrement importante dans l'IA ?",
        question_ar: "حسب التسلسل 4، لماذا تعد الأخلاق مهمة بشكل خاص في الذكاء الاصطناعي؟",
        options_fr: ["Parce que l'IA est toujours juste.", "Parce que l'IA imite nos décisions mais sans conscience morale.", "Parce que les lois sont trop rapides.", "Parce que l'IA est le seul domaine sans lois."],
        options_ar: ["لأن الذكاء الاصطناعي دائماً عادل.", "لأن الذكاء الاصطناعي يحاكي قراراتنا ولكن دون وعي أخلاقي.", "لأن القوانين سريعة جداً.", "لأن الذكاء الاصطناعي هو المجال الوحيد بدون قوانين."],
        answer: 1
    },
    {
        question_fr: "Qu'est-ce que le 'biais algorithmique' dans le domaine de l'IA (Séquence 4) ?",
        question_ar: "ما هو 'الانحياز الخوارزمي' في مجال الذكاء الاصطناعي (التسلسل 4)؟",
        options_fr: ["Un type de plat cuisiné.", "La reproduction de préjugés humains si les données d'apprentissage sont biaisées.", "Une erreur de connexion à internet.", "La capacité de l'IA à créer du contenu original."],
        options_ar: ["نوع من الأطباق المطبوخة.", "استنساخ التحيزات البشرية إذا كانت بيانات التعلم متحيزة.", "خطأ في الاتصال بالإنترنت.", "قدرة الذكاء الاصطناعي على إنشاء محتوى أصلي."],
        answer: 1
    },
    {
        question_fr: "L'une des questions éthiques fondamentales posées par l'IA concerne... (Séquence 4)",
        question_ar: "أحد الأسئلة الأخلاقية الأساسية التي يطرحها الذكاء الاصطناعي يتعلق بـ... (التسلسل 4)",
        options_fr: ["...le choix des polices de caractères sur un site web.", "...comment garantir que l'IA soit équitable, transparente et non discriminante.", "...le meilleur moment pour manger un fruit.", "...le nombre de pages dans un livre."],
        options_ar: ["...اختيار الخطوط على موقع ويب.", "...كيف نضمن أن يكون الذكاء الاصطناعي منصفًا، شفافًا وغير تمييزي.", "...أفضل وقت لتناول الفاكهة.", "...عدد الصفحات في كتاب."],
        answer: 1
    },
    {
        question_fr: "Une des actions considérées comme un 'usage non éthique' par l'étudiant est (Séquence 4) :",
        question_ar: "أحد الإجراءات التي تعتبر 'استخدامًا غير أخلاقي' من قبل الطالب هو (التسلسل 4):",
        options_fr: ["Faire rédiger un devoir complet par l'IA et le rendre comme travail personnel.", "Utiliser l'IA pour corriger l'orthographe d'un devoir.", "Utiliser l'IA pour faire des recherches.", "Utiliser l'IA pour traduire un texte."],
        options_ar: ["جعل الذكاء الاصطناعي يكتب واجبًا كاملاً وتقديمه كعمل شخصي.", "استخدام الذكاء الاصطناعي لتصحيح الأخطاء الإملائية لواجب.", "استخدام الذكاء الاصطناعي للبحث.", "استخدام الذكاء الاصطناعي لترجمة نص."],
        answer: 0
    },
    {
        question_fr: "Pour un usage responsable de l'IA, que doit faire l'étudiant 'après l'utilisation' (Séquence 4) ?",
        question_ar: "للاستخدام المسؤول للذكاء الاصطناعي، ما الذي يجب على الطالب فعله 'بعد الاستخدام' (التسلسل 4)؟",
        options_fr: ["Vérifier, corriger et personnaliser la réponse avec ses propres mots.", "Supprimer immédiatement toutes les traces d'utilisation.", "Ne rien faire et accepter la réponse de l'IA sans vérification.", "Laisser l'IA continuer la recherche."],
        options_ar: ["التحقق، التصحيح، وتخصيص الإجابة بكلماته الخاصة.", "حذف جميع آثار الاستخدام على الفور.", "عدم القيام بأي شيء وقبول إجابة الذكاء الاصطناعي دون التحقق.", "ترك الذكاء الاصطناعي يواصل البحث."],
        answer: 0
    },
    {
        question_fr: "Comment l'éthique se distingue-t-elle de la loi (Séquence 4) ?",
        question_ar: "كيف تختلف الأخلاق عن القانون (التسلسل 4)؟",
        options_fr: ["Elle est toujours écrite dans un code pénal.", "Elle s'impose par une réflexion individuelle et collective, et non par des lois.", "Elle ne concerne que la technologie.", "Elle n'existe que dans les pays occidentaux."],
        options_ar: ["إنها مكتوبة دائمًا في قانون عقوبات.", "إنها تُفرض من خلال التفكير الفردي والجماعي، وليس من خلال القوانين.", "إنها تتعلق بالتكنولوجيا فقط.", "إنها موجودة فقط في الدول الغربية."],
        answer: 1
    },
    {
        question_fr: "Pour 'développer son autonomie intellectuelle' avec l'IA, il est conseillé de (Séquence 4) :",
        question_ar: "لـ 'تطوير الاستقلالية الفكرية' مع الذكاء الاصطناعي، يُنصح بـ (التسلسل 4):",
        options_fr: ["Utiliser l'IA pour remplacer la réflexion.", "Utiliser l'IA pour s'inspirer, pas pour remplacer la réflexion.", "Ne jamais utiliser l'IA.", "Automatiser toutes les tâches créatives."],
        options_ar: ["استخدام الذكاء الاصطناعي ليحل محل التفكير.", "استخدام الذكاء الاصطناعي للاستلهام، وليس ليحل محل التفكير.", "عدم استخدام الذكاء الاصطناعي أبداً.", "أتمتة جميع المهام الإبداعية."],
        answer: 1
    },
    {
        question_fr: "Quel est l'un des 'À retenir' concernant l'usage de l'IA (Séquence 4) ?",
        question_ar: "ما هو أحد 'ما يجب تذكره' بخصوص استخدام الذكاء الاصطناعي (التسلسل 4)؟",
        options_fr: ["Toujours croire l'IA sans vérification.", "Ne jamais citer l'usage de l'IA.", "Utiliser l'IA pour apprendre, pas pour tricher.", "Mettre des informations privées dans l'IA."],
        options_ar: ["دائمًا تصديق الذكاء الاصطناعي دون تحقق.", "عدم الإشارة أبدًا إلى استخدام الذكاء الاصطناعي.", "استخدام الذكاء الاصطناعي للتعلم، وليس للغش.", "وضع معلومات خاصة في الذكاء الاصطناعي."],
        answer: 2
    },
    {
        question_fr: "Pourquoi la technologie évolue-t-elle plus vite que les lois (Séquence 4) ?",
        question_ar: "لماذا تتطور التكنولوجيا أسرع من القوانين (التسلسل 4)؟",
        options_fr: ["Parce que les lois sont inutiles.", "Parce que l'innovation est trop lente.", "C'est l'une des raisons pour lesquelles l'éthique est nécessaire pour guider nos actions.", "C'est un mythe moderne."],
        options_ar: ["لأن القوانين غير مجدية.", "لأن الابتكار بطيء جداً.", "هذا أحد الأسباب التي تجعل الأخلاق ضرورية لتوجيه أفعالنا.", "إنها أسطورة حديثة."],
        answer: 2
    },
    {
        question_fr: "L'IA peut influencer nos vies réelles dans des domaines comme (Séquence 4) :",
        question_ar: "يمكن للذكاء الاصطناعي أن يؤثر على حياتنا الواقعية في مجالات مثل (التسلسل 4):",
        options_fr: ["La météo et la géologie.", "Le recrutement, la santé, la justice.", "La musique classique et le théâtre.", "L'horticulture et la sylviculture."],
        options_ar: ["الطقس والجيولوجيا.", "التوظيف، الصحة، العدالة.", "الموسيقى الكلاسيكية والمسرح.", "البستنة وزراعة الغابات."],
        answer: 1
    },
    {
        question_fr: "Quel exemple d'utilisation non éthique est donné concernant la bibliographie (Séquence 4) ?",
        question_ar: "ما هو مثال الاستخدام غير الأخلاقي المذكور بخصوص الببليوغرافيا (التسلسل 4)؟",
        options_fr: ["Générer des références bibliographiques fausses ou inventées.", "Utiliser l'IA pour chercher des sources fiables.", "Vérifier l'existence des sources avec l'IA.", "Citer correctement les sources fournies par l'IA."],
        options_ar: ["توليد مراجع ببليوغرافية مزيفة أو مختلقة.", "استخدام الذكاء الاصطناعي للبحث عن مصادر موثوقة.", "التحقق من وجود المصادر باستخدام الذكاء الاصطناعي.", "اقتباس المصادر المقدمة من الذكاء الاصطناعي بشكل صحيح."],
        answer: 0
    },
    {
        question_fr: "L'une des stratégies pour développer un esprit critique avec l'IA est (Séquence 4) :",
        question_ar: "إحدى الاستراتيجيات لتطوير التفكير النقدي مع الذكاء الاصطناعي هي (التسلسل 4):",
        options_fr: ["Refuser de poser des questions à l'IA.", "Essayer d'abord de répondre seul(e), puis se servir de l'IA pour s'améliorer.", "Toujours demander à l'IA la réponse finale.", "Limiter l'usage pendant les recherches."],
        options_ar: ["رفض طرح الأسئلة على الذكاء الاصطناعي.", "المحاولة أولاً للإجابة بمفردك، ثم استخدام الذكاء الاصطناعي للتحسين.", "دائمًا طلب الإجابة النهائية من الذكاء الاصطناعي.", "تقييد الاستخدام أثناء البحث."],
        answer: 1
    },
    {
        question_fr: "Que ne doit-on pas mettre dans l'IA, selon les conseils de la Séquence 4 ?",
        question_ar: "ما الذي لا يجب وضعه في الذكاء الاصطناعي، حسب نصائح التسلسل 4؟",
        options_fr: ["Des informations scientifiques.", "Des informations privées ou confidentielles.", "Des questions académiques.", "Des exercices de code."],
        options_ar: ["معلومات علمية.", "معلومات خاصة أو سرية.", "أسئلة أكاديمية.", "تمارين برمجية."],
        answer: 1
    },
    {
        question_fr: "L'éthique sert de 'boussole' pour guider nos actions...",
        question_ar: "تستخدم الأخلاق كـ 'بوصلة' لتوجيه أفعالنا...",
        options_fr: ["...après que la loi est intervenue.", "...avant même que la loi n'intervienne.", "...uniquement dans les domaines non-technologiques.", "...dans les situations où tout est clair."],
        options_ar: ["...بعد تدخل القانون.", "...حتى قبل تدخل القانون.", "...فقط في المجالات غير التكنولوجية.", "...في الحالات التي يكون فيها كل شيء واضحًا."],
        answer: 1
    },
    {
        question_fr: "Lequel de ces principes est essentiel pour l'usage responsable de l'IA dans la Séquence 4 ?",
        question_ar: "أي من هذه المبادئ أساسي للاستخدام المسؤول للذكاء الاصطناعي في التسلسل 4؟",
        options_fr: ["L'irresponsabilité.", "La vérification des informations avec des sources fiables.", "L'opacité totale.", "La discrimination algorithmique."],
        options_ar: ["اللامسؤولية.", "التحقق من المعلومات بمصادر موثوقة.", "الغموض التام.", "التمييز الخوارزمي."],
        answer: 1
    },

    // Questions from Sequence 5: Les étapes du travail académique et l'IA
    {
        question_fr: "Quel est l'objectif principal de l'étape 'Relire et finaliser' dans un travail académique (Séquence 5) ?",
        question_ar: "ما هو الهدف الرئيسي لخطوة 'إعادة القراءة والإنهاء' في العمل الأكاديمي (التسلسل 5)؟",
        options_fr: ["Commencer la recherche de documentation.", "Garantir un travail final cohérent, fluide et sans erreurs.", "Choisir une problématique.", "Traduire le texte."],
        options_ar: ["البدء في البحث عن الوثائق.", "ضمان عمل نهائي متماسك وسلس وخالٍ من الأخطاء.", "اختيار إشكالية.", "ترجمة النص."],
        answer: 1
    },
    {
        question_fr: "Comment l'IA peut-elle aider lors de l'étape 'Rechercher la documentation' (Séquence 5) ?",
        question_ar: "كيف يمكن للذكاء الاصطناعي أن يساعد في خطوة 'البحث عن الوثائق' (التسلسل 5)؟",
        options_fr: ["En rédigeant le plan à la place de l'étudiant.", "En trouvant des articles académiques récents et des sources fiables.", "En créant des supports visuels.", "En traduisant le texte final."],
        options_ar: ["من خلال كتابة الخطة بدلاً من الطالب.", "من خلال إيجاد مقالات أكاديمية حديثة ومصادر موثوقة.", "من خلال إنشاء دعم بصري.", "من خلال ترجمة النص النهائي."],
        answer: 1
    },
    {
        question_fr: "Quel outil est suggéré dans la Séquence 5 pour 'Vérifier la grammaire, l'orthographe et la cohérence du texte' ?",
        question_ar: "ما هي الأداة المقترحة في التسلسل 5 لـ 'التدقيق في القواعد النحوية، الإملاء واتساق النص'؟",
        options_fr: ["Canva.", "Grammarly, ChatGPT, Araby.", "SciSpace.", "Napkin.ai."],
        options_ar: ["Canva.", "Grammarly, ChatGPT, Araby.", "SciSpace.", "Napkin.ai."],
        answer: 1
    },
    {
        question_fr: "Quelle est l'une des 'grandes étapes du travail académique' (Séquence 5) ?",
        question_ar: "ما هي إحدى 'الخطوات الرئيسية للعمل الأكاديمي' (التسلسل 5)؟",
        options_fr: ["Faire la vaisselle.", "Rédiger le texte.", "Jouer à des jeux vidéo.", "Faire les courses."],
        options_ar: ["غسل الأطباق.", "كتابة النص.", "لعب ألعاب الفيديو.", "التسوق."],
        answer: 1
    },
    {
        question_fr: "Comment l'IA aide-t-elle à l'étape 'Choisir un sujet et une problématique' (Séquence 5) ?",
        question_ar: "كيف يساعد الذكاء الاصطناعي في خطوة 'اختيار موضوع وإشكالية' (التسلسل 5)؟",
        options_fr: ["En fournissant la note finale.", "En générant des idées de sujets et en aidant à formuler une question de recherche.", "En remplaçant l'effort personnel d'analyse.", "En créant des graphiques."],
        options_ar: ["من خلال تقديم الدرجة النهائية.", "من خلال توليد أفكار للمواضيع والمساعدة في صياغة سؤال بحثي.", "من خلال استبدال الجهد الشخصي للتحليل.", "من خلال إنشاء الرسوم البيانية."],
        answer: 1
    },
    {
        question_fr: "Selon la Séquence 5, l'objectif de l'étape 'Gérer les références et les citations' est de...",
        question_ar: "حسب التسلسل 5، هدف خطوة 'إدارة المراجع والاقتباسات' هو...",
        options_fr: ["...faire une pause café.", "...créer une bibliographie correcte et cohérente.", "...envoyer un e-mail au professeur.", "...trier les documents par couleur."],
        options_ar: ["...أخذ استراحة قهوة.", "...إنشاء قائمة مراجع صحيحة ومتماسكة.", "...إرسال بريد إلكتروني للأستاذ.", "...فرز الوثائق حسب اللون."],
        answer: 1
    },
    {
        question_fr: "Quel type de citation est défini comme 'reprise exacte des mots de l'auteur, entre guillemets' (Séquence 5) ?",
        question_ar: "أي نوع من الاقتباس يُعرّف بأنه 'إعادة دقيقة لكلمات المؤلف، بين علامتي اقتباس' (التسلسل 5)؟",
        options_fr: ["Citation indirecte.", "Citation directe.", "Paraphrase.", "Résumé."],
        options_ar: ["اقتباس غير مباشر.", "اقتباس مباشر.", "إعادة صياغة.", "ملخص."],
        answer: 1
    },
    {
        question_fr: "L'outil SciSpace est suggéré principalement pour quelle étape (Séquence 5) ?",
        question_ar: "أداة SciSpace مقترحة بشكل رئيسي لأي خطوة (التسلسل 5)؟",
        options_fr: ["La création de supports visuels.", "La recherche de documentation et l'analyse d'articles académiques.", "La préparation de la présentation orale.", "La traduction du texte."],
        options_ar: ["إنشاء الدعم البصري.", "البحث عن الوثائق وتحليل المقالات الأكاديمية.", "إعداد العرض الشفوي.", "ترجمة النص."],
        answer: 1
    },
    {
        question_fr: "Quelle est l'une des informations que la citation doit fournir aux lecteurs (Séquence 5) ?",
        question_ar: "ما هي إحدى المعلومات التي يجب أن يقدمها الاقتباس للقراء (التسلسل 5)؟",
        options_fr: ["Le nom de l'animal de compagnie de l'auteur.", "Le nom et d'autres détails sur l'auteur.", "Le prix du document.", "La météo du jour de la publication."],
        options_ar: ["اسم الحيوان الأليف للمؤلف.", "اسم وتفاصيل أخرى عن المؤلف.", "سعر الوثيقة.", "الطقس يوم النشر."],
        answer: 1
    },
    {
        question_fr: "L'objectif de l'étape 'Vérifier l'originalité du travail' est de (Séquence 5) :",
        question_ar: "هدف خطوة 'التحقق من أصالة العمل' هو (التسلسل 5):",
        options_fr: ["Créer de nouvelles idées.", "Garantir l'intégrité académique.", "Trouver des fautes d'orthographe.", "Rédiger le plan."],
        options_ar: ["إنشاء أفكار جديدة.", "ضمان النزاهة الأكاديمية.", "إيجاد أخطاء إملائية.", "كتابة الخطة."],
        answer: 1
    },
    {
        question_fr: "Selon la Séquence 5, pour que l'IA puisse accompagner l'étudiant, elle doit être utilisée avec :",
        question_ar: "حسب التسلسل 5، لكي يتمكن الذكاء الاصطناعي من مرافقة الطالب، يجب استخدامه بـ:",
        options_fr: ["Négligence.", "Réflexion, sens critique et intégrité académique.", "Rapidité et sans vérification.", "Confiance absolue."],
        options_ar: ["إهمال.", "تفكير، حس نقدي ونزاهة أكاديمية.", "سرعة وبدون تحقق.", "ثقة مطلقة."],
        answer: 1
    },
    {
        question_fr: "Comment l'IA peut-elle aider pour l'étape 'Créer des supports visuels' (Séquence 5) ?",
        question_ar: "كيف يمكن للذكاء الاصطناعي أن يساعد في خطوة 'إنشاء دعم بصري' (التسلسل 5)؟",
        options_fr: ["En écrivant le texte.", "En générant des images, graphiques ou schémas.", "En lisant les livres.", "En faisant la présentation orale."],
        options_ar: ["من خلال كتابة النص.", "من خلال توليد الصور، الرسوم البيانية أو المخططات.", "من خلال قراءة الكتب.", "من خلال تقديم العرض الشفوي."],
        answer: 1
    },
    {
        question_fr: "Quel outil est suggéré dans la Séquence 5 pour la 'Création des présentations' ?",
        question_ar: "ما هي الأداة المقترحة في التسلسل 5 لـ 'إنشاء العروض التقديمية'؟",
        options_fr: ["Canva.", "SciSpace.", "Gamma.app.", "Grammarly."],
        options_ar: ["Canva.", "SciSpace.", "Gamma.app.", "Grammarly."],
        answer: 2
    },
    {
        question_fr: "L'une des étapes pour 'Préparer la présentation orale' est (Séquence 5) :",
        question_ar: "إحدى خطوات 'إعداد العرض الشفوي' هي (التسلسل 5):",
        options_fr: ["Organiser la présentation du travail et s'entraîner à la prise de parole.", "Détruire toutes les sources.", "Éviter de parler devant un public.", "Rédiger uniquement en arabe."],
        options_ar: ["تنظيم عرض العمل والتدرب على التحدث.", "تدمير جميع المصادر.", "تجنب التحدث أمام الجمهور.", "الكتابة باللغة العربية فقط."],
        answer: 0
    },
    {
        question_fr: "Qu'est-ce que l'IA peut aider à faire lors de l'étape 'Traduire et améliorer le langage' (Séquence 5) ?",
        question_ar: "ما الذي يمكن للذكاء الاصطناعي أن يساعد في القيام به خلال خطوة 'الترجمة وتحسين اللغة' (التسلسل 5)؟",
        options_fr: ["Adapter le texte dans une autre langue.", "Créer des références bibliographiques.", "Trouver un nouveau sujet.", "Corriger les erreurs dans les citations directes."],
        options_ar: ["تكييف النص إلى لغة أخرى.", "إنشاء مراجع ببليوغرافية.", "إيجاد موضوع جديد.", "تصحيح الأخطاء في الاقتباسات المباشرة."],
        answer: 0
    },
    {
        question_fr: "Le but de l'étape 'Lire, comprendre et résumer' est (Séquence 5) :",
        question_ar: "الغرض من خطوة 'القراءة، الفهم والتلخيص' هو (التسلسل 5):",
        options_fr: ["Ignorer les idées principales.", "Assimiler les idées principales et les comparer.", "Rédiger immédiatement le plan.", "Utiliser uniquement des sources non fiables."],
        options_ar: ["تجاهل الأفكار الرئيسية.", "استيعاب الأفكار الرئيسية ومقارنتها.", "كتابة الخطة فوراً.", "استخدام مصادر غير موثوقة فقط."],
        answer: 1
    },

    // Questions from Sequence 6: Le Prompt
    {
        question_fr: "Qu'est-ce qu'un prompt (Séquence 6) ?",
        question_ar: "ما هو 'الطلب' (prompt) (التسلسل 6)؟",
        options_fr: ["Le nom d'un robot très intelligent.", "Une consigne ou une question écrite par l'utilisateur donnée à un outil d'IA.", "Un code informatique pour éteindre l'ordinateur.", "Une image générée par l'IA."],
        options_ar: ["اسم روبوت ذكي جداً.", "تعليمات أو سؤال مكتوب من قبل المستخدم يُعطى لأداة الذكاء الاصطناعي.", "رمز حاسوبي لإطفاء الحاسوب.", "صورة مولدة بواسطة الذكاء الاصطناعي."],
        answer: 1
    },
    {
        question_fr: "Quel est le rôle du prompt dans la communication avec l'IA (Séquence 6) ?",
        question_ar: "ما هو دور 'الطلب' في التواصل مع الذكاء الاصطناعي (التسلسل 6)؟",
        options_fr: ["Il sert uniquement à sauvegarder les fichiers.", "Il est le canal de communication entre l'humain et l'intelligence artificielle.", "Il est la réponse finale de l'IA.", "Il mesure la température du processeur."],
        options_ar: ["يستخدم فقط لحفظ الملفات.", "هو قناة التواصل بين الإنسان والذكاء الاصطناعي.", "هو الإجابة النهائية للذكاء الاصطناعي.", "يقيس درجة حرارة المعالج."],
        answer: 1
    },
    {
        question_fr: "Selon la Séquence 6, plus le prompt est clair, complet et contextualisé, plus la réponse produite...",
        question_ar: "حسب التسلسل 6، كلما كان 'الطلب' أوضح، أكمل ومُسَوقًا، كلما كانت الإجابة المنتجة...",
        options_fr: ["...sera vague et trop générale.", "...sera utile, cohérente et adaptée.", "...demandera un paiement supplémentaire.", "...sera uniquement en anglais."],
        options_ar: ["...ستكون غامضة وعامة جداً.", "...ستكون مفيدة، متماسكة ومكيفة.", "...ستتطلب دفعًا إضافيًا.", "...ستكون باللغة الإنجليزية فقط."],
        answer: 1
    },
    {
        question_fr: "Qu'est-ce que le 'Prompt engineering' (Séquence 6) ?",
        question_ar: "ما هو 'هندسة الطلب' (Prompt engineering) (التسلسل 6)؟",
        options_fr: ["L'art de construire des robots.", "L'art de formuler des instructions efficaces pour obtenir des réponses précises de l'IA.", "Le processus de réparation d'un ordinateur.", "L'étude de l'histoire de l'informatique."],
        options_ar: ["فن بناء الروبوتات.", "فن صياغة التعليمات الفعالة للحصول على إجابات دقيقة من الذكاء الاصطناعي.", "عملية إصلاح الحاسوب.", "دراسة تاريخ الحوسبة."],
        answer: 1
    },
    {
        question_fr: "Pour obtenir une réponse adaptée, quel élément essentiel doit-on fournir dans le prompt (Séquence 6) ?",
        question_ar: "للحصول على إجابة مكيفة، ما هو العنصر الأساسي الذي يجب تقديمه في 'الطلب' (التسلسل 6)؟",
        options_fr: ["Uniquement le titre du document.", "Un contexte clair (ex: 'Je suis étudiant en lettres...').", "Uniquement le nom de l'IA.", "La date de naissance de l'utilisateur."],
        options_ar: ["عنوان الوثيقة فقط.", "سياق واضح (مثال: 'أنا طالب في الآداب...').", "اسم الذكاء الاصطناعي فقط.", "تاريخ ميلاد المستخدم."],
        answer: 1
    },
    {
        question_fr: "Selon la Séquence 6, comment l'IA 'comprend'-elle le prompt ?",
        question_ar: "حسب التسلسل 6، كيف 'يفهم' الذكاء الاصطناعي 'الطلب'؟",
        options_fr: ["Elle analyse les mots, la formulation et le contexte pour prédire la réponse la plus pertinente.", "Elle ne comprend pas du tout les mots.", "Elle demande l'avis d'un humain avant de répondre.", "Elle lit dans les pensées de l'utilisateur."],
        options_ar: ["يحلل الكلمات، الصياغة والسياق للتنبؤ بالإجابة الأكثر صلة.", "لا يفهم الكلمات على الإطلاق.", "يطلب رأي إنسان قبل الرد.", "يقرأ أفكار المستخدم."],
        answer: 0
    },
    {
        question_fr: "Qu'est-ce que l''Itération et ajustement' dans le processus de prompt (Séquence 6) ?",
        question_ar: "ما هو 'التكرار والتعديل' في عملية 'الطلب' (التسلسل 6)؟",
        options_fr: ["Le fait de ne donner qu'un seul prompt parfait.", "Le fait que l'interaction avec l'IA est un processus d'ajustement qui nécessite de modifier les consignes.", "Le fait de toujours poser la même question.", "Le fait d'arrêter l'interaction immédiatement."],
        options_ar: ["القيام بتقديم طلب واحد مثالي فقط.", "حقيقة أن التفاعل مع الذكاء الاصطناعي هو عملية تعديل تتطلب تغيير التعليمات.", "القيام بطرح نفس السؤال دائمًا.", "وقف التفاعل فورًا."],
        answer: 1
    },
    {
        question_fr: "Un des modèles de prompt suggérés est un prompt pour...",
        question_ar: "أحد نماذج 'الطلب' المقترحة هو 'طلب' لـ...",
        options_fr: ["...cuisiner un plat.", "...organiser un projet ou faire du brainstorming.", "...acheter une voiture.", "...réparer un appareil électronique."],
        options_ar: ["...طبخ طبق.", "...تنظيم مشروع أو إجراء عصف ذهني.", "...شراء سيارة.", "...إصلاح جهاز إلكتروني."],
        answer: 1
    },
    {
        question_fr: "Le Prompt Engineering est qualifié de (Séquence 6) :",
        question_ar: "يُوصف 'هندسة الطلب' (Prompt Engineering) بـ (التسلسل 6):",
        options_fr: ["Une ancienne compétence oubliée.", "Une nouvelle compétence numérique et cognitive essentielle.", "Une activité uniquement réservée aux programmeurs.", "Un simple passe-temps."],
        options_ar: ["مهارة قديمة منسية.", "مهارة رقمية ومعرفية جديدة وأساسية.", "نشاط مخصص للمبرمجين فقط.", "مجرد هواية."],
        answer: 1
    },
    {
        question_fr: "Quel type de résultat le prompt permet-il de générer (Séquence 6) ?",
        question_ar: "أي نوع من النتائج يسمح 'الطلب' بتوليدها (التسلسل 6)؟",
        options_fr: ["Des objets physiques.", "Du contenu (texte, image, code, etc.).", "Des plantes artificielles.", "De nouvelles théories scientifiques."],
        options_ar: ["أشياء مادية.", "محتوى (نص، صورة، شفرة برمجية، إلخ).", "نباتات اصطناعية.", "نظريات علمية جديدة."],
        answer: 1
    },
    {
        question_fr: "Quel est l'un des usages académiques des prompts mentionné (Séquence 6) ?",
        question_ar: "ما هو أحد الاستخدامات الأكاديمية لـ 'الطلبات' المذكورة (التسلسل 6)؟",
        options_fr: ["Traduire des textes de manière précise.", "Nettoyer un laboratoire.", "Conduire une voiture.", "Gérer la comptabilité d'une entreprise."],
        options_ar: ["ترجمة النصوص بدقة.", "تنظيف مختبر.", "قيادة سيارة.", "إدارة محاسبة شركة."],
        answer: 0
    },
    {
        question_fr: "La Séquence 6 indique qu'un prompt vague génère souvent :",
        question_ar: "يشير التسلسل 6 إلى أن 'الطلب' الغامض غالبًا ما يولد:",
        options_fr: ["Une réponse trop générale.", "Une réponse très précise.", "Une image parfaite.", "Un extrait de code complexe."],
        options_ar: ["إجابة عامة جداً.", "إجابة دقيقة جداً.", "صورة مثالية.", "مقتطف من شفرة برمجية معقدة."],
        answer: 0
    },
    {
        question_fr: "Inclure un 'Rôle' (ex: 'Tu es un tuteur de projet universitaire') dans le prompt sert à (Séquence 6) :",
        question_ar: "إدراج 'دور' (مثلاً: 'أنت مدرس مشروع جامعي') في 'الطلب' يهدف إلى (التسلسل 6):",
        options_fr: ["Rendre la conversation amusante.", "Donner une identité spécifique à l'IA pour obtenir une réponse mieux ciblée.", "Augmenter la taille du texte.", "Diminuer le nombre de réponses."],
        options_ar: ["جعل المحادثة ممتعة.", "إعطاء هوية محددة للذكاء الاصطناعي للحصول على إجابة أكثر استهدافًا.", "زيادة حجم النص.", "تقليل عدد الإجابات."],
        answer: 1
    },
    {
        question_fr: "Quel exemple est donné pour fournir un contexte clair (Séquence 6) ?",
        question_ar: "ما هو المثال المعطى لتقديم سياق واضح (التسلسل 6)؟",
        options_fr: ["'Explique-moi le concept d'algorithme.'", "'Donne-moi une recette de cuisine.'", "'Je suis étudiant en lettres et je prépare un exposé sur l'éthique de l'IA.'", "'Dis-moi bonjour.'"],
        options_ar: ["'اشرح لي مفهوم الخوارزمية.'", "'أعطني وصفة طبخ.'", "'أنا طالب في الآداب وأعد عرضًا عن أخلاقيات الذكاء الاصطناعي.'", "'قل لي مرحباً.'"],
        answer: 2
    },
    {
        question_fr: "En 'Prompt engineering', une 'Contrainte' sert à (Séquence 6) :",
        question_ar: "في 'هندسة الطلب'، يستخدم 'القيد' (Contrainte) لـ (التسلسل 6):",
        options_fr: ["Limiter l'accès de l'IA.", "Spécifier une limite de longueur, un niveau de langage ou un critère de format.", "Obliger l'IA à répondre en vers.", "Changer la couleur du texte."],
        options_ar: ["تقييد وصول الذكاء الاصطناعي.", "تحديد حد للطول، مستوى اللغة، أو معيار للشكل.", "إجبار الذكاء الاصطناعي على الإجابة بالشعر.", "تغيير لون النص."],
        answer: 1
    },
    {
        question_fr: "Pourquoi un prompt bien structuré est-il important (Séquence 6) ?",
        question_ar: "لماذا يعد 'الطلب' جيد البناء مهمًا (التسلسل 6)؟",
        options_fr: ["Il coûte moins cher.", "Il conduit à un résultat plus ciblé et de meilleure qualité.", "Il rend l'IA plus rapide.", "Il garantit que l'IA ne fait jamais d'erreurs."],
        options_ar: ["يكلف أقل.", "يؤدي إلى نتيجة أكثر استهدافًا وذات جودة أفضل.", "يجعل الذكاء الاصطناعي أسرع.", "يضمن أن الذكاء الاصطناعي لا يرتكب أخطاء أبدًا."],
        answer: 1
    },
    {
        question_fr: "L'interaction avec l'IA est décrite comme un processus de...",
        question_ar: "يُوصَف التفاعل مع الذكاء الاصطناعي بأنه عملية...",
        options_fr: ["...jugement et de critique.", "...mémorisation et de calcul.", "...traduction et de relecture.", "...dialogue guidé et d'ajustement."],
        options_ar: ["...الحكم والنقد.", "...الحفظ والحساب.", "...الترجمة وإعادة القراءة.", "...حوار موجه وتعديل."],
        answer: 3
    },

    // 100 questions generated
];