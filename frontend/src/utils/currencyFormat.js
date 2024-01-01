export const currencyFormat = (money) => {
    return Intl.NumberFormat().format(money);
}