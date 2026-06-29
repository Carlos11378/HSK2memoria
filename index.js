// ═══════════════════════════════════════════════════════════════
// DADOS COMPLETOS — 15 LIÇÕES + DIÁLOGOS REAIS DO HSK2 STD COURSE
// ═══════════════════════════════════════════════════════════════
const LESSONS = [
 {num:1,zh:"九月去北京旅游最好",py:"Jiǔyuè qù Běijīng lǚyóu zuì hǎo",pt:"Setembro é o melhor mês para visitar Pequim",
  words:[
   {ch:"旅游",py:"lǚyóu",pt:"viajar, fazer uma viagem"},
   {ch:"觉得",py:"juéde",pt:"achar, sentir, pensar"},
   {ch:"最",py:"zuì",pt:"o mais (superlativo)"},
   {ch:"为什么",py:"wèi shénme",pt:"por quê, por que razão"},
   {ch:"也",py:"yě",pt:"também, igualmente"},
   {ch:"运动",py:"yùndòng",pt:"esporte; fazer exercício físico"},
   {ch:"踢足球",py:"tī zúqiú",pt:"jogar futebol"},
   {ch:"一起",py:"yìqǐ",pt:"juntos, ao mesmo tempo"},
   {ch:"要",py:"yào",pt:"querer, precisar, dever"},
   {ch:"新",py:"xīn",pt:"novo, recente"},
   {ch:"它",py:"tā",pt:"ele/ela (coisa ou animal)"},
   {ch:"眼睛",py:"yǎnjing",pt:"olho"},
  ],
  texts:[
   {title:"1 · 在学校 (Na escola)",lines:[
    {sp:"A",zh:"我要去北京旅游，你觉得什么时候去最好？",py:"Wǒ yào qù Běijīng lǚyóu, nǐ juéde shénme shíhou qù zuì hǎo?",pt:"Quero viajar para Pequim. Quando você acha que é melhor ir?"},
    {sp:"B",zh:"九月去北京旅游最好。",py:"Jiǔyuè qù Běijīng lǚyóu zuì hǎo.",pt:"Setembro é o melhor mês para visitar Pequim."},
    {sp:"A",zh:"为什么？",py:"Wèi shénme?",pt:"Por quê?"},
    {sp:"B",zh:"九月的北京天气不冷也不热。",py:"Jiǔyuè de Běijīng tiānqì bù lěng yě bú rè.",pt:"Em setembro, Pequim não está frio nem quente."},
   ]},
   {title:"2 · 看照片 (Vendo fotos)",lines:[
    {sp:"A",zh:"你喜欢什么运动？",py:"Nǐ xǐhuan shénme yùndòng?",pt:"Que esporte você gosta?"},
    {sp:"B",zh:"我最喜欢踢足球。",py:"Wǒ zuì xǐhuan tī zúqiú.",pt:"O que mais gosto é de jogar futebol."},
    {sp:"A",zh:"下午我们一起去踢足球吧。",py:"Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba.",pt:"Vamos jogar futebol juntos esta tarde."},
    {sp:"B",zh:"好啊！",py:"Hǎo a!",pt:"Ótimo!"},
   ]},
   {title:"3 · 在家里 (Em casa)",lines:[
    {sp:"A",zh:"我们要不要买几个新的椅子？",py:"Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?",pt:"Devemos comprar algumas cadeiras novas?"},
    {sp:"B",zh:"好啊。什么时候去买？",py:"Hǎo a. Shénme shíhou qù mǎi?",pt:"Claro. Quando vamos comprar?"},
    {sp:"A",zh:"明天下午怎么样？",py:"Míngtiān xiàwǔ zěnmeyàng?",pt:"Que tal amanhã à tarde?"},
   ]},
   {title:"4 · 在家里 (Em casa)",lines:[
    {sp:"A",zh:"桌子下面有个猫。",py:"Zhuōzi xiàmiàn yǒu ge māo.",pt:"Tem um gato embaixo da mesa."},
    {sp:"B",zh:"那是我的猫，它叫花花。",py:"Nà shì wǒ de māo, tā jiào Huāhua.",pt:"É o meu gato. Ele se chama Huahua."},
    {sp:"A",zh:"它很漂亮。",py:"Tā hěn piàoliang.",pt:"Ele é muito bonito."},
    {sp:"B",zh:"是啊，我觉得它的眼睛最漂亮。",py:"Shì a, wǒ juéde tā de yǎnjing zuì piàoliang.",pt:"É, acho que os olhos dele são os mais bonitos."},
   ]},
  ]
 },
 {num:2,zh:"我每天六点起床",py:"Wǒ měitiān liù diǎn qǐchuáng",pt:"Eu me levanto às seis todos os dias",
  words:[
   {ch:"生病",py:"shēng bìng",pt:"ficar doente, adoecer"},
   {ch:"每",py:"měi",pt:"cada, todo/toda"},
   {ch:"早上",py:"zǎoshang",pt:"manhã, de manhã cedo"},
   {ch:"跑步",py:"pǎobù",pt:"correr, fazer cooper"},
   {ch:"起床",py:"qǐchuáng",pt:"levantar da cama, acordar"},
   {ch:"药",py:"yào",pt:"remédio, medicamento"},
   {ch:"身体",py:"shēntǐ",pt:"corpo; saúde física"},
   {ch:"出",py:"chū",pt:"sair, ir para fora"},
   {ch:"高",py:"gāo",pt:"alto, elevado"},
   {ch:"知道",py:"zhīdào",pt:"saber, conhecer"},
   {ch:"休息",py:"xiūxi",pt:"descansar, repousar"},
   {ch:"忙",py:"máng",pt:"ocupado, atarefado"},
   {ch:"时间",py:"shíjiān",pt:"tempo, hora"},
   {ch:"米",py:"mǐ",pt:"metro (unidade de medida)"},
  ],
  texts:[
   {title:"1 · 在运动场 (No campo de esportes)",lines:[
    {sp:"A",zh:"你很少生病，是不是喜欢运动？",py:"Nǐ hěn shǎo shēng bìng, shì bu shì xǐhuan yùndòng?",pt:"Você raramente fica doente. Deve gostar de esportes, não?"},
    {sp:"B",zh:"是啊，我每天早上都要出去跑步。",py:"Shì a, wǒ měitiān zǎoshang dōu yào chūqù pǎobù.",pt:"Sim, todo dia de manhã saio para correr."},
    {sp:"A",zh:"你每天几点起床？",py:"Nǐ měitiān jǐ diǎn qǐchuáng?",pt:"A que horas você se levanta todo dia?"},
    {sp:"B",zh:"我每天六点起床。",py:"Wǒ měitiān liù diǎn qǐchuáng.",pt:"Levanto às seis todo dia."},
   ]},
   {title:"2 · 在医院 (No hospital)",lines:[
    {sp:"A",zh:"吃药了吗？现在身体怎么样？",py:"Chī yào le ma? Xiànzài shēntǐ zěnmeyàng?",pt:"Você tomou o remédio? Como está se sentindo agora?"},
    {sp:"B",zh:"吃了。现在好多了。",py:"Chī le. Xiànzài hǎo duō le.",pt:"Tomei. Agora estou muito melhor."},
    {sp:"A",zh:"什么时候能出院？",py:"Shénme shíhou néng chū yuàn?",pt:"Quando você poderá receber alta?"},
    {sp:"B",zh:"医生说下个星期。",py:"Yīshēng shuō xià ge xīngqī.",pt:"O médico disse na semana que vem."},
   ]},
   {title:"3 · 在操场 (No pátio)",lines:[
    {sp:"A",zh:"大卫今年多大？",py:"Dàwèi jīnnián duō dà?",pt:"Quantos anos o David tem este ano?"},
    {sp:"B",zh:"二十多岁。",py:"Èrshí duō suì.",pt:"Mais de vinte anos."},
    {sp:"A",zh:"他多高？",py:"Tā duō gāo?",pt:"Qual é a altura dele?"},
    {sp:"B",zh:"一米八几。",py:"Yī mǐ bā jǐ.",pt:"Um metro e oitenta e tantos."},
    {sp:"A",zh:"你怎么知道这么多啊？",py:"Nǐ zěnme zhīdào zhème duō a?",pt:"Como você sabe tanto sobre ele?"},
    {sp:"B",zh:"他是我同学。",py:"Tā shì wǒ tóngxué.",pt:"Ele é meu colega de classe."},
   ]},
   {title:"4 · 在房间 (No quarto)",lines:[
    {sp:"A",zh:"张老师星期六也不休息啊？",py:"Zhāng lǎoshī xīngqī liù yě bù xiūxi a?",pt:"O professor Zhang não descansa nem no sábado?"},
    {sp:"B",zh:"是啊，他这几天很忙，没有时间休息。",py:"Shì a, tā zhè jǐ tiān hěn máng, méiyǒu shíjiān xiūxi.",pt:"É, ele está muito ocupado esses dias, não tem tempo para descansar."},
    {sp:"A",zh:"那会很累吧？",py:"Nà huì hěn lèi ba?",pt:"Deve estar muito cansado, né?"},
    {sp:"B",zh:"他每天回来都很累。",py:"Tā měitiān huílai dōu hěn lèi.",pt:"Todo dia ele volta para casa exausto."},
   ]},
  ]
 },
 {num:3,zh:"左边那个红色的是我的",py:"Zuǒbiān nàge hóngsè de shì wǒ de",pt:"O vermelho à esquerda é meu",
  words:[
   {ch:"手表",py:"shǒubiǎo",pt:"relógio de pulso"},
   {ch:"千",py:"qiān",pt:"mil, um milhar"},
   {ch:"报纸",py:"bàozhǐ",pt:"jornal"},
   {ch:"送",py:"sòng",pt:"enviar, entregar; presentear"},
   {ch:"一下",py:"yīxià",pt:"um momento; uma vez (após verbo)"},
   {ch:"牛奶",py:"niúnǎi",pt:"leite (de vaca)"},
   {ch:"房间",py:"fángjiān",pt:"quarto, sala, compartimento"},
   {ch:"丈夫",py:"zhàngfu",pt:"marido, esposo"},
   {ch:"旁边",py:"pángbiān",pt:"ao lado de, perto de"},
   {ch:"真",py:"zhēn",pt:"verdadeiro; verdadeiramente"},
   {ch:"颜色",py:"yánsè",pt:"cor"},
   {ch:"左边",py:"zuǒbiān",pt:"lado esquerdo, à esquerda"},
   {ch:"红",py:"hóng",pt:"vermelho"},
   {ch:"粉",py:"fěn",pt:"cor-de-rosa, rosado"},
  ],
  texts:[
   {title:"1 · 在房间 (No quarto)",lines:[
    {sp:"A",zh:"这块手表是你的吗？",py:"Zhè kuài shǒubiǎo shì nǐ de ma?",pt:"Este relógio é seu?"},
    {sp:"B",zh:"不是我的，是我爸爸的。",py:"Bú shì wǒ de. Shì wǒ bàba de.",pt:"Não é meu. É do meu pai."},
    {sp:"A",zh:"多少钱买的？",py:"Duōshao qián mǎi de?",pt:"Por quanto foi comprado?"},
    {sp:"B",zh:"三千多块。",py:"Sānqiān duō kuài.",pt:"Mais de três mil yuan."},
   ]},
   {title:"2 · 在家里 (Em casa)",lines:[
    {sp:"A",zh:"这是今天早上的报纸吗？",py:"Zhè shì jīntiān zǎoshang de bàozhǐ ma?",pt:"Este é o jornal de hoje de manhã?"},
    {sp:"B",zh:"不是，是昨天的。",py:"Bú shì, shì zuótiān de.",pt:"Não, é de ontem."},
    {sp:"A",zh:"你听，是不是送报纸的来了？",py:"Nǐ tīng, shì bu shì sòng bàozhǐ de lái le?",pt:"Ouça, não é o entregador de jornal que chegou?"},
    {sp:"B",zh:"我看一下。不是，是送牛奶的。",py:"Wǒ kàn yīxià. Bú shì, shì sòng niúnǎi de.",pt:"Deixa eu ver. Não, é o entregador de leite."},
   ]},
   {title:"3 · 在商店 (Na loja)",lines:[
    {sp:"A",zh:"左边那个红色的是我的。",py:"Zuǒbiān nàge hóngsè de shì wǒ de.",pt:"O vermelho à esquerda é meu."},
    {sp:"B",zh:"这个房间真漂亮！颜色很好看。",py:"Zhège fángjiān zhēn piàoliang! Yánsè hěn hǎokàn.",pt:"Este quarto é realmente bonito! As cores são muito agradáveis."},
    {sp:"A",zh:"谢谢。旁边那个粉色的是我丈夫买的。",py:"Xièxie. Pángbiān nàge fěnsè de shì wǒ zhàngfu mǎi de.",pt:"Obrigada. O rosa ao lado foi meu marido quem comprou."},
   ]},
  ]
 },
 {num:4,zh:"这个工作是他帮我介绍的",py:"Zhège gōngzuò shì tā bāng wǒ jièshào de",pt:"Foi ele quem me recomendou para este trabalho",
  words:[
   {ch:"生日",py:"shēngrì",pt:"aniversário, data de nascimento"},
   {ch:"快乐",py:"kuàilè",pt:"feliz, alegre"},
   {ch:"给",py:"gěi",pt:"dar; para (preposição)"},
   {ch:"接",py:"jiē",pt:"receber; buscar (uma pessoa)"},
   {ch:"晚上",py:"wǎnshang",pt:"noite, à noite"},
   {ch:"问",py:"wèn",pt:"perguntar, fazer uma pergunta"},
   {ch:"非常",py:"fēicháng",pt:"muito, extremamente, bastante"},
   {ch:"开始",py:"kāishǐ",pt:"começar, iniciar"},
   {ch:"两",py:"liǎng",pt:"dois (usado com classificador)"},
   {ch:"已经",py:"yǐjīng",pt:"já, anteriormente"},
   {ch:"长",py:"cháng",pt:"comprido, longo"},
   {ch:"帮",py:"bāng",pt:"ajudar, auxiliar"},
   {ch:"介绍",py:"jièshào",pt:"apresentar, recomendar, introduzir"},
  ],
  texts:[
   {title:"1 · 在教室 (Na sala de aula)",lines:[
    {sp:"A",zh:"生日快乐！这是送给你的！",py:"Shēngrì kuàilè! Zhè shì sòng gěi nǐ de!",pt:"Feliz aniversário! Isso é para você!"},
    {sp:"B",zh:"是什么？是一本书吗？",py:"Shì shénme? Shì yī běn shū ma?",pt:"O que é? É um livro?"},
    {sp:"A",zh:"对，这本书是我写的。",py:"Duì, zhè běn shū shì wǒ xiě de.",pt:"Sim, este livro foi escrito por mim."},
    {sp:"B",zh:"太谢谢你了！",py:"Tài xièxie nǐ le!",pt:"Muito obrigado!"},
   ]},
   {title:"2 · 在家里 (Em casa)",lines:[
    {sp:"A",zh:"早上有你一个电话。",py:"Zǎoshang yǒu nǐ yí ge diànhuà.",pt:"Esta manhã teve um telefonema para você."},
    {sp:"B",zh:"电话是谁打的？",py:"Diànhuà shì shéi dǎ de?",pt:"De quem foi o telefonema?"},
    {sp:"A",zh:"不知道，是儿子接的。",py:"Bù zhīdào, shì érzi jiē de.",pt:"Não sei, foi nosso filho quem atendeu."},
    {sp:"B",zh:"好，晚上我问一下儿子。",py:"Hǎo, wǎnshang wǒ wèn yīxià érzi.",pt:"Certo, esta noite pergunto ao filho."},
   ]},
   {title:"3 · 在学校 (Na escola)",lines:[
    {sp:"A",zh:"这个工作是他帮我介绍的。",py:"Zhège gōngzuò shì tā bāng wǒ jièshào de.",pt:"Foi ele quem me recomendou para este trabalho."},
    {sp:"B",zh:"你已经开始工作了吗？非常好！",py:"Nǐ yǐjīng kāishǐ gōngzuò le ma? Fēicháng hǎo!",pt:"Você já começou a trabalhar? Muito bem!"},
    {sp:"A",zh:"开始两个多月了，长了很多经验。",py:"Kāishǐ liǎng ge duō yuè le, zhǎng le hěn duō jīngyàn.",pt:"Já faz mais de dois meses, adquiri muita experiência."},
   ]},
  ]
 },
 {num:5,zh:"就买这件吧",py:"Jiù mǎi zhè jiàn ba",pt:"Então compre este",
  words:[
   {ch:"外面",py:"wàimiàn",pt:"lá fora, o exterior"},
   {ch:"准备",py:"zhǔnbèi",pt:"preparar, planejar; estar pronto"},
   {ch:"就",py:"jiù",pt:"então, logo, já (advérbio enfático)"},
   {ch:"鱼",py:"yú",pt:"peixe"},
   {ch:"吧",py:"ba",pt:"partícula de sugestão/consulta"},
   {ch:"件",py:"jiàn",pt:"classificador para roupas e assuntos"},
   {ch:"还",py:"hái",pt:"ainda; também; além disso"},
   {ch:"可以",py:"kěyǐ",pt:"poder, ser permitido, estar bem"},
   {ch:"不错",py:"búcuò",pt:"muito bom, não está mal"},
   {ch:"考试",py:"kǎoshì",pt:"exame, prova, teste"},
   {ch:"咖啡",py:"kāfēi",pt:"café (a bebida)"},
   {ch:"对",py:"duì",pt:"para, em relação a (preposição)"},
   {ch:"意思",py:"yìsi",pt:"significado, sentido"},
   {ch:"以后",py:"yǐhòu",pt:"depois, no futuro, mais tarde"},
  ],
  texts:[
   {title:"1 · 在家里 (Em casa)",lines:[
    {sp:"A",zh:"晚上我们去饭馆吃饭，怎么样？",py:"Wǎnshang wǒmen qù fànguǎn chī fàn, zěnmeyàng?",pt:"Que tal irmos a um restaurante jantar hoje à noite?"},
    {sp:"B",zh:"我不想去外面吃，我想在家吃。",py:"Wǒ bù xiǎng qù wàimiàn chī, wǒ xiǎng zài jiā chī.",pt:"Não quero sair para comer, prefiro comer em casa."},
    {sp:"A",zh:"那你准备做什么呢？",py:"Nà nǐ zhǔnbèi zuò shénme ne?",pt:"Então o que você planeja fazer?"},
    {sp:"B",zh:"就做你爱吃的鱼吧。",py:"Jiù zuò nǐ ài chī de yú ba.",pt:"Vou fazer o peixe que você adora comer."},
   ]},
   {title:"2 · 在商店 (Na loja)",lines:[
    {sp:"A",zh:"帮我看一下这件衣服怎么样。",py:"Bāng wǒ kàn yīxià zhè jiàn yīfu zěnmeyàng.",pt:"Me ajude a ver como fica esta roupa."},
    {sp:"B",zh:"颜色还可以，就是有点儿大。",py:"Yánsè hái kěyǐ, jiùshì yǒudiǎnr dà.",pt:"A cor está boa, só que está um pouco grande."},
    {sp:"A",zh:"这件小的怎么样？",py:"Zhè jiàn xiǎo de zěnmeyàng?",pt:"E esta menor, como fica?"},
    {sp:"B",zh:"这件不错，就买这件吧。",py:"Zhè jiàn búcuò, jiù mǎi zhè jiàn ba.",pt:"Esta está ótima, então compre esta."},
   ]},
   {title:"3 · 考试以后 (Depois do exame)",lines:[
    {sp:"A",zh:"考试怎么样？",py:"Kǎoshì zěnmeyàng?",pt:"Como foi o exame?"},
    {sp:"B",zh:"还可以。考试以后我们去喝咖啡吧。",py:"Hái kěyǐ. Kǎoshì yǐhòu wǒmen qù hē kāfēi ba.",pt:"Foi razoável. Depois do exame vamos tomar um café."},
    {sp:"A",zh:"好啊，这个意思不错！",py:"Hǎo a, zhège yìsi búcuò!",pt:"Ótimo, boa ideia!"},
   ]},
  ]
 },
 {num:6,zh:"你怎么不吃了",py:"Nǐ zěnme bù chī le",pt:"Por que você parou de comer?",
  words:[
   {ch:"门",py:"mén",pt:"porta, portão"},
   {ch:"外",py:"wài",pt:"fora, exterior, de fora"},
   {ch:"自行车",py:"zìxíngchē",pt:"bicicleta"},
   {ch:"羊肉",py:"yángròu",pt:"carne de carneiro ou ovelha"},
   {ch:"好吃",py:"hǎochī",pt:"delicioso, saboroso, gostoso"},
   {ch:"面条",py:"miàntiáo",pt:"macarrão, talharim"},
   {ch:"因为",py:"yīnwèi",pt:"porque, pois, já que"},
   {ch:"游泳",py:"yóuyǒng",pt:"nadar"},
   {ch:"所以",py:"suǒyǐ",pt:"por isso, portanto, assim"},
   {ch:"经常",py:"jīngcháng",pt:"frequentemente, habitualmente"},
   {ch:"打篮球",py:"dǎ lánqiú",pt:"jogar basquete"},
   {ch:"公斤",py:"gōngjīn",pt:"quilograma (kg)"},
   {ch:"姐姐",py:"jiějie",pt:"irmã mais velha"},
  ],
  texts:[
   {title:"1 · 在学校 (Na escola)",lines:[
    {sp:"A",zh:"你知道小王今天什么时候来学校吗？",py:"Nǐ zhīdào Xiǎo Wáng jīntiān shénme shíhou lái xuéxiào ma?",pt:"Você sabe quando o Xiao Wang vai chegar à escola hoje?"},
    {sp:"B",zh:"他已经来了。",py:"Tā yǐjīng lái le.",pt:"Ele já chegou."},
    {sp:"A",zh:"你怎么知道他来了？",py:"Nǐ zěnme zhīdào tā lái le?",pt:"Como você sabe que ele chegou?"},
    {sp:"B",zh:"我在门外看见他的自行车了。",py:"Wǒ zài mén wài kànjiàn tā de zìxíngchē le.",pt:"Vi a bicicleta dele do lado de fora da porta."},
   ]},
   {title:"2 · 在饭馆 (No restaurante)",lines:[
    {sp:"A",zh:"今天的羊肉很好吃，你怎么不吃了？",py:"Jīntiān de yángròu hěn hǎochī, nǐ zěnme bù chī le?",pt:"O carneiro de hoje está delicioso. Por que você parou de comer?"},
    {sp:"B",zh:"这个星期天天都吃羊肉，不想吃了。",py:"Zhège xīngqī tiāntiān dōu chī yángròu, bù xiǎng chī le.",pt:"Esta semana comi carneiro todos os dias. Não quero mais."},
    {sp:"A",zh:"那你还想吃什么？",py:"Nà nǐ hái xiǎng chī shénme?",pt:"Então o que mais você quer comer?"},
    {sp:"B",zh:"来一点儿面条吧。",py:"Lái yīdiǎnr miàntiáo ba.",pt:"Traga um pouco de macarrão."},
   ]},
   {title:"3 · 聊天 (Conversando)",lines:[
    {sp:"A",zh:"你经常打篮球还是游泳？",py:"Nǐ jīngcháng dǎ lánqiú háishi yóuyǒng?",pt:"Você costuma jogar basquete ou nadar?"},
    {sp:"B",zh:"我姐姐经常游泳，因为游泳好，所以我也学游泳了。",py:"Wǒ jiějie jīngcháng yóuyǒng, yīnwèi yóuyǒng hǎo, suǒyǐ wǒ yě xué yóuyǒng le.",pt:"Minha irmã mais velha nada frequentemente. Como é bom, então eu também aprendi a nadar."},
   ]},
  ]
 },
 {num:7,zh:"你家离公司远吗",py:"Nǐ jiā lí gōngsī yuǎn ma",pt:"Sua casa fica longe da empresa?",
  words:[
   {ch:"教室",py:"jiàoshì",pt:"sala de aula, classe"},
   {ch:"机场",py:"jīchǎng",pt:"aeroporto"},
   {ch:"路",py:"lù",pt:"caminho, rua, estrada"},
   {ch:"离",py:"lí",pt:"afastar-se de; estar distante de"},
   {ch:"公司",py:"gōngsī",pt:"empresa, companhia, firma"},
   {ch:"远",py:"yuǎn",pt:"longe, distante"},
   {ch:"公共汽车",py:"gōnggòng qìchē",pt:"ônibus (transporte público)"},
   {ch:"小时",py:"xiǎoshí",pt:"hora (unidade de tempo)"},
   {ch:"慢",py:"màn",pt:"lento, devagar, pausado"},
   {ch:"快",py:"kuài",pt:"rápido, veloz, depressa"},
   {ch:"过",py:"guò",pt:"passar (tempo); partícula aspectual"},
   {ch:"走",py:"zǒu",pt:"caminhar, andar; partir, ir"},
   {ch:"到",py:"dào",pt:"chegar; ir até; alcançar"},
  ],
  texts:[
   {title:"1 · 在家里 (Em casa)",lines:[
    {sp:"A",zh:"大卫回来了吗？",py:"Dàwèi huílai le ma?",pt:"O David voltou?"},
    {sp:"B",zh:"没有，他还在教室学习呢。",py:"Méiyǒu, tā hái zài jiàoshì xuéxí ne.",pt:"Não, ele ainda está na sala estudando."},
    {sp:"A",zh:"已经9点多了，他怎么还在学习？",py:"Yǐjīng jiǔ diǎn duō le, tā zěnme hái zài xuéxí?",pt:"Já passa das 9 horas. Por que ainda está estudando?"},
    {sp:"B",zh:"明天有考试，他说今天要好好准备。",py:"Míngtiān yǒu kǎoshì, tā shuō jīntiān yào hǎohǎo zhǔnbèi.",pt:"Tem prova amanhã. Ele disse que vai se preparar bem hoje."},
   ]},
   {title:"2 · 去机场的路上 (A caminho do aeroporto)",lines:[
    {sp:"A",zh:"你现在在哪儿呢？",py:"Nǐ xiànzài zài nǎr ne?",pt:"Onde você está agora?"},
    {sp:"B",zh:"在去机场的路上。你已经到了吗？",py:"Zài qù jīchǎng de lùshang. Nǐ yǐjīng dào le ma?",pt:"Estou a caminho do aeroporto. Você já chegou?"},
    {sp:"A",zh:"我下飞机了。你还有多长时间能到这儿？",py:"Wǒ xià fēijī le. Nǐ hái yǒu duō cháng shíjiān néng dào zhèr?",pt:"Já desembarquei. Quanto tempo você ainda precisa para chegar aqui?"},
    {sp:"B",zh:"二十分钟就到。",py:"Èrshí fēnzhōng jiù dào.",pt:"Chego em vinte minutos."},
   ]},
  ]
 },
 {num:8,zh:"让我想想再告诉你",py:"Ràng wǒ xiǎngxiang zài gàosù nǐ",pt:"Deixa eu pensar um pouco, depois te digo",
  words:[
   {ch:"让",py:"ràng",pt:"deixar, permitir; ceder; mandar"},
   {ch:"再",py:"zài",pt:"de novo, outra vez; depois"},
   {ch:"告诉",py:"gàosù",pt:"dizer, contar, informar"},
   {ch:"等",py:"děng",pt:"esperar, aguardar"},
   {ch:"找",py:"zhǎo",pt:"procurar, buscar"},
   {ch:"服务员",py:"fúwùyuán",pt:"garçom, atendente, funcionário"},
   {ch:"白",py:"bái",pt:"branco; sem resultado"},
   {ch:"黑",py:"hēi",pt:"preto, escuro"},
   {ch:"贵",py:"guì",pt:"caro, dispendioso"},
   {ch:"事情",py:"shìqíng",pt:"coisa, assunto, questão, negócio"},
  ],
  texts:[
   {title:"1 · 在教室 (Na sala de aula)",lines:[
    {sp:"A",zh:"我们下午去看电影，好吗？",py:"Wǒmen xiàwǔ qù kàn diànyǐng, hǎo ma?",pt:"Vamos ao cinema esta tarde, tudo bem?"},
    {sp:"B",zh:"今天下午我没有时间，明天下午再去吧。",py:"Jīntiān xiàwǔ wǒ méiyǒu shíjiān, míngtiān xiàwǔ zài qù ba.",pt:"Esta tarde não tenho tempo, vamos amanhã à tarde."},
    {sp:"A",zh:"你想看什么电影？",py:"Nǐ xiǎng kàn shénme diànyǐng?",pt:"Que filme você quer ver?"},
    {sp:"B",zh:"让我想想再告诉你。",py:"Ràng wǒ xiǎngxiang zài gàosù nǐ.",pt:"Deixa eu pensar um pouco, depois te digo."},
   ]},
   {title:"2 · 在宿舍 (No dormitório)",lines:[
    {sp:"A",zh:"外边天气很好，我们出去运动运动吧！",py:"Wàibiān tiānqì hěn hǎo, wǒmen chūqù yùndòng yùndòng ba!",pt:"O tempo lá fora está ótimo, vamos sair para se exercitar!"},
    {sp:"B",zh:"你等等我，好吗？王老师让我给大卫打个电话。",py:"Nǐ děngdeng wǒ, hǎo ma? Wáng lǎoshī ràng wǒ gěi Dàwèi dǎ ge diànhuà.",pt:"Pode me esperar? O professor Wang me pediu para ligar para o David."},
    {sp:"A",zh:"回来再打吧。找大卫有什么事情吗？",py:"Huílai zài dǎ ba. Zhǎo Dàwèi yǒu shénme shìqíng ma?",pt:"Ligue quando voltar. O que precisa do David?"},
    {sp:"B",zh:"听说大卫病了，我想找时间去看看他。",py:"Tīngshuō Dàwèi bìng le, wǒ xiǎng zhǎo shíjiān qù kànkan tā.",pt:"Ouvi dizer que o David está doente. Quero arrumar um tempo para visitá-lo."},
   ]},
  ]
 },
 {num:9,zh:"题太多，我没做完",py:"Tí tài duō, wǒ méi zuòwán",pt:"Havia questões demais, não terminei",
  words:[
   {ch:"错",py:"cuò",pt:"errado, incorreto, equivocado"},
   {ch:"从",py:"cóng",pt:"de, desde, a partir de"},
   {ch:"跳舞",py:"tiào wǔ",pt:"dançar"},
   {ch:"第一",py:"dì yī",pt:"primeiro, o número um"},
   {ch:"希望",py:"xīwàng",pt:"esperar, desejar; esperança"},
   {ch:"问题",py:"wèntí",pt:"problema, questão, pergunta"},
   {ch:"欢迎",py:"huānyíng",pt:"bem-vindo; acolher com prazer"},
   {ch:"上班",py:"shàng bān",pt:"ir ao trabalho, começar o expediente"},
   {ch:"懂",py:"dǒng",pt:"entender, compreender"},
   {ch:"完",py:"wán",pt:"terminar, acabar, finalizar"},
   {ch:"题",py:"tí",pt:"questão, problema, tema, exercício"},
  ],
  texts:[
   {title:"1 · 打电话 (Ao telefone)",lines:[
    {sp:"A",zh:"你好！请问张欢在吗？",py:"Nǐ hǎo! Qǐngwèn Zhāng Huān zài ma?",pt:"Olá! Com licença, Zhang Huan está?"},
    {sp:"B",zh:"你打错了，我们这儿没有叫张欢的。",py:"Nǐ dǎcuò le, wǒmen zhèr méiyǒu jiào Zhāng Huān de.",pt:"Você ligou para o número errado. Aqui não tem ninguém chamado Zhang Huan."},
    {sp:"A",zh:"对不起。",py:"Duìbuqǐ.",pt:"Desculpe."},
   ]},
   {title:"2 · 在学校 (Na escola)",lines:[
    {sp:"A",zh:"您从几岁开始学习跳舞？",py:"Nín cóng jǐ suì kāishǐ xuéxí tiào wǔ?",pt:"Com quantos anos você começou a aprender dança?"},
    {sp:"B",zh:"我第一次跳舞是在七岁的时候。",py:"Wǒ dì yī cì tiào wǔ shì zài qī suì de shíhou.",pt:"A primeira vez que dancei foi quando tinha sete anos."},
    {sp:"A",zh:"我女儿今年也七岁了。我希望她能跟您学跳舞，可以吗？",py:"Wǒ nǚér jīnnián yě qī suì le. Wǒ xīwàng tā néng gēn nín xué tiào wǔ, kěyǐ ma?",pt:"Minha filha também tem sete anos este ano. Espero que ela possa aprender dança com você, tudo bem?"},
    {sp:"B",zh:"没问题，非常欢迎。",py:"Méi wèntí, fēicháng huānyíng.",pt:"Sem problema, seja muito bem-vinda."},
   ]},
  ]
 },
 {num:10,zh:"别找了，手机在桌子上呢",py:"Bié zhǎo le, shǒujī zài zhuōzi shàng ne",pt:"Para de procurar, o celular está em cima da mesa",
  words:[
   {ch:"课",py:"kè",pt:"aula, lição; disciplina"},
   {ch:"帮助",py:"bāngzhù",pt:"ajudar, auxiliar, apoiar"},
   {ch:"别",py:"bié",pt:"não (imperativo); outro, diferente"},
   {ch:"哥哥",py:"gēge",pt:"irmão mais velho"},
   {ch:"鸡蛋",py:"jīdàn",pt:"ovo de galinha"},
   {ch:"西瓜",py:"xīguā",pt:"melancia"},
   {ch:"正在",py:"zhèngzài",pt:"estar fazendo (ação em progresso)"},
   {ch:"手机",py:"shǒujī",pt:"celular, telemóvel"},
   {ch:"洗",py:"xǐ",pt:"lavar, limpar"},
   {ch:"桌子",py:"zhuōzi",pt:"mesa, escrivaninha"},
  ],
  texts:[
   {title:"1 · 在家里 (Em casa)",lines:[
    {sp:"A",zh:"不要看电视了，明天上午还有汉语课呢。",py:"Búyào kàn diànshì le, míngtiān shàngwǔ hái yǒu Hànyǔ kè ne.",pt:"Pare de ver televisão. Amanhã de manhã ainda tem aula de chinês."},
    {sp:"B",zh:"看电视对学汉语有帮助。",py:"Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.",pt:"Ver televisão ajuda no aprendizado do chinês."},
    {sp:"A",zh:"明天的课你都准备好了吗？",py:"Míngtiān de kè nǐ dōu zhǔnbèi hǎo le ma?",pt:"Você está bem preparado para as aulas de amanhã?"},
    {sp:"B",zh:"都准备好了。",py:"Dōu zhǔnbèi hǎo le.",pt:"Estou tudo preparado."},
   ]},
   {title:"2 · 在医院 (No hospital)",lines:[
    {sp:"A",zh:"别看报纸了，医生说你要多休息。",py:"Bié kàn bàozhǐ le, yīshēng shuō nǐ yào duō xiūxi.",pt:"Para de ler jornal. O médico disse que você precisa descansar mais."},
    {sp:"B",zh:"好，不看了。给我一杯茶吧。",py:"Hǎo, bú kàn le. Gěi wǒ yī bēi chá ba.",pt:"Tudo bem, paro de ler. Me dê uma xícara de chá."},
    {sp:"A",zh:"医生说吃药后两个小时不要喝茶。",py:"Yīshēng shuō chī yào hòu liǎng ge xiǎoshí búyào hē chá.",pt:"O médico disse para não tomar chá nas duas horas após tomar o remédio."},
    {sp:"B",zh:"医生还说什么了？",py:"Yīshēng hái shuō shénme le?",pt:"O que mais o médico disse?"},
    {sp:"A",zh:"医生让你听我的。",py:"Yīshēng ràng nǐ tīng wǒ de.",pt:"O médico disse para você me ouvir."},
   ]},
  ]
 },
 {num:11,zh:"他比我大三岁",py:"Tā bǐ wǒ dà sān suì",pt:"Ele é três anos mais velho do que eu",
  words:[
   {ch:"唱歌",py:"chàng gē",pt:"cantar (uma música)"},
   {ch:"男",py:"nán",pt:"homem, masculino"},
   {ch:"女",py:"nǚ",pt:"mulher, feminino"},
   {ch:"孩子",py:"háizi",pt:"criança; filho ou filha"},
   {ch:"右边",py:"yòubiān",pt:"lado direito, à direita"},
   {ch:"比",py:"bǐ",pt:"comparar; do que (comparativo)"},
   {ch:"便宜",py:"piányí",pt:"barato, em conta, econômico"},
   {ch:"说话",py:"shuō huà",pt:"falar, conversar, dizer"},
   {ch:"可能",py:"kěnéng",pt:"talvez, possivelmente; possível"},
   {ch:"去年",py:"qùnián",pt:"ano passado"},
   {ch:"姓",py:"xìng",pt:"sobrenome; se chamar (de sobrenome)"},
  ],
  texts:[
   {title:"1 · 在歌厅 (No karaokê)",lines:[
    {sp:"A",zh:"王方，昨天和你一起唱歌的人是谁？",py:"Wáng Fāng, zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?",pt:"Wang Fang, quem era a pessoa que estava cantando com você ontem?"},
    {sp:"B",zh:"一个朋友。",py:"Yī ge péngyou.",pt:"Um amigo."},
    {sp:"A",zh:"什么朋友？是不是男朋友？",py:"Shénme péngyou? Shì bu shì nánpéngyou?",pt:"Que tipo de amigo? É namorado?"},
    {sp:"B",zh:"不是不是，我同学介绍的，昨天第一次见。",py:"Bú shì bú shì, wǒ tóngxué jièshào de, zuótiān dì yī cì jiàn.",pt:"Não, não. Um colega me apresentou. Ontem foi a primeira vez que o encontrei."},
   ]},
   {title:"2 · 在宿舍 (No dormitório)",lines:[
    {sp:"A",zh:"左边这个看报纸的女孩子是你姐姐吗？",py:"Zuǒbiān zhège kàn bàozhǐ de nǚ háizi shì nǐ jiějie ma?",pt:"A garota da esquerda lendo jornal é sua irmã mais velha?"},
    {sp:"B",zh:"是，右边写字的那个人是我哥哥。",py:"Shì, yòubiān xiě zì de nàge rén shì wǒ gēge.",pt:"É. A pessoa da direita escrevendo é meu irmão mais velho."},
    {sp:"A",zh:"你哥哥多大？",py:"Nǐ gēge duō dà?",pt:"Quantos anos seu irmão tem?"},
    {sp:"B",zh:"25岁，他比我大三岁。",py:"Èrshíwǔ suì, tā bǐ wǒ dà sān suì.",pt:"25 anos. Ele é três anos mais velho do que eu."},
   ]},
  ]
 },
 {num:12,zh:"你穿得太少了",py:"Nǐ chuān de tài shǎo le",pt:"Você está vestindo roupas de menos",
  words:[
   {ch:"得",py:"de",pt:"partícula de complemento de grau"},
   {ch:"妻子",py:"qīzi",pt:"esposa, mulher"},
   {ch:"穿",py:"chuān",pt:"vestir, usar (roupa, sapatos)"},
   {ch:"雪",py:"xuě",pt:"neve"},
   {ch:"零",py:"líng",pt:"zero; e (em números)"},
   {ch:"丈夫",py:"zhàngfu",pt:"marido, esposo"},
   {ch:"进",py:"jìn",pt:"entrar, ir para dentro"},
   {ch:"近",py:"jìn",pt:"perto, próximo, vizinho"},
   {ch:"弟弟",py:"dìdi",pt:"irmão mais novo"},
   {ch:"度",py:"dù",pt:"grau (temperatura); vez"},
   {ch:"身体",py:"shēntǐ",pt:"corpo; saúde física"},
  ],
  texts:[
   {title:"1 · 在教室 (Na sala de aula)",lines:[
    {sp:"A",zh:"你每天早上几点起床？",py:"Nǐ měitiān zǎoshang jǐ diǎn qǐchuáng?",pt:"A que horas você se levanta todo dia de manhã?"},
    {sp:"B",zh:"六点多。",py:"Liù diǎn duō.",pt:"Um pouco depois das seis."},
    {sp:"A",zh:"你比我早起一个小时。",py:"Nǐ bǐ wǒ zǎo qǐ yī ge xiǎoshí.",pt:"Você se levanta uma hora mais cedo do que eu."},
    {sp:"B",zh:"我睡得也早，我每天晚上十点就睡觉。早睡早起身体好。",py:"Wǒ shuì de yě zǎo, wǒ měitiān wǎnshang shí diǎn jiù shuìjiào. Zǎo shuì zǎo qǐ shēntǐ hǎo.",pt:"Também durmo cedo. Durmo às dez toda noite. Dormir e acordar cedo é bom para a saúde."},
   ]},
   {title:"2 · 在朋友家 (Na casa de um amigo)",lines:[
    {sp:"A",zh:"再来点儿米饭吧，你吃得太少了。",py:"Zài lái diǎnr mǐfàn ba, nǐ chī de tài shǎo le.",pt:"Tome mais um pouco de arroz. Você comeu muito pouco."},
    {sp:"B",zh:"不少了，今天吃得很好，太谢谢你了。",py:"Bù shǎo le, jīntiān chī de hěn hǎo, tài xièxie nǐ le.",pt:"Não é pouco. Hoje comi muito bem. Muito obrigado."},
    {sp:"A",zh:"你做饭做得怎么样？",py:"Nǐ zuò fàn zuò de zěnmeyàng?",pt:"Como você cozinha?"},
    {sp:"B",zh:"不怎么样，我妻子比我做得好。",py:"Bù zěnmeyàng, wǒ qīzi bǐ wǒ zuò de hǎo.",pt:"Não muito bem. Minha esposa cozinha melhor do que eu."},
   ]},
  ]
 },
 {num:13,zh:"门开着呢",py:"Mén kāi zhe ne",pt:"A porta está aberta",
  words:[
   {ch:"着",py:"zhe",pt:"partícula: indica estado contínuo"},
   {ch:"往",py:"wǎng",pt:"para, em direção a, rumo a"},
   {ch:"一直",py:"yīzhí",pt:"sempre; direto; em linha reta"},
   {ch:"路口",py:"lùkǒu",pt:"cruzamento, encruzilhada"},
   {ch:"笑",py:"xiào",pt:"sorrir, rir"},
   {ch:"铅笔",py:"qiānbǐ",pt:"lápis"},
   {ch:"宾馆",py:"bīnguǎn",pt:"hotel"},
   {ch:"手",py:"shǒu",pt:"mão"},
   {ch:"拿",py:"ná",pt:"segurar, pegar, trazer na mão"},
   {ch:"长",py:"zhǎng",pt:"crescer, desenvolver-se"},
   {ch:"班",py:"bān",pt:"turma, classe; turno de trabalho"},
  ],
  texts:[
   {title:"1 · 在办公室 (No escritório)",lines:[
    {sp:"A",zh:"门开着呢，请进。",py:"Mén kāi zhe ne, qǐng jìn.",pt:"A porta está aberta. Por favor, entre."},
    {sp:"B",zh:"请问，张先生在吗？",py:"Qǐngwèn, Zhāng xiānshēng zài ma?",pt:"Com licença, o Sr. Zhang está?"},
    {sp:"A",zh:"他出去了。你下午再来吧。",py:"Tā chūqù le. Nǐ xiàwǔ zài lái ba.",pt:"Ele saiu. Volte à tarde."},
    {sp:"B",zh:"好的，谢谢！",py:"Hǎo de, xièxie!",pt:"Tudo bem, obrigado!"},
   ]},
   {title:"2 · 在办公室 (No escritório)",lines:[
    {sp:"A",zh:"那个正在说话的女孩儿是谁？",py:"Nàge zhèngzài shuōhuà de nǚháir shì shéi?",pt:"Quem é aquela garota que está falando?"},
    {sp:"B",zh:"我知道她的名字，她姓杨，叫杨笑笑，她姐姐是我同学。",py:"Wǒ zhīdào tā de míngzi, tā xìng Yáng, jiào Yáng Xiàoxiao, tā jiějie shì wǒ tóngxué.",pt:"Conheço o nome dela. Ela se chama Yang Xiaoxiao. A irmã dela é minha colega."},
    {sp:"A",zh:"那个手里拿着铅笔的呢？",py:"Nàge shǒu lǐ názhe qiānbǐ de ne?",pt:"E aquela que tem um lápis na mão?"},
    {sp:"B",zh:"我不认识。",py:"Wǒ bú rènshi.",pt:"Não a conheço."},
   ]},
  ]
 },
 {num:14,zh:"你看过那个电影吗",py:"Nǐ kànguo nàge diànyǐng ma",pt:"Você já viu aquele filme?",
  words:[
   {ch:"过",py:"guò",pt:"partícula de experiência passada"},
   {ch:"百",py:"bǎi",pt:"cem, centena"},
   {ch:"但是",py:"dànshì",pt:"mas, porém, contudo, entretanto"},
   {ch:"次",py:"cì",pt:"vez, número de vezes"},
   {ch:"晴",py:"qíng",pt:"ensolarado, tempo aberto e claro"},
   {ch:"玩儿",py:"wánr",pt:"brincar, se divertir, jogar"},
   {ch:"虽然",py:"suīrán",pt:"embora, apesar de, ainda que"},
   {ch:"有意思",py:"yǒu yìsi",pt:"interessante, divertido, curioso"},
  ],
  texts:[
   {title:"1 · 在教室 (Na sala de aula)",lines:[
    {sp:"A",zh:"你看过那个电影没有？",py:"Nǐ kànguo nàge diànyǐng méiyǒu?",pt:"Você já viu aquele filme?"},
    {sp:"B",zh:"没看过，听说很有意思。",py:"Méi kànguo, tīngshuō hěn yǒu yìsi.",pt:"Não, ouvi dizer que é muito interessante."},
    {sp:"A",zh:"那我们下个星期一起去看吧？",py:"Nà wǒmen xià ge xīngqī yìqǐ qù kàn ba?",pt:"Então que tal irmos juntos na semana que vem?"},
    {sp:"B",zh:"可以，但是我女朋友也想去。",py:"Kěyǐ, dànshì wǒ nǚpéngyou yě xiǎng qù.",pt:"Pode ser, mas minha namorada também quer ir."},
   ]},
   {title:"2 · 在办公室 (No escritório)",lines:[
    {sp:"A",zh:"听说你去过中国，还想去吗？",py:"Tīngshuō nǐ qùguo Zhōngguó, hái xiǎng qù ma?",pt:"Ouvi dizer que você foi à China. Quer voltar?"},
    {sp:"B",zh:"我虽然去过好几次，但是还想再去玩儿玩儿。",py:"Wǒ suīrán qùguo hǎojǐ cì, dànshì hái xiǎng zài qù wánr wánr.",pt:"Embora eu já tenha ido várias vezes, ainda quero voltar para me divertir."},
    {sp:"A",zh:"那我们一起去吧。",py:"Nà wǒmen yìqǐ qù ba.",pt:"Então vamos juntos."},
    {sp:"B",zh:"好啊，到时候我给你打电话。",py:"Hǎo a, dào shíhou wǒ gěi nǐ dǎ diànhuà.",pt:"Ótimo. Na hora certa te ligo."},
   ]},
  ]
 },
 {num:15,zh:"新年就要到了",py:"Xīnnián jiù yào dào le",pt:"O Ano Novo está chegando",
  words:[
   {ch:"日",py:"rì",pt:"dia; sol"},
   {ch:"新年",py:"xīnnián",pt:"Ano Novo"},
   {ch:"票",py:"piào",pt:"bilhete, ingresso, passagem"},
   {ch:"火车站",py:"huǒchēzhàn",pt:"estação de trem"},
   {ch:"大家",py:"dàjiā",pt:"todos, todo mundo, todo o grupo"},
   {ch:"更",py:"gèng",pt:"ainda mais, muito mais"},
   {ch:"妹妹",py:"mèimei",pt:"irmã mais nova"},
   {ch:"阴",py:"yīn",pt:"nublado, encoberto"},
  ],
  texts:[
   {title:"1 · 在朋友家 (Na casa de um amigo)",lines:[
    {sp:"A",zh:"今天是12月20日，新年就要到了。",py:"Jīntiān shì shí'èr yuè èrshí rì, xīnnián jiù yào dào le.",pt:"Hoje é 20 de dezembro. O Ano Novo está chegando."},
    {sp:"B",zh:"新年你准备做什么？",py:"Xīnnián nǐ zhǔnbèi zuò shénme?",pt:"O que você planeja fazer no Ano Novo?"},
    {sp:"A",zh:"我想去北京旅游，北京很不错，我去过一次。",py:"Wǒ xiǎng qù Běijīng lǚyóu, Běijīng hěn búcuò, wǒ qùguo yī cì.",pt:"Quero viajar para Pequim. Pequim é muito boa, já fui uma vez."},
    {sp:"B",zh:"你买票了吗？",py:"Nǐ mǎi piào le ma?",pt:"Você já comprou a passagem?"},
    {sp:"A",zh:"还没有呢，明天就去火车站买票。",py:"Hái méiyǒu ne, míngtiān jiù qù huǒchēzhàn mǎi piào.",pt:"Ainda não. Amanhã vou à estação de trem comprar."},
   ]},
   {title:"2 · 在公司 (Na empresa)",lines:[
    {sp:"A",zh:"时间过得真快，新的一年快要到了！",py:"Shíjiān guò de zhēn kuài, xīn de yī nián kuàiyào dào le!",pt:"O tempo voa! O novo ano está quase chegando!"},
    {sp:"B",zh:"是啊，谢谢大家这一年对我的帮助！",py:"Shì a, xièxie dàjiā zhè yī nián duì wǒ de bāngzhù!",pt:"É mesmo! Obrigado a todos pelo apoio durante este ano!"},
    {sp:"C",zh:"希望我们的公司明年更好！",py:"Xīwàng wǒmen de gōngsī míngnián gèng hǎo!",pt:"Espero que nossa empresa seja ainda melhor no próximo ano!"},
   ]},
  ]
 },
];

