export function sprawdzPrawoJazdy(dataUrodzenia: Date): { egzaminInfo: string; kursInfo: string; } {
    if (window.localStorage) {
        window.localStorage.setItem("dataUrodzenia", dataUrodzenia.toISOString());
    }
    // Data ukończenia 18 lat
    const data18Urodziny = new Date(dataUrodzenia);

    // Data rozpoczęcia kursu (3 miesiące przed 18 urodzinami)
    const dataRozpoczeciaKursu = new Date(data18Urodziny);
    dataRozpoczeciaKursu.setMonth(dataRozpoczeciaKursu.getMonth() - 3);

    // Data dzisiejsza
    const dzisiaj = new Date();

    let egzaminInfo: string;
    if (dzisiaj >= data18Urodziny) {
        egzaminInfo = "Masz już 18 lat. Możesz przystąpić do egzaminu na prawo jazdy.";
    } else {
        const dniDoEgzaminu = Math.ceil((data18Urodziny.getTime() - dzisiaj.getTime()) / (1000 * 60 * 60 * 24));
        egzaminInfo = `pozostało ${dniDoEgzaminu} dni.`;
    }

    let kursInfo: string;
    if (dzisiaj >= dataRozpoczeciaKursu) {
        kursInfo = "Możesz rozpocząć kurs na prawo jazdy.";
    } else {
        const dniDoKursu = Math.ceil((dataRozpoczeciaKursu.getTime() - dzisiaj.getTime()) / (1000 * 60 * 60 * 24));
        kursInfo = `pozostało ${dniDoKursu} dni (${dataRozpoczeciaKursu.toLocaleDateString()} / ${convertDateToPolish(dataRozpoczeciaKursu)}).`;
    }

    return {
        egzaminInfo,
        kursInfo
    };
}

const polishDays = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
const polishMonths = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];

export const convertDateToPolish = (date: Date): string => {
    return `${polishDays[date.getDay()]}, ${date.getDate()} ${polishMonths[date.getMonth()]} ${date.getFullYear()}`
}
