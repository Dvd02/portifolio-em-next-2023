
export function geraMapa(tamanho=10){
    const vertical = tamanho
    const horizontal = tamanho

    const numeroAleatorio = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const mapa = []
    for (let i = 0; i < vertical; i++) {
        mapa[i] = []
        for (let j = 0; j < horizontal; j++) {
            const valor = numeroAleatorio(0,50) + numeroAleatorio(0,50)
            let bloco = 'g';

            if (56 <= valor && valor <= 60){ bloco = 'a' } else
            if (61 <= valor && valor <= 65){ bloco = 'A' } else
            if (76 <= valor && valor <= 87){ bloco = 'G' } else
            if (88 <= valor && valor <= 90){ bloco = 'p' } else
            if (91 <= valor && valor <= 95){ bloco = 'b' } else
            if (96 <= valor && valor <= 98){ bloco = 'c' } else
            if (99 <= valor && valor == 100){ bloco = 'f' }

            mapa[i][j] = bloco
        }
    }
    return mapa
}