// 300 palavras completas
const ALL_300=[
 {ch:"爱",py:"ài",pt:"amor; amar",l:0},{ch:"吧",py:"ba",pt:"partícula de sugestão",l:5},
 {ch:"八",py:"bā",pt:"oito",l:0},{ch:"爸爸",py:"bàba",pt:"pai, papai",l:0},
 {ch:"白",py:"bái",pt:"branco",l:8},{ch:"百",py:"bǎi",pt:"cem",l:14},
 {ch:"帮助",py:"bāngzhù",pt:"ajudar",l:10},{ch:"报纸",py:"bàozhǐ",pt:"jornal",l:3},
 {ch:"北京",py:"Běijīng",pt:"Pequim",l:0},{ch:"杯子",py:"bēizi",pt:"copo, xícara",l:0},
 {ch:"本",py:"běn",pt:"classif. para livros",l:0},{ch:"比",py:"bǐ",pt:"do que (compar.)",l:11},
 {ch:"别",py:"bié",pt:"não (imperativo)",l:10},{ch:"不",py:"bù",pt:"não",l:0},
 {ch:"不客气",py:"bú kèqi",pt:"de nada",l:0},{ch:"菜",py:"cài",pt:"prato; verdura",l:0},
 {ch:"茶",py:"chá",pt:"chá",l:0},{ch:"长",py:"cháng",pt:"comprido",l:4},
 {ch:"唱歌",py:"chàng gē",pt:"cantar",l:11},{ch:"吃",py:"chī",pt:"comer",l:0},
 {ch:"出",py:"chū",pt:"sair",l:2},{ch:"船",py:"chuán",pt:"barco",l:0},
 {ch:"穿",py:"chuān",pt:"vestir",l:12},{ch:"出租车",py:"chūzūchē",pt:"táxi",l:0},
 {ch:"次",py:"cì",pt:"vez",l:14},{ch:"从",py:"cóng",pt:"de, desde",l:9},
 {ch:"错",py:"cuò",pt:"errado",l:9},{ch:"大",py:"dà",pt:"grande",l:0},
 {ch:"打电话",py:"dǎ diànhuà",pt:"telefonar",l:0},{ch:"打篮球",py:"dǎ lánqiú",pt:"jogar basquete",l:6},
 {ch:"大家",py:"dàjiā",pt:"todos",l:15},{ch:"但是",py:"dànshì",pt:"mas, porém",l:14},
 {ch:"到",py:"dào",pt:"chegar; até",l:7},{ch:"的",py:"de",pt:"partícula possessiva",l:0},
 {ch:"得",py:"de",pt:"partícula de grau",l:12},{ch:"等",py:"děng",pt:"esperar",l:8},
 {ch:"点",py:"diǎn",pt:"ponto; em ponto",l:0},{ch:"电脑",py:"diànnǎo",pt:"computador",l:0},
 {ch:"电视",py:"diànshì",pt:"televisão",l:0},{ch:"电影",py:"diànyǐng",pt:"filme",l:0},
 {ch:"弟弟",py:"dìdi",pt:"irmão mais novo",l:12},{ch:"第一",py:"dì yī",pt:"primeiro",l:9},
 {ch:"懂",py:"dǒng",pt:"entender",l:9},{ch:"东西",py:"dōngxi",pt:"coisa, objeto",l:0},
 {ch:"都",py:"dōu",pt:"todos, ambos",l:0},{ch:"读",py:"dú",pt:"ler",l:0},
 {ch:"对",py:"duì",pt:"para; correto",l:5},{ch:"对不起",py:"duìbuqǐ",pt:"desculpe",l:0},
 {ch:"多",py:"duō",pt:"muito",l:0},{ch:"多少",py:"duōshǎo",pt:"quanto",l:0},
 {ch:"二",py:"èr",pt:"dois",l:0},{ch:"儿子",py:"érzi",pt:"filho",l:0},
 {ch:"饭馆",py:"fànguǎn",pt:"restaurante",l:0},{ch:"房间",py:"fángjiān",pt:"quarto",l:3},
 {ch:"飞机",py:"fēijī",pt:"avião",l:0},{ch:"非常",py:"fēicháng",pt:"muito",l:4},
 {ch:"分钟",py:"fēnzhōng",pt:"minuto",l:0},{ch:"服务员",py:"fúwùyuán",pt:"garçom",l:8},
 {ch:"高",py:"gāo",pt:"alto",l:2},{ch:"告诉",py:"gàosù",pt:"dizer, contar",l:8},
 {ch:"高兴",py:"gāoxìng",pt:"contente",l:0},{ch:"个",py:"gè",pt:"classif. geral",l:0},
 {ch:"哥哥",py:"gēge",pt:"irmão mais velho",l:10},{ch:"给",py:"gěi",pt:"dar; para",l:4},
 {ch:"公共汽车",py:"gōnggòng qìchē",pt:"ônibus",l:7},{ch:"公斤",py:"gōngjīn",pt:"quilograma",l:6},
 {ch:"公司",py:"gōngsī",pt:"empresa",l:7},{ch:"工作",py:"gōngzuò",pt:"trabalho",l:0},
 {ch:"狗",py:"gǒu",pt:"cachorro",l:0},{ch:"贵",py:"guì",pt:"caro",l:8},
 {ch:"过",py:"guò",pt:"passar; partícula",l:7},{ch:"还",py:"hái",pt:"ainda; também",l:5},
 {ch:"孩子",py:"háizi",pt:"criança",l:11},{ch:"汉语",py:"hànyǔ",pt:"chinês mandarim",l:0},
 {ch:"号",py:"hào",pt:"número; dia",l:0},{ch:"好",py:"hǎo",pt:"bom, bem",l:0},
 {ch:"好吃",py:"hǎochī",pt:"delicioso",l:6},{ch:"和",py:"hé",pt:"e; com",l:0},
 {ch:"喝",py:"hē",pt:"beber",l:0},{ch:"黑",py:"hēi",pt:"preto",l:8},
 {ch:"很",py:"hěn",pt:"muito",l:0},{ch:"红",py:"hóng",pt:"vermelho",l:3},
 {ch:"后面",py:"hòumiàn",pt:"atrás de",l:0},{ch:"欢迎",py:"huānyíng",pt:"bem-vindo",l:9},
 {ch:"回",py:"huí",pt:"voltar",l:0},{ch:"会",py:"huì",pt:"poder; saber",l:0},
 {ch:"回答",py:"huídá",pt:"responder",l:0},{ch:"火车站",py:"huǒchēzhàn",pt:"estação de trem",l:15},
 {ch:"几",py:"jǐ",pt:"quantos; vários",l:0},{ch:"家",py:"jiā",pt:"casa, família",l:0},
 {ch:"件",py:"jiàn",pt:"classif. para roupas",l:5},{ch:"叫",py:"jiào",pt:"chamar-se",l:0},
 {ch:"教室",py:"jiàoshì",pt:"sala de aula",l:7},{ch:"机场",py:"jīchǎng",pt:"aeroporto",l:7},
 {ch:"鸡蛋",py:"jīdàn",pt:"ovo de galinha",l:10},{ch:"姐姐",py:"jiějie",pt:"irmã mais velha",l:6},
 {ch:"近",py:"jìn",pt:"perto",l:12},{ch:"进",py:"jìn",pt:"entrar",l:12},
 {ch:"今天",py:"jīntiān",pt:"hoje",l:0},{ch:"就",py:"jiù",pt:"então, logo",l:5},
 {ch:"九",py:"jiǔ",pt:"nove",l:0},{ch:"觉得",py:"juéde",pt:"achar, sentir",l:1},
 {ch:"开",py:"kāi",pt:"abrir; começar",l:0},{ch:"咖啡",py:"kāfēi",pt:"café",l:5},
 {ch:"开始",py:"kāishǐ",pt:"começar",l:4},{ch:"看",py:"kàn",pt:"olhar, ver",l:0},
 {ch:"看见",py:"kànjiàn",pt:"ver, enxergar",l:0},{ch:"考试",py:"kǎoshì",pt:"exame",l:5},
 {ch:"课",py:"kè",pt:"aula, lição",l:10},{ch:"可能",py:"kěnéng",pt:"talvez",l:11},
 {ch:"可以",py:"kěyǐ",pt:"poder",l:5},{ch:"块",py:"kuài",pt:"classif. moeda",l:0},
 {ch:"快",py:"kuài",pt:"rápido",l:7},{ch:"快乐",py:"kuàilè",pt:"feliz",l:4},
 {ch:"来",py:"lái",pt:"vir",l:0},{ch:"老师",py:"lǎoshī",pt:"professor",l:0},
 {ch:"了",py:"le",pt:"partícula de mudança",l:0},{ch:"累",py:"lèi",pt:"cansado",l:0},
 {ch:"冷",py:"lěng",pt:"frio",l:0},{ch:"离",py:"lí",pt:"longe de",l:7},
 {ch:"里",py:"lǐ",pt:"dentro, em",l:0},{ch:"两",py:"liǎng",pt:"dois (+ classif.)",l:4},
 {ch:"零",py:"líng",pt:"zero",l:12},{ch:"六",py:"liù",pt:"seis",l:0},
 {ch:"路",py:"lù",pt:"caminho, rua",l:7},{ch:"旅游",py:"lǚyóu",pt:"viajar",l:1},
 {ch:"吗",py:"ma",pt:"partícula interrogativa",l:0},{ch:"卖",py:"mài",pt:"vender",l:0},
 {ch:"买",py:"mǎi",pt:"comprar",l:0},{ch:"妈妈",py:"māma",pt:"mamãe",l:0},
 {ch:"慢",py:"màn",pt:"lento",l:7},{ch:"忙",py:"máng",pt:"ocupado",l:2},
 {ch:"猫",py:"māo",pt:"gato",l:0},{ch:"没",py:"méi",pt:"não ter; não",l:0},
 {ch:"每",py:"měi",pt:"cada, todo",l:2},{ch:"没关系",py:"méi guānxi",pt:"não tem problema",l:0},
 {ch:"妹妹",py:"mèimei",pt:"irmã mais nova",l:15},{ch:"门",py:"mén",pt:"porta",l:6},
 {ch:"米饭",py:"mǐfàn",pt:"arroz cozido",l:0},{ch:"明天",py:"míngtiān",pt:"amanhã",l:0},
 {ch:"名字",py:"míngzi",pt:"nome",l:0},{ch:"那",py:"nà",pt:"aquele, isso",l:0},
 {ch:"哪",py:"nǎ",pt:"qual, que",l:0},{ch:"男",py:"nán",pt:"homem, masculino",l:11},
 {ch:"那儿",py:"nàr",pt:"ali, lá",l:0},{ch:"哪儿",py:"nǎr",pt:"onde",l:0},
 {ch:"呢",py:"ne",pt:"partícula interrogativa",l:0},{ch:"能",py:"néng",pt:"poder, ser capaz",l:0},
 {ch:"你",py:"nǐ",pt:"tu, você",l:0},{ch:"年",py:"nián",pt:"ano",l:0},
 {ch:"您",py:"nín",pt:"você (formal)",l:0},{ch:"牛奶",py:"niúnǎi",pt:"leite",l:3},
 {ch:"女儿",py:"nǚér",pt:"filha",l:0},{ch:"女",py:"nǚ",pt:"mulher, feminino",l:11},
 {ch:"旁边",py:"pángbiān",pt:"ao lado de",l:3},{ch:"跑步",py:"pǎobù",pt:"correr",l:2},
 {ch:"朋友",py:"péngyǒu",pt:"amigo",l:0},{ch:"便宜",py:"piányí",pt:"barato",l:11},
 {ch:"票",py:"piào",pt:"bilhete",l:15},{ch:"漂亮",py:"piàoliang",pt:"bonito, lindo",l:0},
 {ch:"苹果",py:"píngguǒ",pt:"maçã",l:0},{ch:"七",py:"qī",pt:"sete",l:0},
 {ch:"钱",py:"qián",pt:"dinheiro",l:0},{ch:"千",py:"qiān",pt:"mil",l:3},
 {ch:"前面",py:"qiánmiàn",pt:"na frente",l:0},{ch:"起床",py:"qǐchuáng",pt:"levantar da cama",l:2},
 {ch:"晴",py:"qíng",pt:"ensolarado",l:14},{ch:"请",py:"qǐng",pt:"por favor",l:0},
 {ch:"妻子",py:"qīzi",pt:"esposa",l:12},{ch:"去",py:"qù",pt:"ir",l:0},
 {ch:"去年",py:"qùnián",pt:"ano passado",l:11},{ch:"让",py:"ràng",pt:"deixar, permitir",l:8},
 {ch:"热",py:"rè",pt:"quente, calor",l:0},{ch:"人",py:"rén",pt:"pessoa",l:0},
 {ch:"认识",py:"rènshi",pt:"conhecer",l:0},{ch:"日",py:"rì",pt:"dia; sol",l:15},
 {ch:"三",py:"sān",pt:"três",l:0},{ch:"上",py:"shàng",pt:"cima; ir a",l:0},
 {ch:"上午",py:"shàngwǔ",pt:"manhã",l:0},{ch:"商店",py:"shāngdiàn",pt:"loja",l:0},
 {ch:"少",py:"shǎo",pt:"pouco",l:0},{ch:"谁",py:"shéi",pt:"quem",l:0},
 {ch:"身体",py:"shēntǐ",pt:"corpo, saúde",l:2},{ch:"生病",py:"shēng bìng",pt:"ficar doente",l:2},
 {ch:"生日",py:"shēngrì",pt:"aniversário",l:4},{ch:"什么",py:"shénme",pt:"o que, que",l:0},
 {ch:"十",py:"shí",pt:"dez",l:0},{ch:"是",py:"shì",pt:"ser; sim",l:0},
 {ch:"时候",py:"shíhou",pt:"momento, época",l:0},{ch:"时间",py:"shíjiān",pt:"tempo, hora",l:2},
 {ch:"事情",py:"shìqíng",pt:"assunto",l:8},{ch:"手表",py:"shǒubiǎo",pt:"relógio de pulso",l:3},
 {ch:"手机",py:"shǒujī",pt:"celular",l:10},{ch:"书",py:"shū",pt:"livro",l:0},
 {ch:"水",py:"shuǐ",pt:"água",l:0},{ch:"水果",py:"shuǐguǒ",pt:"fruta",l:0},
 {ch:"睡觉",py:"shuìjiào",pt:"dormir",l:0},{ch:"说话",py:"shuō huà",pt:"falar",l:11},
 {ch:"四",py:"sì",pt:"quatro",l:0},{ch:"送",py:"sòng",pt:"enviar; presentear",l:3},
 {ch:"岁",py:"suì",pt:"anos de idade",l:0},{ch:"所以",py:"suǒyǐ",pt:"por isso",l:6},
 {ch:"她",py:"tā",pt:"ela",l:0},{ch:"他",py:"tā",pt:"ele",l:0},
 {ch:"它",py:"tā",pt:"ele/ela (neutro)",l:1},{ch:"太",py:"tài",pt:"demais",l:0},
 {ch:"题",py:"tí",pt:"questão, problema",l:9},{ch:"踢足球",py:"tī zúqiú",pt:"jogar futebol",l:1},
 {ch:"天气",py:"tiānqì",pt:"tempo atmosférico",l:0},{ch:"跳舞",py:"tiào wǔ",pt:"dançar",l:9},
 {ch:"听",py:"tīng",pt:"escutar",l:0},{ch:"同学",py:"tóngxué",pt:"colega de classe",l:0},
 {ch:"外",py:"wài",pt:"fora",l:6},{ch:"玩",py:"wán",pt:"brincar",l:0},
 {ch:"完",py:"wán",pt:"terminar",l:9},{ch:"晚上",py:"wǎnshang",pt:"noite",l:4},
 {ch:"喂",py:"wéi",pt:"alô (telefone)",l:0},{ch:"为什么",py:"wèi shénme",pt:"por quê",l:1},
 {ch:"问",py:"wèn",pt:"perguntar",l:4},{ch:"问题",py:"wèntí",pt:"problema, pergunta",l:9},
 {ch:"我",py:"wǒ",pt:"eu",l:0},{ch:"我们",py:"wǒmen",pt:"nós",l:0},
 {ch:"五",py:"wǔ",pt:"cinco",l:0},{ch:"洗",py:"xǐ",pt:"lavar",l:10},
 {ch:"西瓜",py:"xīguā",pt:"melancia",l:10},{ch:"下",py:"xià",pt:"baixo; próximo",l:0},
 {ch:"下午",py:"xiàwǔ",pt:"tarde",l:0},{ch:"下雨",py:"xiàyǔ",pt:"chover",l:0},
 {ch:"想",py:"xiǎng",pt:"pensar; querer",l:0},{ch:"先生",py:"xiānshēng",pt:"senhor",l:0},
 {ch:"现在",py:"xiànzài",pt:"agora",l:0},{ch:"笑",py:"xiào",pt:"sorrir, rir",l:13},
 {ch:"小",py:"xiǎo",pt:"pequeno",l:0},{ch:"小姐",py:"xiǎojiě",pt:"senhorita",l:0},
 {ch:"小时",py:"xiǎoshí",pt:"hora (tempo)",l:7},{ch:"写",py:"xiě",pt:"escrever",l:0},
 {ch:"些",py:"xiē",pt:"alguns",l:0},{ch:"谢谢",py:"xièxie",pt:"obrigado",l:0},
 {ch:"喜欢",py:"xǐhuān",pt:"gostar",l:0},{ch:"新",py:"xīn",pt:"novo",l:1},
 {ch:"姓",py:"xìng",pt:"sobrenome",l:11},{ch:"星期",py:"xīngqī",pt:"semana",l:0},
 {ch:"休息",py:"xiūxi",pt:"descansar",l:2},{ch:"希望",py:"xīwàng",pt:"esperar; esperança",l:9},
 {ch:"雪",py:"xuě",pt:"neve",l:12},{ch:"学生",py:"xuéshēng",pt:"estudante",l:0},
 {ch:"学习",py:"xuéxí",pt:"estudar",l:0},{ch:"学校",py:"xuéxiào",pt:"escola",l:0},
 {ch:"羊肉",py:"yángròu",pt:"carne de carneiro",l:6},{ch:"眼睛",py:"yǎnjing",pt:"olho",l:1},
 {ch:"颜色",py:"yánsè",pt:"cor",l:3},{ch:"要",py:"yào",pt:"querer; dever",l:1},
 {ch:"药",py:"yào",pt:"remédio",l:2},{ch:"也",py:"yě",pt:"também",l:1},
 {ch:"一",py:"yī",pt:"um",l:0},{ch:"衣服",py:"yīfu",pt:"roupa",l:0},
 {ch:"已经",py:"yǐjīng",pt:"já",l:4},{ch:"阴",py:"yīn",pt:"nublado",l:15},
 {ch:"医生",py:"yīshēng",pt:"médico",l:0},{ch:"意思",py:"yìsi",pt:"significado",l:5},
 {ch:"医院",py:"yīyuàn",pt:"hospital",l:0},{ch:"椅子",py:"yǐzi",pt:"cadeira",l:0},
 {ch:"有",py:"yǒu",pt:"ter, haver",l:0},{ch:"游泳",py:"yóuyǒng",pt:"nadar",l:6},
 {ch:"右边",py:"yòubiān",pt:"lado direito",l:11},{ch:"鱼",py:"yú",pt:"peixe",l:5},
 {ch:"元",py:"yuán",pt:"yuan (moeda)",l:0},{ch:"远",py:"yuǎn",pt:"longe",l:7},
 {ch:"月",py:"yuè",pt:"lua; mês",l:0},{ch:"运动",py:"yùndòng",pt:"esporte",l:1},
 {ch:"在",py:"zài",pt:"estar em; em",l:0},{ch:"再",py:"zài",pt:"de novo",l:8},
 {ch:"再见",py:"zàijiàn",pt:"tchau",l:0},{ch:"早上",py:"zǎoshang",pt:"manhã",l:2},
 {ch:"怎么",py:"zěnme",pt:"como",l:0},{ch:"怎么样",py:"zěnmeyàng",pt:"como está",l:0},
 {ch:"张",py:"zhāng",pt:"classif. para papel",l:0},{ch:"丈夫",py:"zhàngfu",pt:"marido",l:3},
 {ch:"找",py:"zhǎo",pt:"procurar",l:8},{ch:"这",py:"zhè",pt:"este, esta",l:0},
 {ch:"真",py:"zhēn",pt:"verdadeiramente",l:3},{ch:"正在",py:"zhèngzài",pt:"em processo de",l:10},
 {ch:"这儿",py:"zhèr",pt:"aqui",l:0},{ch:"知道",py:"zhīdào",pt:"saber",l:2},
 {ch:"中国",py:"zhōngguó",pt:"China",l:0},{ch:"中午",py:"zhōngwǔ",pt:"meio-dia",l:0},
 {ch:"住",py:"zhù",pt:"morar",l:0},{ch:"准备",py:"zhǔnbèi",pt:"preparar",l:5},
 {ch:"桌子",py:"zhuōzi",pt:"mesa",l:10},{ch:"字",py:"zì",pt:"caractere chinês",l:0},
 {ch:"自行车",py:"zìxíngchē",pt:"bicicleta",l:6},{ch:"走",py:"zǒu",pt:"caminhar; partir",l:7},
 {ch:"最",py:"zuì",pt:"superlativo",l:1},{ch:"坐",py:"zuò",pt:"sentar; tomar transporte",l:0},
 {ch:"做",py:"zuò",pt:"fazer",l:0},{ch:"左边",py:"zuǒbiān",pt:"lado esquerdo",l:3},
 {ch:"昨天",py:"zuótiān",pt:"ontem",l:0},{ch:"作业",py:"zuòyè",pt:"tarefa, dever",l:0},
];

