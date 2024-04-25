
console.log(masodfokuEgyenletMegoldasa(1,2,1))

// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

export function masodfokuEgyenletMegoldasa(a, b, c) {
    if (a === 0){
        return {
            X1: "Az 'a' nem lehet 0",
            X2: "A 'a' nem lehet 0",
        };
    }
    
    let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    const eredmeny = {
        X1: x1,
        X2: x2,
    };
    return eredmeny;
}


export function masodfokuTeszt() {
    const tesztEsetek = [
        {
            a: -12,
            b: 21,
            c: 1000,
            vartx1: -8.29554842053262,
            vartx2: 10.04554842053262
        },
        {
            a: 0,
            b: 13,
            c: 0,
            vartx1: "Nincs megoldás",
            vartx2: "- Infinity"
        },
        {
            a: -13,
            b: -17,
            c: -19,
            vartx1: "Nincs megoldás",
            vartx2: "Nincs megoldás"
        },
        {
            a: 1000000000000000,
            b: -1,
            c: 0,
            vartx1: 1e-15,
            vartx2: 0
        },
        {
            a: 1.9,
            b: 10,
            c: 10.89,
            vartx1: -1.5390457401548985,
            vartx2: -3.724112154581944
        },
        {
            a: -1.2,
            b: -10,
            c: 17.501,
            vartx1: 5.83308331458052,
            vartx2: 2.5002500187528134
        },
        {    
            a: 0,
            b: 0,
            c: 0,
            vartx1: "Nincs megoldás",
            vartx2: "Nincs megoldás"
        },
        {
            a: 100,
            b: 0,
            c: 0,
            vartx1: 0,
            vartx2: "Nincs megoldás"
        },
        {
            a: 1,
            b: -0.0111111,
            c: -0.124583748,
            vartx1: 0.3585634991113515,
            vartx2: -0.34745239911135145
        },
        {
            a: 12/3,
            b: 8282,
            c: 17128371,
            vartx1: 0.000041952714051755415,
            vartx2: -690.1667086193808
        }
    ]
    tesztEsetek.forEach(function(teszt) {
        let eredmeny = masodfokuEgyenletMegoldasa(teszt.a, teszt.b, teszt.c)
        console.log(eredmeny.X1)
        console.log(eredmeny.X2)
        console.assert(teszt.vartx1 === eredmeny.X1, `a: ${teszt.a} b: ${teszt.b} c: ${teszt.c} x1: ${masodfokuEgyenletMegoldasa(eredmeny.vartx1)} , HIBA!`)
        console.assert(teszt.vartx2 === eredmeny.X2, `a: ${teszt.a} b: ${teszt.b} c: ${teszt.c} x2: ${masodfokuEgyenletMegoldasa(eredmeny.vartx2)}, HIBA!`)
    })
}

masodfokuTeszt()