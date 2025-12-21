import { ImageResponse } from 'next/og';

// Configuração da imagem (Route Segment Config)
export const runtime = 'edge';

// Dimensões da imagem
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Geração da Imagem
export default function Icon() {
    return new ImageResponse(
        (
            // Elemento JSX que vira imagem
            <div
                style={{
                    fontSize: 24,
                    background: '#050505', // Fundo Preto Lastro
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '20%', // Borda levemente arredondada (app style)
                    fontFamily: 'Times New Roman, serif', // Fonte Serifada Clássica
                    fontWeight: 900,
                    fontStyle: 'italic',
                }}
            >
                {/* O Monograma */}
                <div style={{ position: 'relative', marginTop: '-2px', marginLeft: '-2px' }}>
                    L
                    {/* O Ponto de Ouro (O Lastro) */}
                    <span style={{ color: '#f59e0b', fontSize: 30, position: 'absolute', bottom: 2, right: -6, lineHeight: 0 }}>
                        .
                    </span>
                </div>
            </div>
        ),
        // Opções do ImageResponse
        {
            ...size,
        }
    );
}