// ══════════════════════════ ESTADO ══════════════════════════
let C={lesson:0,card:0,flipped:false,mode:'cards',tab:'vocab',si:0};
let Q={sc:0,tot:0,ans:false,ci:0};

// ══════════════════════════ INIT ══════════════════════════
function init(){
  buildSidebar(); buildDots();
  renderVocab(0); renderText(0); renderAll300();
  setupStroke(); startBG();
  updateCard();
}

// ══════════════════════════ SIDEBAR ══════════════════════════
function buildSidebar(){
  const el=document.getElementById('lesson-list');
  LESSONS.forEach((l,i)=>{
    const d=document.createElement('div');
    d.className='li'+(i===0?' active':''); d.id='li'+i;
    d.innerHTML=`<div class="li-num">第${l.num}课 · L${l.num}</div>
     <div class="li-zh">${l.zh}</div>
     <div class="li-pt">${l.pt}</div>
     <div class="li-cnt">${l.words.length} palavras · ${l.texts.length} diálogos</div>`;
    d.onclick=()=>selLesson(i);
    el.appendChild(d);
  });
}
function buildDots(){
  const bar=document.getElementById('ldots');
  LESSONS.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='ldot'+(i===0?' active':''); d.id='ld'+i;
    d.title='Lição '+(i+1); d.onclick=()=>selLesson(i);
    bar.appendChild(d);
  });
}
function selLesson(idx){
  C.lesson=idx; C.card=0; C.flipped=false; C.si=0;
  document.querySelectorAll('.li').forEach((e,i)=>e.classList.toggle('active',i===idx));
  document.querySelectorAll('.ldot').forEach((e,i)=>e.classList.toggle('active',i===idx));
  document.getElementById('flashcard').classList.remove('flipped');
  renderVocab(idx); renderText(idx); updateCard();
  document.getElementById('srch-v').value='';
  document.getElementById('li'+idx).scrollIntoView({block:'nearest',behavior:'smooth'});
}

