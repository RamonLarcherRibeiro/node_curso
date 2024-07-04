module.exports = {

    soma(a, b) {
        try {
            if (!Number.isInteger(a) || !Number.isInteger(b)) {
                throw new Error('As entradas devem ser números inteiros');
            }
            console.log(a + b);
        } catch (e) {
            console.log('Erro:', e.message);
        }
    },

}