function pow(x, n) {
    let r = 1;
    for (let i = 0; i < n; i++) r *= x;
    return r;
}

function gcd(a, b) {
    while (b) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function minDigit(x) {
    if (x === 0) {
        return 0;
    }

    let min = 9;

    while (x > 0) {
        let digit = x % 10;

        if (digit < min) {
            min = digit;
        }

        x = Math.floor(x / 10);
    }

    return min;
}

function pluralizeRecords(n) {
    let w = "записей";
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) w = "запись";
        else if (n % 10 >= 2 && n % 10 <= 4) w = "записи";
    }

    let d = "было найдено"
    if (n % 10 === 1 && n % 100 != 11) {
        d = "была найдена"
    }
    return `В результате выполнения запроса ${d} ${n} ${w}`;
}

function fibb(n) {
    let a = 0n, b = 1n;
    for (let i = 0; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}

function val(id, min, max = Infinity) {
    let v = document.getElementById(id).value;
    let n = Number(v);
    if (v.trim() === "" || !Number.isFinite(n) || n < min || n > max || !Number.isInteger(n)) {
        throw new Error("Проверьте введённые данные.");
    }
    return n;
}

function rp() {
    try {
        let x = Number(document.getElementById("x").value);
        let n = val("n", 1);
        if (document.getElementById("x").value.trim() === "" || !Number.isFinite(x)) throw new Error();
        document.getElementById("p1").textContent = `${x} в степени ${n} = ${pow(x, n)}`;
    } catch (e) {
        document.getElementById("p1").textContent = "Проверьте введённые данные.";
    }
}

function rg() {
    try {
        let a = val("a", 0), b = val("b", 0);
        document.getElementById("p2").textContent = `НОД(${a}, ${b}) = ${gcd(a, b)}`;
    } catch (e) {
        document.getElementById("p2").textContent = "Проверьте введённые данные.";
    }
}

function rd() {
    try {
        let x = val("d", 0);
        document.getElementById("p3").textContent = `Наименьшая цифра числа ${x} — ${minDigit(x)}.`;
    } catch (e) {
        document.getElementById("p3").textContent = "Проверьте введённые данные.";
    }
}

function rr() {
    try {
        let n = val("c", 0);
        document.getElementById("p4").textContent = pluralizeRecords(n);
    } catch (e) {
        document.getElementById("p4").textContent = "Проверьте введённые данные.";
    }
}

function rf() {
    try {
        let n = val("f", 0, 1000);
        document.getElementById("p5").textContent = `fibb(${n}) = ${fibb(n).toString()}`;
    } catch (e) {
        document.getElementById("p5").textContent = "Проверьте введённые данные.";
    }
}