// ══════════════════════════ CARD ══════════════════════════
function updateCard(){
  const L=LESSONS[C.lesson], w=L.words[C.card];
  const fc=document.getElementById('flashcard');
  if(C.flipped){fc.classList.remove('flipped');C.flipped=false;}
  setTimeout(()=>{
    const ce=document.getElementById('cchar');
    ce.textContent=w.ch; ce.className='c-char';
    const ln=w.ch.length;
    if(ln===2)ce.classList.add('l2');else if(ln===3)ce.classList.add('l3');
    else if(ln===4)ce.classList.add('l4');else if(ln===5)ce.classList.add('l5');
    else if(ln>=6)ce.classList.add('l6');
    document.getElementById('cpy').textContent=w.py;
    document.getElementById('ctag').textContent=`第${L.num}课`;
    document.getElementById('cmean').textContent=w.pt;
    document.getElementById('cpyb').textContent=w.py;
    document.getElementById('ctr').textContent=(C.card+1)+' / '+L.words.length;
    const tot=LESSONS.reduce((s,l)=>s+l.words.length,0);
    const done=LESSONS.slice(0,C.lesson).reduce((s,l)=>s+l.words.length,0)+C.card;
    document.getElementById('prog').style.width=Math.round(done/tot*100)+'%';
    document.querySelectorAll('.vi').forEach((e,i)=>e.classList.toggle('sel',i===C.card));
    updStroke(w);
  },30);
}
function flipCard(){if(C.mode==='quiz')return;C.flipped=!C.flipped;document.getElementById('flashcard').classList.toggle('flipped',C.flipped);}
function nextCard(){C.card=(C.card+1)%LESSONS[C.lesson].words.length;updateCard();}
function prevCard(){const n=LESSONS[C.lesson].words.length;C.card=(C.card-1+n)%n;updateCard();}

