module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    // specify other options here

    theme: {
        extend: {
            fontSize: {
                '3xs': '.5rem',
                xxs: '.65rem'
            },
            fontFamily: {
                pixelated: ['"Press Start 2P"', 'cursive'],
                play: ['Iceland', 'monospace']
            },
            colors: {
                superiority: 'var(--superiority)',
                corn: 'var(--corn)',
                grey: 'var(--grey)',
                green: 'var(--green)',
                mandarin: 'var(--mandarin)',
                violet: 'var(--violet)'
            },
            boxShadow: {
                superiority: '4px 5px var(--superiority)',
                mandarin: '4px 5px var(--mandarin)'
            }
        }
    }
};
