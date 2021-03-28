module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        // スクリーンのブレイクポイント
        screens: {
            'mobile': '320px',
            'tablet': '520px',
            'laptop': '960px',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}