// ══════════════════════════ VOCAB ══════════════════════════
function renderVocab(idx){
  const L=LESSONS[idx];
  document.getElementById('linfo-box').innerHTML=`
   <div class="linfo">
    <div class="ln">第${L.num}课 · LIÇÃO ${L.num} · ${L.words.length} palavras · ${L.texts.length} diálogos</div>
    <div class="lz">${L.zh}</div>
    <div class="lpy">${L.py}</div>
    <div class="lpt">📌 ${L.pt}</div>
   </div>`;
  renderVList(L.words);
}
function renderVList(words){
  const el=document.getElementById('vlist'); el.innerHTML='';
  words.forEach((w,i)=>{
    const d=document.createElement('div');
    d.className='vi'+(i===C.card?' sel':'');
    d.innerHTML=`<div class="vn">${i+1}</div><div class="vc">${w.ch}</div>
     <div class="vt"><div class="vp">${w.py}</div><div class="vm">${w.pt}</div></div>`;
    d.onclick=()=>{C.card=i;C.flipped=false;document.getElementById('flashcard').classList.remove('flipped');updateCard();};
    el.appendChild(d);
  });
}
function filterV(q){
  const L=LESSONS[C.lesson];
  if(!q){renderVList(L.words);return;}
  renderVList(L.words.filter(w=>w.ch.includes(q)||w.py.toLowerCase().includes(q.toLowerCase())||w.pt.toLowerCase().includes(q.toLowerCase())));
}

