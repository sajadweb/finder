export type IBank = "default"
    | "mile"
    | "sepah"
    | "post_bank"
    | "tosee_saderat"
    | "sanaat_o_maadan"
    | "keshavarzi"
    | "maskan"
    | "toose_taavon"
    | "eghtesad_novin"
    | "parsian"
    | "karafarin"
    | "saman"
    | "pasargad"
    | "arman"
    | "noor"
    | "melal"
    | "kosar"
    | "tosee"
    | "resalat"
    | "mehr_iran"
    | "mehr"
    | "mehr"
    | "ayande"
    | "khavarmianeh"
    | "ghavamin"
    | "iran_zamin"
    | "gardeshgari"
    | "hekmat"
    | "sarmaye"
    | "sina"
    | "shahr"
    | "dey"
    | "ansar"
    | "tejarat"
    | "refah"
    | "saderat"
    | "mellat"
    ;

export default  function (code: number | IBank) {
    switch (code) {
        case "ansar":
        case 627381:
            return { en: "ansar", fa: "بانک انصار", logo: getLogo("ansar") };

        case "arman":
        case 777764:
            return { en: "arman", fa: "مؤسسه اعتباری کاسپین", logo: getLogo("arman") };

        case "eghtesad_novin":
        case 627412:
            return { en: "eghtesad_novin", fa: "بانک اقتصاد نوین", logo: getLogo("eghtesad_novin") };

        case "iran_zamin":
        case 505785:
            return { en: "iran_zamin", fa: "بانک ایران زمین", logo: getLogo("iran_zamin") };

        case "post_bank":
        case 627760:
            return { en: "post_bank", fa: "پست بانک ایران", logo: getLogo("post_bank") };

        case "parsian":
        case 639194:
        case 627884:
        case 622106:
            return { en: "parsian", fa: "بانک پارسیان", logo: getLogo("parsian") };

        case "pasargad":
        case 502229:
        case 639347:
            return { en: "pasargad", fa: "بانک پاسارگاد", logo: getLogo("pasargad") };

        case "tejarat":
        case 627353:
            return { en: "tejarat", fa: "بانک تجارت", logo: getLogo("tejarat") };

        case "tosee":
        case 628157:
            return { en: "tosee", fa: "موسسه اعتباری توسعه", logo: getLogo("tosee") };

        case "tosee_saderat":
        case 207177:
        case 627648:
            return { en: "tosee_saderat", fa: "بانک توسعه صادرات ایران", logo: getLogo("tosee_saderat") };

        case "toose_taavon":
        case 502908:
            return { en: "toose_taavon", fa: "بانک توسعه تعاون", logo: getLogo("toose_taavon") };

        case "hekmat":
        case 636949:
            return { en: "hekmat", fa: "بانک حکمت ایرانیان", logo: getLogo("hekmat") };

        case "dey":
        case 502938:
            return { en: "dey", fa: "بانک دی", logo: getLogo("dey") };

        case "refah":
        case 589463:
            return { en: "refah", fa: "بانک رفاه کارگران", logo: getLogo("refah") };

        case "keshavarzi":
        case 639217:
        case 603770:
            return { en: "keshavarzi", fa: "بانک کشاورزی", logo: getLogo("keshavarzi") };

        case "karafarin":
        case 627488:
        case 502910:
            return { en: "karafarin", fa: "بانک کارآفرین", logo: getLogo("karafarin") };

        case "kosar":
        case 505801:
            return { en: "kosar", fa: "موسسه مالی اعتباری کوثر", logo: getLogo("kosar") };

        case "gardeshgari":
        case 505416:
            return { en: "gardeshgari", fa: "بانک گردشگری", logo: getLogo("gardeshgari") };

        case "ghavamin":
        case 639599:
            return { en: "ghavamin", fa: "بانک قوامین", logo: getLogo("ghavamin") };

        case "mehr_iran":
        case 606373:
            return { en: "mehr_iran", fa: "بانک قرض الحسنه مهر ایران", logo: getLogo("mehr_iran") };

        case "markaze":
        case 636795:
            return { en: "markaze", fa: "بانک مرکزی", logo: getLogo("default") };

        case "mellat":
        case 991975:
        case 610433:
            return { en: "mellat", fa: "بانک ملت", logo: getLogo("mellat") };

        case "maskan":
        case 628023:
            return { en: "maskan", fa: "بانک مسکن", logo: getLogo("maskan") };

        case "mile":
        case 603799:
            return { en: "mile", fa: "بانک ملی ایران", logo: getLogo("mile") };

        case "mehr":
        case 639370:
            return { en: "mehr", fa: "بانک مهر اقتصاد", logo: getLogo("mehr") };

        case "saman":
        case 621986:
            return { en: "saman", fa: "بانک سامان", logo: getLogo("saman") };

        case "sepah":
        case 589210:
            return { en: "sepah", fa: "بانک سپه", logo: getLogo("sepah") };

        case "sarmaye":
        case 639607:
            return { en: "sarmaye", fa: "بانک سرمایه", logo: getLogo("sarmaye") };

        case "sina":
        case 639346:
            return { en: "sina", fa: "بانک سینا", logo: getLogo("sina") };

        case "shahr":
        case 502806:
            return { en: "shahr", fa: "بانک شهر", logo: getLogo("shahr") };

        case "saderat":
        case 603769:
            return { en: "saderat", fa: "بانک صادرات ایران ", logo: getLogo("saderat") };

        case "sanaat_o_maadan":
        case 627961:
            return { en: "sanaat_o_maadan", fa: "بانک صنعت و معدن", logo: getLogo("sanaat_o_maadan") };

        case "melal":
        case 606256:
            return { en: "melal", fa: "موسسه اعتباری ملل", logo: getLogo("melal") };

        case "resalat":
        case 504172:
            return { en: "resalat", fa: "بانک قرض الحسنه رسالت", logo: getLogo("resalat") };

        case "ayande":
        case 636214:
            return { en: "ayande", fa: "آینده", logo: getLogo("ayande") };

        case "noor":
        case 507677:
            return { en: "noor", fa: "موسسه اعتباری نور", logo: getLogo("noor") };

        case "khavarmianeh":
        case 585947:
            return { en: "khavarmianeh", fa: "موسسه اعتباری خاورمیانه", logo: getLogo("khavarmianeh") };
        default:
            return { en: "default", fa: "بانک نامشخص", logo: getLogo("default") };
    }
}

