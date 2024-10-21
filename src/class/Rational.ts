/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    // todo: ...
    numerator: number;
    denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.normalize();
    }

    getNumerator(): number {
        return this.numerator;
    }

    getDenominator(): number {
        return this.denominator;
    }

    normalize(): Rational {
        let gcd = 0;
        for (let i = 1; i <= this.numerator && i <= this.denominator; i++) {
            if (this.numerator % i == 0 && this.denominator % i == 0) {
                gcd = i;
            }
        }
        this.numerator /= gcd;
        this.denominator /= gcd;
        if (this.denominator < 0) {
            this.numerator = -this.numerator;
            this.denominator = -this.denominator;
        }
        return this;
    }

    isWhole(): boolean {
        return this.denominator == 1 || this.numerator % this.denominator == 0;
    }

    isDecimal(): boolean {
        return !this.isWhole();
    }


    equals(r: Rational): boolean {
        return this.numerator == r.getNumerator() && this.denominator == r.getDenominator();
    }

    static _parseRational(numChars: string[], denomChars: string[]): Rational {
        const num = parseInt(numChars.join(''), 10);
        const denom = parseInt(denomChars.join(''), 10);
        return new Rational(num, denom);
    }

    static parseRational(str: string): Rational {
        const parts = str.split("/");
        const num = parseInt(parts[0]);
        const denom = parseInt(parts[1]);
        return new Rational(num, denom);
    }
    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }
}