// ══════════════════════════ TEXT ══════════════════════════
function renderText(idx){
  const L=LESSONS[idx], el=document.getElementById('text-box');
  el.innerHTML='';
  const title=document.createElement('div');
  title.innerHTML=`<div class="linfo" style="margin-bottom:10px;">
    <div class="ln">TEXTOS E DIÁLOGOS · 第${L.num}课</div>
    <div class="lz">${L.zh}</div>
    <div class="lpy">${L.py}</div>
    <div class="lpt">${L.pt}</div>
   </div>`;
  el.appendChild(title);
  L.texts.forEach(t=>{
    const block=document.createElement('div');
    block.className='dlg-block';
    let html=`<div class="dlg-title">${t.title}</div>`;
    t.lines.forEach((ln,i)=>{
      if(i>0) html+=`<div class="dlg-sep"></div>`;
      html+=`<div class="dlg-line">
       <div class="dlg-label">${ln.sp}：</div>
       <div class="dlg-zh">${ln.zh}</div>
       <div class="dlg-py">${ln.py}</div>
       <div class="dlg-pt">${ln.pt}</div>
      </div>`;
    });
    block.innerHTML=html;
    el.appendChild(block);
  });
}

// ══════════════════════════ QUIZ ══════════════════════════
function startQuiz(){
  Q.ans=false;
  const L=LESSONS[C.lesson];
  const wi=Math.floor(Math.random()*L.words.length);
  const w=L.words[wi]; C.card=wi;
  document.getElementById('qchar').textContent=w.ch;
  document.getElementById('qpy').textContent=w.py;
  const pool=[...ALL_300].filter(x=>x.ch!==w.ch);
  const opts=[w];
  while(opts.length<4){const r=pool.splice(Math.floor(Math.random()*pool.length),1)[0];opts.push(r);}
  for(let i=opts.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[opts[i],opts[j]]=[opts[j],opts[i]];}
  Q.ci=opts.indexOf(w);
  const oel=document.getElementById('qopts'); oel.innerHTML='';
  opts.forEach((o,i)=>{
    const b=document.createElement('div');b.className='qopt';b.textContent=o.pt;
    b.onclick=()=>ansQuiz(i);oel.appendChild(b);
  });
  document.getElementById('qnext').classList.remove('vis');
}
function ansQuiz(ch){
  if(Q.ans)return; Q.ans=true; Q.tot++;
  const bs=document.querySelectorAll('.qopt');
  if(ch===Q.ci){bs[ch].classList.add('ok');Q.sc++;}
  else{bs[ch].classList.add('no');bs[Q.ci].classList.add('ok');}
  document.getElementById('qscore').textContent=`${Math.round(Q.sc/Q.tot*100)}% | Acertos: ${Q.sc}/${Q.tot}`;
  document.getElementById('qnext').classList.add('vis');
}
function nextQuiz(){startQuiz();}