function getLogo(name: IBank) {
    switch (name) {
        case "mile":
            return require("../../../../../assets/bank/bank_ic_1.png");
        case "sepah":
            return require("../../../../../assets/bank/bank_ic_2.png");
        case "post_bank":
            return require("../../../../../assets/bank/bank_ic_3.png");
        case "tosee_saderat":
            return require("../../../../../assets/bank/bank_ic_4.png");
        case "sanaat_o_maadan":
            return require("../../../../../assets/bank/bank_ic_5.png");
        case "keshavarzi":
            return require("../../../../../assets/bank/bank_ic_6.png");
        case "maskan":
            return require("../../../../../assets/bank/bank_ic_7.png");
        case "toose_taavon":
            return require("../../../../../assets/bank/bank_ic_8.png");
        case "eghtesad_novin":
            return require("../../../../../assets/bank/bank_ic_9.png");
        case "parsian":
            return require("../../../../../assets/bank/bank_ic_10.png");
        case "karafarin":
            return require("../../../../../assets/bank/bank_ic_11.png");
        case "saman":
            return require("../../../../../assets/bank/bank_ic_12.png");
        case "pasargad":
            return require("../../../../../assets/bank/bank_ic_13.png");
        case "sarmaye":
            return require("../../../../../assets/bank/bank_ic_14.png");
        case "sina":
            return require("../../../../../assets/bank/bank_ic_15.png");
        case "shahr":
            return require("../../../../../assets/bank/bank_ic_16.png");
        case "dey":
            return require("../../../../../assets/bank/bank_ic_17.png");
        case "ansar":
            return require("../../../../../assets/bank/bank_ic_18.png");
        case "tejarat":
            return require("../../../../../assets/bank/bank_ic_19.png");
        case "refah":
            return require("../../../../../assets/bank/bank_ic_20.png");
        case "saderat":
            return require("../../../../../assets/bank/bank_ic_21.png");
        case "mellat":
            return require("../../../../../assets/bank/bank_ic_22.png");
        case "hekmat":
            return require("../../../../../assets/bank/bank_ic_23.png");
        case "gardeshgari":
            return require("../../../../../assets/bank/bank_ic_24.png");
        case "iran_zamin":
            return require("../../../../../assets/bank/bank_ic_25.png");
        case "ghavamin":
            return require("../../../../../assets/bank/bank_ic_26.png");
        case "khavarmianeh":
            return require("../../../../../assets/bank/bank_ic_27.png");
        case "ayande":
            return require("../../../../../assets/bank/bank_ic_28.png");
        case "mehr":
            return require("../../../../../assets/bank/bank_ic_29.png");
        case "mehr_iran":
            return require("../../../../../assets/bank/bank_ic_30.png");
        case "resalat":
            return require("../../../../../assets/bank/bank_ic_31.png");
        case "tosee":
            return require("../../../../../assets/bank/bank_ic_32.png");
        case "kosar":
            return require("../../../../../assets/bank/bank_ic_33.png");
        case "melal":
            return require("../../../../../assets/bank/bank_ic_34.png");
        case "noor":
            return require("../../../../../assets/bank/bank_ic_35.png");
        case "arman":
            return require("../../../../../assets/bank/bank_ic_36.png");
        default:
            return require("../../../../../assets/bank/bank_ic.png");
    }
}

export {getLogo};