import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#FBDA10',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logo-baju.png',
    fullDecal: './black.png',
});

export default state;