// ══════════════════════════ STROKE ══════════════════════════
function setupStroke(){
  const c=document.getElementById('scc'),ctx=c.getContext('2d');
  drawSGrid();
  let dr=false;
  function pos(e){const r=c.getBoundingClientRect(),s=e.touches?e.touches[0]:e;return{x:s.clientX-r.left,y:s.clientY-r.top};}
  c.addEventListener('mousedown',e=>{dr=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);});
  c.addEventListener('mousemove',e=>{if(!dr)return;const p=pos(e);ctx.lineWidth=4;ctx.lineCap='round';ctx.strokeStyle='#C8102E';ctx.shadowColor='rgba(200,16,46,.35)';ctx.shadowBlur=6;ctx.lineTo(p.x,p.y);ctx.stroke();ctx.beginPath();ctx.moveTo(p.x,p.y);});
  c.addEventListener('mouseup',()=>{dr=false;ctx.shadowBlur=0;});
  c.addEventListener('mouseleave',()=>{dr=false;ctx.shadowBlur=0;});
  c.addEventListener('touchstart',e=>{e.preventDefault();dr=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);},{passive:false});
  c.addEventListener('touchmove',e=>{e.preventDefault();if(!dr)return;const p=pos(e);ctx.lineWidth=4;ctx.lineCap='round';ctx.strokeStyle='#C8102E';ctx.lineTo(p.x,p.y);ctx.stroke();ctx.beginPath();ctx.moveTo(p.x,p.y);},{passive:false});
  c.addEventListener('touchend',()=>{dr=false;});
}
function drawSGrid(){
  const g=document.getElementById('sgc').getContext('2d');
  g.clearRect(0,0,220,220);g.strokeStyle='rgba(200,16,46,.1)';g.lineWidth=1;
  g.strokeRect(2,2,216,216);g.setLineDash([4,4]);
  g.beginPath();g.moveTo(110,2);g.lineTo(110,218);g.stroke();
  g.beginPath();g.moveTo(2,110);g.lineTo(218,110);g.stroke();
  g.strokeStyle='rgba(200,16,46,.05)';
  g.beginPath();g.moveTo(2,2);g.lineTo(218,218);g.stroke();
  g.beginPath();g.moveTo(218,2);g.lineTo(2,218);g.stroke();
  g.setLineDash([]);
}
function updStroke(w){
  document.getElementById('sc').textContent=w.ch;
  document.getElementById('sp').textContent=w.py;
  document.getElementById('sm').textContent=w.pt;
  const bg=document.getElementById('sbg'),l=w.ch.length;
  bg.style.fontSize=l===1?'130px':l===2?'88px':l===3?'60px':l===4?'44px':'34px';
  bg.textContent=w.ch; clrS();
}
function clrS(){document.getElementById('scc').getContext('2d').clearRect(0,0,220,220);}
function prevS(){const w=LESSONS[C.lesson].words;C.si=(C.si-1+w.length)%w.length;updStroke(w[C.si]);}
function nextS(){const w=LESSONS[C.lesson].words;C.si=(C.si+1)%w.length;updStroke(w[C.si]);}

// ══════════════════════════ ALL 300 ══════════════════════════
function renderAll300(f){
  const g=document.getElementById('agrid');g.innerHTML='';
  (f?ALL_300.filter(w=>w.ch.includes(f)||w.py.toLowerCase().includes(f.toLowerCase())||w.pt.toLowerCase().includes(f.toLowerCase())):ALL_300).forEach(w=>{
    const d=document.createElement('div');d.className='wc';
    d.innerHTML=`<div class="wch">${w.ch}</div><div class="wpy">${w.py}</div><div class="wpt">${w.pt}</div>${w.l>0?`<div class="wl">L${w.l}</div>`:''}`;
    d.onclick=()=>{updStroke(w);switchTab('stroke');};g.appendChild(d);
  });
}
function filterA(q){renderAll300(q||null);}

// ══════════════════════════ TABS ══════════════════════════
function switchTab(id){
  C.tab=id;
  document.querySelectorAll('.ps').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.ptab').forEach(t=>t.classList.remove('active'));
  document.getElementById('section-'+id).classList.add('active');
  document.getElementById('tab-'+id).classList.add('active');
}

// ══════════════════════════ MODE ══════════════════════════
function setMode(m){
  C.mode=m;
  document.querySelectorAll('.mode-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+m).classList.add('active');
  const cw=document.getElementById('card-wrap'),qz=document.getElementById('quiz-zone'),
        si=document.getElementById('s-ind'),nav=document.getElementById('card-nav');
  if(m==='cards'){cw.style.display='';qz.classList.remove('vis');si.style.display='none';nav.style.display='';switchTab('vocab');}
  else if(m==='quiz'){cw.style.display='none';qz.classList.add('vis');si.style.display='none';nav.style.display='none';switchTab('vocab');startQuiz();}
  else{cw.style.display='none';qz.classList.remove('vis');si.style.display='block';nav.style.display='none';switchTab('stroke');}
}

// ══════════════════════════ BG ══════════════════════════
function startBG(){
  const c=document.getElementById('bg-c'),ctx=c.getContext('2d');
  function rsz(){c.width=c.offsetWidth;c.height=c.offsetHeight;}rsz();window.addEventListener('resize',rsz);
  const CH='中文学习汉语水平考试读写听说爱好你我一二三月火水'.split('');
  const pts=Array.from({length:30},()=>({x:Math.random()*1400,y:Math.random()*700,vy:-(0.1+Math.random()*.28),vx:(Math.random()-.5)*.13,a:0.018+Math.random()*.05,sz:13+Math.random()*20,ch:CH[Math.floor(Math.random()*CH.length)],col:Math.random()>.5?'rgba(200,16,46,':'rgba(212,160,23,'}));
  function fr(){
    ctx.clearRect(0,0,c.width,c.height);
    pts.forEach(p=>{
      p.y+=p.vy;p.x+=p.vx;
      if(p.y<-40){p.y=c.height+40;p.x=Math.random()*c.width;}
      ctx.save();ctx.globalAlpha=p.a;ctx.font=`${p.sz}px 'Noto Serif SC',serif`;ctx.fillStyle=p.col+p.a+')';ctx.fillText(p.ch,p.x,p.y);ctx.restore();
    });requestAnimationFrame(fr);
  }fr();
}

// ══════════════════════════ KEYBOARD ══════════════════════════
document.addEventListener('keydown',e=>{
  if(e.target.tagName==='INPUT')return;
  if(e.key==='ArrowRight'||e.key==='l')nextCard();
  if(e.key==='ArrowLeft'||e.key==='h')prevCard();
  if(e.key===' '){e.preventDefault();flipCard();}
  if(e.key==='ArrowUp')selLesson(Math.max(0,C.lesson-1));
  if(e.key==='ArrowDown')selLesson(Math.min(14,C.lesson+1));
  if(e.key==='1')setMode('cards');
  if(e.key==='2')setMode('quiz');
  if(e.key==='3')setMode('stroke');
});

init();